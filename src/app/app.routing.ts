import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MediaComponent } from './media/media.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  // { path: 'midia', component: MediaComponent},
  { path: 'midia/noticias', component: MediaComponent, data: {type: 'news'} },
  { path: 'midia/videos', component: MediaComponent, data: {type: 'videos'} },
  { path: 'midia/decisoes', component: MediaComponent, data: {type: 'decisions'} },
  { path: 'midia/artigos', component: MediaComponent, data: {type: 'articles'} },
  { path: 'midia/:type/:id/:title', component: MediaComponent, data: {type: 'show'}  },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
