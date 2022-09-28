drop table if exists turma;

create table turma (
	codigo SERIAL PRIMARY KEY,
	data_inclusao TIMESTAMP NOT NULL,
	data_alteracao TIMESTAMP,
	hora_inicio TIME NOT NULL,
	hora_fim TIME NOT NULL,
	data_inicio DATE NOT NULL,
	data_fim DATE NOT NULL,
	instrutor INTEGER REFERENCES instrutor(codigo) NOT NULL,
	atividade INTEGER REFERENCES atividade(id_atividade) NOT NULL
);

select * from turma;