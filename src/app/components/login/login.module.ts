
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'app/components/login/login.componet';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', component: LoginComponent},
            // {path: 'forget', component: ForgetComponent},
            // {path: 'identi', loadChildren: './components/identi/identi.module#IdentiModule'},
        ])
    ],
    bootstrap: [],
    providers: []
})
export class LoginModule {
}
