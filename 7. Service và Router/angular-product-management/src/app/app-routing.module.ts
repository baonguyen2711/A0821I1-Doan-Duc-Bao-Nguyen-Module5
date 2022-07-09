import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import {ProductInfoComponent} from "./product/product-info/product-info.component";

const routes: Routes = [{
  path: 'product/list',
  component: ProductListComponent
},{
  path:'product/create',
  component: ProductCreateComponent
},{
  path:'product/edit/:id',
  component: ProductEditComponent
},{
  path:'product/delete/:id',
  component: ProductDeleteComponent
},{
  path:'product/info/:id',
  component: ProductInfoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
