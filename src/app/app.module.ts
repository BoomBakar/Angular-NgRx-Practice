import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule, provideStore } from '@ngrx/store';
import { cartReducer } from './store/cart.reducers';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DesiComponent } from './components/desi/desi.component';
import { ContinentalComponent } from './components/continental/continental.component';
import { ItemComponent } from './components/item/item.component';
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DesiComponent,
    ContinentalComponent,
    ItemComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({cart: cartReducer})
  ],
  providers: [provideStore()],
  bootstrap: [AppComponent]
})
export class AppModule { }
