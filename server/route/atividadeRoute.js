const express = require('express');
const router = express.Router();

const atividadeService = require('../service/atividadeService');

router.get('/atividade', async function (req, res) {
    let json = await atividadeService.getAtividade();
    res.json(json);

});

module.exports = router;