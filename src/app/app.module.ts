import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { rootRouterConfig } from 'app/router/app.router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.componet';
// 系统设置
import { SystemComponent } from './components/system/system.component';
import { OrganComponent} from './components/system/organ/organ.component'
import { RightsComponent } from './components/system/rights/rights.component';
import { ManageComponent } from './components/system/manage/manage.component';
import { ExamineComponent } from './components/system/examine/examine.component';

import { StockComponent } from './components/stock/stcok.component';
import {SellComponent} from './components/sell/sell.component';
import { BuyComponent} from './components/buy/buy.component';
import { AuditComponent } from './components/audit/audit.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    SystemComponent,
    OrganComponent,
    RightsComponent,
    ManageComponent,
    ExamineComponent,

    StockComponent,
    SellComponent,
    BuyComponent,
    AuditComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
