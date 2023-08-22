import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from 'src/app/servies/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  lF: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private app: AppService) {
    this.app.endpoint = 'users/login';
  }

  get f() { return this.lF.controls; }
  onLogin() {
    if (this.lF.invalid) return;

    console.log(this.lF.value);

    this.app.post(this.lF.value).subscribe((res: any) => {
      if (res.result) {
        let jsonString: any = JSON.stringify(res.result);
        sessionStorage.setItem(this.app.storageToken, jsonString);
        location.assign('/');
      }
    })
  }
}
