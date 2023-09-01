import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCart, selectCartLength } from 'src/app/store/cart.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private store : Store<any>){
  }
  cart: any[] = [];
  cartLength:any;

  ngOnInit():void {
    this.store.select(selectCart).subscribe(res => {
      this.cart = res;
      console.log("Cart: ", this.cart)
      console.log("Cart length: ", this.cart.length)
      console.log("res:", res)

    });
    this.cartLength = this.store.select(selectCartLength);
  }
  

  
  
}
