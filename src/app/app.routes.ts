import { Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { ProductsComponent } from './content/products/products.component';
import { GearStoreComponent } from './content/gear-store/gear-store.component';
import { NotFoundComponent } from './content/not-found/not-found.component';
import { GearDetailsComponent } from './content/gear-store/gear-details/gear-details.component';
import { ProductDetailsComponent } from './content/products/product-details/product-details.component';
import { CustomPCComponent } from './content/custom-pc/custom-pc.component';
import { CustomDetailsComponent } from './content/custom-pc/custom-details/custom-details.component';
import { LaptopsComponent } from './content/laptops/laptops.component';
import { LaptopDetailsComponent } from './content/laptops/laptop-details/laptop-details.component';
import { SignInComponent } from './content/sign-in/sign-in.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: "Home",
    pathMatch: "full"
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'products',
    redirectTo: "products/category/All",
    pathMatch: 'full'
  },
  {
    path: 'products/category/:id',
    component: ProductsComponent
  },
  {
    path: 'products/product/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'gear-store',
    component: GearStoreComponent
  },
  {
    path: 'gear-store/product/:id',
    component: GearDetailsComponent
  }, {
    path: 'custom-pc',
    component: CustomPCComponent
  },
  {
    path: 'custom-pc/pc/:id',
    component: CustomDetailsComponent
  }, {
    path: 'laptops',
    component: LaptopsComponent
  }, {
    path: 'laptops/laptop/:id',
    component: LaptopDetailsComponent
  }, {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
