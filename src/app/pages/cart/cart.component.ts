import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl:'cart.component.html',
})
export class CartComponent implements OnInit{

  cart:Cart={items:[
    {
      product:'https://via.placeholder.com/150',
      name:'ASUS',
      price:1200,
      quantity:3,
      id:1,
    },
    {
      product:'https://via.placeholder.com/150',
      name:'DELL',
      price:900,
      quantity:1,
      id:2,
    },
  ]};

  dataSource:Array<CartItem>=[];
  displayedColumns:Array<string>=[
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]

  constructor(){}

  ngOnInit(): void {
    this.dataSource=this.cart.items;
  }

  getTotal(items:Array<CartItem>):number{
    return items.map((item) => item.price*item.quantity)
      .reduce((prev,current) => prev + current , 0);
  }

}
