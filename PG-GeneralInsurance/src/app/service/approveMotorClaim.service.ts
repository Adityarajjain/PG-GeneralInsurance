import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApproveMotorClaimService {

  constructor(private httpClient:HttpClient){}

  public approveMotorClaim(Policy_id:number,amt:number,admin:string){
    return this.httpClient.put("http://localhost:53421/api/MotorClaimDashboard?Policy_no="+Policy_id+"&amt="+amt+"&admin="+admin,'');
  }
}