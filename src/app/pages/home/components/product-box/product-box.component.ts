import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: 'product-box.component.html',
})
export class ProductBoxComponent implements OnInit{

  @Input() fullWidthMode=false;

  product:Product | undefined={
    id:1,
    title:'ASUS',
    price:1200,
    category:'Laptop',
    description:'ASUS ROG 15',
    image:'https://via.placeholder.com/150',
  };

  @Output() addToCart=new EventEmitter();

  constructor(){}

  ngOnInit(): void {
  }

  onAddToCart():void{
    this.addToCart.emit(this.product);
  }

}
