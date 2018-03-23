import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../../common/common.component';

@Component({
  selector: 'app-provide',
  templateUrl: './receipt.component.html'
})

export class ReceiptComponent extends CommonComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() { }
}
