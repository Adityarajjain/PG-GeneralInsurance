import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApprovedPoliciesService {
    constructor(private httpClient:HttpClient, private getClient:HttpClient){

    }
    getAllApprovedMotorPolicies(){
        return this.httpClient.get("http://localhost:53421/api/AllMotorApproved");
    }
    getAllApprovedTravelPolicies(){
        return this.getClient.get("http://localhost:53421/api/AllTravelApproved");
    }
}