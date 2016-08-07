import {provideRouter, RouterConfig} from '@angular/router';

import {ContentHomeComponent} from './components/content-home/content-home.component';
import {ContentAboutComponent} from './components/content-about/content-about.component';
import {ContentLoginComponent} from './components/content-login/content-login.component'
import {ContentRegisterComponent} from './components/content-register/content-register.component'

export const routes: RouterConfig = [{
  path: '',
  component: ContentHomeComponent
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
