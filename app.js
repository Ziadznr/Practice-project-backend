// Basic import
const express = require('express')
const router = require('./src/routes/api')
const app = new express();
const bodyParser = require('body-parser')

//security middleware
const rateLimit = require("express-rate-limit")
const helmet = require('helmet')
const mongoSenitize = require('express-mongo-sanitize')
const hpp = require('hpp')
const cors = require('cors')

//Database
const mongoose = require('mongoose')

// Security middleware implement
app.use(cors())
app.use(helmet())
app.use(mongoSenitize())
app.use(hpp())

//Body Parser implement
app.use(bodyParser.json())

//Request RateLimit implement
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 3000
})
app.use(limiter)