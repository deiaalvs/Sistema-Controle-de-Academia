const express = require('express');
const router = express.Router();

const alunoService = require('../service/alunoService');

router.get('/aluno', async function (req, res) {
    let json = await alunoService.getAlunos();
    res.json(json);

});

router.post('/aluno', async function (req, res) {
    const dados = req.body
    try {
        alunoService.salvar(dados)
        res.send("SUCESSO");
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.put('/aluno/cod_matricula', async function (req, res) {
    const dados = req.body
    alunoService.alterar(dados)
    res.send("DADOS ALTERADOS");

});

module.exports = router;