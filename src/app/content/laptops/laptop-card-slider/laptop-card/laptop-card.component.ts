import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IbigProduct } from '../../../../Models/IbigProduct';
import { CartService } from '../../../../Services/cart.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'laptop-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './laptop-card.component.html',
  styleUrl: './laptop-card.component.scss'
})
export class LaptopCardComponent {
  constructor(private cartService: CartService) { }
  buyNumber: number = 1;
  math = Math;
  @Input() theProduct!: IbigProduct;
  subtractProduct() {
    return this.buyNumber > 0 ? this.buyNumber-- : this.buyNumber;
  }
  addProduct() {
    return this.buyNumber < this.theProduct.stock ? this.buyNumber++ : this.buyNumber;
  }
  addToCart() {
    if (this.theProduct.stock > 0 && this.buyNumber > 0) {
      this.cartService.toService(
        this.theProduct.name,
        ((this.theProduct.oldprice - this.theProduct.discount) * this.buyNumber).toFixed(2),
        this.buyNumber,
        this.theProduct.imageUrl
      )
    }
  }
}
