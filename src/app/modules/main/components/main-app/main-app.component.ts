import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'main-app',
  directives: [...ROUTER_DIRECTIVES],
  templateUrl: './main-app.component.html'
})

export class MainAppComponent {

  constructor() {}

}
