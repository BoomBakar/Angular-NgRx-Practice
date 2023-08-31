import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './store/cart.reducers';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DesiComponent } from './components/desi/desi.component';
import { ContinentalComponent } from './components/continental/continental.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DesiComponent,
    ContinentalComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({cartCount: cartReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
