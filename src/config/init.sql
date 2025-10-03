CREATE DATABASE IF NOT EXISTS onepiece;

USE onepiece;

CREATE TABLE IF NOT EXISTS piratas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apodo VARCHAR(100),
  fruta_del_diablo VARCHAR(100),
  tripulacion VARCHAR(100),
  edad INT,
  recompesa BIGINT
);
