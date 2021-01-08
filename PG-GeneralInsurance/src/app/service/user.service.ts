import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
  

@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(private getHttp:HttpClient){}

    public getUser(Mobile_Number:string){
        return this.getHttp.get("http://localhost:53421/api/User?Mobile_Number="+Mobile_Number);
    }
}