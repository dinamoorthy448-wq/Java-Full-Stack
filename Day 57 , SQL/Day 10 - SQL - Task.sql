-- DATABASE
CREATE DATABASE IF NOT EXISTS emp_stores;
USE emp_stores;

-- EMPLOYEES TABLE
CREATE TABLE IF NOT EXISTS employees (
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    salary DECIMAL(10,2),
    email VARCHAR(100)
);

-- PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(50),
    stock INT
);

-- ORDERS TABLE
CREATE TABLE IF NOT EXISTS orders (
    order_id INT PRIMARY KEY,
    product_id INT,
    quantity INT
);

-- USERS TABLE
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY,
    username VARCHAR(50),
    role VARCHAR(20)
);

-- 1. STORED PROCEDURE TO INSERT EMPLOYEE
DELIMITER //

CREATE PROCEDURE InsertEmployee(
    IN p_name VARCHAR(50),
    IN p_salary DECIMAL(10,2),
    IN p_email VARCHAR(100)
)
BEGIN
    INSERT INTO employees(name,salary,email)
    VALUES(p_name,p_salary,p_email);
END //

DELIMITER ;

-- CALL INSERT PROCEDURE
CALL InsertEmployee('Dinesh',30000,'dinesh@gmail.com');

-- 2. STORED PROCEDURE TO UPDATE SALARY
DELIMITER //

CREATE PROCEDURE UpdateSalary(
    IN p_id INT,
    IN p_salary DECIMAL(10,2)
)
BEGIN
    UPDATE employees
    SET salary = p_salary
    WHERE emp_id = p_id;
END //

DELIMITER ;

-- CALL UPDATE PROCEDURE
CALL UpdateSalary(1,45000);

-- 3. TRIGGER TO UPDATE STOCK AFTER ORDER
DELIMITER //

CREATE TRIGGER UpdateStock
AFTER INSERT ON orders
FOR EACH ROW
BEGIN
    UPDATE products
    SET stock = stock - NEW.quantity
    WHERE product_id = NEW.product_id;
END //

DELIMITER ;

-- 4. TRIGGER TO PREVENT DELETING LAST ADMIN
DELIMITER //

CREATE TRIGGER PreventLastAdminDelete
BEFORE DELETE ON users
FOR EACH ROW
BEGIN
    DECLARE admin_count INT;

    SELECT COUNT(*)
    INTO admin_count
    FROM users
    WHERE role='Admin';

    IF OLD.role='Admin' AND admin_count=1 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT='Cannot delete the last admin';
    END IF;
END //

DELIMITER ;

-- 5. STORED PROCEDURE TO FETCH EMPLOYEES
DELIMITER //

CREATE PROCEDURE GetEmployees()
BEGIN
    SELECT * FROM employees;
END //

DELIMITER ;

-- CALL FETCH PROCEDURE
CALL GetEmployees();

-- 6. DROP PROCEDURES AND TRIGGERS

DROP PROCEDURE IF EXISTS InsertEmployee;
DROP PROCEDURE IF EXISTS UpdateSalary;
DROP PROCEDURE IF EXISTS GetEmployees;

DROP TRIGGER IF EXISTS UpdateStock;
DROP TRIGGER IF EXISTS PreventLastAdminDelete;
