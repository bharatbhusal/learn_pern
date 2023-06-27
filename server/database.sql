-- Hosted at http://localhost:5001/todos

-- To create database
CREATE DATABASE perntodo;

-- To create table inside database
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

-- For get query
SELECT * FROM todo;
SELECT * FROM todo WHERE todo_id = 5;

-- For post query
INSERT INTO todo (description) VALUES ('Hi there, how are you?');

-- For put query
UPDATE INTO todo SET description = 'changed value' WHERE todo_id = 4;

-- For delete query
DELETE FROM todo WHERE todo_id = 5;
