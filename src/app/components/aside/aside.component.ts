import { Component } from '@angular/core';
import { AppService } from 'src/app/servies/app.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  user: any = this.app.getUserInStorage();
  constructor(private app: AppService) {}

  onLogout() {
    sessionStorage.clear();
    location.assign('/login');
  }
}
