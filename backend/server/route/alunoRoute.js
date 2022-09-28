const express = require('express');
const router = express.Router();

const alunoService = require('../service/alunoService');

router.get('/aluno', async function (req, res) {
    let json = await alunoService.getAlunos();
    res.json(json);

});

module.exports = router;