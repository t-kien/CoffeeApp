import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoffeeComponent } from '../coffee/coffee.component';

@NgModule({
  declarations: [
    CoffeeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CoffeeComponent]
})
export class AppModule { }
