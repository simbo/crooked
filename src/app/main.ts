import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';

import {MainAppComponent} from './modules/main/components/main-app/main-app.component';
import {ROUTER_PROVIDERS} from './modules/main/routes';

bootstrap(MainAppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS
]).catch(err => console.error(err));

require('styles/main.styl');
