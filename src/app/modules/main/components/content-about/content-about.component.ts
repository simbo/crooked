import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'content-about',
  templateUrl: './content-about.component.pug',
  styleUrls: ['./content-about.component.styl']
})

export class ContentAboutComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    console.log('Hello About');
  }

}
