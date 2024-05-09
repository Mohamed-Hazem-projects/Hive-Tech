import { Directive, HostListener } from '@angular/core';
import { LaptopOffersComponent } from '../content/laptops/laptop-offers/laptop-offers.component';
@Directive({
  selector: '[offerSlidelaptop]',
  standalone: true
})
export class offersSlider2Directive {

  constructor(private element: LaptopOffersComponent) { }
  startTouch: number = 0;
  endTouch: number = 0;

  @HostListener('touchstart', ['$event']) ontouchstart(e: TouchEvent) {
    this.startTouch = e.touches[0].clientX
  }
  @HostListener('touchend', ['$event']) ontouchend(e: TouchEvent) {
    this.endTouch = e.changedTouches[0].clientX;
    if ((this.startTouch - this.endTouch) > 50) {
      this.element.after()
    } else if (((this.startTouch - this.endTouch) < -50)) {
      this.element.before()
    }
  }
}

