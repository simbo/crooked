import {DropdownDirective} from './dropdown.directive';
import {DropdownToggleDirective} from './dropdown-toggle.directive';
import {DropdownGroupService} from './dropdown-group.service';

const DROPDOWN_DIRECTIVES = [
  DropdownDirective,
  DropdownToggleDirective
];

const DROPDOWN_SERVICES = [
  DropdownGroupService
];

export {
  DROPDOWN_DIRECTIVES,
  DROPDOWN_SERVICES
}
