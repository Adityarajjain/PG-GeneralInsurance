import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class LoginService {
Url :string;   
header : any;
  constructor(private http : HttpClient) 
  { 
    this.Url = 'http://localhost:53421/api/UserLogin/';
    const headerSettings: {[name: string]: string | string[]; } = {};  
        this.header = new HttpHeaders(headerSettings); 
  }
  Login(model : any){  
      
     var a =this.Url;  
     return this.http.post<any>(this.Url,model,{ headers: this.header}); 
  }  
   
}
  

  