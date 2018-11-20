import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaComponent } from './media.component';
import { ContentComponent } from 'app/components/new/content.component';
import { DisplayDataComponent } from 'app/components/display-data/display-data.component';
import { LoadingComponent } from 'app/components/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { MediaHeaderComponent } from 'app/components/media-header/media-header.component';
import { MenuComponent } from 'app/components/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentViewComponent } from 'app/components/content-view/content-view.component';
import { RouterModule } from '@angular/router';
import { ShowVideoComponent } from 'app/components/show-video/show-video.component';
import { ModalDirective } from 'app/directives/modal/modal.directive';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

  ],
  declarations: [
    MediaComponent,
    MenuComponent,
    ContentComponent,
    DisplayDataComponent,
    LoadingComponent,
    MediaHeaderComponent,
    ContentViewComponent,
    ShowVideoComponent,
    ModalDirective
  ]
})
export class MediaModule { }
