import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './loading/loading.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule  ],
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoadingComponent,
    DisplayDataComponent
  ]
})
export class ComponentsModule { }
