const express = require('express')
const server = express()
const port = 8080

server.use(express.json())
server.use('/', require('./route/alunoRoute'))
server.use('/', require('./route/instrutorRoute'))
server.use('/', require('./route/atividadeRoute'))
server.use('/', require('./route/turmaRoute'))

server.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
})