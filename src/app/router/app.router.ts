import {Routes} from '@angular/router';
import { LoginComponent } from '../components/login/login.componet';

import { SystemComponent } from '../components/system/system.component';
import { RightsComponent} from '../components/system/rights/rights.component';
import { OrganComponent } from '../components/system/organ/organ.component';
import { ManageComponent } from '../components/system/manage/manage.component';
import { ExamineComponent } from '../components/system/examine/examine.component';

import { StockComponent } from '../components/stock/stcok.component';
import { SellComponent} from '../components/sell/sell.component';
import { BuyComponent} from '../components/buy/buy.component'
import { AuditComponent} from '../components/audit/audit.component'


export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'system', component: SystemComponent,children: [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'organ', component: OrganComponent},
        { path: 'rights', component: RightsComponent },
        { path: 'manage', component: ManageComponent },
        { path: 'examine', component: ExamineComponent }
    ]},
    { path: 'stock', component: StockComponent },
    { path: 'sell', component: SellComponent },
    { path: 'buy', component: BuyComponent },
    { path: 'audit', component: AuditComponent}
    //{path: 'stock', loadChildren: './components/system/system.module#SystemModule'},
    // {path: 'sell', loadChildren: './components/audit/audit.module#AuditModule'},
    // {path: 'buy', loadChildren: './components/policy/policy.module#PolicyModule'},
    // {path: 'audit', loadChildren: './components/task/task.module#TaskModule'},
    // { path: 'loginIdm', component: LoginIdmComponent },
    // { path: 'forget', component: ForgetComponent },
    // {path: 'nofind/:type', loadChildren: './components/nofind/nofind.module#NofindMoudule'},
    // {path: '*', loadChildren: './components/nofind/nofind.module#NofindMoudule'}
];
