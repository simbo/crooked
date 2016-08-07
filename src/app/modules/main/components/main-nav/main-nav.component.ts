import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'main-nav',
  directives: [...ROUTER_DIRECTIVES],
  templateUrl: './main-nav.template',
})

export class MainNavComponent {

  constructor() {}

}
