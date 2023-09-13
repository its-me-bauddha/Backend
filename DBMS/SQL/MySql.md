# Lecture 1 
SHOW DATABASES ;
 //  to show all the databases available on your system.

USE <database name>
 // to select a particular database to run queries on.

SHOW  TABLES ;
// To list down all the tables of a particular selected database 

CREATE DATABASE ;
// to create a new database

//CREATE TABLE <name> (
    <column name 1> [datatype] <keyword>,
    <column name 2> [datatype],
    .
    .
    .
);
// to  create a table

DESC <table name> ;
// gives description about the table

INSERT INTO <table name> (col1,col2,...) VALUES(<value1>,<value2> ...);  


SELECT <column name> FROM <table name>;
// to get a specific column data from  a table 
// use * in place of column name to get all the columns.



