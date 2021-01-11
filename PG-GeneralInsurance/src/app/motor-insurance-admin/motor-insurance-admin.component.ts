 import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MotorInsurance } from '../model/motorinsurance';
import { MotorInsuranceAdminService } from '../service/MotorInsuranceAdmin.service';

// @Component({
//   selector: 'app-motorinsurance',
//   templateUrl: './motorinsurance.component.html',
//   styleUrls: ['./motorinsurance.component.css']
// })
@Component({
  selector: 'app-motor-insurance-admin',
  templateUrl: './motor-insurance-admin.component.html',
  styleUrls: ['./motor-insurance-admin.component.css']
})
export class MotorInsuranceAdminComponent implements OnInit {
  motorinsurances:any; 
  status: string=" ";
  Insurer_Username: string=" ";
  admin=sessionStorage.getItem('adminUsername')!;
  
  constructor(private motorservice:MotorInsuranceAdminService) { 
    
    this.motorservice.getAllMotorInsurance().subscribe((m: any)=>{this.motorinsurances=m;
      console.log(this.motorinsurances)}) ;
  }  
  
  ngOnInit() {  
      
  } 
  onSubmit(pid:number){
    console.log(pid);
    this.motorservice.ApproveMotorInsurance(pid,this.admin).subscribe(
      data=>{alert("Approved");console.log(data)});
  }
  onReject(pid:number){
    console.log(pid);
    this.motorservice.RejectMotorInsurance(pid,this.admin).subscribe(
      data=>{alert("Rejected");console.log(data)});
  }
}
 



















// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-motor-insurance-admin',
//   templateUrl: './motor-insurance-admin.component.html',
//   styleUrls: ['./motor-insurance-admin.component.css']
// })
// export class MotorInsuranceAdminComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
