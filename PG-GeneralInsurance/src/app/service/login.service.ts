import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
// import {HttpHeaders} from '@angular/common/http'; 
import {​​​​map}​​​​ from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class LoginService {
// Url :string;   
header : any;
  constructor(private userHttp : HttpClient) 
  { 
    // this.Url = 'http://localhost:53421/api/UserLogin/';
    // const headerSettings: {[name: string]: string | string[]; } = {};  
    //     this.header = new HttpHeaders(headerSettings); 
  }
  // Login(model : any){  
      
  //    var a =this.Url;  
  //    return this.http.post<any>(this.Url,model,{ headers: this.header}); 
  // }  

  public UserLoginValid(mobile:string,passw:string){​​​​

    return this.userHttp.get("http://localhost:53421/api/UserLogin?mobile="+mobile+"&passw="+passw)

    .pipe(

        map(user=>{​​​​

            localStorage.setItem("currentuser",JSON.stringify(user))
            return user;

        }​​​​)

    );

}​​​​
   
}
  

  