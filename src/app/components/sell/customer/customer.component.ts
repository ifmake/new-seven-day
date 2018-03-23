import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../../common/common.component';

@Component({
  selector: 'app-rights',
  templateUrl: './customer.component.html'
})

export class CustomerComponent extends CommonComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() { }
}
