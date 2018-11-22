import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(public location: Location, private element: ElementRef) {
        this.sidebarVisible = false;
    }


    ngOnInit() {  }


    public navScroll(path): void {
        const target = <HTMLElement>document.querySelector('#' + path);
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        this.sidebarClose();

    }


    sidebarOpen() {
        const html = document.getElementsByTagName('html')[0];

        setTimeout(function () {
            const toggleButton = document.getElementById('navbarToggler');
            toggleButton.classList.remove('collapse');

        }, 200);

        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };


    sidebarClose() {

        const html = document.getElementsByTagName('html')[0];

        setTimeout(function () {
            const toggleButton = document.getElementById('navbarToggler');
            toggleButton.classList.add('collapse');

        }, 200);

        html.classList.remove('nav-open');
        this.sidebarVisible = false;
    };


    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

}
