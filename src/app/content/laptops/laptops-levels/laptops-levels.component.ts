import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { CartService } from '../../../Services/cart.service';
import { LaptopLevelSlideDirective } from '../../../Directives/laptopLevelSlide.directive';
import { ILaptop } from '../../../Models/ILaptop';
import { LaptopData } from '../../../Data/laptopData';

@Component({
  selector: 'laptops-levels',
  standalone: true,
  imports: [CommonModule, LaptopLevelSlideDirective],
  templateUrl: './laptops-levels.component.html',
  styleUrl: './laptops-levels.component.scss'
})
export class LaptopsLevelsComponent implements OnInit {

  screenWidth!: number;
  index: number = 0;
  hideAfterButton: boolean = false;
  cartService: CartService = inject(CartService)
  laptops: ILaptop[] = LaptopData.laptops

  ngOnInit(): void {
    this.screenWidth = window.innerWidth
  }

  @HostListener('window:resize', ['$event.target'])
  onClick(event: { innerWidth: any; }) {
    this.screenWidth = event.innerWidth
  }
  before() {
    this.hideAfterButton = false
    if (this.index > 0) {
      this.index -= 331.25;
    } else {
      this.index = 0;
    }
  }
  after() {
    if (this.screenWidth > 700 && this.screenWidth < 1350) {
      if (this.index < 662.5) {
        this.index += 331.25;
      } else {
        this.index = 662.5;
      }
      if (this.index === 662.5) {
        this.hideAfterButton = true
      }
    }
    else if (this.screenWidth < 700) {
      if (this.index < 993.75) {
        this.index += 331.25;
      } else {
        this.index = 993.75;
      }
      if (this.index === 993.75) {
        this.hideAfterButton = true
      }
    }
  }
  getValue() {
    return `translateX(-${this.index}px)`
  }

  toCart(index: number) {
    this.cartService.toService(this.laptops[index + 2].name,
      this.laptops[index + 2].oldprice.toFixed(2), 1
      , this.laptops[index + 2].imageUrl)
  }

}
