CREATE DATABASE companydb;
USE companydb;

CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    dept_id INT,
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
    order_amount DECIMAL(10,2)
);

INSERT INTO employees VALUES
(1,'Arun',101,50000),
(2,'Priya',101,60000),
(3,'Rahul',102,45000),
(4,'Meena',102,70000),
(5,'Kiran',103,80000);

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
(3,2,103,30000),
(4,3,102,20000);

-- 1. Employees with salary greater than average salary

SELECT *
FROM employees
WHERE salary >
(
    SELECT AVG(salary)
    FROM employees
);

-- 2. Products with price higher than the cheapest order

SELECT *
FROM products
WHERE price >
(
    SELECT MIN(order_amount)
    FROM orders
);

-- 3. Customers with orders (Subquery in WHERE)

SELECT *
FROM customers
WHERE customer_id IN
(
    SELECT customer_id
    FROM orders
);

-- 4. Show order counts using subquery in SELECT

SELECT customer_id,
       customer_name,
       (
         SELECT COUNT(*)
         FROM orders o
         WHERE o.customer_id = c.customer_id
       ) AS order_count
FROM customers c;

-- 5. Highest salary per department (Correlated Subquery)

SELECT *
FROM employees e
WHERE salary =
(
    SELECT MAX(salary)
    FROM employees
    WHERE dept_id = e.dept_id
);

-- 6. Check if a product exists in orders (EXISTS)

SELECT *
FROM products p
WHERE EXISTS
(
    SELECT 1
    FROM orders o
    WHERE o.product_id = p.product_id
);
