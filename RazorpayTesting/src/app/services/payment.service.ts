import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentOrder } from '../common/student-order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {


  apiUrl:string="http://localhost:8080"
  constructor(private httpClient:HttpClient) { }


  createOrder(order: StudentOrder): Observable<StudentOrder> {
    console.log("request sent successfull");
    return this.httpClient.post<StudentOrder>(
      `${this.apiUrl}/create-order`,
      order
    );
  }

}
