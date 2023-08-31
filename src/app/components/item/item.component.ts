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

  addToCart(item:any) {
    this.store.dispatch(addToCart());
  }
  removeFromCart() {
    this.store.dispatch(removeFromCart());
  }
}
