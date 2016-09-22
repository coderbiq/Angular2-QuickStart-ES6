import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Hero } from './hero';

@Injectable()
export class HeroService {

    constructor(http) {
        this.http = http;
        this.heroesUrl = 'app/heroes';
        this.headers = new Headers({'Content-Type': 'application/json'});
    }

    allPowers() {
        return ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    }

    getHeroes() {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => {
                let heroes = [];
                let data = response.json().data;
                for(let i in data) {
                    let hero = new Hero();
                    hero.exchangeJson(data[i])
                    heroes.push(hero);
                }
                return heroes;
            });
    }

    getHero(id) {
        let url =  `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => {
                let hero = new Hero();
                hero.exchangeJson(response.json().data);
                return hero;
            });
    }

    saveHero(hero) {
        if(hero.id) {
            return this.updateHero(hero);
        }
        return this.createHero(hero);
    }

    updateHero(hero) {
        let url = `${this.heroesUrl}/${hero.id}`;
        return this.http.put(url, hero.toString(), {headers: this.headers})
            .toPromise()
            .then(() => hero);
    }

    createHero(hero) {
        return this.http.post(this.heroesUrl, hero.toString(), {headers: this.headers})
            .toPromise()
            .then(() => hero);
    }
}
HeroService.parameters = [Http];
