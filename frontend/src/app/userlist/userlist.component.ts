import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
    userList:any    

  constructor(private _appService:AppService) { }

  ngOnInit(){
    this._appService.getUsers().subscribe(
          res => {
              this.userList = res
          
        }
    )
    }

}
