export const htmlTemplate = `
    <div class="container" *ngIf="user">

      <div class="one">
        <h1 class="name">{{user.name}}</h1>
        <div class="username">{{user.username}}</div>
      </div>

      <div class="onehalf">
        <h2>Contact details:</h2>
        <ul>
          <li>Street: {{user.address.street}}</li>
          <li>Suite: {{user.address.suite}}</li>
          <li>City: {{user.address.city}}</li>
          <li>Zipcode: {{user.address.zipcode}}</li>
          <li>Phone: {{user.phone}}</li>
          <li>Email: <a href="mailto:{{user.email}}">{{user.email}}</a></li>
        </ul>
      </div>

      <div class="onehalf">
        <h2>Company details:</h2>
        <ul>
          <li>Company name: {{user.company.name}}</li>
          <li>Website: <a href="http://{{user.website}}" target="_blank">www.{{user.website}}</a></li>
        </ul>
      </div>

      <div class="one">
        <a class="button back" href="" routerLink="/users">Back to Users</a>
      </div>

    </div>
`;