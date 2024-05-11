import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../Services/cart.service';
import { CommonModule } from '@angular/common';
import { ILaptop } from '../../../Models/ILaptop';
import { LaptopData } from '../../../Data/laptopData';

@Component({
  selector: 'app-laptop-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './laptop-details.component.html',
  styleUrl: './laptop-details.component.scss'
})
export class LaptopDetailsComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute) { }
  cart: CartService = inject(CartService);

  id: number = Number(this.activeRoute.snapshot.paramMap.get("id"));
  product !: ILaptop | undefined;
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
