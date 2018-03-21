import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../common/common.component'

@Component({
    selector: 'app-system',
    templateUrl: '../common/apply.component.html'
})

export class SystemComponent extends CommonComponent implements OnInit {
    constructor() {
        super()
        this.pageRouter = [
            {name: '机构设置', url: 'organ'},
            { name: '系统权限', url: 'rights' },
            { name: '系统管理', url: 'manage' },
            { name: '审批设置', url: 'examine' },
        ]
    }
    ngOnInit(){}
}