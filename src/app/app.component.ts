import {Component} from '@angular/core';
import {faCog, faPaperclip, faCommentAlt, faUser, faSearch} from '@fortawesome/free-solid-svg-icons';
import {ContactService} from './contact/contact.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ContactService]
})
export class AppComponent {
    faSetting = faCog;
    faPaperClip = faPaperclip;
    faCommentDots = faCommentAlt;
    faUser = faUser;
    faSearch = faSearch;
}
