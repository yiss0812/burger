create database burgers_db;
use burgers_db;
create table burgers(
    id auto_increment int,
    burger_name varchar(45),
    devoured boolean,
    PRIMARY KEY(id)
);
