import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { offersSlider2Directive } from '../../../Directives/offers-slide2.directive';

@Component({
  selector: 'laptop-offers',
  standalone: true,
  imports: [CommonModule, offersSlider2Directive],
  templateUrl: './laptop-offers.component.html',
  styleUrl: './laptop-offers.component.scss'
})
export class LaptopOffersComponent {
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
