import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { UserComponent } from './layouts/user/user.component';
import { GuestComponent } from './layouts/guest/guest.component';
import { LoginComponent } from './layouts/login/login.component';
import { MainComponent } from './layouts/main/main.component';
import { AuthService } from './servies/aauth.service';

const routes: Routes = [
  {
    path: '', component: MainComponent, canActivate: [AuthService],
    children: [
    {path: '', component: HomeComponent},
    {path: 'user', component: UserComponent},
    {path: 'guest-team', component: GuestComponent}
  ]},

  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
