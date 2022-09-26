const database = require('../infra/connection');

exports.getAtividade = function () {
    return database.query("SELECT * FROM atividade")
}
