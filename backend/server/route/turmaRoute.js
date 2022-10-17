const express = require('express');
const router = express.Router();

const turmaService = require('../service/turmaService');

router.post('/turma', async function (req, res) {
    const dados = req.body
    try {
        turmaService.salvar(dados)
        res.send("SUCESSO");
    } catch (error) {
        res.status(422).send(error.message)
    }
    

});

router.put('/turma/codigo', async function (req, res) {
    const dados = req.body
    turmaService.alterar(dados)
    res.send("DADOS ALTERADOS");    

});

module.exports = router;