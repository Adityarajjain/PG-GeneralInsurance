import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private getMotorIns:HttpClient,private getMotorClaim:HttpClient,private getTravelIns:HttpClient, private getTravelClaim:HttpClient) { }

  public getAllPoliciesOfUser(Mobile_Number:string){
    return this.getMotorIns.get("http://localhost:53421/api/MotorInsuranceDashboard?Mobile_Number="+Mobile_Number);
  }
  public getAllTravelPoliciesOfUser(Mobile_Number:string){
    return this.getTravelIns.get("http://localhost:53421/api/TravelInsuranceDashboard?Mobile_Number="+Mobile_Number);
  }

  public getAllClaimsOfUser(Mobile_Number:string){
    return this.getMotorClaim.get("http://localhost:53421/api/MotorClaimDashboard?Mobile_Number="+Mobile_Number);
  }
  
  public getAllTravelClaimsOfUser(Mobile_Number:string){
    return this.getTravelClaim.get("http://localhost:53421/api/TravelClaimDashboard?Mobile_Number="+Mobile_Number);
  }

}