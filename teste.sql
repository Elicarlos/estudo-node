create table usuarios (
    nome varchar(50),
    email varchar(100),
    idade int 
);


insert into usuarios (nome, email, idade) values ('Elicarlos', 'elicarlosantos_@hotmail.com', 18);
insert into usuarios (nome, email, idade) values ('leydiane', 'elicarlosantos_@hotmail.com', 18);
insert into usuarios (nome, email, idade) values ('Isaac', 'elicarlosantos_@hotmail.com', 18);
insert into usuarios (nome, email, idade) values ('Isaac', 'elicarlosantos_@hotmail.com', 08);


delete from usuarios where nome = "Isaac" and idade < 18;

update usuarios set nome = "Nome teste" where nome = "Elicarlos"