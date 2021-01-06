import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../model/register';

import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register:Register
  constructor(private registerService:RegisterService,private route:Router) {
    this.register=new Register();
   }
  
  InsertUser()
   {
    if (this.register.Mobile_Number == ''  ) {
      alert('Mobile Number is Mandatory')
      return
     }
    if (this.register.Password ==  '') {
      alert('Enter password')
      return
    }
    if (this.register.Name ==  '') {
      alert('Enter name')
      return
    }
    if (this.register.Email_Id==  '') {
      alert('Enter email Id')
      return
    }
    if (this.register.Gender ==  '') {
      alert('Enter gender')
      return
    }
    if (this.register.Door_Number ==  '') {
      alert('Enter Door Number')
      return
    }
    if (this.register.Street == '') {
      alert('Enter Street')
      return
    }
    if (this.register.District== '') {
      alert('Upload District')
      return
    }
    if (this.register.State== '') {
      alert('Upload State')
      return
    }
    if (this.register.Pincode== '') {
      alert('Upload Pincode')
      return
    }
     this.registerService.addUsers(this.register).subscribe(data=>console.log(data))
     alert("User registered");
     this.route.navigateByUrl('/login')
   }

  ngOnInit(): void {
  }

}
