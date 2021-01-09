import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MotorPolicyService {

  constructor(private getMotorIns:HttpClient,private getTrans:HttpClient) { }

  public getMotorPolicy(Policy_Id:number){
    return this.getMotorIns.get("http://localhost:53421/api/MotorPolicy?Policy_Id="+Policy_Id);
  }
  public getTransaction(Policy_Id:number){
    return this.getTrans.get("http://localhost:53421/api/TransactionPolicy?Policy_Id="+Policy_Id);
  }
}