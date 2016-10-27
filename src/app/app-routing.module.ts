import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }   from './components/home/home.component';
import { UsersComponent }   from './components/users/users.component';
import { UserComponent }   from './components/users/user.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'users',  component: UsersComponent },
  { path: 'user/:id',  component: UserComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}