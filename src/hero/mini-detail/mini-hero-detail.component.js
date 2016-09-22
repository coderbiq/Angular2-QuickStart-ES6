import { Component } from '@angular/core';

const template = require('./mini-hero-detail.component.html');
const style = require('./mini-hero-detail.component.css');

export class MiniHeroDetailComponent {

}
MiniHeroDetailComponent.annotations = [
    new Component({
        selector: 'mini-hero-detail',
        template: template,
        inputs: ['hero']
    })
];
