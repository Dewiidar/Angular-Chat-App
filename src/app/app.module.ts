import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ContactComponent} from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
      ContactComponent
  ],
  imports: [
    FontAwesomeModule,
      BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

