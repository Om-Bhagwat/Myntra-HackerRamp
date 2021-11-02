const express = require('express')


const path = require('path')
require('dotenv').config({path:path.resolve(__dirname, './dev.env') })
// const dotenv = require("dotenv").config();


require('./db/mongoose')
// const userRouter = require('./routers/user')

const authRoute = require("./routes/auth");
const dummyRoute = require("./routes/dummy");




const app = express()

app.use(express.json())
// app.use(userRouter)

app.use("/api/user", authRoute);
app.use("/api/dummy", dummyRoute);


module.exports = app
