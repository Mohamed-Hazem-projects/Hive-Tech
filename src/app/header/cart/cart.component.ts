import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { CartProduct } from '../../Models/cartProduct';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) { }
  cartOpen: Boolean = false;
  products: CartProduct[] = [];
  subTotal: number = 0;

  ngOnInit(): void {
    this.cartService.getSubTotal.subscribe((subTotal: number) => {
      this.subTotal = subTotal
    })
    this.cartService.getProduct.subscribe((product: CartProduct) => {
      this.products.push(product)
    })
  }

  clickCart() {
    this.cartOpen = !this.cartOpen
  }
  closeCart() {
    this.cartOpen = false;
  }
  removeProduct(product: CartProduct) {
    let index = this.products.indexOf(product)
    this.subTotal -= Number(product.price);
    this.cartService.setSubtotal(this.subTotal)
    this.products.splice(index, 1)
  }

}
