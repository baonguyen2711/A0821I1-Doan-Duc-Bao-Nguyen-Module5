import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EmployeeRoutingModule} from './employee-routing.module';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeCreateComponent} from './employee-create/employee-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PositionComponent } from './position/position-list/position.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import {EducationLevelListComponent} from "./education-level/education-level-list/education-level-list.component";
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeCreateComponent,
    PositionComponent,
    EducationLevelListComponent,
    EmployeeEditComponent,
    EmployeeDeleteComponent,
    EmployeeDetailComponent
  ],
  exports: [
    EmployeeListComponent,
    EmployeeCreateComponent,
    PositionComponent,
    EducationLevelListComponent,
    EmployeeEditComponent,
    EmployeeDeleteComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class EmployeeModule {
}
