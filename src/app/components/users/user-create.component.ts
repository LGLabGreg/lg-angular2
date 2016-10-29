import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import { HttpService } from '../../services/http.service';
import { PreloaderService } from '../../services/preloader.service';

import { AppConfig } from '../../app.config';


@Component({
  moduleId: module.id,
  selector: 'user-create-container',
  host: {
    class: 'wrapper content user-create-container'
  },
  templateUrl: 'user-create.component.html',
})

export class UserCreateComponent {

  public form: FormGroup;
  public validationMessages : Object;


  constructor(
    private httpService: HttpService,
    private preloaderService: PreloaderService,
    private formBuilder: FormBuilder
  ) {
    console.log(AppConfig)
    this.validationMessages = AppConfig.ui.forms.validationMessages;
  }

  ngOnInit() {

    this.form = this.formBuilder.group({

      name: ["", [Validators.required]],
      username: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.pattern(AppConfig.ui.forms.validationPatterns.email)]],
      phone: ["", [Validators.required]],
      website: ["", [Validators.required]],

      company: this.formBuilder.group({
        name: ["", [Validators.required]],
        catchPhrase: ["", [Validators.required]]
      }),

      address: this.formBuilder.group({
        street: ["", [Validators.required]],
        suite: ["", [Validators.required]],
        city: ["", [Validators.required]],
        zipcode: ["", [Validators.required]]
      })

    });

    console.log(this.form)
  }

  doCreate(form) {
    form.submitted = true;
    form.success = false;
    if(form.valid){
      this.preloaderService.showLoader();
      this.httpService.post('https://jsonplaceholder.typicode.com/users', form.value).subscribe(
        data => { 
          console.log('Form submitted: ' + JSON.stringify(data))
          this.preloaderService.hideLoader();
          form.success = true;
          form.submitted = false;
          form.reset();
        },
        err => { console.error(err) }
      );
    }
  }

};
