import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../../common/common.component';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html'
})

export class MaterielComponent extends CommonComponent implements OnInit {

  constructor() {
    super();
  }
  ngOnInit() { }
}
