const database = require('../infra/connection');

exports.getInstrutores = function () {
    return database.query("SELECT * FROM instrutor")
}

exports.getTelefoneInstrutores = function () {
    return database.query("select * FROM instrutor i inner join telefone_instrutor t on t.codigo_instrutor = i.codigo")
}

exports.selectInstrutorByUserAndPassword = function (dadosLoginInstrutor) {
    return database.query(`
        SELECT * FROM instrutor i
            WHERE
                i.usuario_login = $1 AND usuario_senha = MD5($2)
    `, [dadosLoginInstrutor.usuario_nome, dadosLoginInstrutor.usuario_senha])
}