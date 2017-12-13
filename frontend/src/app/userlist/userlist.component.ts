import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";

import { User } from "../interface/User";
import { error } from "selenium-webdriver";

@Component({
  selector: "app-userlist",
  templateUrl: "./userlist.component.html",
  styleUrls: ["./userlist.component.css"]
})
export class UserlistComponent implements OnInit {
  userList: User[];
  public postdata:User = {
    name : "postUser",
    mail : "email@email.com"
  }

  constructor(private _appService: AppService) {}

  ngOnInit() {
    this._appService.getUsers().subscribe(res => {
          this.userList = res;
        }
    );
  }

  postUserData(object:User){
    this._appService.postUsers(object).subscribe(
      res => {
        console.log(res)
      }
    )
  }
}
