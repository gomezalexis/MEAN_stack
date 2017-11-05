import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from'./home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { EditProductComponent } from './product-list/edit-product/edit-product.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NewProductComponent } from './product-list/new-product/new-product.component';

const routes: Routes = [
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'product-list', component: ProductListComponent, children: [
    { path: 'edit-product/:id', component: EditProductComponent },
    { path: 'new-product', component: NewProductComponent },
  ]},
  { path: '**', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
