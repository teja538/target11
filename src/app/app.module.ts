import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkedinJobPgComponent } from './linkedin-job-pg/linkedin-job-pg.component';
import { GoogleblogComponent } from './googleblog/googleblog.component';
import { EdystComponent } from './edyst/edyst.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkedinJobPgComponent,
    GoogleblogComponent,
    EdystComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
