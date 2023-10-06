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

export default {
    insertBookingSeat,
}