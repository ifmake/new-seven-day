// 全局变量服务
import { OnInit, Injectable } from "@angular/core";
import { GlobalService } from '../services/global-service'

@Injectable()
export class AppService implements OnInit {
    public logo: string;
    constructor() {
        this.logo = GlobalService.getImgPath('logo.png')
    }
    ngOnInit() {

    }
}