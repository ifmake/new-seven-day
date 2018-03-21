export class CommonComponent {
    // 当前时间
    public nowTime: Date;
    // 路由导航
    public pageRouter: any;


    constructor(){
    this.nowTime = new Date();
    this.pageRouter = [];

    } 

}