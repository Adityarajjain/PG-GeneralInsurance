import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-insurance',
  templateUrl: './buy-insurance.component.html',
  styleUrls: ['./buy-insurance.component.css']
})
export class BuyInsuranceComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToMotorInsurance(){
    // this.onBuyInsurance=false;
    this.router.navigateByUrl('motor-insurance');
  }
  goToTravelInsurance(){
    // this.onBuyInsurance=false;
    this.router.navigateByUrl('travel-insurance');
  }
}
