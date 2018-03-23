import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../../common/common.component';

@Component({
  selector: 'app-business',
  templateUrl: './finance-search.component.html'
})

export class FinanceSearchComponent extends CommonComponent implements OnInit {

  constructor() {
    super();
  }
  ngOnInit() { }
}
