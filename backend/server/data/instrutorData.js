const database = require('../infra/connection');

exports.getInstrutores = function () {
    return database.query("SELECT * FROM instrutor")
}

exports.getTelefoneInstrutores = function () {
    return database.query("select * FROM instrutor i inner join telefone_instrutor t on t.codigo_instrutor = i.codigo")
}