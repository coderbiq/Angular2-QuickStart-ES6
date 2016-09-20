import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroService } from './hero.service';
import { HeroListComponent } from './hero-list.component';

@NgModule({
    imports: [ BrowserModule ],
    exports: [ HeroListComponent ],
    declarations: [ HeroListComponent ],
    providers: [HeroService]
})
export class HeroModule { }
