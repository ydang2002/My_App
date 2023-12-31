import express from 'express'
import { bookingSeatController } from '../controllers/index.js'

const router = express.Router()

router.post('/', bookingSeatController.insertBookingSeat)
router.get('/:customerId', bookingSeatController.getBookingSeatByCustomerId);
router.get('/bookingSeatId/:_id', bookingSeatController.getBookingSeatId);

export default router