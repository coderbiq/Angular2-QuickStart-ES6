import { Component } from '@angular/core';
import { HeroService } from '../hero.service';

const template = require('./heroes.component.html');

@Component({
    selector: 'heroes',
    template: template
})
export class HeroesComponent {
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
HeroesComponent.parameters = [HeroService];
