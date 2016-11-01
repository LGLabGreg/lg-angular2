export const htmlTemplate = `
    <div class="container">

      <div class="one">

        <h1>Create user</h1>

        <p class="alert error" *ngIf="form.submitted && !form.valid">
          {{validationMessages.requiredForm}}
        </p>

        <p class="alert success" *ngIf="form.success">
          {{validationMessages.formSuccess}}
        </p>

      </div>

      <form [formGroup]="form" (submit)="doCreate(form)" novalidate>

        <fieldset class="onehalf">

          <h4>User details</h4>

          <div class="form-element">
            <input type="text"
              [formControl]="form.controls['name']"
              placeholder="Full Name">
            <div class="alert error" *ngIf="!form.controls.name.valid && (form.controls.name.touched || form.submitted)">
              <span *ngIf="form.controls.name.hasError('required')">{{validationMessages.requiredField}}</span>
            </div>
          </div>

          <div class="form-element">
            <input type="text"
              [formControl]="form.controls['username']"
              placeholder="Username">
            <div class="alert error" *ngIf="!form.controls.username.valid && (form.controls.username.touched || form.submitted)">
              <span *ngIf="form.controls.username.hasError('required')">{{validationMessages.requiredField}}</span>
            </div>
          </div>

          <div class="form-element">
            <input type="text"
              [formControl]="form.controls['email']"
              placeholder="Email">
            <div class="alert error" *ngIf="!form.controls.email.valid && (form.controls.email.touched || form.submitted)">
              <span *ngIf="form.controls.email.hasError('required')">{{validationMessages.requiredField}}</span>
              <span *ngIf="form.controls.email.hasError('pattern')">{{validationMessages.invalidEmail}}</span>
            </div>
          </div>

          <div class="form-element">
            <input type="text"
              [formControl]="form.controls['phone']"
              placeholder="Phone">
            <div class="alert error" *ngIf="!form.controls.phone.valid && (form.controls.phone.touched || form.submitted)">
              <span *ngIf="form.controls.phone.hasError('required')">{{validationMessages.requiredField}}</span>
            </div>
          </div>

          <div class="form-element">
            <input type="text"
              [formControl]="form.controls['website']"
              placeholder="Website">
            <div class="alert error" *ngIf="!form.controls.website.valid && (form.controls.website.touched || form.submitted)">
              <span *ngIf="form.controls.website.hasError('required')">{{validationMessages.requiredField}}</span>
            </div>
          </div>

        </fieldset>

        <fieldset class="onehalf">

          <h4>Company</h4>

          <div class="form-element">
            <input type="text"
              [formControl]="form.controls.company.controls['name']"
              placeholder="Company Name">
            <div class="alert error" *ngIf="!form.controls.company.controls.name.valid && (form.controls.company.controls.name.touched || form.submitted)">
              <span *ngIf="form.controls.company.controls.name.hasError('required')">{{validationMessages.requiredField}}</span>
            </div>
          </div>

          <div class="form-element">
            <input type="text"
              [formControl]="form.controls.company.controls['catchPhrase']"
              placeholder="Description">
            <div class="alert error" *ngIf="!form.controls.company.controls.catchPhrase.valid && (form.controls.company.controls.catchPhrase.touched || form.submitted)">
              <span *ngIf="form.controls.company.controls.catchPhrase.hasError('required')">{{validationMessages.requiredField}}</span>
            </div>
          </div>

          <h4>Address</h4>
          
          <div class="form-element">
            <input type="text"
              [formControl]="form.controls.address.controls['street']"
              placeholder="Street">

            <div class="alert error" *ngIf="!form.controls.address.controls.street.valid && (form.controls.address.controls.street.touched || form.submitted)">
              <span *ngIf="form.controls.address.controls.street.hasError('required')">{{validationMessages.requiredField}}</span>
            </div>
          </div>

          <div class="form-element">
            <input type="text"
              [formControl]="form.controls.address.controls['suite']"
              placeholder="Suite">
            <div class="alert error" *ngIf="!form.controls.address.controls.suite.valid && (form.controls.address.controls.suite.touched || form.submitted)">
              <span *ngIf="form.controls.address.controls.suite.hasError('required')">{{validationMessages.requiredField}}</span>
            </div>
          </div>

          <div class="form-element">
            <input type="text"
              [formControl]="form.controls.address.controls['city']"
              placeholder="City">
            <div class="alert error" *ngIf="!form.controls.address.controls.city.valid && (form.controls.address.controls.city.touched || form.submitted)">
              <span *ngIf="form.controls.address.controls.city.hasError('required')">{{validationMessages.requiredField}}</span>
            </div>
          </div>

          <div class="form-element">
            <input type="text"
              [formControl]="form.controls.address.controls['zipcode']"
              placeholder="Zipcode">
            <div class="alert error" *ngIf="!form.controls.address.controls.zipcode.valid && (form.controls.address.controls.zipcode.touched || form.submitted)">
              <span *ngIf="form.controls.address.controls.zipcode.hasError('required')">{{validationMessages.requiredField}}</span>
            </div>
          </div>

          <button type="submit" [ngClass]="{'disabled': !form.valid}">Create</button>

        </fieldset>

      </form>

      <div class="one">
        <a class="button back" href="" routerLink="/users">Back to Users</a>
      </div>

    </div>
`;