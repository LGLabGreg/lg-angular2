import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';


@Component({
  moduleId: module.id,
  selector: 'home',
  host: {
    class: 'wrapper content'
  },
  templateUrl: 'home.component.html',
})

export class HomeComponent {

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
