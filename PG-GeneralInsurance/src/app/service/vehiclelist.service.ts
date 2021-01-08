import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
  

@Injectable({
  providedIn: 'root'
})
export class VehiclelistService {
    constructor(private getHttp:HttpClient){}

    public getManufacturers(){
        return this.getHttp.get("http://localhost:53421/api/Vehicles");
    }
    public getModels(manufacturer:string){
        return this.getHttp.get("http://localhost:53421/api/Vehicles?manu="+manufacturer);
    }
}