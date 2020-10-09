//importar controller
//rodar o get, post e delete

const controller = require('../controller/funcionariosController')
const express = require('express')
const router = express.Router

router.get('/', controller.getAll)