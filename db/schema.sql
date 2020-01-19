### Schema

CREATE DATABASE tacoTracker_db;
USE tacoTracker_db;

CREATE TABLE tacos
(
	id INT AUTO_INCREMENT NOT NULL,
	taco_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	createdAt TIMESTAMP,
	PRIMARY KEY (id)
);