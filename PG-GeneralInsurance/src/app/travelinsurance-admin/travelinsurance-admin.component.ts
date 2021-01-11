
import { Component, OnInit } from '@angular/core';
import { TravelService } from '../service/travel.service';

@Component({
  selector: 'app-travelinsurance-admin',
  templateUrl: './travelinsurance-admin.component.html',
  styleUrls: ['./travelinsurance-admin.component.css']
})
export class TravelinsuranceAdminComponent implements OnInit {
  travelinsurances:any;
  admin=sessionStorage.getItem('adminUsername')!; 
    constructor(private travelservice:TravelService) { 
      this.travelservice.getAllTravelInsurance().subscribe((m: any)=>{this.travelinsurances=m;}) 
    }  
onSubmit(tid:number){
      console.log(tid);
      this.travelservice.ApproveTravelInsurance(tid,this.admin).subscribe(
        data=>{alert("Approved");console.log(data)});
    }

    onReject(tid:any){
      console.log(tid);
      this.travelservice.RejectTravelInsurance(tid,this.admin).subscribe(
        data=>{alert("Rejected");console.log(data)});
    }
    ngOnInit() {  
        
    }   
  }
















// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-travelinsurance-admin',
//   templateUrl: './travelinsurance-admin.component.html',
//   styleUrls: ['./travelinsurance-admin.component.css']
// })
// export class TravelinsuranceAdminComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
