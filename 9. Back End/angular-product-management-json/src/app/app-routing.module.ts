import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import {ProductInfoComponent} from "./product/product-info/product-info.component";

const routes: Routes = [{
  path: 'product',
  loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
},{
  path: 'category',
  loadChildren: () => import('./category/category.module').then(module => module.CategoryModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
