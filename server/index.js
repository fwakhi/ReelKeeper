import express from 'express'
import cors from 'cors'
import db from './config/db.js'
import userRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/users', userRoutes)

try {
    db.authenticate()
    console.log("Connected to DB")
} catch (error) {
    console.error("Error connecting to DB: ", error)
}

app.listen(8000, () => {
    console.log("Server UP running in http://localhost:8000/")
})
