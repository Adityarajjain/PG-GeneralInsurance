import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { LoginService } from '../service/login.service';    
 import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  model : any={};    
  errorMessage:string="";

  constructor(private router:Router,private LoginService:LoginService) { }

  ngOnInit(){

  }
  login(){    
   
    this.LoginService.Login(this.model).subscribe(    
      data => {    
            
        if(data.Message=="Welcome")    
        {
           this.router.navigateByUrl('admin/dashboard',{skipLocationChange:true});
          //this.router.navigate(['/Dasboard']);  
          console.log(data.Message);  
          sessionStorage.setItem("adminUsername",this.model.Username);
          localStorage.setItem('AdminLoggedIn', 'true');
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
















// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-admin-login',
//   templateUrl: './admin-login.component.html',
//   styleUrls: ['./admin-login.component.css']
// })
// export class AdminLoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
