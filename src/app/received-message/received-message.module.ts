import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReceivedMessageComponent} from './received-message.component';

@NgModule({
    declarations: [

        ReceivedMessageComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [ReceivedMessageComponent]
})
export class AppModule { }

