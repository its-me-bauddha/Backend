create or replace view tenOrderView as
select * from OrderDetails limit 10;

select * from tenOrderView;

select * from OrderDetails limit 10 offset 10;
update  tenOrderView set quantityOrdered =100
where orderNumber= '10103' and productCode = 'S10_1949';

