const database = require('../infra/connection');

exports.getAlunos = function () {
    return database.query("SELECT * FROM aluno")
}