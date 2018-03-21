import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../common/common.component'

@Component({
    selector: 'app-system',
    templateUrl: '../common/apply.component.html'
})

export class StockComponent extends CommonComponent implements OnInit {
    constructor() {
        super()
        this.pageRouter = [
            { name: '初始设置', url: 'organ' },
            { name: '物料管理', url: 'rights' },
            { name: '财务管理', url: 'manage' },
            { name: '申请管理', url: 'examine' },
            { name: '业务管理', url: 'examine' },
            { name: '财务查询', url: 'examine' },
        ]
    }
    ngOnInit() { }
}