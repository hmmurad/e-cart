import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // products$ = this.ps.getProducts$
  products: any = []

  constructor(private ps: ProductsService, private cartService: CartService)  { }

  ngOnInit(): void {
    this.ps.getProducts().subscribe(
      (res: any) => {
        this.products = res
        this.products.forEach((a:any ) => {
          Object.assign(a, {quantity: 1, total: a.price})
        });
      }
    )
  }

  addToCart(p: any) {
    this.cartService.addtocart(p)
  }

}
