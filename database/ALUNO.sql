drop table if exists aluno;

create table aluno (
	cod_matricula SERIAL PRIMARY KEY,
	data_inclusao TIMESTAMP NOT NULL,
	data_alteracao TIMESTAMP,
	nome VARCHAR(45) NOT NULL,
	endereco VARCHAR(100),
	numero_celular VARCHAR(11) NOT NULL,
	data_nascimento DATE NOT NULL,
	altura REAL NOT NULL,
	peso INTEGER NOT NULL,
	status BOOLEAN NOT NULL
);

insert into aluno (data_inclusao, nome, endereco, numero_celular, data_nascimento, altura, peso, status)
values

(now(), 'Andreia Costa', 'Avenida T10', '62999999999', '17/08/1991', '1.65', '65', true);

select * from aluno