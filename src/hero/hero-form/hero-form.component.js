import { Component, EventEmitter } from '@angular/core';
import { HeroService } from '../hero.service';

const template = require('./hero-form.component.html');

export class HeroFormComponent {

    constructor(heroService) {
        this.onSave = new EventEmitter();
        this.heroService = heroService;
        this.powers = this.heroService.allPowers();
    }

    saveHero() {
        this.heroService.saveHero(this.hero).then((hero) => {
            this.submitted = true;
            this.onSave.emit(this.hero);
        });
    }
}
HeroFormComponent.parameters = [HeroService];
HeroFormComponent.annotations = [
    new Component({
        selector: 'hero-form',
        template: template,
        inputs: ['hero'],
        outputs: ['onSave']
    })
];
