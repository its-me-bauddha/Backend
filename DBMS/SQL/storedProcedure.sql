use classicmodels;
/*delimiter #
create procedure showLimitedOrders()
begin 
	select * from orders limit 10;
end #
delimiter ;

call  showLimitedOrders(); 





delimiter #
create procedure passingValuesToOrder(
		IN lt int  
)
begin 
		select * from orders limit lt;
end # 
delimiter ;

call passingValuesToOrder(50)



delimiter #
create procedure passingValuesAndOrderNumberToOrder(
		IN lt int , IN orderNo varchar(255)
)
begin 
		select * from orders limit lt;
end # 
delimiter ;

call passingValuesAndOrderNumberToOrder(50,'10101');

*/



delimiter #
create procedure passingOrderNumberToOrderAndCounting(
		IN lt int , IN orderNo varchar(255),OUT cnt int
)
begin 
		select count(*) into cnt  from orders where orderNumber = orderNo;
end # 
delimiter ;

call passingOrderNumberToOrderAndCounting('10101' , @cnt);
select @cnt;