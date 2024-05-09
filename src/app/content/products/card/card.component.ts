import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Iproduct } from '../../../Models/Iproduct';
import { CartService } from '../../../Services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  constructor(private cartService: CartService) { }
  buyNumber: number = 1;
  math = Math;
  @Input() theProduct!: Iproduct;
  subtractProduct() {
    return this.buyNumber > 0 ? this.buyNumber-- : this.buyNumber;
  }
  addProduct() {
    return this.buyNumber < this.theProduct.stock ? this.buyNumber++ : this.buyNumber;
  }
  addToCart() {
    if (this.theProduct.stock > 0 && this.buyNumber > 0) {
      this.cartService.toService(
        this.theProduct.productDescription,
        ((this.theProduct.oldprice - this.theProduct.discount) * this.buyNumber).toFixed(2),
        this.buyNumber,
        this.theProduct.imageUrl
      )
    }
  }
}
