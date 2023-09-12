/*
select * from orderDetails od
JOIN products p ON od.productCode = p.productCode 
WHERE od.orderNumber = '10101';


-- this is a single line comment 

select * from orderDetails od
JOIN products p ON od.productCode = p .productCode
JOIN orders o ON o.orderNumber = od.orderNumber 
where od.orderNumber = '10101';


select 
		od.orderNumber,
        p.productName,
        p.productLine,
        od.quantityOrdered,
        o.orderDate,
        o.status
 from orderDetails od
JOIN products p ON od.productCode = p .productCode
JOIN orders o ON o.orderNumber = od.orderNumber 
-- where od.orderNumber = '10101';
*/


CREATE OR REPLACE VIEW OrderProductView AS
select 
		od.orderNumber,
        p.productName,
        p.productLine,
        od.quantityOrdered,
        o.orderDate,
        o.status
 from orderDetails od
JOIN products p ON od.productCode = p .productCode
JOIN orders o ON o.orderNumber = od.orderNumber 
where od.orderNumber = '10101';

update OrderDetails set quantityOrdered  = 1000
where  orderNumber = '10101' and productCode  = 'S24_2022'; 


update OrderProductView set quantityOrdered = 100
where  orderNumber = '10101' and productName   = '1938 Cadillac V-16 Presidential Limousine';