import mongoose from "mongoose";
import { print, OutputType } from "../helpers/print.js";
import Exception from "../exceptions/Exception.js";
mongoose.set('strictQuery', true)
async function connect() {
    try {
        let connection = await mongoose.connect(process.env.MONGO_URI)
        print('connect mongoose successful', OutputType.SUCCESS)
        return connection
    } catch (error) {
        //let errorMessage = error.code
        const { code } = error
        if (error.code == 8000) {
            throw new Exception(Exception.WRONG_DB_USERNAME_PASSWORD)
        } else if (code == 'ENODATA') {
            
            throw new Exception(Exception.WRONG_DB_CONNECTION_STRING)
        }
        throw new Exception(Exception.CANNOT_CONNECT_MONGODB)
    }
}

export default connect
