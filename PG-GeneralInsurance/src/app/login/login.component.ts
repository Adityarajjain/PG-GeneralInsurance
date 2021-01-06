import { Component, OnInit } from '@angular/core';
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

  constructor(private router:Router,private LoginService:LoginService) { }

  ngOnInit(){

  }
  login(){    
   
    this.LoginService.Login(this.model).subscribe(    
      data => {    
            
        if(data.Message=="Welcome")    
        { this.router.navigateByUrl('/dashboard');
          //this.router.navigate(['/Dasboard']);  
          console.log(data.Message);  
             
        }    
        else{    
          this.errorMessage ="Invalid Username or Password";  
        }    
      },    
      error => {    
        this.errorMessage ="Invalid Username or Password";     
      });  
       
  };    
}
