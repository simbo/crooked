import { provideRouter, RouterConfig } from '@angular/router';

import { ContentHomeComponent } from './components/content-home/content-home.component';
import { ContentAboutComponent } from './components/content-about/content-about.component';

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
