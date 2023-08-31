import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private store : Store<any>){

    
  }
  
  cart = this.store.select('cart');

  
  
}
