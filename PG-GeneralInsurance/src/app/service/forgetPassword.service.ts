import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResetPassword } from '../model/resetPassword';

@Injectable()
export class ForgetPassword{
    constructor(private hc:HttpClient){

    }
    public sendMail(id:string){
        //Change the link
        return this.hc.get("http://localhost:53421/api/ForgetPassword?email="+id);
    }

    public savePass(d:ResetPassword){
        //Change the link
        return this.hc.put("http://localhost:53421/api/ForgetPassword",d);
    }
}