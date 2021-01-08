export class TravelInsuranceTable{

    Policy_id:number;
    Type_Of_Travel:string;
    Source:string;
    Destination:string;
    Mode_Of_Transport:string;
    Age_Of_traveller:number;
    Travel_Start_Date:string;
    Travel_End_Date:string;
    Any_Medical_Condition:string;
    Mobile_Number:string;
    Insurance_Plan:string;
    Insurer_Username:string;
    Status:string;

    constructor(
        Policy_id:number=NaN,
        Type_Of_Travel:string='',
        Source:string='',
        Destination:string='',
        Mode_Of_Transport:string='',
        Age_Of_traveller:number=NaN,
        Travel_Start_Date:string='',
        Travel_End_Date:string='',
        Any_Medical_Condition:string='',
        Mobile_Number:string='',
        Insurance_Plan:string='',
        Insurer_Username:string='',
        Status:string='pending',    
    ){
        this.Policy_id=Policy_id;
        this.Type_Of_Travel=Type_Of_Travel;
        this.Source=Source;
        this.Destination=Destination;
        this.Mode_Of_Transport=Mode_Of_Transport;
        this.Age_Of_traveller=Age_Of_traveller;
        this.Travel_Start_Date=Travel_Start_Date;
        this.Travel_End_Date=Travel_End_Date;
        this.Any_Medical_Condition=Any_Medical_Condition;
        this.Mobile_Number=Mobile_Number;
        this.Insurance_Plan=Insurance_Plan;
        this.Insurer_Username=Insurer_Username;
        this.Status=Status;
    
    }


}