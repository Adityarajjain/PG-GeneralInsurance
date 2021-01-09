import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelInsuranceTable } from '../model/travelInsuranceTable';
import { FormGroup,Validators,FormBuilder } from "@angular/forms";
import { TravelInsuranceDetailsService } from '../service/travelInsuranceDetails.service';

@Component({
  selector: 'app-travel-insurance',
  templateUrl: './travel-insurance.component.html',
  styleUrls: ['./travel-insurance.component.css']
})
export class TravelInsuranceComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});
  register:TravelInsuranceTable;
  travelInsurance:any;
  submitted:boolean;
  
  constructor(private registerService:TravelInsuranceDetailsService,private route:Router,private fb:FormBuilder) {
    this.register=new TravelInsuranceTable();
    this.registerForm = fb.group({
      Source:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      Destination:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      Mode_Of_Transport:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      Age_Of_traveller:['',[Validators.required,Validators.pattern('[0-9]*')]],
      Travel_Start_Date:['',[Validators.required]],
      Travel_End_Date:['',[Validators.required]],
      Any_Medical_Condition:['',[Validators.required]],
      Mobile_Number:['', [Validators.required,Validators.minLength(10),Validators.pattern("[0-9]*")]],
      Insurance_Plan:['',[Validators.required]],
   });
   this.submitted=false;
  }
 
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add '' to the class.
    
  }
  get f(){
    return this.registerForm.controls;
  }

 
  InsertUser()
  {
    this.travelInsurance=this.registerForm.value;
    this.registerService.fillTravelInsurance(this.registerForm.value).subscribe()
    alert("User registered");
    // console.log("Mobile : "+this.registerForm.value.Mobile_Number);
    this.submitted=true;
    
  }
 

}
