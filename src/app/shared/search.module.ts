import {NgModule} from '@angular/core';
import {SearchComponent} from './search.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    declarations: [SearchComponent],
    imports: [BrowserModule],
    bootstrap: [SearchComponent]
})
export class SearchModule {}
