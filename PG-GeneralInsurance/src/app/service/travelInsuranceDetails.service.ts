import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TravelInsuranceTable } from '../model/travelInsuranceTable';


@Injectable({
  providedIn: 'root'
})
export class TravelInsuranceDetailsService {

  constructor(private httpClient:HttpClient,private getClient:HttpClient) { }

  public fillTravelInsurance(travelInsurance:TravelInsuranceTable){
    // console.log("fill Travel insurance: "+TravelInsurance);
    return this.httpClient.post("http://localhost:53421/api/TravelInsurance",travelInsurance);
  }
  public getPolicyId(){
    return this.getClient.get("http://localhost:53421/api/TravelInsurance");
  }
  
}