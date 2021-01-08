import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MotorInsuranceTable } from '../model/motorInsuranceTable';
import { MotorInsuranceDetailsService } from '../service/motorInsuranceDetails.service';
import { VehiclelistService } from '../service/vehiclelist.service';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-motor-insurance',
  templateUrl: './motor-insurance.component.html',
  styleUrls: ['./motor-insurance.component.css'],
  providers:[DatePipe]
})
export class MotorInsuranceComponent implements OnInit {

  manufacturer:string="";
  manufacturers:string[]=[];
  models:string[]=[];
  model:string;
  changePage:boolean;
  submitted:boolean;
  motorInsurance:MotorInsuranceTable;
  mobile:string;
  date= new Date();
  constructor(private vehiclelist:VehiclelistService, private motorInsService:MotorInsuranceDetailsService,private datePipe: DatePipe) {
    this.model='';
    this.mobile='';
    // this.date=new Date();
    this.motorInsurance=new MotorInsuranceTable();

    this.vehiclelist.getManufacturers().forEach((element:any) => {
      this.manufacturers.push(element);
    });
    this.changePage=false;
    this.submitted=false;
    
    
   }

  ngOnInit(): void {
  }
  getCars(manu:string){
    this.models=[];
    console.log(this.manufacturer);
    // this.vehiclelist.getModels(manu).forEach((element:any) => {
    //   this.models.push(element);
    // });
    this.vehiclelist.getModels(this.manufacturer).forEach((element:any) => {
      this.models.push(element);
    });
  }

  pageChange(){
    this.changePage=!this.changePage;
  }
  // policy_Id:MotorInsuranceTable;

  public applyMotorInsurance(){
    this.date=new Date();
    this.motorInsurance.Policy_Start_Date=formatDate(this.date, 'yyyy/MM/dd', 'en');
    if(this.motorInsurance.Time_Period==1)
    {
      this.date.setDate( this.date.getDate() + 365 );
      this.motorInsurance.Policy_End_Date=formatDate(this.date, 'yyyy/MM/dd', 'en');
    }
    else if(this.motorInsurance.Time_Period==2)
    {
      this.date.setDate( this.date.getDate() + 365*2 );
      this.motorInsurance.Policy_End_Date=formatDate(this.date, 'yyyy/MM/dd', 'en');
    }
    else if(this.motorInsurance.Time_Period==3)
    {
      this.date.setDate( this.date.getDate() + 365*3 );
      this.motorInsurance.Policy_End_Date=formatDate(this.date, 'yyyy/MM/dd', 'en');
    }
   

    if (this.manufacturer == ''  ) {
      alert('Manufacturer is Mandatory')
      return
     }
     else{
       this.motorInsurance.Manufacturer=this.manufacturer;
     }
     if (this.model == ''  ) {
      alert('Model is Mandatory')
      return
     }
     else{
       this.motorInsurance.Model_Name=this.model;
     }
     if (this.motorInsurance.Purchase_Date == ''  ) {
      alert('Purchase Date is Mandatory')
      return
     }
     if (this.motorInsurance.RTA_Name == ''  ) {
      alert('RTA Name is Mandatory')
      return
     }
     if (this.motorInsurance.Registration_Number == ''  ) {
      alert('Registration Number is Mandatory')
      return
     }
     if (this.motorInsurance.Engine_Number == ''  ) {
      alert('Engine Number is Mandatory')
      return
     }
     if (this.motorInsurance.Chassis_Number == ''  ) {
      alert('Chassis Number is Mandatory')
      return
     }
     if (this.motorInsurance.Driving_License_Number == ''  ) {
      alert('Driving License Number is Mandatory')
      return
     }
     if (this.motorInsurance.Mobile_Number == ''  ) {
      alert('Mobile Number is Mandatory')
      return
     }
     if (this.motorInsurance.Insurance_Plan == ''  ) {
      alert('Insurance Plan is Mandatory')
      return
     }
     if (this.motorInsurance.Time_Period == NaN  ) {
      alert('Time Period is Mandatory')
      return
     }
     if (this.motorInsurance.Year_Of_Manufacture == NaN  ) {
      alert('Year of Manufacture is Mandatory')
      return
     }
     if (this.motorInsurance.Number_Of_Wheels == NaN  ) {
      alert('Type of Vehicle is Mandatory')
      return
     }
     
     this.motorInsService.fillMotorInsurance(this.motorInsurance).subscribe(data=>console.log("DATA:  "+data));
     alert("Applied for the Insurance ");
     
    //  this.policy_Id=this.motorInsService.getPolicyId().subscribe();
    //  console.log("policy id: "+this.policy_Id);
    this.submitted=true;
  }

}
