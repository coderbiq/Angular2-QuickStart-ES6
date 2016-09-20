import { Component } from '@angular/core';
import { Hero } from '../hero';

const template = require('./app.component.html');

const Heroes = [
    {Id: 'test-hero-1', Name: 'test hero 1'},
    {Id: 'test-hero-2', Name: 'test hero 2'},
    {Id: 'test-hero-3', Name: 'test hero 3'},
    {Id: 'test-hero-4', Name: 'test hero 4'}
]

@Component({
    selector: 'my-app',
    template: template
})
export class AppComponent {
    constructor() {
        this.heroes = [];
        for(let i in Heroes) {
            let hero = new Hero();
            hero.ExchangeJson(Heroes[i])
            this.heroes.push(hero);
        }
    }
}
