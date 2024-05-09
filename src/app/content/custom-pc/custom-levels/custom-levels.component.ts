import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { CustomLevelSlideDirective } from '../../../Directives/custom-level-slide.directive';
import { CartService } from '../../../Services/cart.service';

@Component({
  selector: 'custom-levels',
  standalone: true,
  imports: [CommonModule, CustomLevelSlideDirective],
  templateUrl: './custom-levels.component.html',
  styleUrl: './custom-levels.component.scss'
})
export class CustomLevelsComponent implements OnInit {

  screenWidth!: number;
  index: number = 0;
  hideAfterButton: boolean = false;
  cartService: CartService = inject(CartService)

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
  namesArray: string[] = ['AMD Ryzen 5 Starter PC', 'Intel Core 14th Gen Pro Gaming PC',
    'AMD Ryzen 9 Elite Gaming PC', 'Intel Core 14th Gen Extreme Gaming PC'
  ]
  pricesArray: string[] = ['1119', '1569', '2359', '3499']
  imagesArray: string[] = [
    'assets/images/prebuilt5.avif',
    'assets/images/prebuilt6.avif',
    'assets/images/prebuilt7.avif',
    'assets/images/prebuilt8.avif'
  ]
  toCart(index: number) {
    this.cartService.toService(this.namesArray[index], this.pricesArray[index], 1
      , this.imagesArray[index])
  }
}
