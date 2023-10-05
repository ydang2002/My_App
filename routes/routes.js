import express from 'express'
import { routesController } from '../controllers/index.js'
// import {
//     routesController,
// } from '../controllers/index.js'

const router = express.Router()

router.get('/f', routesController.getAllRoutes)

router.get('/:origin/:destination/:originDate', routesController.getRoutesProvince)

router.get('/:id', routesController.getRoutesById)

router.patch('/', routesController.updateRoutes)

router.post('/', routesController.insertRoutes)

export default router