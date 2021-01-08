import { Component, Input, OnInit } from '@angular/core';
import { MotorInsuranceTable } from '../model/motorInsuranceTable';
import { Transaction } from '../model/transaction';
import { UserDetails } from '../model/user';
import { MotorInsuranceDetailsService } from '../service/motorInsuranceDetails.service';
import { TransactionService } from '../service/transaction.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
  
})
export class PaymentComponent implements OnInit {

  @Input() motorInsObj:any;
  premium_amt:any;
  user:UserDetails;
  transaction:Transaction;
  constructor(private userService:UserService, private premiumService:MotorInsuranceDetailsService, private transac:TransactionService) { 
    this.user=new UserDetails();
    this.transaction=new Transaction();
    this.premiumService.getPolicyId().subscribe((data:any)=>{this.transaction.Motor_Policy_Id=data; console.log('data: '+data)});
  }

  ngOnInit(): void {    
    this.userService.getUser(this.motorInsObj.Mobile_Number).subscribe((data:any)=>{this.user=data});
    this.premiumService.getPremium(this.motorInsObj.Manufacturer,this.motorInsObj.Model_Name,this.motorInsObj.Purchase_Date).subscribe((data:any)=>this.premium_amt=data);
  }

  doTransaction(){
    var id;
      
      
      console.log("motor policy id: "+this.transaction.Motor_Policy_Id)
      this.transaction.Premium_Amount=this.premium_amt;
      this.transaction.Payment_Date=new Date().toDateString();
      this.transac.addTransaction(this.transaction).subscribe();
      alert('Payment Successful!');
  }
}
