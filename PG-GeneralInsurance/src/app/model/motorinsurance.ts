export class MotorInsurance{
    Policy_Id:number;
    Number_Of_Wheels :number;
    Manufacturer:string; 
    Model_Name :string;
    Registration_Number:string;
    RTA_Name :string;
    Engine_Number :string;
    Chassis_Number:string;
    Year_Of_Manufacture :number;
    Purchase_Date :Date;
    Mobile_Number :number;
    Insurance_Plan :string;
    Time_Period :number;
    Policy_Start_Date:Date;
    Policy_End_Date:Date;
    status:string;
    Insurer_Username :string;
    
    constructor(
        Policy_Id:number=0,
        Number_Of_Wheels :number=0,
        Manufacturer:string="",
        Model_Name :string="",
        Registration_Number:string="",
        RTA_Name :string="",
        Engine_Number :string="",
        Chassis_Number:string="",
        Year_Of_Manufacture :number=0,
        Purchase_Date :Date,
        Mobile_Number :number=0,
        Insurance_Plan :string="",
        Time_Period :number=0,
        Policy_Start_Date:Date,
        Policy_End_Date:Date,
        status:string="",
        Insurer_Username :string=""){
            this.Policy_Id=Policy_Id;
            this.Number_Of_Wheels=Number_Of_Wheels;
            this.Manufacturer=Manufacturer ;
            this.Model_Name=Model_Name;
            this.Registration_Number=Registration_Number;
            this.RTA_Name =RTA_Name;
            this.Engine_Number =Engine_Number;
            this.Chassis_Number=Chassis_Number;
            this.Year_Of_Manufacture=Year_Of_Manufacture;
            this.Purchase_Date=Purchase_Date;
            this.Mobile_Number=Mobile_Number;
            this.Insurance_Plan=Insurance_Plan;
            this.Time_Period=Time_Period;
            this.Policy_Start_Date=Policy_Start_Date;
            this.Policy_End_Date=Policy_End_Date;
            this.status=status;
            this.Insurer_Username =Insurer_Username;
        
    }
    
    }