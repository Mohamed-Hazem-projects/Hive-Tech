import { EventEmitter, Injectable } from '@angular/core';
import { CartProduct } from '../Models/cartProduct';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private productsInCart: CartProduct | undefined;
  private subTotal: number = 0;

  //getProduct: EventEmitter<CartProduct> = new EventEmitter<CartProduct>();
  getProduct: Subject<CartProduct> = new Subject<CartProduct>()
  getSubTotal: EventEmitter<number> = new EventEmitter<number>();

  toService(name: string, price: string, noOfItems: number, image: string) {

    this.subTotal = this.subTotal + Number(price);
    this.getSubTotal.emit(this.subTotal)

    this.productsInCart = {
      name: name,
      price: price,
      noOfItems: noOfItems,
      image: image
    }
    //this.getProduct.emit(this.productsInCart)
    this.getProduct.next(this.productsInCart)

  }
  setSubtotal(subTotal: number) {
    this.subTotal = subTotal
  }
}
