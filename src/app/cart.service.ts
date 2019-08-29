import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class CartService {

  items = [];

  constructor(private http: HttpClient ) { }

  // Fill Shopping cart
  addItemsToCart(product) {
    this.items.push(product);
  }

  // retrieve cart
  getItems() {
    return this.items;
  }

  // empty shopping cart
  clearCart() {
    this.items = [];
    return this.items;
  }

  // Http get shipping prices
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}