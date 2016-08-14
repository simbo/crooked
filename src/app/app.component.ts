import {Component}  from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {MainNavComponent} from './modules/main/components/navigation/navigation';

@Component({
  selector: 'c-app',
  templateUrl: './app.template',
  styleUrls: ['./app.styles'],
  host: {
    '[class.app]': 'true'
  },
  directives: [
    ...ROUTER_DIRECTIVES,
    MainNavComponent
  ]
})

export class MainAppComponent {

  constructor() {}

}
