import { Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { NotFoundComponent } from './content/not-found/not-found.component';
import { CanDeactivateUser } from './Models/canDeactivateUser';

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
    loadComponent: () => import('./content/products/products.component')
      .then(r => r.ProductsComponent)
  },
  {
    path: 'products/product/:id',
    loadComponent: () => import('./content/products/product-details/product-details.component')
      .then(r => r.ProductDetailsComponent)
  },
  {
    path: 'gear-store',
    loadComponent: () => import('./content/gear-store/gear-store.component')
      .then(r => r.GearStoreComponent)
  },
  {
    path: 'gear-store/product/:id',
    loadComponent: () => import('./content/gear-store/gear-details/gear-details.component')
      .then(r => r.GearDetailsComponent)
  }, {
    path: 'custom-pc',
    loadComponent: () => import('./content/custom-pc/custom-pc.component')
      .then(r => r.CustomPCComponent)
  },
  {
    path: 'custom-pc/pc/:id',
    loadComponent: () => import('./content/custom-pc/custom-details/custom-details.component')
      .then(r => r.CustomDetailsComponent)
  }, {
    path: 'laptops',
    loadComponent: () => import('./content/laptops/laptops.component')
      .then(r => r.LaptopsComponent)
  }, {
    path: 'laptops/laptop/:id',
    loadComponent: () => import('./content/laptops/laptop-details/laptop-details.component')
      .then(r => r.LaptopDetailsComponent)
  }, {
    path: 'sign-in',
    canDeactivate: [(form: CanDeactivateUser) => {
      return form.confirmExit()
    }],
    loadComponent: () => import('./content/sign-in/sign-in.component')
      .then(r => r.SignInComponent)
  }, {
    path: 'Register',
    loadComponent: () => import('./content/register/register.component')
      .then(r => r.RegisterComponent),
    canDeactivate: [(form: CanDeactivateUser) => {
      return form.confirmExit()
    }]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
