DROP DATABASE IF EXISTS minihackathon ;
CREATE DATABASE minihackathon;

USE minihackathon;

CREATE TABLE scores (
    id INT(10) NOT NULL PRIMARY KEY,
    username VARCHAR(50),
    SCORE INT(15) NOT NULL DEFAULT 0 
);