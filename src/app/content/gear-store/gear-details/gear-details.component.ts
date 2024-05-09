import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGearProduct } from '../../../Models/IGearProduct';
import { GearProducts } from '../../../Data/gearProducts';
import { CartService } from '../../../Services/cart.service';

@Component({
  selector: 'app-gear-details',
  standalone: true,
  imports: [],
  templateUrl: './gear-details.component.html',
  styleUrl: './gear-details.component.scss'
})
export class GearDetailsComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }
  cart: CartService = inject(CartService);

  id: number = Number(this.activeRoute.snapshot.paramMap.get("id"));
  product !: IGearProduct | undefined;

  ngOnInit(): void {
    this.product = GearProducts.gear.find((el) => el.ID === this.id)
  }
  sendToCart() {
    this.cart.toService(this.product!.description,
      (this.product!.oldprice - this.product!.discount).toFixed(2),
      1, this.product!.imageUrl
    )
  }
}
