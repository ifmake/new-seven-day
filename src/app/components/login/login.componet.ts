import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router/src/router';
import { GlobalService} from '../../services/global-service'
import { AppService } from 'app/services/app-service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent extends AppService implements OnInit {
    kiwifruit: string;
    title: string;
    lemon: string;
    constructor(private router: Router) {
            super();
            this.title = GlobalService.getImgPath('title.png'),
            this.lemon = GlobalService.getImgPath('lemon.png'),
            this.kiwifruit = GlobalService.getImgPath('kiwifruit.png')
    }

    ngOnInit(){

    }
    // 用户登陆
    loginUser() {
        this.router.navigate(['system']);
    }

}