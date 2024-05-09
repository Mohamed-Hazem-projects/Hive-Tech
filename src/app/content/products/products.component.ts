import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';
import { ProductsData } from '../../Data/products-data';
import { Iproduct } from '../../Models/Iproduct';

@Component({
  selector: 'products',
  standalone: true,
  imports: [CardComponent, CommonModule, FilterComponent, SearchComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {


  categories: string[] = ["All", "CPU", "GPU", "CPU-cooler",
    "motherboard", "ram", "storage", "powersupply", "case"]
  clickedButton: number = 1;
  pageSize: number = 12;
  innerWidth: number = 0;
  filteredProducts: Iproduct[] = [];
  paginatedProducts: Iproduct[] = [];
  noOfPages: number = 0;
  Pages: number[] = [];
  userSearch: string = "";

  ngOnInit(): void {
    this.filteredProducts = ProductsData.products;
    this.paginatedProducts = this.paginate(this.filteredProducts, this.pageSize, this.clickedButton);
    this.noOfPages = Math.ceil(ProductsData.products.length / this.pageSize);
    this.Pages = this.getPagesArray()
  }

  filtering(n: number) {
    this.clickedButton = 1;
    if (this.categories[n] === "All") {
      this.filteredProducts = ProductsData.products;
      this.pagination();
      this.paginatedProducts = this.paginate(this.filteredProducts, this.pageSize, this.clickedButton);
      return;
    }
    this.filteredProducts = ProductsData.products.filter((prod => prod.category === this.categories[n]))
    this.pagination();
    this.paginatedProducts = this.paginate(this.filteredProducts, this.pageSize, this.clickedButton);
  }
  searchFilter(searched: string) {
    this.clickedButton = 1;
    this.userSearch = searched.toLowerCase();
    this.filteredProducts = ProductsData.products.filter((prod => prod.productDescription.toLowerCase().includes(this.userSearch)))
    this.pagination();
    this.paginatedProducts = this.paginate(this.filteredProducts, this.pageSize, this.clickedButton);
  }

  //pagination stuff
  pagination(): void {
    this.noOfPages = Math.ceil(this.filteredProducts.length / this.pageSize);
    this.Pages = this.getPagesArray();
  }
  getPagesArray(): number[] {
    let Pages: number[] = [];
    for (let i = 1; i <= this.noOfPages; i++) {
      Pages.push(i)
    }
    return Pages;
  }
  changePage(no: number) {
    this.clickedButton = no;
    this.paginatedProducts = this.paginate(this.filteredProducts, this.pageSize, this.clickedButton);
  }
  paginate(array: Iproduct[], page_size: number, page_number: number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }
}
