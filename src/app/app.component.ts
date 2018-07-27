import {Component} from '@angular/core';
import {faCog, faPaperclip, faCommentAlt, faUser, faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    faSetting = faCog;
    faPaperClip = faPaperclip;
    faCommentDots = faCommentAlt;
    faUser = faUser;
    faSearch = faSearch;
}
