import { Component, OnInit } from '@angular/core';
import {IContact} from './contact';
import {ContactService} from './contact.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    contacts: IContact[];

    filteredContacts: IContact[];

    _contactFilter: string;
    get contactFilter() {
        return this._contactFilter;
    }

    set contactFilter(newValue: string) {
        this._contactFilter = newValue;
        this.filteredContacts = this.contactFilter ? this.performFilter(this.contactFilter) : this.contacts;
    }

    constructor(private _contactService: ContactService) {
        this.contactFilter = '';
    }

    performFilter(filterBy: string): IContact[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.contacts.filter(
            (contact: IContact) => contact.name.toLocaleLowerCase().indexOf(filterBy) > -1
        );
    }

    ngOnInit(): void {
        this.contacts = this._contactService.getContacts();
        this.filteredContacts = this.contacts;
    }
}
