import { Component } from '@angular/core';

let template = require('./mini-hero-detail.component.html');
let style = require('./mini-hero-detail.component.css');

@Component({
    selector: 'mini-hero-detail',
    template: template,
    inputs: ['hero']
})
export class MiniHeroDetailComponent {

}
