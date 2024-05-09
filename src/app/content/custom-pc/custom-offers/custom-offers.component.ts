import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { offersSliderDirective } from '../../../Directives/offers-slide1.directive';

@Component({
  selector: 'custom-offers',
  standalone: true,
  imports: [CommonModule, offersSliderDirective],
  templateUrl: './custom-offers.component.html',
  styleUrl: './custom-offers.component.scss'
})
export class CustomOffersComponent {

  index: number = 0;

  before() {
    if (this.index >= 101.5) {
      this.index -= 101.5;
    } else {
      this.index = 0;
    }
    this.getValue()
  }

  after() {
    if (this.index <= 200) {
      this.index += 101.5;
    } else {
      this.index = 203;
    }
    this.getValue()
  }

  getValue() {
    return `translateX(-${this.index}%)`
  }
}
