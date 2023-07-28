import express from 'express'
import {
    studentController,
} from '../controllers/index.js'

const router = express.Router()

router.get('/', studentController.getAllStudents)

//get student by id 
router.get('/:id',studentController.getStudentById)
// put or patch
router.patch('/', studentController.updateStudent)
router.post('/', studentController.insertStudent)

// router.post('/generateFakerStudents', studentController.generateFakerStudents) //create 100 students
export default router