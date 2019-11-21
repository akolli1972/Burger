DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
    id int NOT NULL
    AUTO_INCREMENT,
	burger_name VARCHAR
    (100) not null,
	devoured BOOLEAN default false,
    PRIMARY KEY
    (id)
);