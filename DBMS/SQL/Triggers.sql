use classicmodels;

delimiter $
Create trigger Logger
Before Insert On Products
for each row
	set @log =  "Addig new Product";
$
delimiter ;

set @log = "";