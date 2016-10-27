///<reference path="../../typings/index.d.ts"/>

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* router */
import { AppRoutingModule } from './app-routing.module';

/* services */
import { HttpService } from './services/http.service';
import { PreloaderService } from './services/preloader.service';

/* components */
import { AppComponent }  from './app.component';

import { MainNavComponent } from './components/main-nav/main-nav.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';

import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user.component';
import { UserCreateComponent } from './components/users/user-create.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    AppComponent,
    MainNavComponent,
    HomeComponent,
    MainFooterComponent,
    UsersComponent,
    UserComponent,
    UserCreateComponent
  ],
  providers: [
    HttpService,
    PreloaderService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
