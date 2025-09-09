import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductComponent },
  { path: '**', redirectTo: 'products' }
];
