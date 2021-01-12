import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RenewalDisplayService } from '../service/renewaldisp.service';


@Component({
  selector: 'app-selectyear',
  templateUrl: './selectyear.component.html',
  styleUrls: ['./selectyear.component.css']
})
export class SelectyearComponent implements OnInit {

 
  policyid:number;
  modelname:string;
  manufact:string;
  year:number;
  insplan:string;
  userins:any;
  dep:any;
  message:string="Payment successful for renewal";
  constructor(private myRoute:ActivatedRoute,private renewService:RenewalDisplayService) { 
    this.policyid=this.myRoute.snapshot.params["reg_number"];
    console.log(this.policyid)
    this.modelname=this.myRoute.snapshot.params["modelname"];
    console.log(this.modelname)
    this.manufact=this.myRoute.snapshot.params["manufacturer"];
    console.log(this.manufact);
    this.year=this.myRoute.snapshot.params["year"];
    this.insplan=this.myRoute.snapshot.params["planofins"];
    console.log(this.insplan);
    this.renewService.DisplayDeprecitedValue(this.policyid,this.manufact,this.modelname).subscribe(
    ta=>this.userins=ta);
    // this.policyid=this.myRoute.snapshot.params["reg_number"];
    // this.modelname=this.myRoute.snapshot.params["modelname"];
    // this.manufact=this.myRoute.snapshot.params["manufacturer"];
    // this.year=this.myRoute.snapshot.params["year"];
    //this.renewService.DisplayDeprecitedValue(this.policyid,this.manufact,this.modelname).subscribe(
      //ta=>this.userins=ta
    //);


  }

  payclick(amt:any){
  alert(this.message);
         console.log(amt);
 console.log(this.policyid);
  console.log(this.year);
  this.renewService.MakePaymentOfDepreciatedValue(this.policyid,amt,this.insplan,this.year).subscribe(
   data=>this.dep=data
  );
  } 
  ngOnInit(): void {
  }

}
