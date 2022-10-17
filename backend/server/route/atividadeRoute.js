const express = require('express');
const router = express.Router();

const atividadeService = require('../service/atividadeService');

router.get('/atividade', async function (req, res) {
    let json = await atividadeService.getAtividade();
    res.json(json);

});

router.post('/atividade', async function (req, res) {
    const dados = req.body
    atividadeService.salvar(dados)
    res.send("SUCESSO");

});

router.put('/atividade/id_atividade', async function (req, res) {
    const dados = req.body
    atividadeService.alterar(dados)
    res.send("DADOS ALTERADOS");

});


module.exports = router;