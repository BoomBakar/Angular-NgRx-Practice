import { Component, Inject, Input } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { addToCart,removeFromCart } from 'src/app/store/cart.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() item: any;

  constructor(private store:Store) {

  }
  cart = this.store.select('cart');
  addToCart() {
    this.store.dispatch(addToCart(this.item));
    console.log(this.item);
    console.log(this.store.select('cart'));
  }
  // removeFromCart() {
  //   this.store.dispatch(removeFromCart(this.smth));
  // }
}
