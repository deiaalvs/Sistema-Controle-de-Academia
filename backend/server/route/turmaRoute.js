const express = require('express');
const router = express.Router();

const turmaService = require('../service/turmaService');

router.post('/turma', async function (req, res) {
    const dados = req.body
    try {
        await turmaService.salvar(dados)
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

router.get('/turma/instrutor/:id', async function (req, res) {
    const id = req.params.id
    try{
        const turmas = await turmaService.selectTurmasByInstrutorId(id)
        res.json(turmas)
    } catch (e) {
        res.status(422).send(e.message)
    }
    

});

module.exports = router;