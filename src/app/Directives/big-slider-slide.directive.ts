import { AfterViewInit, Directive, HostListener } from '@angular/core';
import { BigSliderComponent } from '../content/home/big-slider/big-slider.component';

@Directive({
  selector: '[BigSliderSlide]',
  standalone: true
})
export class BigSliderSlideDirective implements AfterViewInit {

  constructor(private element: BigSliderComponent) { }
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
      this.element.next()
    } else if (((this.startTouch - this.endTouch) < -50)) {
      this.element.before()
    }
  }
  @HostListener('mousedown', ['$event']) onclickstart(e: MouseEvent) {
    this.startClick = e.clientX
  }
  @HostListener('mouseup', ['$event']) onclickend(e: MouseEvent) {
    this.endClick = e.clientX;
    if ((this.startClick - this.endClick) > 100) {
      this.element.next()
    } else if ((this.startClick - this.endClick) < -100) {
      this.element.before()
    }
  }
  ngAfterViewInit(): void {

  }
}
