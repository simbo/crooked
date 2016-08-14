import {NgModule} from '@angular/core';

import {accountRouting} from './account.routing';
import {LoginPageComponent} from './components/login-page/login-page.component';

@NgModule({
  imports: [
    accountRouting
  ],
  declarations: [
    LoginPageComponent
  ]
})

export class AccountModule {}
