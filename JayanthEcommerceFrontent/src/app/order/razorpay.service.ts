import { Injectable } from '@angular/core';
import { PurchaseRequest } from '../common/PurchaseRequest';
import { PurchaseResponse } from '../common/PurchaseResponse';

declare var Razorpay:any;
@Injectable({
  providedIn: 'root'
})
export class RazorpayService {
  openRazorpayPopup(response: PurchaseResponse): void {
    const options: any = {
      key: 'rzp_test_VpP0kp6lxP85xP', // Replace with your actual key
      amount:  response.amount*100, // in paise
      currency: 'INR',
      name: 'JAYANTH ECOMMERCE STORE',
      description: 'Order Payment',
      order_id: response.razorpayOrderId,

      handler: (payment: any) => {
        alert('Payment Successful!\nPayment ID: ' + payment.razorpay_payment_id);
        // Optionally, send confirmation to backend or navigate to confirmation page
      }
    };

      const rzp = new Razorpay(options);
    
      rzp.open();

    // const rzp = new Razorpay(options);
    // rzp.open();
  }
}