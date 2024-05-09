import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();
  router: Router = inject(Router)
  searchFilter(input: HTMLInputElement) {
    this.searchEvent.emit(input.value)
    this.router.navigate(['/products'], { queryParams: { search: input.value } })
  }
}
