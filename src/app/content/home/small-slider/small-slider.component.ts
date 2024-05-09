import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'small-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './small-slider.component.html',
  styleUrl: './small-slider.component.scss'
})
export class SmallSliderComponent implements OnInit, OnDestroy {
  //update those arrays when u add / remove elements
  slidesAppear: Boolean[] = [];
  slidesDisappear: Boolean[] = [];
  index: number = 0;
  intervalID: any;
  ngOnInit(): void {
    this.slidesAppear = [true, false, false, false, false, false, false, false];
    this.slidesDisappear = [false, false, false, false, false, false, false, false];
    this.index = 0;

    this.intervalID = setInterval(() => {
      if (this.index === this.slidesAppear.length - 2) {
        clearInterval(this.intervalID)
      }
      this.slidesAppear[this.index] = false;
      this.slidesAppear[this.index + 1] = true;
      this.slidesDisappear[this.index] = true;
      this.index++;
    }, 8000)
  }
  ngOnDestroy() {
    if (this.intervalID) {
      clearInterval(this.intervalID);
    }
  }
  left() {
    if (this.index === 0) {
      return;
    }
    this.slidesAppear[this.index] = false;
    this.slidesDisappear[this.index - 1] = false;
    this.slidesAppear[this.index - 1] = true;
    this.index--;
    clearInterval(this.intervalID)
  }
  right() {
    if (this.index === 7) {
      return;
    }
    this.slidesAppear[this.index] = false;
    this.slidesAppear[this.index + 1] = true;
    this.slidesDisappear[this.index] = true;
    this.index++;
    clearInterval(this.intervalID)
  }
}
