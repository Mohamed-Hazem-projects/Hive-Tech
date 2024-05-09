import { Directive, HostListener } from '@angular/core';
import { CustomOffersComponent } from '../content/custom-pc/custom-offers/custom-offers.component';
@Directive({
  selector: '[offerSlide]',
  standalone: true
})
export class offersSliderDirective {

  constructor(private element: CustomOffersComponent) { }
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
