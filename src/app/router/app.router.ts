import {Routes} from '@angular/router';
import { LoginComponent } from '../components/login/login.componet';
// 系统设置
import { SystemComponent } from '../components/system/system.component';
import { RightsComponent} from '../components/system/rights/rights.component';
import { OrganComponent } from '../components/system/organ/organ.component';
import { ManageComponent } from '../components/system/manage/manage.component';
import { ExamineComponent } from '../components/system/examine/examine.component';
// 库存管理
import { StockComponent } from '../components/stock/stcok.component';
import {InitialComponent} from '../components/stock/initial/initial.component';
import {MaterielComponent} from '../components/stock/materiel/materiel.component';
import {FinanceManagelComponent} from '../components/stock/finance-manage/finance-manage.component';
import {ApplyComponent} from '../components/stock/apply/apply.component';
import {BusinessComponent} from '../components/stock/business/business.component';
import {FinanceSearchComponent} from '../components/stock/finance-search/finance-search.component';
// 销售管理
import { SellComponent} from '../components/sell/sell.component';
import {CustomerComponent} from '../components/sell/customer/customer.component';
import {OrderComponent} from '../components/sell/order/order.component';
import {DeliverGoodsComponent} from '../components/sell/deliver-goods/deliver-goods.component';
// 采购管理
import { BuyComponent} from '../components/buy/buy.component';
import {ProvideComponent} from '../components/buy/provide/provide.component';
import {BuyOrderComponent} from '../components/buy/buy-order/buy-order.component';
import {ProcurementComponent} from '../components/buy/procurement/procurement.component';
import {ReceiptComponent} from '../components/buy/receipt/receipt.component';
// 审计报表
import { AuditComponent} from '../components/audit/audit.component';
import {SellAuditComponent} from '../components/audit/sell-audit/sell-audit.component';
import {BuyAuditComponent} from '../components/audit/buy-audit/buy-audit.component';
import {WarehouseComponent} from '../components/audit/warehouse/warehouse.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    // 系统设置
    { path: 'system', component: SystemComponent, children: [
        { path: '', redirectTo: 'organ', pathMatch: 'full' },
        { path: 'organ', component: OrganComponent},
        { path: 'rights', component: RightsComponent },
        { path: 'manage', component: ManageComponent },
        { path: 'examine', component: ExamineComponent }
    ]},
  // 库存管理
    { path: 'stock', component: StockComponent, children: [
      { path: '', redirectTo: 'initial', pathMatch: 'full' },
      { path: 'initial', component: InitialComponent},
      { path: 'materiel', component: MaterielComponent},
      { path: 'finance-manage', component: FinanceManagelComponent},
      { path: 'apply', component: ApplyComponent},
      { path: 'business', component: BusinessComponent},
      { path: 'finance-search', component: FinanceSearchComponent},
    ]},
  // 销售管理
    { path: 'sell', component: SellComponent, children: [
      { path: '', redirectTo: 'customer', pathMatch: 'full' },
      { path: 'customer', component: CustomerComponent},
      { path: 'order', component: OrderComponent},
      { path: 'deliver-goods', component: DeliverGoodsComponent},
    ] },
  // 采购管理
    { path: 'buy', component: BuyComponent, children: [
      { path: '', redirectTo: 'provide', pathMatch: 'full' },
      { path: 'provide', component: ProvideComponent},
      { path: 'procurement', component: ProcurementComponent},
      { path: 'buy-order', component: BuyOrderComponent},
      { path: 'receipt', component: ReceiptComponent},
    ]},
  // 报表统计
    { path: 'audit', component: AuditComponent, children: [
      { path: '', redirectTo: 'sell-audit', pathMatch: 'full' },
      { path: 'sell-audit', component: SellAuditComponent},
      { path: 'buy-audit', component: BuyAuditComponent},
      { path: 'warehouse', component: WarehouseComponent},
    ]}
    // {path: 'stock', loadChildren: './components/system/system.module#SystemModule'},
    // {path: 'sell', loadChildren: './components/audit/audit.module#AuditModule'},
    // {path: 'buy', loadChildren: './components/policy/policy.module#PolicyModule'},
    // {path: 'audit', loadChildren: './components/task/task.module#TaskModule'},
    // { path: 'loginIdm', component: LoginIdmComponent },
    // { path: 'forget', component: ForgetComponent },
    // {path: 'nofind/:type', loadChildren: './components/nofind/nofind.module#NofindMoudule'},
    // {path: '*', loadChildren: './components/nofind/nofind.module#NofindMoudule'}
];
