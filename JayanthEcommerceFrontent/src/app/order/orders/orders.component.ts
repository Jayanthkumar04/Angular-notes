import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Customer } from '../../common/Customer';
import { Address } from '../../common/Address';
import { OrderItem } from '../../common/OrderItem';
import { CartService } from '../../cart/cart.service';
import { PurchaseRequest } from '../../common/PurchaseRequest';
import { CheckoutService } from '../checkout.service';
import { RazorpayService } from '../razorpay.service';
import { PurchaseResponse } from '../../common/PurchaseResponse';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {


  cartQuantity = 0;
  cartTotal = 0;




  checkoutForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private checkoutService: CheckoutService,
    private cartService: CartService,
    private razorpayService: RazorpayService
    
  ) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      houseNum: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.cartService.totalQuantity$.subscribe(q => this.cartQuantity = q);
    this.cartService.totalPrice$.subscribe(p => this.cartTotal = p);
  }


  onSubmit() {
    const customer: Customer = {
      name: this.checkoutForm.value.name,
      email: this.checkoutForm.value.email,
      phno: this.checkoutForm.value.phone
    };

    const shippingAddress: Address = {
      houseNum: this.checkoutForm.value.houseNum,
      street: this.checkoutForm.value.street,
      city: this.checkoutForm.value.city,
      state: this.checkoutForm.value.state,
      zipcode: this.checkoutForm.value.zip,
      country: this.checkoutForm.value.country
    };

    const orderItems: OrderItem[] = this.cartService.getCartItems().map(item => ({
      productId: item.id,
      quantity: item.quantity,
      unitPrice: item.unitPrice,
      imageUrl: item.imageUrl
    }));

    const payload: PurchaseRequest = {
      customer,
      shippingAddress,
      orderItems
    };

    this.checkoutService.placeOrder(payload).subscribe((res: PurchaseResponse) => {

      console.log("sending payload",payload)
      this.razorpayService.openRazorpayPopup(res)

    });
  
  }

}