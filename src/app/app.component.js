import { Component } from '@angular/core';

const template = require('./app.component.html');

export class AppComponent {
}

AppComponent.annotations = [

    new Component({
        selector: 'my-app',
        template: template
    })
]
