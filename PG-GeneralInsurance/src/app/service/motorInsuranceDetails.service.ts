import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MotorInsuranceTable } from '../model/motorInsuranceTable';


@Injectable({
  providedIn: 'root'
})
export class MotorInsuranceDetailsService {

  constructor(private httpClient:HttpClient, private getClient:HttpClient) { }

  public fillMotorInsurance(motorInsurance:MotorInsuranceTable){
    // console.log("fill Motor insurance: "+motorInsurance);
    return this.httpClient.post("http://localhost:53421/api/MotorInsurance",motorInsurance);
  }

  public getPolicyId(){
    return this.getClient.get("http://localhost:53421/api/MotorInsurance");
  }
  
  public getPremium(manu:string,model:string,date:string){
    return this.getClient.get("http://localhost:53421/api/Transaction?manu="+manu+"&model="+model+"&date="+date);
  }
}