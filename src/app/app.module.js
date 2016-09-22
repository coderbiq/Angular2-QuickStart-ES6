import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { HeroModule } from '../hero';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { routing } from './app.routing';

export class AppModule { }

AppModule.annotations = [
    new NgModule({
        imports:      [
            BrowserModule,
            HeroModule,
            routing,
            HttpModule,
            InMemoryWebApiModule.forRoot(InMemoryDataService)
        ],
        declarations: [ AppComponent, DashboardComponent ],
        bootstrap:    [ AppComponent ]
    })
]
