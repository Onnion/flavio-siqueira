import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaComponent } from './media.component';
import { NewComponent } from 'app/components/new/new.component';
import { DisplayDataComponent } from 'app/components/display-data/display-data.component';
import { LoadingComponent } from 'app/components/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { MediaHeaderComponent } from 'app/components/media-header/media-header.component';
import { MenuComponent } from 'app/components/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MediaComponent,
    MenuComponent,
    NewComponent,
    DisplayDataComponent,
    LoadingComponent,
    MediaHeaderComponent
  ]
})
export class MediaModule { }
