import { Routes } from '@angular/router';
import { SystemComponent } from '../components/system/system.component';
import { OrganComponent } from '../components/system/organ/organ.component';

export const sellRouter: Routes = [
    {
        path: '', component: SystemComponent,
        children: [
            { path: '', redirectTo: 'organ', pathMatch: 'full' },
            // { path: 'organ', component: OrganComponent},
            // { path: 'rights', loadChildren: './components/system/system.module#SystemModule' },
            // { path: 'manage', loadChildren: './components/audit/audit.module#AuditModule' },
            // { path: 'examine', loadChildren: './components/audit/audit.module#AuditModule' }
        ]
    }

];
