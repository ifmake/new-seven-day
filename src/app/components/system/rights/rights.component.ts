import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../../common/common.component';

@Component({
    selector: 'app-rights',
    templateUrl: './rights.component.html'
})

export class RightsComponent extends CommonComponent implements OnInit {
    constructor() {
        super()
    }
    ngOnInit() { }
}