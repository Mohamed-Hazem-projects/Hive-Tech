import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { IbigProduct } from '../../../Models/IbigProduct';
import { BigProductsData } from '../../../Data/bigProductsData';
import { CartService } from '../../../Services/cart.service';

@Component({
  selector: 'custom-deals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-deals.component.html',
  styleUrl: './custom-deals.component.scss'
})
export class CustomDealsComponent implements OnInit {

  customButton: boolean = true;
  preBuiltButton: Boolean = false;

  prebuilt1!: IbigProduct;
  prebuilt2!: IbigProduct;
  prebuilt3!: IbigProduct;
  prebuilt4!: IbigProduct;

  cartService: CartService = inject(CartService)

  ngOnInit(): void {
    this.prebuilt1 = BigProductsData.bigProducts[8]
    this.prebuilt2 = BigProductsData.bigProducts[9]
    this.prebuilt3 = BigProductsData.bigProducts[10]
    this.prebuilt4 = BigProductsData.bigProducts[11]
  }

  toggleButtons1() {
    this.customButton = true
    this.preBuiltButton = false
  }
  toggleButtons2() {
    this.customButton = false
    this.preBuiltButton = true
  }

  toCart1() {
    this.cartService.toService(
      this.prebuilt1.name,
      (this.prebuilt1.oldprice - this.prebuilt1.discount).toFixed(2), 1,
      this.prebuilt1.imageUrl
    )
  }
  toCart2() {
    this.cartService.toService(
      this.prebuilt2.name,
      (this.prebuilt2.oldprice - this.prebuilt2.discount).toFixed(2), 1,
      this.prebuilt2.imageUrl
    )
  } toCart3() {
    this.cartService.toService(
      this.prebuilt3.name,
      (this.prebuilt3.oldprice - this.prebuilt3.discount).toFixed(2), 1,
      this.prebuilt3.imageUrl
    )
  } toCart4() {
    this.cartService.toService(
      this.prebuilt4.name,
      (this.prebuilt4.oldprice - this.prebuilt4.discount).toFixed(2), 1,
      this.prebuilt4.imageUrl
    )
  }

}
