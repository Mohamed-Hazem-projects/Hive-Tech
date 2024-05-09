import {
  AfterViewChecked, Component,
  ElementRef, OnInit, ViewChild
} from '@angular/core';
import { BigCardComponent } from './big-card/big-card.component';
import { CommonModule } from '@angular/common';
import { BigProductsData } from '../../../Data/bigProductsData';
import { IbigProduct } from '../../../Models/IbigProduct';

@Component({
  selector: 'card-slider',
  standalone: true,
  imports: [BigCardComponent, CommonModule],
  templateUrl: './card-slider.component.html',
  styleUrl: './card-slider.component.scss'
})
export class CardSliderComponent implements OnInit, AfterViewChecked {

  cards: IbigProduct[] = []
  index: number = 0;
  @ViewChild('childSlider') cardSlider!: ElementRef;
  xAxis!: number;
  innerWidth!: number;
  beforeDisabled: Boolean = true;
  nextDisabled: Boolean = false;
  ngOnInit(): void {
    this.cards = BigProductsData.bigProducts;
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
