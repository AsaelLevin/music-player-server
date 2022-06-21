require("dotenv").config()
const { Router } = require('express');

const express = require('express'),
app =express()
const port= process.env.PORT || 3000;

const router= require('./routers')

app.use(express.json())
app.use(require('cors')())

app.use("/api", Router)

app.listen(port, ()=> console.log(`Server is run! ${port}`))
require('./').connect()