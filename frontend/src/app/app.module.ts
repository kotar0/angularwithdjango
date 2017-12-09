import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'


import { AppComponent } from './app.component';

import { AppService } from './app.service'

import { routing } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { UserlistComponent } from './userlist/userlist.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
