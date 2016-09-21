import { Component } from '@angular/core';
import { HeroService } from '../hero.service';

const template = require('./hero-form.component.html');

@Component({
    selector: 'hero-form',
    template: template,
    inputs: ['hero']
})
export class HeroFormComponent {

    constructor(heroService) {
        this.heroService = heroService;
    }

    saveHero() {
        this.heroService.saveHero(this.hero).then((hero) => {
            this.submitted = true;
        });
    }
}
HeroFormComponent.parameters = [HeroService];
