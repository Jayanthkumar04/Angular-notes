import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../common/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[] = [];
  private totalQuantitySubject = new BehaviorSubject<number>(0);
  private totalPriceSubject = new BehaviorSubject<number>(0);

  totalQuantity$ = this.totalQuantitySubject.asObservable();
  totalPrice$ = this.totalPriceSubject.asObservable();

  addToCart(product: CartItem) {
    const existingItem = this.cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.updateCartTotals();
  }

  updateCartTotals() {
    const totalQuantity = this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = this.cartItems.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);

    this.totalQuantitySubject.next(totalQuantity);
    this.totalPriceSubject.next(totalPrice);
  }

  getCartItems(): CartItem[] {
    return [...this.cartItems];
  }

  incrementQuantity(item: CartItem) {
    const existingItem = this.cartItems.find(ci => ci.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
      this.updateCartTotals();
    }
  }

  decrementQuantity(item: CartItem) {
    const targetItem = this.cartItems.find(ci => ci.id === item.id);
    if (targetItem) {
      targetItem.quantity--;
      if (targetItem.quantity <= 0) {
        this.cartItems = this.cartItems.filter(ci => ci.id !== item.id);
      }
      this.updateCartTotals();
    }
  }

  removeItem(item: CartItem) {
    this.cartItems = this.cartItems.filter(ci => ci.id !== item.id);
    this.updateCartTotals();
  }
}