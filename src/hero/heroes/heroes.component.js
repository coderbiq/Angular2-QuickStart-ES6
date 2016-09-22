import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

const template = require('./heroes.component.html');

export class HeroesComponent {
    constructor(heroService) {
        this.heroService = heroService;
        this.heroes = [];
        this.selectedHero = undefined;
        this.newHero = undefined;
    }

    showCreateForm() {
        this.newHero = new Hero();
    }

    onCreateHero() {
        this.loadHeroes();
        setTimeout(() => {
            this.newHero = undefined;
        }, 1000);
    }

    selectHero(hero) {
        this.newHero = undefined;
        this.selectedHero = hero;
    }

    loadHeroes() {
        this.heroService.getHeroes().then((heroes) => {
            this.heroes = heroes;
        });
    }

    ngOnInit() {
        this.loadHeroes();
    }
}
HeroesComponent.parameters = [HeroService];
HeroesComponent.annotations = [
    new Component({
        selector: 'heroes',
        template: template
    })
];
