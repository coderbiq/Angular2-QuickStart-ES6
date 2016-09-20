import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
