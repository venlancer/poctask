import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from '../common-http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public userDetails:any = [];
  constructor(public _service:CommonHttpService) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this._service.getUSers().subscribe((data:any)=> {
      this.userDetails = data;
    })
  }

}
