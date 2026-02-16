import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PurchaseRequest } from '../common/PurchaseRequest';
import { Observable } from 'rxjs';
import { PurchaseResponse } from '../common/PurchaseResponse';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private apiUrl = 'http://localhost:8081/api/checkout';

  constructor(private http: HttpClient) {}

  placeOrder(payload: PurchaseRequest): Observable<PurchaseResponse> {
    console.log(payload);
    return this.http.post<PurchaseResponse>(this.apiUrl, payload);
  }
}
