import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpiredPolicyService } from '../service/expiredPolicy.service';

@Component({
  selector: 'app-displaydetails',
  templateUrl: './displaydetails.component.html',
  styleUrls: ['./displaydetails.component.css']
})
export class DisplaydetailsComponent implements OnInit {
  Policy_id:number=0;
  userins:any;
  msg:any;
  // constructor(private renService:RenewalDisplayService,private rout:Router) { 

  // }


  // onSubmitById(){
  //   //console.log(this.id.value);
  //   this.renService.DisplayUserAndInsurance(this.Policy_id).subscribe(
  //     ta=>{this.userins=ta,this.msg=undefined},
  //     err=>this.msg = err.error.Message);
  // }

  // OnProceedClick(reg_number:string){
  //   this.rout.navigate(["yearrenewal",reg_number]);
  // }

  // Gobacktorenewal(){
  //   this.rout.navigate(['/home']);
  // }

  // CheckAgain(){
  //   this.rout.navigate(['/home']);
  // }

  // userins:any;
  insuranceplan:any;
  constructor(private router:Router,private renService:ExpiredPolicyService) {
      renService.DisplayExpiredInsurance(sessionStorage.getItem("userMobile")!).subscribe(
      (ta:any)=>{this.userins=ta;console.log(ta)})
   }
  ngOnInit(): void {
  }

}
