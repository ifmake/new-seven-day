
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { systemRouter } from '../../router/system.router';
import { OrganComponent } from "./organ/organ.component";
import { SystemComponent } from "../system/system.component";

@NgModule({
    declarations: [
        OrganComponent,
        SystemComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        NgModule,
        RouterModule.forChild(systemRouter)
    ],
    providers: [],
    bootstrap: []
})
export class SystemModule {}
