export class Transaction{
    Transaction_Id:number;
    Motor_Policy_Id:any;
    Travel_Policy_Id:any;
    Premium_Amount:number;
    Payment_Date:string;
    Transaction_Status:string;

    constructor(
        Transaction_Id:number=NaN,
        Motor_Policy_Id:number=NaN,
        Premium_Amount:number=NaN,
        Payment_Date:string='',
        Transaction_Status:string='successful',
    ){
        this.Transaction_Id=Transaction_Id;
        // this.Motor_Policy_Id=Motor_Policy_Id;
        this.Premium_Amount=Premium_Amount;
        this.Payment_Date=Payment_Date;
        this.Transaction_Status=Transaction_Status;
    }
}