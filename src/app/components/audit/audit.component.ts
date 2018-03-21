import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../common/common.component'

@Component({
    selector: 'app-system',
    templateUrl: '../common/apply.component.html'
})

export class AuditComponent extends CommonComponent implements OnInit {
    constructor() {
        super()
        this.pageRouter = [
            { name: '销售报表', url: 'organ' },
            { name: '采购报表', url: 'rights' },
            { name: '仓库报表', url: 'manage' },
        ]
    }
    ngOnInit() { }
}