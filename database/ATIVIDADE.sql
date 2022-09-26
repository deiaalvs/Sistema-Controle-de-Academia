drop table if exists atividade;

create table atividade (
	id_atividade SERIAL PRIMARY KEY,
	nome_atividade VARCHAR(80) NOT NULL,
	data_inclusao TIMESTAMP NOT NULL,
	data_alteracao TIMESTAMP,
	status BOOLEAN NOT NULL
);

insert into atividade (data_inclusao, nome_atividade, status)
values

(now(), 'musculacao', true);

select * from atividade;