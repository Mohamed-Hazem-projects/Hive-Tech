import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartService } from '../../../Services/cart.service';
import { ILaptop } from '../../../Models/ILaptop';
import { LaptopData } from '../../../Data/laptopData';


@Component({
  selector: 'laptops-deals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './laptops-deals.component.html',
  styleUrl: './laptops-deals.component.scss'
})
export class LaptopsDealsComponent {
  customButton: boolean = true;
  preBuiltButton: Boolean = false;

  prebuilt1!: ILaptop;
  prebuilt2!: ILaptop;
  prebuilt3!: ILaptop;
  prebuilt4!: ILaptop;

  cartService: CartService = inject(CartService)

  ngOnInit(): void {
    this.prebuilt1 = LaptopData.laptops[0]
    this.prebuilt2 = LaptopData.laptops[1]
    this.prebuilt3 = LaptopData.laptops[6]
    this.prebuilt4 = LaptopData.laptops[7]
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
  }
  toCart3() {
    this.cartService.toService(
      this.prebuilt3.name,
      (this.prebuilt3.oldprice - this.prebuilt3.discount).toFixed(2), 1,
      this.prebuilt3.imageUrl
    )
  }
  toCart4() {
    this.cartService.toService(
      this.prebuilt4.name,
      (this.prebuilt4.oldprice - this.prebuilt4.discount).toFixed(2), 1,
      this.prebuilt4.imageUrl
    )
  }
}
