const database = require('../infra/connection');

exports.salvar = function (turma) {
    return database.none(
        "INSERT INTO turma (data_inclusao, hora_inicio, hora_fim, data_inicio, data_fim, instrutor, atividade) VALUES (now(), $1, $2, $3, $4, $5, $6)",
        [turma.hora_inicio, turma.hora_fim, turma.data_inicio, turma.data_fim, turma.instrutor, turma.atividade]
    )
}

exports.selectInstrutorByHoraInicioHoraFim = function(turma) {
    return database.query(
        `
        SELECT * FROM
        turma t
        WHERE
            t.hora_inicio = $1 AND hora_fim = $2 AND t.instrutor = $3`,
        [turma.hora_inicio, turma.data_fim, turma.instrutor]
    )
}