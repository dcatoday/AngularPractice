import {Component} from 'angular2/core';

import {AuthorService} from './author.service';

@Component({
    selector: 'authors',
    template: `
                <ul>
                    {{title}}
                    <li *ngFor="#author of authors">
                    {{author}}
                    </li>
                </ul>
                `,
    providers: [AuthorService]
})
export class AuthorsComponent {
    title: 'List of authors';
    
    authors;
    
    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthors();
    }
}