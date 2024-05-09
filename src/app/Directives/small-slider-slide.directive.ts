import { AfterViewInit, Directive, HostListener } from '@angular/core';
import { SmallSliderComponent } from '../content/home/small-slider/small-slider.component';

@Directive({
  selector: '[smallSliderSlide]',
  standalone: true
})
export class smallSliderSlide implements AfterViewInit {

  constructor(private element: SmallSliderComponent) { }
  startTouch: number = 0;
  endTouch: number = 0;
  startClick: number = 0;
  endClick: number = 0;

  @HostListener('touchstart', ['$event']) ontouchstart(e: TouchEvent) {
    this.startTouch = e.touches[0].clientX
  }
  @HostListener('touchend', ['$event']) ontouchend(e: TouchEvent) {
    this.endTouch = e.changedTouches[0].clientX;
    if ((this.startTouch - this.endTouch) > 50) {
      this.element.right()
    } else if (((this.startTouch - this.endTouch) < -50)) {
      this.element.left()
    }
  }
  @HostListener('mousedown', ['$event']) onclickstart(e: MouseEvent) {
    this.startClick = e.clientX
  }
  @HostListener('mouseup', ['$event']) onclickend(e: MouseEvent) {
    this.endClick = e.clientX;
    if ((this.startClick - this.endClick) > 50) {
      this.element.right()
    } else if ((this.startClick - this.endClick) < -50) {
      this.element.left()
    }
  }

  ngAfterViewInit(): void {
  }
}
