
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrganComponent } from 'app/components/system/organ/organ.component';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        NgModule,
        RouterModule.forChild([
            { path: '', component: OrganComponent}
        ])
    ],
    providers: [],
    bootstrap: []
})
export class OrganModule { }
