///<reference path="../../typings/index.d.ts"/>

import { Component } from '@angular/core';
import {enableProdMode} from '@angular/core';

//enableProdMode();

@Component({
  selector: 'app',
  template: `
    <main-nav></main-nav>
    <router-outlet></router-outlet>
    <main-footer></main-footer>
  `
})

export class AppComponent{

  constructor() {

  }

}
