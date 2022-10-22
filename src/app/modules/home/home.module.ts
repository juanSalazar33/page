import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { CardComponent } from 'src/app/components/card';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardComponent,
    MatSidenavModule
  ]
})
export class HomeModule { }
