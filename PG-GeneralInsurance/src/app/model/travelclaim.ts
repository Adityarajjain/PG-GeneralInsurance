export class Travelclaim {​​



    Travel_Policy_Id: number;

    Ticket_Copy:string;

    Reason_for_Claim: any;

    Mobile_Number: string;

    Complaint_Copy:string

    constructor(Travel_Policy_Id: number=0,Ticket_Copy:string='',

        Reason_for_Claim: string='',

        Mobile_Number: string='',  Complaint_Copy:string='') {​​

        this.Travel_Policy_Id = Travel_Policy_Id;

        this.Ticket_Copy=Ticket_Copy;

        this.Reason_for_Claim = Reason_for_Claim;

        this.Mobile_Number = Mobile_Number;

        this.Complaint_Copy=Complaint_Copy;

    }​​

}​​