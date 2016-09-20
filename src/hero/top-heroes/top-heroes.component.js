import { Component } from '@angular/core';
import { HeroService } from '../hero.service';

const template = require('./top-heroes.component.html');
const style = require('./top-heroes.component.css');

@Component({
    selector: 'top-heroes',
    template: template
})
export class TopHeroesComponent {

    constructor(heroService) {
        this.heroService = heroService;
        this.heroes = [];
    }

    ngOnInit() {
        this.heroService.getHeroes().then((heroes) => {
            this.heroes = heroes;
        });
    }
}
TopHeroesComponent.parameters = [HeroService];
