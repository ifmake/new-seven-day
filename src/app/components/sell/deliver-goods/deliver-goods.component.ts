import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../../common/common.component';

@Component({
  selector: 'app-rights',
  templateUrl: './deliver-goods.component.html'
})

export class DeliverGoodsComponent extends CommonComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() { }
}
