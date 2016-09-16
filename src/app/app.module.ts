import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { SwingModule } from 'angular2-swing';

@NgModule({
  imports: [BrowserModule, SwingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
