import { Component } from '@angular/core';
import { LaptopsHeaderComponent } from './laptops-header/laptops-header.component';
import { LaptopsDealsComponent } from './laptops-deals/laptops-deals.component';
import { LaptopOffersComponent } from './laptop-offers/laptop-offers.component';
import { LaptopsLevelsComponent } from './laptops-levels/laptops-levels.component';
import { LaptopCardSliderComponent } from './laptop-card-slider/laptop-card-slider.component';
import { LaptopCardSlideDirective } from '../../Directives/laptopCardSlide.directive';

@Component({
  selector: 'app-laptops',
  standalone: true,
  imports: [
    LaptopsHeaderComponent,
    LaptopsDealsComponent,
    LaptopOffersComponent,
    LaptopsLevelsComponent,
    LaptopCardSliderComponent,
    LaptopCardSlideDirective
  ],
  templateUrl: './laptops.component.html',
  styleUrl: './laptops.component.scss'
})
export class LaptopsComponent {

}
