import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationLevelRoutingModule } from './education-level-routing.module';
import { EducationLevelListComponent } from './education-level-list/education-level-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [

  ],exports: [

  ],
  imports: [
    CommonModule,
    EducationLevelRoutingModule,
  ]
})
export class EducationLevelModule { }
