import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ContactComponent} from './contact/contact.component';
import {SearchComponent} from './shared/search.component';

@NgModule({
  declarations: [
    AppComponent,
      ContactComponent, SearchComponent
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

