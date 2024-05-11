import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'big-slider',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './big-slider.component.html',
  styleUrl: './big-slider.component.scss'
})
export class BigSliderComponent implements OnInit, OnDestroy {
  index: number = 5;
  intervalID: any;
  paginateArray: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  ngOnInit(): void {
    this.intervalID = setInterval(() => {
      if (this.index < 12) {
        this.index++;
      } else if (this.index === 12) {
        this.index = 0;
      }
    }, 10000)
  }
  ngOnDestroy(): void {
    if (this.intervalID) {
      clearInterval(this.intervalID);
    }
  }
  getValue() {
    return `translateX(-${this.index}00%)`
  }
  next() {
    if (this.index < 12) {
      this.index++;
    } else if (this.index === 12) {
      this.index = 0;
    }
    clearInterval(this.intervalID);
  }
  before() {
    if (this.index > 0) {
      this.index--;
    } else if (this.index === 0) {
      this.index = 12;
    }
    clearInterval(this.intervalID);
  }
  pagination(slide: number) {
    this.index = slide;
  }
}
