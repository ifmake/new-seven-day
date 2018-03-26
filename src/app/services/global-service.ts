// 存储全局静态资源

import { Injectable } from "@angular/core";

@Injectable()
export class GlobalService {
    // 图片路径
    private static imgPath: string = '../../assets/img/';

    constructor() {}

    public static getImgPath(type: string){
        return this.imgPath + type;
    }
}