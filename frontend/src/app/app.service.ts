import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { environment } from '../environments/environment'

import { User } from './interface/User'
import { error } from 'util';

@Injectable()
export class AppService {
    private environmentFlag:boolean
    private url:String

  constructor(private _http:Http) {
      this.environmentFlag = environment.production
      this.url = this.environmentFlag ? '/api' : 'http://localhost:3000/api';
   }

   getUsers(){
        return this._http.get(this.url + "/users/")
        .map(res => res.json())
   }

   postUsers (body:User) {
    let bodyString  = JSON.stringify(body); // Stringify payload
    let headers     = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options     = new RequestOptions({ headers: headers }); // Create a request option

    return this._http.post(this.url + "/users/", body, options) // ...using post request
                     .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                     .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  } 

}
