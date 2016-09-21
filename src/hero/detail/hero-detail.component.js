import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

const template = require('./hero-detail.component.html');

@Component({
    selector: 'hero-detail',
    template: template
})
export class HeroDetailComponent {

    constructor(route, heroService) {
        this.route = route;
        this.heroService = heroService;
        this.hero = undefined;
        this.submitted = false;
    }

    saveHero() {
        this.heroService.saveHero(this.hero).then((hero) => {
            this.submitted = true;
        });
    }

    ngOnInit() {
        this.route.params.forEach((params) => {
            let heroId = params.id;
            this.heroService.getHero(heroId).then((hero) => {
                this.hero = hero;
            });
        })
    }
}
HeroDetailComponent.parameters = [ActivatedRoute, HeroService];
