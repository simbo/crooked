import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {DROPDOWN_DIRECTIVES, DROPDOWN_SERVICES} from "../../../common/directives/dropdown";

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.template',
  styleUrls: ['./main-nav.styles'],
  directives: [
    ...DROPDOWN_DIRECTIVES,
    ...ROUTER_DIRECTIVES
  ],
  providers: [
    ...DROPDOWN_SERVICES
  ]
})

export class MainNavComponent {

  constructor() {}

}
