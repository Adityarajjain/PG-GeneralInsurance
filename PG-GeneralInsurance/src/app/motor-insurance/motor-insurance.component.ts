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
  motorInsurance:any;
  mobile:string;
  userMobile:any;
  date= new Date();
  Policy_Start_Date:any;
  Policy_End_Date:any;
  constructor(private vehiclelist:VehiclelistService, private motorInsService:MotorInsuranceDetailsService,private datePipe: DatePipe) {
    this.model='';
    this.mobile='';
    // this.date=new Date();
    this.motorInsurance=new MotorInsuranceTable();

    // this.vehiclelist.getManufacturers().forEach((element:any) => {
    //   this.manufacturers.push(element);
    // });
    this.changePage=false;
    this.submitted=false;
    this.userMobile=sessionStorage.getItem("userMobile");
    
   }

  ngOnInit(): void {
  }

  getManu(wheels:any){
    if(wheels==4){
   this.vehiclelist.getManufacturers().forEach((element:any) => {
     this.manufacturers.push(element);
   });
 }
 else if(wheels=2){
   console.log('2 wheels');
 }
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
  setTimePeriod(tp:any){
    this.date=new Date();
    this.Policy_Start_Date=formatDate(this.date, 'yyyy-MM-dd', 'en');
   
      this.date.setDate( this.date.getDate() + 365*tp );
      this.Policy_End_Date=formatDate(this.date, 'yyyy-MM-dd', 'en');       
  }
  getToday():string{
    this.date=new Date();
    return formatDate(this.date, 'yyyy-MM-dd', 'en');
  }
  public applyMotorInsurance(motorForm:any){
    // console.log("motorForm: "+JSON.stringify(motorForm))

     
     this.motorInsService.fillMotorInsurance(motorForm).subscribe(data=>console.log("DATA:  "+data));
     alert("Applied for the Insurance ");
     this.motorInsurance=motorForm;
    // //  this.policy_Id=this.motorInsService.getPolicyId().subscribe();
    // //  console.log("policy id: "+this.policy_Id);
    this.submitted=true;
  }

}
