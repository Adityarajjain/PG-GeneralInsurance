import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MotorclaimService {
  constructor(private http : HttpClient) 
  { 
  }
  public getAllMotorClaim(){
    return this.http.get("http://localhost:53421/api/MotorClaimAdmin/");
  }
  public ApproveMotorClaim(Policy_id:number,amt:any,Insurer_Username:string){
    console.log("Service");
    console.log(Policy_id);
    console.log(Insurer_Username);
    return this.http.put("http://localhost:53421/api/MotorClaimAdmin?Claim_id="+Policy_id+"&amt="+amt+"&admin="+Insurer_Username,'');
  }
  public RejectMotorClaim(Policy_id:number,amt:any,Insurer_Username:string){
    console.log("Service");
    console.log(Policy_id);
    console.log(Insurer_Username);
    return this.http.put("http://localhost:53421/api/MotorClaimAdmin/RejectMotorClaim?Claim_id="+Policy_id+"&amt="+amt+"&admin="+Insurer_Username,'');
  }
}