import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AppService {

  constructor(private _http:Http) {

   }

   getEntry(){
        return this._http.get("/api/entries/")
        .map(res => res.json())
   }

}
