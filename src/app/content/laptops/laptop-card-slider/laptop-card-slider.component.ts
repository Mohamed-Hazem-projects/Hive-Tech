import {
  AfterViewChecked, Component,
  ElementRef, OnInit, ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ILaptop } from '../../../Models/ILaptop';
import { LaptopData } from '../../../Data/laptopData';
import { LaptopCardComponent } from './laptop-card/laptop-card.component';

@Component({
  selector: 'laptop-card-slider',
  standalone: true,
  imports: [LaptopCardComponent, CommonModule],
  templateUrl: './laptop-card-slider.component.html',
  styleUrl: './laptop-card-slider.component.scss'
})
export class LaptopCardSliderComponent implements OnInit, AfterViewChecked {
  cards: ILaptop[] = []
  index: number = 0;
  @ViewChild('childSlider') cardSlider!: ElementRef;
  xAxis!: number;
  innerWidth!: number;
  beforeDisabled: Boolean = true;
  nextDisabled: Boolean = false;
  ngOnInit(): void {
    this.cards = LaptopData.laptops;
  }
  ngAfterViewChecked(): void {
    this.innerWidth = window.innerWidth;
    this.xAxis = (this.cardSlider.nativeElement.getBoundingClientRect().x - 20)
  }
  next() {
    if (3560 + this.xAxis < this.innerWidth) {
      this.index = 4110 - this.innerWidth;
      this.nextDisabled = true;
    } else {
      this.index += 340;
      this.beforeDisabled = false;
    }
  }
  before() {
    if (this.xAxis < -1) {
      this.index -= 340;
      this.nextDisabled = false;
    } else {
      this.index = 0;
    }
    if (this.index < 0) {
      this.index = 0;
    }
    if (this.index === 0) {
      this.beforeDisabled = true;
    }
  }
  getValue() {
    return `translateX(-${this.index}px)`
  }
}
