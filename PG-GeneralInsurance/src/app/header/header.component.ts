import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() public isUserLoggedIn: boolean;
  loggedIn:boolean;
  constructor(private router:Router) { 
    this.loggedIn=false;
    this.isUserLoggedIn=JSON.parse(localStorage.getItem('LoggedIn')!);
    // console.log('isUser Logged IN: '+this.isUserLoggedIn)
  }

  ngOnInit(): void {
   
  }
  loginClicked(){
    var local= localStorage.getItem("currentuser");
    if(!local)
      this.loggedIn=false;
    else
      this.loggedIn=true;

      // console.log("LOGGED IN: "+this.loggedIn);
  }

  logoutClicked(){
    this.isUserLoggedIn=false;
    localStorage.removeItem('currentuser');
    sessionStorage.removeItem('userMobile');
    localStorage.setItem('LoggedIn', 'false');

    this.router.navigate(['home']);
  }

  logout(){​​

    localStorage.removeItem('currentuser');
    this.router.navigate(['/home']);

  }​​

}
