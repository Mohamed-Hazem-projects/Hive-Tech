import { Component, Input } from '@angular/core';
import { IGearProduct } from '../../../Models/IGearProduct';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'gear-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gear-card.component.html',
  styleUrl: './gear-card.component.scss'
})
export class GearCardComponent {
  @Input() Product!: IGearProduct;
}
