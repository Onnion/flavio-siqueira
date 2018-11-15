import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/platform-browser';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private _router: Subscription;
    @ViewChild(NavbarComponent) navbar: NavbarComponent;

    constructor(
        private router: Router,
        @Inject(DOCUMENT) private document: any,
        private element: ElementRef,
    ) {}


    public modeMidia(): boolean {
        const snap = this.router.url.substring(1, 6);
        return snap === 'midia';
    }


    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (!this.modeMidia()) {
            const number = window.scrollY;
            const navbar: HTMLElement = this.element.nativeElement.children[0].children[0];

            if (number > 150 || window.pageYOffset > 150) {
                navbar.classList.remove('navbar-transparent');

            } else {
                navbar.classList.add('navbar-transparent');

            }
        }

    }


    private refactorMethod() {
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            } else {
                window.document.activeElement.scrollTop = 0;
            }
            this.navbar.sidebarClose();
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');

        }

    }

    ngOnInit() {
        this.refactorMethod();
    }

}
