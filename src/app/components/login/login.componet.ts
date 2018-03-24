import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router/src/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    companyLogoPath1: string;
    companyLogoPath2: string;
    fruitPath1: string;
    fruitPath2: string;
    constructor(private router: Router) {
            this.companyLogoPath1 = '../../assets/img/login_10.png',
            this.companyLogoPath2 = '../../assets/img/login_06.png',
            this.fruitPath1 = '../../assets/img/login_03.png',
            this.fruitPath2 = '../../assets/img/login_14.png'
    }

    ngOnInit(){

    }
    // 用户登陆
    loginUser() {
        this.router.navigate(['system']);
    }

}