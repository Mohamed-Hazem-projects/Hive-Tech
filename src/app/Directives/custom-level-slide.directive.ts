import { Directive, HostListener } from '@angular/core';
import { CustomLevelsComponent } from '../content/custom-pc/custom-levels/custom-levels.component';
@Directive({
  selector: '[levelsSlide]',
  standalone: true
})
export class CustomLevelSlideDirective {

  constructor(private element: CustomLevelsComponent) { }
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
      this.element.after()
    } else if (((this.startTouch - this.endTouch) < -50)) {
      this.element.before()
    }
  }
  @HostListener('mousedown', ['$event']) onclickstart(e: MouseEvent) {
    this.startClick = e.clientX
  }
  @HostListener('mouseup', ['$event']) onclickend(e: MouseEvent) {
    this.endClick = e.clientX;
    if ((this.startClick - this.endClick) > 70) {
      this.element.after()
    } else if ((this.startClick - this.endClick) < -70) {
      this.element.before()
    }
  }

}
