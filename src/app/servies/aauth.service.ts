import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
const api = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private app: AppService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.app.getUserInStorage()) {
      // window.alert('Access Denied, Login is Required to Access This Page!');
      location.assign('/login');
    }

    return true;
  }
}
