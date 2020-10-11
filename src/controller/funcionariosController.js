//importar dados
//como vai ser usado esses dados
//exportar dados

const funcionarios = require('../model/funcionarios.json')
//const fs = require('fs')

const getAll = (req, res) => {
    console.log(req.url)
    res.staus(200).send(funcionarios)
}

module.exports = {
    getAll
}
