import { Component } from '@angular/core';
import { CustomPCHeaderComponent } from './custom-pcheader/custom-pcheader.component';
import { CustomDealsComponent } from './custom-deals/custom-deals.component';
import { CustomOffersComponent } from './custom-offers/custom-offers.component';
import { CustomLevelsComponent } from './custom-levels/custom-levels.component';
import { CardSliderComponent } from '../home/card-slider/card-slider.component';
import { CardSliderSlideDirective } from '../../Directives/card-slider-slide.directive';

@Component({
  selector: 'app-custom-pc',
  standalone: true,
  imports: [
    CustomPCHeaderComponent,
    CustomDealsComponent,
    CustomOffersComponent,
    CustomLevelsComponent,
    CardSliderComponent,
    CardSliderSlideDirective
  ],
  templateUrl: './custom-pc.component.html',
  styleUrl: './custom-pc.component.scss'
})
export class CustomPCComponent {

}
