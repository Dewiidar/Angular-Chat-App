import { Component } from '@angular/core';
import {IContact} from './contact';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    contacts: IContact[] = [
        {
            'avatar': 'https://bootdey.com/img/Content/avatar/avatar1.png',
            'name': 'John Doe',
            'messages': ['First Message', 'Previous Message'],
            'time': '10:20 PM',
            'status': 'online'
        },
        {
            'avatar': 'https://bootdey.com/img/Content/avatar/avatar2.png',
            'name': 'Mark Doe',
            'messages': ['First Message', 'Previous Message'],
            'time': '10:10 PM',
            'status': 'offline'
        },
        {
            'avatar': 'https://bootdey.com/img/Content/avatar/avatar3.png',
            'name': 'Jean Doe',
            'messages': ['First Message', 'Previous Message'],
            'time': '10:00 PM',
            'status': 'online'
        }
    ];


    filteredContacts: IContact[];

    _contactFilter: string;
    get contactFilter() {
        return this._contactFilter;
    }

    set contactFilter(newValue: string) {
        this._contactFilter = newValue;
        this.filteredContacts = this.contactFilter ? this.performFilter(this.contactFilter) : this.contacts;
    }

    constructor() {
        this.filteredContacts = this.contacts;
        this.contactFilter = '';
    }

    performFilter(filterBy: string): IContact[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.contacts.filter(
            (contact: IContact) => contact.name.toLocaleLowerCase().indexOf(filterBy) > -1
        );
    }

}
