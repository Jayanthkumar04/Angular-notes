import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductListComponent } from "./product-list/product-list.component";
import { CategoryService } from './services/category.service';
import { category } from './common/category';
import { CommonModule } from '@angular/common';
import { ProductCategoryComponent } from "./product-category/product-category.component";
import { ProductSearchComponent } from "./product-search/product-search.component";
import { CartComponent } from "./cart/cart/cart.component";
import { CartService } from './cart/cart.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, ProductCategoryComponent, ProductSearchComponent, CartComponent,ReactiveFormsModule,FormsModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cartQuantity = 0;
  cartTotal = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.totalQuantity$.subscribe(q => this.cartQuantity = q);
    this.cartService.totalPrice$.subscribe(p => this.cartTotal = p);
  }
}
