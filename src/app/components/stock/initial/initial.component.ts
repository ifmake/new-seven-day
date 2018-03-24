import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../../common/common.component';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html'
})

export class InitialComponent extends CommonComponent implements OnInit {

  constructor() {
    super();
  }
  ngOnInit() { }
}
