import { Component, OnInit } from '@angular/core';
import { CommonComponent } from 'app/components/common/common.component';
import { GlobalService } from 'app/services/global-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends CommonComponent implements OnInit{
  // logo位置
  logoPath: string;

  // 导航数据
  topNav = [
    { name: '登陆', url: 'login' },
    { name: '系统设置', url: 'system'},
    { name: '库存管理', url: 'stock' },
    { name: '销售管理', url: 'sell' },
    { name: '采购管理', url: 'buy' },
    { name: '统计报表', url: 'audit' }
  ]

  constructor() {
    super()
    this.logoPath = GlobalService.getImgPath('logo');
  }
  ngOnInit(){}

}
