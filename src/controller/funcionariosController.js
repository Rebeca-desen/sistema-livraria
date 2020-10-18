//importar dados
//como vai ser usado esses dados
//exportar dados

const funcionarios = require('../model/funcionarios.json')
//const fs = require('fs')

const getAll = (req, res) => {
    console.log(req.url)
    res.status(200).send(funcionarios)
}

const getById = (req, res) => {
const id = req.params.id
res.status(200).send(funcionarios.find((funcionario) => funcionario.id == id ))
}

module.exports = {
    getAll,
    getById
}