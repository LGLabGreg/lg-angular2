import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { PreloaderService } from '../../services/preloader.service';


@Component({
  moduleId: module.id,
  selector: 'users-container',
  host: {
    class: 'wrapper content users-container'
  },
  templateUrl: 'users.component.html',
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
