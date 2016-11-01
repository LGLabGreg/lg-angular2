import { Component } from '@angular/core';
import { htmlTemplate } from './main-footer.component.html';

@Component({
  moduleId: module.id,
  selector: 'main-footer',
  host: {
    class: 'wrapper main-footer'
  },
  template: htmlTemplate
})

export class MainFooterComponent {

  constructor() {

  }

};
