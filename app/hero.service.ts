import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeros(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHerosSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve => setTimeout(resolve, 2000))
            .then(() => this.getHeros());
    }

    getHero(id: number): Promise<Hero> {
    return this.getHeros()
                .then(heroes => heroes.find(hero => hero.id === id));
    }
}
