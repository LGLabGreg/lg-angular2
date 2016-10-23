import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { HomeComponent } from './components/home/home.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    MainNavComponent,
    HomeComponent,
    MainFooterComponent
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
