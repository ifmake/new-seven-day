
import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../../common/common.component';

@Component({
    selector: 'app-rights',
    templateUrl: './manage.component.html'
})

export class ManageComponent extends CommonComponent implements OnInit {
    constructor() {
        super()
    }
    ngOnInit() { }
}