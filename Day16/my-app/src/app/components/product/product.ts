import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CardComponent } from '../card/card';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor, CardComponent],
  templateUrl: './product.html'
})
export class ProductComponent {
  products = [
    {
      title: 'Chicken Shawarma',
      description: 'Wrap with garlic sauce and pickles',
      image: 'https://foodish-api.com/images/biryani/biryani1.jpg',
      price: 120
    },
    {
      title: 'Egyptian Koshari',
      description: 'Pasta, rice, lentils, spicy tomato sauce',
      image: 'https://foodish-api.com/images/rice/rice1.jpg',
      price: 55
    },
    {
      title: 'Margherita Pizza',
      description: 'Mozzarella, tomato sauce, fresh basil',
      image: 'https://foodish-api.com/images/pizza/pizza1.jpg',
      price: 180
    },
    {
      title: 'Beef Burger',
      description: 'Cheddar, lettuce, tomato, house sauce',
      image: 'https://foodish-api.com/images/burger/burger1.jpg',
      price: 160
    },
    {
      title: 'Falafel Plate',
      description: 'Crispy falafel with tahini and salad',
      image: 'https://foodish-api.com/images/samosa/samosa1.jpg',
      price: 35
    },
    {
      title: 'Spiced Rice',
      description: 'Rice with nuts and raisins',
      image: 'https://foodish-api.com/images/rice/rice2.jpg',
      price: 75
    },
    {
      title: 'Pepperoni Pizza',
      description: 'Pepperoni and melted mozzarella',
      image: 'https://foodish-api.com/images/pizza/pizza2.jpg',
      price: 195
    },
    {
      title: 'Double Cheeseburger',
      description: 'Two patties, double cheese, pickles',
      image: 'https://foodish-api.com/images/burger/burger2.jpg',
      price: 185
    },
    {
      title: 'Creamy Pasta',
      description: 'Pasta in creamy white sauce',
      image: 'https://foodish-api.com/images/pasta/pasta1.jpg',
      price: 140
    },
    {
      title: 'Veggie Pasta',
      description: 'Pasta with seasonal vegetables',
      image: 'https://foodish-api.com/images/pasta/pasta2.jpg',
      price: 135
    },
    {
      title: 'Chicken Biryani',
      description: 'Fragrant rice with spiced chicken',
      image: 'https://foodish-api.com/images/biryani/biryani2.jpg',
      price: 150
    },
    {
      title: 'Classic Burger',
      description: 'Tomato, onion, lettuce, special sauce',
      image: 'https://foodish-api.com/images/burger/burger3.jpg',
      price: 150
    }
  ];
}
