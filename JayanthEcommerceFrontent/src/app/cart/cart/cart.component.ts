import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../common/CartItem';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
 
  cartItems: CartItem[] = [];
  totalPrice = 0;
  totalQuantity = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();

    this.cartService.totalPrice$.subscribe(price => this.totalPrice = price);
    this.cartService.totalQuantity$.subscribe(quantity => this.totalQuantity = quantity);
  }

  increment(item: CartItem) {
    this.cartService.incrementQuantity(item);
    this.cartItems = this.cartService.getCartItems();
  }

  decrement(item: CartItem) {
    this.cartService.decrementQuantity(item);
    this.cartItems = this.cartService.getCartItems();
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
    this.cartItems = this.cartService.getCartItems();
  }
}
