import { Component } from '@angular/core';
import {enableProdMode} from '@angular/core';

//enableProdMode();

export interface Preloader {
   isLoading: boolean;
}

import { PreloaderService } from './services/preloader.service';

@Component({
  selector: 'app',
  template: `
    <div class="preloader" *ngIf="loader.isLoading"></div>
    <main-nav></main-nav>
    <router-outlet></router-outlet>
    <main-footer></main-footer>
  `
})

export class AppComponent{
  preloading: boolean;
  loader: Preloader;

  constructor(private preloaderService: PreloaderService) {
    this.loader = this.preloaderService.loader;
  }

}
