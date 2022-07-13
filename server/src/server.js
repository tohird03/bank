require("dotenv").config()
const express = require('express')
const cors = require('cors')
const app = express()
const { router } = require('./modules/index')
const PORT = process.env.PORT || 9000
const cookieParser = require('cookie-parser')
app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(router)
app.use('/*', (_, res) => res.status(404).send("Not page!!!"))

app.listen(9000, () => {
    console.log("APP LISTEN " + PORT + " PORT" );
})
