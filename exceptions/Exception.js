import { print, OutputType } from "../helpers/print.js"
export default class Exception extends Error {
    static WRONG_DB_USERNAME_PASSWORD = "Wrong database's username and password"
    static WRONG_DB_CONNECTION_STRING = "Wrong server name/connection string"
    static CANNOT_CONNECT_MONGODB = "Cannot connect to mongoDB"
    static USER_EXIT = "User already exists"
    static CANNOT_REGISTER_USER = "Can nor register user"
    static WRONG_EMAIL_AND_PASSWORD = "Wrong email or password"

    constructor(message, validationErrors={}){
        super(message)// call constructor of parent class(Error)
        print(message, OutputType.ERROR)
        this.validationErrors = validationErrors
    }
}