import {DropdownDirective} from './dropdown.directive';

function getGroupKey(dropdown?:DropdownDirective):string {
  return dropdown.groupKey || '';
}

export class DropdownGroupService {

  public groups = {};

  constructor() {}

  addDropdownToGroup(
    dropdown:DropdownDirective,
    groupKey?:string
  ):void {
    groupKey = groupKey || getGroupKey(dropdown);
    if (!this.groups.hasOwnProperty(groupKey)) this.groups[groupKey] = [];
    dropdown.groupIndex = this.groups[groupKey].push(dropdown) - 1;
  }

  hideDropdownGroup(
    excludeDropdown?:DropdownDirective,
    groupKey?:string
  ):void {
    groupKey = groupKey || getGroupKey(excludeDropdown);
    this.groups[groupKey].forEach((dropdown, i) => {
      if (dropdown.state && (!excludeDropdown || excludeDropdown.groupIndex !== i)) dropdown.state = false;
    });
  }

}
