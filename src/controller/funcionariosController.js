//importar dados
//como vai ser usado esses dados
//exportar dados

const funcionarios = require('../model/funcionarios.json')
//const fs = require('fs')
const fs = require('fs')
const query = require('query-string')

const getAll = (req, res) => {
    console.log(req.url)
    res.status(200).send(funcionarios)
}

const getById = (req, res) => {
const id = req.params.id
res.status(200).send(funcionarios.find((funcionario) => funcionario.id == id ))
}

const postFuncionarios = (req, res) => {
    console.log(res.body)
const {id, nome, idade, cpf, rg, data_nasc, sexo , email, senha, cep, endereco, numero, bairro, cidade, estado, telefone_fixo, celular, altura, peso, tipo_sanguineo} = req.body
funcionarios.push ({ id, nome, idade, cpf, rg, data_nasc, sexo , email, senha, cep, endereco, numero, bairro, cidade, estado, telefone_fixo, celular, altura, peso, tipo_sanguineo})
fs.writeFile("./src/model/funcionarios.json", JSON.stringify(funcionarios), 'utf8', function(err){
    if(err){
      return res.status(424).send({message: err})
    }
  console.log("Arquivo atualizado com sucesso!")
  })
    res.status(200).send(funcionarios)
  }
 
const getByEmail = (req, res) => {
  const email = req.query.email
  console.log(res.status)
  if (senha){
  const emailDoFuncio = funcionarios.filter(funcionario => funcionario.email.includes(email))
  res.status(200).send(emailDoFuncio)
  
}
else{
  res.status(500).send({message: "deu erro minha linda"})
 }
}

  /*const deleteFuncionarios = (req, res) => {
    const nome = req.query.nome
    const deletePorNome = funcionarios.find(funcionario => funcionario.nome == nome)
    for (i = 0; i < deletePorNome.length; i++){
      const index = funcionarios.indexOf(deletePorNome[i])
      funcionarios.splice(index, 1)
    }

fs.writeFile("./src/model/funcionarios.json", JSON.stringify(funcionarios), 'utf8', function (err) {
  if (err) {
    return res.status(424).send( "apagou n hein" );
  }
  else{
  console.log("Arquivo atualizado com sucesso!");}
  res.status(200).send(funcionarios);
});

res.status(200).send(funcionarios);
}
*/
module.exports = {
    getAll,
    getById,
    postFuncionarios,
    getByEmail
   // deleteFuncionarios
}