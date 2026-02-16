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

  makePayment():void{
    if(this.paymentForm.invalid){
      return;
    }

    this.isLoading = true;

    const orderData:StudentOrder = this.paymentForm.value;

    console.log(orderData);
    this.paymentService.createOrder(orderData).subscribe(
      {
        next:(response) => {
             
              console.log(response);
        }
      }
    )
  }


}
