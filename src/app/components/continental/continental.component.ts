import { Component } from '@angular/core';

@Component({
  selector: 'app-continental',
  templateUrl: './continental.component.html',
  styleUrls: ['./continental.component.scss']
})
export class ContinentalComponent {

  Burger = {
    title: 'Burger',
    price: 200,
    img: 'https://www.burgerking.in/sites/default/files/vegwhopper_0.png'
  }
  Pizza = {
    title: 'Pizza',
    price: 300,
    img: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/chicken-karahi-recipe.jpg'
  }
  Sandwich = {
    title: 'Sandwich',
    price: 400,
    img: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/chicken-korma-recipe.jpg'
  }
}
