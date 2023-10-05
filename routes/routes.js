import express from 'express'
import { routesController } from '../controllers/index.js'
// import {
//     routesController,
// } from '../controllers/index.js'

const router = express.Router()

router.get('/', routesController.getAllRoutes)

router.get('/:id', routesController.getRoutesById)

router.patch('/', routesController.updateRoutes)

router.post('/', routesController.insertRoutes)

export default router