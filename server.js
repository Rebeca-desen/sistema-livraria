const app = require('./app')
const port = 9080

app.listen (port, () => {
    console.log(`app rodando na porta ${port}`)
})
