import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PaymentService } from '../services/payment.service';
import { StudentOrder } from '../common/student-order';


declare var Razorpay:any;
@Component({
  selector: 'app-razorpage',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './razorpage.component.html',
  styleUrl: './razorpage.component.css'
})
export class RazorpageComponent {

  paymentForm!:FormGroup;

  isLoading = false;


  constructor(
    private fb:FormBuilder,
    private paymentService:PaymentService
  ){

    this.paymentForm = this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phno:['',Validators.required],
      course:['',Validators.required],
      amount:['',Validators.required]
    });

  }

  makePayment(): void {
  if (this.paymentForm.invalid) {
    return;
  }

  this.isLoading = true;

  const orderData: StudentOrder = this.paymentForm.value;

  this.paymentService.createOrder(orderData).subscribe({
    next: (response) => {

      const options = {
        key: 'rzp_test_SGsIHYSLIBF1ry',   // same as backend key
        amount: response.amount * 100,
        currency: 'INR',
        name: 'Student Course Payment',
        description: response.course,
        order_id: response.razorpayOrderId,

        handler: (paymentResponse: any) => {
          console.log("Payment Success", paymentResponse);

          this.paymentService.verifyPayment(paymentResponse)
              .subscribe(res => {
                 alert("Payment Successful ✅");
                 this.isLoading = false;
              });
        },

        prefill: {
          name: response.name,
          email: response.email,
          contact: response.phno
        },

        theme: {
          color: '#3399cc'
        }
      };

      const rzp = new Razorpay(options);
      rzp.open();
    },
    error: () => {
      this.isLoading = false;
    }
  });
}


}
