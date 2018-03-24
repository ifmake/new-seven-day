import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../../common/common.component';

@Component({
  selector: 'app-provide',
  templateUrl: './procurement.component.html'
})

export class ProcurementComponent extends CommonComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() { }
}
