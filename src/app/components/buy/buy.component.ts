import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
    selector: 'app-system',
    templateUrl: '../common/apply.component.html'
})

export class BuyComponent extends CommonComponent implements OnInit {
    constructor() {
        super();
        this.pageRouter = [
            { name: '供方管理', url: 'provide' },
            { name: '采购任务', url: 'procurement' },
            { name: '订单管理', url: 'buy-order' },
            { name: '到货管理', url: 'receipt' },
        ];
    }
    ngOnInit() { }
}
