import {Routes, RouterModule} from '@angular/router';

import {ContentHomeComponent} from './components/content-home/content-home.component';
import {ContentDemoComponent} from './components/content-demo/content-demo.component';
import {ContentAboutComponent} from './components/content-about/content-about.component';
import {ContentLoginComponent} from './components/content-login/content-login.component';
import {ContentRegisterComponent} from './components/content-register/content-register.component';

const mainRoutes:Routes = [{
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

export const mainRouting = RouterModule.forRoot(mainRoutes);
