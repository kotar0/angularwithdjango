import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule , XSRFStrategy , CookieXSRFStrategy} from '@angular/http'


import { AppComponent } from './app.component';

import { AppService } from './app.service'

import { routing } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { UserlistComponent } from './userlist/userlist.component';
import { FormComponent } from './form/form.component';
import { xsrfValue } from './app.security';


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
      useValue: xsrfValue()
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
