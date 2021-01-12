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


create proc proc_Get_Policy_Motor_Approved(@policy_id bigint)
as
begin
	select mit.Policy_Id as Policy_Id, mit.Policy_Start_Date as Policy_Start_Date, mit.Policy_End_Date as Policy_End_Date, 
		mit.Mobile_Number as Mobile_Number, mit.Purchase_Date as Purchase_Date, mit.Registration_Number as Registration_Number,
		mit.RTA_Name as RTA_Name, mit.Manufacturer as Manufacturer, mit.Model_Name as Model_Name,
		mit.Engine_Number as Engine_Number, mit.Chassis_Number as Chassis_Number,mit.Insurance_Plan as Insurance_Plan, 
		udt.Name as Name, udt.Door_Number as Door_Number, udt.Gender as Gender, udt.Street as Street,
		udt.City as City, udt.District as District, udt.State as State, udt.Pincode as Pincode,
		vlt.Cubic_Capacity as Cubic_Capacity, vlt.Seating_Capacity as Seating_Capacity,
		vlt.Type_Of_Body as Type_Of_Body
		  
  from (MotorInsuranceTable mit join UserDetailsTable udt on mit.Mobile_Number=udt.Mobile_Number) join VehicleListTable vlt on mit.Manufacturer=vlt.Manufacturer and mit.Model_Name=vlt.Model_Name 
where mit.Policy_Id=@policy_id and Status='Approved'
end

--------------------------------------------------------------------------------------------------------------------

create proc proc_Get_Policy_Travel_Approved(@policy_id bigint)
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
	where t.Policy_Id=@policy_id and Status='Approved'

end

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------



create proc proc_GetAll_Policy_Motor_Approved
as
begin
	select mit.Policy_Id as Policy_Id, mit.Policy_Start_Date as Policy_Start_Date, mit.Policy_End_Date as Policy_End_Date, 
		mit.Mobile_Number as Mobile_Number, mit.Purchase_Date as Purchase_Date, mit.Registration_Number as Registration_Number,
		mit.RTA_Name as RTA_Name, mit.Manufacturer as Manufacturer, mit.Model_Name as Model_Name,
		mit.Engine_Number as Engine_Number, mit.Chassis_Number as Chassis_Number,mit.Insurance_Plan as Insurance_Plan, 
		udt.Name as Name, udt.Door_Number as Door_Number, udt.Gender as Gender, udt.Street as Street,
		udt.City as City, udt.District as District, udt.State as State, udt.Pincode as Pincode,
		vlt.Cubic_Capacity as Cubic_Capacity, vlt.Seating_Capacity as Seating_Capacity,
		vlt.Type_Of_Body as Type_Of_Body
		  
  from (MotorInsuranceTable mit join UserDetailsTable udt on mit.Mobile_Number=udt.Mobile_Number) join VehicleListTable vlt on mit.Manufacturer=vlt.Manufacturer and mit.Model_Name=vlt.Model_Name 
where Status='Approved'
end

--------------------------------------------------------------------------------------------------------------------

create proc proc_GetAll_Policy_Travel_Approved
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
	where Status='Approved'

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


create PROCEDURE sp_insertTravelClaim (
										@Travel_Policy_Id   bigint,  
                                          @Ticket_Copy    VARCHAR(200),  
                                          @Reason_for_Claim       varchar(30),  
                                          @Mobile_Number         VARCHAR(12), 
                                          @Claim_Status VARCHAR(20),
										   @Complaint_Copy VARCHAR(200)
										    )  
AS  
  BEGIN  
     
            INSERT INTO TravelClaimDetailsTable  
                        (Travel_Policy_Id,
Ticket_Copy ,
Reason_for_Claim ,
Mobile_Number ,
Claim_Status ,
Complaint_Copy 
)  
            VALUES     ( 	@Travel_Policy_Id,  
                                          @Ticket_Copy,  
                                          @Reason_for_Claim,  
                                          @Mobile_Number,
                                          @Claim_Status,
										  @Complaint_Copy
										   )  
        END

-----------------------------------------------------------------------------------------------------------------------------------------------------------

		exec sp_insertTravelClaim @Travel_Policy_Id=50000000003,@Ticket_Copy='kdsgksdf',@Reason_for_Claim='TheftofBaggage',@Mobile_Number='0909780970',@Claim_Status='pending',@Complaint_Copy='kvbxjcvbx'



-----------------------------------------------------------------------------------------------------------------------------------------------------------------


		create PROCEDURE sp_insertMotorClaim (
										@Policy_Id   bigint,  
                                          @Name    VARCHAR(200),  
                                          @Mobile_Number      varchar(30),  
                                          @Reason         VARCHAR(12), 
                                          @Date_Of_Applying date,
										  @Estimated_Amount_For_Repair float,
										  @License_Copy varchar(200),
										  @RC_Copy varchar(200),
										  @Insurance_Copy varchar(200),
										  @Bill_Copy varchar(200),
										  @Authenticated_Letter_from_RTO varchar(200),
										  @Claim_Status varchar(20)
										    )  
AS  
  BEGIN  
     
            INSERT INTO MotorClaimDetailsTable  
                        (Policy_Id   ,  
                                          Name,  
                                          Mobile_Number,  
                                          Reason, 
                                          Date_Of_Applying ,
										  Estimated_Amount_For_Repair ,
										  License_Copy ,
										  RC_Copy ,
										  Insurance_Copy ,
										  Bill_Copy ,
										  Authenticated_Letter_from_RTO ,
										  Claim_Status  
)  
            VALUES     ( 				  @Policy_Id   ,  
                                          @Name,  
                                          @Mobile_Number,  
                                          @Reason, 
                                          @Date_Of_Applying ,
										  @Estimated_Amount_For_Repair ,
										  @License_Copy ,
										  @RC_Copy ,
										  @Insurance_Copy ,
										  @Bill_Copy ,
										  @Authenticated_Letter_from_RTO ,
										  @Claim_Status 
										   )  
        END


		exec sp_insertMotorClaim @Policy_Id=10000010058,@Name='JOHN',@Mobile_Number='9876543210',@Reason='Accident',@Date_Of_Applying='2020-12-12',@Estimated_Amount_For_Repair=230000.0,@License_Copy='dfiewiorweirwho'
,@RC_Copy='dfhsdkjfhs',@Insurance_Copy='kdhfskdjfs',@Bill_Copy='dkgskjgsk',@Authenticated_Letter_from_RTO='jfhsjkfhs',@Claim_Status='pending'

---------------------------------------------------------------------------------------------------------------------------------------------------
create proc proc_ApproveMotorInsurance(@policyid bigint,@admin varchar(15))
as
begin
update MotorInsuranceTable set status='Approved',
Insurer_Username=@admin
where 
Policy_Id=@policyid;
end
 
create proc proc_ApproveTravelInsurance(@policyid bigint,@admin varchar(15))
as
begin
update TravelInsuranceTable set status='Approved',
Insurer_Username=@admin
where 
Policy_Id=@policyid;
end
 
create proc proc_ApproveMotorClaim_Admin(@policyid bigint,@amt int,@admin varchar(15))
as
begin
update MotorClaimDetailsTable set 
Claim_Status='Approved',
Amount_Sanctioned=@amt,
Approver_Username=@admin
where 
Policy_Id=@policyid;
end
 
create proc proc_ApproveTravelClaim_Admin(@policyid bigint,@amt int,@admin varchar(15))
as
begin
update TravelClaimDetailsTable set 
Claim_Status='Approved',
Amount_Sanctioned=@amt,
Approver_Username=@admin
where 
Travel_Policy_Id=@policyid;
end
 
create proc proc_RejectMotorInsurance(@policyid bigint,@admin varchar(15))
as
begin
update MotorInsuranceTable set status='Reject',
Insurer_Username=@admin
where 
Policy_Id= @policyid;
end
 
create proc proc_RejectTravelInsurance(@policyid bigint,@admin varchar(15))
as
begin
update TravelInsuranceTable set status='Reject',
Insurer_Username=@admin
where 
Policy_Id=@policyid;
end
 
create proc proc_RejectMotorClaim(@policyid bigint,@amt int,@admin varchar(15))
as
begin
update MotorClaimDetailsTable set 
Claim_Status='Reject',
Amount_Sanctioned=@amt,
Approver_Username=@admin
where 
Policy_Id=@policyid;
end
 
create proc proc_RejectTravelClaim(@policyid bigint,@amt int,@admin varchar(15))
as
begin
update TravelClaimDetailsTable set 
Claim_Status='Reject',
Amount_Sanctioned=@amt,
Approver_Username=@admin
where 
Travel_Policy_Id=@policyid;
end
 
create proc proc_GetAllMotorInsurance
as
begin
select * from MotorInsuranceTable
where status is null
end
 
create proc proc_GetAllTravelInsurance
as
begin
select * from TravelInsuranceTable
where status is null
end
 
create proc proc_GetAllMotorClaim
as
begin
select * from MotorClaimDetailsTable
where Claim_Status='NULL'
end
 
create proc proc_GetAllTravelClaim
as
begin
select * from TravelClaimDetailsTable
where Claim_Status='NULL'
end


--------------------------------------------------------------------------------------------------------------------------------------------------

create proc proc_GetAllMotorInsurance_Admin
as
begin
select * from MotorInsuranceTable
where Status='Pending'
end
 
create proc proc_GetAllTravelInsurance_Admin
as
begin
select * from TravelInsuranceTable
where Status='Pending'
end


create proc proc_GetAllMotorClaim_Admin
as
begin
select * from MotorClaimDetailsTable
where Claim_Status='Pending'
end
 
create proc proc_GetAllTravelClaim_Admin
as
begin
select * from TravelClaimDetailsTable
where Claim_Status='Pending'
end


create proc proc_GetAllTravelClaim_Admin_New
as
begin
select Travel_Claim_Id, Travel_Policy_Id,Ticket_Copy, Reason_for_Claim, Mobile_Number, Amount_Sanctioned, Complaint_Copy from TravelClaimDetailsTable
where Claim_Status='Pending'
end

----------------------------------------------------------------------------------------------------------------------------------------------
create proc Proc_SelectExpiredPolicies5(@mob varchar(12))
as
begin
	select Policy_Id,Policy_Start_Date,Policy_End_Date,u.Mobile_Number,Manufacturer,Model_Name from UserDetailsTable u join MotorInsuranceTable m on
	u.Mobile_Number=m.Mobile_Number
	where Policy_End_Date<SYSDATETIME() and Status='Approved' and Insurer_Username is not null
	and u.Mobile_Number=@mob
end


create proc Proc_MakeRenewalOfPolicy4(@policyid bigint,@amount float,@plan varchar(15),@year int)
as
begin
	
		insert into TransactionTable (Motor_Policy_Id,Premium_Amount,Payment_Date,Transaction_Status) values(@policyid,@amount,SYSDATETIME(),'success')
		update MotorInsuranceTable set Time_Period=@year,Insurance_Plan=@plan,Policy_Start_Date=SYSDATETIME(),Policy_End_Date=DATEADD(year,@year,SYSDATETIME()),Insurer_Username=NULL,Status='Pending'
		where Policy_Id=@policyid		
		select Policy_Id,Policy_Start_date,Policy_End_Date from MotorInsuranceTable 
		where Policy_Id=@policyid
		
end
---------------------------------------------------------------------------------------------------------------------------------------------------


 

create proc proc_ApproveMotorClaim_Admin_New(@claimid bigint,@amt int,@admin varchar(15))
as
begin
update MotorClaimDetailsTable set 
Claim_Status='Approved',
Amount_Sanctioned=@amt,
Approver_Username=@admin
where 
Claim_Id=@claimid;
end
 
create proc proc_ApproveTravelClaim_Admin_New(@claimid bigint,@amt int,@admin varchar(15))
as
begin
update TravelClaimDetailsTable set 
Claim_Status='Approved',
Amount_Sanctioned=@amt,
Approver_Username=@admin
where 
Travel_Claim_Id=@claimid;
end
 

 

 
create proc proc_RejectMotorClaim_New(@claimid bigint,@amt int,@admin varchar(15))
as
begin
update MotorClaimDetailsTable set 
Claim_Status='Reject',
Amount_Sanctioned=@amt,
Approver_Username=@admin
where 
Claim_Id=@claimid;
end
 
create proc proc_RejectTravelClaim_New(@claimid bigint,@amt int,@admin varchar(15))
as
begin
update TravelClaimDetailsTable set 
Claim_Status='Reject',
Amount_Sanctioned=@amt,
Approver_Username=@admin
where 
Travel_Claim_Id=@claimid;
end
 


---------------------------------------------------------------------------------------------------------------------------------------------------
drop proc proc_GetTravelPolicy '50000000013'


update MotorInsuranceTable set status='Reject',
Insurer_Username='Shalini'
where 
Policy_Id=10000010040



update MotorInsuranceTable set Policy_Start_Date='2020-01-07', Policy_End_Date='2021-01-07' where Policy_Id=10000010014

insert into UserDetailsTable values('9876543210','abc123','Raj','raj@gmail.com','Male','501','some nagar','Bhopal','Bhopal','MP','456132')

insert into MotorClaimDetailsTable values (10000010058,'Raj','9876543210','Accident',Sysdatetime(),'ins copy','lc copy','rc','letter',3520,'dndfi','','pending',null)
insert into MotorClaimDetailsTable values (10000010057,'Raj','9876543210','Accident',Sysdatetime(),'ins copy','lc copy','rc','letter',3520,'dndfi','','pending',null)
insert into MotorClaimDetailsTable values (10000010055,'Raj','9876543210','Accident',Sysdatetime(),'ins copy','lc copy','rc','letter',3520,'dndfi','','pending',null)

insert into TravelClaimDetailsTable values (50000000013,null, 'Theft', '4567984561',null,'Pending',null,null)

insert into AdminDetailsTable values ('Adityaraj','abc123')
insert into AdminDetailsTable values ('Gouvtham','abc123')
insert into AdminDetailsTable values ('Sneha','abc123')
insert into AdminDetailsTable values ('Shivani','abc123')


select * from AdminDetailsTable
select * from UserDetailsTable

select * from MotorInsuranceTable
select * from TravelInsuranceTable
select * from MotorClaimDetailsTable
select * from TravelClaimDetailsTable

select * from VehicleListTable
select * from TransactionTable


