import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import customer from '../Model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http:HttpClient) { }


  display()
  {
    return this.http.get<customer[]>('https://localhost:7140/api/Customer');
  }
}
