import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../model/user';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Username:string;
  user:UserDetails;
  constructor(private userService:UserService) { 
    this.user=new UserDetails();
    this.userService.getUser(sessionStorage.getItem("userMobile")!).subscribe((data:any)=>{this.user=data; console.log(data)});
    this.Username=this.user.Name;
    console.log('Name: '+this.user)
  }

  ngOnInit(): void {
  }

}
