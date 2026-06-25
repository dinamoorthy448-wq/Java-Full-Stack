CREATE DATABASE salesdb;
USE salesdb;

CREATE TABLE sales (
    id INT PRIMARY KEY,
    product VARCHAR(50),
    amount DECIMAL(10,2)
);

INSERT INTO sales VALUES
(1,'Laptop',50000),
(2,'Mobile',20000),
(3,'Tablet',30000),
(4,'Headphone',20000),
(5,'Monitor',40000);

-- 1. Display Sales Table

SELECT * FROM sales;

-- 2. ROW_NUMBER() - Rank sales by amount

SELECT id,
       product,
       amount,
       ROW_NUMBER() OVER (ORDER BY amount DESC) AS row_num
FROM sales;

-- 3. RANK() - Assign ranks with ties

SELECT id,
       product,
       amount,
       RANK() OVER (ORDER BY amount DESC) AS rank_num
FROM sales;

-- 4. DENSE_RANK() - No gaps in ranking

SELECT id,
       product,
       amount,
       DENSE_RANK() OVER (ORDER BY amount DESC) AS dense_rank_num
FROM sales;

-- 5. Running Total using SUM() OVER()

SELECT id,
       product,
       amount,
       SUM(amount) OVER (
           ORDER BY id
       ) AS running_total
FROM sales;

-- 6. CTE - Fetch sales above average

WITH avg_sales AS
(
    SELECT AVG(amount) AS avg_amount
    FROM sales
)
SELECT *
FROM sales
WHERE amount >
(
    SELECT avg_amount
    FROM avg_sales
);
