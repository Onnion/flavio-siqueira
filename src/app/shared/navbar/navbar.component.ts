import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    private mode: any;


    constructor(private router: Router, private location: Location, private element: ElementRef) {
        this.sidebarVisible = false;
    }


    ngOnInit() {
        this.router.events.subscribe((val) => {
            this.mode = this.location.path().includes('midia');
        });

     }


    public navScroll(path): void {
        const target = <HTMLElement>document.querySelector('#' + path);
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        this.sidebarClose();

    }


    sidebarOpen() {
        if (!this.mode) {

            const html = document.getElementsByTagName('html')[0];

            setTimeout(function () {
                const toggleButton = document.getElementById('navbarToggler');
                toggleButton.classList.remove('collapse');

            }, 200);

            html.classList.add('nav-open');
            this.sidebarVisible = true;
        }
    };


    sidebarClose() {
        if (!this.mode) {

            const html = document.getElementsByTagName('html')[0];

            setTimeout(function () {
                const toggleButton = document.getElementById('navbarToggler');
                toggleButton.classList.add('collapse');

            }, 200);

            html.classList.remove('nav-open');
            this.sidebarVisible = false;
        }
    };


    sidebarToggle() {
        if (!this.mode) {

            if (this.sidebarVisible === false) {
                this.sidebarOpen();
            } else {
                this.sidebarClose();
            }
        }
    };

}
