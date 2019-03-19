import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { routerTransition } from './helpers/animations/animations';
import 'rxjs/add/operator/filter';
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [routerTransition]

})
export class AppComponent implements OnInit {

    @ViewChild(NavbarComponent) navbar: NavbarComponent;

    constructor(
        private router: Router,
        // @Inject(DOCUMENT) private document: any,
        private element: ElementRef,
        private meta: Meta
    ) {

        this.meta.addTags([
            { name: 'description', content: 'Property Solutions - Governança Imobiliária & Consultoria' },
            { name: 'keywords', content: '' },
            { name: 'theme-color', content: '#9F7425' },
            { property: 'og:type', content: 'website' },
            { property: 'og:image', content: 'assets/img/apple-icon-180x180.png' },
            { property: 'og:image:type', content: 'image/png' },
            { property: 'og:image:width', content: '800' },
            { property: 'og:image:height', content: '600' },
            { property: 'og:title', content: 'Property Solutions' },
            { property: 'og:description', content: 'Property Solutions - Governança Imobiliária & Consultoria' }
        ]);
    }


    public modeMidia(): boolean {
        const snap = this.router.url.substring(1, 6);
        return snap === 'midia';
    }


    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (!this.modeMidia()) {
            const number = window.scrollY;
            const navbar: HTMLElement = this.element.nativeElement.children[0].children[0];

            if (number > 30 || window.pageYOffset > 30) {
                navbar.classList.remove('navbar-transparent');

            } else {
                navbar.classList.add('navbar-transparent');

            }
        }

    }


    private refactorMethod() {

        this.router.events.subscribe((event) => {
            // if (window.outerWidth > 991) {
            //     window.document.children[0].scrollTop = 0;
            // } else {
            //     window.document.activeElement.scrollTop = 0;
            // }
            // this.navbar.sidebarClose();
            const html = document.getElementsByTagName('html')[0];
            html.classList.remove('nav-open');

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
