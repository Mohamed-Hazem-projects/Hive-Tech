import { Component } from '@angular/core';
import { SmallSliderComponent } from './small-slider/small-slider.component';
import { BigSliderComponent } from './big-slider/big-slider.component';
import { CardSliderComponent } from './card-slider/card-slider.component';
import { ColorSectionComponent } from './color-section/color-section.component';
import { WhySectionComponent } from './why-section/why-section.component';
import { smallSliderSlide } from '../../Directives/small-slider-slide.directive';
import { BigSliderSlideDirective } from '../../Directives/big-slider-slide.directive';
import { CardSliderSlideDirective } from '../../Directives/card-slider-slide.directive';
import { LaptopCardSliderComponent } from '../laptops/laptop-card-slider/laptop-card-slider.component';
import { LaptopCardSlideDirective } from '../../Directives/laptopCardSlide.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SmallSliderComponent,
    BigSliderComponent,
    CardSliderComponent,
    ColorSectionComponent,
    WhySectionComponent,
    smallSliderSlide,
    BigSliderSlideDirective,
    CardSliderSlideDirective,
    LaptopCardSliderComponent,
    LaptopCardSlideDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
