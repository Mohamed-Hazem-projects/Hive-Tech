import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit {
  @Output() filterproducts: EventEmitter<number> = new EventEmitter<number>();

  clickedButton: number = 0;
  currentCategory!: string;
  activeRoute: ActivatedRoute = inject(ActivatedRoute)

  categories: string[] = ["All", "CPUs", "GPUs", "CPU-coolers",
    "motherboards", "ram", "storage", "powersupplys", "cases"]

  ngOnInit(): void {
    this.currentCategory = String(this.activeRoute.snapshot.paramMap.get("id"))
    this.clickedButton = this.categories.indexOf(this.currentCategory)
    this.filter(this.clickedButton)
  }

  filter(n: number) {
    this.clickedButton = n;
    this.filterproducts.emit(n)
  }
}
