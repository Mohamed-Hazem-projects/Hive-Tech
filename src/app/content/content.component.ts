import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { GearStoreComponent } from './gear-store/gear-store.component';


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    RouterModule,
    ProductsComponent,
    HomeComponent,
    GearStoreComponent,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {

}
