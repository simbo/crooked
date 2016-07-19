import { provideRouter, RouterConfig } from '@angular/router';

import { ContentHomeComponent } from './components/content-home';
import { ContentAboutComponent } from './components/content-about';

export const routes: RouterConfig = [{
  path: '',
  component: ContentHomeComponent
}, {
  path: 'about',
  component: ContentAboutComponent
}];

export const ROUTER_PROVIDERS = [
  provideRouter(routes)
];
