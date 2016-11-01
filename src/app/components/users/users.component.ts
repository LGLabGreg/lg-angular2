import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { PreloaderService } from '../../services/preloader.service';

import { htmlTemplate } from './users.component.html';


@Component({
  moduleId: module.id,
  selector: 'users-container',
  host: {
    class: 'wrapper content users-container'
  },
  template: htmlTemplate
})

export class UsersComponent {

  public users: any[];

  constructor(
    private httpService: HttpService,
    private preloaderService: PreloaderService
  ) {

  }

  ngOnInit() {
    this.getUsers();
  }
 
  getUsers() {
    this.preloaderService.showLoader();
    this.httpService.get('https://jsonplaceholder.typicode.com/users').subscribe(
      data => { 
        this.users = data;
        this.preloaderService.hideLoader();
      },
      err => { console.error(err) }
    );
  }

};
