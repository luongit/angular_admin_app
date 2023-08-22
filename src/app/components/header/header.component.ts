import { Component } from '@angular/core';
import { AppService } from 'src/app/servies/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user: any = this.app.getUserInStorage();
  constructor(private app: AppService) {}

  onLogout() {
    sessionStorage.clear();
    location.assign('/login');
  }
}
