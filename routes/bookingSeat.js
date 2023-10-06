import express from 'express'
import { bookingSeatController } from '../controllers/index.js'

const router = express.Router()

router.post('/', bookingSeatController.insertBookingSeat)

export default router