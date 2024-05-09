import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IGearProduct } from '../../../Models/IGearProduct';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'smol-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './smol-gear-card.component.html',
  styleUrl: './smol-gear-card.component.scss'
})
export class SmolGearCardComponent {
  @Input() Product!: IGearProduct;

}
