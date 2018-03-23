export class CommonComponent {
    // 当前时间
    public nowTime: Date;
    // 路由导航
    public pageRouter: any;
    // 测试列表
    public DataList: any;
    constructor() {
    this.nowTime = new Date();
    this.pageRouter = [];
    this.DataList = [
      {name: '张三', id: 123421, phone: 13996161484, mail: '1176033349@qq.com', company: '新七天'},
      {name: '李四', id: 123421, phone: 13429631324, mail: '1176042349@qq.com', company: '新七天'},
      {name: '王五', id: 123421, phone: 13925623484, mail: '1133376049@qq.com', company: '新七天'},
    ];
    }

}
