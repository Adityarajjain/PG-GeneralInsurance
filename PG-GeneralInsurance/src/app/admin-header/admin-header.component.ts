import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  isAdminLoggedIn:boolean;
  constructor() { 
    this.isAdminLoggedIn=JSON.parse(localStorage.getItem('AdminLoggedIn')!)
  }

  ngOnInit(): void {
  }
  logoutClicked(){
    localStorage.setItem('AdminLoggedIn', 'false');
  }
}
