import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../Services/cart.service';
import { CommonModule } from '@angular/common';
import { BigProductsData } from '../../../Data/bigProductsData';
import { IbigProduct } from '../../../Models/IbigProduct';

@Component({
  selector: 'app-custom-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-details.component.html',
  styleUrl: './custom-details.component.scss'
})
export class CustomDetailsComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute) { }
  cart: CartService = inject(CartService);

  id: number = Number(this.activeRoute.snapshot.paramMap.get("id"));
  product !: IbigProduct | undefined;
  stocknumbers: number[] = []

  @ViewChild('numberofitems') select!: ElementRef;

  ngOnInit(): void {
    this.product = history.state;

    if (this.product!.stock > 0) {
      for (let i = 1; i <= this.product!.stock; i++) {
        this.stocknumbers.push(i)
      }
    }
  }
  sendToCart() {
    this.cart.toService(
      this.product!.name,
      ((this.product!.oldprice - this.product!.discount) * this.select.nativeElement.value)
        .toFixed(2),
      this.select.nativeElement.value,
      this.product!.imageUrl
    )
  }

}
