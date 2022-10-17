const data = require('../data/instrutorData')

exports.getInstrutores = function () {
    return data.getInstrutores();
}

exports.getTelefoneInstrutores = function () {
    return data.getTelefoneInstrutores();
}

exports.salvar = function (instrutor) {
    return data.salvar(instrutor);
}

exports.alterar = function (instrutor) {
    return data.alterar(instrutor);
}
