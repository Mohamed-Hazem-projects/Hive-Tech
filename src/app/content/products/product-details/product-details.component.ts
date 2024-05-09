import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../Services/cart.service';
import { Iproduct } from '../../../Models/Iproduct';
import { ProductsData } from '../../../Data/products-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }
  cart: CartService = inject(CartService);

  id: number = Number(this.activeRoute.snapshot.paramMap.get("id"));
  product !: Iproduct | undefined;
  stocknumbers: number[] = []

  @ViewChild('numberofitems') select!: ElementRef;

  ngOnInit(): void {
    this.product = ProductsData.products.find((el) => el.ID === this.id)

    if (this.product!.stock > 0) {
      for (let i = 1; i <= this.product!.stock; i++) {
        this.stocknumbers.push(i)
      }
    }
  }
  sendToCart() {
    this.cart.toService(
      this.product!.productDescription,
      ((this.product!.oldprice - this.product!.discount) * this.select.nativeElement.value)
        .toFixed(2),
      this.select.nativeElement.value,
      this.product!.imageUrl
    )
  }

}
