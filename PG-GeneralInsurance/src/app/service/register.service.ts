import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../model/register';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient:HttpClient) { }

  public addUsers(register:Register)
  {
    return this.httpClient.post("http://localhost:53421/api/registration",register);
  }
}