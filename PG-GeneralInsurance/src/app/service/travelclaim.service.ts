import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TravelclaimService {
  constructor(private http : HttpClient) 
  { 
  }
  public getAllTravelClaim(){
    return this.http.get("http://localhost:53421/api/TravelClaimAdmin/");
  }
  public ApproveTravelClaim(Policy_id:number,amt:any,Insurer_Username:string){
    console.log("Service");
    console.log(Policy_id);
    console.log(Insurer_Username);
    return this.http.put("http://localhost:53421/api/TravelClaimAdmin?Policy_no="+Policy_id+"&amt="+amt+"&admin="+Insurer_Username,'');
  }
  public RejectTravelClaim(Policy_id:number,amt:any,Insurer_Username:string){
    console.log("Service");
    console.log(Policy_id);
    console.log(Insurer_Username);
    return this.http.put("http://localhost:53421/api/RejectTravelClaim?Policy_no="+Policy_id+"&amt="+amt+"&admin="+Insurer_Username,'');
  }
}