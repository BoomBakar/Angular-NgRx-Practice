import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {

  @Output() addItemToCart = new EventEmitter();

  addToCart() {
    this.addItemToCart.emit();
  }
}
