import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

import { User } from '../interface/User'

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
    userList:User[]    

  constructor(private _appService:AppService) { }

  ngOnInit(){
    this._appService.getUsers().subscribe(
          res => {
              this.userList = res
        }
    )
    }

}
