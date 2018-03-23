import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
    selector: 'app-system',
    templateUrl: '../common/apply.component.html'
})

  export class AuditComponent extends CommonComponent implements OnInit {
      constructor() {
          super();
          this.pageRouter = [
              { name: '销售报表', url: 'sell-audit'},
              { name: '采购报表', url: 'buy-audit' },
              { name: '仓库报表', url: 'warehouse' },
          ];
      }
      ngOnInit() { }
  }
