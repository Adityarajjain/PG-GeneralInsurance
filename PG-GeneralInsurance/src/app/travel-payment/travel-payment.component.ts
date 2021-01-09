import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../model/transaction';
import { UserDetails } from '../model/user';
import { TransactionService } from '../service/transaction.service';
import { TravelInsuranceDetailsService } from '../service/travelInsuranceDetails.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-travel-payment',
  templateUrl: './travel-payment.component.html',
  styleUrls: ['./travel-payment.component.css']
})
export class TravelPaymentComponent implements OnInit {

  @Input() travelInsObj:any;
  user:UserDetails;
  premium_amt:number;
  transaction:Transaction;

  constructor(private userService:UserService,private transac:TransactionService, private premiumService:TravelInsuranceDetailsService) { 
    this.user=new UserDetails();
    this.premium_amt=NaN;
     this.transaction=new Transaction();
     this.premiumService.getPolicyId().subscribe((data:any)=>{this.transaction.Travel_Policy_Id=data; console.log('data: '+data)});
  }

  ngOnInit(): void {
    console.log(this.travelInsObj.Mobile_Number)
    this.userService.getUser(this.travelInsObj.Mobile_Number).subscribe((data:any)=>{console.log(data);this.user=data});
    if(this.travelInsObj.Insurance_Plan=="Standard")
      this.premium_amt=750;
    else if(this.travelInsObj.Insurance_Plan=="Gold")
      this.premium_amt=1500;
  }

  doTransaction(){
    this.transaction.Premium_Amount=this.premium_amt;
    this.transaction.Payment_Date=new Date().toDateString();
    this.transac.addTransaction(this.transaction).subscribe();
    alert('Payment Successful!');
  }
}
