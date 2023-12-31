import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/services/cart.service';
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

  constructor(private cartService:CartService,private _snackbar:MatSnackBar){}

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart:Cart)=>{
      this.cart=_cart;
      this.dataSource=this.cart.items;
    });
  }

  getTotal(items:Array<CartItem>):number{
    return this.cartService.getTotal(items)
  }

  onClearCart():void{
    this.cartService.clearCart();
  }

  onRemoveFromCart(item:CartItem):void{
    this.cartService.removeFromCart(item);
  }

  onAddQuantity(item:CartItem):void{
    this.cartService.addToCart(item);
  }

  onRemoveQuantity(item:CartItem):void{
    this.cartService.removeQuantity(item);
  }

  onCheckout():void{
    this._snackbar.open('Order Completed!','OK',{duration:3000});
  }

}
