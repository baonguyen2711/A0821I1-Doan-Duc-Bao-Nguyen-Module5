import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [{
  path: 'list',
  component: EmployeeListComponent
},{
  path:'create',
  component: EmployeeCreateComponent
},
  {
  path:'edit/:id',
  component: EmployeeEditComponent
},{
  path:'delete/:id',
  component: EmployeeDeleteComponent
},
  {
  path:'detail/:id',
  component: EmployeeDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
