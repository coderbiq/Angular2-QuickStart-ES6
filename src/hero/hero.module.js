import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeroService } from './hero.service';
import { HeroRoutes } from './hero.routing';
import { HeroesComponent } from './heroes';
import { TopHeroesComponent } from './top-heroes';
import { HeroDetailComponent } from './detail';
import { MiniHeroDetailComponent } from './mini-detail';

@NgModule({
    imports: [ BrowserModule, FormsModule, HeroRoutes ],
    exports: [ HeroesComponent, TopHeroesComponent ],
    declarations: [
        HeroesComponent,
        TopHeroesComponent,
        HeroDetailComponent,
        MiniHeroDetailComponent
    ],
    providers: [HeroService]
})
export class HeroModule { }
