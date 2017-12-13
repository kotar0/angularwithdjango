import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule , XSRFStrategy , CookieXSRFStrategy} from '@angular/http'


import { AppComponent } from './app.component';

import { AppService } from './app.service'

import { routing } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { UserlistComponent } from './userlist/userlist.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserlistComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [AppService , {
      provide : XSRFStrategy,
      useValue: new CookieXSRFStrategy('CSRF-TOKEN' , 'X-CSRF-TOKEN')
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
