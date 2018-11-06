import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './loading/loading.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { NewComponent } from './new/new.component';
import { MediaComponent } from './media/media.component';
import { RouterModule } from '@angular/router';
import { SocialLinksComponent } from './social-links/social-links.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    RouterModule
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoadingComponent,
    DisplayDataComponent,
    NewComponent,
    MediaComponent,
    SocialLinksComponent,
    FooterComponent,
    ContactComponent,
    NavbarComponent
  ]
})
export class ComponentsModule { }
