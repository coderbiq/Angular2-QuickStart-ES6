import { RouterModule } from '@angular/router';
import { HeroDetailComponent }      from '../hero/detail';
import { TopHeroesComponent } from '../hero/top-heroes';

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
            }
        ]
    }
]);
