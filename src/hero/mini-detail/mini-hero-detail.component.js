import { Component } from '@angular/core';

const template = require('./mini-hero-detail.component.html');
const style = require('./mini-hero-detail.component.css');

@Component({
    selector: 'mini-hero-detail',
    template: template,
    inputs: ['hero']
})
export class MiniHeroDetailComponent {

}
