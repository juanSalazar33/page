import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HomeRoutingModule } from './home.routing';

import { HomeComponent } from './home.component';
import { CardComponent } from 'src/app/components/card';
import { TestComponent } from './trainig/training'

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    TestComponent,
    CommonModule,
    HomeRoutingModule,
    CardComponent,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule

  ]
})
export class HomeModule { }
