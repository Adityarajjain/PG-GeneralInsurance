import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model : any={};    
  errorMessage:string="";
  mobile_Number:any;
  password:any;
  userlogin:any;
  submitted = false;
  loginForm: FormGroup = new FormGroup({});
  constructor(private router:Router,public fb:FormBuilder,private LoginService:LoginService) {
    this.loginForm = fb.group({
      Mobile_Number:['', [Validators.required,Validators.minLength(10),Validators.pattern("[0-9]*")]],
      Password:['',[Validators.required,Validators.minLength(8)]]});
   }

  ngOnInit(){

  }
  get f() { return this.loginForm.controls; }

  OnLoginByUser(){​​​​
    // this.submitted = true;
      this.LoginService.UserLoginValid(this.mobile_Number,this.password).subscribe(
      // ta=>this.userlogin=ta
      (data:any) => {    
        console.log(JSON.stringify(data.Message));  
              if(data.Message=="Welcome")    
              { this.router.navigateByUrl('/user-dashboard');
                // console.log(data);  
                sessionStorage.setItem("userMobile",this.mobile_Number);
                localStorage.setItem('LoggedIn', 'true');
              }    
              else{    
                this.errorMessage ="Invalid Mobile number or Password";  
              }    
            },    
            error => {    
              this.errorMessage ="Invalid Mobile number or Password";     
            });  
  }​​​​


  // login(){    
   
  //   // this.LoginService.Login(this.model).subscribe(    
  //   //   data => {    
            
  //   //     if(data.Message=="Welcome")    
  //   //     { this.router.navigateByUrl('/user-dashboard');
  //   //       //this.router.navigate(['/Dasboard']);  
  //   //       console.log(data.Message);  
  //   //       sessionStorage.setItem("userMobile",this.model.Mobile_Number);
             
  //   //     }    
  //   //     else{    
  //   //       this.errorMessage ="Invalid Mobile number or Password";  
  //   //     }    
  //   //   },    
  //   //   error => {    
  //   //     this.errorMessage ="Invalid Mobile number or Password";     
  //   //   });  
       
  // };    
}
