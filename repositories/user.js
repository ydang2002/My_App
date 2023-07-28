import Exception from '../exceptions/Exception.js'
import { print, OutputType } from '../helpers/print.js'
import { User } from '../models/index.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const login = async ({ email, password }) => {
    //console.log('login user in user repository', OutputType.INFORMATION)
    let existingUser = await User.findOne({ email }).exec()
    if (existingUser) {
        // not encrypt password
        let isMatch = await bcrypt.compare(password, existingUser.password)
        if (!!isMatch) { // isMatch == true
            // create json web token
            let token = jwt.sign({
                data: existingUser
            },
                process.env.JWT_SECRET, {
                // expiresIn: '60', // 1 minute
                expiresIn: '10 days'
            }
            )
            // clone an add more properties
            return {
                ...existingUser.toObject(),
                password: "not show",
                token: token
            }
        } else {
            throw new Exception(Exception.WRONG_EMAIL_AND_PASSWORD)
        }
    } else {
        throw new Exception(Exception.WRONG_EMAIL_AND_PASSWORD)
    }
}

const register = async ({
    name,
    email,
    password,
    phoneNumber,
    address
}) => {
    //validation already done
    debugger
    const existingUser = await User.findOne({ email }).exec()
    if (!!existingUser) {//check not null
        throw new Exception(Exception.USER_EXIT)
    }
    //encrypt password, use bcrypt
    //use for login
    // const isMatched = await bcrypt.compare(password, existingUser.password)
    // if(isMatched) {

    // }
    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS))
    //insert db
    const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        phoneNumber,
        address
    })
    return {
        ...newUser._doc,
        password: 'Not show'
    }
    // console.log('register user with: name: '
    //     + name + 'email: ' + email + 'password: '
    //     + password + 'phone: ' + phoneNumber + 'address: ' + address, OutputType.INFORMATION)
}

export default {
    login,
    register,
}