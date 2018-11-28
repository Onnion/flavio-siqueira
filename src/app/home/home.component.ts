import { Component, OnInit, AfterViewChecked } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, AfterViewChecked {


    public model = {
        left: true,
        middle: false,
        right: false
    };


    constructor() { }


    ngOnInit() { }


    ngAfterViewChecked() {
        document.querySelector('.site-preloader').classList.add('none');
    }


}
