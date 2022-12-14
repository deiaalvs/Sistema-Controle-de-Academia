const database = require('../infra/connection');

exports.getAlunos = function () {
    return database.query("SELECT * FROM aluno")
}

exports.salvar = function (dados) {
    return database.none(
        "INSERT INTO aluno (data_inclusao, cod_matricula, nome, numero_celular, data_nascimento, altura, peso, status) VALUES (now(), $2, $3, $4, $5, $6, $7, $8)",
        [aluno.data_inclusao, aluno.cod_matricula, aluno.nome, aluno.numero_celular, aluno.data_nascimento, aluno.altura, aluno.peso, aluno.status]
    )
}

exports.selectAlunosByIdTurma = async function (idTurma) {
    return database.query(`
        SELECT *
            FROM aluno a
            INNER JOIN matricula m ON m.codigo_aluno = a.cod_matricula
            INNER JOIN turma t ON t.codigo = m.codigo_turma
        WHERE
            t.codigo = $1
    `, [idTurma.codigo])
}