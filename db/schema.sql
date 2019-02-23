CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
	id INTEGER auto_increment NOT NULL,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN default false,
    PRIMARY KEY (id)
);