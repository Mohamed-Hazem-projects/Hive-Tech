import { Component, OnInit } from '@angular/core';
import { GearCardComponent } from './gear-card/gear-card.component';
import { GearProducts } from '../../Data/gearProducts';
import { IGearProduct } from '../../Models/IGearProduct';
import { CommonModule } from '@angular/common';
import { SmolGearCardComponent } from './smol-gear-card/smol-gear-card.component';

@Component({
  selector: 'gear-store',
  standalone: true,
  imports: [GearCardComponent, CommonModule, SmolGearCardComponent],
  templateUrl: './gear-store.component.html',
  styleUrl: './gear-store.component.scss'
})
export class GearStoreComponent implements OnInit {
  topProducts!: IGearProduct[];
  bestProducts!: IGearProduct[];
  underProducts!: IGearProduct[];
  recProducts!: IGearProduct[];
  ngOnInit(): void {
    this.topProducts = GearProducts.gear.filter((el) => el.category === "Top");
    this.bestProducts = GearProducts.gear.filter((el) => el.category === "Best");
    this.underProducts = GearProducts.gear.filter((el) => el.category === "Under");
    this.recProducts = GearProducts.gear.filter((el) => el.category === "Recommended");
  }
}
