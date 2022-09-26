drop table if exists telefone_instrutor;

create table telefone_instrutor (
	id_telefone SERIAL PRIMARY KEY,
	data_inclusao TIMESTAMP NOT NULL,
	data_alteracao TIMESTAMP,
	numero VARCHAR(11) NOT NULL,
	tipo VARCHAR(45),
	codigo_instrutor INTEGER REFERENCES instrutor(codigo)
);

insert into telefone_instrutor (data_inclusao, numero, tipo, codigo_instrutor)
values

(now(), '62991919191', 'celular', 1);

select * from instrutor;

select * FROM instrutor i inner join telefone_instrutor t on t.codigo_instrutor = i.codigo