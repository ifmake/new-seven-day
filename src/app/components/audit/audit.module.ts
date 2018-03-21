
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuditComponent} from './audit.component'


@NgModule({
    declarations: [
     
    ],
    imports: [
        CommonModule,
        HttpModule,
        NgModule,
        RouterModule.forChild([
            { path: '', component: AuditComponent}
        ])
    ],
    providers: [],
    bootstrap: []
})
export class SellModule { }
