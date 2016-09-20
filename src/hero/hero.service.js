import { Hero } from './hero';

const Heroes = [
    {Id: 'test-hero-1', Name: 'test hero 1'},
    {Id: 'test-hero-2', Name: 'test hero 2'},
    {Id: 'test-hero-3', Name: 'test hero 3'},
    {Id: 'test-hero-4', Name: 'test hero 4'}
]

export class HeroService {
    GetHeroes() {
        let heroes = [];

        for(let i in Heroes) {
            let hero = new Hero();
            hero.ExchangeJson(Heroes[i])
            heroes.push(hero);
        }

        return heroes;
    }
}
