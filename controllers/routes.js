import { body, validationResult } from 'express-validator'
import { MAX_RECORDS } from '../Global/constants.js'
import HttpStatusCode from '../exceptions/HttpStatusCode.js'
import { routesRepository } from '../repositories/index.js'

async function getAllRoutes(req, res) {
    try {
        let filteredRoutes = await routesRepository.getAllRoutes()
        res.status(HttpStatusCode.OK).json({
            message: 'get routes successfully',
            data: filteredRoutes,
        })
    } catch (exception) {
        res.status(HttpStatusCode.INTERNAL_SEVER_ERROR).json({
            message: exception.message,
        })
    }
}

async function getRoutesProvince(req, res) { // Thêm hàm này
    try {
        let origin = req.params.origin // Lấy tham số origin từ req.params
        let destination = req.params.destination // Lấy tham số destination từ req.params
        let originDate = req.params.originDate // Lấy tham số originDate từ req.params

        let filteredRoutes = await routesRepository.getRoutesProvince(origin, destination, originDate) // Gọi hàm getRoutesByParams từ repository
        res.status(HttpStatusCode.OK).json({
            message: 'get routes by params successfully',
            data: filteredRoutes,
        })
    } catch (exception) {
        res.status(HttpStatusCode.INTERNAL_SEVER_ERROR).json({
            message: exception.message,
        })
    }
}

async function getRoutesById(req, res) {

}

async function updateRoutes(req, res) {
    const {
        id,
        origin,
        destination,
        distance,
        duration,
        price,
        trips,
        carriers
    } = req.body
    try {
        const route = await routesRepository.updateRoutes(req.body)
        res.status(HttpStatusCode.OK).json({
            message: 'update route successfully',
            data: route,
        })
    } catch (exception) {
        res.status(HttpStatusCode.INTERNAL_SEVER_ERROR).json({
            message: exception.message,
        })
    }

}

async function insertRoutes(req, res) {
    try {
        const routes = await routesRepository.insertRoutes(req.body)
        res.status(HttpStatusCode.INSERT_OK).json({
            message: 'Insert routes successfully',
            data: routes
        })
    } catch (exception) {
        res.status(HttpStatusCode.INTERNAL_SEVER_ERROR).json({
            message: 'Cannot insert routes: ' + exception,
            validationErrors: exception.validationErrors
        })
    }
}

export default {
    getAllRoutes,
    getRoutesById,
    updateRoutes,
    insertRoutes,
    getRoutesProvince
}