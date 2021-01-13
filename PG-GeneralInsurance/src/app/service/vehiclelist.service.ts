import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
  

@Injectable({
  providedIn: 'root'
})
export class VehiclelistService {
    constructor(private getHttp:HttpClient, private get2Client:HttpClient){}

    public getManufacturers(){
        return this.getHttp.get("http://localhost:53421/api/Vehicles/GetManufacturers_4W");
    }
    public getManufacturers_2W(){
        return this.get2Client.get("http://localhost:53421/api/Vehicles/GetManufacturers_2W");
    }
    public getModels(manufacturer:string){
        return this.getHttp.get("http://localhost:53421/api/Vehicles?manu="+manufacturer);
    }
}