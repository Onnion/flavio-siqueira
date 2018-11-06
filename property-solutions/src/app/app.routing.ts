import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MediaComponent } from './components/media/media.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'media', component: MediaComponent},

];

export const routing = RouterModule.forRoot(routes, {
  useHash: true
});
