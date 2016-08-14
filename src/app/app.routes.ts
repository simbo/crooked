import {provideRouter, RouterConfig} from '@angular/router';

import {ContentHomeComponent} from './modules/main/components/content-home/content-home.component';
import {ContentDemoComponent} from './modules/main/components/content-demo/content-demo.component';
import {ContentAboutComponent} from './modules/main/components/content-about/content-about.component';
import {ContentLoginComponent} from './modules/main/components/content-login/content-login.component';
import {ContentRegisterComponent} from './modules/main/components/content-register/content-register.component';

export const routes: RouterConfig = [{
  path: '',
  component: ContentHomeComponent
}, {
  path: 'demo',
  component: ContentDemoComponent
}, {
  path: 'about',
  component: ContentAboutComponent
}, {
  path: 'login',
  component: ContentLoginComponent
}, {
  path: 'register',
  component: ContentRegisterComponent
}];

export const ROUTER_PROVIDERS = [
  provideRouter(routes)
];
