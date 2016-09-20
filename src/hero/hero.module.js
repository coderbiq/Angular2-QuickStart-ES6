import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroService } from './hero.service';
import { HeroListComponent } from './hero-list.component';
import { TopHeroesComponent } from './top-heroes';

@NgModule({
    imports: [ BrowserModule ],
    exports: [ HeroListComponent, TopHeroesComponent ],
    declarations: [ HeroListComponent, TopHeroesComponent ],
    providers: [HeroService]
})
export class HeroModule { }
