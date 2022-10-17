const data = require('../data/atividadeData')

exports.getAtividade = function () {
    return data.getAtividade();
}

exports.salvar = function (atividade) {
    return data.salvar(atividade);
}

exports.alterar = function (atividade) {
    return data.alterar(atividade);
}