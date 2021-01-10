create proc proc_AdminLoginCheck(@uid varchar(15),@pswd varchar(15))
as
begin
	select Username from AdminDetailsTable where Username=@uid and Password=@pswd
end
proc_AdminLoginCheck 'Shalini','Gi@789'
------------------------------------------------------------------------------------------


insert into AdminDetailsTable values('Shalini','Gi@789')

------------------------------------------------------------------------------------------
create proc proc_GetManufacturers
as
begin
	select distinct Manufacturer from VehicleListTable
end

exec proc_GetManufacturers
------------------------------------------------------------------------------------------


------------------------------------------------------------------------------------------
create proc proc_GetCarsOfManufacturer(@manu varchar(20))
as
begin
	select Model_Name from VehicleListTable where Manufacturer=@manu
end
------------------------------------------------------------------------------------------
alter table TravelInsuranceTable add Status varchar(20)

exec proc_GetCarsOfManufacturer 'Honda'



------------------------------------------------------------------------------------------
create proc proc_GetBrandNewPrice(@manu varchar(20), @model varchar(40))
as
 begin
	select Brand_New_Price from VehicleListTable where Manufacturer=@manu and Model_Name=@model
 end
 ------------------------------------------------------------------------------------------
exec proc_GetBrandNewPrice 'Honda' , 'City V Diesel'

create proc  proc_GetLatestId
as
begin
	select Max(Policy_Id) from MotorInsuranceTable
end

exec proc_GetLatestId

------------------------------------------------------------------------------------------
create proc  proc_GetLatestTravelId
as
begin
	select Max(Policy_Id) from TravelInsuranceTable
end

exec proc_GetLatestTravelId
------------------------------------------------------------------------------------------

--To display the details of user and insurance details

create proc Proj_Proc_UserPolicyDetailsDisplay2(@id bigint)
as
begin
select m.Mobile_number,Name,Email_Id,Gender,Door_Number,Street,City,District,State,Pincode,Policy_Id,Number_Of_Wheels,Manufacturer,Model_Name,Registration_Number,RTA_Name,Engine_Number,Chassis_Number,Year_Of_Manufacture,Purchase_Date,Insurance_Plan,Time_Period,Policy_Start_Date,Policy_End_Date
from MotorInsuranceTable m join UserDetailsTable u on
m.Mobile_Number=u.Mobile_Number
where Policy_Id=@id
end

exec Proj_Proc_UserPolicyDetailsDisplay2 '10000000001'




------------------------------------------------------------------------------------------


--To calculate the premium

create proc GetBrandNewPrice_Proc1(@policyid bigint, @manu varchar(20),@model varchar(40))
as
begin
select Purchase_Date,Brand_New_Price from VehicleListTable v,MotorInsuranceTable m where v.Manufacturer=@manu and v.Model_Name=@model and Policy_id=@policyid 
end






------------------------------------------------------------------------------------------
--To update the table after renewal

create proc Proc_MakeRenewalOfPolicy3(@policyid bigint,@amount float,@year int)
as
begin
	
		insert into TransactionTable (Motor_Policy_Id,Premium_Amount,Payment_Date,Transaction_Status) values(@policyid,@amount,SYSDATETIME(),'success')
		update MotorInsuranceTable set Time_Period=@year,Policy_Start_Date=SYSDATETIME(),Policy_End_Date=DATEADD(year,@year,SYSDATETIME()),Insurer_Username=NULL,Status='Pending'
		where Policy_Id=@policyid		
		select Policy_Id,Policy_Start_date,Policy_End_Date from MotorInsuranceTable 
		where Policy_Id=@policyid
		
end

------------------------------------------------------------------------------------------
create proc proc_GetAllPoliciesOfUser(@mobile varchar(12))
as
begin
	select * from MotorInsuranceTable where Mobile_Number=@mobile
end

exec proc_GetAllPoliciesOfUser '9876543210'

------------------------------------------------------------------------------------------
create proc proc_GetAllTravelPoliciesOfUser(@mobile varchar(12))
as
begin
	select * from TravelInsuranceTable where Mobile_Number=@mobile
end


exec proc_GetAllTravelPoliciesOfUser '9876543210'


------------------------------------------------------------------------------------------
create proc proc_GetAllClaimsOfUser(@mobile varchar(12))
as
begin
	select * from MotorClaimDetailsTable where Mobile_Number=@mobile
end

exec proc_GetAllClaimsOfUser '9876543210'

------------------------------------------------------------------------------------------
create proc proc_GetAllTravelClaimsOfUser(@mobile varchar(12))
as
begin
	select * from TravelClaimDetailsTable where Mobile_Number=@mobile
end


exec proc_GetAllTravelClaimsOfUser '9876543210'
------------------------------------------------------------------------------------------


create proc proc_ApproveMotorClaim(@policyid bigint, @amt int, @admin varchar(15))
as
begin 
	update MotorClaimDetailsTable set Claim_Status='approved', Amount_Sanctioned=@amt ,Approver_Username=@admin where Policy_Id=@policyid;
	
end

exec proc_ApproveMotorClaim 10000010058,3500,'Shalini'


--------------------------------------------------------------------------------------------------------------------
create proc proc_GetMotorPolicy(@policy_id bigint)
as
begin
	select * from MotorInsuranceTable where Policy_Id=@policy_id
end
--------------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------------
create proc proc_GetTravelPolicy(@policy_id bigint)
as
begin
	select * from TravelInsuranceTable where Policy_Id=@policy_id
end
--------------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------------
create proc proc_GetTransactionDetails(@policy_id bigint)
as
begin
	select t.Premium_Amount from (TransactionTable t left join MotorInsuranceTable m on t.Motor_Policy_Id=m.Policy_Id) 
	left join TravelInsuranceTable tr on t.Travel_Policy_Id=tr.Policy_id  
	where t.Motor_Policy_Id=@policy_id or t.Travel_Policy_Id=@policy_id
end
--------------------------------------------------------------------------------------------------------------------

select t.Premium_Amount from (TransactionTable t left join MotorInsuranceTable m on t.Motor_Policy_Id=m.Policy_Id) 
	left join TravelInsuranceTable tr on t.Travel_Policy_Id=tr.Policy_id  
	where t.Motor_Policy_Id=10000010057 or t.Travel_Policy_Id=10000010057
select * from TransactionTable
--------------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------------
create proc proc_GetMotor_Policy(@policy_id bigint)
as
begin
	select * from (MotorInsuranceTable mit join UserDetailsTable udt on mit.Mobile_Number=udt.Mobile_Number) 
	join VehicleListTable vlt on mit.Manufacturer=vlt.Manufacturer and mit.Model_Name=vlt.Model_Name 
	where mit.Policy_Id=@policy_id
end
--------------------------------------------------------------------------------------------------------------------
select mit.Policy_Id as Policy_Id, mit.Policy_Start_Date as Policy_Start_Date, mit.Policy_End_Date as Policy_End_Date, 
		mit.Mobile_Number as Mobile_Number, mit.Purchase_Date as Purchase_Date, mit.Registration_Number as Registration_Number,
		mit.RTA_Name as RTA_Name, mit.Manufacturer as Manufacturer, mit.Model_Name as Model_Name,
		mit.Engine_Number as Engine_Number, mit.Chassis_Number as Chassis_Number, 
		udt.Name as Name, udt.Door_Number as Door_Number, udt.Gender as Gender, udt.Street as Street,
		udt.City as City, udt.District as District, udt.State as State, udt.Pincode as Pincode,
		vlt.Cubic_Capacity as Cubic_Capacity, vlt.Seating_Capacity as Seating_Capacity,
		vlt.Type_Of_Body as Type_Of_Body
		  
  from (MotorInsuranceTable mit join UserDetailsTable udt on mit.Mobile_Number=udt.Mobile_Number) join VehicleListTable vlt on mit.Manufacturer=vlt.Manufacturer and mit.Model_Name=vlt.Model_Name 
where mit.Policy_Id=10000010057


--------------------------------------------------------------------------------------------------------------------

create proc proc_Get_Policy_Motor(@policy_id bigint)
as
begin
	select mit.Policy_Id as Policy_Id, mit.Policy_Start_Date as Policy_Start_Date, mit.Policy_End_Date as Policy_End_Date, 
		mit.Mobile_Number as Mobile_Number, mit.Purchase_Date as Purchase_Date, mit.Registration_Number as Registration_Number,
		mit.RTA_Name as RTA_Name, mit.Manufacturer as Manufacturer, mit.Model_Name as Model_Name,
		mit.Engine_Number as Engine_Number, mit.Chassis_Number as Chassis_Number, 
		udt.Name as Name, udt.Door_Number as Door_Number, udt.Gender as Gender, udt.Street as Street,
		udt.City as City, udt.District as District, udt.State as State, udt.Pincode as Pincode,
		vlt.Cubic_Capacity as Cubic_Capacity, vlt.Seating_Capacity as Seating_Capacity,
		vlt.Type_Of_Body as Type_Of_Body
		  
  from (MotorInsuranceTable mit join UserDetailsTable udt on mit.Mobile_Number=udt.Mobile_Number) join VehicleListTable vlt on mit.Manufacturer=vlt.Manufacturer and mit.Model_Name=vlt.Model_Name 
where mit.Policy_Id=@policy_id
end
--------------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------------
create proc proc_GetTravel_Policy(@policy_id bigint)
as
begin
	select * from (TravelInsuranceTable t join UserDetailsTable udt on t.Mobile_Number=udt.Mobile_Number) 
	where t.Policy_Id=@policy_id
end
--------------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------------
create proc proc_Get_Policy_Travel(@policy_id bigint)
as
begin

select t.Policy_id as Policy_Id, t.Source as Source, t.Destination as Destination,
		t.Mode_Of_Transport as Mode_Of_Transport, t.Age_Of_traveller as Age_Of_traveller,
		t.Travel_Start_Date as Travel_Start_Date, t.Travel_End_Date as Travel_End_Date,
		t.Any_Medical_Condition as Any_Medical_Condition, t.Mobile_Number as Mobile_Number,
		t.Insurance_Plan as Insurance_Plan, udt.Name as Name, udt.Email_Id as Email_Id,
		udt.Gender as Gender, udt.Door_Number as Door_Number, udt.Street as Street,
		udt.City as City, udt.District as District, udt.State as State, udt.Pincode as Pincode  
 from (TravelInsuranceTable t join UserDetailsTable udt on t.Mobile_Number=udt.Mobile_Number) 
	where t.Policy_Id=@policy_id

end
--------------------------------------------------------------------------------------------------------------------
exec proc_Get_Policy_Travel 50000000013


--------------------------------------------------------------------------------------------------------------------
create proc Proc_ValidateExistingAuthGuard3(@mob varchar(12),@pass varchar(15))
as
begin
select Mobile_Number,Password,Name from UserDetailsTable where Mobile_Number=@mob and Password=@pass
end
--------------------------------------------------------------------------------------------------------------------






drop proc proc_GetTravelPolicy '50000000013'


update MotorInsuranceTable set Policy_Start_Date='2020-01-07', Policy_End_Date='2021-01-07' where Policy_Id=10000010058

insert into UserDetailsTable values('9876543210','abc123','Raj','raj@gmail.com','Male','501','some nagar','Bhopal','Bhopal','MP','456132')

insert into MotorClaimDetailsTable values (10000010058,'Raj','9876543210','Accident',Sysdatetime(),'ins copy','lc copy','rc','letter',3520,'dndfi','','pending',null)
insert into MotorClaimDetailsTable values (10000010057,'Raj','9876543210','Accident',Sysdatetime(),'ins copy','lc copy','rc','letter',3520,'dndfi','','pending',null)
insert into MotorClaimDetailsTable values (10000010055,'Raj','9876543210','Accident',Sysdatetime(),'ins copy','lc copy','rc','letter',3520,'dndfi','','pending',null)

insert into AdminDetailsTable values ('Adityaraj','abc123')
insert into AdminDetailsTable values ('Gouvtham','abc123')
insert into AdminDetailsTable values ('Sneha','abc123')
insert into AdminDetailsTable values ('Shivani','abc123')

select * from MotorInsuranceTable
select * from UserDetailsTable
select * from TravelInsuranceTable
select * from VehicleListTable
select * from TransactionTable
select * from MotorClaimDetailsTable

