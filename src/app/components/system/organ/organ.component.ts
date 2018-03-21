import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../../common/common.component';

@Component({
    selector: 'app-organ',
    templateUrl: './organ.component.html'
})

export class OrganComponent extends CommonComponent implements OnInit {
    constructor() {
        super()
    }
    ngOnInit() { }
}