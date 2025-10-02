const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const piratasRoutes = require('./src/routes/piratas-routes.js')
const { handleError } = require('./src/middlewares/error-middleware.js')

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(piratasRoutes)
app.use(handleError)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})  
require('dotenv').config()