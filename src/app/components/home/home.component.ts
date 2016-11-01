import { Component } from '@angular/core';
import { htmlTemplate } from './home.component.html';

@Component({
  moduleId: module.id,
  selector: 'home',
  host: {
    class: 'wrapper content'
  },
  template: htmlTemplate
})

export class HomeComponent {

  constructor() {

  }

  ngOnInit() {
    
  }

};
