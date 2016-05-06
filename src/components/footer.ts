import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router'

@Component({
    selector: 'footer',
    template: `
        <button [routerLink]="['/Countries']">Browse Countries</button>
        <button [routerLink]="['/Home']">Home</button>
    `,
    directives: [RouterLink]
})
export class Footer {
    url: string = '';
}
