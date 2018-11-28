import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { AboutComponent } from 'app/components/about/about.component';
import { ContactComponent } from 'app/components/contact/contact.component';
import { AreasComponent } from 'app/components/areas/areas.component';
import { MapsComponent } from 'app/components/maps/maps.component';
import { AgmCoreModule } from '@agm/core';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaskDirective } from 'app/directives/mask/mask.directive';
import { MoreInfoComponent } from 'app/components/more-info/more-info.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAc3mIx6dm3j6euaZkmmuafct-mpsBlvyY'
        })
    ],
    declarations: [
        HomeComponent,
        AboutComponent,
        ContactComponent,
        MapsComponent,
        AreasComponent,
        MaskDirective,
        MoreInfoComponent
    ],
    exports: [ HomeComponent ],
    providers: []
})
export class HomeModule { }
