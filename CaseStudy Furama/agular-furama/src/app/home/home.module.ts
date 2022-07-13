import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {ContentComponent} from "./content/content.component";
import { FooterComponent } from './footer/footer.component';
import { FuramaComponent } from './furama/furama.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    ContentComponent,
    FooterComponent,
    FuramaComponent,
    HeaderComponent,
    NavbarComponent
  ],
  exports: [
    ContentComponent,
    FooterComponent,
    FuramaComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
