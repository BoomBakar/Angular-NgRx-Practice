import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-desi',
  templateUrl: './desi.component.html',
  styleUrls: ['./desi.component.scss']
})
export class DesiComponent {

  Biryani = {
    title: 'Biriyani',
    price: 200,
    img: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/hyderabadi-biryani-recipe.jpg'
  }
  Karahi = {
    title: 'Karahi',
    price: 300,
    img: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/chicken-karahi-recipe.jpg'
  }
  Korma = {
    title: 'Korma',
    price: 400,
    img: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/chicken-korma-recipe.jpg'
  }

}
