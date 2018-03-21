
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SellComponent} from './sell.component'
import { sellRouter} from '../../router/sell.router'

@NgModule({
    declarations: [
        SellComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        NgModule,
        RouterModule.forChild(sellRouter)
    ],
    providers: [],
    bootstrap: []
})
export class SellModule { }
