import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class RenewalDisplayService{
    constructor(private httpClient:HttpClient,private httClient:HttpClient,private htClient:HttpClient,private payHttp:HttpClient){}

    public DisplayUserAndInsurance(pol:number){
        return this.httpClient.get("http://localhost:53421/api/DisplayPrevIns?policyid="+pol);
    }

    public DisplayForRefer(polic:number){
        return this.httClient.get("http://localhost:53421/api/DisplayPrevIns?policyid="+polic);
    }

    public DisplayDeprecitedValue(policyid:number,manufacturer:string,modelname:string){
        return this.htClient.get("http://localhost:53421/api/CalcPremium?policyid="+policyid+"&manu="+manufacturer+"&model="+modelname);
    }

    public MakePaymentOfDepreciatedValue(policy:number,amount:number,year:number){
        return this.payHttp.get("http://localhost:53421/api/RenewalTransaction?policyid="+policy+"&amount="+amount+"&year="+year)
    }
    
}