import {Component}  from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {MainNavComponent} from '../main-nav/main-nav.component';

@Component({
  selector: 'main-app',
  directives: [
    ...ROUTER_DIRECTIVES,
    MainNavComponent
  ],
  templateUrl: './main-app.template'
})

export class MainAppComponent {

  constructor() {}

}
