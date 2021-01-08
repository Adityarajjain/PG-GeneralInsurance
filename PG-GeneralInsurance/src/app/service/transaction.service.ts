import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../model/transaction';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient:HttpClient) { }

  public addTransaction(transaction:Transaction)
  {
    return this.httpClient.post("http://localhost:53421/api/Transaction",transaction);
  }
}