import { Component } from '@angular/core';

@Component({
    selector: 'dashboard',
    template: `<top-heroes [limit]="4"></top-heroes>`
})
export class DashboardComponent {

}
