CREATE DATABASE shopDB;
USE shopDB;

CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(50),
    city VARCHAR(50)
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    product_name VARCHAR(50),
    amount DECIMAL(10,2),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
INSERT INTO customers VALUES
(1, 'Dinesh', 'Chennai'),
(2, 'Arun', 'Madurai'),
(3, 'Priya', 'Coimbatore'),
(4, 'Karthik', 'Salem'),
(5, 'Divya', 'Trichy');

INSERT INTO orders VALUES
(101, 1, 'Laptop', 50000),
(102, 2, 'Mobile', 20000),
(103, 1, 'Keyboard', 1500),
(104, 3, 'Mouse', 800),
(105, 5, 'Monitor', 12000);
SELECT
    c.customer_name,
    o.order_id,
    o.product_name,
    o.amount
FROM customers c
INNER JOIN orders o
ON c.customer_id = o.customer_id;