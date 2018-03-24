import { Routes } from '@angular/router';
import {StockComponent} from '../components/stock/stcok.component';

export const stockRouter: Routes = [
    {
        path: '', component: StockComponent,
        children: [
            { path: '', redirectTo: '', pathMatch: 'full' },
            // { path: 'organ', component: OrganComponent},
            // { path: 'rights', loadChildren: './components/system/system.module#SystemModule' },
            // { path: 'manage', loadChildren: './components/audit/audit.module#AuditModule' },
            // { path: 'examine', loadChildren: './components/audit/audit.module#AuditModule' }
        ]
    }

];
