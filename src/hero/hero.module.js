import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroService } from './hero.service';
import { HeroRoutes } from './hero.routing';
import { HeroListComponent } from './hero-list.component';
import { TopHeroesComponent } from './top-heroes';
import { HeroDetailComponent } from './detail';

@NgModule({
    imports: [ BrowserModule, HeroRoutes ],
    exports: [ HeroListComponent, TopHeroesComponent ],
    declarations: [
        HeroListComponent,
        TopHeroesComponent,
        HeroDetailComponent
    ],
    providers: [HeroService]
})
export class HeroModule { }
