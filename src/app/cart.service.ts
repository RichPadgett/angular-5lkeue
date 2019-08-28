import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class CartService {

  items = [];

  constructor() { }

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

}