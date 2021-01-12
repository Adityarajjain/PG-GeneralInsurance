import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PolicyPreviewComponent } from '../policy-preview/policy-preview.component';
import { ApprovedPoliciesService } from '../service/approvedPolicies.service';
@Component({
  selector: 'app-allmotorapproved',
  templateUrl: './allmotorapproved.component.html',
  styleUrls: ['./allmotorapproved.component.css']
})
export class AllmotorapprovedComponent implements OnInit {
policy:any;
motorinsurances:any;
  constructor(private dialog:MatDialog, private allmotorapproved:ApprovedPoliciesService) { 
    allmotorapproved.getAllApprovedMotorPolicies().subscribe((data:any)=>{this.motorinsurances=data});
  }

  ngOnInit(): void {
  }
  showPolicy(pid:any){
    // console.log('pid: '+(pid as HTMLButtonElement).value);
    let dialofRef=this.dialog.open(PolicyPreviewComponent,{data:(pid as HTMLButtonElement).value, height:'580px', width:'75%'})
  }
}
