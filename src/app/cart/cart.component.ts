import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItem: any;
  grandTotal!: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.grandTotal = this.cartService.totalPrice()
    this.cartService.getProducts()
      .subscribe((res:any) => {
        this.cartItem = res
      })
  }

  remove(item:any) {
    this.cartService.removecartItem(item)
  }

  emptyCart() {
    this.cartService.removeAll()
  }

}
