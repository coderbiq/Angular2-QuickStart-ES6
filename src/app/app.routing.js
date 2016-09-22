import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const routing = RouterModule.forRoot([
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    }
]);
