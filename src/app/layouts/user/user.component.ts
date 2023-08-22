import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/servies/app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  users: any = [];
  constructor(private app: AppService) {
    this.app.endpoint = '/users'
  }
  ngOnInit(): void {
    this.app.get().subscribe((res: any) => {
      this.users = res.result;
    })
  }

}
