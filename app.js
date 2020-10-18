const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const funcionariosRoute = require('./src/routes/funcionariosRoutes')
const index = require('./src/routes/index')
app.use (bodyParser.json())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use("/", index)
app.use("/funcionarios", funcionariosRoute)


module.exports = app