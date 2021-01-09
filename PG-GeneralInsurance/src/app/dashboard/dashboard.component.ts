import { Component, OnInit } from '@angular/core';
import { MotorInsuranceTable } from '../model/motorInsuranceTable';
import { TravelInsuranceTable } from '../model/travelInsuranceTable';
import { UserDetails } from '../model/user';
import { DashboardService } from '../service/dashboard.service';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Username:string;
  user:UserDetails;
  travelinsurances:any;
  motorinsurances:any;
 
  constructor(private userService:UserService, private dashboardService:DashboardService) { 
    this.user=new UserDetails();
    // this.motorinsurances=new MotorInsuranceTable();
    // this.travelinsurances= new TravelInsuranceTable();
    this.userService.getUser(sessionStorage.getItem("userMobile")!).subscribe((data:any)=>{this.user=data; console.log(data)});
    this.Username=this.user.Name;
    
    dashboardService.getAllPoliciesOfUser(sessionStorage.getItem("userMobile")!).subscribe((data:any)=>{this.motorinsurances=data; console.log(this.motorinsurances[0].Mobile_Number)});
    // dashboardService.getAllTravelPoliciesOfUser(sessionStorage.getItem("userMobile")!).subscribe((data:any)=>{this.travelinsurances=data; console.log(data)});
  }

  ngOnInit(): void {
  }

}
