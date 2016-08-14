import {Component}  from '@angular/core';

@Component({
  selector: 'c-app',
  templateUrl: './app.template',
  styleUrls: ['./app.styles'],
  host: {
    '[class.app]': 'true'
  }
})

export class AppComponent {

  constructor() {}

}
