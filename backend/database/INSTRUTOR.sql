drop table if exists instrutor;

create table instrutor (
	codigo SERIAL PRIMARY KEY,
	usuario_login VARCHAR(100) NOT NULL UNIQUE,
	usuario_senha VARCHAR(100) NOT NULL,
	data_inclusao TIMESTAMP NOT NULL,
	data_alteracao TIMESTAMP,
	rg INTEGER NOT NULL,
	nome VARCHAR(45) NOT NULL,
	data_nascimento DATE NOT NULL,
	titulacao INTEGER NOT NULL,
	status BOOLEAN NOT NULL
);

insert into instrutor (data_inclusao, nome, rg, data_nascimento, titulacao, status)
values

(now(), 'Maria', '5733440', '17/12/1993', 5, true);

select * from instrutor