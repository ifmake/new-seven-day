import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../../common/common.component';

@Component({
  selector: 'app-provide',
  templateUrl: './buy-order.component.html'
})

export class BuyOrderComponent extends CommonComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() { }
}
