const express = require('express');
const router = express.Router();

const instrutorService = require('../service/instrutorService');

router.get('/instrutor', async function (req, res) {
    let json = await instrutorService.getInstrutores();
    res.json(json);

});

router.get('/instrutor/telefones', async function (req, res) {
    let json = await instrutorService.getTelefoneInstrutores();
    res.json(json);

});

module.exports = router;