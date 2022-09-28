const express = require('express');
const router = express.Router();

const turmaService = require('../service/turmaService');

router.post('/turma', async function (req, res) {
    const dados = req.body
    turmaService.salvar(dados)
    res.send("SUCESSO");

});

module.exports = router;