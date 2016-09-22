import { Component } from '@angular/core';

export class DashboardComponent {

}

DashboardComponent.annotations = [
    new Component({
        selector: 'dashboard',
        template: `<h3 class="sub-header">Top Heroes</h3><top-heroes [limit]="4"></top-heroes>`
    })
]
