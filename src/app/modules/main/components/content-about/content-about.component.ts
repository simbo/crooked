import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'content-about',
  templateUrl: './content-about.template.pug'
})

export class ContentAboutComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    console.log('Hello About');
  }

}
