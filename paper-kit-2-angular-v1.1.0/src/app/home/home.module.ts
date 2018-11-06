import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { ComponentsModule } from '../components/components.module';
import { AboutComponent } from 'app/components/about/about.component';
import { ContactComponent } from 'app/components/contact/contact.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        ComponentsModule
    ],
    declarations: [
        HomeComponent,
        AboutComponent,
        ContactComponent
    ],
    exports: [ HomeComponent ],
    providers: []
})
export class HomeModule { }
