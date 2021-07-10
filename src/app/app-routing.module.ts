import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinkedinJobPgComponent } from './linkedin-job-pg/linkedin-job-pg.component';
import { GoogleblogComponent } from './googleblog/googleblog.component';
import { EdystComponent } from './edyst/edyst.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"linkedin",component: LinkedinJobPgComponent},
  {path:"blog",component:  GoogleblogComponent},
  {path:"edyst",component:EdystComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
