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
    }

    ngOnInit() {
        this.route.params.forEach((params) => {
            let heroId = params.id;
            this.hero = this.heroService.GetHero(heroId);
        })
    }
}
HeroDetailComponent.parameters = [ActivatedRoute, HeroService];
