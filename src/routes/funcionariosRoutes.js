//importar controller
//rodar o get, post e delete

const express = require('express')
const router = express.Router()
const controller = require('../controller/funcionariosController')

router.get("/", controller.getAll)
router.get("/:id", controller.getById)
module.exports = router