import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {mainRouting} from './main.routing';
import {CommonModule} from '../common/common.module';
import {AppComponent} from './components/app/app.component';
import {NavigationComponent} from './components/navigation/navigation';

@NgModule({
  imports: [
    BrowserModule,
    mainRouting,
    CommonModule
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
