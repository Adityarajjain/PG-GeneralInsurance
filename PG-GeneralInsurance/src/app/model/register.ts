export class Register {

    Mobile_Number: string;
    Password:string;
    Name: string;
    Email_Id: string;
    Gender: string;
    Door_Number: string;
    Street: string;
    City: string;
    District: string;
    State: string;
    Pincode: string;

    constructor( Mobile_Number: string='',
        Password:string='',
        Name: string='',
        Email_Id: string='',
        Gender: string='',
        Door_Number: string='',
        Street: string='',
        City: string='',
        District: string='',
        State: string='',
        Pincode: string='')
{
    this.Mobile_Number=Mobile_Number;
    this.Password=Password;
    this.Name=Name;
    this.Email_Id=Email_Id;
    this.Gender=Gender;
    this.Door_Number=Door_Number;
    this.Street=Street;
    this.City=City;
    this.District=District;
    this.State=State;
    this.Pincode=Pincode;
}
}
