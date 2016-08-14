import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {mainRouting} from './main.routing';
import {AppComponent} from './components/app/app.component';
import {NavigationComponent} from './components/navigation/navigation';

import {CommonModule} from '../common/common.module';
import {AccountModule} from '../account/account.module';

@NgModule({
  imports: [
    BrowserModule,
    mainRouting,
    CommonModule,
    AccountModule
  ],
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})

export class MainModule {}
