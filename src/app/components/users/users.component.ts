import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';


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

  constructor(private httpService: HttpService) {

  }

  ngOnInit() {
    this.getUsers();
  }
 
  getUsers() {
    this.httpService.get('https://jsonplaceholder.typicode.com/users').subscribe(
      data => { this.users = data },
      err => { console.error(err) }
    );
  }

};
