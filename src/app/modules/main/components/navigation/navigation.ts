import {Component} from '@angular/core';

@Component({
  selector: 'c-navigation',
  templateUrl: './navigation.template',
  styleUrls: ['./navigation.styles'],
  host: {
    '[class.nav]': 'true'
  }
})

export class NavigationComponent {

  constructor() {}

}
