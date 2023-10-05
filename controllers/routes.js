import {body, validationResult } from 'express-validator'
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

async function getRoutesById(req, res) {

}

async function updateRoutes(req, res) {

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
    insertRoutes
}