import { RouterModule } from '@angular/router';
import { HeroDetailComponent } from './detail';
import { TopHeroesComponent } from './top-heroes';
import { HeroesComponent } from './heroes';

export const HeroRoutes = RouterModule.forRoot([
    {
        path: 'hero',
        children: [
            {
                path: 'top',
                component: TopHeroesComponent
            }, {
                path: 'detail/:id',
                component: HeroDetailComponent
            }, {
                path: 'list',
                component: HeroesComponent
            }, {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            }
        ]
    }
]);
