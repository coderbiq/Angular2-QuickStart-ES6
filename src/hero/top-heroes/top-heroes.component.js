import { Component } from '@angular/core';
import { HeroService } from '../hero.service';

const template = require('./top-heroes.component.html');

@Component({
    selector: 'top-heroes',
    template: template,
    inputs: ['limit']
})
export class TopHeroesComponent {

    constructor(heroService) {
        this.heroService = heroService;
        this.heroes = [];
        this.limit = this.limit || 4;
    }

    ngOnInit() {
        this.heroService.getHeroes().then((heroes) => {
            this.heroes = heroes.splice(0, this.limit);
        });
    }
}
TopHeroesComponent.parameters = [HeroService];
