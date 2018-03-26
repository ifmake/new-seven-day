import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../../common/common.component';

<<<<<<< HEAD
=======
declare var echarts: any;

>>>>>>> 1ab8f337f88c5900625bc0cbbaafd92e284cb482
@Component({
  selector: 'app-rights',
  templateUrl: './sell-audit.component.html'
})

export class SellAuditComponent extends CommonComponent implements OnInit {
<<<<<<< HEAD
  constructor() {
    super();
  }
  ngOnInit() { }
=======
  // 销售报表
  sellOption:any;
  constructor() {
    super();
  }
  ngOnInit() {
    let dataAxis = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149];
    let yMax = 600;
    let dataShadow = [];

    for (let i = 0; i < data.length; i++) {
      dataShadow.push(yMax);
    }

    this.sellOption = {
      title: {
        text: '销售报表'
      },
      xAxis: {
        data: dataAxis,
        axisLabel: {
          inside: true,
          textStyle: {
            color: '#fff'
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        z: 10
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#999'
          }
        }
      },
      dataZoom: [
        {
          type: 'inside'
        }
      ],
      series: [
        { // For shadow
          type: 'bar',
          itemStyle: {
            normal: { color: 'rgba(0,0,0,0.02)' }
          },
          barGap: '-100%',
          barCategoryGap: '40%',
          data: dataShadow,
          animation: true
        },
        {
          type: 'bar',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#83bff6' },
                  { offset: 0.5, color: '#188df0' },
                  { offset: 1, color: '#188df0' }
                ]
              )
            },
            emphasis: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#2378f7' },
                  { offset: 0.7, color: '#2378f7' },
                  { offset: 1, color: '#83bff6' }
                ]
              )
            }
          },
          data: data
        }
      ]
    };
  }
>>>>>>> 1ab8f337f88c5900625bc0cbbaafd92e284cb482
}
