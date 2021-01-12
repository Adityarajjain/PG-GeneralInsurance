import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { TravelPolicyComponent } from '../travel-policy/travel-policy.component';
import { ApprovedPoliciesService } from '../service/approvedPolicies.service';
@Component({
  selector: 'app-alltravelapproved',
  templateUrl: './alltravelapproved.component.html',
  styleUrls: ['./alltravelapproved.component.css']
})
export class AlltravelapprovedComponent implements OnInit {
policy:any;
travelinsurances:any;
  constructor(private dialog:MatDialog, private alltravelapproved:ApprovedPoliciesService) { 
    alltravelapproved.getAllApprovedTravelPolicies().subscribe((data:any)=>{this.travelinsurances=data;console.log("travelIsurnaces: "+JSON.stringify(this.travelinsurances))})
  }

  ngOnInit(): void {
  }
  showTravelPolicy(pid:any){
    console.log('pid: '+(pid as HTMLButtonElement).value);
    let dialofRef=this.dialog.open(TravelPolicyComponent,{data:(pid as HTMLButtonElement).value, height:'580px', width:'75%'})
  }
}
