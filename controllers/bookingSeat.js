import {body, validationResult } from 'express-validator'
import { MAX_RECORDS } from '../Global/constants.js'
import HttpStatusCode from '../exceptions/HttpStatusCode.js'
import { bookingSeatRepository } from '../repositories/index.js'

async function insertBookingSeat(req, res) {
    try {
        const bookingSeat = await bookingSeatRepository.insertBookingSeat(req.body)
        res.status(HttpStatusCode.INSERT_OK).json({
            message: 'Insert booking seat successfully',
            data: bookingSeat
        })
    } catch (exception) {
        res.status(HttpStatusCode.INTERNAL_SEVER_ERROR).json({
            message: 'Cannot insert booking seat: ' + exception,
            validationErrors: exception.validationErrors
        })
    }
}

async function getBookingSeatByCustomerId(req, res) {
    const customerId = req.params.customerId
    try {
        const bookingSeats = await bookingSeatRepository.getBookingSeatByCustomerId(customerId)
        res.status(HttpStatusCode.OK).json({
            message: 'Get detail booking seat successfully',
            data: bookingSeats,
        })
    } catch (exception) {
        res.status(HttpStatusCode.INTERNAL_SEVER_ERROR).json({
            message: exception.message,
        })
    }

    // try {
    //     let customerId = req.params.customerId
    //     let filteredRoutes = await bookingSeatRepository.getBookingSeatByCustomerId(customerId) 
    //     res.status(HttpStatusCode.OK).json({
    //         message: 'get booking seat successfully',
    //         data: filteredRoutes,
    //     })
    // } catch (exception) {
    //     res.status(HttpStatusCode.INTERNAL_SEVER_ERROR).json({
    //         message: exception.message,
    //     })
    // }
}

export default {
    insertBookingSeat,
    getBookingSeatByCustomerId,
}