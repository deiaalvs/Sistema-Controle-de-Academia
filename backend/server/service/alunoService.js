const data = require('../data/alunoData')

exports.getAlunos = function () {
    return data.getAlunos();
}

exports.salvar = function (aluno) {
    if (dados.nome === undefined ||
        dados.numero_celular === undefined ||
        dados.data_nascimento === undefined ||
        dados.altura === undefined ||
        dados.peso === undefined ||
        dados.nome === null ||
        dados.numero_celular === null ||
        dados.data_nascimento === null ||
        dados.altura === null ||
        dados.peso === null
    ) {
        throw new Error ("Dados inválidos")
    } else {
        return data.salvar(aluno);
    }
    
}

exports.alterar = function (aluno) {
    return data.alterar(aluno);
    
}

exports.selectAlunosByIdTurma = async function (idTurma) {
    const alunos = await data.selectAlunosByIdTurma(idTurma)

    if (alunos.length === 0) {
        throw new Error("Não existem alunos para essa turma!")
    }

    return alunos
}