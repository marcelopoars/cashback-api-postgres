-- select * from orders

CREATE DATABASE cashback_api
  WITH
  OWNER = postgres
  ENCODING = 'UTF8'
  LC_COLLATE = 'Portuguese_Brazil.1252'
  LC_CTYPE = 'Portuguese_Brazil.1252'
  TABLESPACE = pg_default
  CONNECTION LIMIT = -1
  IS_TEMPLATE = False;


CREATE TABLE customers (
  _id character varying(40) NOT NULL PRIMARY KEY,
  name character varying(40) NOT NULL,
  cpf character varying(40) NOT NULL,
  city character varying(40) NOT NULL,
  phone character varying(40) NOT NULL,
  cashback real DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  deleted_at timestamp with time zone
);

CREATE TABLE orders (
  _id character varying(40) NOT NULL PRIMARY KEY,
  customer_id character varying(40) NOT NULL,
  total REAL NOT NULL,
  total_with_discount REAL NOT NULL,
  cashback REAL NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  deleted_at timestamp with time zone
);

CREATE TABLE users (
  _id character varying(40) NOT NULL PRIMARY KEY,
  name character varying(100) NOT NULL,
  email character varying(100) NOT NULL,
  password character varying(200) NOT NULL,

  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  deleted_at timestamp with time zone
);



ALTER TABLE ONLY orders
  ADD CONSTRAINT fk_orders_customers FOREIGN KEY (customer_id) REFERENCES customers;


-- SELECT * FROM customers ORDER BY created_at DESC
-- SELECT * FROM orders


SELECT
  orders._id as order_id,
  orders.customer_id,
  customers.name as customer_name,
  orders.total,
  orders.total_with_discount,
  orders.cashback,
  orders.created_at as order_date
FROM orders INNER JOIN customers ON orders.customer_id = customers._id
-- WHERE orders.deleted_at is null
ORDER BY orders.created_at DESC



