
import { Component, OnInit } from '@angular/core';
import { TravelService } from '../service/travel.service';

// @Component({
//   selector: 'app-travelinsurance-admin',
//   templateUrl: './travelinsurance-admin.component.html',
//   styleUrls: ['./travelinsurance-admin.component.css']
// })
@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {
  travelinsurances:any; 
    constructor(private travelservice:TravelService) { 
      this.travelservice.getAllTravelInsurance().subscribe((m: any)=>{this.travelinsurances=m;}) 
    }  
onSubmit(tid:number){
      console.log(tid);
      this.travelservice.ApproveTravelInsurance(tid,'Shalini').subscribe(
        data=>{alert("Approved");console.log(data)});
    }

    onReject(tid:number){
      console.log(tid);
      this.travelservice.RejectTravelInsurance(tid,'Shalini').subscribe(
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










// import {Component} from '@angular/core'; 

// import {NgbModal, ModalDismissReasons} 
// 	from '@ng-bootstrap/ng-bootstrap'; 

// @Component({ 
// selector: 'ngbd-modal-basic', 
// templateUrl: './modal-basic.html'
// }) 
// export class NgbdModalBasic { 
// closeResult = ''; 

// constructor(private modalService: NgbModal) {} 

// open(content) { 
// 	this.modalService.open(content, 
// {ariaLabelledBy: 'modal-basic-title'}).result.then((result) 
// 	=> { 
// 	this.closeResult = `Closed with: ${result}`; 
// 	}, (reason) => { 
// 	this.closeResult = 
// 		`Dismissed ${this.getDismissReason(reason)}`; 
// 	}); 
// } 

// private getDismissReason(reason: any): string { 
// 	if (reason === ModalDismissReasons.ESC) { 
// 	return 'by pressing ESC'; 
// 	} else if (reason === ModalDismissReasons.BACKDROP_CLICK) { 
// 	return 'by clicking on a backdrop'; 
// 	} else { 
// 	return `with: ${reason}`; 
// 	} 
// } 
// } 































// import { Component, OnInit } from '@angular/core';
// import { MotorClaimTable } from '../model/motorClaimTable';
// import { UserDetails } from '../model/user';
// import { ApproveMotorClaimService } from '../service/approveMotorClaim.service';
// import { DashboardService } from '../service/dashboard.service';
// import { UserService } from '../service/user.service';

// @Component({
//   selector: 'app-dummy',
//   templateUrl: './dummy.component.html',
//   styleUrls: ['./dummy.component.css']
// })
// export class DummyComponent implements OnInit {
//   arr=[1,2,3,4];
  
//   Username:string;
//   user:UserDetails;
//   travelinsurances:any;
//   motorinsurances:any;
//   motorclaims:any;
//   policy_id:any;
//   amt:any;
 
//   constructor(private userService:UserService, private dashboardService:DashboardService, private approveMotorClaim:ApproveMotorClaimService) { 
//     this.user=new UserDetails();
//     // this.motorinsurances=new MotorInsuranceTable();
//     // this.travelinsurances= new TravelInsuranceTable();
//     this.userService.getUser(sessionStorage.getItem("userMobile")!).subscribe((data:any)=>{this.user=data as UserDetails; console.log(data)});
//     this.Username=this.user.Name;
    
//     dashboardService.getAllClaimsOfUser(sessionStorage.getItem("userMobile")!).subscribe((data:any)=>{this.motorclaims=data as MotorClaimTable; console.log(data.Policy_Id)})
//     dashboardService.getAllPoliciesOfUser(sessionStorage.getItem("userMobile")!).subscribe((data:any)=>{this.motorinsurances=data; console.log(this.motorinsurances[0].Mobile_Number)});
//     dashboardService.getAllTravelPoliciesOfUser(sessionStorage.getItem("userMobile")!).subscribe((data:any)=>{this.travelinsurances=data; console.log(data)});
//   }

//   ngOnInit(): void {
//   }

//   approve(){
//     //  this.amt = document.getElementById("amt")?.nodeValue;
//     // console.log('pid: '+this.motorclaims );
//     this.approveMotorClaim.approveMotorClaim(10000010055,this.amt,'Shalini').subscribe(data=>{console.log(data)});
//   }

// }
