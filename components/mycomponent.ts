
import {Component} from 'angular2/core';
import {BootStrapp } from 'bootstrap';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}<h1>
    `
})
export class App {
    title: string = 'Countries & Capitals';
}

BootStrapp(app);
