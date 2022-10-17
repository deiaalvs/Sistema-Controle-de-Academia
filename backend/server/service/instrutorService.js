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

exports.selectInstrutorByUserAndPassword = async function (dadosLoginInstrutor) {
    const instrutor = await data.selectInstrutorByUserAndPassword(dadosLoginInstrutor)

    if (instrutor.length === 0) {
        throw new Error("Usuário não permitido!")
    }

    return instrutor
}