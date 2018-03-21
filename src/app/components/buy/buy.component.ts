import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../common/common.component'

@Component({
    selector: 'app-system',
    templateUrl: '../common/apply.component.html'
})

export class BuyComponent extends CommonComponent implements OnInit {
    constructor() {
        super()
        this.pageRouter = [
            { name: '供方管理', url: 'organ' },
            { name: '采购任务', url: 'rights' },
            { name: '订单管理', url: 'manage' },
            { name: '到货管理', url: 'examine' },
        ]
    }
    ngOnInit() { }
}