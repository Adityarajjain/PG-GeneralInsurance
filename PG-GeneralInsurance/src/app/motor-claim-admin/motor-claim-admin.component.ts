import { Component, OnInit } from '@angular/core';
import { MotorclaimService } from '../service/motorclaim.service';

@Component({
  selector: 'app-motor-claim-admin',
  templateUrl: './motor-claim-admin.component.html',
  styleUrls: ['./motor-claim-admin.component.css']
})

// @Component({
//   selector: 'app-motorinsuranceclaim',
//   templateUrl: './motorinsuranceclaim.component.html',
//   styleUrls: ['./motorinsuranceclaim.component.css']
// })
export class MotorClaimAdminComponent implements OnInit {
  motorclaims:any; 
   admin=sessionStorage.getItem('adminUsername')!;
  constructor(private motorclaimservice:MotorclaimService) { 

    this.motorclaimservice.getAllMotorClaim().subscribe((m: any)=>{this.motorclaims=m;}) 
  }  
  onSubmit(pid:number,amount:any){
    console.log(pid);
    this.motorclaimservice.ApproveMotorClaim(pid,amount,this.admin).subscribe(
      data=>{alert(" Claim Approved");console.log(data)});
  } 

  onReject(pid:number,amount:any){
    
    this.motorclaimservice.RejectMotorClaim(pid,amount,this.admin).subscribe(
      data=>{alert(" Claim Rejected");console.log(data)});
  } 
  ngOnInit() {  
      
  }  
}














// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-motor-claim-admin',
//   templateUrl: './motor-claim-admin.component.html',
//   styleUrls: ['./motor-claim-admin.component.css']
// })
// export class MotorClaimAdminComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
