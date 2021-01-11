import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  constructor(private http : HttpClient) 
  { 
  }
  public getAllTravelInsurance(){
    return this.http.get("http://localhost:53421/api/TravelInsuranceApproval/");
  }
  public ApproveTravelInsurance(Policy_id:number,Insurer_Username:string){
    console.log("Service");
    console.log(Policy_id);
    console.log(Insurer_Username);
    return this.http.put("http://localhost:53421/api/TravelInsuranceApproval?Policy_no="+Policy_id+"&admin="+Insurer_Username,'');
  }

  public RejectTravelInsurance(Policy_id:number,Insurer_Username:string){
    console.log("Service");
    console.log(Policy_id);
    console.log(Insurer_Username);
    return this.http.put("http://localhost:53421/api/TravelInsuranceApproval/RejectTravelInsurance?Policy_no="+Policy_id+"&admin="+Insurer_Username,'');
  }
}