import {Directive, OnInit} from "@angular/core";

import {DropdownGroupService} from "./dropdown-group.service";

@Directive({
  selector: '[dropdown]',
  inputs: [
    'groupKey: dropdown-group'
  ],
  host: {
    '[class.d-dropdown]': 'true',
    '[class.d-dropdown--visible]': 'state',
    '[class.d-dropdown--hidden]': '!state'
  }
})

export class DropdownDirective implements OnInit {

  private _state:boolean = false;
  public groupKey:string;
  public groupIndex:number;
  public hideOnDocumentClick:EventListener;

  constructor(
    private service:DropdownGroupService
  ) {
    this.hideOnDocumentClick = function() {
      this.hide();
    }.bind(this);
  }

  ngOnInit():void {
    this.service.addDropdownToGroup(this);
  }

  toggle():void {
    this.state = !this.state;
  }

  show():void {
    this.state = true;
  }

  hide():void {
    this.state = false;
  }

  get state() {
    return this._state;
  }

  set state(value:boolean) {
    this._state = value;
    if (this._state) {
      this.service.hideDropdownGroup(this);
      window.document.addEventListener('click', this.hideOnDocumentClick);
    } else {
      window.document.removeEventListener('click', this.hideOnDocumentClick);
    }
  }
}
