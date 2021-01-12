import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ExpiredPolicyService{

    constructor(private expHttp:HttpClient){
        
    }
    public DisplayExpiredInsurance(mobile_number:string){
        return this.expHttp.get("http://localhost:53421/api/DisplayPrevIns?mobile="+mobile_number);
    }
}