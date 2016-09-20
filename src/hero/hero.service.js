import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Hero } from './hero';

@Injectable()
export class HeroService {

    constructor(http) {
        this.http = http;
        this.heroesUrl = 'app/heroes';
    }

    GetHeroes() {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => {
                let heroes = [];
                let data = response.json().data;
                for(let i in data) {
                    let hero = new Hero();
                    hero.ExchangeJson(data[i])
                    heroes.push(hero);
                }
                return heroes;
            });
    }

    GetHero(id) {
        let url =  `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => {
                let hero = new Hero();
                hero.ExchangeJson(response.json().data);
                return hero;
            });
    }
}
HeroService.parameters = [Http];
