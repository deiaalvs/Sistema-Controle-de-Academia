drop table if exists chamada;

create table chamada (
	codigo SERIAL PRIMARY KEY,
    codigo_aluno INTEGER,
	codigo_turma INTEGER,
    data DATE NOT NULL,
    presente BIT NOT NULL,
    FOREIGN KEY (codigo_aluno, codigo_turma) REFERENCES matricula(codigo_aluno, codigo_turma)
);

select * from chamada;