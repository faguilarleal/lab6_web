-- crear todo lo de la base de datos antes de iniciarla 

CREATE DATABASE IF NOT EXISTS `blog_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `blog_db`;

-- Create a user and grant privileges
CREATE USER IF NOT EXISTS 'blog_user'@'%' IDENTIFIED BY 'blog_password';
GRANT ALL PRIVILEGES ON blog_db.* TO 'blog_user'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

CREATE TABLE IF NOT EXISTS blogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    content TEXT NOT NULL, 
    imagen TEXT
);
