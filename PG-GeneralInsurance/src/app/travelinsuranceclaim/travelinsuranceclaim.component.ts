import { Component, OnInit } from '@angular/core';
import { TravelclaimService } from '../service/travelclaim.service';

@Component({
  selector: 'app-travelinsuranceclaim',
  templateUrl: './travelinsuranceclaim.component.html',
  styleUrls: ['./travelinsuranceclaim.component.css']
})
export class TravelinsuranceclaimComponent implements OnInit {
  travelclaims:any; 
   amt:number=0;
   default_amt=0;
   admin=sessionStorage.getItem('adminUsername')!;
  constructor(private travelclaim:TravelclaimService) { 
    this.travelclaim.getAllTravelClaim().subscribe((m: any)=>{this.travelclaims=m;}) 
  }  
  onSubmit(pid:number,amount:any){
    console.log(pid);
    this.travelclaim.ApproveTravelClaim(pid,amount,this.admin).subscribe(
      data=>{alert(" Claim Approved");console.log(data)});
  }
  
  onReject(pid:number,amount:any){
    console.log(pid);
    this.travelclaim.RejectTravelClaim(pid,amount,this.admin).subscribe(
      data=>{alert(" Claim rejected");console.log(data)});
  } 
  ngOnInit() {  
      
  }  
}












// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-travelinsuranceclaim',
//   templateUrl: './travelinsuranceclaim.component.html',
//   styleUrls: ['./travelinsuranceclaim.component.css']
// })
// export class TravelinsuranceclaimComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
