import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { environment } from '../environments/environment'

@Injectable()
export class AppService {
    private environmentFlag:boolean
    private url:String

  constructor(private _http:Http) {
      this.environmentFlag = environment.production
      this.url = this.environmentFlag ? '/api' : 'http://localhost:3000';
   }

   getUsers(){
        return this._http.get(this.url + "/users/")
        .map(res => res.json())
   }

}
