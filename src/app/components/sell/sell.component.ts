import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../common/common.component'

@Component({
    selector: 'app-system',
    templateUrl: '../common/apply.component.html'
})

export class SellComponent extends CommonComponent implements OnInit {
    constructor() {
        super()
        this.pageRouter = [
            { name: '客户管理', url: 'organ' },
            { name: '订单管理', url: 'rights' },
            { name: '发货管理', url: 'manage' },
        ]
    }
    ngOnInit() { }
}