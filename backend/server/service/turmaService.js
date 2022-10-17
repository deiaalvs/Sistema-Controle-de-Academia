const data = require('../data/turmaData')

exports.getTurma = function () {
    return data.getTurma();
}

exports.salvar = async function (turma) {
    const instrutor = await data.selectInstrutorByHoraInicioHoraFim(turma)
    if (instrutor) {
        throw new Error("Ja existe turma com este instrutor, para o horário informado!")
    }
    return data.salvar(turma);
}

exports.alterar = async function (turma) {
    return data.alterar(turma);
}