drop table if exists Matricula;

create table Matricula (
	codigo_aluno INTEGER REFERENCES Aluno(cod_matricula),
	codigo_turma INTEGER REFERENCES Turma(codigo),
	PRIMARY KEY (codigo_aluno, codigo_turma),
	data_inclusao TIMESTAMP NOT NULL,
	data_alteracao TIMESTAMP,
	status VARCHAR(10) NOT NULL CHECK(status = 'ATIVO' OR status = 'TRANCADO' OR status = 'CANCELADO' OR status = 'REATIVADO')
);

select * from Matricula