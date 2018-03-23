
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { stockRouter } from '../../router/stock.router';
import {StockComponent} from './stcok.component';

@NgModule({
    declarations: [
        StockComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        NgModule,
        RouterModule.forChild(stockRouter)
    ],
    providers: [],
    bootstrap: []
})
export class StockModule { }
