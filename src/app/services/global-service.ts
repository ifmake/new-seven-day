// 存储全局静态资源

import { Injectable } from "@angular/core";

@Injectable()
export class GlobalService {
    // 图片路径
    private static logoPath: string = '../../favicon.ico';

    constructor() {}

    public static getImgPath(type: string){
        if(type === 'logo') {
            return this.logoPath
        }
    }
}