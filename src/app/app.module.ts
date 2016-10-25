///<reference path="../../typings/index.d.ts"/>

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

/* router */
import { AppRoutingModule } from './app-routing.module';

/* services */
import { HttpService } from './services/http.service';

/* components */
import { AppComponent }  from './app.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { HomeComponent } from './components/home/home.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [ 
    AppComponent,
    MainNavComponent,
    HomeComponent,
    MainFooterComponent
  ],
  providers: [
    HttpService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
