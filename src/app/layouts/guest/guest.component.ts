import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/servies/app.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit{
  pageSize: number = 10;
  p: number = 1;
  total: number = 0;
  data: any = [];
  isShow: boolean = false;

  constructor(private app: AppService) {
    this.app.endpoint = 'guest-team'
  }

  ngOnInit(): void {
    this.app.get().subscribe((res: any) => {
      this.data = res.result;
      this.total = res.result.length
    })
  }

  pageChanged(e: any) {
    // console.log(e)
    this.p = e;
  }

  onShow() {
    this.isShow = !this.isShow
  }

}
