import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../../common/common.component';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html'
})

export class BusinessComponent extends CommonComponent implements OnInit {

  constructor() {
    super();
  }
  ngOnInit() { }
}
