import { Component, OnInit } from '@angular/core';
import { MotorInsuranceDetailsService } from '../service/motorInsuranceDetails.service';
import { VehiclelistService } from '../service/vehiclelist.service';

@Component({
  selector: 'app-estimate-insurance',
  templateUrl: './estimate-insurance.component.html',
  styleUrls: ['./estimate-insurance.component.css']
})
export class EstimateInsuranceComponent implements OnInit {

  manufacturer:string="";
  manufacturers:string[]=[];
  models:string[]=[];
  model:string;
  premium_amt:any;
  constructor(private vehiclelist:VehiclelistService,private motorInsService:MotorInsuranceDetailsService) { 
    this.model='';
    this.premium_amt=NaN;
    this.vehiclelist.getManufacturers().forEach((element:any) => {
      this.manufacturers.push(element);
    });
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
  ngOnInit(): void {
  }

  CalculateInsurance(){
    this.motorInsService.getPremium(this.manufacturer,this.model,(document.getElementById("Purchase_Date")! as HTMLInputElement).value).subscribe((data:any)=>{this.premium_amt=data;return data});
  }
}
