require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const piratasRoutes = require('./src/routes/piratas-routes.js')
const Connection = require('./src/config/db.js')

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/api', piratasRoutes)

const PORT = process.env.PORT
app.listen(PORT, () => {
    Connection.getConnection()
    console.log(`Server is running on port ${PORT}`)
})