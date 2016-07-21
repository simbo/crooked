import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'content-home',
  templateUrl: './content-home.component.jade'
})

export class ContentHomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    console.log('Hello Home');
  }

}
