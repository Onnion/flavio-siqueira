import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { AboutComponent } from 'app/components/about/about.component';
import { ContactComponent } from 'app/components/contact/contact.component';
import { MapsComponent } from 'app/components/maps/maps.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAc3mIx6dm3j6euaZkmmuafct-mpsBlvyY'
          })
    ],
    declarations: [
        HomeComponent,
        AboutComponent,
        ContactComponent,
        MapsComponent
    ],
    exports: [ HomeComponent ],
    providers: []
})
export class HomeModule { }
