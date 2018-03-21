import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../../common/common.component';

@Component({
    selector: 'app-rights',
    templateUrl: './examine.component.html'
})

export class ExamineComponent extends CommonComponent implements OnInit {
    constructor() {
        super()
    }
    ngOnInit() { }
}