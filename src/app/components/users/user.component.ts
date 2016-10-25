import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';


@Component({
  moduleId: module.id,
  selector: 'user-container',
  host: {
    class: 'wrapper content user-container'
  },
  templateUrl: 'user.component.html',
})

export class UserComponent {

  public user: any;

  constructor(private httpService: HttpService) {

  }

  ngOnInit() {
    this.getUser();
  }
 
  getUser() {
    this.httpService.get('https://jsonplaceholder.typicode.com/users/1').subscribe(
      data => { this.user = data },
      err => { console.error(err) }
    );
  }

};
