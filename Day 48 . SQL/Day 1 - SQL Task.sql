CREATE DATABASE schoolDB;
USE schoolDB;

CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    grade VARCHAR(10)
);

INSERT INTO students (id, name, age, grade)
VALUES
(1, 'Arun', 18, 'A'),
(2, 'Bala', 19, 'B'),
(3, 'Charan', 17, 'A'),
(4, 'Divya', 18, 'C'),
(5, 'Esha', 19, 'B');

SELECT * FROM students;

DROP DATABASE schoolDB;