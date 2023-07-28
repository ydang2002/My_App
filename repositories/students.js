import student from "../controllers/student.js"
import Exception from "../exceptions/Exception.js"
import { print } from "../helpers/print.js"
import { Student } from "../models/index.js"
import { faker } from '@faker-js/faker'

const getAllStudents = async ({
    page,
    size,
    searchString,
}) => {
    // aggregate data for all students
    page = parseInt(page)
    size = parseInt(size)
    //aggregate data for all student
    let filteredStudents = await Student.aggregate([
        {
            $match: {
                $or: [
                    {
                        name: {$regex: `.*${searchString}.*`, $options: 'i'} //ignore case
                    },
                    {
                        email: {$regex: `.*${searchString}.*`, $options: 'i'} //ignore case
                    },
                    {
                        address: {$regex: `.*${searchString}.*`, $options: 'i'} //ignore case
                    }
                ]
            }
        },
        {$skip: (page - 1) * size},
        {$limit: size},
    ])
    return filteredStudents
}
const getStudentById = async (studentId) => {
    const student = await Student.findById(studentId)
    if(!student) {
        throw new Exception('Cannot find Student with id' + studentId)
    }
    return student
}
const insertStudent = async ({
    name,
    email,
    languages,
    gender,
    phoneNumber,
    address
}) => {
    // console.log('insert student')
    try {
        debugger
        const student = await Student.create({
            name,
            email,
            languages,
            gender,
            phoneNumber,
            address
        })
        return student
    } catch (exception) {
        if (!!exception.errors) {
            //error from validations
            throw new Exception('Input error', exception.errors)
        }
        debugger
    }
    debugger
}

const updateStudent = async ({
    id,
    name,
    email,
    languages,
    gender,
    phoneNumber,
    address
}) => {
    const student = await Student.findById(id)
    debugger
    student.name = name ?? student.name
    student.email = email ?? student.email
    student.languages = languages ?? student.languages
    student.gender = gender ?? student.gender
    student.phoneNumber = phoneNumber ?? student.phoneNumber
    student.address = address ?? student.address
    await student.save()
    return student
}

async function generateFakerStudents() {
    [...Array(100).keys()].forEach(async (index) => {
        let fakeStudent = {
            name: `${faker.name.fullName()}-fake`,
            email: faker.internet.email(),
            language: [
                faker.helpers.arrayElement(['English', 'Vietnamese']),
                faker.helpers.arrayElement(['Japanese', 'Korean'])
            ],
            gender: faker.helpers.arrayElement(['Male', 'Female']),
            phoneNumber: faker.phone.number(),
            address: faker.address.streetAddress()
        }
        debugger
        await Student.create(fakeStudent)
        print(`Inserted student with name ${fakeStudent.name}`)
    })
}

export default {
    getAllStudents,
    insertStudent,
    generateFakerStudents,
    getStudentById,
    updateStudent,
}