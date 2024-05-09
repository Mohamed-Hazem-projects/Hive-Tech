import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    CartComponent,
    RouterLink,
    RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  smallScreen!: Boolean;
  barsOpen: Boolean = false;
  ngOnInit(): void {
    if (window.innerWidth < 1040) {
      this.smallScreen = true;
    } else {
      this.smallScreen = false;
    }
  }
  @HostListener('window:resize', ['$event']) check(ev: { target: { innerWidth: number; }; }) {
    if (ev.target.innerWidth < 1040) {
      this.smallScreen = true;
    } else {
      this.smallScreen = false;
    }
  }
  clickBars() {
    this.barsOpen = !this.barsOpen
  }
  clickOverlay() {
    this.barsOpen = false;
  }
  closeBars() {
    this.barsOpen = false;
  }
}
