import { TableComponent } from './../table/table.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoffeeComponent } from '../coffee/coffee.component';
import { LoginComponent } from '../login/login.component';

@NgModule({
  declarations: [
    CoffeeComponent,
    TableComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
