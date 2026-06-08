-- 1. Create a table products (id, name, price)

CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10,2)
);

-- 2. Add a new column stock INT using ALTER TABLE

ALTER TABLE products
ADD stock INT;

-- 3. Rename column price to unit_price

ALTER TABLE products
RENAME COLUMN price TO unit_price;

-- 4. Insert 5 products into the table

INSERT INTO products (id, name, unit_price, stock)
VALUES
(1, 'Laptop', 55000.00, 10),
(2, 'Mouse', 500.00, 50),
(3, 'Keyboard', 1200.00, 30),
(4, 'Monitor', 15000.00, 15),
(5, 'Headphones', 2000.00, 25);

-- View records

SELECT * FROM products;

-- 5. Update the stock of one product

UPDATE products
SET stock = 20
WHERE id = 1;

-- View updated record

SELECT * FROM products
WHERE id = 1;

-- 6. Delete one product from the table

DELETE FROM products
WHERE id = 5;

-- View remaining records

SELECT * FROM products;