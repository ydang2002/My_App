import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config() // must have
import connect from './database/database.js'
// authentication middleware
import checkToken from './authentication/auth.js'
import {
    usersRouter,
    studentRouter,
    routesRouter,
    bookingSeatRouter,
} from './routes/index.js'

const app = express()
app.use(checkToken) // shield, guard
app.use(express.json())// đọc body của đối tượng request
const port = process.env.PORT ?? 3000
// //routes
app.use('/users', usersRouter)
app.use('/students', studentRouter)
app.use('/routes', routesRouter)
app.use('/bookingSeat', bookingSeatRouter)

app.get('/', (req, res) => {
    res.send('response from root router haha')
})
app.listen(port, async () => {
    await connect()
    console.log(`listening on port : ${port}`)
})

