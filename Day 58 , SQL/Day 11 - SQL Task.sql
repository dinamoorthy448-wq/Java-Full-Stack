CREATE DATABASE companydb;
USE companydb;

CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    dept_id INT,
    manager_id INT,
    salary DECIMAL(10,2)
);

CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(50)
);

CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(50),
    price DECIMAL(10,2)
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    product_id INT,
    total_amount DECIMAL(10,2)
);

INSERT INTO employees VALUES
(1,'Arun',101,NULL,50000),
(2,'Priya',101,1,60000),
(3,'Rahul',102,1,45000),
(4,'Meena',102,2,70000),
(5,'Kiran',103,2,80000);

INSERT INTO customers VALUES
(1,'Dinesh'),
(2,'Ravi'),
(3,'Kumar');

INSERT INTO products VALUES
(101,'Laptop',50000),
(102,'Mobile',20000),
(103,'Tablet',30000);

INSERT INTO orders VALUES
(1,1,101,50000),
(2,1,102,20000),
(3,1,103,30000),
(4,2,102,20000),
(5,2,103,30000),
(6,3,101,50000);

-- 1. Employees whose salary is higher than
-- department average

SELECT emp_id, emp_name, salary
FROM employees e
WHERE salary >
(
    SELECT AVG(salary)
    FROM employees
    WHERE dept_id = e.dept_id
);
-- 2. Customers who placed more than 2 orders

SELECT *
FROM customers
WHERE customer_id IN
(
    SELECT customer_id
    FROM orders
    GROUP BY customer_id
    HAVING COUNT(*) > 2
);

-- 3. Highest-priced product using subquery

SELECT *
FROM products
WHERE price =
(
    SELECT MAX(price)
    FROM products
);

-- 4. Total order value per customer

SELECT customer_id,
(
    SELECT SUM(total_amount)
    FROM orders o
    WHERE o.customer_id = c.customer_id
) AS total_order_value
FROM customers c;

-- 5. Employees earning more than their manager

SELECT e.emp_id,
       e.emp_name,
       e.salary
FROM employees e
WHERE e.salary >
(
    SELECT m.salary
    FROM employees m
    WHERE m.emp_id = e.manager_id
);
-- 6. Check if product exists in orders using EXISTS

SELECT *
FROM products p
WHERE EXISTS
(
    SELECT 1
    FROM orders o
    WHERE o.product_id = p.product_id
);
