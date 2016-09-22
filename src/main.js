import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

require('./style.css');

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
