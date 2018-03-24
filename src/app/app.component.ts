import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd } from '@angular/router';

import { CommonComponent } from 'app/components/common/common.component';

import { GlobalService } from 'app/services/global-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends CommonComponent implements OnInit{
  // log路径
  logoPath: string;
  //展示导航否
  navShow:boolean;

  // 导航数据
  topNav = [
    { name: '系统设置', url: 'system'},
    { name: '库存管理', url: 'stock' },
    { name: '销售管理', url: 'sell' },
    { name: '采购管理', url: 'buy' },
    { name: '统计报表', url: 'audit' }
  ]

  constructor(private router: Router) {
    super()
    this.logoPath = GlobalService.getImgPath('logo');
    this.navShow = false;
  }
  ngOnInit(){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (/login/.test(event.url)) {
          this.navShow = false;
        }else {
          this.navShow = true;
        }
      }
    })
  }

  /**
   * 注销登陆
   */

  loginOut() {
    this.navShow = false ;
    this.router.navigate(['login']);
  }
  
}
