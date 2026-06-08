-- 1. COUNT() - Count total orders

SELECT COUNT(*) AS total_orders
FROM orders;

-- 2. SUM() - Find the sum of all order prices

SELECT SUM(price) AS total_price
FROM orders;

-- 3. AVG() - Find the average order price

SELECT AVG(price) AS average_price
FROM orders;

-- 4. Group orders by product_name and show total sales

SELECT
    product_name,
    SUM(quantity * price) AS total_sales
FROM orders
GROUP BY product_name;

-- 5. Find the MAX() and MIN() price of orders

SELECT
    MAX(price) AS highest_price,
    MIN(price) AS lowest_price
FROM orders;

-- 6. Sort grouped data by total sales descending

SELECT
    product_name,
    SUM(quantity * price) AS total_sales
FROM orders
GROUP BY product_name
ORDER BY total_sales DESC;