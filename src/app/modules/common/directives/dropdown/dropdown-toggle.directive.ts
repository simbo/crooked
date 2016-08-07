import {Directive, Host} from "@angular/core";

import {DropdownDirective} from "./dropdown.directive";

@Directive({
  selector: '[dropdown-toggle]',
  host: {
    '(click)': 'trigger($event)',
    '[class.d-dropdown__toggle]': 'true'
  }
})

export class DropdownToggleDirective {

  constructor(
    @Host() private dropdown:DropdownDirective
  ) {}

  trigger(
    event:MouseEvent
  ):void {
    event.stopPropagation();
    this.dropdown.toggle();
  }

}
