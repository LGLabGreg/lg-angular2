import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import { HttpService } from '../../services/http.service';
import { PreloaderService } from '../../services/preloader.service';

@Component({
  moduleId: module.id,
  selector: 'user-create-container',
  host: {
    class: 'wrapper content user-create-container'
  },
  templateUrl: 'user-create.component.html',
})

export class UserCreateComponent {

  form: FormGroup;

  constructor(
    private httpService: HttpService,
    private preloaderService: PreloaderService,
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  ngOnInit() {

  }

  doCreate(form) {
    console.log(form.value);
  }

};
