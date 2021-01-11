import { Injectable } from '@angular/core';  
import { HttpClient, HttpHeaders } from '@angular/common/http';  
// import { MotorInsurance } from '../model/motorinsurance.model';
import { Observable } from 'rxjs';
  
 @Injectable()  
  
export class MotorInsuranceAdminService { 

  constructor(private http: HttpClient) { }  
  public getAllMotorInsurance(){
    return this.http.get("http://localhost:53421/api/MotorInsuranceApproval/");
  }
  public ApproveMotorInsurance(Policy_id:number,Insurer_Username:string){
    console.log("Service");
    console.log(Policy_id);
    console.log(Insurer_Username);
    return this.http.put("http://localhost:53421/api/MotorInsuranceApproval?Policy_no="+Policy_id+"&admin="+Insurer_Username,'');
  }
 
  public RejectMotorInsurance(Policy_id:number,Insurer_Username:string){
    console.log("Service");
    console.log(Policy_id);
    console.log(Insurer_Username);
    return this.http.put("http://localhost:53421/api/MotorInsuranceApproval/RejectMotorInsurance?Policy_no="+Policy_id+"&admin="+Insurer_Username,'');
  }
 
}