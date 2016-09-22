import { Component } from '@angular/core';

@Component({
    selector: 'dashboard',
    template: `<h3 class="sub-header">Top Heroes</h3><top-heroes [limit]="4"></top-heroes>`
})
export class DashboardComponent {

}
