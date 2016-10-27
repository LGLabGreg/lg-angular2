import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute } from '@angular/router';

import { PreloaderService } from '../../services/preloader.service';


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
  private sub: any;

  id: number;

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private preloaderService: PreloaderService
  ) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
       this.getUser();
    });
  }
 
  getUser() {
    this.preloaderService.showLoader();
    this.httpService.get('https://jsonplaceholder.typicode.com/users/' + this.id).subscribe(
      data => {
        this.user = data;
        this.preloaderService.hideLoader();
      },
      err => { console.error(err) }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

};
