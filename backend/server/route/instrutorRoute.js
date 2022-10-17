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

router.post('/instrutor', async function (req, res) {
    const dados = req.body
    instrutorService.salvar(dados)
    res.send("SUCESSO");

});

router.put('/instrutor/codigo', async function (req, res) {
    const dados = req.body
    instrutorService.alterar(dados)
    res.send("DADOS ALTERADOS");

});

router.post('/instrutor/login', async function (req, res) {
    const dados = req.body
    try {
        let instrutor = await instrutorService.selectInstrutorByUserAndPassword(dados)
        res.json(instrutor)
    } catch (e) {
        res.status(401).send(e.message)
    }
    

});

module.exports = router;