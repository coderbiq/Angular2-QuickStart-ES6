import { Component } from '@angular/core';
import { HeroService } from './hero.service';

const template = require('./hero-list.component.html');

@Component({
    selector: 'hero-list',
    template: template
})
export class HeroListComponent {
    constructor(service) {
        this.heroes = service.GetHeroes();
    }
}
HeroListComponent.parameters = [HeroService];
