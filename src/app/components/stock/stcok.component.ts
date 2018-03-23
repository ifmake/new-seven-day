import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
    selector: 'app-system',
    templateUrl: '../common/apply.component.html'
})

  export class StockComponent extends CommonComponent implements OnInit {
    constructor() {
        super();
        this.pageRouter = [
            { name: '初始设置', url: 'initial' },
            { name: '物料管理', url: 'materiel' },
            { name: '财务管理', url: 'finance-manage' },
            { name: '申请管理', url: 'apply' },
            { name: '业务管理', url: 'business' },
            { name: '财务查询', url: 'finance-search' },
        ];
    }
    ngOnInit() { };
  }
