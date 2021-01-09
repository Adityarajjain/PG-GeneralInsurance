import { Component, OnInit } from '@angular/core';
import { MotorClaimTable } from '../model/motorClaimTable';
import { UserDetails } from '../model/user';
import { ApproveMotorClaimService } from '../service/approveMotorClaim.service';
import { DashboardService } from '../service/dashboard.service';
import { UserService } from '../service/user.service';
import {MatDialog} from '@angular/material/dialog';
import { PolicyPreviewComponent } from '../policy-preview/policy-preview.component';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  Username:string;
  user:UserDetails;
  travelinsurances:any;
  motorinsurances:any;
  motorclaims:any;
  travelclaims:any
  policy_id:any;
  amt:any;
 
  constructor(private userService:UserService, private dashboardService:DashboardService, private approveMotorClaim:ApproveMotorClaimService, private dialog:MatDialog) { 
    this.user=new UserDetails();
    // this.motorinsurances=new MotorInsuranceTable();
    // this.travelinsurances= new TravelInsuranceTable();
    this.userService.getUser(sessionStorage.getItem("userMobile")!).subscribe((data:any)=>{this.user=data as UserDetails; console.log(data)});
    this.Username=this.user.Name;
    
    dashboardService.getAllPoliciesOfUser(sessionStorage.getItem("userMobile")!).subscribe((data:any)=>{this.motorinsurances=data; console.log(this.motorinsurances[0].Mobile_Number)});
    dashboardService.getAllTravelPoliciesOfUser(sessionStorage.getItem("userMobile")!).subscribe((data:any)=>{this.travelinsurances=data; console.log(data)});
    dashboardService.getAllClaimsOfUser(sessionStorage.getItem("userMobile")!).subscribe((data:any)=>{this.motorclaims=data as MotorClaimTable; console.log(data.Policy_Id)})
    dashboardService.getAllTravelClaimsOfUser(sessionStorage.getItem("userMobile")!).subscribe((data:any)=>{this.travelclaims=data;})
  }

  ngOnInit(): void {
    // console.log('Policy : '+this.motorinsurances.Policy_Id)
  }
  showPolicy(pid:any){
    // console.log('pid: '+(pid as HTMLButtonElement).value);
    let dialofRef=this.dialog.open(PolicyPreviewComponent,{data:(pid as HTMLButtonElement).value, height:'580px', width:'75%'})
  }
}
