import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// echart
import { NgxEchartsModule } from 'ngx-echarts';

import { rootRouterConfig } from 'app/router/app.router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.componet';

// 系统设置
import { SystemComponent } from './components/system/system.component';
import { OrganComponent} from './components/system/organ/organ.component';
import { RightsComponent } from './components/system/rights/rights.component';
import { ManageComponent } from './components/system/manage/manage.component';
import { ExamineComponent } from './components/system/examine/examine.component';
// 库存管理
import { StockComponent } from './components/stock/stcok.component';
import {InitialComponent} from './components/stock/initial/initial.component';
import {MaterielComponent} from './components/stock/materiel/materiel.component';
import {FinanceManagelComponent} from './components/stock/finance-manage/finance-manage.component';
import {ApplyComponent} from './components/stock/apply/apply.component';
import {BusinessComponent} from './components/stock/business/business.component';
import {FinanceSearchComponent} from './components/stock/finance-search/finance-search.component';

// 销售管理
import {SellComponent} from './components/sell/sell.component';
import {CustomerComponent} from './components/sell/customer/customer.component';
import {OrderComponent} from './components/sell/order/order.component';
import {DeliverGoodsComponent} from './components/sell/deliver-goods/deliver-goods.component';

// 采购管理
import { BuyComponent} from './components/buy/buy.component';
import {ProvideComponent} from './components/buy/provide/provide.component';
import {ProcurementComponent} from './components/buy/procurement/procurement.component';
import {BuyOrderComponent} from './components/buy/buy-order/buy-order.component';
import {ReceiptComponent} from './components/buy/receipt/receipt.component';

// 审计报表
import { AuditComponent } from './components/audit/audit.component';
import {SellAuditComponent} from './components/audit/sell-audit/sell-audit.component';
import {BuyAuditComponent} from './components/audit/buy-audit/buy-audit.component';
import {WarehouseComponent} from './components/audit/warehouse/warehouse.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // 系统设置
    SystemComponent, OrganComponent, RightsComponent, ManageComponent, ExamineComponent,
    // 库存管理
    StockComponent, InitialComponent, MaterielComponent, FinanceManagelComponent, ApplyComponent, BusinessComponent, FinanceSearchComponent,
    // 销售管理
    SellComponent, CustomerComponent, OrderComponent, DeliverGoodsComponent,
    // 采购管理
    BuyComponent, ProvideComponent, ProcurementComponent, BuyOrderComponent, ReceiptComponent,
    // 审计管理
    AuditComponent, SellAuditComponent, BuyAuditComponent, WarehouseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxEchartsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
