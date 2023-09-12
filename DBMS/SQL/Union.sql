use classicmodels;
select 
	orderNumber,
    orderDate
from orders
UNION
select 
	orderNumber,
    productCode
from orderDetails;
