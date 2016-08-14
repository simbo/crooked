import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {MainModule} from './modules/main/main.module';

platformBrowserDynamic().bootstrapModule(MainModule);

require('styles/main.styl');
