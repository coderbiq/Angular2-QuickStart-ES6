import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroModule } from '../hero';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { routing } from './app.routing';

@NgModule({
    imports:      [ BrowserModule, HeroModule, routing ],
    declarations: [ AppComponent, DashboardComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
