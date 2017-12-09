import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {


  constructor(private _appService:AppService) { }

  ngOnInit(){
    this._appService.getUsers().subscribe(
            res => {
                console.log(res)
            }
        )
    
    }

}
