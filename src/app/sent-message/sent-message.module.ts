import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {SentMessageComponent} from './sent-message.component';

@NgModule({
    declarations: [

        SentMessageComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [SentMessageComponent]
})
export class AppModule { }

