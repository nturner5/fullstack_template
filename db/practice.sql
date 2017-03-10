CREATE TABLE products(
   id serial PRIMARY KEY,
   name text,
   size int,
   color text, 
   collection text,
   price int,
   popularity boolean,
   description text
);

-- DELETE * FROM products;

INSERT INTO products (name, size, color, collection, price, popularity, description)  
VALUES ('watchx', 200, 'silver', 'special', 123, true, 'elegant');

-- drop table products;