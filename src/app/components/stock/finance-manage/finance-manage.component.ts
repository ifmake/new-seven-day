import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../../common/common.component';

@Component({
  selector: 'app-materiel',
  templateUrl: './finance-manage.component.html'
})

export class FinanceManagelComponent extends CommonComponent implements OnInit {

  constructor() {
    super();
  }
  ngOnInit() { }
}
