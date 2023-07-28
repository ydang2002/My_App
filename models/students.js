import { ObjectId, Schema } from "mongoose"
import mongoose from "mongoose"
import isEmail from "validator/lib/isEmail.js"

const Student = mongoose.model('Student',
    new Schema({
        id: { type: ObjectId },
        name: {
            type: String,
            required: true,
            validate: {
                validator: (value) => value.length > 3,
                message: 'Username must be at least 3 character'
            }
        },
        email: {
            type: String,
            validate: {
                validator: (value) => isEmail,
                message: 'Email is incorrect format'
            }
        },
        languages: {
            type: [String],
        },
        gender: {
            type: String,
            enum: {
                values: ['Male', 'Female'],
                message: '{VALUE} is not supported'
            },
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
            validator: (phoneNumber) => phoneNumber.length > 5 
                                && phoneNumber <= 20,
            message: 'Phone number must be length character, max 20'
        },
        address: {
            type: String,
            required: false,
        },
    })
)
export default Student