import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';

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

  constructor(private http: Http) {

  }

  ngOnInit() {
    this.getData();
  }
 
  getData() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .map((res:Response) => res.json())
      .subscribe(
        data => {
          this.users = data;
          console.log(this.users);
        },
        err => {
          console.error(err)
        },
        () => {
          console.log('done')
        }
      );
  }

};
