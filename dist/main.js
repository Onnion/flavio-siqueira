(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar *ngIf=\"!modeMidia()\"></app-navbar>\n\n<!-- <main [@routerTransition]=\"o.isActivated ? o.activatedRoute : ''\"> -->\n    <router-outlet #o=\"outlet\"></router-outlet>\n<!-- </main> -->\n\n<app-social-links></app-social-links>\n\n<app-footer *ngIf=\"!modeMidia()\"></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _helpers_animations_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/animations/animations */ "./src/app/helpers/animations/animations.ts");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(router, 
    // @Inject(DOCUMENT) private document: any,
    element, meta) {
        this.router = router;
        this.element = element;
        this.meta = meta;
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
    AppComponent.prototype.modeMidia = function () {
        var snap = this.router.url.substring(1, 6);
        return snap === 'midia';
    };
    AppComponent.prototype.onWindowScroll = function () {
        if (!this.modeMidia()) {
            var number = window.scrollY;
            var navbar = this.element.nativeElement.children[0].children[0];
            if (number > 30 || window.pageYOffset > 30) {
                navbar.classList.remove('navbar-transparent');
            }
            else {
                navbar.classList.add('navbar-transparent');
            }
        }
    };
    AppComponent.prototype.refactorMethod = function () {
        this.router.events.subscribe(function (event) {
            // if (window.outerWidth > 991) {
            //     window.document.children[0].scrollTop = 0;
            // } else {
            //     window.document.activeElement.scrollTop = 0;
            // }
            // this.navbar.sidebarClose();
            var html = document.getElementsByTagName('html')[0];
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
    };
    AppComponent.prototype.ngOnInit = function () {
        this.refactorMethod();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]),
        __metadata("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"])
    ], AppComponent.prototype, "navbar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onWindowScroll", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            animations: [_helpers_animations_animations__WEBPACK_IMPORTED_MODULE_3__["routerTransition"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Meta"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _media_media_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./media/media.module */ "./src/app/media/media.module.ts");
/* harmony import */ var _services_contents_contents_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/contents/contents.service */ "./src/app/services/contents/contents.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/social-links/social-links.component */ "./src/app/components/social-links/social-links.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_13__["SocialLinksComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_9__["HomeModule"],
                _media_media_module__WEBPACK_IMPORTED_MODULE_10__["MediaModule"]
            ],
            providers: [_services_contents_contents_service__WEBPACK_IMPORTED_MODULE_11__["ContentsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _media_media_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media/media.component */ "./src/app/media/media.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    // { path: 'midia', component: MediaComponent},
    { path: 'midia/noticias', component: _media_media_component__WEBPACK_IMPORTED_MODULE_5__["MediaComponent"], data: { type: 'news' } },
    { path: 'midia/videos', component: _media_media_component__WEBPACK_IMPORTED_MODULE_5__["MediaComponent"], data: { type: 'videos' } },
    { path: 'midia/decisoes', component: _media_media_component__WEBPACK_IMPORTED_MODULE_5__["MediaComponent"], data: { type: 'decisions' } },
    { path: 'midia/artigos', component: _media_media_component__WEBPACK_IMPORTED_MODULE_5__["MediaComponent"], data: { type: 'articles' } },
    { path: 'midia/:type/:id/:title', component: _media_media_component__WEBPACK_IMPORTED_MODULE_5__["MediaComponent"], data: { type: 'show' } },
    { path: '**', redirectTo: '' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"about\" class=\"section section-dark\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"section-heading text-center\">\n          <h2 class=\"text-white\">Quem somos</h2>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <!--start mission content-->\n      <div class=\"col-md-6\">\n        <div class=\"mission-content\">\n          <div class=\"mission-dots\">\n            <ul>\n              <li></li>\n              <li></li>\n              <li></li>\n              <li></li>\n            </ul>\n          </div>\n          <h3 class=\"text-white\">Property Solutions</h3>\n          <p class=\"text-justify\">\n            Empresa especialmente criada no intuito de satisfazer,\n            primordialmente, as necessidades dos nossos clientes, através da\n            implementação de ações previamente planejadas, com vistas ao\n            desenvolvimento de uma governança imobiliária eficaz perante o\n            patrimônio e ativos imobiliários, nas áreas de (i) Property, (ii)\n            Legal Permits e (iii) Asset Management.\n          </p>\n          <p class=\"text-justify\">\n            A PROPERTY GOVERNANÇA IMOBILIÁRIA & CONSULTORIA apresenta estrutura\n            sólida, formada por profissionais capacitados, os quais permitem\n            oferecer aos nossos clientes serviços de regularização e legalização\n            de imóveis com rapidez, ética e transparência.\n          </p>\n        </div>\n      </div>\n      <!--end mission content-->\n\n      <!--start mission video-->\n      <div class=\"col-md-6\">\n        <div class=\"mission-video bg-cover\">\n          <div class=\"mission-video-img wow fadeInRight\">\n            <img\n              style=\"width: 500px\"\n              src=\"assets/img/brand/2 - Marca_principal.png\"\n              class=\"img-fluid\"\n              alt=\"\"\n            />\n            <div class=\"mission-video-overlay\">\n              <!-- <div class=\"d-table\">\n                <div class=\"d-table-cell\">\n                  <a class=\"popup-video\" href=\"https://www.youtube.com/watch?v=Mi1QBxVjZAw\"><i class=\"fa fa-play\"></i>\n                  </a>\n                </div>\n              </div> -->\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--end mission content-->\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*$color1:teal;\n$cloudColor:#ecf0f1;\n\n Double Diagonal line\n.column {\n\tdisplay: inline-block;\n\tvertical-align: top;\n}\n.col-3 .column {\n\tpadding: 0 1%;\n\twidth: 33%;\n\ttext-align: center;\n}\n\n.col-3 .column p {\n\tpadding: 1.4em;\n}\n.ss-style-doublediagonal {\n\tz-index: 1;\n\tpadding-top: 6em;\n\tbackground: darken($color1, 11%);\n}\n\n.ss-style-doublediagonal::before,\n.ss-style-doublediagonal::after {\n\ttop: 0;\n\tleft: -25%;\n\tz-index: -1;\n\twidth: 150%;\n\theight: 75%;\n\tbackground: inherit;\n\t-webkit-transform: rotate(-2deg);\n\ttransform: rotate(-2deg);\n\t-webkit-transform-origin: 0 0;\n\ttransform-origin: 0 0;\n}\n\n.ss-style-doublediagonal::before {\n\theight: 50%;\n\tbackground: darken($color1, 15%);\n\t-webkit-transform: rotate(-3deg);\n\ttransform: rotate(-3deg);\n\t-webkit-transform-origin: 3% 0;\n\ttransform-origin: 3% 0;\n}\n */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZmxhdmlvLXNpcXVlaXJhL3NyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkNHIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qJGNvbG9yMTp0ZWFsO1xuJGNsb3VkQ29sb3I6I2VjZjBmMTtcblxuIERvdWJsZSBEaWFnb25hbCBsaW5lXG4uY29sdW1uIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuLmNvbC0zIC5jb2x1bW4ge1xuXHRwYWRkaW5nOiAwIDElO1xuXHR3aWR0aDogMzMlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb2wtMyAuY29sdW1uIHAge1xuXHRwYWRkaW5nOiAxLjRlbTtcbn1cbi5zcy1zdHlsZS1kb3VibGVkaWFnb25hbCB7XG5cdHotaW5kZXg6IDE7XG5cdHBhZGRpbmctdG9wOiA2ZW07XG5cdGJhY2tncm91bmQ6IGRhcmtlbigkY29sb3IxLCAxMSUpO1xufVxuXG4uc3Mtc3R5bGUtZG91YmxlZGlhZ29uYWw6OmJlZm9yZSxcbi5zcy1zdHlsZS1kb3VibGVkaWFnb25hbDo6YWZ0ZXIge1xuXHR0b3A6IDA7XG5cdGxlZnQ6IC0yNSU7XG5cdHotaW5kZXg6IC0xO1xuXHR3aWR0aDogMTUwJTtcblx0aGVpZ2h0OiA3NSU7XG5cdGJhY2tncm91bmQ6IGluaGVyaXQ7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xuXHR0cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7XG5cdC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuXHR0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG59XG5cbi5zcy1zdHlsZS1kb3VibGVkaWFnb25hbDo6YmVmb3JlIHtcblx0aGVpZ2h0OiA1MCU7XG5cdGJhY2tncm91bmQ6IGRhcmtlbigkY29sb3IxLCAxNSUpO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0zZGVnKTtcblx0dHJhbnNmb3JtOiByb3RhdGUoLTNkZWcpO1xuXHQtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDMlIDA7XG5cdHRyYW5zZm9ybS1vcmlnaW46IDMlIDA7XG59XG4gKi8iXX0= */"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/components/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/areas/areas.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/areas/areas.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--start passport process area-->\n<section id=\"passport-process-area\">\n    <div class=\"container\">\n        <!--start section heading-->\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"section-heading text-center\">\n                    <h2>Áreas de atuação</h2>\n                </div>\n            </div>\n        </div>\n        <!--end section heading-->\n        <div class=\"row\">\n            <div role=\"tabpanel\">\n                <!--start tab menu-->\n                <ul class=\"nav nav-tabs\" role=\"tablist\" style=\"justify-content: center;\">\n                    <li *ngFor=\"let area of areas\" role=\"presentation\" (click)=\"selectArea(area.id)\" [class.active]=\"area.id === areaSelected\">\n                        <a style=\"cursor: pointer;\" role=\"tab\" data-toggle=\"tab\">\n                            {{area.label}}\n                        </a>\n                    </li>\n                </ul>\n                <!--end tab menu-->\n\n                <div class=\"tab-content\">\n\n\n                    <div *ngFor=\"let area of areas\" role=\"tabpanel\" [class.active]=\"area.id === areaSelected\" class=\"tab-pane\"\n                        id=\"{{area.id}}\">\n                        <div class=\"container\">\n                            <div class=\"row justify-content-center mb-5\">\n                                <div class=\"col-12\">\n\n\n                                    <div class=\"serv-icon\" style=\"align-items: center; display: flex;\">\n                                        <img src=\"assets/img/enterprise.svg\" class=\"img-responsive\" style=\"width: 71px;\"\n                                            alt=\"\" />\n                                        <h3 style=\"display: inline;margin-left: 10px;font-weight: 700;\">\n                                            {{area.label}}\n                                        </h3>\n                                    </div>\n                                    <div class=\"mission-dots\">\n                                        <ul>\n                                            <li></li>\n                                            <li></li>\n                                            <li></li>\n                                            <li></li>\n                                        </ul>\n                                    </div>\n                                    <p class=\"text-justify\"> {{area.resume}}</p>\n\n                                </div>\n\n                            </div>\n                            <!-- <div class=\"row\"> -->\n                            <div class=\"card-columns\">\n\n                                <div *ngFor=\"let data of area.data; let i = index\" class=\"card\">\n                                    <!-- <img class=\"card-img-top img-fluid\" src=\"//placehold.it/800x560\" alt=\"Card image cap\"> -->\n                                    <div class=\"card-body service-single\">\n                                        <!-- <span class=\"bg-text\">{{(i + 1).toLocaleString('en-US', {minimumIntegerDigits:\n                                            2, useGrouping:false})}}</span> -->\n                                        <p class=\"text-left\">{{data | titlecase}}</p>\n\n                                    </div>\n                                </div>\n\n\n                                <!-- <div *ngFor=\"let data of area.data; let i = index\" class=\"col-md-3 col-sm-6\"> -->\n                                <!-- <div class=\"service-single\"> -->\n                                <!-- <span class=\"bg-text\">{{(i + 1).toLocaleString('en-US', {minimumIntegerDigits:\n                                            2, useGrouping:false})}}</span> -->\n                                <!-- <div class=\"serv-icon\" style=\"padding-top: 20px;\"> -->\n                                <!-- <img src=\"assets/img/enterprise.svg\" class=\"img-responsive\" style=\"width: 71px;\"\n                                                alt=\"\"> -->\n                                <!-- </div> -->\n                                <!-- <h4>{{data}}</h4> -->\n                                <!-- <p class=\"text-left\">{{data | titlecase}}</p> -->\n                                <!-- </div> -->\n                                <!-- </div> -->\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n                <!--end tab content-->\n            </div>\n        </div>\n    </div>\n</section>\n<!--end passport process area-->"

/***/ }),

/***/ "./src/app/components/areas/areas.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/areas/areas.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*      light colors - used for select dropdown         */\np {\n  font-size: 14px;\n  line-height: 24px;\n  color: #66615b;\n  font-weight: 600; }\n.card:hover {\n  -webkit-transform: translateY(0px) !important;\n          transform: translateY(0px) !important; }\n.service-single {\n  border: 1px solid #cccccc;\n  padding: 20px;\n  border-radius: 10px; }\n.service-single .bg-text {\n  position: absolute;\n  top: 40px;\n  font-size: 100px;\n  line-height: 60px;\n  font-weight: 700;\n  font-family: 'Merriweather', serif;\n  color: rgba(46, 56, 58, 0.1); }\n.serv-icon {\n  margin: 0 0 25px; }\n.service-single h4 {\n  font-weight: 700;\n  font-family: 'Merriweather', serif;\n  transition: .3s ease-in; }\n.service-single:hover h4 {\n  color: #9F7425; }\n/*-------------------------------------------------------------------------------------\n    Passport Types Area\n---------------------------------------------------------------------------------------*/\n#passport-process-area {\n  padding: 118px 0px 0px 0px; }\n#passport-process-area .nav-tabs {\n  margin: 0 0 40px;\n  border-bottom: 0; }\n#passport-process-area .nav-tabs li.active a {\n  background-color: #fff;\n  border-color: #9F7425;\n  color: #9F7425;\n  border-radius: 30px;\n  padding: 12px 18px; }\n#passport-process-area .nav-tabs li a {\n  color: #66615b;\n  border-radius: 30px;\n  padding: 12px 18px;\n  margin: 0 4px;\n  font-weight: 700;\n  text-transform: uppercase;\n  border: 2px solid transparent; }\n#passport-process-area .nav-tabs li a:hover {\n  background-color: #9F7425;\n  border-color: #9F7425;\n  color: #fff; }\n#passport-process-area .section-heading {\n  padding-bottom: 70px; }\n#passport-process-area .section-heading h6 {\n  margin-bottom: 15px; }\n.nav-tabs > li,\n.nav-pills > li {\n  float: none;\n  display: inline-block; }\n.nav-tabs,\n.nav-pills {\n  text-align: center; }\n.passport-content {\n  padding: 40px 0 0; }\n.passport-content h6 {\n  color: #9F7425;\n  font-weight: 700;\n  text-transform: uppercase;\n  font-size: 16px;\n  margin-bottom: 20px; }\n.passport-content h3 {\n  font-weight: 700;\n  font-family: 'Merriweather', serif;\n  margin: 0 0 35px;\n  font-size: 48px;\n  line-height: 58px; }\n@media (max-width: 767px) {\n  #passport-process-area .nav-tabs li {\n    margin-top: 25px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZmxhdmlvLXNpcXVlaXJhL3NyYy9hc3NldHMvc2Fzcy9wYXBlci1raXQvX3ZhcmlhYmxlcy5zY3NzIiwiL3Zhci93d3cvaHRtbC9mbGF2aW8tc2lxdWVpcmEvc3JjL2FwcC9jb21wb25lbnRzL2FyZWFzL2FyZWFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFQSwwREFBMEQ7QUNyRTFEO0VBQ0ksZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsZUFBYztFQUNkLGlCQUFnQixFQUNuQjtBQUVEO0VBQ0ksOENBQW9DO1VBQXBDLHNDQUFvQyxFQUN2QztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLGNBQWE7RUFDYixvQkFBbUIsRUFFdEI7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsbUNBQWtDO0VBQ2xDLDZCQUE0QixFQUMvQjtBQUVEO0VBQ0ksaUJBQWdCLEVBQ25CO0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsbUNBQWtDO0VBQ2xDLHdCQUF1QixFQUMxQjtBQUVEO0VBQ0ksZUR3QmdDLEVDdkJuQztBQUNEOzt5RkFFeUY7QUFFekY7RUFDSSwyQkFBMEIsRUFDN0I7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixpQkFDSixFQUFDO0FBRUQ7RUFDSSx1QkFBc0I7RUFDdEIsc0JET2dDO0VDTmhDLGVETWdDO0VDTGhDLG9CQUFtQjtFQUNuQixtQkFBa0IsRUFDckI7QUFFRDtFQUNJLGVBQXVCO0VBQ3ZCLG9CQUFtQjtFQUNuQixtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQiwwQkFBeUI7RUFDekIsOEJBQTZCLEVBQ2hDO0FBRUQ7RUFDSSwwQkRWZ0M7RUNXaEMsc0JEWGdDO0VDWWhDLFlBQVcsRUFDZDtBQUVEO0VBQ0kscUJBQW9CLEVBQ3ZCO0FBRUQ7RUFDSSxvQkFBbUIsRUFDdEI7QUFFRDs7RUFFSSxZQUFXO0VBQ1gsc0JBQXFCLEVBQ3hCO0FBRUQ7O0VBRUksbUJBQWtCLEVBQ3JCO0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7QUFFRDtFQUNJLGVEdkNnQztFQ3dDaEMsaUJBQWdCO0VBQ2hCLDBCQUF5QjtFQUN6QixnQkFBZTtFQUNmLG9CQUFtQixFQUN0QjtBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLG1DQUFrQztFQUNsQyxpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixrQkFBaUIsRUFDcEI7QUFHRDtFQUNJO0lBQ0ksaUJBQWdCLEVBQ25CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FyZWFzL2FyZWFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZvbnQtY29sb3I6ICAgICAgICAgICAgICAgICAjNjY2MTViICFkZWZhdWx0O1xuJGZpbGwtZm9udC1jb2xvcjogICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogICAgICdNb250c2VycmF0JywgXCJIZWx2ZXRpY2FcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRub25lOiAgICAgICAgICAgICAgICAgICAgICAgMCAgICFkZWZhdWx0O1xuJGJvcmRlci10aGluOiAgICAgICAgICAgICAgICAxcHggIWRlZmF1bHQ7XG4kYm9yZGVyLXRoaWNrOiAgICAgICAgICAgICAgIDJweCAhZGVmYXVsdDtcblxuJHdoaXRlLWNvbG9yOiAgICAgICAgICAgICAgICAjRkZGRkZGICFkZWZhdWx0O1xuJHdoaXRlLWJnOiAgICAgICAgICAgICAgICAgICAjRkZGRkZGICFkZWZhdWx0O1xuJHdoaXRlLXN0YXRlcy1jb2xvcjogICAgICAgICByZ2JhKCR3aGl0ZS1jb2xvciwgMC44KTtcblxuJHNtb2tlLWJnOiAgICAgICAgICAgICAgICAgICAjRjVGNUY1ICFkZWZhdWx0O1xuJHBhbGUtYmc6ICAgICAgICAgICAgICAgICAgICAjRkZGQ0Y1ICFkZWZhdWx0O1xuJG1lZGl1bS1wYWxlLWJnOiAgICAgICAgICAgICAjRjFFQUUwICFkZWZhdWx0O1xuXG4kdGFibGUtbGluZS1jb2xvcjogICAgICAgICAgICNjY2MgIWRlZmF1bHQ7XG4kbXV0ZWQtY29sb3I6ICAgICAgICAgICAgICAgICNhNDllOTMgIWRlZmF1bHQ7XG5cbiRibGFjay1iZzogICAgICAgICAgICAgICAgICAgcmdiYSgzMCwzMCwzMCwuOTcpICFkZWZhdWx0O1xuXG4kYmxhY2stY29sb3I6ICAgICAgICAgICAgICAgICMzMzMzMzMgIWRlZmF1bHQ7XG4kYmxhY2staHI6ICAgICAgICAgICAgICAgICAgICM0NDQ0NDQgIWRlZmF1bHQ7XG5cbiRsaWdodC1ncmF5OiAgICAgICAgICAgICAgICAgI0UzRTNFMyAhZGVmYXVsdDtcbiRtZWRpdW0tZ3JheTogICAgICAgICAgICAgICAgI0RERERERCAhZGVmYXVsdDtcbiRkYXJrLWdyYXk6ICAgICAgICAgICAgICAgICAgIzlBOUE5QSAhZGVmYXVsdDtcblxuJHBsYWNlaG9sZGVyLWdyYXk6ICAgICAgICAgICByZ2JhKDIxMCwgMjEwLCAyMTAsIDEpICAhZGVmYXVsdDtcblxuJGdyYXktaW5wdXQtYmc6ICAgICAgICAgICAgICAjZmZmY2Y1ICFkZWZhdWx0O1xuJGRhbmdlci1pbnB1dC1iZzogICAgICAgICAgICAjRkZDMEE0ICFkZWZhdWx0O1xuJHN1Y2Nlc3MtaW5wdXQtYmc6ICAgICAgICAgICAjQUJGM0NCICFkZWZhdWx0O1xuJG90aGVyLW1lZGl1bS1ncmF5OiAgICAgICAgICAjQTQ5RTkzICFkZWZhdWx0O1xuJHRyYW5zcGFyZW50LWJnOiAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJGRlZmF1bHQtY29sb3I6ICAgICAgICAgICAgICAjNjY2MTVCICFkZWZhdWx0O1xuJGRlZmF1bHQtYmc6ICAgICAgICAgICAgICAgICAjNjY2MTVCICFkZWZhdWx0O1xuJGRlZmF1bHQtc3RhdGVzLWNvbG9yOiAgICAgICAjNDAzRDM5ICFkZWZhdWx0O1xuXG4kcHJpbWFyeS1jb2xvcjogICAgICAgICAgICAgICM1MWNiY2UgIWRlZmF1bHQ7XG4kcHJpbWFyeS1zdGF0ZXMtY29sb3I6ICAgICAgIGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMTAlKSAhZGVmYXVsdDtcblxuJHN1Y2Nlc3MtY29sb3I6ICAgICAgICAgICAgICAjNmJkMDk4ICFkZWZhdWx0O1xuJHN1Y2Nlc3Mtc3RhdGVzLWNvbG9yOiAgICAgICBkYXJrZW4oJHN1Y2Nlc3MtY29sb3IsIDEwJSkgIWRlZmF1bHQ7XG5cbiRpbmZvLWNvbG9yOiAgICAgICAgICAgICAgICAgIzUxYmNkYSAhZGVmYXVsdDtcbiRpbmZvLXN0YXRlcy1jb2xvcjogICAgICAgICAgZGFya2VuKCRpbmZvLWNvbG9yLCAxMCUpICFkZWZhdWx0O1xuXG4kd2FybmluZy1jb2xvcjogICAgICAgICAgICAgICNmYmM2NTggIWRlZmF1bHQ7XG4kd2FybmluZy1zdGF0ZXMtY29sb3I6ICAgICAgIGRhcmtlbigkd2FybmluZy1jb2xvciwgMTAlKSAhZGVmYXVsdDtcblxuJGRhbmdlci1jb2xvcjogICAgICAgICAgICAgICAjZjU1OTNkICFkZWZhdWx0O1xuJGRhbmdlci1zdGF0ZXMtY29sb3I6ICAgICAgICBkYXJrZW4oJGRhbmdlci1jb2xvciwgOCUpICFkZWZhdWx0O1xuXG4kbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICM2NjY2NjYgIWRlZmF1bHQ7XG5cbiRwdXJwbGUtY29sb3I6ICAgICAgICAgICAgICAgI2MxNzhjMSAhZGVmYXVsdDtcbiRwdXJwbGUtc3RhdGVzLWNvbG9yOiAgICAgICAgZGFya2VuKCRwdXJwbGUtY29sb3IsIDglKSAhZGVmYXVsdDtcblxuJGJyb3duLWNvbG9yOiAgICAgICAgICAgICAgICAjZGNiMjg1ICFkZWZhdWx0O1xuJGJyb3duLXN0YXRlcy1jb2xvcjogICAgICAgICBkYXJrZW4oJGJyb3duLWNvbG9yLCA4JSkgIWRlZmF1bHQ7XG5cblxuLy8gQlJBTkQgVkFSSUFCTEVTXG4kbWFpbi1jb2xvcjogICAgICAgICAgICAgICAgICM5Rjc0MjUgIWRlZmF1bHQ7XG4kc2Vjb25kLWNvbG9yOiAgICAgICAgICAgICAgICNFQkQ1ODIgIWRlZmF1bHQ7XG4kYmFja2dyb3VuZC1jb2xvcjogICAgICAgICAgICMwMDAwMDAgIWRlZmF1bHQ7XG5cblxuXG4vKiAgICAgIGxpZ2h0IGNvbG9ycyAtIHVzZWQgZm9yIHNlbGVjdCBkcm9wZG93biAgICAgICAgICovXG5cbiRsaWdodC1ibHVlOiAgICAgICAgICAgICAgICAgcmdiYSgkcHJpbWFyeS1jb2xvciwgLjIpO1xuJGxpZ2h0LWF6dXJlOiAgICAgICAgICAgICAgICByZ2JhKCRpbmZvLWNvbG9yLCAuMik7XG4kbGlnaHQtZ3JlZW46ICAgICAgICAgICAgICAgIHJnYmEoJHN1Y2Nlc3MtY29sb3IsIC4yKTtcbiRsaWdodC1vcmFuZ2U6ICAgICAgICAgICAgICAgcmdiYSgkd2FybmluZy1jb2xvciwgLjIpO1xuJGxpZ2h0LXJlZDogICAgICAgICAgICAgICAgICByZ2JhKCRkYW5nZXItY29sb3IsIC4yKTtcblxuXG4vLz09IENvbXBvbmVudHNcbi8vXG4kcGFkZGluZy1iYXNlLXZlcnRpY2FsOiAgICAgICAgIDdweCAhZGVmYXVsdDtcbiRwYWRkaW5nLWJhc2UtaG9yaXpvbnRhbDogICAgICAgMThweCAhZGVmYXVsdDtcblxuJHBhZGRpbmctcm91bmQtdmVydGljYWw6ICAgICAgICA5cHggIWRlZmF1bHQ7XG4kcGFkZGluZy1yb3VuZC1ob3Jpem9udGFsOiAgICAgMThweCAhZGVmYXVsdDtcblxuJHBhZGRpbmctc2ltcGxlLXZlcnRpY2FsOiAgICAgIDEwcHggIWRlZmF1bHQ7XG4kcGFkZGluZy1zaW1wbGUtaG9yaXpvbnRhbDogICAgMThweCAhZGVmYXVsdDtcblxuJHBhZGRpbmctbGFyZ2UtdmVydGljYWw6ICAgICAgIDExcHggIWRlZmF1bHQ7XG4kcGFkZGluZy1sYXJnZS1ob3Jpem9udGFsOiAgICAgMzBweCAhZGVmYXVsdDtcblxuJHBhZGRpbmctc21hbGwtdmVydGljYWw6ICAgICAgICA0cHggIWRlZmF1bHQ7XG4kcGFkZGluZy1zbWFsbC1ob3Jpem9udGFsOiAgICAgMTBweCAhZGVmYXVsdDtcblxuJHBhZGRpbmcteHMtdmVydGljYWw6ICAgICAgICAgICAycHggIWRlZmF1bHQ7XG4kcGFkZGluZy14cy1ob3Jpem9udGFsOiAgICAgICAgIDVweCAhZGVmYXVsdDtcblxuJHBhZGRpbmctbGFiZWwtdmVydGljYWw6ICAgICAgICAycHggIWRlZmF1bHQ7XG4kcGFkZGluZy1sYWJlbC1ob3Jpem9udGFsOiAgICAgMTJweCAhZGVmYXVsdDtcblxuLy8gcGFkZGluZyBmb3IgbGlua3MgaW5zaWRlIGRyb3Bkb3duIG1lbnVcbiRwYWRkaW5nLWRyb3Bkb3duLXZlcnRpY2FsOiAgICAgMTBweCAhZGVmYXVsdDtcbiRwYWRkaW5nLWRyb3Bkb3duLWhvcml6b250YWw6ICAgMTVweCAhZGVmYXVsdDtcblxuJG1hcmdpbi1sYXJnZS12ZXJ0aWNhbDogICAgICAgIDMwcHggIWRlZmF1bHQ7XG4kbWFyZ2luLWJhc2UtdmVydGljYWw6ICAgICAgICAgMTVweCAhZGVmYXVsdDtcblxuLy8gYm9yZGVyIHJhZGl1cyBmb3IgYnV0dG9uc1xuJGJvcmRlci1yYWRpdXMtbm9uZTogICAgICAgICAgICAgMHB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtYnRuLXNtYWxsOiAgICAgIDI2cHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1idG4tYmFzZTogICAgICAgMjBweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWJ0bi1sYXJnZTogICAgICA1MHB4ICFkZWZhdWx0O1xuXG5cbiRtYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgICAwIDAgMTBweCAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtc21hbGw6ICAgICAgICAgICAzcHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1iYXNlOiAgICAgICAgICAgIDRweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxhcmdlOiAgICAgICAgICAgNnB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMteC1sYXJnZTogICAgICAgICA4cHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1leHRyZW1lOiAgICAgICAgIDEycHggIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzLW5vbmUtdG9wOiAgICAgICRib3JkZXItcmFkaXVzLW5vbmUgJGJvcmRlci1yYWRpdXMtbm9uZSAwIDAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1ub25lLWJvdHRvbTogICAwIDAgJGJvcmRlci1yYWRpdXMtbm9uZSAkYm9yZGVyLXJhZGl1cy1ub25lICFkZWZhdWx0O1xuXG4kYm9yZGVyLXJhZGl1cy1zbWFsbC10b3A6ICAgICAgJGJvcmRlci1yYWRpdXMtc21hbGwgJGJvcmRlci1yYWRpdXMtc21hbGwgMCAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtc21hbGwtYm90dG9tOiAgIDAgMCAkYm9yZGVyLXJhZGl1cy1zbWFsbCAkYm9yZGVyLXJhZGl1cy1zbWFsbCAhZGVmYXVsdDtcblxuJGJvcmRlci1yYWRpdXMtbGFyZ2UtdG9wOiAgICAgICRib3JkZXItcmFkaXVzLWxhcmdlICRib3JkZXItcmFkaXVzLWxhcmdlIDAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxhcmdlLWJvdHRvbTogICAwIDAgJGJvcmRlci1yYWRpdXMtbGFyZ2UgJGJvcmRlci1yYWRpdXMtbGFyZ2UgIWRlZmF1bHQ7XG5cbiRidG4tcm91bmQtcmFkaXVzOiAgICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xuXG4kaGVpZ2h0LWJhc2U6ICAgICAgICAgICAgICAgICAgNDBweCAhZGVmYXVsdDtcblxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAgICAgIDE0cHggIWRlZmF1bHQ7XG4kZm9udC1zaXplLXNtYWxsOiAgICAgICAgICAgICAgMTJweCAhZGVmYXVsdDtcbiRmb250LXNpemUtbWVkaXVtOiAgICAgICAgICAgICAxNnB4ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1sYXJnZTogICAgICAgICAgICAgIDIwcHggIWRlZmF1bHQ7XG4kZm9udC1zaXplLWxhcmdlLW5hdmJhcjogICAgICAgMjJweCAhZGVmYXVsdDtcblxuJGZvbnQtc2l6ZS1oMTogICAgICAgICAgICAgICAgIDMuNmVtICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1oMjogICAgICAgICAgICAgICAgIDIuOGVtICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1oMzogICAgICAgICAgICAgICAgIDEuODI1ZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWg0OiAgICAgICAgICAgICAgICAgMS42ZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWg1OiAgICAgICAgICAgICAgICAgMS4zNWVtICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1oNjogICAgICAgICAgICAgICAgIDAuOWVtICFkZWZhdWx0O1xuJGZvbnQtcGFyYWdyYXBoOiAgICAgICAgICAgICAgIDE1cHggIWRlZmF1bHQ7XG4kZm9udC1zaXplLW5hdmJhcjogICAgICAgICAgICAgMTRweCAhZGVmYXVsdDtcblxuJGZvbnQtc2l6ZS1pbmZvLWhvcml6b250YWw6ICAgIDIuNWVtICFkZWZhdWx0O1xuXG4kZm9udC13ZWlnaHQtbGlnaHQ6ICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ub3JtYWw6ICAgICAgICAgNDAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LXNlbWk6ICAgICAgICAgICA1MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZDogICAgICAgICAgIDYwMCAhZGVmYXVsdDtcblxuJGxpbmUtaGVpZ2h0LXNtYWxsOiAgICAgICAgICAgIDIwcHggIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtZ2VuZXJhbDogICAgICAgICAgMS41ZW0gIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICAzNnB4ICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgNTRweCAhZGVmYXVsdDtcblxuXG4kYm9yZGVyLXJhZGl1cy10b3A6ICAgICAgICAxMHB4IDEwcHggMCAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtYm90dG9tOiAgICAgMCAwIDEwcHggMTBweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWRyb3Bkb3duOiAgIDEwcHggMTBweCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLXNoYWRvdzogICAgICAgICAgMCAycHggcmdiYSgxNywgMTYsIDE1LCAwLjEpLCAwIDJweCAxMHB4IHJnYmEoMTcsIDE2LCAxNSwgMC4xKTtcblxuJGdlbmVyYWwtdHJhbnNpdGlvbi10aW1lOiAgMzAwbXMgIWRlZmF1bHQ7XG5cbiRzbG93LXRyYW5zaXRpb24tdGltZTogICAgICAgICAgIDMwMG1zICFkZWZhdWx0O1xuJGRyb3Bkb3duLWNvb3JkaW5hdGVzOiAgICAgIDI5cHggLTUwcHggIWRlZmF1bHQ7XG5cbiRmYXN0LXRyYW5zaXRpb24tdGltZTogICAgICAgICAgIDE1MG1zICFkZWZhdWx0O1xuJHNlbGVjdC1jb29yZGluYXRlczogICAgICAgICA1MCUgLTQwcHggIWRlZmF1bHQ7XG5cbiR0cmFuc2l0aW9uLWxpbmVhcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVhciAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWJlemllcjogICAgICAgICBjdWJpYy1iZXppZXIoMC4zNCwgMS42MSwgMC43LCAxKSAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWVhc2U6ICAgICAgICAgICBlYXNlIDBzO1xuXG4kbmF2YmFyLXBhZGRpbmctYTogICAgICAgICAgICAgICAxMHB4IDE1cHg7XG4kbmF2YmFyLW1hcmdpbi1hOiAgICAgICAgICAgICAgICAxNXB4ICAwcHg7XG5cbiRwYWRkaW5nLXNvY2lhbC1hOiAgICAgICAgICAgICAgIDEwcHggIDVweDtcblxuJG5hdmJhci1tYXJnaW4tYS1idG46ICAgICAgICAgICAgMTVweCAzcHg7XG4kbmF2YmFyLW1hcmdpbi1hLWJ0bi1yb3VuZDogICAgICAxNnB4IDNweDtcblxuJG5hdmJhci1wYWRkaW5nLWEtaWNvbnM6ICAgICAgICAgNnB4IDE1cHg7XG4kbmF2YmFyLW1hcmdpbi1hLWljb25zOiAgICAgICAgICA2cHggIDNweDtcblxuJG5hdmJhci1wYWRkaW5nLWJyYW5kOiAgICAgICAgICAgMjBweCAxNXB4O1xuJG5hdmJhci1tYXJnaW4tYnJhbmQ6ICAgICAgICAgICAgIDVweCAgMHB4O1xuXG4kbmF2YmFyLW1hcmdpbi1icmFuZC1pY29uczogICAgICAxMnB4IGF1dG87XG5cbiRuYXZiYXItbWFyZ2luLWJ0bjogICAgICAgICAgICAgIDE1cHggIDNweDtcblxuJGhlaWdodC1pY29uOlx0XHRcdFx0XHQgNjRweCAhZGVmYXVsdDtcbiR3aWR0aC1pY29uOlx0XHRcdFx0XHQgNjRweCAhZGVmYXVsdDtcbiRwYWRkaW5nLWljb246XHRcdFx0XHRcdCAxMnB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtaWNvbjpcdFx0ICAgICAxNXB4ICFkZWZhdWx0O1xuXG4kc2l6ZS1pY29uOiBcdFx0XHRcdFx0IDY0cHg7XG4kc2l6ZS1pY29uLXNtOiBcdFx0XHRcdFx0IDMycHg7XG5cblxuJGhlaWdodC1pY29uLXNtOlx0XHRcdFx0IDMycHg7XG4kd2lkdGgtaWNvbi1zbTpcdFx0XHRcdFx0IDMycHg7XG4kcGFkZGluZy1pY29uLXNtOlx0XHRcdCAgICAgNHB4O1xuJGJvcmRlci1yYWRpdXMtaWNvbi1zbTpcdFx0XHQgN3B4O1xuXG4kaGVpZ2h0LWljb24tbWVzc2FnZTpcdFx0XHQgNDBweDtcbiR3aWR0aC1pY29uLW1lc3NhZ2U6XHRcdFx0IDQwcHg7XG5cbiRoZWlnaHQtaWNvbi1tZXNzYWdlLXNtOiBcdFx0IDIwcHg7XG4kd2lkdGgtaWNvbi1tZXNzYWdlLXNtOlx0XHRcdCAyMHB4O1xuXG5cblxuJHdoaXRlLW5hdmJhcjogICAgICAgICAgICAgIHJnYmEoI0ZGRkZGRiwgLjk2KTtcbiRibHVlLW5hdmJhcjogICAgICAgICAgICAgICByZ2JhKCMzNEFDREMsIC45OCk7XG4kYXp1cmUtbmF2YmFyOiAgICAgICAgICAgICAgcmdiYSgjNUJDQUZGLCAuOTgpO1xuJGdyZWVuLW5hdmJhcjogICAgICAgICAgICAgIHJnYmEoIzRDRDk2NCwgLjk4KTtcbiRvcmFuZ2UtbmF2YmFyOiAgICAgICAgICAgICByZ2JhKCNGRjk1MDAsIC45OCk7XG4kcmVkLW5hdmJhcjogICAgICAgICAgICAgICAgcmdiYSgjRkY0QzQwLCAuOTgpO1xuXG4kYmctbnVkZTogICAgICAgICAgICAgICAjRkZGQ0Y1ICFkZWZhdWx0O1xuJGJnLXByaW1hcnk6ICAgICAgICAgICAgbGlnaHRlbigkcHJpbWFyeS1jb2xvciwgNyUpICFkZWZhdWx0O1xuJGJnLWluZm86ICAgICAgICAgICAgICAgbGlnaHRlbigkaW5mby1jb2xvciwgNyUpICFkZWZhdWx0O1xuJGJnLXN1Y2Nlc3M6ICAgICAgICAgICAgbGlnaHRlbigkc3VjY2Vzcy1jb2xvciwgNyUpICFkZWZhdWx0O1xuJGJnLXdhcm5pbmc6ICAgICAgICAgICAgbGlnaHRlbigkd2FybmluZy1jb2xvciwgNyUpICFkZWZhdWx0O1xuJGJnLWRhbmdlcjogICAgICAgICAgICAgbGlnaHRlbigkZGFuZ2VyLWNvbG9yLCA3JSkgIWRlZmF1bHQ7XG4kYmctYnJvd246ICAgICAgICAgICAgICBsaWdodGVuKCRicm93bi1jb2xvciwgNyUpICFkZWZhdWx0O1xuJGJnLXB1cnBsZTogICAgICAgICAgICAgbGlnaHRlbigkcHVycGxlLWNvbG9yLCA3JSkgIWRlZmF1bHQ7XG5cbiRwcmVsb2FkZXItY29sb3I6ICAgICAgICAgICNEOEQxQzkgIWRlZmF1bHQ7XG5cbiRmaWx0ZXItYmx1ZTogICAgICAgICBkYXJrZW4oJHByaW1hcnktY29sb3IsIDEwJSk7XG4kZmlsdGVyLWF6dXJlOiAgICAgICAgZGFya2VuKCRpbmZvLWNvbG9yLCAxMCUpO1xuJGZpbHRlci1ncmVlbjogICAgICAgIGRhcmtlbigkc3VjY2Vzcy1jb2xvciwgMTAlKTtcbiRmaWx0ZXItb3JhbmdlOiAgICAgICBkYXJrZW4oJHdhcm5pbmctY29sb3IsIDEwJSk7XG4kZmlsdGVyLXJlZDogICAgICAgICAgZGFya2VuKCRkYW5nZXItY29sb3IsIDEwJSk7XG5cblxuJHRvcGJhci14OiAgICAgICAgICAgICB0b3BiYXIteCAhZGVmYXVsdDtcbiR0b3BiYXItYmFjazogICAgICAgICAgdG9wYmFyLWJhY2sgIWRlZmF1bHQ7XG4kYm90dG9tYmFyLXg6ICAgICAgICAgIGJvdHRvbWJhci14ICFkZWZhdWx0O1xuJGJvdHRvbWJhci1iYWNrOiAgICAgICBib3R0b21iYXItYmFjayAhZGVmYXVsdDtcblxuJHNvY2lhbC1mYWNlYm9vazogXHRcdFx0IzNiNTk5ODtcbiRzb2NpYWwtdHdpdHRlcjogXHRcdFx0IzU1YWNlZTtcbiRzb2NpYWwtcGludGVyZXN0OiBcdFx0XHQjY2MyMTI3O1xuJHNvY2lhbC1nb29nbGU6IFx0XHRcdCNkZDRiMzk7XG4kc29jaWFsLWxpbmtlZGluOiBcdFx0XHQjMDk3NmI0O1xuJHNvY2lhbC1kcmliYmJsZTogXHRcdFx0I2VhNGM4OTtcbiRzb2NpYWwtZ2l0aHViOiBcdFx0XHQjMzMzMzMzO1xuJHNvY2lhbC15b3V0dWJlOiBcdFx0XHQjZTUyZDI3O1xuJHNvY2lhbC1pbnN0YWdyYW06IFx0XHQgICAgIzEyNTY4ODtcbiRzb2NpYWwtcmVkZGl0OiBcdFx0XHQjZmY0NTAwO1xuJHNvY2lhbC10dW1ibHI6IFx0XHRcdCMzNTQ2NWM7XG5cbiRiYWNrZ3JvdW5kLWxpZ2h0LWdyZXk6ICAgICAjRThFN0UzICFkZWZhdWx0O1xuJGJhY2tncm91bmQtbGlnaHRlci1ncmV5OiAgICNGMEVGRUIgIWRlZmF1bHQ7XG4kZm9udC1iYWNrZ3JvdW5kLWxpZ2h0LWdyZXk6ICM5QzlCOTkgIWRlZmF1bHQ7XG4kZm9udC1ob3Zlci1iYWNrZ3JvdW5kLWxpZ2h0LWdyZXk6ICM1RTVFNUMgIWRlZmF1bHQ7XG5cbi8vIHZhcmlhYmxlcyB1c2VkIGluIGhlYWRlcnNcbiRoZWFkZXItYmFja2dyb3VuZDogICAgICAgICAjQjJBRkFCICFkZWZhdWx0O1xuXG4kZmlsdGVyLXByaW1hcnk6ICAgICAgICAgZGFya2VuKCRwcmltYXJ5LWNvbG9yLCAxMCUpO1xuJGZpbHRlci1pbmZvOiAgICAgICAgZGFya2VuKCRpbmZvLWNvbG9yLCAxMCUpO1xuJGZpbHRlci1zdWNjZXNzOiAgICAgICAgZGFya2VuKCRzdWNjZXNzLWNvbG9yLCAxMCUpO1xuJGZpbHRlci13YXJuaW5nOiAgICAgICBkYXJrZW4oJHdhcm5pbmctY29sb3IsIDEwJSk7XG4kZmlsdGVyLWRhbmdlcjogICAgICAgICAgZGFya2VuKCRkYW5nZXItY29sb3IsIDEwJSk7XG5cbi8vIHZhcmlhYmxlIHVzZWQgaW4gZm9vdGVyc1xuJGJsYWNrLWZvb3Rlci1iZzogICAgICAgICAgICAjMjUyNDIyICFkZWZhdWx0O1xuJGJyb3duLWZvbnQtY29sb3I6ICAgICAgICAgICAjQTQ5RTlFICFkZWZhdWx0O1xuJGJyb3duLWZvbnQtY29sb3ItaG92ZXI6ICAgICAjRjFFQUUwICFkZWZhdWx0O1xuXG4vL3ZhcmlhYmxlcyB1c2VkIGluIGNhcmRzXG4kY2FyZC1ibGFjay1jb2xvcjogICAgICAgICAgICMzMzMzMzMgIWRlZmF1bHQ7XG4kY2FyZC1tdXRlZC1jb2xvcjogICAgICAgICAgICNjY2MgIWRlZmF1bHQ7XG5cbiRjYXJkLWJhY2tncm91bmQtYmx1ZTogICAgICAjYjhkOGQ4ICFkZWZhdWx0O1xuJGNhcmQtZm9udC1ibHVlOiAgICAgICAgICAgICM1MDY1NjggIWRlZmF1bHQ7XG4kY2FyZC1zdWJ0aXRsZS1ibHVlOiAgICAgICAgIzdhOWU5ZiAhZGVmYXVsdDtcblxuJGNhcmQtYmFja2dyb3VuZC1ncmVlbjogICAgICAjZDVlNWEzICFkZWZhdWx0O1xuJGNhcmQtZm9udC1ncmVlbjogICAgICAgICAgICAjNjA3NzNkICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUtZ3JlZW46ICAgICAgICAjOTJhYzU2ICFkZWZhdWx0O1xuXG4kY2FyZC1iYWNrZ3JvdW5kLXllbGxvdzogICAgICAjZmZlMjhjICFkZWZhdWx0O1xuJGNhcmQtZm9udC15ZWxsb3c6ICAgICAgICAgICAgI2IyNTgyNSAhZGVmYXVsdDtcbiRjYXJkLXN1YnRpdGxlLXllbGxvdzogICAgICAgICNkODg3MTUgIWRlZmF1bHQ7XG5cbiRjYXJkLWJhY2tncm91bmQtYnJvd246ICAgICAgI2Q2YzFhYiAhZGVmYXVsdDtcbiRjYXJkLWZvbnQtYnJvd246ICAgICAgICAgICAgIzc1NDQyZSAhZGVmYXVsdDtcbiRjYXJkLXN1YnRpdGxlLWJyb3duOiAgICAgICAgI2E0N2U2NSAhZGVmYXVsdDtcblxuJGNhcmQtYmFja2dyb3VuZC1wdXJwbGU6ICAgICAgI2JhYTliYSAhZGVmYXVsdDtcbiRjYXJkLWZvbnQtcHVycGxlOiAgICAgICAgICAgICMzYTI4M2QgIWRlZmF1bHQ7XG4kY2FyZC1zdWJ0aXRsZS1wdXJwbGU6ICAgICAgICAjNWEyODNkICFkZWZhdWx0O1xuXG4kY2FyZC1iYWNrZ3JvdW5kLW9yYW5nZTogICAgICAjZmY4ZjVlICFkZWZhdWx0O1xuJGNhcmQtZm9udC1vcmFuZ2U6ICAgICAgICAgICAgIzc3MjUxMCAhZGVmYXVsdDtcbiRjYXJkLXN1YnRpdGxlLW9yYW5nZTogICAgICAgICNlOTVlMzcgIWRlZmF1bHQ7XG5cbiRjYXJkLWJhY2tncm91bmQtcHJpbWFyeTogICAgICM0MjdDODkgIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAjNDI3Qzg5ICFkZWZhdWx0O1xuXG4kY29sb3ItcmVkLWVycm9yOiByZ2IoMTg1LCA3NCwgNzIpICFkZWZhdWx0O1xuJGNvbG9yLWdyZXktYXJyb3c6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMC4yKSAhZGVmYXVsdDtcblxuJHdpZHRoLWRlZmF1bHQ6IDIyMHB4ICFkZWZhdWx0OyAvLyAzIDk2MHB4LWdyaWQgY29sdW1uc1xuXG4kemluZGV4LXNlbGVjdC1kcm9wZG93bjogMTA2MCAhZGVmYXVsdDsgLy8gbXVzdCBiZSBoaWdoZXIgdGhhbiBhIG1vZGFsIGJhY2tncm91bmQgKDEwNTApXG5cbi8vKiogUGxhY2Vob2xkZXIgdGV4dCBjb2xvclxuJGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyOiAjOTk5ICFkZWZhdWx0O1xuXG5cbi8vIG1lZGlhIGhlYWRlciBcbiRtZWRpYS1oZWFkZXItaGVpZ2h0OiAxMDBweDsiLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvcGFwZXIta2l0L3ZhcmlhYmxlc1wiO1xuXG5wIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgY29sb3I6ICM2NjYxNWI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNhcmQ6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIWltcG9ydGFudDtcbn1cblxuLnNlcnZpY2Utc2luZ2xlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxufVxuXG4uc2VydmljZS1zaW5nbGUgLmJnLXRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XG4gICAgY29sb3I6IHJnYmEoNDYsIDU2LCA1OCwgLjEwKTtcbn1cblxuLnNlcnYtaWNvbiB7XG4gICAgbWFyZ2luOiAwIDAgMjVweDtcbn1cblxuLnNlcnZpY2Utc2luZ2xlIGg0IHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XG4gICAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW47XG59XG5cbi5zZXJ2aWNlLXNpbmdsZTpob3ZlciBoNCB7XG4gICAgY29sb3I6ICRtYWluLWNvbG9yO1xufVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgUGFzc3BvcnQgVHlwZXMgQXJlYVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuI3Bhc3Nwb3J0LXByb2Nlc3MtYXJlYSB7XG4gICAgcGFkZGluZzogMTE4cHggMHB4IDBweCAwcHg7XG59XG5cbiNwYXNzcG9ydC1wcm9jZXNzLWFyZWEgLm5hdi10YWJzIHtcbiAgICBtYXJnaW46IDAgMCA0MHB4O1xuICAgIGJvcmRlci1ib3R0b206IDBcbn1cblxuI3Bhc3Nwb3J0LXByb2Nlc3MtYXJlYSAubmF2LXRhYnMgbGkuYWN0aXZlIGEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAkbWFpbi1jb2xvcjtcbiAgICBjb2xvcjogJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBwYWRkaW5nOiAxMnB4IDE4cHg7XG59XG5cbiNwYXNzcG9ydC1wcm9jZXNzLWFyZWEgLm5hdi10YWJzIGxpIGEge1xuICAgIGNvbG9yOiByZ2IoMTAyLCA5NywgOTEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgcGFkZGluZzogMTJweCAxOHB4O1xuICAgIG1hcmdpbjogMCA0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4jcGFzc3BvcnQtcHJvY2Vzcy1hcmVhIC5uYXYtdGFicyBsaSBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1jb2xvcjtcbiAgICBib3JkZXItY29sb3I6ICRtYWluLWNvbG9yO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4jcGFzc3BvcnQtcHJvY2Vzcy1hcmVhIC5zZWN0aW9uLWhlYWRpbmcge1xuICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuXG4jcGFzc3BvcnQtcHJvY2Vzcy1hcmVhIC5zZWN0aW9uLWhlYWRpbmcgaDYge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5uYXYtdGFicz5saSxcbi5uYXYtcGlsbHM+bGkge1xuICAgIGZsb2F0OiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm5hdi10YWJzLFxuLm5hdi1waWxscyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGFzc3BvcnQtY29udGVudCB7XG4gICAgcGFkZGluZzogNDBweCAwIDA7XG59XG5cbi5wYXNzcG9ydC1jb250ZW50IGg2IHtcbiAgICBjb2xvcjogJG1haW4tY29sb3I7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucGFzc3BvcnQtY29udGVudCBoMyB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xuICAgIG1hcmdpbjogMCAwIDM1cHg7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1OHB4O1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICNwYXNzcG9ydC1wcm9jZXNzLWFyZWEgLm5hdi10YWJzIGxpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/areas/areas.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/areas/areas.component.ts ***!
  \*****************************************************/
/*! exports provided: AreasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreasComponent", function() { return AreasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AreasComponent = /** @class */ (function () {
    function AreasComponent() {
        this.areaSelected = "legal-permits";
        this.areas = [
            {
                id: "property",
                label: "PROPERTY",
                resume: "Atuamos nas Regularizações e Legalizações de imóveis, com o objetivo de resguardar o direito de propriedade dos nossos clientes, promovendo assim uma completa valorização imobiliária, bem como uma maior tranquilidade e segurança jurídica.",
                data: [
                    "Due Diligence (Investigação e auditoria com análise de risco);",
                    "Assessoria e legalização de: Loteamentos, Condomínios diversos, parcelamento do solo, remembramento e desmembramentos, incorporação imobiliária, etc;",
                    "Regularização fundiária do imóvel: analisando e obtendo os documentos do imóvel, do vendedor ou comprador para assegurar as aquisições e vendas;",
                    "Análise de questões pertinentes ao uso e ocupação do solo, zoneamento, restrições ambientais, financiamentos, hipotecas e outros assuntos imobiliários;",
                    "Regularização de imóveis rurais com a obtenção de certificação e CCIR - INCRA; ITR/Receita Federal, CAR órgãos ambientais, desmembramento e remembramento, desmatamento e georreferenciamento (através de topógrafo cadastrado no INCRA)."
                ]
            },
            {
                id: "legal-permits",
                label: "LEGAL PERMITS",
                resume: "Como forma de solucionar os problemas ocasionados aos nossos clientes decorrentes de fiscalizações públicas, bem como minimizar as consequências e os custos financeiros envolvidos com a aquisição de imóveis irregulares, disponibilizamos nossos serviços de obtenção das autorizações legais.",
                data: [
                    "Obtenção e Manutenção de licenças e alvarás.",
                    "Aprovação de plantas e projetos para reforma ou construção.",
                    "Obtenção de alvarás de funcionamento, entre outros.",
                    "Acompanhamento perante os órgãos públicos para aprovação final de projetos de legalização.",
                    "Análise e adequação da propriedade às Leis Municipais (de Uso e Ocupação do Solo, Edificações e Instalações), Estaduais e Federais vigentes.",
                    "Acompanhamento e obtenção do Habite-se do imóvel."
                ]
            },
            {
                id: "asset-manangement",
                label: "ASSET MANANGEMENT",
                resume: "No campo gestão e administração dos ativos imobiliários, buscamos promover uma análise criteriosa da real condição patrimonial dos nossos clientes de sorte a promover um maior retorno financeiro possível bem com uma redução dos custos envolvidos com a aquisição e manutenção de imóveis.",
                data: [
                    "Gerenciamento e Administração Imobiliária.",
                    "Acompanhamento mensal dos prazos locatícios (Ações Renovatórias).",
                    "Recuperação de Crédito.",
                    "Gerenciamento dos contratos e recebimento dos valores locatícios.",
                    "Administração de Land Bank e Condomínios em geral.",
                    "Vistorias periódicas no imóvel com elaboração de relatórios."
                ]
            }
        ];
    }
    AreasComponent.prototype.selectArea = function (area) {
        this.areaSelected = area;
    };
    AreasComponent.prototype.toggleArea = function () {
        var _this = this;
        var index = 0;
        var timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(5000);
        this.timer = timer.subscribe(function () {
            _this.areaSelected;
            index = index === 2 ? 0 : index + 1;
            _this.selectArea(_this.areas[index].id);
        });
    };
    AreasComponent.prototype.ngOnInit = function () {
        this.toggleArea();
    };
    AreasComponent.prototype.ngOnDestroy = function () {
        this.timer.unsubscribe();
    };
    AreasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-areas",
            template: __webpack_require__(/*! ./areas.component.html */ "./src/app/components/areas/areas.component.html"),
            styles: [__webpack_require__(/*! ./areas.component.scss */ "./src/app/components/areas/areas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AreasComponent);
    return AreasComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"contact-area\">\n\n    <div class=\"container\" style=\"padding-bottom: 60px;\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"section-heading text-center\">\n                    <h2>Contato</h2>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6 full-container\">\n                <div class=\"\" style=\"width: 100%\">\n                    <app-maps style=\"width: 100%\"></app-maps>\n                </div>\n            </div>\n\n            <div class=\"col-md-6\">\n                \n                <div class=\"contact-form\">\n\n                        <h4 class=\"p-3\"> Consulte-nos sem compromisso</h4>\n\n\n                    <form [formGroup]=\"form\" (submit)=\"submit()\">\n\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>Digite o seu nome</mat-label>\n                            <input matInput formControlName=\"name\">\n                            <!-- <mat-hint class=\"text-white\">Campo obrigatório</mat-hint> -->\n                        </mat-form-field>\n\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>Digite o seu email</mat-label>\n                            <input matInput formControlName=\"email\">\n                        </mat-form-field>\n\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>Digite o seu telefone para contato</mat-label>\n                            <input mask=\"phone\" matInput formControlName=\"phone\">\n                        </mat-form-field>\n\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>Como podemos lhe ajudar?</mat-label>\n                            <textarea formControlName=\"message\" matInput rows=\"3\" style=\"resize: none\"></textarea>\n\n                        </mat-form-field>\n\n                        <div class=\"contact-btn text-center\">\n                            <button [class.disabled]=\"status_form.loading || status_form.done\" [disabled]=\"status_form.loading || status_form.done\" style=\"cursor: pointer\" type=\"submit\">{{getLabel()}}</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/contact/contact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*      light colors - used for select dropdown         */\n#contact-area {\n  padding: 60px 0 0;\n  position: relative; }\n#contact-area .section-heading h6 {\n  margin-bottom: 16px; }\n#contact-area .section-heading {\n  padding-bottom: 60px; }\n.contact-form {\n  border-radius: 6px;\n  background-color: #000000;\n  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);\n  padding: 40px 40px 40px; }\n.contact-form h5 {\n  color: #c6c6c6;\n  font-size: 20px; }\n.contact-form h4 {\n  font-weight: 700;\n  font-family: 'Merriweather', serif;\n  color: #FFFFFF;\n  margin: 0;\n  text-align: center; }\n.contact-btn button {\n  background-color: #9F7425;\n  border: 0;\n  padding: 15px 40px;\n  border-radius: 30px;\n  font-weight: 700;\n  color: #fff;\n  text-transform: uppercase;\n  margin: 15px 0 0;\n  outline: none; }\n.contact-info-single h4 {\n  font-weight: 700;\n  font-family: 'Merriweather', serif; }\n.contact-info-single p {\n  color: #636363; }\n.contact-info .border {\n  border: 1px solid #485254 !important;\n  background-color: #485254; }\n.contact-info {\n  padding: 0 0 70px; }\n.company-info {\n  background-color: #242e30; }\n.contact-info-separator {\n  border-bottom: 1px solid #485254;\n  max-width: 70%;\n  margin: 0 auto;\n  padding-bottom: 26px;\n  margin-bottom: 35px; }\n@media (max-width: 991px) {\n  .contact-form {\n    border-radius: 0;\n    position: initial; } }\n.mat-form-field {\n  width: 100% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZmxhdmlvLXNpcXVlaXJhL3NyYy9hc3NldHMvc2Fzcy9wYXBlci1raXQvX3ZhcmlhYmxlcy5zY3NzIiwiL3Zhci93d3cvaHRtbC9mbGF2aW8tc2lxdWVpcmEvc3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RUEsMERBQTBEO0FDckUxRDtFQUNJLGtCQUFpQjtFQUVqQixtQkFDSixFQUFDO0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7QUFFRDtFQUNJLHFCQUFvQixFQUN2QjtBQUNEO0VBQ0ksbUJBQWtCO0VBQ2xCLDBCRG1EZ0M7RUNqRGhDLGdEQUErQztFQUMvQyx3QkFBdUIsRUFDMUI7QUFFRDtFQUNJLGVBQWM7RUFDZCxnQkFBZSxFQUNsQjtBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLG1DQUFrQztFQUVsQyxlQUFjO0VBQ2QsVUFBUztFQUNULG1CQUNKLEVBQUM7QUFtQkQ7RUFDSSwwQkRXZ0M7RUNWaEMsVUFBUztFQUNULG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCwwQkFBeUI7RUFDekIsaUJBQWdCO0VBQ2hCLGNBQWEsRUFDaEI7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixtQ0FBa0MsRUFDckM7QUFFRDtFQUNJLGVBQWMsRUFDakI7QUFFRDtFQUNJLHFDQUFvQztFQUNwQywwQkFBeUIsRUFDNUI7QUFFRDtFQUNJLGtCQUFpQixFQUNwQjtBQUVEO0VBQ0ksMEJBQXlCLEVBQzVCO0FBQ0Q7RUFDSSxpQ0FBZ0M7RUFDaEMsZUFBYztFQUNkLGVBQWM7RUFDZCxxQkFBb0I7RUFDcEIsb0JBQW1CLEVBQ3RCO0FBRUQ7RUFFSTtJQUNJLGlCQUFnQjtJQUNoQixrQkFBaUIsRUFDcEIsRUFBQTtBQUdMO0VBQ0ksdUJBQXFCLEVBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZm9udC1jb2xvcjogICAgICAgICAgICAgICAgICM2NjYxNWIgIWRlZmF1bHQ7XG4kZmlsbC1mb250LWNvbG9yOiAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgJ01vbnRzZXJyYXQnLCBcIkhlbHZldGljYVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJG5vbmU6ICAgICAgICAgICAgICAgICAgICAgICAwICAgIWRlZmF1bHQ7XG4kYm9yZGVyLXRoaW46ICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcbiRib3JkZXItdGhpY2s6ICAgICAgICAgICAgICAgMnB4ICFkZWZhdWx0O1xuXG4kd2hpdGUtY29sb3I6ICAgICAgICAgICAgICAgICNGRkZGRkYgIWRlZmF1bHQ7XG4kd2hpdGUtYmc6ICAgICAgICAgICAgICAgICAgICNGRkZGRkYgIWRlZmF1bHQ7XG4kd2hpdGUtc3RhdGVzLWNvbG9yOiAgICAgICAgIHJnYmEoJHdoaXRlLWNvbG9yLCAwLjgpO1xuXG4kc21va2UtYmc6ICAgICAgICAgICAgICAgICAgICNGNUY1RjUgIWRlZmF1bHQ7XG4kcGFsZS1iZzogICAgICAgICAgICAgICAgICAgICNGRkZDRjUgIWRlZmF1bHQ7XG4kbWVkaXVtLXBhbGUtYmc6ICAgICAgICAgICAgICNGMUVBRTAgIWRlZmF1bHQ7XG5cbiR0YWJsZS1saW5lLWNvbG9yOiAgICAgICAgICAgI2NjYyAhZGVmYXVsdDtcbiRtdXRlZC1jb2xvcjogICAgICAgICAgICAgICAgI2E0OWU5MyAhZGVmYXVsdDtcblxuJGJsYWNrLWJnOiAgICAgICAgICAgICAgICAgICByZ2JhKDMwLDMwLDMwLC45NykgIWRlZmF1bHQ7XG5cbiRibGFjay1jb2xvcjogICAgICAgICAgICAgICAgIzMzMzMzMyAhZGVmYXVsdDtcbiRibGFjay1ocjogICAgICAgICAgICAgICAgICAgIzQ0NDQ0NCAhZGVmYXVsdDtcblxuJGxpZ2h0LWdyYXk6ICAgICAgICAgICAgICAgICAjRTNFM0UzICFkZWZhdWx0O1xuJG1lZGl1bS1ncmF5OiAgICAgICAgICAgICAgICAjREREREREICFkZWZhdWx0O1xuJGRhcmstZ3JheTogICAgICAgICAgICAgICAgICAjOUE5QTlBICFkZWZhdWx0O1xuXG4kcGxhY2Vob2xkZXItZ3JheTogICAgICAgICAgIHJnYmEoMjEwLCAyMTAsIDIxMCwgMSkgICFkZWZhdWx0O1xuXG4kZ3JheS1pbnB1dC1iZzogICAgICAgICAgICAgICNmZmZjZjUgIWRlZmF1bHQ7XG4kZGFuZ2VyLWlucHV0LWJnOiAgICAgICAgICAgICNGRkMwQTQgIWRlZmF1bHQ7XG4kc3VjY2Vzcy1pbnB1dC1iZzogICAgICAgICAgICNBQkYzQ0IgIWRlZmF1bHQ7XG4kb3RoZXItbWVkaXVtLWdyYXk6ICAgICAgICAgICNBNDlFOTMgIWRlZmF1bHQ7XG4kdHJhbnNwYXJlbnQtYmc6ICAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4kZGVmYXVsdC1jb2xvcjogICAgICAgICAgICAgICM2NjYxNUIgIWRlZmF1bHQ7XG4kZGVmYXVsdC1iZzogICAgICAgICAgICAgICAgICM2NjYxNUIgIWRlZmF1bHQ7XG4kZGVmYXVsdC1zdGF0ZXMtY29sb3I6ICAgICAgICM0MDNEMzkgIWRlZmF1bHQ7XG5cbiRwcmltYXJ5LWNvbG9yOiAgICAgICAgICAgICAgIzUxY2JjZSAhZGVmYXVsdDtcbiRwcmltYXJ5LXN0YXRlcy1jb2xvcjogICAgICAgZGFya2VuKCRwcmltYXJ5LWNvbG9yLCAxMCUpICFkZWZhdWx0O1xuXG4kc3VjY2Vzcy1jb2xvcjogICAgICAgICAgICAgICM2YmQwOTggIWRlZmF1bHQ7XG4kc3VjY2Vzcy1zdGF0ZXMtY29sb3I6ICAgICAgIGRhcmtlbigkc3VjY2Vzcy1jb2xvciwgMTAlKSAhZGVmYXVsdDtcblxuJGluZm8tY29sb3I6ICAgICAgICAgICAgICAgICAjNTFiY2RhICFkZWZhdWx0O1xuJGluZm8tc3RhdGVzLWNvbG9yOiAgICAgICAgICBkYXJrZW4oJGluZm8tY29sb3IsIDEwJSkgIWRlZmF1bHQ7XG5cbiR3YXJuaW5nLWNvbG9yOiAgICAgICAgICAgICAgI2ZiYzY1OCAhZGVmYXVsdDtcbiR3YXJuaW5nLXN0YXRlcy1jb2xvcjogICAgICAgZGFya2VuKCR3YXJuaW5nLWNvbG9yLCAxMCUpICFkZWZhdWx0O1xuXG4kZGFuZ2VyLWNvbG9yOiAgICAgICAgICAgICAgICNmNTU5M2QgIWRlZmF1bHQ7XG4kZGFuZ2VyLXN0YXRlcy1jb2xvcjogICAgICAgIGRhcmtlbigkZGFuZ2VyLWNvbG9yLCA4JSkgIWRlZmF1bHQ7XG5cbiRsaW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgIzY2NjY2NiAhZGVmYXVsdDtcblxuJHB1cnBsZS1jb2xvcjogICAgICAgICAgICAgICAjYzE3OGMxICFkZWZhdWx0O1xuJHB1cnBsZS1zdGF0ZXMtY29sb3I6ICAgICAgICBkYXJrZW4oJHB1cnBsZS1jb2xvciwgOCUpICFkZWZhdWx0O1xuXG4kYnJvd24tY29sb3I6ICAgICAgICAgICAgICAgICNkY2IyODUgIWRlZmF1bHQ7XG4kYnJvd24tc3RhdGVzLWNvbG9yOiAgICAgICAgIGRhcmtlbigkYnJvd24tY29sb3IsIDglKSAhZGVmYXVsdDtcblxuXG4vLyBCUkFORCBWQVJJQUJMRVNcbiRtYWluLWNvbG9yOiAgICAgICAgICAgICAgICAgIzlGNzQyNSAhZGVmYXVsdDtcbiRzZWNvbmQtY29sb3I6ICAgICAgICAgICAgICAgI0VCRDU4MiAhZGVmYXVsdDtcbiRiYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAgIzAwMDAwMCAhZGVmYXVsdDtcblxuXG5cbi8qICAgICAgbGlnaHQgY29sb3JzIC0gdXNlZCBmb3Igc2VsZWN0IGRyb3Bkb3duICAgICAgICAgKi9cblxuJGxpZ2h0LWJsdWU6ICAgICAgICAgICAgICAgICByZ2JhKCRwcmltYXJ5LWNvbG9yLCAuMik7XG4kbGlnaHQtYXp1cmU6ICAgICAgICAgICAgICAgIHJnYmEoJGluZm8tY29sb3IsIC4yKTtcbiRsaWdodC1ncmVlbjogICAgICAgICAgICAgICAgcmdiYSgkc3VjY2Vzcy1jb2xvciwgLjIpO1xuJGxpZ2h0LW9yYW5nZTogICAgICAgICAgICAgICByZ2JhKCR3YXJuaW5nLWNvbG9yLCAuMik7XG4kbGlnaHQtcmVkOiAgICAgICAgICAgICAgICAgIHJnYmEoJGRhbmdlci1jb2xvciwgLjIpO1xuXG5cbi8vPT0gQ29tcG9uZW50c1xuLy9cbiRwYWRkaW5nLWJhc2UtdmVydGljYWw6ICAgICAgICAgN3B4ICFkZWZhdWx0O1xuJHBhZGRpbmctYmFzZS1ob3Jpem9udGFsOiAgICAgICAxOHB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy1yb3VuZC12ZXJ0aWNhbDogICAgICAgIDlweCAhZGVmYXVsdDtcbiRwYWRkaW5nLXJvdW5kLWhvcml6b250YWw6ICAgICAxOHB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy1zaW1wbGUtdmVydGljYWw6ICAgICAgMTBweCAhZGVmYXVsdDtcbiRwYWRkaW5nLXNpbXBsZS1ob3Jpem9udGFsOiAgICAxOHB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy1sYXJnZS12ZXJ0aWNhbDogICAgICAgMTFweCAhZGVmYXVsdDtcbiRwYWRkaW5nLWxhcmdlLWhvcml6b250YWw6ICAgICAzMHB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy1zbWFsbC12ZXJ0aWNhbDogICAgICAgIDRweCAhZGVmYXVsdDtcbiRwYWRkaW5nLXNtYWxsLWhvcml6b250YWw6ICAgICAxMHB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy14cy12ZXJ0aWNhbDogICAgICAgICAgIDJweCAhZGVmYXVsdDtcbiRwYWRkaW5nLXhzLWhvcml6b250YWw6ICAgICAgICAgNXB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy1sYWJlbC12ZXJ0aWNhbDogICAgICAgIDJweCAhZGVmYXVsdDtcbiRwYWRkaW5nLWxhYmVsLWhvcml6b250YWw6ICAgICAxMnB4ICFkZWZhdWx0O1xuXG4vLyBwYWRkaW5nIGZvciBsaW5rcyBpbnNpZGUgZHJvcGRvd24gbWVudVxuJHBhZGRpbmctZHJvcGRvd24tdmVydGljYWw6ICAgICAxMHB4ICFkZWZhdWx0O1xuJHBhZGRpbmctZHJvcGRvd24taG9yaXpvbnRhbDogICAxNXB4ICFkZWZhdWx0O1xuXG4kbWFyZ2luLWxhcmdlLXZlcnRpY2FsOiAgICAgICAgMzBweCAhZGVmYXVsdDtcbiRtYXJnaW4tYmFzZS12ZXJ0aWNhbDogICAgICAgICAxNXB4ICFkZWZhdWx0O1xuXG4vLyBib3JkZXIgcmFkaXVzIGZvciBidXR0b25zXG4kYm9yZGVyLXJhZGl1cy1ub25lOiAgICAgICAgICAgICAwcHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1idG4tc21hbGw6ICAgICAgMjZweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWJ0bi1iYXNlOiAgICAgICAyMHB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtYnRuLWxhcmdlOiAgICAgIDUwcHggIWRlZmF1bHQ7XG5cblxuJG1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgIDAgMCAxMHB4IDAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbWFsbDogICAgICAgICAgIDNweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWJhc2U6ICAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGFyZ2U6ICAgICAgICAgICA2cHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy14LWxhcmdlOiAgICAgICAgIDhweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWV4dHJlbWU6ICAgICAgICAgMTJweCAhZGVmYXVsdDtcblxuJGJvcmRlci1yYWRpdXMtbm9uZS10b3A6ICAgICAgJGJvcmRlci1yYWRpdXMtbm9uZSAkYm9yZGVyLXJhZGl1cy1ub25lIDAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLW5vbmUtYm90dG9tOiAgIDAgMCAkYm9yZGVyLXJhZGl1cy1ub25lICRib3JkZXItcmFkaXVzLW5vbmUgIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzLXNtYWxsLXRvcDogICAgICAkYm9yZGVyLXJhZGl1cy1zbWFsbCAkYm9yZGVyLXJhZGl1cy1zbWFsbCAwIDAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbWFsbC1ib3R0b206ICAgMCAwICRib3JkZXItcmFkaXVzLXNtYWxsICRib3JkZXItcmFkaXVzLXNtYWxsICFkZWZhdWx0O1xuXG4kYm9yZGVyLXJhZGl1cy1sYXJnZS10b3A6ICAgICAgJGJvcmRlci1yYWRpdXMtbGFyZ2UgJGJvcmRlci1yYWRpdXMtbGFyZ2UgMCAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGFyZ2UtYm90dG9tOiAgIDAgMCAkYm9yZGVyLXJhZGl1cy1sYXJnZSAkYm9yZGVyLXJhZGl1cy1sYXJnZSAhZGVmYXVsdDtcblxuJGJ0bi1yb3VuZC1yYWRpdXM6ICAgICAgICAgICAgIDMwcHggIWRlZmF1bHQ7XG5cbiRoZWlnaHQtYmFzZTogICAgICAgICAgICAgICAgICA0MHB4ICFkZWZhdWx0O1xuXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAgMTRweCAhZGVmYXVsdDtcbiRmb250LXNpemUtc21hbGw6ICAgICAgICAgICAgICAxMnB4ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1tZWRpdW06ICAgICAgICAgICAgIDE2cHggIWRlZmF1bHQ7XG4kZm9udC1zaXplLWxhcmdlOiAgICAgICAgICAgICAgMjBweCAhZGVmYXVsdDtcbiRmb250LXNpemUtbGFyZ2UtbmF2YmFyOiAgICAgICAyMnB4ICFkZWZhdWx0O1xuXG4kZm9udC1zaXplLWgxOiAgICAgICAgICAgICAgICAgMy42ZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWgyOiAgICAgICAgICAgICAgICAgMi44ZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWgzOiAgICAgICAgICAgICAgICAgMS44MjVlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtaDQ6ICAgICAgICAgICAgICAgICAxLjZlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtaDU6ICAgICAgICAgICAgICAgICAxLjM1ZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWg2OiAgICAgICAgICAgICAgICAgMC45ZW0gIWRlZmF1bHQ7XG4kZm9udC1wYXJhZ3JhcGg6ICAgICAgICAgICAgICAgMTVweCAhZGVmYXVsdDtcbiRmb250LXNpemUtbmF2YmFyOiAgICAgICAgICAgICAxNHB4ICFkZWZhdWx0O1xuXG4kZm9udC1zaXplLWluZm8taG9yaXpvbnRhbDogICAgMi41ZW0gIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1saWdodDogICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogICAgICAgICA0MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtc2VtaTogICAgICAgICAgIDUwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkOiAgICAgICAgICAgNjAwICFkZWZhdWx0O1xuXG4kbGluZS1oZWlnaHQtc21hbGw6ICAgICAgICAgICAgMjBweCAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1nZW5lcmFsOiAgICAgICAgICAxLjVlbSAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodDogICAgICAgICAgICAgICAgIDM2cHggIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICA1NHB4ICFkZWZhdWx0O1xuXG5cbiRib3JkZXItcmFkaXVzLXRvcDogICAgICAgIDEwcHggMTBweCAwIDAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1ib3R0b206ICAgICAwIDAgMTBweCAxMHB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtZHJvcGRvd246ICAgMTBweCAxMHB4ICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tc2hhZG93OiAgICAgICAgICAwIDJweCByZ2JhKDE3LCAxNiwgMTUsIDAuMSksIDAgMnB4IDEwcHggcmdiYSgxNywgMTYsIDE1LCAwLjEpO1xuXG4kZ2VuZXJhbC10cmFuc2l0aW9uLXRpbWU6ICAzMDBtcyAhZGVmYXVsdDtcblxuJHNsb3ctdHJhbnNpdGlvbi10aW1lOiAgICAgICAgICAgMzAwbXMgIWRlZmF1bHQ7XG4kZHJvcGRvd24tY29vcmRpbmF0ZXM6ICAgICAgMjlweCAtNTBweCAhZGVmYXVsdDtcblxuJGZhc3QtdHJhbnNpdGlvbi10aW1lOiAgICAgICAgICAgMTUwbXMgIWRlZmF1bHQ7XG4kc2VsZWN0LWNvb3JkaW5hdGVzOiAgICAgICAgIDUwJSAtNDBweCAhZGVmYXVsdDtcblxuJHRyYW5zaXRpb24tbGluZWFyOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZWFyICFkZWZhdWx0O1xuJHRyYW5zaXRpb24tYmV6aWVyOiAgICAgICAgIGN1YmljLWJlemllcigwLjM0LCAxLjYxLCAwLjcsIDEpICFkZWZhdWx0O1xuJHRyYW5zaXRpb24tZWFzZTogICAgICAgICAgIGVhc2UgMHM7XG5cbiRuYXZiYXItcGFkZGluZy1hOiAgICAgICAgICAgICAgIDEwcHggMTVweDtcbiRuYXZiYXItbWFyZ2luLWE6ICAgICAgICAgICAgICAgIDE1cHggIDBweDtcblxuJHBhZGRpbmctc29jaWFsLWE6ICAgICAgICAgICAgICAgMTBweCAgNXB4O1xuXG4kbmF2YmFyLW1hcmdpbi1hLWJ0bjogICAgICAgICAgICAxNXB4IDNweDtcbiRuYXZiYXItbWFyZ2luLWEtYnRuLXJvdW5kOiAgICAgIDE2cHggM3B4O1xuXG4kbmF2YmFyLXBhZGRpbmctYS1pY29uczogICAgICAgICA2cHggMTVweDtcbiRuYXZiYXItbWFyZ2luLWEtaWNvbnM6ICAgICAgICAgIDZweCAgM3B4O1xuXG4kbmF2YmFyLXBhZGRpbmctYnJhbmQ6ICAgICAgICAgICAyMHB4IDE1cHg7XG4kbmF2YmFyLW1hcmdpbi1icmFuZDogICAgICAgICAgICAgNXB4ICAwcHg7XG5cbiRuYXZiYXItbWFyZ2luLWJyYW5kLWljb25zOiAgICAgIDEycHggYXV0bztcblxuJG5hdmJhci1tYXJnaW4tYnRuOiAgICAgICAgICAgICAgMTVweCAgM3B4O1xuXG4kaGVpZ2h0LWljb246XHRcdFx0XHRcdCA2NHB4ICFkZWZhdWx0O1xuJHdpZHRoLWljb246XHRcdFx0XHRcdCA2NHB4ICFkZWZhdWx0O1xuJHBhZGRpbmctaWNvbjpcdFx0XHRcdFx0IDEycHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1pY29uOlx0XHQgICAgIDE1cHggIWRlZmF1bHQ7XG5cbiRzaXplLWljb246IFx0XHRcdFx0XHQgNjRweDtcbiRzaXplLWljb24tc206IFx0XHRcdFx0XHQgMzJweDtcblxuXG4kaGVpZ2h0LWljb24tc206XHRcdFx0XHQgMzJweDtcbiR3aWR0aC1pY29uLXNtOlx0XHRcdFx0XHQgMzJweDtcbiRwYWRkaW5nLWljb24tc206XHRcdFx0ICAgICA0cHg7XG4kYm9yZGVyLXJhZGl1cy1pY29uLXNtOlx0XHRcdCA3cHg7XG5cbiRoZWlnaHQtaWNvbi1tZXNzYWdlOlx0XHRcdCA0MHB4O1xuJHdpZHRoLWljb24tbWVzc2FnZTpcdFx0XHQgNDBweDtcblxuJGhlaWdodC1pY29uLW1lc3NhZ2Utc206IFx0XHQgMjBweDtcbiR3aWR0aC1pY29uLW1lc3NhZ2Utc206XHRcdFx0IDIwcHg7XG5cblxuXG4kd2hpdGUtbmF2YmFyOiAgICAgICAgICAgICAgcmdiYSgjRkZGRkZGLCAuOTYpO1xuJGJsdWUtbmF2YmFyOiAgICAgICAgICAgICAgIHJnYmEoIzM0QUNEQywgLjk4KTtcbiRhenVyZS1uYXZiYXI6ICAgICAgICAgICAgICByZ2JhKCM1QkNBRkYsIC45OCk7XG4kZ3JlZW4tbmF2YmFyOiAgICAgICAgICAgICAgcmdiYSgjNENEOTY0LCAuOTgpO1xuJG9yYW5nZS1uYXZiYXI6ICAgICAgICAgICAgIHJnYmEoI0ZGOTUwMCwgLjk4KTtcbiRyZWQtbmF2YmFyOiAgICAgICAgICAgICAgICByZ2JhKCNGRjRDNDAsIC45OCk7XG5cbiRiZy1udWRlOiAgICAgICAgICAgICAgICNGRkZDRjUgIWRlZmF1bHQ7XG4kYmctcHJpbWFyeTogICAgICAgICAgICBsaWdodGVuKCRwcmltYXJ5LWNvbG9yLCA3JSkgIWRlZmF1bHQ7XG4kYmctaW5mbzogICAgICAgICAgICAgICBsaWdodGVuKCRpbmZvLWNvbG9yLCA3JSkgIWRlZmF1bHQ7XG4kYmctc3VjY2VzczogICAgICAgICAgICBsaWdodGVuKCRzdWNjZXNzLWNvbG9yLCA3JSkgIWRlZmF1bHQ7XG4kYmctd2FybmluZzogICAgICAgICAgICBsaWdodGVuKCR3YXJuaW5nLWNvbG9yLCA3JSkgIWRlZmF1bHQ7XG4kYmctZGFuZ2VyOiAgICAgICAgICAgICBsaWdodGVuKCRkYW5nZXItY29sb3IsIDclKSAhZGVmYXVsdDtcbiRiZy1icm93bjogICAgICAgICAgICAgIGxpZ2h0ZW4oJGJyb3duLWNvbG9yLCA3JSkgIWRlZmF1bHQ7XG4kYmctcHVycGxlOiAgICAgICAgICAgICBsaWdodGVuKCRwdXJwbGUtY29sb3IsIDclKSAhZGVmYXVsdDtcblxuJHByZWxvYWRlci1jb2xvcjogICAgICAgICAgI0Q4RDFDOSAhZGVmYXVsdDtcblxuJGZpbHRlci1ibHVlOiAgICAgICAgIGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMTAlKTtcbiRmaWx0ZXItYXp1cmU6ICAgICAgICBkYXJrZW4oJGluZm8tY29sb3IsIDEwJSk7XG4kZmlsdGVyLWdyZWVuOiAgICAgICAgZGFya2VuKCRzdWNjZXNzLWNvbG9yLCAxMCUpO1xuJGZpbHRlci1vcmFuZ2U6ICAgICAgIGRhcmtlbigkd2FybmluZy1jb2xvciwgMTAlKTtcbiRmaWx0ZXItcmVkOiAgICAgICAgICBkYXJrZW4oJGRhbmdlci1jb2xvciwgMTAlKTtcblxuXG4kdG9wYmFyLXg6ICAgICAgICAgICAgIHRvcGJhci14ICFkZWZhdWx0O1xuJHRvcGJhci1iYWNrOiAgICAgICAgICB0b3BiYXItYmFjayAhZGVmYXVsdDtcbiRib3R0b21iYXIteDogICAgICAgICAgYm90dG9tYmFyLXggIWRlZmF1bHQ7XG4kYm90dG9tYmFyLWJhY2s6ICAgICAgIGJvdHRvbWJhci1iYWNrICFkZWZhdWx0O1xuXG4kc29jaWFsLWZhY2Vib29rOiBcdFx0XHQjM2I1OTk4O1xuJHNvY2lhbC10d2l0dGVyOiBcdFx0XHQjNTVhY2VlO1xuJHNvY2lhbC1waW50ZXJlc3Q6IFx0XHRcdCNjYzIxMjc7XG4kc29jaWFsLWdvb2dsZTogXHRcdFx0I2RkNGIzOTtcbiRzb2NpYWwtbGlua2VkaW46IFx0XHRcdCMwOTc2YjQ7XG4kc29jaWFsLWRyaWJiYmxlOiBcdFx0XHQjZWE0Yzg5O1xuJHNvY2lhbC1naXRodWI6IFx0XHRcdCMzMzMzMzM7XG4kc29jaWFsLXlvdXR1YmU6IFx0XHRcdCNlNTJkMjc7XG4kc29jaWFsLWluc3RhZ3JhbTogXHRcdCAgICAjMTI1Njg4O1xuJHNvY2lhbC1yZWRkaXQ6IFx0XHRcdCNmZjQ1MDA7XG4kc29jaWFsLXR1bWJscjogXHRcdFx0IzM1NDY1YztcblxuJGJhY2tncm91bmQtbGlnaHQtZ3JleTogICAgICNFOEU3RTMgIWRlZmF1bHQ7XG4kYmFja2dyb3VuZC1saWdodGVyLWdyZXk6ICAgI0YwRUZFQiAhZGVmYXVsdDtcbiRmb250LWJhY2tncm91bmQtbGlnaHQtZ3JleTogIzlDOUI5OSAhZGVmYXVsdDtcbiRmb250LWhvdmVyLWJhY2tncm91bmQtbGlnaHQtZ3JleTogIzVFNUU1QyAhZGVmYXVsdDtcblxuLy8gdmFyaWFibGVzIHVzZWQgaW4gaGVhZGVyc1xuJGhlYWRlci1iYWNrZ3JvdW5kOiAgICAgICAgICNCMkFGQUIgIWRlZmF1bHQ7XG5cbiRmaWx0ZXItcHJpbWFyeTogICAgICAgICBkYXJrZW4oJHByaW1hcnktY29sb3IsIDEwJSk7XG4kZmlsdGVyLWluZm86ICAgICAgICBkYXJrZW4oJGluZm8tY29sb3IsIDEwJSk7XG4kZmlsdGVyLXN1Y2Nlc3M6ICAgICAgICBkYXJrZW4oJHN1Y2Nlc3MtY29sb3IsIDEwJSk7XG4kZmlsdGVyLXdhcm5pbmc6ICAgICAgIGRhcmtlbigkd2FybmluZy1jb2xvciwgMTAlKTtcbiRmaWx0ZXItZGFuZ2VyOiAgICAgICAgICBkYXJrZW4oJGRhbmdlci1jb2xvciwgMTAlKTtcblxuLy8gdmFyaWFibGUgdXNlZCBpbiBmb290ZXJzXG4kYmxhY2stZm9vdGVyLWJnOiAgICAgICAgICAgICMyNTI0MjIgIWRlZmF1bHQ7XG4kYnJvd24tZm9udC1jb2xvcjogICAgICAgICAgICNBNDlFOUUgIWRlZmF1bHQ7XG4kYnJvd24tZm9udC1jb2xvci1ob3ZlcjogICAgICNGMUVBRTAgIWRlZmF1bHQ7XG5cbi8vdmFyaWFibGVzIHVzZWQgaW4gY2FyZHNcbiRjYXJkLWJsYWNrLWNvbG9yOiAgICAgICAgICAgIzMzMzMzMyAhZGVmYXVsdDtcbiRjYXJkLW11dGVkLWNvbG9yOiAgICAgICAgICAgI2NjYyAhZGVmYXVsdDtcblxuJGNhcmQtYmFja2dyb3VuZC1ibHVlOiAgICAgICNiOGQ4ZDggIWRlZmF1bHQ7XG4kY2FyZC1mb250LWJsdWU6ICAgICAgICAgICAgIzUwNjU2OCAhZGVmYXVsdDtcbiRjYXJkLXN1YnRpdGxlLWJsdWU6ICAgICAgICAjN2E5ZTlmICFkZWZhdWx0O1xuXG4kY2FyZC1iYWNrZ3JvdW5kLWdyZWVuOiAgICAgICNkNWU1YTMgIWRlZmF1bHQ7XG4kY2FyZC1mb250LWdyZWVuOiAgICAgICAgICAgICM2MDc3M2QgIWRlZmF1bHQ7XG4kY2FyZC1zdWJ0aXRsZS1ncmVlbjogICAgICAgICM5MmFjNTYgIWRlZmF1bHQ7XG5cbiRjYXJkLWJhY2tncm91bmQteWVsbG93OiAgICAgICNmZmUyOGMgIWRlZmF1bHQ7XG4kY2FyZC1mb250LXllbGxvdzogICAgICAgICAgICAjYjI1ODI1ICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUteWVsbG93OiAgICAgICAgI2Q4ODcxNSAhZGVmYXVsdDtcblxuJGNhcmQtYmFja2dyb3VuZC1icm93bjogICAgICAjZDZjMWFiICFkZWZhdWx0O1xuJGNhcmQtZm9udC1icm93bjogICAgICAgICAgICAjNzU0NDJlICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUtYnJvd246ICAgICAgICAjYTQ3ZTY1ICFkZWZhdWx0O1xuXG4kY2FyZC1iYWNrZ3JvdW5kLXB1cnBsZTogICAgICAjYmFhOWJhICFkZWZhdWx0O1xuJGNhcmQtZm9udC1wdXJwbGU6ICAgICAgICAgICAgIzNhMjgzZCAhZGVmYXVsdDtcbiRjYXJkLXN1YnRpdGxlLXB1cnBsZTogICAgICAgICM1YTI4M2QgIWRlZmF1bHQ7XG5cbiRjYXJkLWJhY2tncm91bmQtb3JhbmdlOiAgICAgICNmZjhmNWUgIWRlZmF1bHQ7XG4kY2FyZC1mb250LW9yYW5nZTogICAgICAgICAgICAjNzcyNTEwICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUtb3JhbmdlOiAgICAgICAgI2U5NWUzNyAhZGVmYXVsdDtcblxuJGNhcmQtYmFja2dyb3VuZC1wcmltYXJ5OiAgICAgIzQyN0M4OSAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1jb2xvcjogICAgICAgICAgICM0MjdDODkgIWRlZmF1bHQ7XG5cbiRjb2xvci1yZWQtZXJyb3I6IHJnYigxODUsIDc0LCA3MikgIWRlZmF1bHQ7XG4kY29sb3ItZ3JleS1hcnJvdzogcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjIpICFkZWZhdWx0O1xuXG4kd2lkdGgtZGVmYXVsdDogMjIwcHggIWRlZmF1bHQ7IC8vIDMgOTYwcHgtZ3JpZCBjb2x1bW5zXG5cbiR6aW5kZXgtc2VsZWN0LWRyb3Bkb3duOiAxMDYwICFkZWZhdWx0OyAvLyBtdXN0IGJlIGhpZ2hlciB0aGFuIGEgbW9kYWwgYmFja2dyb3VuZCAoMTA1MClcblxuLy8qKiBQbGFjZWhvbGRlciB0ZXh0IGNvbG9yXG4kaW5wdXQtY29sb3ItcGxhY2Vob2xkZXI6ICM5OTkgIWRlZmF1bHQ7XG5cblxuLy8gbWVkaWEgaGVhZGVyIFxuJG1lZGlhLWhlYWRlci1oZWlnaHQ6IDEwMHB4OyIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9wYXBlci1raXQvdmFyaWFibGVzXCI7XG5cbiNjb250YWN0LWFyZWEge1xuICAgIHBhZGRpbmc6IDYwcHggMCAwO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMyZTM4M2E7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG59XG4jY29udGFjdC1hcmVhIC5zZWN0aW9uLWhlYWRpbmcgaDYge1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbiNjb250YWN0LWFyZWEgLnNlY3Rpb24taGVhZGluZyB7XG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XG59XG4uY29udGFjdC1mb3JtIHtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHggNDBweDtcbn1cblxuLmNvbnRhY3QtZm9ybSBoNSB7XG4gICAgY29sb3I6ICNjNmM2YzY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY29udGFjdC1mb3JtIGg0IHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XG4gICAgLy8gbWFyZ2luOiAwIDAgNTBweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59XG5cbi8vIC5jb250YWN0LWZvcm0gaW5wdXQsXG4vLyAuY29udGFjdC1mb3JtIHNlbGVjdCxcbi8vIC5jb250YWN0LWZvcm0gaW5wdXQ6Zm9jdXMsXG4vLyAuY29udGFjdC1mb3JtIHNlbGVjdDpmb2N1cyB7XG4vLyAgICAgaGVpZ2h0OiA1NXB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgIzQ3NTE1Mztcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbi8vICAgICBjb2xvcjogI2FlYjNiNDtcbi8vIH1cblxuLy8gLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSxcbi8vIC5jb250YWN0LWZvcm0gdGV4dGFyZWE6Zm9jdXMge1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NzUxNTM7XG4vLyAgICAgaGVpZ2h0OiA5NXB4O1xuLy8gfVxuXG4uY29udGFjdC1idG4gYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1jb2xvcjtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMTVweCA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbjogMTVweCAwIDA7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmNvbnRhY3QtaW5mby1zaW5nbGUgaDQge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcbn1cblxuLmNvbnRhY3QtaW5mby1zaW5nbGUgcCB7XG4gICAgY29sb3I6ICM2MzYzNjM7XG59XG5cbi5jb250YWN0LWluZm8gLmJvcmRlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ4NTI1NCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ODUyNTQ7XG59XG5cbi5jb250YWN0LWluZm8ge1xuICAgIHBhZGRpbmc6IDAgMCA3MHB4O1xufVxuXG4uY29tcGFueS1pbmZvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyZTMwO1xufVxuLmNvbnRhY3QtaW5mby1zZXBhcmF0b3Ige1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDg1MjU0O1xuICAgIG1heC13aWR0aDogNzAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiAyNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDk5MXB4KSB7XG5cbiAgICAuY29udGFjdC1mb3JtIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XG4gICAgfVxufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/validators */ "./src/app/validators/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent(fb, custonValidator) {
        this.fb = fb;
        this.custonValidator = custonValidator;
        this.status_form = {
            loading: false,
            done: false
        };
    }
    ContactComponent.prototype.initFormControls = function () {
        this.form = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.custonValidator.emailFormat]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.custonValidator.nameFormat]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.custonValidator.phoneFormat]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    ContactComponent.prototype.getLabel = function () {
        var label = 'Enviar';
        if (this.status_form.loading) {
            label = 'Enviando';
        }
        if (this.status_form.done) {
            label = 'Enviado';
        }
        return label;
    };
    ContactComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.valid) {
            this.status_form.loading = true;
            this.form.disable();
            setTimeout(function () {
                _this.status_form.done = true;
                _this.status_form.loading = false;
            }, 2000);
        }
    };
    ContactComponent.prototype.ngOnInit = function () {
        this.initFormControls();
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], app_validators__WEBPACK_IMPORTED_MODULE_2__["FormBuilderValidators"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/content-view/content-view.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/content-view/content-view.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-center\" style=\"margin-bottom: 60px\">\n    <div class=\"col-10\" *ngIf=\"content\">\n      <h1 class=\"title\">{{content.title}}</h1>\n\n      <p class=\"text-left date_published\">\n        <i class=\"fa fa-calendar-plus-o\" aria-hidden=\"true\"></i>\n        {{content.created_at | date: 'dd/MM/yyyy'}} |\n        <i class=\"fa fa-tag text-right\" aria-hidden=\"true\"></i>\n        <span>{{content.category.name}}</span>\n      </p>\n\n      <br>\n\n      <div class=\"text\" [innerHtml]=\"safeContent(content.text)\"></div>\n\n      <br>\n\n      <p class=\"date_published\">\n        Texto publicado originalmente em: \n        <a href=\"{{content.url}}\" target=\"_blank\">{{content.url}}</a>\n      </p>\n\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/content-view/content-view.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/content-view/content-view.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-weight: 700; }\n\n.text {\n  font-size: 18px !important;\n  line-height: 30px !important;\n  text-align: justify; }\n\n.text img {\n    width: 100% !important; }\n\n.text > div {\n    width: 100% !important;\n    padding: 0 !important; }\n\n.text p {\n    width: 100% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZmxhdmlvLXNpcXVlaXJhL3NyYy9hcHAvY29tcG9uZW50cy9jb250ZW50LXZpZXcvY29udGVudC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksMkJBQXlCO0VBQ3pCLDZCQUEyQjtFQUMzQixvQkFBbUIsRUFjdEI7O0FBakJEO0lBTVEsdUJBQXFCLEVBQ3hCOztBQVBMO0lBVVEsdUJBQXFCO0lBQ3JCLHNCQUFvQixFQUN2Qjs7QUFaTDtJQWVRLHVCQUFxQixFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGVudC12aWV3L2NvbnRlbnQtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnRleHQge1xuICAgIGZvbnQtc2l6ZTogMThweCFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHghaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG5cbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgJiA+IGRpdiB7XG4gICAgICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIHAge1xuICAgICAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/content-view/content-view.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/content-view/content-view.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContentViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentViewComponent", function() { return ContentViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentViewComponent = /** @class */ (function () {
    function ContentViewComponent(meta, title, sanitized) {
        this.meta = meta;
        this.title = title;
        this.sanitized = sanitized;
    }
    ContentViewComponent.prototype.getUrlText = function (url) {
        return url.substring(1, 40) + "...";
    };
    ContentViewComponent.prototype.safeContent = function (text) {
        return this.sanitized.bypassSecurityTrustHtml(text);
    };
    ContentViewComponent.prototype.ngOnInit = function () {
        if (this.content) {
            // this.meta.updateTag({ name: 'og:image', content: 'http://via.placeholder.com/211x50' });
            this.meta.updateTag({ property: 'og:title', content: "Property Solutions | " + this.content.title });
            this.title.setTitle("Property Solutions | " + this.content.title);
        }
    };
    ContentViewComponent.prototype.ngOnDestroy = function () {
        this.meta.updateTag({ property: 'og:title', content: 'Property Solutions' });
        this.title.setTitle('Property Solutions');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContentViewComponent.prototype, "content", void 0);
    ContentViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-view',
            template: __webpack_require__(/*! ./content-view.component.html */ "./src/app/components/content-view/content-view.component.html"),
            styles: [__webpack_require__(/*! ./content-view.component.scss */ "./src/app/components/content-view/content-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], ContentViewComponent);
    return ContentViewComponent;
}());



/***/ }),

/***/ "./src/app/components/content/content.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/content/content.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"type.value !== 'videos'\" class=\"card new\" [routerLink]=\"['/midia', type.min, content.id, content.title]\">\n  <!-- <img class=\"card-img-top img-fluid\" src=\"//placehold.it/800x560\" alt=\"Card image cap\"> -->\n  <div class=\"card-body\">\n      <span class=\"badge badge-pill badge-danger\" style=\"color: #FFFFFF!important; font-weight: bold!important\">\n        <i class=\"fa fa-tag text-white\" style=\"color: #FFFFFF!important; font-weight: bold!important\"></i>\n        {{content.category.name}}\n      </span>\n\n    <h4 class=\"card-title\">{{content.title}}</h4>\n    <p class=\"card-text\" [innerHtml]=\"createText(content.text)\"></p>\n    <!-- <blockquote class=\"card-blockquote\">\n      <footer>\n        <a>\n          <small class=\"text-muted\">\n            Originalmente publicado em <cite title=\"Source Title\">{{content.url}}</cite>\n          </small>\n        </a>\n      </footer>\n    </blockquote> -->\n  </div>\n</div>\n\n<div *ngIf=\"type.value === 'videos'\" (click)=\"select()\">\n  <!-- <img class=\"card-img-top img-fluid\" src=\"//placehold.it/800x560\" alt=\"Card image cap\"> -->\n  <div class=\"video\">\n    <img src=\"{{content.thumbnail}}\" class=\"img-fluid\" alt=\"\">\n    <div class=\"cover\">\n      {{content.title}}\n    </div>\n    <!-- <h4 class=\"card-title\">{{content.title | titlecase}}</h4>\n    <p class=\"card-text\">{{createText(content.text) | titlecase}}</p>\n    <blockquote class=\"card-blockquote\">\n      <footer>\n        <a>\n          <small class=\"text-muted\">\n            Originalmente publicado em <cite title=\"Source Title\">{{content.url}}</cite>\n          </small>\n        </a>\n      </footer>\n    </blockquote> -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/content/content.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/content/content.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*      light colors - used for select dropdown         */\n.new {\n  background: #FFFFFF; }\n.new:hover {\n    background: #f9f9f9;\n    cursor: pointer; }\n.new:hover .card-title {\n      color: #9F7425 !important; }\n.new p, .new h1, .new h4 {\n    padding: 5px 0px;\n    max-width: 100%; }\n.new .card-title {\n    font-weight: 900 !important;\n    margin: 0 !important; }\n.new .text-muted {\n    text-transform: lowercase !important; }\n.new h4 {\n    font-weight: 600;\n    display: inline-block; }\n.video {\n  position: relative;\n  cursor: pointer; }\n.video:hover .cover {\n    opacity: 1;\n    transition: .3s all; }\n.video .cover {\n    transition: .3s all;\n    opacity: 0;\n    background: rgba(0, 0, 0, 0.9);\n    color: #FFFFFF;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 20px;\n    font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZmxhdmlvLXNpcXVlaXJhL3NyYy9hc3NldHMvc2Fzcy9wYXBlci1raXQvX3ZhcmlhYmxlcy5zY3NzIiwiL3Zhci93d3cvaHRtbC9mbGF2aW8tc2lxdWVpcmEvc3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RUEsMERBQTBEO0FDckUxRDtFQUNJLG9CQUFtQixFQW9DdEI7QUFyQ0Q7SUFJUSxvQkFBbUI7SUFDbkIsZ0JBQWUsRUFNbEI7QUFYTDtNQVFZLDBCQUE0QixFQUUvQjtBQVZUO0lBY1EsaUJBQWdCO0lBQ2hCLGdCQUFlLEVBQ2xCO0FBaEJMO0lBdUJRLDRCQUEwQjtJQUMxQixxQkFBbUIsRUFFdEI7QUExQkw7SUE2QlEscUNBQW1DLEVBQ3RDO0FBOUJMO0lBaUNRLGlCQUFnQjtJQUNoQixzQkFBcUIsRUFFeEI7QUFHTDtFQUNJLG1CQUFrQjtFQUNsQixnQkFBZSxFQXNCbEI7QUF4QkQ7SUFLUSxXQUFVO0lBQ1Ysb0JBQW1CLEVBQ3RCO0FBUEw7SUFVUSxvQkFBbUI7SUFDbkIsV0FBVTtJQUNWLCtCQUE2QjtJQUM3QixlQUFjO0lBQ2QsbUJBQWtCO0lBQ2xCLE9BQU07SUFDTixZQUFXO0lBQ1gsYUFBWTtJQUNaLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsd0JBQXVCO0lBQ3ZCLGNBQWE7SUFDYixrQkFBaUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmb250LWNvbG9yOiAgICAgICAgICAgICAgICAgIzY2NjE1YiAhZGVmYXVsdDtcbiRmaWxsLWZvbnQtY29sb3I6ICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgICAnTW9udHNlcnJhdCcsIFwiSGVsdmV0aWNhXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kbm9uZTogICAgICAgICAgICAgICAgICAgICAgIDAgICAhZGVmYXVsdDtcbiRib3JkZXItdGhpbjogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuJGJvcmRlci10aGljazogICAgICAgICAgICAgICAycHggIWRlZmF1bHQ7XG5cbiR3aGl0ZS1jb2xvcjogICAgICAgICAgICAgICAgI0ZGRkZGRiAhZGVmYXVsdDtcbiR3aGl0ZS1iZzogICAgICAgICAgICAgICAgICAgI0ZGRkZGRiAhZGVmYXVsdDtcbiR3aGl0ZS1zdGF0ZXMtY29sb3I6ICAgICAgICAgcmdiYSgkd2hpdGUtY29sb3IsIDAuOCk7XG5cbiRzbW9rZS1iZzogICAgICAgICAgICAgICAgICAgI0Y1RjVGNSAhZGVmYXVsdDtcbiRwYWxlLWJnOiAgICAgICAgICAgICAgICAgICAgI0ZGRkNGNSAhZGVmYXVsdDtcbiRtZWRpdW0tcGFsZS1iZzogICAgICAgICAgICAgI0YxRUFFMCAhZGVmYXVsdDtcblxuJHRhYmxlLWxpbmUtY29sb3I6ICAgICAgICAgICAjY2NjICFkZWZhdWx0O1xuJG11dGVkLWNvbG9yOiAgICAgICAgICAgICAgICAjYTQ5ZTkzICFkZWZhdWx0O1xuXG4kYmxhY2stYmc6ICAgICAgICAgICAgICAgICAgIHJnYmEoMzAsMzAsMzAsLjk3KSAhZGVmYXVsdDtcblxuJGJsYWNrLWNvbG9yOiAgICAgICAgICAgICAgICAjMzMzMzMzICFkZWZhdWx0O1xuJGJsYWNrLWhyOiAgICAgICAgICAgICAgICAgICAjNDQ0NDQ0ICFkZWZhdWx0O1xuXG4kbGlnaHQtZ3JheTogICAgICAgICAgICAgICAgICNFM0UzRTMgIWRlZmF1bHQ7XG4kbWVkaXVtLWdyYXk6ICAgICAgICAgICAgICAgICNEREREREQgIWRlZmF1bHQ7XG4kZGFyay1ncmF5OiAgICAgICAgICAgICAgICAgICM5QTlBOUEgIWRlZmF1bHQ7XG5cbiRwbGFjZWhvbGRlci1ncmF5OiAgICAgICAgICAgcmdiYSgyMTAsIDIxMCwgMjEwLCAxKSAgIWRlZmF1bHQ7XG5cbiRncmF5LWlucHV0LWJnOiAgICAgICAgICAgICAgI2ZmZmNmNSAhZGVmYXVsdDtcbiRkYW5nZXItaW5wdXQtYmc6ICAgICAgICAgICAgI0ZGQzBBNCAhZGVmYXVsdDtcbiRzdWNjZXNzLWlucHV0LWJnOiAgICAgICAgICAgI0FCRjNDQiAhZGVmYXVsdDtcbiRvdGhlci1tZWRpdW0tZ3JheTogICAgICAgICAgI0E0OUU5MyAhZGVmYXVsdDtcbiR0cmFuc3BhcmVudC1iZzogICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRkZWZhdWx0LWNvbG9yOiAgICAgICAgICAgICAgIzY2NjE1QiAhZGVmYXVsdDtcbiRkZWZhdWx0LWJnOiAgICAgICAgICAgICAgICAgIzY2NjE1QiAhZGVmYXVsdDtcbiRkZWZhdWx0LXN0YXRlcy1jb2xvcjogICAgICAgIzQwM0QzOSAhZGVmYXVsdDtcblxuJHByaW1hcnktY29sb3I6ICAgICAgICAgICAgICAjNTFjYmNlICFkZWZhdWx0O1xuJHByaW1hcnktc3RhdGVzLWNvbG9yOiAgICAgICBkYXJrZW4oJHByaW1hcnktY29sb3IsIDEwJSkgIWRlZmF1bHQ7XG5cbiRzdWNjZXNzLWNvbG9yOiAgICAgICAgICAgICAgIzZiZDA5OCAhZGVmYXVsdDtcbiRzdWNjZXNzLXN0YXRlcy1jb2xvcjogICAgICAgZGFya2VuKCRzdWNjZXNzLWNvbG9yLCAxMCUpICFkZWZhdWx0O1xuXG4kaW5mby1jb2xvcjogICAgICAgICAgICAgICAgICM1MWJjZGEgIWRlZmF1bHQ7XG4kaW5mby1zdGF0ZXMtY29sb3I6ICAgICAgICAgIGRhcmtlbigkaW5mby1jb2xvciwgMTAlKSAhZGVmYXVsdDtcblxuJHdhcm5pbmctY29sb3I6ICAgICAgICAgICAgICAjZmJjNjU4ICFkZWZhdWx0O1xuJHdhcm5pbmctc3RhdGVzLWNvbG9yOiAgICAgICBkYXJrZW4oJHdhcm5pbmctY29sb3IsIDEwJSkgIWRlZmF1bHQ7XG5cbiRkYW5nZXItY29sb3I6ICAgICAgICAgICAgICAgI2Y1NTkzZCAhZGVmYXVsdDtcbiRkYW5nZXItc3RhdGVzLWNvbG9yOiAgICAgICAgZGFya2VuKCRkYW5nZXItY29sb3IsIDglKSAhZGVmYXVsdDtcblxuJGxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICAjNjY2NjY2ICFkZWZhdWx0O1xuXG4kcHVycGxlLWNvbG9yOiAgICAgICAgICAgICAgICNjMTc4YzEgIWRlZmF1bHQ7XG4kcHVycGxlLXN0YXRlcy1jb2xvcjogICAgICAgIGRhcmtlbigkcHVycGxlLWNvbG9yLCA4JSkgIWRlZmF1bHQ7XG5cbiRicm93bi1jb2xvcjogICAgICAgICAgICAgICAgI2RjYjI4NSAhZGVmYXVsdDtcbiRicm93bi1zdGF0ZXMtY29sb3I6ICAgICAgICAgZGFya2VuKCRicm93bi1jb2xvciwgOCUpICFkZWZhdWx0O1xuXG5cbi8vIEJSQU5EIFZBUklBQkxFU1xuJG1haW4tY29sb3I6ICAgICAgICAgICAgICAgICAjOUY3NDI1ICFkZWZhdWx0O1xuJHNlY29uZC1jb2xvcjogICAgICAgICAgICAgICAjRUJENTgyICFkZWZhdWx0O1xuJGJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICAjMDAwMDAwICFkZWZhdWx0O1xuXG5cblxuLyogICAgICBsaWdodCBjb2xvcnMgLSB1c2VkIGZvciBzZWxlY3QgZHJvcGRvd24gICAgICAgICAqL1xuXG4kbGlnaHQtYmx1ZTogICAgICAgICAgICAgICAgIHJnYmEoJHByaW1hcnktY29sb3IsIC4yKTtcbiRsaWdodC1henVyZTogICAgICAgICAgICAgICAgcmdiYSgkaW5mby1jb2xvciwgLjIpO1xuJGxpZ2h0LWdyZWVuOiAgICAgICAgICAgICAgICByZ2JhKCRzdWNjZXNzLWNvbG9yLCAuMik7XG4kbGlnaHQtb3JhbmdlOiAgICAgICAgICAgICAgIHJnYmEoJHdhcm5pbmctY29sb3IsIC4yKTtcbiRsaWdodC1yZWQ6ICAgICAgICAgICAgICAgICAgcmdiYSgkZGFuZ2VyLWNvbG9yLCAuMik7XG5cblxuLy89PSBDb21wb25lbnRzXG4vL1xuJHBhZGRpbmctYmFzZS12ZXJ0aWNhbDogICAgICAgICA3cHggIWRlZmF1bHQ7XG4kcGFkZGluZy1iYXNlLWhvcml6b250YWw6ICAgICAgIDE4cHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLXJvdW5kLXZlcnRpY2FsOiAgICAgICAgOXB4ICFkZWZhdWx0O1xuJHBhZGRpbmctcm91bmQtaG9yaXpvbnRhbDogICAgIDE4cHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLXNpbXBsZS12ZXJ0aWNhbDogICAgICAxMHB4ICFkZWZhdWx0O1xuJHBhZGRpbmctc2ltcGxlLWhvcml6b250YWw6ICAgIDE4cHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLWxhcmdlLXZlcnRpY2FsOiAgICAgICAxMXB4ICFkZWZhdWx0O1xuJHBhZGRpbmctbGFyZ2UtaG9yaXpvbnRhbDogICAgIDMwcHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLXNtYWxsLXZlcnRpY2FsOiAgICAgICAgNHB4ICFkZWZhdWx0O1xuJHBhZGRpbmctc21hbGwtaG9yaXpvbnRhbDogICAgIDEwcHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLXhzLXZlcnRpY2FsOiAgICAgICAgICAgMnB4ICFkZWZhdWx0O1xuJHBhZGRpbmcteHMtaG9yaXpvbnRhbDogICAgICAgICA1cHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLWxhYmVsLXZlcnRpY2FsOiAgICAgICAgMnB4ICFkZWZhdWx0O1xuJHBhZGRpbmctbGFiZWwtaG9yaXpvbnRhbDogICAgIDEycHggIWRlZmF1bHQ7XG5cbi8vIHBhZGRpbmcgZm9yIGxpbmtzIGluc2lkZSBkcm9wZG93biBtZW51XG4kcGFkZGluZy1kcm9wZG93bi12ZXJ0aWNhbDogICAgIDEwcHggIWRlZmF1bHQ7XG4kcGFkZGluZy1kcm9wZG93bi1ob3Jpem9udGFsOiAgIDE1cHggIWRlZmF1bHQ7XG5cbiRtYXJnaW4tbGFyZ2UtdmVydGljYWw6ICAgICAgICAzMHB4ICFkZWZhdWx0O1xuJG1hcmdpbi1iYXNlLXZlcnRpY2FsOiAgICAgICAgIDE1cHggIWRlZmF1bHQ7XG5cbi8vIGJvcmRlciByYWRpdXMgZm9yIGJ1dHRvbnNcbiRib3JkZXItcmFkaXVzLW5vbmU6ICAgICAgICAgICAgIDBweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWJ0bi1zbWFsbDogICAgICAyNnB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtYnRuLWJhc2U6ICAgICAgIDIwcHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1idG4tbGFyZ2U6ICAgICAgNTBweCAhZGVmYXVsdDtcblxuXG4kbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAgMCAwIDEwcHggMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtYWxsOiAgICAgICAgICAgM3B4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtYmFzZTogICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sYXJnZTogICAgICAgICAgIDZweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXgtbGFyZ2U6ICAgICAgICAgOHB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtZXh0cmVtZTogICAgICAgICAxMnB4ICFkZWZhdWx0O1xuXG4kYm9yZGVyLXJhZGl1cy1ub25lLXRvcDogICAgICAkYm9yZGVyLXJhZGl1cy1ub25lICRib3JkZXItcmFkaXVzLW5vbmUgMCAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbm9uZS1ib3R0b206ICAgMCAwICRib3JkZXItcmFkaXVzLW5vbmUgJGJvcmRlci1yYWRpdXMtbm9uZSAhZGVmYXVsdDtcblxuJGJvcmRlci1yYWRpdXMtc21hbGwtdG9wOiAgICAgICRib3JkZXItcmFkaXVzLXNtYWxsICRib3JkZXItcmFkaXVzLXNtYWxsIDAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtYWxsLWJvdHRvbTogICAwIDAgJGJvcmRlci1yYWRpdXMtc21hbGwgJGJvcmRlci1yYWRpdXMtc21hbGwgIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzLWxhcmdlLXRvcDogICAgICAkYm9yZGVyLXJhZGl1cy1sYXJnZSAkYm9yZGVyLXJhZGl1cy1sYXJnZSAwIDAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sYXJnZS1ib3R0b206ICAgMCAwICRib3JkZXItcmFkaXVzLWxhcmdlICRib3JkZXItcmFkaXVzLWxhcmdlICFkZWZhdWx0O1xuXG4kYnRuLXJvdW5kLXJhZGl1czogICAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcblxuJGhlaWdodC1iYXNlOiAgICAgICAgICAgICAgICAgIDQwcHggIWRlZmF1bHQ7XG5cbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgICAxNHB4ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1zbWFsbDogICAgICAgICAgICAgIDEycHggIWRlZmF1bHQ7XG4kZm9udC1zaXplLW1lZGl1bTogICAgICAgICAgICAgMTZweCAhZGVmYXVsdDtcbiRmb250LXNpemUtbGFyZ2U6ICAgICAgICAgICAgICAyMHB4ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1sYXJnZS1uYXZiYXI6ICAgICAgIDIycHggIWRlZmF1bHQ7XG5cbiRmb250LXNpemUtaDE6ICAgICAgICAgICAgICAgICAzLjZlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtaDI6ICAgICAgICAgICAgICAgICAyLjhlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtaDM6ICAgICAgICAgICAgICAgICAxLjgyNWVtICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1oNDogICAgICAgICAgICAgICAgIDEuNmVtICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1oNTogICAgICAgICAgICAgICAgIDEuMzVlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtaDY6ICAgICAgICAgICAgICAgICAwLjllbSAhZGVmYXVsdDtcbiRmb250LXBhcmFncmFwaDogICAgICAgICAgICAgICAxNXB4ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1uYXZiYXI6ICAgICAgICAgICAgIDE0cHggIWRlZmF1bHQ7XG5cbiRmb250LXNpemUtaW5mby1ob3Jpem9udGFsOiAgICAyLjVlbSAhZGVmYXVsdDtcblxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiAgICAgICAgIDQwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1zZW1pOiAgICAgICAgICAgNTAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWJvbGQ6ICAgICAgICAgICA2MDAgIWRlZmF1bHQ7XG5cbiRsaW5lLWhlaWdodC1zbWFsbDogICAgICAgICAgICAyMHB4ICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0LWdlbmVyYWw6ICAgICAgICAgIDEuNWVtICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAgICAgMzZweCAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1sZzogICAgICAgICAgICAgIDU0cHggIWRlZmF1bHQ7XG5cblxuJGJvcmRlci1yYWRpdXMtdG9wOiAgICAgICAgMTBweCAxMHB4IDAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWJvdHRvbTogICAgIDAgMCAxMHB4IDEwcHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1kcm9wZG93bjogICAxMHB4IDEwcHggIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1zaGFkb3c6ICAgICAgICAgIDAgMnB4IHJnYmEoMTcsIDE2LCAxNSwgMC4xKSwgMCAycHggMTBweCByZ2JhKDE3LCAxNiwgMTUsIDAuMSk7XG5cbiRnZW5lcmFsLXRyYW5zaXRpb24tdGltZTogIDMwMG1zICFkZWZhdWx0O1xuXG4kc2xvdy10cmFuc2l0aW9uLXRpbWU6ICAgICAgICAgICAzMDBtcyAhZGVmYXVsdDtcbiRkcm9wZG93bi1jb29yZGluYXRlczogICAgICAyOXB4IC01MHB4ICFkZWZhdWx0O1xuXG4kZmFzdC10cmFuc2l0aW9uLXRpbWU6ICAgICAgICAgICAxNTBtcyAhZGVmYXVsdDtcbiRzZWxlY3QtY29vcmRpbmF0ZXM6ICAgICAgICAgNTAlIC00MHB4ICFkZWZhdWx0O1xuXG4kdHJhbnNpdGlvbi1saW5lYXI6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lYXIgIWRlZmF1bHQ7XG4kdHJhbnNpdGlvbi1iZXppZXI6ICAgICAgICAgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNjEsIDAuNywgMSkgIWRlZmF1bHQ7XG4kdHJhbnNpdGlvbi1lYXNlOiAgICAgICAgICAgZWFzZSAwcztcblxuJG5hdmJhci1wYWRkaW5nLWE6ICAgICAgICAgICAgICAgMTBweCAxNXB4O1xuJG5hdmJhci1tYXJnaW4tYTogICAgICAgICAgICAgICAgMTVweCAgMHB4O1xuXG4kcGFkZGluZy1zb2NpYWwtYTogICAgICAgICAgICAgICAxMHB4ICA1cHg7XG5cbiRuYXZiYXItbWFyZ2luLWEtYnRuOiAgICAgICAgICAgIDE1cHggM3B4O1xuJG5hdmJhci1tYXJnaW4tYS1idG4tcm91bmQ6ICAgICAgMTZweCAzcHg7XG5cbiRuYXZiYXItcGFkZGluZy1hLWljb25zOiAgICAgICAgIDZweCAxNXB4O1xuJG5hdmJhci1tYXJnaW4tYS1pY29uczogICAgICAgICAgNnB4ICAzcHg7XG5cbiRuYXZiYXItcGFkZGluZy1icmFuZDogICAgICAgICAgIDIwcHggMTVweDtcbiRuYXZiYXItbWFyZ2luLWJyYW5kOiAgICAgICAgICAgICA1cHggIDBweDtcblxuJG5hdmJhci1tYXJnaW4tYnJhbmQtaWNvbnM6ICAgICAgMTJweCBhdXRvO1xuXG4kbmF2YmFyLW1hcmdpbi1idG46ICAgICAgICAgICAgICAxNXB4ICAzcHg7XG5cbiRoZWlnaHQtaWNvbjpcdFx0XHRcdFx0IDY0cHggIWRlZmF1bHQ7XG4kd2lkdGgtaWNvbjpcdFx0XHRcdFx0IDY0cHggIWRlZmF1bHQ7XG4kcGFkZGluZy1pY29uOlx0XHRcdFx0XHQgMTJweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWljb246XHRcdCAgICAgMTVweCAhZGVmYXVsdDtcblxuJHNpemUtaWNvbjogXHRcdFx0XHRcdCA2NHB4O1xuJHNpemUtaWNvbi1zbTogXHRcdFx0XHRcdCAzMnB4O1xuXG5cbiRoZWlnaHQtaWNvbi1zbTpcdFx0XHRcdCAzMnB4O1xuJHdpZHRoLWljb24tc206XHRcdFx0XHRcdCAzMnB4O1xuJHBhZGRpbmctaWNvbi1zbTpcdFx0XHQgICAgIDRweDtcbiRib3JkZXItcmFkaXVzLWljb24tc206XHRcdFx0IDdweDtcblxuJGhlaWdodC1pY29uLW1lc3NhZ2U6XHRcdFx0IDQwcHg7XG4kd2lkdGgtaWNvbi1tZXNzYWdlOlx0XHRcdCA0MHB4O1xuXG4kaGVpZ2h0LWljb24tbWVzc2FnZS1zbTogXHRcdCAyMHB4O1xuJHdpZHRoLWljb24tbWVzc2FnZS1zbTpcdFx0XHQgMjBweDtcblxuXG5cbiR3aGl0ZS1uYXZiYXI6ICAgICAgICAgICAgICByZ2JhKCNGRkZGRkYsIC45Nik7XG4kYmx1ZS1uYXZiYXI6ICAgICAgICAgICAgICAgcmdiYSgjMzRBQ0RDLCAuOTgpO1xuJGF6dXJlLW5hdmJhcjogICAgICAgICAgICAgIHJnYmEoIzVCQ0FGRiwgLjk4KTtcbiRncmVlbi1uYXZiYXI6ICAgICAgICAgICAgICByZ2JhKCM0Q0Q5NjQsIC45OCk7XG4kb3JhbmdlLW5hdmJhcjogICAgICAgICAgICAgcmdiYSgjRkY5NTAwLCAuOTgpO1xuJHJlZC1uYXZiYXI6ICAgICAgICAgICAgICAgIHJnYmEoI0ZGNEM0MCwgLjk4KTtcblxuJGJnLW51ZGU6ICAgICAgICAgICAgICAgI0ZGRkNGNSAhZGVmYXVsdDtcbiRiZy1wcmltYXJ5OiAgICAgICAgICAgIGxpZ2h0ZW4oJHByaW1hcnktY29sb3IsIDclKSAhZGVmYXVsdDtcbiRiZy1pbmZvOiAgICAgICAgICAgICAgIGxpZ2h0ZW4oJGluZm8tY29sb3IsIDclKSAhZGVmYXVsdDtcbiRiZy1zdWNjZXNzOiAgICAgICAgICAgIGxpZ2h0ZW4oJHN1Y2Nlc3MtY29sb3IsIDclKSAhZGVmYXVsdDtcbiRiZy13YXJuaW5nOiAgICAgICAgICAgIGxpZ2h0ZW4oJHdhcm5pbmctY29sb3IsIDclKSAhZGVmYXVsdDtcbiRiZy1kYW5nZXI6ICAgICAgICAgICAgIGxpZ2h0ZW4oJGRhbmdlci1jb2xvciwgNyUpICFkZWZhdWx0O1xuJGJnLWJyb3duOiAgICAgICAgICAgICAgbGlnaHRlbigkYnJvd24tY29sb3IsIDclKSAhZGVmYXVsdDtcbiRiZy1wdXJwbGU6ICAgICAgICAgICAgIGxpZ2h0ZW4oJHB1cnBsZS1jb2xvciwgNyUpICFkZWZhdWx0O1xuXG4kcHJlbG9hZGVyLWNvbG9yOiAgICAgICAgICAjRDhEMUM5ICFkZWZhdWx0O1xuXG4kZmlsdGVyLWJsdWU6ICAgICAgICAgZGFya2VuKCRwcmltYXJ5LWNvbG9yLCAxMCUpO1xuJGZpbHRlci1henVyZTogICAgICAgIGRhcmtlbigkaW5mby1jb2xvciwgMTAlKTtcbiRmaWx0ZXItZ3JlZW46ICAgICAgICBkYXJrZW4oJHN1Y2Nlc3MtY29sb3IsIDEwJSk7XG4kZmlsdGVyLW9yYW5nZTogICAgICAgZGFya2VuKCR3YXJuaW5nLWNvbG9yLCAxMCUpO1xuJGZpbHRlci1yZWQ6ICAgICAgICAgIGRhcmtlbigkZGFuZ2VyLWNvbG9yLCAxMCUpO1xuXG5cbiR0b3BiYXIteDogICAgICAgICAgICAgdG9wYmFyLXggIWRlZmF1bHQ7XG4kdG9wYmFyLWJhY2s6ICAgICAgICAgIHRvcGJhci1iYWNrICFkZWZhdWx0O1xuJGJvdHRvbWJhci14OiAgICAgICAgICBib3R0b21iYXIteCAhZGVmYXVsdDtcbiRib3R0b21iYXItYmFjazogICAgICAgYm90dG9tYmFyLWJhY2sgIWRlZmF1bHQ7XG5cbiRzb2NpYWwtZmFjZWJvb2s6IFx0XHRcdCMzYjU5OTg7XG4kc29jaWFsLXR3aXR0ZXI6IFx0XHRcdCM1NWFjZWU7XG4kc29jaWFsLXBpbnRlcmVzdDogXHRcdFx0I2NjMjEyNztcbiRzb2NpYWwtZ29vZ2xlOiBcdFx0XHQjZGQ0YjM5O1xuJHNvY2lhbC1saW5rZWRpbjogXHRcdFx0IzA5NzZiNDtcbiRzb2NpYWwtZHJpYmJibGU6IFx0XHRcdCNlYTRjODk7XG4kc29jaWFsLWdpdGh1YjogXHRcdFx0IzMzMzMzMztcbiRzb2NpYWwteW91dHViZTogXHRcdFx0I2U1MmQyNztcbiRzb2NpYWwtaW5zdGFncmFtOiBcdFx0ICAgICMxMjU2ODg7XG4kc29jaWFsLXJlZGRpdDogXHRcdFx0I2ZmNDUwMDtcbiRzb2NpYWwtdHVtYmxyOiBcdFx0XHQjMzU0NjVjO1xuXG4kYmFja2dyb3VuZC1saWdodC1ncmV5OiAgICAgI0U4RTdFMyAhZGVmYXVsdDtcbiRiYWNrZ3JvdW5kLWxpZ2h0ZXItZ3JleTogICAjRjBFRkVCICFkZWZhdWx0O1xuJGZvbnQtYmFja2dyb3VuZC1saWdodC1ncmV5OiAjOUM5Qjk5ICFkZWZhdWx0O1xuJGZvbnQtaG92ZXItYmFja2dyb3VuZC1saWdodC1ncmV5OiAjNUU1RTVDICFkZWZhdWx0O1xuXG4vLyB2YXJpYWJsZXMgdXNlZCBpbiBoZWFkZXJzXG4kaGVhZGVyLWJhY2tncm91bmQ6ICAgICAgICAgI0IyQUZBQiAhZGVmYXVsdDtcblxuJGZpbHRlci1wcmltYXJ5OiAgICAgICAgIGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMTAlKTtcbiRmaWx0ZXItaW5mbzogICAgICAgIGRhcmtlbigkaW5mby1jb2xvciwgMTAlKTtcbiRmaWx0ZXItc3VjY2VzczogICAgICAgIGRhcmtlbigkc3VjY2Vzcy1jb2xvciwgMTAlKTtcbiRmaWx0ZXItd2FybmluZzogICAgICAgZGFya2VuKCR3YXJuaW5nLWNvbG9yLCAxMCUpO1xuJGZpbHRlci1kYW5nZXI6ICAgICAgICAgIGRhcmtlbigkZGFuZ2VyLWNvbG9yLCAxMCUpO1xuXG4vLyB2YXJpYWJsZSB1c2VkIGluIGZvb3RlcnNcbiRibGFjay1mb290ZXItYmc6ICAgICAgICAgICAgIzI1MjQyMiAhZGVmYXVsdDtcbiRicm93bi1mb250LWNvbG9yOiAgICAgICAgICAgI0E0OUU5RSAhZGVmYXVsdDtcbiRicm93bi1mb250LWNvbG9yLWhvdmVyOiAgICAgI0YxRUFFMCAhZGVmYXVsdDtcblxuLy92YXJpYWJsZXMgdXNlZCBpbiBjYXJkc1xuJGNhcmQtYmxhY2stY29sb3I6ICAgICAgICAgICAjMzMzMzMzICFkZWZhdWx0O1xuJGNhcmQtbXV0ZWQtY29sb3I6ICAgICAgICAgICAjY2NjICFkZWZhdWx0O1xuXG4kY2FyZC1iYWNrZ3JvdW5kLWJsdWU6ICAgICAgI2I4ZDhkOCAhZGVmYXVsdDtcbiRjYXJkLWZvbnQtYmx1ZTogICAgICAgICAgICAjNTA2NTY4ICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUtYmx1ZTogICAgICAgICM3YTllOWYgIWRlZmF1bHQ7XG5cbiRjYXJkLWJhY2tncm91bmQtZ3JlZW46ICAgICAgI2Q1ZTVhMyAhZGVmYXVsdDtcbiRjYXJkLWZvbnQtZ3JlZW46ICAgICAgICAgICAgIzYwNzczZCAhZGVmYXVsdDtcbiRjYXJkLXN1YnRpdGxlLWdyZWVuOiAgICAgICAgIzkyYWM1NiAhZGVmYXVsdDtcblxuJGNhcmQtYmFja2dyb3VuZC15ZWxsb3c6ICAgICAgI2ZmZTI4YyAhZGVmYXVsdDtcbiRjYXJkLWZvbnQteWVsbG93OiAgICAgICAgICAgICNiMjU4MjUgIWRlZmF1bHQ7XG4kY2FyZC1zdWJ0aXRsZS15ZWxsb3c6ICAgICAgICAjZDg4NzE1ICFkZWZhdWx0O1xuXG4kY2FyZC1iYWNrZ3JvdW5kLWJyb3duOiAgICAgICNkNmMxYWIgIWRlZmF1bHQ7XG4kY2FyZC1mb250LWJyb3duOiAgICAgICAgICAgICM3NTQ0MmUgIWRlZmF1bHQ7XG4kY2FyZC1zdWJ0aXRsZS1icm93bjogICAgICAgICNhNDdlNjUgIWRlZmF1bHQ7XG5cbiRjYXJkLWJhY2tncm91bmQtcHVycGxlOiAgICAgICNiYWE5YmEgIWRlZmF1bHQ7XG4kY2FyZC1mb250LXB1cnBsZTogICAgICAgICAgICAjM2EyODNkICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUtcHVycGxlOiAgICAgICAgIzVhMjgzZCAhZGVmYXVsdDtcblxuJGNhcmQtYmFja2dyb3VuZC1vcmFuZ2U6ICAgICAgI2ZmOGY1ZSAhZGVmYXVsdDtcbiRjYXJkLWZvbnQtb3JhbmdlOiAgICAgICAgICAgICM3NzI1MTAgIWRlZmF1bHQ7XG4kY2FyZC1zdWJ0aXRsZS1vcmFuZ2U6ICAgICAgICAjZTk1ZTM3ICFkZWZhdWx0O1xuXG4kY2FyZC1iYWNrZ3JvdW5kLXByaW1hcnk6ICAgICAjNDI3Qzg5ICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgIzQyN0M4OSAhZGVmYXVsdDtcblxuJGNvbG9yLXJlZC1lcnJvcjogcmdiKDE4NSwgNzQsIDcyKSAhZGVmYXVsdDtcbiRjb2xvci1ncmV5LWFycm93OiByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuMikgIWRlZmF1bHQ7XG5cbiR3aWR0aC1kZWZhdWx0OiAyMjBweCAhZGVmYXVsdDsgLy8gMyA5NjBweC1ncmlkIGNvbHVtbnNcblxuJHppbmRleC1zZWxlY3QtZHJvcGRvd246IDEwNjAgIWRlZmF1bHQ7IC8vIG11c3QgYmUgaGlnaGVyIHRoYW4gYSBtb2RhbCBiYWNrZ3JvdW5kICgxMDUwKVxuXG4vLyoqIFBsYWNlaG9sZGVyIHRleHQgY29sb3JcbiRpbnB1dC1jb2xvci1wbGFjZWhvbGRlcjogIzk5OSAhZGVmYXVsdDtcblxuXG4vLyBtZWRpYSBoZWFkZXIgXG4kbWVkaWEtaGVhZGVyLWhlaWdodDogMTAwcHg7IiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL3BhcGVyLWtpdC92YXJpYWJsZXNcIjtcblxuLm5ldyB7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgXG4gICAgICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiAkbWFpbi1jb2xvciFpbXBvcnRhbnQ7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHAsIGgxLCBoNCB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgLy8gdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG5cbiAgICAuY2FyZC10aXRsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDAhaW1wb3J0YW50O1xuICAgICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnRleHQtbXV0ZWQge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBoNCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgIH1cbn1cblxuLnZpZGVvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlciAuY292ZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2l0aW9uOiAuM3MgYWxsO1xuICAgIH1cbiAgICBcbiAgICAuY292ZXIge1xuICAgICAgICB0cmFuc2l0aW9uOiAuM3MgYWxsO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC45KTtcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/content/content.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/content/content.component.ts ***!
  \*********************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
        this.selectVideo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ContentComponent.prototype.createText = function (text) {
        var preview = text;
        if (preview.length > 100) {
            preview = preview.substr(0, 155) + '...';
        }
        return preview;
    };
    ContentComponent.prototype.select = function () {
        this.selectVideo.emit(this.content);
    };
    ContentComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContentComponent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContentComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ContentComponent.prototype, "selectVideo", void 0);
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/components/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/components/content/content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/components/display-data/display-data.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/display-data/display-data.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"content\">\n    <div class=\"row\" *ngIf=\"type.value !== 'videos'\">\n        <div class=\"col-12\">\n            <!-- [@listContent]=\"contents.length\" -->\n            <div class=\"card-columns\">\n                <app-content *ngFor=\"let content of contents\" (selectVideo)=\"select($event)\" [type]=\"type\" [content]=\"content\"></app-content>\n            </div>\n        </div>\n\n    </div>\n\n    <!-- [@listContent]=\"contents.length\" -->\n    <div class=\"row\" *ngIf=\"type.value === 'videos'\">\n        <div class=\"col-md-4 col-sm-6 col-xs-12\" *ngFor=\"let content of contents\" style=\"margin-bottom: 30px\">\n            <app-content (selectVideo)=\"select($event)\" [type]=\"type\" [content]=\"content\"></app-content>\n\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/display-data/display-data.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/display-data/display-data.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*      light colors - used for select dropdown         */\n#content {\n  background: #9e9e9e;\n  min-height: calc(100vh - 100px);\n  padding-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZmxhdmlvLXNpcXVlaXJhL3NyYy9hc3NldHMvc2Fzcy9wYXBlci1raXQvX3ZhcmlhYmxlcy5zY3NzIiwiL3Zhci93d3cvaHRtbC9mbGF2aW8tc2lxdWVpcmEvc3JjL2FwcC9jb21wb25lbnRzL2Rpc3BsYXktZGF0YS9kaXNwbGF5LWRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUVBLDBEQUEwRDtBQ3JFMUQ7RUFDSSxvQkFBbUI7RUFDbkIsZ0NBQWlEO0VBR2pELGtCQUFpQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlzcGxheS1kYXRhL2Rpc3BsYXktZGF0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmb250LWNvbG9yOiAgICAgICAgICAgICAgICAgIzY2NjE1YiAhZGVmYXVsdDtcbiRmaWxsLWZvbnQtY29sb3I6ICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgICAnTW9udHNlcnJhdCcsIFwiSGVsdmV0aWNhXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kbm9uZTogICAgICAgICAgICAgICAgICAgICAgIDAgICAhZGVmYXVsdDtcbiRib3JkZXItdGhpbjogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuJGJvcmRlci10aGljazogICAgICAgICAgICAgICAycHggIWRlZmF1bHQ7XG5cbiR3aGl0ZS1jb2xvcjogICAgICAgICAgICAgICAgI0ZGRkZGRiAhZGVmYXVsdDtcbiR3aGl0ZS1iZzogICAgICAgICAgICAgICAgICAgI0ZGRkZGRiAhZGVmYXVsdDtcbiR3aGl0ZS1zdGF0ZXMtY29sb3I6ICAgICAgICAgcmdiYSgkd2hpdGUtY29sb3IsIDAuOCk7XG5cbiRzbW9rZS1iZzogICAgICAgICAgICAgICAgICAgI0Y1RjVGNSAhZGVmYXVsdDtcbiRwYWxlLWJnOiAgICAgICAgICAgICAgICAgICAgI0ZGRkNGNSAhZGVmYXVsdDtcbiRtZWRpdW0tcGFsZS1iZzogICAgICAgICAgICAgI0YxRUFFMCAhZGVmYXVsdDtcblxuJHRhYmxlLWxpbmUtY29sb3I6ICAgICAgICAgICAjY2NjICFkZWZhdWx0O1xuJG11dGVkLWNvbG9yOiAgICAgICAgICAgICAgICAjYTQ5ZTkzICFkZWZhdWx0O1xuXG4kYmxhY2stYmc6ICAgICAgICAgICAgICAgICAgIHJnYmEoMzAsMzAsMzAsLjk3KSAhZGVmYXVsdDtcblxuJGJsYWNrLWNvbG9yOiAgICAgICAgICAgICAgICAjMzMzMzMzICFkZWZhdWx0O1xuJGJsYWNrLWhyOiAgICAgICAgICAgICAgICAgICAjNDQ0NDQ0ICFkZWZhdWx0O1xuXG4kbGlnaHQtZ3JheTogICAgICAgICAgICAgICAgICNFM0UzRTMgIWRlZmF1bHQ7XG4kbWVkaXVtLWdyYXk6ICAgICAgICAgICAgICAgICNEREREREQgIWRlZmF1bHQ7XG4kZGFyay1ncmF5OiAgICAgICAgICAgICAgICAgICM5QTlBOUEgIWRlZmF1bHQ7XG5cbiRwbGFjZWhvbGRlci1ncmF5OiAgICAgICAgICAgcmdiYSgyMTAsIDIxMCwgMjEwLCAxKSAgIWRlZmF1bHQ7XG5cbiRncmF5LWlucHV0LWJnOiAgICAgICAgICAgICAgI2ZmZmNmNSAhZGVmYXVsdDtcbiRkYW5nZXItaW5wdXQtYmc6ICAgICAgICAgICAgI0ZGQzBBNCAhZGVmYXVsdDtcbiRzdWNjZXNzLWlucHV0LWJnOiAgICAgICAgICAgI0FCRjNDQiAhZGVmYXVsdDtcbiRvdGhlci1tZWRpdW0tZ3JheTogICAgICAgICAgI0E0OUU5MyAhZGVmYXVsdDtcbiR0cmFuc3BhcmVudC1iZzogICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRkZWZhdWx0LWNvbG9yOiAgICAgICAgICAgICAgIzY2NjE1QiAhZGVmYXVsdDtcbiRkZWZhdWx0LWJnOiAgICAgICAgICAgICAgICAgIzY2NjE1QiAhZGVmYXVsdDtcbiRkZWZhdWx0LXN0YXRlcy1jb2xvcjogICAgICAgIzQwM0QzOSAhZGVmYXVsdDtcblxuJHByaW1hcnktY29sb3I6ICAgICAgICAgICAgICAjNTFjYmNlICFkZWZhdWx0O1xuJHByaW1hcnktc3RhdGVzLWNvbG9yOiAgICAgICBkYXJrZW4oJHByaW1hcnktY29sb3IsIDEwJSkgIWRlZmF1bHQ7XG5cbiRzdWNjZXNzLWNvbG9yOiAgICAgICAgICAgICAgIzZiZDA5OCAhZGVmYXVsdDtcbiRzdWNjZXNzLXN0YXRlcy1jb2xvcjogICAgICAgZGFya2VuKCRzdWNjZXNzLWNvbG9yLCAxMCUpICFkZWZhdWx0O1xuXG4kaW5mby1jb2xvcjogICAgICAgICAgICAgICAgICM1MWJjZGEgIWRlZmF1bHQ7XG4kaW5mby1zdGF0ZXMtY29sb3I6ICAgICAgICAgIGRhcmtlbigkaW5mby1jb2xvciwgMTAlKSAhZGVmYXVsdDtcblxuJHdhcm5pbmctY29sb3I6ICAgICAgICAgICAgICAjZmJjNjU4ICFkZWZhdWx0O1xuJHdhcm5pbmctc3RhdGVzLWNvbG9yOiAgICAgICBkYXJrZW4oJHdhcm5pbmctY29sb3IsIDEwJSkgIWRlZmF1bHQ7XG5cbiRkYW5nZXItY29sb3I6ICAgICAgICAgICAgICAgI2Y1NTkzZCAhZGVmYXVsdDtcbiRkYW5nZXItc3RhdGVzLWNvbG9yOiAgICAgICAgZGFya2VuKCRkYW5nZXItY29sb3IsIDglKSAhZGVmYXVsdDtcblxuJGxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICAjNjY2NjY2ICFkZWZhdWx0O1xuXG4kcHVycGxlLWNvbG9yOiAgICAgICAgICAgICAgICNjMTc4YzEgIWRlZmF1bHQ7XG4kcHVycGxlLXN0YXRlcy1jb2xvcjogICAgICAgIGRhcmtlbigkcHVycGxlLWNvbG9yLCA4JSkgIWRlZmF1bHQ7XG5cbiRicm93bi1jb2xvcjogICAgICAgICAgICAgICAgI2RjYjI4NSAhZGVmYXVsdDtcbiRicm93bi1zdGF0ZXMtY29sb3I6ICAgICAgICAgZGFya2VuKCRicm93bi1jb2xvciwgOCUpICFkZWZhdWx0O1xuXG5cbi8vIEJSQU5EIFZBUklBQkxFU1xuJG1haW4tY29sb3I6ICAgICAgICAgICAgICAgICAjOUY3NDI1ICFkZWZhdWx0O1xuJHNlY29uZC1jb2xvcjogICAgICAgICAgICAgICAjRUJENTgyICFkZWZhdWx0O1xuJGJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICAjMDAwMDAwICFkZWZhdWx0O1xuXG5cblxuLyogICAgICBsaWdodCBjb2xvcnMgLSB1c2VkIGZvciBzZWxlY3QgZHJvcGRvd24gICAgICAgICAqL1xuXG4kbGlnaHQtYmx1ZTogICAgICAgICAgICAgICAgIHJnYmEoJHByaW1hcnktY29sb3IsIC4yKTtcbiRsaWdodC1henVyZTogICAgICAgICAgICAgICAgcmdiYSgkaW5mby1jb2xvciwgLjIpO1xuJGxpZ2h0LWdyZWVuOiAgICAgICAgICAgICAgICByZ2JhKCRzdWNjZXNzLWNvbG9yLCAuMik7XG4kbGlnaHQtb3JhbmdlOiAgICAgICAgICAgICAgIHJnYmEoJHdhcm5pbmctY29sb3IsIC4yKTtcbiRsaWdodC1yZWQ6ICAgICAgICAgICAgICAgICAgcmdiYSgkZGFuZ2VyLWNvbG9yLCAuMik7XG5cblxuLy89PSBDb21wb25lbnRzXG4vL1xuJHBhZGRpbmctYmFzZS12ZXJ0aWNhbDogICAgICAgICA3cHggIWRlZmF1bHQ7XG4kcGFkZGluZy1iYXNlLWhvcml6b250YWw6ICAgICAgIDE4cHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLXJvdW5kLXZlcnRpY2FsOiAgICAgICAgOXB4ICFkZWZhdWx0O1xuJHBhZGRpbmctcm91bmQtaG9yaXpvbnRhbDogICAgIDE4cHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLXNpbXBsZS12ZXJ0aWNhbDogICAgICAxMHB4ICFkZWZhdWx0O1xuJHBhZGRpbmctc2ltcGxlLWhvcml6b250YWw6ICAgIDE4cHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLWxhcmdlLXZlcnRpY2FsOiAgICAgICAxMXB4ICFkZWZhdWx0O1xuJHBhZGRpbmctbGFyZ2UtaG9yaXpvbnRhbDogICAgIDMwcHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLXNtYWxsLXZlcnRpY2FsOiAgICAgICAgNHB4ICFkZWZhdWx0O1xuJHBhZGRpbmctc21hbGwtaG9yaXpvbnRhbDogICAgIDEwcHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLXhzLXZlcnRpY2FsOiAgICAgICAgICAgMnB4ICFkZWZhdWx0O1xuJHBhZGRpbmcteHMtaG9yaXpvbnRhbDogICAgICAgICA1cHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLWxhYmVsLXZlcnRpY2FsOiAgICAgICAgMnB4ICFkZWZhdWx0O1xuJHBhZGRpbmctbGFiZWwtaG9yaXpvbnRhbDogICAgIDEycHggIWRlZmF1bHQ7XG5cbi8vIHBhZGRpbmcgZm9yIGxpbmtzIGluc2lkZSBkcm9wZG93biBtZW51XG4kcGFkZGluZy1kcm9wZG93bi12ZXJ0aWNhbDogICAgIDEwcHggIWRlZmF1bHQ7XG4kcGFkZGluZy1kcm9wZG93bi1ob3Jpem9udGFsOiAgIDE1cHggIWRlZmF1bHQ7XG5cbiRtYXJnaW4tbGFyZ2UtdmVydGljYWw6ICAgICAgICAzMHB4ICFkZWZhdWx0O1xuJG1hcmdpbi1iYXNlLXZlcnRpY2FsOiAgICAgICAgIDE1cHggIWRlZmF1bHQ7XG5cbi8vIGJvcmRlciByYWRpdXMgZm9yIGJ1dHRvbnNcbiRib3JkZXItcmFkaXVzLW5vbmU6ICAgICAgICAgICAgIDBweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWJ0bi1zbWFsbDogICAgICAyNnB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtYnRuLWJhc2U6ICAgICAgIDIwcHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1idG4tbGFyZ2U6ICAgICAgNTBweCAhZGVmYXVsdDtcblxuXG4kbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAgMCAwIDEwcHggMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtYWxsOiAgICAgICAgICAgM3B4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtYmFzZTogICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sYXJnZTogICAgICAgICAgIDZweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXgtbGFyZ2U6ICAgICAgICAgOHB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtZXh0cmVtZTogICAgICAgICAxMnB4ICFkZWZhdWx0O1xuXG4kYm9yZGVyLXJhZGl1cy1ub25lLXRvcDogICAgICAkYm9yZGVyLXJhZGl1cy1ub25lICRib3JkZXItcmFkaXVzLW5vbmUgMCAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbm9uZS1ib3R0b206ICAgMCAwICRib3JkZXItcmFkaXVzLW5vbmUgJGJvcmRlci1yYWRpdXMtbm9uZSAhZGVmYXVsdDtcblxuJGJvcmRlci1yYWRpdXMtc21hbGwtdG9wOiAgICAgICRib3JkZXItcmFkaXVzLXNtYWxsICRib3JkZXItcmFkaXVzLXNtYWxsIDAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtYWxsLWJvdHRvbTogICAwIDAgJGJvcmRlci1yYWRpdXMtc21hbGwgJGJvcmRlci1yYWRpdXMtc21hbGwgIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzLWxhcmdlLXRvcDogICAgICAkYm9yZGVyLXJhZGl1cy1sYXJnZSAkYm9yZGVyLXJhZGl1cy1sYXJnZSAwIDAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sYXJnZS1ib3R0b206ICAgMCAwICRib3JkZXItcmFkaXVzLWxhcmdlICRib3JkZXItcmFkaXVzLWxhcmdlICFkZWZhdWx0O1xuXG4kYnRuLXJvdW5kLXJhZGl1czogICAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcblxuJGhlaWdodC1iYXNlOiAgICAgICAgICAgICAgICAgIDQwcHggIWRlZmF1bHQ7XG5cbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgICAxNHB4ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1zbWFsbDogICAgICAgICAgICAgIDEycHggIWRlZmF1bHQ7XG4kZm9udC1zaXplLW1lZGl1bTogICAgICAgICAgICAgMTZweCAhZGVmYXVsdDtcbiRmb250LXNpemUtbGFyZ2U6ICAgICAgICAgICAgICAyMHB4ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1sYXJnZS1uYXZiYXI6ICAgICAgIDIycHggIWRlZmF1bHQ7XG5cbiRmb250LXNpemUtaDE6ICAgICAgICAgICAgICAgICAzLjZlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtaDI6ICAgICAgICAgICAgICAgICAyLjhlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtaDM6ICAgICAgICAgICAgICAgICAxLjgyNWVtICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1oNDogICAgICAgICAgICAgICAgIDEuNmVtICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1oNTogICAgICAgICAgICAgICAgIDEuMzVlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtaDY6ICAgICAgICAgICAgICAgICAwLjllbSAhZGVmYXVsdDtcbiRmb250LXBhcmFncmFwaDogICAgICAgICAgICAgICAxNXB4ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1uYXZiYXI6ICAgICAgICAgICAgIDE0cHggIWRlZmF1bHQ7XG5cbiRmb250LXNpemUtaW5mby1ob3Jpem9udGFsOiAgICAyLjVlbSAhZGVmYXVsdDtcblxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiAgICAgICAgIDQwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1zZW1pOiAgICAgICAgICAgNTAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWJvbGQ6ICAgICAgICAgICA2MDAgIWRlZmF1bHQ7XG5cbiRsaW5lLWhlaWdodC1zbWFsbDogICAgICAgICAgICAyMHB4ICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0LWdlbmVyYWw6ICAgICAgICAgIDEuNWVtICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAgICAgMzZweCAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1sZzogICAgICAgICAgICAgIDU0cHggIWRlZmF1bHQ7XG5cblxuJGJvcmRlci1yYWRpdXMtdG9wOiAgICAgICAgMTBweCAxMHB4IDAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWJvdHRvbTogICAgIDAgMCAxMHB4IDEwcHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1kcm9wZG93bjogICAxMHB4IDEwcHggIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1zaGFkb3c6ICAgICAgICAgIDAgMnB4IHJnYmEoMTcsIDE2LCAxNSwgMC4xKSwgMCAycHggMTBweCByZ2JhKDE3LCAxNiwgMTUsIDAuMSk7XG5cbiRnZW5lcmFsLXRyYW5zaXRpb24tdGltZTogIDMwMG1zICFkZWZhdWx0O1xuXG4kc2xvdy10cmFuc2l0aW9uLXRpbWU6ICAgICAgICAgICAzMDBtcyAhZGVmYXVsdDtcbiRkcm9wZG93bi1jb29yZGluYXRlczogICAgICAyOXB4IC01MHB4ICFkZWZhdWx0O1xuXG4kZmFzdC10cmFuc2l0aW9uLXRpbWU6ICAgICAgICAgICAxNTBtcyAhZGVmYXVsdDtcbiRzZWxlY3QtY29vcmRpbmF0ZXM6ICAgICAgICAgNTAlIC00MHB4ICFkZWZhdWx0O1xuXG4kdHJhbnNpdGlvbi1saW5lYXI6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lYXIgIWRlZmF1bHQ7XG4kdHJhbnNpdGlvbi1iZXppZXI6ICAgICAgICAgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNjEsIDAuNywgMSkgIWRlZmF1bHQ7XG4kdHJhbnNpdGlvbi1lYXNlOiAgICAgICAgICAgZWFzZSAwcztcblxuJG5hdmJhci1wYWRkaW5nLWE6ICAgICAgICAgICAgICAgMTBweCAxNXB4O1xuJG5hdmJhci1tYXJnaW4tYTogICAgICAgICAgICAgICAgMTVweCAgMHB4O1xuXG4kcGFkZGluZy1zb2NpYWwtYTogICAgICAgICAgICAgICAxMHB4ICA1cHg7XG5cbiRuYXZiYXItbWFyZ2luLWEtYnRuOiAgICAgICAgICAgIDE1cHggM3B4O1xuJG5hdmJhci1tYXJnaW4tYS1idG4tcm91bmQ6ICAgICAgMTZweCAzcHg7XG5cbiRuYXZiYXItcGFkZGluZy1hLWljb25zOiAgICAgICAgIDZweCAxNXB4O1xuJG5hdmJhci1tYXJnaW4tYS1pY29uczogICAgICAgICAgNnB4ICAzcHg7XG5cbiRuYXZiYXItcGFkZGluZy1icmFuZDogICAgICAgICAgIDIwcHggMTVweDtcbiRuYXZiYXItbWFyZ2luLWJyYW5kOiAgICAgICAgICAgICA1cHggIDBweDtcblxuJG5hdmJhci1tYXJnaW4tYnJhbmQtaWNvbnM6ICAgICAgMTJweCBhdXRvO1xuXG4kbmF2YmFyLW1hcmdpbi1idG46ICAgICAgICAgICAgICAxNXB4ICAzcHg7XG5cbiRoZWlnaHQtaWNvbjpcdFx0XHRcdFx0IDY0cHggIWRlZmF1bHQ7XG4kd2lkdGgtaWNvbjpcdFx0XHRcdFx0IDY0cHggIWRlZmF1bHQ7XG4kcGFkZGluZy1pY29uOlx0XHRcdFx0XHQgMTJweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWljb246XHRcdCAgICAgMTVweCAhZGVmYXVsdDtcblxuJHNpemUtaWNvbjogXHRcdFx0XHRcdCA2NHB4O1xuJHNpemUtaWNvbi1zbTogXHRcdFx0XHRcdCAzMnB4O1xuXG5cbiRoZWlnaHQtaWNvbi1zbTpcdFx0XHRcdCAzMnB4O1xuJHdpZHRoLWljb24tc206XHRcdFx0XHRcdCAzMnB4O1xuJHBhZGRpbmctaWNvbi1zbTpcdFx0XHQgICAgIDRweDtcbiRib3JkZXItcmFkaXVzLWljb24tc206XHRcdFx0IDdweDtcblxuJGhlaWdodC1pY29uLW1lc3NhZ2U6XHRcdFx0IDQwcHg7XG4kd2lkdGgtaWNvbi1tZXNzYWdlOlx0XHRcdCA0MHB4O1xuXG4kaGVpZ2h0LWljb24tbWVzc2FnZS1zbTogXHRcdCAyMHB4O1xuJHdpZHRoLWljb24tbWVzc2FnZS1zbTpcdFx0XHQgMjBweDtcblxuXG5cbiR3aGl0ZS1uYXZiYXI6ICAgICAgICAgICAgICByZ2JhKCNGRkZGRkYsIC45Nik7XG4kYmx1ZS1uYXZiYXI6ICAgICAgICAgICAgICAgcmdiYSgjMzRBQ0RDLCAuOTgpO1xuJGF6dXJlLW5hdmJhcjogICAgICAgICAgICAgIHJnYmEoIzVCQ0FGRiwgLjk4KTtcbiRncmVlbi1uYXZiYXI6ICAgICAgICAgICAgICByZ2JhKCM0Q0Q5NjQsIC45OCk7XG4kb3JhbmdlLW5hdmJhcjogICAgICAgICAgICAgcmdiYSgjRkY5NTAwLCAuOTgpO1xuJHJlZC1uYXZiYXI6ICAgICAgICAgICAgICAgIHJnYmEoI0ZGNEM0MCwgLjk4KTtcblxuJGJnLW51ZGU6ICAgICAgICAgICAgICAgI0ZGRkNGNSAhZGVmYXVsdDtcbiRiZy1wcmltYXJ5OiAgICAgICAgICAgIGxpZ2h0ZW4oJHByaW1hcnktY29sb3IsIDclKSAhZGVmYXVsdDtcbiRiZy1pbmZvOiAgICAgICAgICAgICAgIGxpZ2h0ZW4oJGluZm8tY29sb3IsIDclKSAhZGVmYXVsdDtcbiRiZy1zdWNjZXNzOiAgICAgICAgICAgIGxpZ2h0ZW4oJHN1Y2Nlc3MtY29sb3IsIDclKSAhZGVmYXVsdDtcbiRiZy13YXJuaW5nOiAgICAgICAgICAgIGxpZ2h0ZW4oJHdhcm5pbmctY29sb3IsIDclKSAhZGVmYXVsdDtcbiRiZy1kYW5nZXI6ICAgICAgICAgICAgIGxpZ2h0ZW4oJGRhbmdlci1jb2xvciwgNyUpICFkZWZhdWx0O1xuJGJnLWJyb3duOiAgICAgICAgICAgICAgbGlnaHRlbigkYnJvd24tY29sb3IsIDclKSAhZGVmYXVsdDtcbiRiZy1wdXJwbGU6ICAgICAgICAgICAgIGxpZ2h0ZW4oJHB1cnBsZS1jb2xvciwgNyUpICFkZWZhdWx0O1xuXG4kcHJlbG9hZGVyLWNvbG9yOiAgICAgICAgICAjRDhEMUM5ICFkZWZhdWx0O1xuXG4kZmlsdGVyLWJsdWU6ICAgICAgICAgZGFya2VuKCRwcmltYXJ5LWNvbG9yLCAxMCUpO1xuJGZpbHRlci1henVyZTogICAgICAgIGRhcmtlbigkaW5mby1jb2xvciwgMTAlKTtcbiRmaWx0ZXItZ3JlZW46ICAgICAgICBkYXJrZW4oJHN1Y2Nlc3MtY29sb3IsIDEwJSk7XG4kZmlsdGVyLW9yYW5nZTogICAgICAgZGFya2VuKCR3YXJuaW5nLWNvbG9yLCAxMCUpO1xuJGZpbHRlci1yZWQ6ICAgICAgICAgIGRhcmtlbigkZGFuZ2VyLWNvbG9yLCAxMCUpO1xuXG5cbiR0b3BiYXIteDogICAgICAgICAgICAgdG9wYmFyLXggIWRlZmF1bHQ7XG4kdG9wYmFyLWJhY2s6ICAgICAgICAgIHRvcGJhci1iYWNrICFkZWZhdWx0O1xuJGJvdHRvbWJhci14OiAgICAgICAgICBib3R0b21iYXIteCAhZGVmYXVsdDtcbiRib3R0b21iYXItYmFjazogICAgICAgYm90dG9tYmFyLWJhY2sgIWRlZmF1bHQ7XG5cbiRzb2NpYWwtZmFjZWJvb2s6IFx0XHRcdCMzYjU5OTg7XG4kc29jaWFsLXR3aXR0ZXI6IFx0XHRcdCM1NWFjZWU7XG4kc29jaWFsLXBpbnRlcmVzdDogXHRcdFx0I2NjMjEyNztcbiRzb2NpYWwtZ29vZ2xlOiBcdFx0XHQjZGQ0YjM5O1xuJHNvY2lhbC1saW5rZWRpbjogXHRcdFx0IzA5NzZiNDtcbiRzb2NpYWwtZHJpYmJibGU6IFx0XHRcdCNlYTRjODk7XG4kc29jaWFsLWdpdGh1YjogXHRcdFx0IzMzMzMzMztcbiRzb2NpYWwteW91dHViZTogXHRcdFx0I2U1MmQyNztcbiRzb2NpYWwtaW5zdGFncmFtOiBcdFx0ICAgICMxMjU2ODg7XG4kc29jaWFsLXJlZGRpdDogXHRcdFx0I2ZmNDUwMDtcbiRzb2NpYWwtdHVtYmxyOiBcdFx0XHQjMzU0NjVjO1xuXG4kYmFja2dyb3VuZC1saWdodC1ncmV5OiAgICAgI0U4RTdFMyAhZGVmYXVsdDtcbiRiYWNrZ3JvdW5kLWxpZ2h0ZXItZ3JleTogICAjRjBFRkVCICFkZWZhdWx0O1xuJGZvbnQtYmFja2dyb3VuZC1saWdodC1ncmV5OiAjOUM5Qjk5ICFkZWZhdWx0O1xuJGZvbnQtaG92ZXItYmFja2dyb3VuZC1saWdodC1ncmV5OiAjNUU1RTVDICFkZWZhdWx0O1xuXG4vLyB2YXJpYWJsZXMgdXNlZCBpbiBoZWFkZXJzXG4kaGVhZGVyLWJhY2tncm91bmQ6ICAgICAgICAgI0IyQUZBQiAhZGVmYXVsdDtcblxuJGZpbHRlci1wcmltYXJ5OiAgICAgICAgIGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMTAlKTtcbiRmaWx0ZXItaW5mbzogICAgICAgIGRhcmtlbigkaW5mby1jb2xvciwgMTAlKTtcbiRmaWx0ZXItc3VjY2VzczogICAgICAgIGRhcmtlbigkc3VjY2Vzcy1jb2xvciwgMTAlKTtcbiRmaWx0ZXItd2FybmluZzogICAgICAgZGFya2VuKCR3YXJuaW5nLWNvbG9yLCAxMCUpO1xuJGZpbHRlci1kYW5nZXI6ICAgICAgICAgIGRhcmtlbigkZGFuZ2VyLWNvbG9yLCAxMCUpO1xuXG4vLyB2YXJpYWJsZSB1c2VkIGluIGZvb3RlcnNcbiRibGFjay1mb290ZXItYmc6ICAgICAgICAgICAgIzI1MjQyMiAhZGVmYXVsdDtcbiRicm93bi1mb250LWNvbG9yOiAgICAgICAgICAgI0E0OUU5RSAhZGVmYXVsdDtcbiRicm93bi1mb250LWNvbG9yLWhvdmVyOiAgICAgI0YxRUFFMCAhZGVmYXVsdDtcblxuLy92YXJpYWJsZXMgdXNlZCBpbiBjYXJkc1xuJGNhcmQtYmxhY2stY29sb3I6ICAgICAgICAgICAjMzMzMzMzICFkZWZhdWx0O1xuJGNhcmQtbXV0ZWQtY29sb3I6ICAgICAgICAgICAjY2NjICFkZWZhdWx0O1xuXG4kY2FyZC1iYWNrZ3JvdW5kLWJsdWU6ICAgICAgI2I4ZDhkOCAhZGVmYXVsdDtcbiRjYXJkLWZvbnQtYmx1ZTogICAgICAgICAgICAjNTA2NTY4ICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUtYmx1ZTogICAgICAgICM3YTllOWYgIWRlZmF1bHQ7XG5cbiRjYXJkLWJhY2tncm91bmQtZ3JlZW46ICAgICAgI2Q1ZTVhMyAhZGVmYXVsdDtcbiRjYXJkLWZvbnQtZ3JlZW46ICAgICAgICAgICAgIzYwNzczZCAhZGVmYXVsdDtcbiRjYXJkLXN1YnRpdGxlLWdyZWVuOiAgICAgICAgIzkyYWM1NiAhZGVmYXVsdDtcblxuJGNhcmQtYmFja2dyb3VuZC15ZWxsb3c6ICAgICAgI2ZmZTI4YyAhZGVmYXVsdDtcbiRjYXJkLWZvbnQteWVsbG93OiAgICAgICAgICAgICNiMjU4MjUgIWRlZmF1bHQ7XG4kY2FyZC1zdWJ0aXRsZS15ZWxsb3c6ICAgICAgICAjZDg4NzE1ICFkZWZhdWx0O1xuXG4kY2FyZC1iYWNrZ3JvdW5kLWJyb3duOiAgICAgICNkNmMxYWIgIWRlZmF1bHQ7XG4kY2FyZC1mb250LWJyb3duOiAgICAgICAgICAgICM3NTQ0MmUgIWRlZmF1bHQ7XG4kY2FyZC1zdWJ0aXRsZS1icm93bjogICAgICAgICNhNDdlNjUgIWRlZmF1bHQ7XG5cbiRjYXJkLWJhY2tncm91bmQtcHVycGxlOiAgICAgICNiYWE5YmEgIWRlZmF1bHQ7XG4kY2FyZC1mb250LXB1cnBsZTogICAgICAgICAgICAjM2EyODNkICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUtcHVycGxlOiAgICAgICAgIzVhMjgzZCAhZGVmYXVsdDtcblxuJGNhcmQtYmFja2dyb3VuZC1vcmFuZ2U6ICAgICAgI2ZmOGY1ZSAhZGVmYXVsdDtcbiRjYXJkLWZvbnQtb3JhbmdlOiAgICAgICAgICAgICM3NzI1MTAgIWRlZmF1bHQ7XG4kY2FyZC1zdWJ0aXRsZS1vcmFuZ2U6ICAgICAgICAjZTk1ZTM3ICFkZWZhdWx0O1xuXG4kY2FyZC1iYWNrZ3JvdW5kLXByaW1hcnk6ICAgICAjNDI3Qzg5ICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgIzQyN0M4OSAhZGVmYXVsdDtcblxuJGNvbG9yLXJlZC1lcnJvcjogcmdiKDE4NSwgNzQsIDcyKSAhZGVmYXVsdDtcbiRjb2xvci1ncmV5LWFycm93OiByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuMikgIWRlZmF1bHQ7XG5cbiR3aWR0aC1kZWZhdWx0OiAyMjBweCAhZGVmYXVsdDsgLy8gMyA5NjBweC1ncmlkIGNvbHVtbnNcblxuJHppbmRleC1zZWxlY3QtZHJvcGRvd246IDEwNjAgIWRlZmF1bHQ7IC8vIG11c3QgYmUgaGlnaGVyIHRoYW4gYSBtb2RhbCBiYWNrZ3JvdW5kICgxMDUwKVxuXG4vLyoqIFBsYWNlaG9sZGVyIHRleHQgY29sb3JcbiRpbnB1dC1jb2xvci1wbGFjZWhvbGRlcjogIzk5OSAhZGVmYXVsdDtcblxuXG4vLyBtZWRpYSBoZWFkZXIgXG4kbWVkaWEtaGVhZGVyLWhlaWdodDogMTAwcHg7IiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL3BhcGVyLWtpdC92YXJpYWJsZXNcIjtcblxuI2NvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6ICM5ZTllOWU7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtICN7JG1lZGlhLWhlYWRlci1oZWlnaHR9KTtcbiAgICAvLyBtaW4taGVpZ2h0OiAxMDB2aDtcblxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/display-data/display-data.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/display-data/display-data.component.ts ***!
  \*******************************************************************/
/*! exports provided: DisplayDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayDataComponent", function() { return DisplayDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_helpers_animations_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/helpers/animations/animations */ "./src/app/helpers/animations/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplayDataComponent = /** @class */ (function () {
    function DisplayDataComponent() {
        this.selectVideo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DisplayDataComponent.prototype.ngOnChanges = function (changes) {
        var contents = changes.data;
        if (contents && contents.previousValue !== contents.currentValue) {
            if (contents.currentValue.data && contents.currentValue.data.length > 0) {
                this.contents = contents.currentValue.data;
                this.pagination = contents.currentValue.meta.pagination;
            }
            else {
                this.contents = [];
                this.pagination = null;
            }
        }
    };
    DisplayDataComponent.prototype.select = function ($event) {
        this.selectVideo.emit($event);
    };
    DisplayDataComponent.prototype.ngOnInit = function () {
    };
    DisplayDataComponent.prototype.ngOnDestroy = function () {
        // this.parentObservable.unsubscribre();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DisplayDataComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DisplayDataComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DisplayDataComponent.prototype, "selectVideo", void 0);
    DisplayDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-data',
            template: __webpack_require__(/*! ./display-data.component.html */ "./src/app/components/display-data/display-data.component.html"),
            styles: [__webpack_require__(/*! ./display-data.component.scss */ "./src/app/components/display-data/display-data.component.scss")],
            animations: [app_helpers_animations_animations__WEBPACK_IMPORTED_MODULE_1__["listContent"]]
        }),
        __metadata("design:paramtypes", [])
    ], DisplayDataComponent);
    return DisplayDataComponent;
}());



/***/ }),

/***/ "./src/app/components/loading/loading.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/loading/loading.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\" *ngIf=\"loading\">\n  <mat-spinner></mat-spinner>\n</div>"

/***/ }),

/***/ "./src/app/components/loading/loading.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/loading/loading.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading {\n  display: flex;\n  vertical-align: middle;\n  justify-content: center;\n  align-items: center;\n  min-width: 100%;\n  z-index: 99999;\n  min-height: 100vh;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.3); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZmxhdmlvLXNpcXVlaXJhL3NyYy9hcHAvY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLHdCQUF1QjtFQUN2QixvQkFBbUI7RUFDbkIsZ0JBQWU7RUFDZixlQUFjO0VBQ2Qsa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YsK0JBQXdCLEVBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDk5OTk5O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCMwMDAwMDAsIC4zKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/loading/loading.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/loading/loading.component.ts ***!
  \*********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
        this.minHeight = '100%';
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.min-height'),
        __metadata("design:type", Object)
    ], LoadingComponent.prototype, "minHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LoadingComponent.prototype, "loading", void 0);
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/components/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.scss */ "./src/app/components/loading/loading.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/components/maps/maps.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/maps/maps.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"section-heading\"> -->\n<h4 class=\"pt-1\"> <i class=\"fa fa-phone text-danger\"></i> (81) 3877-3798</h4>\n<h4 class=\"pt-1 pb-4\"> <i class=\"fa fa-map-marker text-danger\"></i> Nosso Endereço</h4>\n\n<!-- </div> -->\n\n<p>\n  Rua Ribeiro de Brito, n. 830</p>\n<p>\n  Edf centro empresarial Iberbras, sala 1201,\n</p>\n<p>\n  Boa Viagem, Recife/PE\n</p>\n\n<br>\n<br>\n\n<agm-map [scrollwheel]=false [minZoom]=16 [mapDraggable]=false [latitude]=\"lat\" [longitude]=\"lng\">\n\n  <agm-marker [title]=\"title\" [latitude]=\"lat\" [longitude]=\"lng\">\n  </agm-marker>\n\n</agm-map>"

/***/ }),

/***/ "./src/app/components/maps/maps.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/maps/maps.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 300px; }\n\np, h4 {\n  color: #66615b;\n  font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZmxhdmlvLXNpcXVlaXJhL3NyYy9hcHAvY29tcG9uZW50cy9tYXBzL21hcHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksZUFBYztFQUNkLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFwcy9tYXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbn1cblxucCwgaDQge1xuICAgIGNvbG9yOiAjNjY2MTViO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/maps/maps.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/maps/maps.component.ts ***!
  \***************************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
        this.title = 'Property Solutions, sala 606';
        this.lat = -8.12269631;
        this.lng = -34.90423501;
    }
    MapsComponent.prototype.ngOnInit = function () {
    };
    MapsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maps',
            template: __webpack_require__(/*! ./maps.component.html */ "./src/app/components/maps/maps.component.html"),
            styles: [__webpack_require__(/*! ./maps.component.scss */ "./src/app/components/maps/maps.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "./src/app/components/media-header/media-header.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/media-header/media-header.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-fluid sticky\">\n  <div>\n    <p *ngIf=\"type\">{{type.label}}</p>\n    <form (keyup.enter)=\"submit()\" [formGroup]=\"form\" (submit)=\"submit()\">\n      <input type=\"text\" placeholder=\"Pesquisar\" formControlName=\"search\" id=\"search\">\n\n    </form>\n  </div>\n</div> -->\n\n<nav class=\"sticky\">\n  <!-- <form (keyup.enter)=\"submit()\" [formGroup]=\"form\" (submit)=\"submit()\">\n    <input type=\"text\" placeholder=\"Pesquisar\" formControlName=\"search\" id=\"search\">\n\n  </form> -->\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\" style=\"display: flex; justify-content: flex-start; align-items: center; vertical-align: middel;\">\n            <div class=\"burger-container\">\n          <div class=\"burger\" (click)=\"toogleMenu()\">\n            <div class=\"line\" id=\"one\"></div>\n          </div>\n        </div>\n\n        <div>\n            <a class=\"btn btn-sm btn-round\" [routerLink]=\"['/']\">\n              Voltar\n            </a>\n          </div>\n      </div>\n      <div class=\"col\" style=\"display: flex; justify-content: flex-end; align-items: center; vertical-align: middel;\">\n        <p *ngIf=\"type\" style=\"font-weight: bold\">{{type.label}}</p>\n      </div>\n      <!-- <div class=\"col\" style=\"display: flex; justify-content: flex-end; align-items: center; vertical-align: middel;\">\n        <a [routerLink]=\"['/']\">\n          Voltar\n        </a>\n      </div> -->\n    </div>\n\n  </div>\n\n</nav>"

/***/ }),

/***/ "./src/app/components/media-header/media-header.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/media-header/media-header.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*      light colors - used for select dropdown         */\n.sticky {\n  height: 100px;\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 9999;\n  top: 0;\n  background: #FFFFFF;\n  display: flex;\n  vertical-align: middle;\n  align-items: center;\n  box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.15); }\n.sticky p {\n    margin: 0;\n    float: left; }\n.sticky #search {\n    float: right;\n    right: 15px;\n    background: #757575;\n    border-radius: 15px;\n    outline: none;\n    position: absolute;\n    color: #FFFFFF;\n    font-weight: 900;\n    border: none;\n    padding: 5px 0px 5px 15px; }\n.sticky #search::-webkit-input-placeholder {\n      color: #FFFFFF;\n      opacity: 1;\n      /* Firefox */ }\n.sticky #search::-ms-input-placeholder {\n      color: #FFFFFF;\n      opacity: 1;\n      /* Firefox */ }\n.sticky #search::placeholder {\n      color: #FFFFFF;\n      opacity: 1;\n      /* Firefox */ }\n.sticky #search:-ms-input-placeholder {\n      /* Internet Explorer 10-11 */\n      color: #FFFFFF; }\n.sticky #search::-ms-input-placeholder {\n      /* Microsoft Edge */\n      color: #FFFFFF; }\n.burger-container {\n  width: 80px;\n  height: 80px;\n  margin: 5px;\n  overflow: hidden;\n  cursor: pointer;\n  display: inline-block; }\n.burger {\n  width: 100%;\n  height: 100%;\n  position: relative; }\n.line {\n  width: 25px;\n  height: 2px;\n  background: #000000;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n.line:before {\n  content: \"\";\n  position: absolute;\n  top: -5px;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  width: 100%;\n  height: 100%;\n  background: #000000;\n  transition: all 300ms ease-in-out; }\n.line:after {\n  content: \"\";\n  position: absolute;\n  top: 5px;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  width: 100%;\n  height: 100%;\n  background: #000000;\n  transition: all 300ms ease-in-out; }\n.burger.active #one {\n  background: transparent; }\n.burger.active #one:before {\n  top: 0;\n  left: 0;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n.burger.active #one:after {\n  top: 0;\n  left: 0;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZmxhdmlvLXNpcXVlaXJhL3NyYy9hc3NldHMvc2Fzcy9wYXBlci1raXQvX3ZhcmlhYmxlcy5zY3NzIiwiL3Zhci93d3cvaHRtbC9mbGF2aW8tc2lxdWVpcmEvc3JjL2FwcC9jb21wb25lbnRzL21lZGlhLWhlYWRlci9tZWRpYS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUVBLDBEQUEwRDtBQ3JFMUQ7RUFDSSxjRG9VdUI7RUNuVXZCLHlCQUFnQjtFQUFoQixpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLE9BQU07RUFDTixvQkFBbUI7RUFDbkIsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixvQkFBbUI7RUFDbkIsZ0RBQStDLEVBK0JsRDtBQXhDRDtJQVlRLFVBQVM7SUFDVCxZQUFXLEVBQ2Q7QUFkTDtJQWlCUSxhQUFZO0lBQ1osWUFBVztJQUNYLG9CQUFtQjtJQUNuQixvQkFBbUI7SUFDbkIsY0FBYTtJQUNiLG1CQUFrQjtJQUNsQixlQUFjO0lBQ2QsaUJBQWdCO0lBQ2hCLGFBQVk7SUFDWiwwQkFBeUIsRUFhNUI7QUF2Q0w7TUE0QlksZUFBYztNQUNkLFdBQVU7TUFBRSxhQUFhLEVBQzVCO0FBOUJUO01BNEJZLGVBQWM7TUFDZCxXQUFVO01BQUUsYUFBYSxFQUM1QjtBQTlCVDtNQTRCWSxlQUFjO01BQ2QsV0FBVTtNQUFFLGFBQWEsRUFDNUI7QUE5QlQ7TUFnQ2tDLDZCQUE2QjtNQUNwRCxlQUFjLEVBQ2hCO0FBbENUO01Bb0NtQyxvQkFBb0I7TUFDNUMsZUFBYyxFQUNoQjtBQUlUO0VBQ0MsWUFBVztFQUNYLGFBQVk7RUFDWixZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2Ysc0JBQXFCLEVBQ3JCO0FBRUQ7RUFDQyxZQUFXO0VBQ1gsYUFBWTtFQUNaLG1CQUFrQixFQUNsQjtBQUVEO0VBQ0MsWUFBVztFQUNYLFlBQVc7RUFDWCxvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixVQUFTO0VBQ1QseUNBQWdDO1VBQWhDLGlDQUFnQyxFQUNoQztBQUVEO0VBQ0MsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsVUFBUztFQUNULHNDQUE2QjtVQUE3Qiw4QkFBNkI7RUFDN0IsWUFBVztFQUNYLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIsa0NBQWlDLEVBQ2pDO0FBRUQ7RUFDQyxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixVQUFTO0VBQ1Qsc0NBQTZCO1VBQTdCLDhCQUE2QjtFQUM3QixZQUFXO0VBQ1gsYUFBWTtFQUNaLG9CQUFtQjtFQUNuQixrQ0FBaUMsRUFDakM7QUFFRDtFQUNDLHdCQUF1QixFQUN2QjtBQUVEO0VBQ0MsT0FBTTtFQUNOLFFBQU87RUFDUCxpQ0FBd0I7VUFBeEIseUJBQXdCLEVBQ3hCO0FBRUQ7RUFDQyxPQUFNO0VBQ04sUUFBTztFQUNQLGtDQUF5QjtVQUF6QiwwQkFBeUIsRUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lZGlhLWhlYWRlci9tZWRpYS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZm9udC1jb2xvcjogICAgICAgICAgICAgICAgICM2NjYxNWIgIWRlZmF1bHQ7XG4kZmlsbC1mb250LWNvbG9yOiAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgJ01vbnRzZXJyYXQnLCBcIkhlbHZldGljYVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJG5vbmU6ICAgICAgICAgICAgICAgICAgICAgICAwICAgIWRlZmF1bHQ7XG4kYm9yZGVyLXRoaW46ICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcbiRib3JkZXItdGhpY2s6ICAgICAgICAgICAgICAgMnB4ICFkZWZhdWx0O1xuXG4kd2hpdGUtY29sb3I6ICAgICAgICAgICAgICAgICNGRkZGRkYgIWRlZmF1bHQ7XG4kd2hpdGUtYmc6ICAgICAgICAgICAgICAgICAgICNGRkZGRkYgIWRlZmF1bHQ7XG4kd2hpdGUtc3RhdGVzLWNvbG9yOiAgICAgICAgIHJnYmEoJHdoaXRlLWNvbG9yLCAwLjgpO1xuXG4kc21va2UtYmc6ICAgICAgICAgICAgICAgICAgICNGNUY1RjUgIWRlZmF1bHQ7XG4kcGFsZS1iZzogICAgICAgICAgICAgICAgICAgICNGRkZDRjUgIWRlZmF1bHQ7XG4kbWVkaXVtLXBhbGUtYmc6ICAgICAgICAgICAgICNGMUVBRTAgIWRlZmF1bHQ7XG5cbiR0YWJsZS1saW5lLWNvbG9yOiAgICAgICAgICAgI2NjYyAhZGVmYXVsdDtcbiRtdXRlZC1jb2xvcjogICAgICAgICAgICAgICAgI2E0OWU5MyAhZGVmYXVsdDtcblxuJGJsYWNrLWJnOiAgICAgICAgICAgICAgICAgICByZ2JhKDMwLDMwLDMwLC45NykgIWRlZmF1bHQ7XG5cbiRibGFjay1jb2xvcjogICAgICAgICAgICAgICAgIzMzMzMzMyAhZGVmYXVsdDtcbiRibGFjay1ocjogICAgICAgICAgICAgICAgICAgIzQ0NDQ0NCAhZGVmYXVsdDtcblxuJGxpZ2h0LWdyYXk6ICAgICAgICAgICAgICAgICAjRTNFM0UzICFkZWZhdWx0O1xuJG1lZGl1bS1ncmF5OiAgICAgICAgICAgICAgICAjREREREREICFkZWZhdWx0O1xuJGRhcmstZ3JheTogICAgICAgICAgICAgICAgICAjOUE5QTlBICFkZWZhdWx0O1xuXG4kcGxhY2Vob2xkZXItZ3JheTogICAgICAgICAgIHJnYmEoMjEwLCAyMTAsIDIxMCwgMSkgICFkZWZhdWx0O1xuXG4kZ3JheS1pbnB1dC1iZzogICAgICAgICAgICAgICNmZmZjZjUgIWRlZmF1bHQ7XG4kZGFuZ2VyLWlucHV0LWJnOiAgICAgICAgICAgICNGRkMwQTQgIWRlZmF1bHQ7XG4kc3VjY2Vzcy1pbnB1dC1iZzogICAgICAgICAgICNBQkYzQ0IgIWRlZmF1bHQ7XG4kb3RoZXItbWVkaXVtLWdyYXk6ICAgICAgICAgICNBNDlFOTMgIWRlZmF1bHQ7XG4kdHJhbnNwYXJlbnQtYmc6ICAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4kZGVmYXVsdC1jb2xvcjogICAgICAgICAgICAgICM2NjYxNUIgIWRlZmF1bHQ7XG4kZGVmYXVsdC1iZzogICAgICAgICAgICAgICAgICM2NjYxNUIgIWRlZmF1bHQ7XG4kZGVmYXVsdC1zdGF0ZXMtY29sb3I6ICAgICAgICM0MDNEMzkgIWRlZmF1bHQ7XG5cbiRwcmltYXJ5LWNvbG9yOiAgICAgICAgICAgICAgIzUxY2JjZSAhZGVmYXVsdDtcbiRwcmltYXJ5LXN0YXRlcy1jb2xvcjogICAgICAgZGFya2VuKCRwcmltYXJ5LWNvbG9yLCAxMCUpICFkZWZhdWx0O1xuXG4kc3VjY2Vzcy1jb2xvcjogICAgICAgICAgICAgICM2YmQwOTggIWRlZmF1bHQ7XG4kc3VjY2Vzcy1zdGF0ZXMtY29sb3I6ICAgICAgIGRhcmtlbigkc3VjY2Vzcy1jb2xvciwgMTAlKSAhZGVmYXVsdDtcblxuJGluZm8tY29sb3I6ICAgICAgICAgICAgICAgICAjNTFiY2RhICFkZWZhdWx0O1xuJGluZm8tc3RhdGVzLWNvbG9yOiAgICAgICAgICBkYXJrZW4oJGluZm8tY29sb3IsIDEwJSkgIWRlZmF1bHQ7XG5cbiR3YXJuaW5nLWNvbG9yOiAgICAgICAgICAgICAgI2ZiYzY1OCAhZGVmYXVsdDtcbiR3YXJuaW5nLXN0YXRlcy1jb2xvcjogICAgICAgZGFya2VuKCR3YXJuaW5nLWNvbG9yLCAxMCUpICFkZWZhdWx0O1xuXG4kZGFuZ2VyLWNvbG9yOiAgICAgICAgICAgICAgICNmNTU5M2QgIWRlZmF1bHQ7XG4kZGFuZ2VyLXN0YXRlcy1jb2xvcjogICAgICAgIGRhcmtlbigkZGFuZ2VyLWNvbG9yLCA4JSkgIWRlZmF1bHQ7XG5cbiRsaW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgIzY2NjY2NiAhZGVmYXVsdDtcblxuJHB1cnBsZS1jb2xvcjogICAgICAgICAgICAgICAjYzE3OGMxICFkZWZhdWx0O1xuJHB1cnBsZS1zdGF0ZXMtY29sb3I6ICAgICAgICBkYXJrZW4oJHB1cnBsZS1jb2xvciwgOCUpICFkZWZhdWx0O1xuXG4kYnJvd24tY29sb3I6ICAgICAgICAgICAgICAgICNkY2IyODUgIWRlZmF1bHQ7XG4kYnJvd24tc3RhdGVzLWNvbG9yOiAgICAgICAgIGRhcmtlbigkYnJvd24tY29sb3IsIDglKSAhZGVmYXVsdDtcblxuXG4vLyBCUkFORCBWQVJJQUJMRVNcbiRtYWluLWNvbG9yOiAgICAgICAgICAgICAgICAgIzlGNzQyNSAhZGVmYXVsdDtcbiRzZWNvbmQtY29sb3I6ICAgICAgICAgICAgICAgI0VCRDU4MiAhZGVmYXVsdDtcbiRiYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAgIzAwMDAwMCAhZGVmYXVsdDtcblxuXG5cbi8qICAgICAgbGlnaHQgY29sb3JzIC0gdXNlZCBmb3Igc2VsZWN0IGRyb3Bkb3duICAgICAgICAgKi9cblxuJGxpZ2h0LWJsdWU6ICAgICAgICAgICAgICAgICByZ2JhKCRwcmltYXJ5LWNvbG9yLCAuMik7XG4kbGlnaHQtYXp1cmU6ICAgICAgICAgICAgICAgIHJnYmEoJGluZm8tY29sb3IsIC4yKTtcbiRsaWdodC1ncmVlbjogICAgICAgICAgICAgICAgcmdiYSgkc3VjY2Vzcy1jb2xvciwgLjIpO1xuJGxpZ2h0LW9yYW5nZTogICAgICAgICAgICAgICByZ2JhKCR3YXJuaW5nLWNvbG9yLCAuMik7XG4kbGlnaHQtcmVkOiAgICAgICAgICAgICAgICAgIHJnYmEoJGRhbmdlci1jb2xvciwgLjIpO1xuXG5cbi8vPT0gQ29tcG9uZW50c1xuLy9cbiRwYWRkaW5nLWJhc2UtdmVydGljYWw6ICAgICAgICAgN3B4ICFkZWZhdWx0O1xuJHBhZGRpbmctYmFzZS1ob3Jpem9udGFsOiAgICAgICAxOHB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy1yb3VuZC12ZXJ0aWNhbDogICAgICAgIDlweCAhZGVmYXVsdDtcbiRwYWRkaW5nLXJvdW5kLWhvcml6b250YWw6ICAgICAxOHB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy1zaW1wbGUtdmVydGljYWw6ICAgICAgMTBweCAhZGVmYXVsdDtcbiRwYWRkaW5nLXNpbXBsZS1ob3Jpem9udGFsOiAgICAxOHB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy1sYXJnZS12ZXJ0aWNhbDogICAgICAgMTFweCAhZGVmYXVsdDtcbiRwYWRkaW5nLWxhcmdlLWhvcml6b250YWw6ICAgICAzMHB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy1zbWFsbC12ZXJ0aWNhbDogICAgICAgIDRweCAhZGVmYXVsdDtcbiRwYWRkaW5nLXNtYWxsLWhvcml6b250YWw6ICAgICAxMHB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy14cy12ZXJ0aWNhbDogICAgICAgICAgIDJweCAhZGVmYXVsdDtcbiRwYWRkaW5nLXhzLWhvcml6b250YWw6ICAgICAgICAgNXB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy1sYWJlbC12ZXJ0aWNhbDogICAgICAgIDJweCAhZGVmYXVsdDtcbiRwYWRkaW5nLWxhYmVsLWhvcml6b250YWw6ICAgICAxMnB4ICFkZWZhdWx0O1xuXG4vLyBwYWRkaW5nIGZvciBsaW5rcyBpbnNpZGUgZHJvcGRvd24gbWVudVxuJHBhZGRpbmctZHJvcGRvd24tdmVydGljYWw6ICAgICAxMHB4ICFkZWZhdWx0O1xuJHBhZGRpbmctZHJvcGRvd24taG9yaXpvbnRhbDogICAxNXB4ICFkZWZhdWx0O1xuXG4kbWFyZ2luLWxhcmdlLXZlcnRpY2FsOiAgICAgICAgMzBweCAhZGVmYXVsdDtcbiRtYXJnaW4tYmFzZS12ZXJ0aWNhbDogICAgICAgICAxNXB4ICFkZWZhdWx0O1xuXG4vLyBib3JkZXIgcmFkaXVzIGZvciBidXR0b25zXG4kYm9yZGVyLXJhZGl1cy1ub25lOiAgICAgICAgICAgICAwcHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1idG4tc21hbGw6ICAgICAgMjZweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWJ0bi1iYXNlOiAgICAgICAyMHB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtYnRuLWxhcmdlOiAgICAgIDUwcHggIWRlZmF1bHQ7XG5cblxuJG1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgIDAgMCAxMHB4IDAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbWFsbDogICAgICAgICAgIDNweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWJhc2U6ICAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGFyZ2U6ICAgICAgICAgICA2cHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy14LWxhcmdlOiAgICAgICAgIDhweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWV4dHJlbWU6ICAgICAgICAgMTJweCAhZGVmYXVsdDtcblxuJGJvcmRlci1yYWRpdXMtbm9uZS10b3A6ICAgICAgJGJvcmRlci1yYWRpdXMtbm9uZSAkYm9yZGVyLXJhZGl1cy1ub25lIDAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLW5vbmUtYm90dG9tOiAgIDAgMCAkYm9yZGVyLXJhZGl1cy1ub25lICRib3JkZXItcmFkaXVzLW5vbmUgIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzLXNtYWxsLXRvcDogICAgICAkYm9yZGVyLXJhZGl1cy1zbWFsbCAkYm9yZGVyLXJhZGl1cy1zbWFsbCAwIDAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbWFsbC1ib3R0b206ICAgMCAwICRib3JkZXItcmFkaXVzLXNtYWxsICRib3JkZXItcmFkaXVzLXNtYWxsICFkZWZhdWx0O1xuXG4kYm9yZGVyLXJhZGl1cy1sYXJnZS10b3A6ICAgICAgJGJvcmRlci1yYWRpdXMtbGFyZ2UgJGJvcmRlci1yYWRpdXMtbGFyZ2UgMCAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGFyZ2UtYm90dG9tOiAgIDAgMCAkYm9yZGVyLXJhZGl1cy1sYXJnZSAkYm9yZGVyLXJhZGl1cy1sYXJnZSAhZGVmYXVsdDtcblxuJGJ0bi1yb3VuZC1yYWRpdXM6ICAgICAgICAgICAgIDMwcHggIWRlZmF1bHQ7XG5cbiRoZWlnaHQtYmFzZTogICAgICAgICAgICAgICAgICA0MHB4ICFkZWZhdWx0O1xuXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAgMTRweCAhZGVmYXVsdDtcbiRmb250LXNpemUtc21hbGw6ICAgICAgICAgICAgICAxMnB4ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1tZWRpdW06ICAgICAgICAgICAgIDE2cHggIWRlZmF1bHQ7XG4kZm9udC1zaXplLWxhcmdlOiAgICAgICAgICAgICAgMjBweCAhZGVmYXVsdDtcbiRmb250LXNpemUtbGFyZ2UtbmF2YmFyOiAgICAgICAyMnB4ICFkZWZhdWx0O1xuXG4kZm9udC1zaXplLWgxOiAgICAgICAgICAgICAgICAgMy42ZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWgyOiAgICAgICAgICAgICAgICAgMi44ZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWgzOiAgICAgICAgICAgICAgICAgMS44MjVlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtaDQ6ICAgICAgICAgICAgICAgICAxLjZlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtaDU6ICAgICAgICAgICAgICAgICAxLjM1ZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWg2OiAgICAgICAgICAgICAgICAgMC45ZW0gIWRlZmF1bHQ7XG4kZm9udC1wYXJhZ3JhcGg6ICAgICAgICAgICAgICAgMTVweCAhZGVmYXVsdDtcbiRmb250LXNpemUtbmF2YmFyOiAgICAgICAgICAgICAxNHB4ICFkZWZhdWx0O1xuXG4kZm9udC1zaXplLWluZm8taG9yaXpvbnRhbDogICAgMi41ZW0gIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1saWdodDogICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogICAgICAgICA0MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtc2VtaTogICAgICAgICAgIDUwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkOiAgICAgICAgICAgNjAwICFkZWZhdWx0O1xuXG4kbGluZS1oZWlnaHQtc21hbGw6ICAgICAgICAgICAgMjBweCAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1nZW5lcmFsOiAgICAgICAgICAxLjVlbSAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodDogICAgICAgICAgICAgICAgIDM2cHggIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICA1NHB4ICFkZWZhdWx0O1xuXG5cbiRib3JkZXItcmFkaXVzLXRvcDogICAgICAgIDEwcHggMTBweCAwIDAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1ib3R0b206ICAgICAwIDAgMTBweCAxMHB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtZHJvcGRvd246ICAgMTBweCAxMHB4ICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tc2hhZG93OiAgICAgICAgICAwIDJweCByZ2JhKDE3LCAxNiwgMTUsIDAuMSksIDAgMnB4IDEwcHggcmdiYSgxNywgMTYsIDE1LCAwLjEpO1xuXG4kZ2VuZXJhbC10cmFuc2l0aW9uLXRpbWU6ICAzMDBtcyAhZGVmYXVsdDtcblxuJHNsb3ctdHJhbnNpdGlvbi10aW1lOiAgICAgICAgICAgMzAwbXMgIWRlZmF1bHQ7XG4kZHJvcGRvd24tY29vcmRpbmF0ZXM6ICAgICAgMjlweCAtNTBweCAhZGVmYXVsdDtcblxuJGZhc3QtdHJhbnNpdGlvbi10aW1lOiAgICAgICAgICAgMTUwbXMgIWRlZmF1bHQ7XG4kc2VsZWN0LWNvb3JkaW5hdGVzOiAgICAgICAgIDUwJSAtNDBweCAhZGVmYXVsdDtcblxuJHRyYW5zaXRpb24tbGluZWFyOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZWFyICFkZWZhdWx0O1xuJHRyYW5zaXRpb24tYmV6aWVyOiAgICAgICAgIGN1YmljLWJlemllcigwLjM0LCAxLjYxLCAwLjcsIDEpICFkZWZhdWx0O1xuJHRyYW5zaXRpb24tZWFzZTogICAgICAgICAgIGVhc2UgMHM7XG5cbiRuYXZiYXItcGFkZGluZy1hOiAgICAgICAgICAgICAgIDEwcHggMTVweDtcbiRuYXZiYXItbWFyZ2luLWE6ICAgICAgICAgICAgICAgIDE1cHggIDBweDtcblxuJHBhZGRpbmctc29jaWFsLWE6ICAgICAgICAgICAgICAgMTBweCAgNXB4O1xuXG4kbmF2YmFyLW1hcmdpbi1hLWJ0bjogICAgICAgICAgICAxNXB4IDNweDtcbiRuYXZiYXItbWFyZ2luLWEtYnRuLXJvdW5kOiAgICAgIDE2cHggM3B4O1xuXG4kbmF2YmFyLXBhZGRpbmctYS1pY29uczogICAgICAgICA2cHggMTVweDtcbiRuYXZiYXItbWFyZ2luLWEtaWNvbnM6ICAgICAgICAgIDZweCAgM3B4O1xuXG4kbmF2YmFyLXBhZGRpbmctYnJhbmQ6ICAgICAgICAgICAyMHB4IDE1cHg7XG4kbmF2YmFyLW1hcmdpbi1icmFuZDogICAgICAgICAgICAgNXB4ICAwcHg7XG5cbiRuYXZiYXItbWFyZ2luLWJyYW5kLWljb25zOiAgICAgIDEycHggYXV0bztcblxuJG5hdmJhci1tYXJnaW4tYnRuOiAgICAgICAgICAgICAgMTVweCAgM3B4O1xuXG4kaGVpZ2h0LWljb246XHRcdFx0XHRcdCA2NHB4ICFkZWZhdWx0O1xuJHdpZHRoLWljb246XHRcdFx0XHRcdCA2NHB4ICFkZWZhdWx0O1xuJHBhZGRpbmctaWNvbjpcdFx0XHRcdFx0IDEycHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1pY29uOlx0XHQgICAgIDE1cHggIWRlZmF1bHQ7XG5cbiRzaXplLWljb246IFx0XHRcdFx0XHQgNjRweDtcbiRzaXplLWljb24tc206IFx0XHRcdFx0XHQgMzJweDtcblxuXG4kaGVpZ2h0LWljb24tc206XHRcdFx0XHQgMzJweDtcbiR3aWR0aC1pY29uLXNtOlx0XHRcdFx0XHQgMzJweDtcbiRwYWRkaW5nLWljb24tc206XHRcdFx0ICAgICA0cHg7XG4kYm9yZGVyLXJhZGl1cy1pY29uLXNtOlx0XHRcdCA3cHg7XG5cbiRoZWlnaHQtaWNvbi1tZXNzYWdlOlx0XHRcdCA0MHB4O1xuJHdpZHRoLWljb24tbWVzc2FnZTpcdFx0XHQgNDBweDtcblxuJGhlaWdodC1pY29uLW1lc3NhZ2Utc206IFx0XHQgMjBweDtcbiR3aWR0aC1pY29uLW1lc3NhZ2Utc206XHRcdFx0IDIwcHg7XG5cblxuXG4kd2hpdGUtbmF2YmFyOiAgICAgICAgICAgICAgcmdiYSgjRkZGRkZGLCAuOTYpO1xuJGJsdWUtbmF2YmFyOiAgICAgICAgICAgICAgIHJnYmEoIzM0QUNEQywgLjk4KTtcbiRhenVyZS1uYXZiYXI6ICAgICAgICAgICAgICByZ2JhKCM1QkNBRkYsIC45OCk7XG4kZ3JlZW4tbmF2YmFyOiAgICAgICAgICAgICAgcmdiYSgjNENEOTY0LCAuOTgpO1xuJG9yYW5nZS1uYXZiYXI6ICAgICAgICAgICAgIHJnYmEoI0ZGOTUwMCwgLjk4KTtcbiRyZWQtbmF2YmFyOiAgICAgICAgICAgICAgICByZ2JhKCNGRjRDNDAsIC45OCk7XG5cbiRiZy1udWRlOiAgICAgICAgICAgICAgICNGRkZDRjUgIWRlZmF1bHQ7XG4kYmctcHJpbWFyeTogICAgICAgICAgICBsaWdodGVuKCRwcmltYXJ5LWNvbG9yLCA3JSkgIWRlZmF1bHQ7XG4kYmctaW5mbzogICAgICAgICAgICAgICBsaWdodGVuKCRpbmZvLWNvbG9yLCA3JSkgIWRlZmF1bHQ7XG4kYmctc3VjY2VzczogICAgICAgICAgICBsaWdodGVuKCRzdWNjZXNzLWNvbG9yLCA3JSkgIWRlZmF1bHQ7XG4kYmctd2FybmluZzogICAgICAgICAgICBsaWdodGVuKCR3YXJuaW5nLWNvbG9yLCA3JSkgIWRlZmF1bHQ7XG4kYmctZGFuZ2VyOiAgICAgICAgICAgICBsaWdodGVuKCRkYW5nZXItY29sb3IsIDclKSAhZGVmYXVsdDtcbiRiZy1icm93bjogICAgICAgICAgICAgIGxpZ2h0ZW4oJGJyb3duLWNvbG9yLCA3JSkgIWRlZmF1bHQ7XG4kYmctcHVycGxlOiAgICAgICAgICAgICBsaWdodGVuKCRwdXJwbGUtY29sb3IsIDclKSAhZGVmYXVsdDtcblxuJHByZWxvYWRlci1jb2xvcjogICAgICAgICAgI0Q4RDFDOSAhZGVmYXVsdDtcblxuJGZpbHRlci1ibHVlOiAgICAgICAgIGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMTAlKTtcbiRmaWx0ZXItYXp1cmU6ICAgICAgICBkYXJrZW4oJGluZm8tY29sb3IsIDEwJSk7XG4kZmlsdGVyLWdyZWVuOiAgICAgICAgZGFya2VuKCRzdWNjZXNzLWNvbG9yLCAxMCUpO1xuJGZpbHRlci1vcmFuZ2U6ICAgICAgIGRhcmtlbigkd2FybmluZy1jb2xvciwgMTAlKTtcbiRmaWx0ZXItcmVkOiAgICAgICAgICBkYXJrZW4oJGRhbmdlci1jb2xvciwgMTAlKTtcblxuXG4kdG9wYmFyLXg6ICAgICAgICAgICAgIHRvcGJhci14ICFkZWZhdWx0O1xuJHRvcGJhci1iYWNrOiAgICAgICAgICB0b3BiYXItYmFjayAhZGVmYXVsdDtcbiRib3R0b21iYXIteDogICAgICAgICAgYm90dG9tYmFyLXggIWRlZmF1bHQ7XG4kYm90dG9tYmFyLWJhY2s6ICAgICAgIGJvdHRvbWJhci1iYWNrICFkZWZhdWx0O1xuXG4kc29jaWFsLWZhY2Vib29rOiBcdFx0XHQjM2I1OTk4O1xuJHNvY2lhbC10d2l0dGVyOiBcdFx0XHQjNTVhY2VlO1xuJHNvY2lhbC1waW50ZXJlc3Q6IFx0XHRcdCNjYzIxMjc7XG4kc29jaWFsLWdvb2dsZTogXHRcdFx0I2RkNGIzOTtcbiRzb2NpYWwtbGlua2VkaW46IFx0XHRcdCMwOTc2YjQ7XG4kc29jaWFsLWRyaWJiYmxlOiBcdFx0XHQjZWE0Yzg5O1xuJHNvY2lhbC1naXRodWI6IFx0XHRcdCMzMzMzMzM7XG4kc29jaWFsLXlvdXR1YmU6IFx0XHRcdCNlNTJkMjc7XG4kc29jaWFsLWluc3RhZ3JhbTogXHRcdCAgICAjMTI1Njg4O1xuJHNvY2lhbC1yZWRkaXQ6IFx0XHRcdCNmZjQ1MDA7XG4kc29jaWFsLXR1bWJscjogXHRcdFx0IzM1NDY1YztcblxuJGJhY2tncm91bmQtbGlnaHQtZ3JleTogICAgICNFOEU3RTMgIWRlZmF1bHQ7XG4kYmFja2dyb3VuZC1saWdodGVyLWdyZXk6ICAgI0YwRUZFQiAhZGVmYXVsdDtcbiRmb250LWJhY2tncm91bmQtbGlnaHQtZ3JleTogIzlDOUI5OSAhZGVmYXVsdDtcbiRmb250LWhvdmVyLWJhY2tncm91bmQtbGlnaHQtZ3JleTogIzVFNUU1QyAhZGVmYXVsdDtcblxuLy8gdmFyaWFibGVzIHVzZWQgaW4gaGVhZGVyc1xuJGhlYWRlci1iYWNrZ3JvdW5kOiAgICAgICAgICNCMkFGQUIgIWRlZmF1bHQ7XG5cbiRmaWx0ZXItcHJpbWFyeTogICAgICAgICBkYXJrZW4oJHByaW1hcnktY29sb3IsIDEwJSk7XG4kZmlsdGVyLWluZm86ICAgICAgICBkYXJrZW4oJGluZm8tY29sb3IsIDEwJSk7XG4kZmlsdGVyLXN1Y2Nlc3M6ICAgICAgICBkYXJrZW4oJHN1Y2Nlc3MtY29sb3IsIDEwJSk7XG4kZmlsdGVyLXdhcm5pbmc6ICAgICAgIGRhcmtlbigkd2FybmluZy1jb2xvciwgMTAlKTtcbiRmaWx0ZXItZGFuZ2VyOiAgICAgICAgICBkYXJrZW4oJGRhbmdlci1jb2xvciwgMTAlKTtcblxuLy8gdmFyaWFibGUgdXNlZCBpbiBmb290ZXJzXG4kYmxhY2stZm9vdGVyLWJnOiAgICAgICAgICAgICMyNTI0MjIgIWRlZmF1bHQ7XG4kYnJvd24tZm9udC1jb2xvcjogICAgICAgICAgICNBNDlFOUUgIWRlZmF1bHQ7XG4kYnJvd24tZm9udC1jb2xvci1ob3ZlcjogICAgICNGMUVBRTAgIWRlZmF1bHQ7XG5cbi8vdmFyaWFibGVzIHVzZWQgaW4gY2FyZHNcbiRjYXJkLWJsYWNrLWNvbG9yOiAgICAgICAgICAgIzMzMzMzMyAhZGVmYXVsdDtcbiRjYXJkLW11dGVkLWNvbG9yOiAgICAgICAgICAgI2NjYyAhZGVmYXVsdDtcblxuJGNhcmQtYmFja2dyb3VuZC1ibHVlOiAgICAgICNiOGQ4ZDggIWRlZmF1bHQ7XG4kY2FyZC1mb250LWJsdWU6ICAgICAgICAgICAgIzUwNjU2OCAhZGVmYXVsdDtcbiRjYXJkLXN1YnRpdGxlLWJsdWU6ICAgICAgICAjN2E5ZTlmICFkZWZhdWx0O1xuXG4kY2FyZC1iYWNrZ3JvdW5kLWdyZWVuOiAgICAgICNkNWU1YTMgIWRlZmF1bHQ7XG4kY2FyZC1mb250LWdyZWVuOiAgICAgICAgICAgICM2MDc3M2QgIWRlZmF1bHQ7XG4kY2FyZC1zdWJ0aXRsZS1ncmVlbjogICAgICAgICM5MmFjNTYgIWRlZmF1bHQ7XG5cbiRjYXJkLWJhY2tncm91bmQteWVsbG93OiAgICAgICNmZmUyOGMgIWRlZmF1bHQ7XG4kY2FyZC1mb250LXllbGxvdzogICAgICAgICAgICAjYjI1ODI1ICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUteWVsbG93OiAgICAgICAgI2Q4ODcxNSAhZGVmYXVsdDtcblxuJGNhcmQtYmFja2dyb3VuZC1icm93bjogICAgICAjZDZjMWFiICFkZWZhdWx0O1xuJGNhcmQtZm9udC1icm93bjogICAgICAgICAgICAjNzU0NDJlICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUtYnJvd246ICAgICAgICAjYTQ3ZTY1ICFkZWZhdWx0O1xuXG4kY2FyZC1iYWNrZ3JvdW5kLXB1cnBsZTogICAgICAjYmFhOWJhICFkZWZhdWx0O1xuJGNhcmQtZm9udC1wdXJwbGU6ICAgICAgICAgICAgIzNhMjgzZCAhZGVmYXVsdDtcbiRjYXJkLXN1YnRpdGxlLXB1cnBsZTogICAgICAgICM1YTI4M2QgIWRlZmF1bHQ7XG5cbiRjYXJkLWJhY2tncm91bmQtb3JhbmdlOiAgICAgICNmZjhmNWUgIWRlZmF1bHQ7XG4kY2FyZC1mb250LW9yYW5nZTogICAgICAgICAgICAjNzcyNTEwICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUtb3JhbmdlOiAgICAgICAgI2U5NWUzNyAhZGVmYXVsdDtcblxuJGNhcmQtYmFja2dyb3VuZC1wcmltYXJ5OiAgICAgIzQyN0M4OSAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1jb2xvcjogICAgICAgICAgICM0MjdDODkgIWRlZmF1bHQ7XG5cbiRjb2xvci1yZWQtZXJyb3I6IHJnYigxODUsIDc0LCA3MikgIWRlZmF1bHQ7XG4kY29sb3ItZ3JleS1hcnJvdzogcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjIpICFkZWZhdWx0O1xuXG4kd2lkdGgtZGVmYXVsdDogMjIwcHggIWRlZmF1bHQ7IC8vIDMgOTYwcHgtZ3JpZCBjb2x1bW5zXG5cbiR6aW5kZXgtc2VsZWN0LWRyb3Bkb3duOiAxMDYwICFkZWZhdWx0OyAvLyBtdXN0IGJlIGhpZ2hlciB0aGFuIGEgbW9kYWwgYmFja2dyb3VuZCAoMTA1MClcblxuLy8qKiBQbGFjZWhvbGRlciB0ZXh0IGNvbG9yXG4kaW5wdXQtY29sb3ItcGxhY2Vob2xkZXI6ICM5OTkgIWRlZmF1bHQ7XG5cblxuLy8gbWVkaWEgaGVhZGVyIFxuJG1lZGlhLWhlYWRlci1oZWlnaHQ6IDEwMHB4OyIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9wYXBlci1raXQvdmFyaWFibGVzXCI7XG5cbi5zdGlja3kge1xuICAgIGhlaWdodDogJG1lZGlhLWhlYWRlci1oZWlnaHQ7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIHRvcDogMDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggLThweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuXG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxuXG4gICAgI3NlYXJjaCB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICM3NTc1NzU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogNXB4IDBweCA1cHggMTVweDtcbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICY6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXG4gICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYnVyZ2VyLWNvbnRhaW5lciB7XG5cdHdpZHRoOiA4MHB4O1xuXHRoZWlnaHQ6IDgwcHg7XG5cdG1hcmdpbjogNXB4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJ1cmdlciB7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxpbmUge1xuXHR3aWR0aDogMjVweDtcblx0aGVpZ2h0OiAycHg7XG5cdGJhY2tncm91bmQ6ICMwMDAwMDA7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiA1MCU7XG5cdGxlZnQ6IDUwJTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5saW5lOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAtNXB4O1xuXHRsZWZ0OiA1MCU7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuXHR0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5saW5lOmFmdGVyIHtcblx0Y29udGVudDogXCJcIjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDVweDtcblx0bGVmdDogNTAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0YmFja2dyb3VuZDogIzAwMDAwMDtcblx0dHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4uYnVyZ2VyLmFjdGl2ZSAjb25lIHtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5idXJnZXIuYWN0aXZlICNvbmU6YmVmb3JlIHtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5idXJnZXIuYWN0aXZlICNvbmU6YWZ0ZXIge1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/media-header/media-header.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/media-header/media-header.component.ts ***!
  \*******************************************************************/
/*! exports provided: MediaHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaHeaderComponent", function() { return MediaHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MediaHeaderComponent = /** @class */ (function () {
    function MediaHeaderComponent(fb) {
        this.fb = fb;
    }
    MediaHeaderComponent.prototype.initFormControls = function () {
        this.form = this.fb.group({
            search: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    MediaHeaderComponent.prototype.toogleMenu = function () {
        var main = document.querySelector('.main-wraper');
        var menu = document.querySelector('.media-menu');
        main.classList.toggle('menu-closed');
        menu.classList.toggle('menu-closed');
    };
    MediaHeaderComponent.prototype.submit = function () {
        if (this.form.valid) {
            console.log(this.form.value);
        }
    };
    MediaHeaderComponent.prototype.ngOnInit = function () {
        this.initFormControls();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MediaHeaderComponent.prototype, "type", void 0);
    MediaHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-media-header',
            template: __webpack_require__(/*! ./media-header.component.html */ "./src/app/components/media-header/media-header.component.html"),
            styles: [__webpack_require__(/*! ./media-header.component.scss */ "./src/app/components/media-header/media-header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], MediaHeaderComponent);
    return MediaHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"media-menu\">\n  <div style=\"padding: 3px;\">\n    <a [routerLink]=\"['/']\">\n      <img src=\"assets/img/brand/logo-nav.png\" class=\" img-fluid\" alt=\"\">\n\n    </a>\n  </div>\n\n  <div *ngFor=\"let menu of menuItens\" [class.active]=\"selected === menu.value\" class=\"content-type\" (click)=\"select(menu)\"\n    [id]=\"menu.value\">\n    <div>\n      <i [class]=\"menu.icon\"></i>\n      <p>{{menu.label}}</p>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*      light colors - used for select dropdown         */\n.media-menu {\n  background: #FFFFFF;\n  width: 150px;\n  position: fixed;\n  left: 0;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  vertical-align: middle;\n  flex-direction: column;\n  z-index: 9;\n  transition: 0.3s all; }\n.media-menu.menu-closed {\n    -webkit-transform: translateX(-150px);\n            transform: translateX(-150px);\n    transition: 0.3s all; }\n.media-menu div {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    vertical-align: middle;\n    align-items: center;\n    width: 100%; }\n.media-menu .content-type {\n    cursor: pointer; }\n.media-menu .content-type div {\n      color: #FFFFFF;\n      display: block; }\n.media-menu .content-type div i {\n      font-size: 2em !important; }\n.media-menu .content-type div i,\n    .media-menu .content-type div p {\n      color: #3e3e3e;\n      font-size: 1.4em; }\n.media-menu .content-type.active {\n      background: #9F7425; }\n.media-menu .content-type.active div i,\n      .media-menu .content-type.active div p {\n        color: #FFFFFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZmxhdmlvLXNpcXVlaXJhL3NyYy9hc3NldHMvc2Fzcy9wYXBlci1raXQvX3ZhcmlhYmxlcy5zY3NzIiwiL3Zhci93d3cvaHRtbC9mbGF2aW8tc2lxdWVpcmEvc3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RUEsMERBQTBEO0FDdEUxRDtFQUNJLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osZ0JBQWU7RUFDZixRQUFPO0VBQ1AsY0FBYTtFQUNiLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsb0JBQW1CO0VBQ25CLG1CQUFrQjtFQUNsQix1QkFBc0I7RUFDdEIsdUJBQXNCO0VBQ3RCLFdBQVU7RUFDVixxQkFBb0IsRUFnRHZCO0FBN0REO0lBaUJRLHNDQUE2QjtZQUE3Qiw4QkFBNkI7SUFDN0IscUJBQW9CLEVBQ3ZCO0FBbkJMO0lBc0JRLFFBQU87SUFDUCxjQUFhO0lBQ2Isd0JBQXVCO0lBQ3ZCLHVCQUFzQjtJQUN0QixvQkFBbUI7SUFDbkIsWUFBVyxFQUNkO0FBNUJMO0lBOEJRLGdCQUFlLEVBNkJsQjtBQTNETDtNQWlDWSxlQUFjO01BQ2QsZUFBYyxFQUNqQjtBQW5DVDtNQXNDWSwwQkFBd0IsRUFFM0I7QUF4Q1Q7O01BNENZLGVBQWM7TUFDZCxpQkFBZ0IsRUFFbkI7QUEvQ1Q7TUFrRFksb0JEY3dCLEVDUDNCO0FBekRUOztRQXNEZ0IsZUFBYyxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZvbnQtY29sb3I6ICAgICAgICAgICAgICAgICAjNjY2MTViICFkZWZhdWx0O1xuJGZpbGwtZm9udC1jb2xvcjogICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogICAgICdNb250c2VycmF0JywgXCJIZWx2ZXRpY2FcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRub25lOiAgICAgICAgICAgICAgICAgICAgICAgMCAgICFkZWZhdWx0O1xuJGJvcmRlci10aGluOiAgICAgICAgICAgICAgICAxcHggIWRlZmF1bHQ7XG4kYm9yZGVyLXRoaWNrOiAgICAgICAgICAgICAgIDJweCAhZGVmYXVsdDtcblxuJHdoaXRlLWNvbG9yOiAgICAgICAgICAgICAgICAjRkZGRkZGICFkZWZhdWx0O1xuJHdoaXRlLWJnOiAgICAgICAgICAgICAgICAgICAjRkZGRkZGICFkZWZhdWx0O1xuJHdoaXRlLXN0YXRlcy1jb2xvcjogICAgICAgICByZ2JhKCR3aGl0ZS1jb2xvciwgMC44KTtcblxuJHNtb2tlLWJnOiAgICAgICAgICAgICAgICAgICAjRjVGNUY1ICFkZWZhdWx0O1xuJHBhbGUtYmc6ICAgICAgICAgICAgICAgICAgICAjRkZGQ0Y1ICFkZWZhdWx0O1xuJG1lZGl1bS1wYWxlLWJnOiAgICAgICAgICAgICAjRjFFQUUwICFkZWZhdWx0O1xuXG4kdGFibGUtbGluZS1jb2xvcjogICAgICAgICAgICNjY2MgIWRlZmF1bHQ7XG4kbXV0ZWQtY29sb3I6ICAgICAgICAgICAgICAgICNhNDllOTMgIWRlZmF1bHQ7XG5cbiRibGFjay1iZzogICAgICAgICAgICAgICAgICAgcmdiYSgzMCwzMCwzMCwuOTcpICFkZWZhdWx0O1xuXG4kYmxhY2stY29sb3I6ICAgICAgICAgICAgICAgICMzMzMzMzMgIWRlZmF1bHQ7XG4kYmxhY2staHI6ICAgICAgICAgICAgICAgICAgICM0NDQ0NDQgIWRlZmF1bHQ7XG5cbiRsaWdodC1ncmF5OiAgICAgICAgICAgICAgICAgI0UzRTNFMyAhZGVmYXVsdDtcbiRtZWRpdW0tZ3JheTogICAgICAgICAgICAgICAgI0RERERERCAhZGVmYXVsdDtcbiRkYXJrLWdyYXk6ICAgICAgICAgICAgICAgICAgIzlBOUE5QSAhZGVmYXVsdDtcblxuJHBsYWNlaG9sZGVyLWdyYXk6ICAgICAgICAgICByZ2JhKDIxMCwgMjEwLCAyMTAsIDEpICAhZGVmYXVsdDtcblxuJGdyYXktaW5wdXQtYmc6ICAgICAgICAgICAgICAjZmZmY2Y1ICFkZWZhdWx0O1xuJGRhbmdlci1pbnB1dC1iZzogICAgICAgICAgICAjRkZDMEE0ICFkZWZhdWx0O1xuJHN1Y2Nlc3MtaW5wdXQtYmc6ICAgICAgICAgICAjQUJGM0NCICFkZWZhdWx0O1xuJG90aGVyLW1lZGl1bS1ncmF5OiAgICAgICAgICAjQTQ5RTkzICFkZWZhdWx0O1xuJHRyYW5zcGFyZW50LWJnOiAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJGRlZmF1bHQtY29sb3I6ICAgICAgICAgICAgICAjNjY2MTVCICFkZWZhdWx0O1xuJGRlZmF1bHQtYmc6ICAgICAgICAgICAgICAgICAjNjY2MTVCICFkZWZhdWx0O1xuJGRlZmF1bHQtc3RhdGVzLWNvbG9yOiAgICAgICAjNDAzRDM5ICFkZWZhdWx0O1xuXG4kcHJpbWFyeS1jb2xvcjogICAgICAgICAgICAgICM1MWNiY2UgIWRlZmF1bHQ7XG4kcHJpbWFyeS1zdGF0ZXMtY29sb3I6ICAgICAgIGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMTAlKSAhZGVmYXVsdDtcblxuJHN1Y2Nlc3MtY29sb3I6ICAgICAgICAgICAgICAjNmJkMDk4ICFkZWZhdWx0O1xuJHN1Y2Nlc3Mtc3RhdGVzLWNvbG9yOiAgICAgICBkYXJrZW4oJHN1Y2Nlc3MtY29sb3IsIDEwJSkgIWRlZmF1bHQ7XG5cbiRpbmZvLWNvbG9yOiAgICAgICAgICAgICAgICAgIzUxYmNkYSAhZGVmYXVsdDtcbiRpbmZvLXN0YXRlcy1jb2xvcjogICAgICAgICAgZGFya2VuKCRpbmZvLWNvbG9yLCAxMCUpICFkZWZhdWx0O1xuXG4kd2FybmluZy1jb2xvcjogICAgICAgICAgICAgICNmYmM2NTggIWRlZmF1bHQ7XG4kd2FybmluZy1zdGF0ZXMtY29sb3I6ICAgICAgIGRhcmtlbigkd2FybmluZy1jb2xvciwgMTAlKSAhZGVmYXVsdDtcblxuJGRhbmdlci1jb2xvcjogICAgICAgICAgICAgICAjZjU1OTNkICFkZWZhdWx0O1xuJGRhbmdlci1zdGF0ZXMtY29sb3I6ICAgICAgICBkYXJrZW4oJGRhbmdlci1jb2xvciwgOCUpICFkZWZhdWx0O1xuXG4kbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICM2NjY2NjYgIWRlZmF1bHQ7XG5cbiRwdXJwbGUtY29sb3I6ICAgICAgICAgICAgICAgI2MxNzhjMSAhZGVmYXVsdDtcbiRwdXJwbGUtc3RhdGVzLWNvbG9yOiAgICAgICAgZGFya2VuKCRwdXJwbGUtY29sb3IsIDglKSAhZGVmYXVsdDtcblxuJGJyb3duLWNvbG9yOiAgICAgICAgICAgICAgICAjZGNiMjg1ICFkZWZhdWx0O1xuJGJyb3duLXN0YXRlcy1jb2xvcjogICAgICAgICBkYXJrZW4oJGJyb3duLWNvbG9yLCA4JSkgIWRlZmF1bHQ7XG5cblxuLy8gQlJBTkQgVkFSSUFCTEVTXG4kbWFpbi1jb2xvcjogICAgICAgICAgICAgICAgICM5Rjc0MjUgIWRlZmF1bHQ7XG4kc2Vjb25kLWNvbG9yOiAgICAgICAgICAgICAgICNFQkQ1ODIgIWRlZmF1bHQ7XG4kYmFja2dyb3VuZC1jb2xvcjogICAgICAgICAgICMwMDAwMDAgIWRlZmF1bHQ7XG5cblxuXG4vKiAgICAgIGxpZ2h0IGNvbG9ycyAtIHVzZWQgZm9yIHNlbGVjdCBkcm9wZG93biAgICAgICAgICovXG5cbiRsaWdodC1ibHVlOiAgICAgICAgICAgICAgICAgcmdiYSgkcHJpbWFyeS1jb2xvciwgLjIpO1xuJGxpZ2h0LWF6dXJlOiAgICAgICAgICAgICAgICByZ2JhKCRpbmZvLWNvbG9yLCAuMik7XG4kbGlnaHQtZ3JlZW46ICAgICAgICAgICAgICAgIHJnYmEoJHN1Y2Nlc3MtY29sb3IsIC4yKTtcbiRsaWdodC1vcmFuZ2U6ICAgICAgICAgICAgICAgcmdiYSgkd2FybmluZy1jb2xvciwgLjIpO1xuJGxpZ2h0LXJlZDogICAgICAgICAgICAgICAgICByZ2JhKCRkYW5nZXItY29sb3IsIC4yKTtcblxuXG4vLz09IENvbXBvbmVudHNcbi8vXG4kcGFkZGluZy1iYXNlLXZlcnRpY2FsOiAgICAgICAgIDdweCAhZGVmYXVsdDtcbiRwYWRkaW5nLWJhc2UtaG9yaXpvbnRhbDogICAgICAgMThweCAhZGVmYXVsdDtcblxuJHBhZGRpbmctcm91bmQtdmVydGljYWw6ICAgICAgICA5cHggIWRlZmF1bHQ7XG4kcGFkZGluZy1yb3VuZC1ob3Jpem9udGFsOiAgICAgMThweCAhZGVmYXVsdDtcblxuJHBhZGRpbmctc2ltcGxlLXZlcnRpY2FsOiAgICAgIDEwcHggIWRlZmF1bHQ7XG4kcGFkZGluZy1zaW1wbGUtaG9yaXpvbnRhbDogICAgMThweCAhZGVmYXVsdDtcblxuJHBhZGRpbmctbGFyZ2UtdmVydGljYWw6ICAgICAgIDExcHggIWRlZmF1bHQ7XG4kcGFkZGluZy1sYXJnZS1ob3Jpem9udGFsOiAgICAgMzBweCAhZGVmYXVsdDtcblxuJHBhZGRpbmctc21hbGwtdmVydGljYWw6ICAgICAgICA0cHggIWRlZmF1bHQ7XG4kcGFkZGluZy1zbWFsbC1ob3Jpem9udGFsOiAgICAgMTBweCAhZGVmYXVsdDtcblxuJHBhZGRpbmcteHMtdmVydGljYWw6ICAgICAgICAgICAycHggIWRlZmF1bHQ7XG4kcGFkZGluZy14cy1ob3Jpem9udGFsOiAgICAgICAgIDVweCAhZGVmYXVsdDtcblxuJHBhZGRpbmctbGFiZWwtdmVydGljYWw6ICAgICAgICAycHggIWRlZmF1bHQ7XG4kcGFkZGluZy1sYWJlbC1ob3Jpem9udGFsOiAgICAgMTJweCAhZGVmYXVsdDtcblxuLy8gcGFkZGluZyBmb3IgbGlua3MgaW5zaWRlIGRyb3Bkb3duIG1lbnVcbiRwYWRkaW5nLWRyb3Bkb3duLXZlcnRpY2FsOiAgICAgMTBweCAhZGVmYXVsdDtcbiRwYWRkaW5nLWRyb3Bkb3duLWhvcml6b250YWw6ICAgMTVweCAhZGVmYXVsdDtcblxuJG1hcmdpbi1sYXJnZS12ZXJ0aWNhbDogICAgICAgIDMwcHggIWRlZmF1bHQ7XG4kbWFyZ2luLWJhc2UtdmVydGljYWw6ICAgICAgICAgMTVweCAhZGVmYXVsdDtcblxuLy8gYm9yZGVyIHJhZGl1cyBmb3IgYnV0dG9uc1xuJGJvcmRlci1yYWRpdXMtbm9uZTogICAgICAgICAgICAgMHB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtYnRuLXNtYWxsOiAgICAgIDI2cHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1idG4tYmFzZTogICAgICAgMjBweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWJ0bi1sYXJnZTogICAgICA1MHB4ICFkZWZhdWx0O1xuXG5cbiRtYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgICAwIDAgMTBweCAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtc21hbGw6ICAgICAgICAgICAzcHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1iYXNlOiAgICAgICAgICAgIDRweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxhcmdlOiAgICAgICAgICAgNnB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMteC1sYXJnZTogICAgICAgICA4cHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1leHRyZW1lOiAgICAgICAgIDEycHggIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzLW5vbmUtdG9wOiAgICAgICRib3JkZXItcmFkaXVzLW5vbmUgJGJvcmRlci1yYWRpdXMtbm9uZSAwIDAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1ub25lLWJvdHRvbTogICAwIDAgJGJvcmRlci1yYWRpdXMtbm9uZSAkYm9yZGVyLXJhZGl1cy1ub25lICFkZWZhdWx0O1xuXG4kYm9yZGVyLXJhZGl1cy1zbWFsbC10b3A6ICAgICAgJGJvcmRlci1yYWRpdXMtc21hbGwgJGJvcmRlci1yYWRpdXMtc21hbGwgMCAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtc21hbGwtYm90dG9tOiAgIDAgMCAkYm9yZGVyLXJhZGl1cy1zbWFsbCAkYm9yZGVyLXJhZGl1cy1zbWFsbCAhZGVmYXVsdDtcblxuJGJvcmRlci1yYWRpdXMtbGFyZ2UtdG9wOiAgICAgICRib3JkZXItcmFkaXVzLWxhcmdlICRib3JkZXItcmFkaXVzLWxhcmdlIDAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxhcmdlLWJvdHRvbTogICAwIDAgJGJvcmRlci1yYWRpdXMtbGFyZ2UgJGJvcmRlci1yYWRpdXMtbGFyZ2UgIWRlZmF1bHQ7XG5cbiRidG4tcm91bmQtcmFkaXVzOiAgICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xuXG4kaGVpZ2h0LWJhc2U6ICAgICAgICAgICAgICAgICAgNDBweCAhZGVmYXVsdDtcblxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAgICAgIDE0cHggIWRlZmF1bHQ7XG4kZm9udC1zaXplLXNtYWxsOiAgICAgICAgICAgICAgMTJweCAhZGVmYXVsdDtcbiRmb250LXNpemUtbWVkaXVtOiAgICAgICAgICAgICAxNnB4ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1sYXJnZTogICAgICAgICAgICAgIDIwcHggIWRlZmF1bHQ7XG4kZm9udC1zaXplLWxhcmdlLW5hdmJhcjogICAgICAgMjJweCAhZGVmYXVsdDtcblxuJGZvbnQtc2l6ZS1oMTogICAgICAgICAgICAgICAgIDMuNmVtICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1oMjogICAgICAgICAgICAgICAgIDIuOGVtICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1oMzogICAgICAgICAgICAgICAgIDEuODI1ZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWg0OiAgICAgICAgICAgICAgICAgMS42ZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWg1OiAgICAgICAgICAgICAgICAgMS4zNWVtICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1oNjogICAgICAgICAgICAgICAgIDAuOWVtICFkZWZhdWx0O1xuJGZvbnQtcGFyYWdyYXBoOiAgICAgICAgICAgICAgIDE1cHggIWRlZmF1bHQ7XG4kZm9udC1zaXplLW5hdmJhcjogICAgICAgICAgICAgMTRweCAhZGVmYXVsdDtcblxuJGZvbnQtc2l6ZS1pbmZvLWhvcml6b250YWw6ICAgIDIuNWVtICFkZWZhdWx0O1xuXG4kZm9udC13ZWlnaHQtbGlnaHQ6ICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ub3JtYWw6ICAgICAgICAgNDAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LXNlbWk6ICAgICAgICAgICA1MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZDogICAgICAgICAgIDYwMCAhZGVmYXVsdDtcblxuJGxpbmUtaGVpZ2h0LXNtYWxsOiAgICAgICAgICAgIDIwcHggIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtZ2VuZXJhbDogICAgICAgICAgMS41ZW0gIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICAzNnB4ICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgNTRweCAhZGVmYXVsdDtcblxuXG4kYm9yZGVyLXJhZGl1cy10b3A6ICAgICAgICAxMHB4IDEwcHggMCAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtYm90dG9tOiAgICAgMCAwIDEwcHggMTBweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWRyb3Bkb3duOiAgIDEwcHggMTBweCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLXNoYWRvdzogICAgICAgICAgMCAycHggcmdiYSgxNywgMTYsIDE1LCAwLjEpLCAwIDJweCAxMHB4IHJnYmEoMTcsIDE2LCAxNSwgMC4xKTtcblxuJGdlbmVyYWwtdHJhbnNpdGlvbi10aW1lOiAgMzAwbXMgIWRlZmF1bHQ7XG5cbiRzbG93LXRyYW5zaXRpb24tdGltZTogICAgICAgICAgIDMwMG1zICFkZWZhdWx0O1xuJGRyb3Bkb3duLWNvb3JkaW5hdGVzOiAgICAgIDI5cHggLTUwcHggIWRlZmF1bHQ7XG5cbiRmYXN0LXRyYW5zaXRpb24tdGltZTogICAgICAgICAgIDE1MG1zICFkZWZhdWx0O1xuJHNlbGVjdC1jb29yZGluYXRlczogICAgICAgICA1MCUgLTQwcHggIWRlZmF1bHQ7XG5cbiR0cmFuc2l0aW9uLWxpbmVhcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVhciAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWJlemllcjogICAgICAgICBjdWJpYy1iZXppZXIoMC4zNCwgMS42MSwgMC43LCAxKSAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWVhc2U6ICAgICAgICAgICBlYXNlIDBzO1xuXG4kbmF2YmFyLXBhZGRpbmctYTogICAgICAgICAgICAgICAxMHB4IDE1cHg7XG4kbmF2YmFyLW1hcmdpbi1hOiAgICAgICAgICAgICAgICAxNXB4ICAwcHg7XG5cbiRwYWRkaW5nLXNvY2lhbC1hOiAgICAgICAgICAgICAgIDEwcHggIDVweDtcblxuJG5hdmJhci1tYXJnaW4tYS1idG46ICAgICAgICAgICAgMTVweCAzcHg7XG4kbmF2YmFyLW1hcmdpbi1hLWJ0bi1yb3VuZDogICAgICAxNnB4IDNweDtcblxuJG5hdmJhci1wYWRkaW5nLWEtaWNvbnM6ICAgICAgICAgNnB4IDE1cHg7XG4kbmF2YmFyLW1hcmdpbi1hLWljb25zOiAgICAgICAgICA2cHggIDNweDtcblxuJG5hdmJhci1wYWRkaW5nLWJyYW5kOiAgICAgICAgICAgMjBweCAxNXB4O1xuJG5hdmJhci1tYXJnaW4tYnJhbmQ6ICAgICAgICAgICAgIDVweCAgMHB4O1xuXG4kbmF2YmFyLW1hcmdpbi1icmFuZC1pY29uczogICAgICAxMnB4IGF1dG87XG5cbiRuYXZiYXItbWFyZ2luLWJ0bjogICAgICAgICAgICAgIDE1cHggIDNweDtcblxuJGhlaWdodC1pY29uOlx0XHRcdFx0XHQgNjRweCAhZGVmYXVsdDtcbiR3aWR0aC1pY29uOlx0XHRcdFx0XHQgNjRweCAhZGVmYXVsdDtcbiRwYWRkaW5nLWljb246XHRcdFx0XHRcdCAxMnB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtaWNvbjpcdFx0ICAgICAxNXB4ICFkZWZhdWx0O1xuXG4kc2l6ZS1pY29uOiBcdFx0XHRcdFx0IDY0cHg7XG4kc2l6ZS1pY29uLXNtOiBcdFx0XHRcdFx0IDMycHg7XG5cblxuJGhlaWdodC1pY29uLXNtOlx0XHRcdFx0IDMycHg7XG4kd2lkdGgtaWNvbi1zbTpcdFx0XHRcdFx0IDMycHg7XG4kcGFkZGluZy1pY29uLXNtOlx0XHRcdCAgICAgNHB4O1xuJGJvcmRlci1yYWRpdXMtaWNvbi1zbTpcdFx0XHQgN3B4O1xuXG4kaGVpZ2h0LWljb24tbWVzc2FnZTpcdFx0XHQgNDBweDtcbiR3aWR0aC1pY29uLW1lc3NhZ2U6XHRcdFx0IDQwcHg7XG5cbiRoZWlnaHQtaWNvbi1tZXNzYWdlLXNtOiBcdFx0IDIwcHg7XG4kd2lkdGgtaWNvbi1tZXNzYWdlLXNtOlx0XHRcdCAyMHB4O1xuXG5cblxuJHdoaXRlLW5hdmJhcjogICAgICAgICAgICAgIHJnYmEoI0ZGRkZGRiwgLjk2KTtcbiRibHVlLW5hdmJhcjogICAgICAgICAgICAgICByZ2JhKCMzNEFDREMsIC45OCk7XG4kYXp1cmUtbmF2YmFyOiAgICAgICAgICAgICAgcmdiYSgjNUJDQUZGLCAuOTgpO1xuJGdyZWVuLW5hdmJhcjogICAgICAgICAgICAgIHJnYmEoIzRDRDk2NCwgLjk4KTtcbiRvcmFuZ2UtbmF2YmFyOiAgICAgICAgICAgICByZ2JhKCNGRjk1MDAsIC45OCk7XG4kcmVkLW5hdmJhcjogICAgICAgICAgICAgICAgcmdiYSgjRkY0QzQwLCAuOTgpO1xuXG4kYmctbnVkZTogICAgICAgICAgICAgICAjRkZGQ0Y1ICFkZWZhdWx0O1xuJGJnLXByaW1hcnk6ICAgICAgICAgICAgbGlnaHRlbigkcHJpbWFyeS1jb2xvciwgNyUpICFkZWZhdWx0O1xuJGJnLWluZm86ICAgICAgICAgICAgICAgbGlnaHRlbigkaW5mby1jb2xvciwgNyUpICFkZWZhdWx0O1xuJGJnLXN1Y2Nlc3M6ICAgICAgICAgICAgbGlnaHRlbigkc3VjY2Vzcy1jb2xvciwgNyUpICFkZWZhdWx0O1xuJGJnLXdhcm5pbmc6ICAgICAgICAgICAgbGlnaHRlbigkd2FybmluZy1jb2xvciwgNyUpICFkZWZhdWx0O1xuJGJnLWRhbmdlcjogICAgICAgICAgICAgbGlnaHRlbigkZGFuZ2VyLWNvbG9yLCA3JSkgIWRlZmF1bHQ7XG4kYmctYnJvd246ICAgICAgICAgICAgICBsaWdodGVuKCRicm93bi1jb2xvciwgNyUpICFkZWZhdWx0O1xuJGJnLXB1cnBsZTogICAgICAgICAgICAgbGlnaHRlbigkcHVycGxlLWNvbG9yLCA3JSkgIWRlZmF1bHQ7XG5cbiRwcmVsb2FkZXItY29sb3I6ICAgICAgICAgICNEOEQxQzkgIWRlZmF1bHQ7XG5cbiRmaWx0ZXItYmx1ZTogICAgICAgICBkYXJrZW4oJHByaW1hcnktY29sb3IsIDEwJSk7XG4kZmlsdGVyLWF6dXJlOiAgICAgICAgZGFya2VuKCRpbmZvLWNvbG9yLCAxMCUpO1xuJGZpbHRlci1ncmVlbjogICAgICAgIGRhcmtlbigkc3VjY2Vzcy1jb2xvciwgMTAlKTtcbiRmaWx0ZXItb3JhbmdlOiAgICAgICBkYXJrZW4oJHdhcm5pbmctY29sb3IsIDEwJSk7XG4kZmlsdGVyLXJlZDogICAgICAgICAgZGFya2VuKCRkYW5nZXItY29sb3IsIDEwJSk7XG5cblxuJHRvcGJhci14OiAgICAgICAgICAgICB0b3BiYXIteCAhZGVmYXVsdDtcbiR0b3BiYXItYmFjazogICAgICAgICAgdG9wYmFyLWJhY2sgIWRlZmF1bHQ7XG4kYm90dG9tYmFyLXg6ICAgICAgICAgIGJvdHRvbWJhci14ICFkZWZhdWx0O1xuJGJvdHRvbWJhci1iYWNrOiAgICAgICBib3R0b21iYXItYmFjayAhZGVmYXVsdDtcblxuJHNvY2lhbC1mYWNlYm9vazogXHRcdFx0IzNiNTk5ODtcbiRzb2NpYWwtdHdpdHRlcjogXHRcdFx0IzU1YWNlZTtcbiRzb2NpYWwtcGludGVyZXN0OiBcdFx0XHQjY2MyMTI3O1xuJHNvY2lhbC1nb29nbGU6IFx0XHRcdCNkZDRiMzk7XG4kc29jaWFsLWxpbmtlZGluOiBcdFx0XHQjMDk3NmI0O1xuJHNvY2lhbC1kcmliYmJsZTogXHRcdFx0I2VhNGM4OTtcbiRzb2NpYWwtZ2l0aHViOiBcdFx0XHQjMzMzMzMzO1xuJHNvY2lhbC15b3V0dWJlOiBcdFx0XHQjZTUyZDI3O1xuJHNvY2lhbC1pbnN0YWdyYW06IFx0XHQgICAgIzEyNTY4ODtcbiRzb2NpYWwtcmVkZGl0OiBcdFx0XHQjZmY0NTAwO1xuJHNvY2lhbC10dW1ibHI6IFx0XHRcdCMzNTQ2NWM7XG5cbiRiYWNrZ3JvdW5kLWxpZ2h0LWdyZXk6ICAgICAjRThFN0UzICFkZWZhdWx0O1xuJGJhY2tncm91bmQtbGlnaHRlci1ncmV5OiAgICNGMEVGRUIgIWRlZmF1bHQ7XG4kZm9udC1iYWNrZ3JvdW5kLWxpZ2h0LWdyZXk6ICM5QzlCOTkgIWRlZmF1bHQ7XG4kZm9udC1ob3Zlci1iYWNrZ3JvdW5kLWxpZ2h0LWdyZXk6ICM1RTVFNUMgIWRlZmF1bHQ7XG5cbi8vIHZhcmlhYmxlcyB1c2VkIGluIGhlYWRlcnNcbiRoZWFkZXItYmFja2dyb3VuZDogICAgICAgICAjQjJBRkFCICFkZWZhdWx0O1xuXG4kZmlsdGVyLXByaW1hcnk6ICAgICAgICAgZGFya2VuKCRwcmltYXJ5LWNvbG9yLCAxMCUpO1xuJGZpbHRlci1pbmZvOiAgICAgICAgZGFya2VuKCRpbmZvLWNvbG9yLCAxMCUpO1xuJGZpbHRlci1zdWNjZXNzOiAgICAgICAgZGFya2VuKCRzdWNjZXNzLWNvbG9yLCAxMCUpO1xuJGZpbHRlci13YXJuaW5nOiAgICAgICBkYXJrZW4oJHdhcm5pbmctY29sb3IsIDEwJSk7XG4kZmlsdGVyLWRhbmdlcjogICAgICAgICAgZGFya2VuKCRkYW5nZXItY29sb3IsIDEwJSk7XG5cbi8vIHZhcmlhYmxlIHVzZWQgaW4gZm9vdGVyc1xuJGJsYWNrLWZvb3Rlci1iZzogICAgICAgICAgICAjMjUyNDIyICFkZWZhdWx0O1xuJGJyb3duLWZvbnQtY29sb3I6ICAgICAgICAgICAjQTQ5RTlFICFkZWZhdWx0O1xuJGJyb3duLWZvbnQtY29sb3ItaG92ZXI6ICAgICAjRjFFQUUwICFkZWZhdWx0O1xuXG4vL3ZhcmlhYmxlcyB1c2VkIGluIGNhcmRzXG4kY2FyZC1ibGFjay1jb2xvcjogICAgICAgICAgICMzMzMzMzMgIWRlZmF1bHQ7XG4kY2FyZC1tdXRlZC1jb2xvcjogICAgICAgICAgICNjY2MgIWRlZmF1bHQ7XG5cbiRjYXJkLWJhY2tncm91bmQtYmx1ZTogICAgICAjYjhkOGQ4ICFkZWZhdWx0O1xuJGNhcmQtZm9udC1ibHVlOiAgICAgICAgICAgICM1MDY1NjggIWRlZmF1bHQ7XG4kY2FyZC1zdWJ0aXRsZS1ibHVlOiAgICAgICAgIzdhOWU5ZiAhZGVmYXVsdDtcblxuJGNhcmQtYmFja2dyb3VuZC1ncmVlbjogICAgICAjZDVlNWEzICFkZWZhdWx0O1xuJGNhcmQtZm9udC1ncmVlbjogICAgICAgICAgICAjNjA3NzNkICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUtZ3JlZW46ICAgICAgICAjOTJhYzU2ICFkZWZhdWx0O1xuXG4kY2FyZC1iYWNrZ3JvdW5kLXllbGxvdzogICAgICAjZmZlMjhjICFkZWZhdWx0O1xuJGNhcmQtZm9udC15ZWxsb3c6ICAgICAgICAgICAgI2IyNTgyNSAhZGVmYXVsdDtcbiRjYXJkLXN1YnRpdGxlLXllbGxvdzogICAgICAgICNkODg3MTUgIWRlZmF1bHQ7XG5cbiRjYXJkLWJhY2tncm91bmQtYnJvd246ICAgICAgI2Q2YzFhYiAhZGVmYXVsdDtcbiRjYXJkLWZvbnQtYnJvd246ICAgICAgICAgICAgIzc1NDQyZSAhZGVmYXVsdDtcbiRjYXJkLXN1YnRpdGxlLWJyb3duOiAgICAgICAgI2E0N2U2NSAhZGVmYXVsdDtcblxuJGNhcmQtYmFja2dyb3VuZC1wdXJwbGU6ICAgICAgI2JhYTliYSAhZGVmYXVsdDtcbiRjYXJkLWZvbnQtcHVycGxlOiAgICAgICAgICAgICMzYTI4M2QgIWRlZmF1bHQ7XG4kY2FyZC1zdWJ0aXRsZS1wdXJwbGU6ICAgICAgICAjNWEyODNkICFkZWZhdWx0O1xuXG4kY2FyZC1iYWNrZ3JvdW5kLW9yYW5nZTogICAgICAjZmY4ZjVlICFkZWZhdWx0O1xuJGNhcmQtZm9udC1vcmFuZ2U6ICAgICAgICAgICAgIzc3MjUxMCAhZGVmYXVsdDtcbiRjYXJkLXN1YnRpdGxlLW9yYW5nZTogICAgICAgICNlOTVlMzcgIWRlZmF1bHQ7XG5cbiRjYXJkLWJhY2tncm91bmQtcHJpbWFyeTogICAgICM0MjdDODkgIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAjNDI3Qzg5ICFkZWZhdWx0O1xuXG4kY29sb3ItcmVkLWVycm9yOiByZ2IoMTg1LCA3NCwgNzIpICFkZWZhdWx0O1xuJGNvbG9yLWdyZXktYXJyb3c6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMC4yKSAhZGVmYXVsdDtcblxuJHdpZHRoLWRlZmF1bHQ6IDIyMHB4ICFkZWZhdWx0OyAvLyAzIDk2MHB4LWdyaWQgY29sdW1uc1xuXG4kemluZGV4LXNlbGVjdC1kcm9wZG93bjogMTA2MCAhZGVmYXVsdDsgLy8gbXVzdCBiZSBoaWdoZXIgdGhhbiBhIG1vZGFsIGJhY2tncm91bmQgKDEwNTApXG5cbi8vKiogUGxhY2Vob2xkZXIgdGV4dCBjb2xvclxuJGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyOiAjOTk5ICFkZWZhdWx0O1xuXG5cbi8vIG1lZGlhIGhlYWRlciBcbiRtZWRpYS1oZWFkZXItaGVpZ2h0OiAxMDBweDsiLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvcGFwZXIta2l0L3ZhcmlhYmxlc1wiO1xuLm1lZGlhLW1lbnUge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgei1pbmRleDogOTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcblxuXG4gICAgJi5tZW51LWNsb3NlZHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTBweCk7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xuICAgIH1cbiAgICBcbiAgICBkaXYge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5jb250ZW50LXR5cGUge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICBkaXYgaSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJlbSFpbXBvcnRhbnQ7XG4gICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgZGl2IGksXG4gICAgICAgIGRpdiBwIHtcbiAgICAgICAgICAgIGNvbG9yOiAjM2UzZTNlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkbWFpbi1jb2xvcjtcblxuICAgICAgICAgICAgZGl2IGksXG4gICAgICAgICAgICBkaXYgcCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIFxuICAgIH1cblxufVxuICAgIFxuIl19 */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(router) {
        this.router = router;
        this.stateLoad = false;
        this.menuItens = [
            { min: 'artigos', value: 'articles', label: 'Artigos', icon: 'fa fa-newspaper-o' },
            { min: 'decisoes', value: 'decisions', label: 'Decisões', icon: 'fa fa-newspaper-o' },
            { min: 'noticias', value: 'news', label: 'Notícias', icon: 'fa fa-newspaper-o' },
            { min: 'videos', value: 'videos', label: 'Vídeos', icon: 'fa fa-youtube red' }
        ];
        this.selectMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MenuComponent.prototype.select = function (type, click) {
        if (click === void 0) { click = true; }
        this.selected = type.value;
        if ((!this.mode) || (this.mode && this.stateLoad)) {
            if (click) {
                this.router.navigate(["/midia/" + type.min]);
            }
            this.selectMenu.emit({ type: type, click: click });
        }
    };
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.select(this.menuItens.filter(function (menu) { return menu.value === _this.type; })[0]);
    };
    MenuComponent.prototype.ngAfterViewChecked = function () {
        if (this.mode) {
            this.stateLoad = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MenuComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MenuComponent.prototype, "mode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MenuComponent.prototype, "selectMenu", void 0);
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/components/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/more-info/more-info.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/more-info/more-info.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"more-info\">\n\n  <div class=\"container\" style=\"padding-bottom: 60px;\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"section-heading text-center\">\n          <h2>Links Úteis</h2>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6 col-md-6 col-xs-12\" style=\"display: flex; align-items: center; vertical-align: middle; justify-content: center;\">\n        <div class=\"footer-info-content\">\n          <ul style=\"padding: 0\">\n\n            <li class=\"link\"><a  href=\"http://www.incra.gov.br/\" target=\"_blank\">- INCRA - Instituto Nacional de\n                Colonização e Reforma Agrária</a></li>\n            <li class=\"link\"><a  href=\"http://www.patrimoniodetodos.gov.br/#/\" target=\"_blank\">- Secretaria do Patrimônio\n                da União</a></li>\n            <li class=\"link\"><a  href=\"http://www.irib.org.br/\" target=\"_blank\">- IRIB - Instituto de Registro Imobiliário\n                do Brasil</a></li>\n            <li class=\"link\"><a  href=\"http://www.sindimoveis.com.br/\" target=\"_blank\">- SINDIMÓVEIS - Pernambuco</a></li>\n            <li class=\"link\"><a  href=\"https://cbic.org.br/\" target=\"_blank\">- CBIC - Câmara Brasileira da Indústria da\n                Contrução</a></li>\n            <li class=\"link\"><a  href=\"http://www2.recife.pe.gov.br/\" target=\"_blank\">- Prefeitura do Recife</a></li>\n            <li class=\"link\"><a  href=\"http://www.maceio.al.gov.br/\" target=\"_blank\">- Prefeitura de Alagoas</a></li>\n            <li class=\"link\"><a  href=\"https://www.registradores.org.br/index.aspx\" target=\"_blank\">- Central Registradora\n                de Imóveis</a></li>\n            <li class=\"link\"><a  href=\"http://www.sefaz.al.gov.br/\" target=\"_blank\">- SEFAZ - Secretaria da Fazenda de\n                Alagoas</a></li>\n            <li class=\"link\"><a  href=\"https://www.sefaz.pe.gov.br/SitePages/Home.aspx\" target=\"_blank\">- SEFAZ -\n                Secretaria da Fazenda de Pernambuco</a></li>\n            <li class=\"link\"><a  href=\"http://idg.receita.fazenda.gov.br/\" target=\"_blank\">- Receita Federal</a></li>\n            <li class=\"link\"><a  href=\"http://fipezap.zapimoveis.com.br/\" target=\"_blank\">- Fipezap - Zapimoveis</a></li>\n\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"col-sm-6 col-md-6 col-xs-12\" style=\"display: flex; align-items: center; vertical-align: middle; justify-content: center;\">\n        <div class=\"p-5\">\n          <figure>\n            <img src=\"assets/img/brand/5 - Marca_branca_fundo_transparente.png\" alt=\"\" class=\"img-fluid\">\n          </figure>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/more-info/more-info.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/more-info/more-info.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*      light colors - used for select dropdown         */\n#more-info {\n  background: #000000;\n  color: #ffffff !important; }\n#more-info .link {\n    display: block; }\n#more-info .link a {\n      color: #FFFFFF; }\n#more-info .link a:hover {\n        color: #9F7425; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZmxhdmlvLXNpcXVlaXJhL3NyYy9hc3NldHMvc2Fzcy9wYXBlci1raXQvX3ZhcmlhYmxlcy5zY3NzIiwiL3Zhci93d3cvaHRtbC9mbGF2aW8tc2lxdWVpcmEvc3JjL2FwcC9jb21wb25lbnRzL21vcmUtaW5mby9tb3JlLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUVBLDBEQUEwRDtBQ3JFMUQ7RUFDSSxvQkRnRWdDO0VDL0RoQywwQkFBd0IsRUFjM0I7QUFoQkQ7SUFLUSxlQUFjLEVBU2pCO0FBZEw7TUFRWSxlQUFjLEVBS2pCO0FBYlQ7UUFXZ0IsZURvRG9CLEVDbkR2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9yZS1pbmZvL21vcmUtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmb250LWNvbG9yOiAgICAgICAgICAgICAgICAgIzY2NjE1YiAhZGVmYXVsdDtcbiRmaWxsLWZvbnQtY29sb3I6ICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgICAnTW9udHNlcnJhdCcsIFwiSGVsdmV0aWNhXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kbm9uZTogICAgICAgICAgICAgICAgICAgICAgIDAgICAhZGVmYXVsdDtcbiRib3JkZXItdGhpbjogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuJGJvcmRlci10aGljazogICAgICAgICAgICAgICAycHggIWRlZmF1bHQ7XG5cbiR3aGl0ZS1jb2xvcjogICAgICAgICAgICAgICAgI0ZGRkZGRiAhZGVmYXVsdDtcbiR3aGl0ZS1iZzogICAgICAgICAgICAgICAgICAgI0ZGRkZGRiAhZGVmYXVsdDtcbiR3aGl0ZS1zdGF0ZXMtY29sb3I6ICAgICAgICAgcmdiYSgkd2hpdGUtY29sb3IsIDAuOCk7XG5cbiRzbW9rZS1iZzogICAgICAgICAgICAgICAgICAgI0Y1RjVGNSAhZGVmYXVsdDtcbiRwYWxlLWJnOiAgICAgICAgICAgICAgICAgICAgI0ZGRkNGNSAhZGVmYXVsdDtcbiRtZWRpdW0tcGFsZS1iZzogICAgICAgICAgICAgI0YxRUFFMCAhZGVmYXVsdDtcblxuJHRhYmxlLWxpbmUtY29sb3I6ICAgICAgICAgICAjY2NjICFkZWZhdWx0O1xuJG11dGVkLWNvbG9yOiAgICAgICAgICAgICAgICAjYTQ5ZTkzICFkZWZhdWx0O1xuXG4kYmxhY2stYmc6ICAgICAgICAgICAgICAgICAgIHJnYmEoMzAsMzAsMzAsLjk3KSAhZGVmYXVsdDtcblxuJGJsYWNrLWNvbG9yOiAgICAgICAgICAgICAgICAjMzMzMzMzICFkZWZhdWx0O1xuJGJsYWNrLWhyOiAgICAgICAgICAgICAgICAgICAjNDQ0NDQ0ICFkZWZhdWx0O1xuXG4kbGlnaHQtZ3JheTogICAgICAgICAgICAgICAgICNFM0UzRTMgIWRlZmF1bHQ7XG4kbWVkaXVtLWdyYXk6ICAgICAgICAgICAgICAgICNEREREREQgIWRlZmF1bHQ7XG4kZGFyay1ncmF5OiAgICAgICAgICAgICAgICAgICM5QTlBOUEgIWRlZmF1bHQ7XG5cbiRwbGFjZWhvbGRlci1ncmF5OiAgICAgICAgICAgcmdiYSgyMTAsIDIxMCwgMjEwLCAxKSAgIWRlZmF1bHQ7XG5cbiRncmF5LWlucHV0LWJnOiAgICAgICAgICAgICAgI2ZmZmNmNSAhZGVmYXVsdDtcbiRkYW5nZXItaW5wdXQtYmc6ICAgICAgICAgICAgI0ZGQzBBNCAhZGVmYXVsdDtcbiRzdWNjZXNzLWlucHV0LWJnOiAgICAgICAgICAgI0FCRjNDQiAhZGVmYXVsdDtcbiRvdGhlci1tZWRpdW0tZ3JheTogICAgICAgICAgI0E0OUU5MyAhZGVmYXVsdDtcbiR0cmFuc3BhcmVudC1iZzogICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRkZWZhdWx0LWNvbG9yOiAgICAgICAgICAgICAgIzY2NjE1QiAhZGVmYXVsdDtcbiRkZWZhdWx0LWJnOiAgICAgICAgICAgICAgICAgIzY2NjE1QiAhZGVmYXVsdDtcbiRkZWZhdWx0LXN0YXRlcy1jb2xvcjogICAgICAgIzQwM0QzOSAhZGVmYXVsdDtcblxuJHByaW1hcnktY29sb3I6ICAgICAgICAgICAgICAjNTFjYmNlICFkZWZhdWx0O1xuJHByaW1hcnktc3RhdGVzLWNvbG9yOiAgICAgICBkYXJrZW4oJHByaW1hcnktY29sb3IsIDEwJSkgIWRlZmF1bHQ7XG5cbiRzdWNjZXNzLWNvbG9yOiAgICAgICAgICAgICAgIzZiZDA5OCAhZGVmYXVsdDtcbiRzdWNjZXNzLXN0YXRlcy1jb2xvcjogICAgICAgZGFya2VuKCRzdWNjZXNzLWNvbG9yLCAxMCUpICFkZWZhdWx0O1xuXG4kaW5mby1jb2xvcjogICAgICAgICAgICAgICAgICM1MWJjZGEgIWRlZmF1bHQ7XG4kaW5mby1zdGF0ZXMtY29sb3I6ICAgICAgICAgIGRhcmtlbigkaW5mby1jb2xvciwgMTAlKSAhZGVmYXVsdDtcblxuJHdhcm5pbmctY29sb3I6ICAgICAgICAgICAgICAjZmJjNjU4ICFkZWZhdWx0O1xuJHdhcm5pbmctc3RhdGVzLWNvbG9yOiAgICAgICBkYXJrZW4oJHdhcm5pbmctY29sb3IsIDEwJSkgIWRlZmF1bHQ7XG5cbiRkYW5nZXItY29sb3I6ICAgICAgICAgICAgICAgI2Y1NTkzZCAhZGVmYXVsdDtcbiRkYW5nZXItc3RhdGVzLWNvbG9yOiAgICAgICAgZGFya2VuKCRkYW5nZXItY29sb3IsIDglKSAhZGVmYXVsdDtcblxuJGxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICAjNjY2NjY2ICFkZWZhdWx0O1xuXG4kcHVycGxlLWNvbG9yOiAgICAgICAgICAgICAgICNjMTc4YzEgIWRlZmF1bHQ7XG4kcHVycGxlLXN0YXRlcy1jb2xvcjogICAgICAgIGRhcmtlbigkcHVycGxlLWNvbG9yLCA4JSkgIWRlZmF1bHQ7XG5cbiRicm93bi1jb2xvcjogICAgICAgICAgICAgICAgI2RjYjI4NSAhZGVmYXVsdDtcbiRicm93bi1zdGF0ZXMtY29sb3I6ICAgICAgICAgZGFya2VuKCRicm93bi1jb2xvciwgOCUpICFkZWZhdWx0O1xuXG5cbi8vIEJSQU5EIFZBUklBQkxFU1xuJG1haW4tY29sb3I6ICAgICAgICAgICAgICAgICAjOUY3NDI1ICFkZWZhdWx0O1xuJHNlY29uZC1jb2xvcjogICAgICAgICAgICAgICAjRUJENTgyICFkZWZhdWx0O1xuJGJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICAjMDAwMDAwICFkZWZhdWx0O1xuXG5cblxuLyogICAgICBsaWdodCBjb2xvcnMgLSB1c2VkIGZvciBzZWxlY3QgZHJvcGRvd24gICAgICAgICAqL1xuXG4kbGlnaHQtYmx1ZTogICAgICAgICAgICAgICAgIHJnYmEoJHByaW1hcnktY29sb3IsIC4yKTtcbiRsaWdodC1henVyZTogICAgICAgICAgICAgICAgcmdiYSgkaW5mby1jb2xvciwgLjIpO1xuJGxpZ2h0LWdyZWVuOiAgICAgICAgICAgICAgICByZ2JhKCRzdWNjZXNzLWNvbG9yLCAuMik7XG4kbGlnaHQtb3JhbmdlOiAgICAgICAgICAgICAgIHJnYmEoJHdhcm5pbmctY29sb3IsIC4yKTtcbiRsaWdodC1yZWQ6ICAgICAgICAgICAgICAgICAgcmdiYSgkZGFuZ2VyLWNvbG9yLCAuMik7XG5cblxuLy89PSBDb21wb25lbnRzXG4vL1xuJHBhZGRpbmctYmFzZS12ZXJ0aWNhbDogICAgICAgICA3cHggIWRlZmF1bHQ7XG4kcGFkZGluZy1iYXNlLWhvcml6b250YWw6ICAgICAgIDE4cHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLXJvdW5kLXZlcnRpY2FsOiAgICAgICAgOXB4ICFkZWZhdWx0O1xuJHBhZGRpbmctcm91bmQtaG9yaXpvbnRhbDogICAgIDE4cHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLXNpbXBsZS12ZXJ0aWNhbDogICAgICAxMHB4ICFkZWZhdWx0O1xuJHBhZGRpbmctc2ltcGxlLWhvcml6b250YWw6ICAgIDE4cHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLWxhcmdlLXZlcnRpY2FsOiAgICAgICAxMXB4ICFkZWZhdWx0O1xuJHBhZGRpbmctbGFyZ2UtaG9yaXpvbnRhbDogICAgIDMwcHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLXNtYWxsLXZlcnRpY2FsOiAgICAgICAgNHB4ICFkZWZhdWx0O1xuJHBhZGRpbmctc21hbGwtaG9yaXpvbnRhbDogICAgIDEwcHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLXhzLXZlcnRpY2FsOiAgICAgICAgICAgMnB4ICFkZWZhdWx0O1xuJHBhZGRpbmcteHMtaG9yaXpvbnRhbDogICAgICAgICA1cHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLWxhYmVsLXZlcnRpY2FsOiAgICAgICAgMnB4ICFkZWZhdWx0O1xuJHBhZGRpbmctbGFiZWwtaG9yaXpvbnRhbDogICAgIDEycHggIWRlZmF1bHQ7XG5cbi8vIHBhZGRpbmcgZm9yIGxpbmtzIGluc2lkZSBkcm9wZG93biBtZW51XG4kcGFkZGluZy1kcm9wZG93bi12ZXJ0aWNhbDogICAgIDEwcHggIWRlZmF1bHQ7XG4kcGFkZGluZy1kcm9wZG93bi1ob3Jpem9udGFsOiAgIDE1cHggIWRlZmF1bHQ7XG5cbiRtYXJnaW4tbGFyZ2UtdmVydGljYWw6ICAgICAgICAzMHB4ICFkZWZhdWx0O1xuJG1hcmdpbi1iYXNlLXZlcnRpY2FsOiAgICAgICAgIDE1cHggIWRlZmF1bHQ7XG5cbi8vIGJvcmRlciByYWRpdXMgZm9yIGJ1dHRvbnNcbiRib3JkZXItcmFkaXVzLW5vbmU6ICAgICAgICAgICAgIDBweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWJ0bi1zbWFsbDogICAgICAyNnB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtYnRuLWJhc2U6ICAgICAgIDIwcHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1idG4tbGFyZ2U6ICAgICAgNTBweCAhZGVmYXVsdDtcblxuXG4kbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAgMCAwIDEwcHggMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtYWxsOiAgICAgICAgICAgM3B4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtYmFzZTogICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sYXJnZTogICAgICAgICAgIDZweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXgtbGFyZ2U6ICAgICAgICAgOHB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtZXh0cmVtZTogICAgICAgICAxMnB4ICFkZWZhdWx0O1xuXG4kYm9yZGVyLXJhZGl1cy1ub25lLXRvcDogICAgICAkYm9yZGVyLXJhZGl1cy1ub25lICRib3JkZXItcmFkaXVzLW5vbmUgMCAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbm9uZS1ib3R0b206ICAgMCAwICRib3JkZXItcmFkaXVzLW5vbmUgJGJvcmRlci1yYWRpdXMtbm9uZSAhZGVmYXVsdDtcblxuJGJvcmRlci1yYWRpdXMtc21hbGwtdG9wOiAgICAgICRib3JkZXItcmFkaXVzLXNtYWxsICRib3JkZXItcmFkaXVzLXNtYWxsIDAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtYWxsLWJvdHRvbTogICAwIDAgJGJvcmRlci1yYWRpdXMtc21hbGwgJGJvcmRlci1yYWRpdXMtc21hbGwgIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzLWxhcmdlLXRvcDogICAgICAkYm9yZGVyLXJhZGl1cy1sYXJnZSAkYm9yZGVyLXJhZGl1cy1sYXJnZSAwIDAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sYXJnZS1ib3R0b206ICAgMCAwICRib3JkZXItcmFkaXVzLWxhcmdlICRib3JkZXItcmFkaXVzLWxhcmdlICFkZWZhdWx0O1xuXG4kYnRuLXJvdW5kLXJhZGl1czogICAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcblxuJGhlaWdodC1iYXNlOiAgICAgICAgICAgICAgICAgIDQwcHggIWRlZmF1bHQ7XG5cbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgICAxNHB4ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1zbWFsbDogICAgICAgICAgICAgIDEycHggIWRlZmF1bHQ7XG4kZm9udC1zaXplLW1lZGl1bTogICAgICAgICAgICAgMTZweCAhZGVmYXVsdDtcbiRmb250LXNpemUtbGFyZ2U6ICAgICAgICAgICAgICAyMHB4ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1sYXJnZS1uYXZiYXI6ICAgICAgIDIycHggIWRlZmF1bHQ7XG5cbiRmb250LXNpemUtaDE6ICAgICAgICAgICAgICAgICAzLjZlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtaDI6ICAgICAgICAgICAgICAgICAyLjhlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtaDM6ICAgICAgICAgICAgICAgICAxLjgyNWVtICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1oNDogICAgICAgICAgICAgICAgIDEuNmVtICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1oNTogICAgICAgICAgICAgICAgIDEuMzVlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtaDY6ICAgICAgICAgICAgICAgICAwLjllbSAhZGVmYXVsdDtcbiRmb250LXBhcmFncmFwaDogICAgICAgICAgICAgICAxNXB4ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1uYXZiYXI6ICAgICAgICAgICAgIDE0cHggIWRlZmF1bHQ7XG5cbiRmb250LXNpemUtaW5mby1ob3Jpem9udGFsOiAgICAyLjVlbSAhZGVmYXVsdDtcblxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiAgICAgICAgIDQwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1zZW1pOiAgICAgICAgICAgNTAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWJvbGQ6ICAgICAgICAgICA2MDAgIWRlZmF1bHQ7XG5cbiRsaW5lLWhlaWdodC1zbWFsbDogICAgICAgICAgICAyMHB4ICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0LWdlbmVyYWw6ICAgICAgICAgIDEuNWVtICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAgICAgMzZweCAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1sZzogICAgICAgICAgICAgIDU0cHggIWRlZmF1bHQ7XG5cblxuJGJvcmRlci1yYWRpdXMtdG9wOiAgICAgICAgMTBweCAxMHB4IDAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWJvdHRvbTogICAgIDAgMCAxMHB4IDEwcHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1kcm9wZG93bjogICAxMHB4IDEwcHggIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1zaGFkb3c6ICAgICAgICAgIDAgMnB4IHJnYmEoMTcsIDE2LCAxNSwgMC4xKSwgMCAycHggMTBweCByZ2JhKDE3LCAxNiwgMTUsIDAuMSk7XG5cbiRnZW5lcmFsLXRyYW5zaXRpb24tdGltZTogIDMwMG1zICFkZWZhdWx0O1xuXG4kc2xvdy10cmFuc2l0aW9uLXRpbWU6ICAgICAgICAgICAzMDBtcyAhZGVmYXVsdDtcbiRkcm9wZG93bi1jb29yZGluYXRlczogICAgICAyOXB4IC01MHB4ICFkZWZhdWx0O1xuXG4kZmFzdC10cmFuc2l0aW9uLXRpbWU6ICAgICAgICAgICAxNTBtcyAhZGVmYXVsdDtcbiRzZWxlY3QtY29vcmRpbmF0ZXM6ICAgICAgICAgNTAlIC00MHB4ICFkZWZhdWx0O1xuXG4kdHJhbnNpdGlvbi1saW5lYXI6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lYXIgIWRlZmF1bHQ7XG4kdHJhbnNpdGlvbi1iZXppZXI6ICAgICAgICAgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNjEsIDAuNywgMSkgIWRlZmF1bHQ7XG4kdHJhbnNpdGlvbi1lYXNlOiAgICAgICAgICAgZWFzZSAwcztcblxuJG5hdmJhci1wYWRkaW5nLWE6ICAgICAgICAgICAgICAgMTBweCAxNXB4O1xuJG5hdmJhci1tYXJnaW4tYTogICAgICAgICAgICAgICAgMTVweCAgMHB4O1xuXG4kcGFkZGluZy1zb2NpYWwtYTogICAgICAgICAgICAgICAxMHB4ICA1cHg7XG5cbiRuYXZiYXItbWFyZ2luLWEtYnRuOiAgICAgICAgICAgIDE1cHggM3B4O1xuJG5hdmJhci1tYXJnaW4tYS1idG4tcm91bmQ6ICAgICAgMTZweCAzcHg7XG5cbiRuYXZiYXItcGFkZGluZy1hLWljb25zOiAgICAgICAgIDZweCAxNXB4O1xuJG5hdmJhci1tYXJnaW4tYS1pY29uczogICAgICAgICAgNnB4ICAzcHg7XG5cbiRuYXZiYXItcGFkZGluZy1icmFuZDogICAgICAgICAgIDIwcHggMTVweDtcbiRuYXZiYXItbWFyZ2luLWJyYW5kOiAgICAgICAgICAgICA1cHggIDBweDtcblxuJG5hdmJhci1tYXJnaW4tYnJhbmQtaWNvbnM6ICAgICAgMTJweCBhdXRvO1xuXG4kbmF2YmFyLW1hcmdpbi1idG46ICAgICAgICAgICAgICAxNXB4ICAzcHg7XG5cbiRoZWlnaHQtaWNvbjpcdFx0XHRcdFx0IDY0cHggIWRlZmF1bHQ7XG4kd2lkdGgtaWNvbjpcdFx0XHRcdFx0IDY0cHggIWRlZmF1bHQ7XG4kcGFkZGluZy1pY29uOlx0XHRcdFx0XHQgMTJweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWljb246XHRcdCAgICAgMTVweCAhZGVmYXVsdDtcblxuJHNpemUtaWNvbjogXHRcdFx0XHRcdCA2NHB4O1xuJHNpemUtaWNvbi1zbTogXHRcdFx0XHRcdCAzMnB4O1xuXG5cbiRoZWlnaHQtaWNvbi1zbTpcdFx0XHRcdCAzMnB4O1xuJHdpZHRoLWljb24tc206XHRcdFx0XHRcdCAzMnB4O1xuJHBhZGRpbmctaWNvbi1zbTpcdFx0XHQgICAgIDRweDtcbiRib3JkZXItcmFkaXVzLWljb24tc206XHRcdFx0IDdweDtcblxuJGhlaWdodC1pY29uLW1lc3NhZ2U6XHRcdFx0IDQwcHg7XG4kd2lkdGgtaWNvbi1tZXNzYWdlOlx0XHRcdCA0MHB4O1xuXG4kaGVpZ2h0LWljb24tbWVzc2FnZS1zbTogXHRcdCAyMHB4O1xuJHdpZHRoLWljb24tbWVzc2FnZS1zbTpcdFx0XHQgMjBweDtcblxuXG5cbiR3aGl0ZS1uYXZiYXI6ICAgICAgICAgICAgICByZ2JhKCNGRkZGRkYsIC45Nik7XG4kYmx1ZS1uYXZiYXI6ICAgICAgICAgICAgICAgcmdiYSgjMzRBQ0RDLCAuOTgpO1xuJGF6dXJlLW5hdmJhcjogICAgICAgICAgICAgIHJnYmEoIzVCQ0FGRiwgLjk4KTtcbiRncmVlbi1uYXZiYXI6ICAgICAgICAgICAgICByZ2JhKCM0Q0Q5NjQsIC45OCk7XG4kb3JhbmdlLW5hdmJhcjogICAgICAgICAgICAgcmdiYSgjRkY5NTAwLCAuOTgpO1xuJHJlZC1uYXZiYXI6ICAgICAgICAgICAgICAgIHJnYmEoI0ZGNEM0MCwgLjk4KTtcblxuJGJnLW51ZGU6ICAgICAgICAgICAgICAgI0ZGRkNGNSAhZGVmYXVsdDtcbiRiZy1wcmltYXJ5OiAgICAgICAgICAgIGxpZ2h0ZW4oJHByaW1hcnktY29sb3IsIDclKSAhZGVmYXVsdDtcbiRiZy1pbmZvOiAgICAgICAgICAgICAgIGxpZ2h0ZW4oJGluZm8tY29sb3IsIDclKSAhZGVmYXVsdDtcbiRiZy1zdWNjZXNzOiAgICAgICAgICAgIGxpZ2h0ZW4oJHN1Y2Nlc3MtY29sb3IsIDclKSAhZGVmYXVsdDtcbiRiZy13YXJuaW5nOiAgICAgICAgICAgIGxpZ2h0ZW4oJHdhcm5pbmctY29sb3IsIDclKSAhZGVmYXVsdDtcbiRiZy1kYW5nZXI6ICAgICAgICAgICAgIGxpZ2h0ZW4oJGRhbmdlci1jb2xvciwgNyUpICFkZWZhdWx0O1xuJGJnLWJyb3duOiAgICAgICAgICAgICAgbGlnaHRlbigkYnJvd24tY29sb3IsIDclKSAhZGVmYXVsdDtcbiRiZy1wdXJwbGU6ICAgICAgICAgICAgIGxpZ2h0ZW4oJHB1cnBsZS1jb2xvciwgNyUpICFkZWZhdWx0O1xuXG4kcHJlbG9hZGVyLWNvbG9yOiAgICAgICAgICAjRDhEMUM5ICFkZWZhdWx0O1xuXG4kZmlsdGVyLWJsdWU6ICAgICAgICAgZGFya2VuKCRwcmltYXJ5LWNvbG9yLCAxMCUpO1xuJGZpbHRlci1henVyZTogICAgICAgIGRhcmtlbigkaW5mby1jb2xvciwgMTAlKTtcbiRmaWx0ZXItZ3JlZW46ICAgICAgICBkYXJrZW4oJHN1Y2Nlc3MtY29sb3IsIDEwJSk7XG4kZmlsdGVyLW9yYW5nZTogICAgICAgZGFya2VuKCR3YXJuaW5nLWNvbG9yLCAxMCUpO1xuJGZpbHRlci1yZWQ6ICAgICAgICAgIGRhcmtlbigkZGFuZ2VyLWNvbG9yLCAxMCUpO1xuXG5cbiR0b3BiYXIteDogICAgICAgICAgICAgdG9wYmFyLXggIWRlZmF1bHQ7XG4kdG9wYmFyLWJhY2s6ICAgICAgICAgIHRvcGJhci1iYWNrICFkZWZhdWx0O1xuJGJvdHRvbWJhci14OiAgICAgICAgICBib3R0b21iYXIteCAhZGVmYXVsdDtcbiRib3R0b21iYXItYmFjazogICAgICAgYm90dG9tYmFyLWJhY2sgIWRlZmF1bHQ7XG5cbiRzb2NpYWwtZmFjZWJvb2s6IFx0XHRcdCMzYjU5OTg7XG4kc29jaWFsLXR3aXR0ZXI6IFx0XHRcdCM1NWFjZWU7XG4kc29jaWFsLXBpbnRlcmVzdDogXHRcdFx0I2NjMjEyNztcbiRzb2NpYWwtZ29vZ2xlOiBcdFx0XHQjZGQ0YjM5O1xuJHNvY2lhbC1saW5rZWRpbjogXHRcdFx0IzA5NzZiNDtcbiRzb2NpYWwtZHJpYmJibGU6IFx0XHRcdCNlYTRjODk7XG4kc29jaWFsLWdpdGh1YjogXHRcdFx0IzMzMzMzMztcbiRzb2NpYWwteW91dHViZTogXHRcdFx0I2U1MmQyNztcbiRzb2NpYWwtaW5zdGFncmFtOiBcdFx0ICAgICMxMjU2ODg7XG4kc29jaWFsLXJlZGRpdDogXHRcdFx0I2ZmNDUwMDtcbiRzb2NpYWwtdHVtYmxyOiBcdFx0XHQjMzU0NjVjO1xuXG4kYmFja2dyb3VuZC1saWdodC1ncmV5OiAgICAgI0U4RTdFMyAhZGVmYXVsdDtcbiRiYWNrZ3JvdW5kLWxpZ2h0ZXItZ3JleTogICAjRjBFRkVCICFkZWZhdWx0O1xuJGZvbnQtYmFja2dyb3VuZC1saWdodC1ncmV5OiAjOUM5Qjk5ICFkZWZhdWx0O1xuJGZvbnQtaG92ZXItYmFja2dyb3VuZC1saWdodC1ncmV5OiAjNUU1RTVDICFkZWZhdWx0O1xuXG4vLyB2YXJpYWJsZXMgdXNlZCBpbiBoZWFkZXJzXG4kaGVhZGVyLWJhY2tncm91bmQ6ICAgICAgICAgI0IyQUZBQiAhZGVmYXVsdDtcblxuJGZpbHRlci1wcmltYXJ5OiAgICAgICAgIGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMTAlKTtcbiRmaWx0ZXItaW5mbzogICAgICAgIGRhcmtlbigkaW5mby1jb2xvciwgMTAlKTtcbiRmaWx0ZXItc3VjY2VzczogICAgICAgIGRhcmtlbigkc3VjY2Vzcy1jb2xvciwgMTAlKTtcbiRmaWx0ZXItd2FybmluZzogICAgICAgZGFya2VuKCR3YXJuaW5nLWNvbG9yLCAxMCUpO1xuJGZpbHRlci1kYW5nZXI6ICAgICAgICAgIGRhcmtlbigkZGFuZ2VyLWNvbG9yLCAxMCUpO1xuXG4vLyB2YXJpYWJsZSB1c2VkIGluIGZvb3RlcnNcbiRibGFjay1mb290ZXItYmc6ICAgICAgICAgICAgIzI1MjQyMiAhZGVmYXVsdDtcbiRicm93bi1mb250LWNvbG9yOiAgICAgICAgICAgI0E0OUU5RSAhZGVmYXVsdDtcbiRicm93bi1mb250LWNvbG9yLWhvdmVyOiAgICAgI0YxRUFFMCAhZGVmYXVsdDtcblxuLy92YXJpYWJsZXMgdXNlZCBpbiBjYXJkc1xuJGNhcmQtYmxhY2stY29sb3I6ICAgICAgICAgICAjMzMzMzMzICFkZWZhdWx0O1xuJGNhcmQtbXV0ZWQtY29sb3I6ICAgICAgICAgICAjY2NjICFkZWZhdWx0O1xuXG4kY2FyZC1iYWNrZ3JvdW5kLWJsdWU6ICAgICAgI2I4ZDhkOCAhZGVmYXVsdDtcbiRjYXJkLWZvbnQtYmx1ZTogICAgICAgICAgICAjNTA2NTY4ICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUtYmx1ZTogICAgICAgICM3YTllOWYgIWRlZmF1bHQ7XG5cbiRjYXJkLWJhY2tncm91bmQtZ3JlZW46ICAgICAgI2Q1ZTVhMyAhZGVmYXVsdDtcbiRjYXJkLWZvbnQtZ3JlZW46ICAgICAgICAgICAgIzYwNzczZCAhZGVmYXVsdDtcbiRjYXJkLXN1YnRpdGxlLWdyZWVuOiAgICAgICAgIzkyYWM1NiAhZGVmYXVsdDtcblxuJGNhcmQtYmFja2dyb3VuZC15ZWxsb3c6ICAgICAgI2ZmZTI4YyAhZGVmYXVsdDtcbiRjYXJkLWZvbnQteWVsbG93OiAgICAgICAgICAgICNiMjU4MjUgIWRlZmF1bHQ7XG4kY2FyZC1zdWJ0aXRsZS15ZWxsb3c6ICAgICAgICAjZDg4NzE1ICFkZWZhdWx0O1xuXG4kY2FyZC1iYWNrZ3JvdW5kLWJyb3duOiAgICAgICNkNmMxYWIgIWRlZmF1bHQ7XG4kY2FyZC1mb250LWJyb3duOiAgICAgICAgICAgICM3NTQ0MmUgIWRlZmF1bHQ7XG4kY2FyZC1zdWJ0aXRsZS1icm93bjogICAgICAgICNhNDdlNjUgIWRlZmF1bHQ7XG5cbiRjYXJkLWJhY2tncm91bmQtcHVycGxlOiAgICAgICNiYWE5YmEgIWRlZmF1bHQ7XG4kY2FyZC1mb250LXB1cnBsZTogICAgICAgICAgICAjM2EyODNkICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUtcHVycGxlOiAgICAgICAgIzVhMjgzZCAhZGVmYXVsdDtcblxuJGNhcmQtYmFja2dyb3VuZC1vcmFuZ2U6ICAgICAgI2ZmOGY1ZSAhZGVmYXVsdDtcbiRjYXJkLWZvbnQtb3JhbmdlOiAgICAgICAgICAgICM3NzI1MTAgIWRlZmF1bHQ7XG4kY2FyZC1zdWJ0aXRsZS1vcmFuZ2U6ICAgICAgICAjZTk1ZTM3ICFkZWZhdWx0O1xuXG4kY2FyZC1iYWNrZ3JvdW5kLXByaW1hcnk6ICAgICAjNDI3Qzg5ICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgIzQyN0M4OSAhZGVmYXVsdDtcblxuJGNvbG9yLXJlZC1lcnJvcjogcmdiKDE4NSwgNzQsIDcyKSAhZGVmYXVsdDtcbiRjb2xvci1ncmV5LWFycm93OiByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuMikgIWRlZmF1bHQ7XG5cbiR3aWR0aC1kZWZhdWx0OiAyMjBweCAhZGVmYXVsdDsgLy8gMyA5NjBweC1ncmlkIGNvbHVtbnNcblxuJHppbmRleC1zZWxlY3QtZHJvcGRvd246IDEwNjAgIWRlZmF1bHQ7IC8vIG11c3QgYmUgaGlnaGVyIHRoYW4gYSBtb2RhbCBiYWNrZ3JvdW5kICgxMDUwKVxuXG4vLyoqIFBsYWNlaG9sZGVyIHRleHQgY29sb3JcbiRpbnB1dC1jb2xvci1wbGFjZWhvbGRlcjogIzk5OSAhZGVmYXVsdDtcblxuXG4vLyBtZWRpYSBoZWFkZXIgXG4kbWVkaWEtaGVhZGVyLWhlaWdodDogMTAwcHg7IiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL3BhcGVyLWtpdC92YXJpYWJsZXNcIjtcblxuI21vcmUtaW5mbyB7XG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3I7XG4gICAgY29sb3I6ICNmZmZmZmYhaW1wb3J0YW50O1xuXG4gICAgLmxpbmsge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRtYWluLWNvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/more-info/more-info.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/more-info/more-info.component.ts ***!
  \*************************************************************/
/*! exports provided: MoreInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreInfoComponent", function() { return MoreInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MoreInfoComponent = /** @class */ (function () {
    function MoreInfoComponent() {
    }
    MoreInfoComponent.prototype.ngOnInit = function () {
    };
    MoreInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-more-info',
            template: __webpack_require__(/*! ./more-info.component.html */ "./src/app/components/more-info/more-info.component.html"),
            styles: [__webpack_require__(/*! ./more-info.component.scss */ "./src/app/components/more-info/more-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MoreInfoComponent);
    return MoreInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/show-video/show-video.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/show-video/show-video.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div modal>\n  <div class=\"video-container\">\n      <!-- <button (click)=\"closeVideo()\"> FECHAR </button> -->\n      <button mat-mini-fab (click)=\"closeVideo()\"><i class=\"fa fa-close\"></i></button>\n\n      <div [innerHtml]=\"frame\"></div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/show-video/show-video.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/show-video/show-video.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*      light colors - used for select dropdown         */\n.video-container button {\n  background-color: #9F7425;\n  float: right; }\n@media (max-width: 560px) {\n  .video-container {\n    width: 100%; }\n    .video-container iframe {\n      width: 100% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZmxhdmlvLXNpcXVlaXJhL3NyYy9hc3NldHMvc2Fzcy9wYXBlci1raXQvX3ZhcmlhYmxlcy5zY3NzIiwiL3Zhci93d3cvaHRtbC9mbGF2aW8tc2lxdWVpcmEvc3JjL2FwcC9jb21wb25lbnRzL3Nob3ctdmlkZW8vc2hvdy12aWRlby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RUEsMERBQTBEO0FDckUxRDtFQUVRLDBCRDZENEI7RUM1RDVCLGFBQVksRUFDZjtBQUdMO0VBQ0k7SUFDSSxZQUFXLEVBS2Q7SUFORDtNQUlRLHVCQUFxQixFQUN4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaG93LXZpZGVvL3Nob3ctdmlkZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZm9udC1jb2xvcjogICAgICAgICAgICAgICAgICM2NjYxNWIgIWRlZmF1bHQ7XG4kZmlsbC1mb250LWNvbG9yOiAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgJ01vbnRzZXJyYXQnLCBcIkhlbHZldGljYVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJG5vbmU6ICAgICAgICAgICAgICAgICAgICAgICAwICAgIWRlZmF1bHQ7XG4kYm9yZGVyLXRoaW46ICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcbiRib3JkZXItdGhpY2s6ICAgICAgICAgICAgICAgMnB4ICFkZWZhdWx0O1xuXG4kd2hpdGUtY29sb3I6ICAgICAgICAgICAgICAgICNGRkZGRkYgIWRlZmF1bHQ7XG4kd2hpdGUtYmc6ICAgICAgICAgICAgICAgICAgICNGRkZGRkYgIWRlZmF1bHQ7XG4kd2hpdGUtc3RhdGVzLWNvbG9yOiAgICAgICAgIHJnYmEoJHdoaXRlLWNvbG9yLCAwLjgpO1xuXG4kc21va2UtYmc6ICAgICAgICAgICAgICAgICAgICNGNUY1RjUgIWRlZmF1bHQ7XG4kcGFsZS1iZzogICAgICAgICAgICAgICAgICAgICNGRkZDRjUgIWRlZmF1bHQ7XG4kbWVkaXVtLXBhbGUtYmc6ICAgICAgICAgICAgICNGMUVBRTAgIWRlZmF1bHQ7XG5cbiR0YWJsZS1saW5lLWNvbG9yOiAgICAgICAgICAgI2NjYyAhZGVmYXVsdDtcbiRtdXRlZC1jb2xvcjogICAgICAgICAgICAgICAgI2E0OWU5MyAhZGVmYXVsdDtcblxuJGJsYWNrLWJnOiAgICAgICAgICAgICAgICAgICByZ2JhKDMwLDMwLDMwLC45NykgIWRlZmF1bHQ7XG5cbiRibGFjay1jb2xvcjogICAgICAgICAgICAgICAgIzMzMzMzMyAhZGVmYXVsdDtcbiRibGFjay1ocjogICAgICAgICAgICAgICAgICAgIzQ0NDQ0NCAhZGVmYXVsdDtcblxuJGxpZ2h0LWdyYXk6ICAgICAgICAgICAgICAgICAjRTNFM0UzICFkZWZhdWx0O1xuJG1lZGl1bS1ncmF5OiAgICAgICAgICAgICAgICAjREREREREICFkZWZhdWx0O1xuJGRhcmstZ3JheTogICAgICAgICAgICAgICAgICAjOUE5QTlBICFkZWZhdWx0O1xuXG4kcGxhY2Vob2xkZXItZ3JheTogICAgICAgICAgIHJnYmEoMjEwLCAyMTAsIDIxMCwgMSkgICFkZWZhdWx0O1xuXG4kZ3JheS1pbnB1dC1iZzogICAgICAgICAgICAgICNmZmZjZjUgIWRlZmF1bHQ7XG4kZGFuZ2VyLWlucHV0LWJnOiAgICAgICAgICAgICNGRkMwQTQgIWRlZmF1bHQ7XG4kc3VjY2Vzcy1pbnB1dC1iZzogICAgICAgICAgICNBQkYzQ0IgIWRlZmF1bHQ7XG4kb3RoZXItbWVkaXVtLWdyYXk6ICAgICAgICAgICNBNDlFOTMgIWRlZmF1bHQ7XG4kdHJhbnNwYXJlbnQtYmc6ICAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4kZGVmYXVsdC1jb2xvcjogICAgICAgICAgICAgICM2NjYxNUIgIWRlZmF1bHQ7XG4kZGVmYXVsdC1iZzogICAgICAgICAgICAgICAgICM2NjYxNUIgIWRlZmF1bHQ7XG4kZGVmYXVsdC1zdGF0ZXMtY29sb3I6ICAgICAgICM0MDNEMzkgIWRlZmF1bHQ7XG5cbiRwcmltYXJ5LWNvbG9yOiAgICAgICAgICAgICAgIzUxY2JjZSAhZGVmYXVsdDtcbiRwcmltYXJ5LXN0YXRlcy1jb2xvcjogICAgICAgZGFya2VuKCRwcmltYXJ5LWNvbG9yLCAxMCUpICFkZWZhdWx0O1xuXG4kc3VjY2Vzcy1jb2xvcjogICAgICAgICAgICAgICM2YmQwOTggIWRlZmF1bHQ7XG4kc3VjY2Vzcy1zdGF0ZXMtY29sb3I6ICAgICAgIGRhcmtlbigkc3VjY2Vzcy1jb2xvciwgMTAlKSAhZGVmYXVsdDtcblxuJGluZm8tY29sb3I6ICAgICAgICAgICAgICAgICAjNTFiY2RhICFkZWZhdWx0O1xuJGluZm8tc3RhdGVzLWNvbG9yOiAgICAgICAgICBkYXJrZW4oJGluZm8tY29sb3IsIDEwJSkgIWRlZmF1bHQ7XG5cbiR3YXJuaW5nLWNvbG9yOiAgICAgICAgICAgICAgI2ZiYzY1OCAhZGVmYXVsdDtcbiR3YXJuaW5nLXN0YXRlcy1jb2xvcjogICAgICAgZGFya2VuKCR3YXJuaW5nLWNvbG9yLCAxMCUpICFkZWZhdWx0O1xuXG4kZGFuZ2VyLWNvbG9yOiAgICAgICAgICAgICAgICNmNTU5M2QgIWRlZmF1bHQ7XG4kZGFuZ2VyLXN0YXRlcy1jb2xvcjogICAgICAgIGRhcmtlbigkZGFuZ2VyLWNvbG9yLCA4JSkgIWRlZmF1bHQ7XG5cbiRsaW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgIzY2NjY2NiAhZGVmYXVsdDtcblxuJHB1cnBsZS1jb2xvcjogICAgICAgICAgICAgICAjYzE3OGMxICFkZWZhdWx0O1xuJHB1cnBsZS1zdGF0ZXMtY29sb3I6ICAgICAgICBkYXJrZW4oJHB1cnBsZS1jb2xvciwgOCUpICFkZWZhdWx0O1xuXG4kYnJvd24tY29sb3I6ICAgICAgICAgICAgICAgICNkY2IyODUgIWRlZmF1bHQ7XG4kYnJvd24tc3RhdGVzLWNvbG9yOiAgICAgICAgIGRhcmtlbigkYnJvd24tY29sb3IsIDglKSAhZGVmYXVsdDtcblxuXG4vLyBCUkFORCBWQVJJQUJMRVNcbiRtYWluLWNvbG9yOiAgICAgICAgICAgICAgICAgIzlGNzQyNSAhZGVmYXVsdDtcbiRzZWNvbmQtY29sb3I6ICAgICAgICAgICAgICAgI0VCRDU4MiAhZGVmYXVsdDtcbiRiYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAgIzAwMDAwMCAhZGVmYXVsdDtcblxuXG5cbi8qICAgICAgbGlnaHQgY29sb3JzIC0gdXNlZCBmb3Igc2VsZWN0IGRyb3Bkb3duICAgICAgICAgKi9cblxuJGxpZ2h0LWJsdWU6ICAgICAgICAgICAgICAgICByZ2JhKCRwcmltYXJ5LWNvbG9yLCAuMik7XG4kbGlnaHQtYXp1cmU6ICAgICAgICAgICAgICAgIHJnYmEoJGluZm8tY29sb3IsIC4yKTtcbiRsaWdodC1ncmVlbjogICAgICAgICAgICAgICAgcmdiYSgkc3VjY2Vzcy1jb2xvciwgLjIpO1xuJGxpZ2h0LW9yYW5nZTogICAgICAgICAgICAgICByZ2JhKCR3YXJuaW5nLWNvbG9yLCAuMik7XG4kbGlnaHQtcmVkOiAgICAgICAgICAgICAgICAgIHJnYmEoJGRhbmdlci1jb2xvciwgLjIpO1xuXG5cbi8vPT0gQ29tcG9uZW50c1xuLy9cbiRwYWRkaW5nLWJhc2UtdmVydGljYWw6ICAgICAgICAgN3B4ICFkZWZhdWx0O1xuJHBhZGRpbmctYmFzZS1ob3Jpem9udGFsOiAgICAgICAxOHB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy1yb3VuZC12ZXJ0aWNhbDogICAgICAgIDlweCAhZGVmYXVsdDtcbiRwYWRkaW5nLXJvdW5kLWhvcml6b250YWw6ICAgICAxOHB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy1zaW1wbGUtdmVydGljYWw6ICAgICAgMTBweCAhZGVmYXVsdDtcbiRwYWRkaW5nLXNpbXBsZS1ob3Jpem9udGFsOiAgICAxOHB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy1sYXJnZS12ZXJ0aWNhbDogICAgICAgMTFweCAhZGVmYXVsdDtcbiRwYWRkaW5nLWxhcmdlLWhvcml6b250YWw6ICAgICAzMHB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy1zbWFsbC12ZXJ0aWNhbDogICAgICAgIDRweCAhZGVmYXVsdDtcbiRwYWRkaW5nLXNtYWxsLWhvcml6b250YWw6ICAgICAxMHB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy14cy12ZXJ0aWNhbDogICAgICAgICAgIDJweCAhZGVmYXVsdDtcbiRwYWRkaW5nLXhzLWhvcml6b250YWw6ICAgICAgICAgNXB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy1sYWJlbC12ZXJ0aWNhbDogICAgICAgIDJweCAhZGVmYXVsdDtcbiRwYWRkaW5nLWxhYmVsLWhvcml6b250YWw6ICAgICAxMnB4ICFkZWZhdWx0O1xuXG4vLyBwYWRkaW5nIGZvciBsaW5rcyBpbnNpZGUgZHJvcGRvd24gbWVudVxuJHBhZGRpbmctZHJvcGRvd24tdmVydGljYWw6ICAgICAxMHB4ICFkZWZhdWx0O1xuJHBhZGRpbmctZHJvcGRvd24taG9yaXpvbnRhbDogICAxNXB4ICFkZWZhdWx0O1xuXG4kbWFyZ2luLWxhcmdlLXZlcnRpY2FsOiAgICAgICAgMzBweCAhZGVmYXVsdDtcbiRtYXJnaW4tYmFzZS12ZXJ0aWNhbDogICAgICAgICAxNXB4ICFkZWZhdWx0O1xuXG4vLyBib3JkZXIgcmFkaXVzIGZvciBidXR0b25zXG4kYm9yZGVyLXJhZGl1cy1ub25lOiAgICAgICAgICAgICAwcHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1idG4tc21hbGw6ICAgICAgMjZweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWJ0bi1iYXNlOiAgICAgICAyMHB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtYnRuLWxhcmdlOiAgICAgIDUwcHggIWRlZmF1bHQ7XG5cblxuJG1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgIDAgMCAxMHB4IDAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbWFsbDogICAgICAgICAgIDNweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWJhc2U6ICAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGFyZ2U6ICAgICAgICAgICA2cHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy14LWxhcmdlOiAgICAgICAgIDhweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWV4dHJlbWU6ICAgICAgICAgMTJweCAhZGVmYXVsdDtcblxuJGJvcmRlci1yYWRpdXMtbm9uZS10b3A6ICAgICAgJGJvcmRlci1yYWRpdXMtbm9uZSAkYm9yZGVyLXJhZGl1cy1ub25lIDAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLW5vbmUtYm90dG9tOiAgIDAgMCAkYm9yZGVyLXJhZGl1cy1ub25lICRib3JkZXItcmFkaXVzLW5vbmUgIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzLXNtYWxsLXRvcDogICAgICAkYm9yZGVyLXJhZGl1cy1zbWFsbCAkYm9yZGVyLXJhZGl1cy1zbWFsbCAwIDAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbWFsbC1ib3R0b206ICAgMCAwICRib3JkZXItcmFkaXVzLXNtYWxsICRib3JkZXItcmFkaXVzLXNtYWxsICFkZWZhdWx0O1xuXG4kYm9yZGVyLXJhZGl1cy1sYXJnZS10b3A6ICAgICAgJGJvcmRlci1yYWRpdXMtbGFyZ2UgJGJvcmRlci1yYWRpdXMtbGFyZ2UgMCAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGFyZ2UtYm90dG9tOiAgIDAgMCAkYm9yZGVyLXJhZGl1cy1sYXJnZSAkYm9yZGVyLXJhZGl1cy1sYXJnZSAhZGVmYXVsdDtcblxuJGJ0bi1yb3VuZC1yYWRpdXM6ICAgICAgICAgICAgIDMwcHggIWRlZmF1bHQ7XG5cbiRoZWlnaHQtYmFzZTogICAgICAgICAgICAgICAgICA0MHB4ICFkZWZhdWx0O1xuXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAgMTRweCAhZGVmYXVsdDtcbiRmb250LXNpemUtc21hbGw6ICAgICAgICAgICAgICAxMnB4ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1tZWRpdW06ICAgICAgICAgICAgIDE2cHggIWRlZmF1bHQ7XG4kZm9udC1zaXplLWxhcmdlOiAgICAgICAgICAgICAgMjBweCAhZGVmYXVsdDtcbiRmb250LXNpemUtbGFyZ2UtbmF2YmFyOiAgICAgICAyMnB4ICFkZWZhdWx0O1xuXG4kZm9udC1zaXplLWgxOiAgICAgICAgICAgICAgICAgMy42ZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWgyOiAgICAgICAgICAgICAgICAgMi44ZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWgzOiAgICAgICAgICAgICAgICAgMS44MjVlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtaDQ6ICAgICAgICAgICAgICAgICAxLjZlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtaDU6ICAgICAgICAgICAgICAgICAxLjM1ZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWg2OiAgICAgICAgICAgICAgICAgMC45ZW0gIWRlZmF1bHQ7XG4kZm9udC1wYXJhZ3JhcGg6ICAgICAgICAgICAgICAgMTVweCAhZGVmYXVsdDtcbiRmb250LXNpemUtbmF2YmFyOiAgICAgICAgICAgICAxNHB4ICFkZWZhdWx0O1xuXG4kZm9udC1zaXplLWluZm8taG9yaXpvbnRhbDogICAgMi41ZW0gIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1saWdodDogICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogICAgICAgICA0MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtc2VtaTogICAgICAgICAgIDUwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkOiAgICAgICAgICAgNjAwICFkZWZhdWx0O1xuXG4kbGluZS1oZWlnaHQtc21hbGw6ICAgICAgICAgICAgMjBweCAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1nZW5lcmFsOiAgICAgICAgICAxLjVlbSAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodDogICAgICAgICAgICAgICAgIDM2cHggIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICA1NHB4ICFkZWZhdWx0O1xuXG5cbiRib3JkZXItcmFkaXVzLXRvcDogICAgICAgIDEwcHggMTBweCAwIDAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1ib3R0b206ICAgICAwIDAgMTBweCAxMHB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtZHJvcGRvd246ICAgMTBweCAxMHB4ICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tc2hhZG93OiAgICAgICAgICAwIDJweCByZ2JhKDE3LCAxNiwgMTUsIDAuMSksIDAgMnB4IDEwcHggcmdiYSgxNywgMTYsIDE1LCAwLjEpO1xuXG4kZ2VuZXJhbC10cmFuc2l0aW9uLXRpbWU6ICAzMDBtcyAhZGVmYXVsdDtcblxuJHNsb3ctdHJhbnNpdGlvbi10aW1lOiAgICAgICAgICAgMzAwbXMgIWRlZmF1bHQ7XG4kZHJvcGRvd24tY29vcmRpbmF0ZXM6ICAgICAgMjlweCAtNTBweCAhZGVmYXVsdDtcblxuJGZhc3QtdHJhbnNpdGlvbi10aW1lOiAgICAgICAgICAgMTUwbXMgIWRlZmF1bHQ7XG4kc2VsZWN0LWNvb3JkaW5hdGVzOiAgICAgICAgIDUwJSAtNDBweCAhZGVmYXVsdDtcblxuJHRyYW5zaXRpb24tbGluZWFyOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZWFyICFkZWZhdWx0O1xuJHRyYW5zaXRpb24tYmV6aWVyOiAgICAgICAgIGN1YmljLWJlemllcigwLjM0LCAxLjYxLCAwLjcsIDEpICFkZWZhdWx0O1xuJHRyYW5zaXRpb24tZWFzZTogICAgICAgICAgIGVhc2UgMHM7XG5cbiRuYXZiYXItcGFkZGluZy1hOiAgICAgICAgICAgICAgIDEwcHggMTVweDtcbiRuYXZiYXItbWFyZ2luLWE6ICAgICAgICAgICAgICAgIDE1cHggIDBweDtcblxuJHBhZGRpbmctc29jaWFsLWE6ICAgICAgICAgICAgICAgMTBweCAgNXB4O1xuXG4kbmF2YmFyLW1hcmdpbi1hLWJ0bjogICAgICAgICAgICAxNXB4IDNweDtcbiRuYXZiYXItbWFyZ2luLWEtYnRuLXJvdW5kOiAgICAgIDE2cHggM3B4O1xuXG4kbmF2YmFyLXBhZGRpbmctYS1pY29uczogICAgICAgICA2cHggMTVweDtcbiRuYXZiYXItbWFyZ2luLWEtaWNvbnM6ICAgICAgICAgIDZweCAgM3B4O1xuXG4kbmF2YmFyLXBhZGRpbmctYnJhbmQ6ICAgICAgICAgICAyMHB4IDE1cHg7XG4kbmF2YmFyLW1hcmdpbi1icmFuZDogICAgICAgICAgICAgNXB4ICAwcHg7XG5cbiRuYXZiYXItbWFyZ2luLWJyYW5kLWljb25zOiAgICAgIDEycHggYXV0bztcblxuJG5hdmJhci1tYXJnaW4tYnRuOiAgICAgICAgICAgICAgMTVweCAgM3B4O1xuXG4kaGVpZ2h0LWljb246XHRcdFx0XHRcdCA2NHB4ICFkZWZhdWx0O1xuJHdpZHRoLWljb246XHRcdFx0XHRcdCA2NHB4ICFkZWZhdWx0O1xuJHBhZGRpbmctaWNvbjpcdFx0XHRcdFx0IDEycHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1pY29uOlx0XHQgICAgIDE1cHggIWRlZmF1bHQ7XG5cbiRzaXplLWljb246IFx0XHRcdFx0XHQgNjRweDtcbiRzaXplLWljb24tc206IFx0XHRcdFx0XHQgMzJweDtcblxuXG4kaGVpZ2h0LWljb24tc206XHRcdFx0XHQgMzJweDtcbiR3aWR0aC1pY29uLXNtOlx0XHRcdFx0XHQgMzJweDtcbiRwYWRkaW5nLWljb24tc206XHRcdFx0ICAgICA0cHg7XG4kYm9yZGVyLXJhZGl1cy1pY29uLXNtOlx0XHRcdCA3cHg7XG5cbiRoZWlnaHQtaWNvbi1tZXNzYWdlOlx0XHRcdCA0MHB4O1xuJHdpZHRoLWljb24tbWVzc2FnZTpcdFx0XHQgNDBweDtcblxuJGhlaWdodC1pY29uLW1lc3NhZ2Utc206IFx0XHQgMjBweDtcbiR3aWR0aC1pY29uLW1lc3NhZ2Utc206XHRcdFx0IDIwcHg7XG5cblxuXG4kd2hpdGUtbmF2YmFyOiAgICAgICAgICAgICAgcmdiYSgjRkZGRkZGLCAuOTYpO1xuJGJsdWUtbmF2YmFyOiAgICAgICAgICAgICAgIHJnYmEoIzM0QUNEQywgLjk4KTtcbiRhenVyZS1uYXZiYXI6ICAgICAgICAgICAgICByZ2JhKCM1QkNBRkYsIC45OCk7XG4kZ3JlZW4tbmF2YmFyOiAgICAgICAgICAgICAgcmdiYSgjNENEOTY0LCAuOTgpO1xuJG9yYW5nZS1uYXZiYXI6ICAgICAgICAgICAgIHJnYmEoI0ZGOTUwMCwgLjk4KTtcbiRyZWQtbmF2YmFyOiAgICAgICAgICAgICAgICByZ2JhKCNGRjRDNDAsIC45OCk7XG5cbiRiZy1udWRlOiAgICAgICAgICAgICAgICNGRkZDRjUgIWRlZmF1bHQ7XG4kYmctcHJpbWFyeTogICAgICAgICAgICBsaWdodGVuKCRwcmltYXJ5LWNvbG9yLCA3JSkgIWRlZmF1bHQ7XG4kYmctaW5mbzogICAgICAgICAgICAgICBsaWdodGVuKCRpbmZvLWNvbG9yLCA3JSkgIWRlZmF1bHQ7XG4kYmctc3VjY2VzczogICAgICAgICAgICBsaWdodGVuKCRzdWNjZXNzLWNvbG9yLCA3JSkgIWRlZmF1bHQ7XG4kYmctd2FybmluZzogICAgICAgICAgICBsaWdodGVuKCR3YXJuaW5nLWNvbG9yLCA3JSkgIWRlZmF1bHQ7XG4kYmctZGFuZ2VyOiAgICAgICAgICAgICBsaWdodGVuKCRkYW5nZXItY29sb3IsIDclKSAhZGVmYXVsdDtcbiRiZy1icm93bjogICAgICAgICAgICAgIGxpZ2h0ZW4oJGJyb3duLWNvbG9yLCA3JSkgIWRlZmF1bHQ7XG4kYmctcHVycGxlOiAgICAgICAgICAgICBsaWdodGVuKCRwdXJwbGUtY29sb3IsIDclKSAhZGVmYXVsdDtcblxuJHByZWxvYWRlci1jb2xvcjogICAgICAgICAgI0Q4RDFDOSAhZGVmYXVsdDtcblxuJGZpbHRlci1ibHVlOiAgICAgICAgIGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMTAlKTtcbiRmaWx0ZXItYXp1cmU6ICAgICAgICBkYXJrZW4oJGluZm8tY29sb3IsIDEwJSk7XG4kZmlsdGVyLWdyZWVuOiAgICAgICAgZGFya2VuKCRzdWNjZXNzLWNvbG9yLCAxMCUpO1xuJGZpbHRlci1vcmFuZ2U6ICAgICAgIGRhcmtlbigkd2FybmluZy1jb2xvciwgMTAlKTtcbiRmaWx0ZXItcmVkOiAgICAgICAgICBkYXJrZW4oJGRhbmdlci1jb2xvciwgMTAlKTtcblxuXG4kdG9wYmFyLXg6ICAgICAgICAgICAgIHRvcGJhci14ICFkZWZhdWx0O1xuJHRvcGJhci1iYWNrOiAgICAgICAgICB0b3BiYXItYmFjayAhZGVmYXVsdDtcbiRib3R0b21iYXIteDogICAgICAgICAgYm90dG9tYmFyLXggIWRlZmF1bHQ7XG4kYm90dG9tYmFyLWJhY2s6ICAgICAgIGJvdHRvbWJhci1iYWNrICFkZWZhdWx0O1xuXG4kc29jaWFsLWZhY2Vib29rOiBcdFx0XHQjM2I1OTk4O1xuJHNvY2lhbC10d2l0dGVyOiBcdFx0XHQjNTVhY2VlO1xuJHNvY2lhbC1waW50ZXJlc3Q6IFx0XHRcdCNjYzIxMjc7XG4kc29jaWFsLWdvb2dsZTogXHRcdFx0I2RkNGIzOTtcbiRzb2NpYWwtbGlua2VkaW46IFx0XHRcdCMwOTc2YjQ7XG4kc29jaWFsLWRyaWJiYmxlOiBcdFx0XHQjZWE0Yzg5O1xuJHNvY2lhbC1naXRodWI6IFx0XHRcdCMzMzMzMzM7XG4kc29jaWFsLXlvdXR1YmU6IFx0XHRcdCNlNTJkMjc7XG4kc29jaWFsLWluc3RhZ3JhbTogXHRcdCAgICAjMTI1Njg4O1xuJHNvY2lhbC1yZWRkaXQ6IFx0XHRcdCNmZjQ1MDA7XG4kc29jaWFsLXR1bWJscjogXHRcdFx0IzM1NDY1YztcblxuJGJhY2tncm91bmQtbGlnaHQtZ3JleTogICAgICNFOEU3RTMgIWRlZmF1bHQ7XG4kYmFja2dyb3VuZC1saWdodGVyLWdyZXk6ICAgI0YwRUZFQiAhZGVmYXVsdDtcbiRmb250LWJhY2tncm91bmQtbGlnaHQtZ3JleTogIzlDOUI5OSAhZGVmYXVsdDtcbiRmb250LWhvdmVyLWJhY2tncm91bmQtbGlnaHQtZ3JleTogIzVFNUU1QyAhZGVmYXVsdDtcblxuLy8gdmFyaWFibGVzIHVzZWQgaW4gaGVhZGVyc1xuJGhlYWRlci1iYWNrZ3JvdW5kOiAgICAgICAgICNCMkFGQUIgIWRlZmF1bHQ7XG5cbiRmaWx0ZXItcHJpbWFyeTogICAgICAgICBkYXJrZW4oJHByaW1hcnktY29sb3IsIDEwJSk7XG4kZmlsdGVyLWluZm86ICAgICAgICBkYXJrZW4oJGluZm8tY29sb3IsIDEwJSk7XG4kZmlsdGVyLXN1Y2Nlc3M6ICAgICAgICBkYXJrZW4oJHN1Y2Nlc3MtY29sb3IsIDEwJSk7XG4kZmlsdGVyLXdhcm5pbmc6ICAgICAgIGRhcmtlbigkd2FybmluZy1jb2xvciwgMTAlKTtcbiRmaWx0ZXItZGFuZ2VyOiAgICAgICAgICBkYXJrZW4oJGRhbmdlci1jb2xvciwgMTAlKTtcblxuLy8gdmFyaWFibGUgdXNlZCBpbiBmb290ZXJzXG4kYmxhY2stZm9vdGVyLWJnOiAgICAgICAgICAgICMyNTI0MjIgIWRlZmF1bHQ7XG4kYnJvd24tZm9udC1jb2xvcjogICAgICAgICAgICNBNDlFOUUgIWRlZmF1bHQ7XG4kYnJvd24tZm9udC1jb2xvci1ob3ZlcjogICAgICNGMUVBRTAgIWRlZmF1bHQ7XG5cbi8vdmFyaWFibGVzIHVzZWQgaW4gY2FyZHNcbiRjYXJkLWJsYWNrLWNvbG9yOiAgICAgICAgICAgIzMzMzMzMyAhZGVmYXVsdDtcbiRjYXJkLW11dGVkLWNvbG9yOiAgICAgICAgICAgI2NjYyAhZGVmYXVsdDtcblxuJGNhcmQtYmFja2dyb3VuZC1ibHVlOiAgICAgICNiOGQ4ZDggIWRlZmF1bHQ7XG4kY2FyZC1mb250LWJsdWU6ICAgICAgICAgICAgIzUwNjU2OCAhZGVmYXVsdDtcbiRjYXJkLXN1YnRpdGxlLWJsdWU6ICAgICAgICAjN2E5ZTlmICFkZWZhdWx0O1xuXG4kY2FyZC1iYWNrZ3JvdW5kLWdyZWVuOiAgICAgICNkNWU1YTMgIWRlZmF1bHQ7XG4kY2FyZC1mb250LWdyZWVuOiAgICAgICAgICAgICM2MDc3M2QgIWRlZmF1bHQ7XG4kY2FyZC1zdWJ0aXRsZS1ncmVlbjogICAgICAgICM5MmFjNTYgIWRlZmF1bHQ7XG5cbiRjYXJkLWJhY2tncm91bmQteWVsbG93OiAgICAgICNmZmUyOGMgIWRlZmF1bHQ7XG4kY2FyZC1mb250LXllbGxvdzogICAgICAgICAgICAjYjI1ODI1ICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUteWVsbG93OiAgICAgICAgI2Q4ODcxNSAhZGVmYXVsdDtcblxuJGNhcmQtYmFja2dyb3VuZC1icm93bjogICAgICAjZDZjMWFiICFkZWZhdWx0O1xuJGNhcmQtZm9udC1icm93bjogICAgICAgICAgICAjNzU0NDJlICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUtYnJvd246ICAgICAgICAjYTQ3ZTY1ICFkZWZhdWx0O1xuXG4kY2FyZC1iYWNrZ3JvdW5kLXB1cnBsZTogICAgICAjYmFhOWJhICFkZWZhdWx0O1xuJGNhcmQtZm9udC1wdXJwbGU6ICAgICAgICAgICAgIzNhMjgzZCAhZGVmYXVsdDtcbiRjYXJkLXN1YnRpdGxlLXB1cnBsZTogICAgICAgICM1YTI4M2QgIWRlZmF1bHQ7XG5cbiRjYXJkLWJhY2tncm91bmQtb3JhbmdlOiAgICAgICNmZjhmNWUgIWRlZmF1bHQ7XG4kY2FyZC1mb250LW9yYW5nZTogICAgICAgICAgICAjNzcyNTEwICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUtb3JhbmdlOiAgICAgICAgI2U5NWUzNyAhZGVmYXVsdDtcblxuJGNhcmQtYmFja2dyb3VuZC1wcmltYXJ5OiAgICAgIzQyN0M4OSAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1jb2xvcjogICAgICAgICAgICM0MjdDODkgIWRlZmF1bHQ7XG5cbiRjb2xvci1yZWQtZXJyb3I6IHJnYigxODUsIDc0LCA3MikgIWRlZmF1bHQ7XG4kY29sb3ItZ3JleS1hcnJvdzogcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjIpICFkZWZhdWx0O1xuXG4kd2lkdGgtZGVmYXVsdDogMjIwcHggIWRlZmF1bHQ7IC8vIDMgOTYwcHgtZ3JpZCBjb2x1bW5zXG5cbiR6aW5kZXgtc2VsZWN0LWRyb3Bkb3duOiAxMDYwICFkZWZhdWx0OyAvLyBtdXN0IGJlIGhpZ2hlciB0aGFuIGEgbW9kYWwgYmFja2dyb3VuZCAoMTA1MClcblxuLy8qKiBQbGFjZWhvbGRlciB0ZXh0IGNvbG9yXG4kaW5wdXQtY29sb3ItcGxhY2Vob2xkZXI6ICM5OTkgIWRlZmF1bHQ7XG5cblxuLy8gbWVkaWEgaGVhZGVyIFxuJG1lZGlhLWhlYWRlci1oZWlnaHQ6IDEwMHB4OyIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9wYXBlci1raXQvdmFyaWFibGVzXCI7XG5cbi52aWRlby1jb250YWluZXIge1xuICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgICAudmlkZW8tY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgaWZyYW1lIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/show-video/show-video.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/show-video/show-video.component.ts ***!
  \***************************************************************/
/*! exports provided: ShowVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowVideoComponent", function() { return ShowVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowVideoComponent = /** @class */ (function () {
    function ShowVideoComponent(sanitized) {
        this.sanitized = sanitized;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ShowVideoComponent.prototype.closeVideo = function () {
        this.close.emit(true);
    };
    ShowVideoComponent.prototype.ngOnInit = function () {
        this.frame = this.sanitized.bypassSecurityTrustHtml(this.video.embed);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ShowVideoComponent.prototype, "video", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ShowVideoComponent.prototype, "close", void 0);
    ShowVideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show-video',
            template: __webpack_require__(/*! ./show-video.component.html */ "./src/app/components/show-video/show-video.component.html"),
            styles: [__webpack_require__(/*! ./show-video.component.scss */ "./src/app/components/show-video/show-video.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], ShowVideoComponent);
    return ShowVideoComponent;
}());



/***/ }),

/***/ "./src/app/components/social-links/social-links.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/social-links/social-links.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"social-links\">\n  <ul>\n      <li><a href=\"https://www.facebook.com/propertysolutions.com.br/\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a></li>\n      <li><a href=\"https://www.instagram.com/propertysolutions.com.br/\" target=\"_blank\"><i class=\"fa fa-instagram\"></i></a></li>\n      <li><a href=\"https://wa.me/5581999205306?text=Olá, Property - Governança Imobiliária & Consultoria.\" target=\"_blank\"><i class=\"fa fa-whatsapp\"></i></a></li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/components/social-links/social-links.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/social-links/social-links.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".social-links {\n  position: fixed !important;\n  right: 10px;\n  display: flex;\n  z-index: 999;\n  top: 0;\n  height: 100vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center; }\n  .social-links ul {\n    background: rgba(127, 127, 127, 0.8);\n    padding: 15px;\n    margin: 5px 0px;\n    list-style: none;\n    border-radius: 30px; }\n  .social-links ul li {\n      margin: 5px 0px; }\n  .social-links ul li a {\n        color: #fff;\n        font-size: 1.6em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZmxhdmlvLXNpcXVlaXJhL3NyYy9hcHAvY29tcG9uZW50cy9zb2NpYWwtbGlua3Mvc29jaWFsLWxpbmtzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTBCO0VBQzFCLFlBQVc7RUFDWCxjQUFhO0VBQ2IsYUFBWTtFQUNaLE9BQU07RUFDTixjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLG9CQUFtQjtFQUNuQix3QkFBdUIsRUFrQnhCO0VBM0JEO0lBWUkscUNBQW9DO0lBQ3BDLGNBQWE7SUFDYixnQkFBZTtJQUNmLGlCQUFnQjtJQUNoQixvQkFBbUIsRUFVcEI7RUExQkg7TUFtQk0sZ0JBQWUsRUFNaEI7RUF6Qkw7UUFzQlEsWUFBVztRQUNYLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29jaWFsLWxpbmtzL3NvY2lhbC1saW5rcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb2NpYWwtbGlua3Mge1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDk5OTtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICB1bCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMjcsIDEyNywgMTI3LCAwLjgpO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWFyZ2luOiA1cHggMHB4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcblxuICAgIGxpIHtcbiAgICAgIG1hcmdpbjogNXB4IDBweDtcblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDEuNmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/social-links/social-links.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/social-links/social-links.component.ts ***!
  \*******************************************************************/
/*! exports provided: SocialLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLinksComponent", function() { return SocialLinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialLinksComponent = /** @class */ (function () {
    function SocialLinksComponent() {
    }
    SocialLinksComponent.prototype.ngOnInit = function () {
    };
    SocialLinksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-links',
            template: __webpack_require__(/*! ./social-links.component.html */ "./src/app/components/social-links/social-links.component.html"),
            styles: [__webpack_require__(/*! ./social-links.component.scss */ "./src/app/components/social-links/social-links.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialLinksComponent);
    return SocialLinksComponent;
}());



/***/ }),

/***/ "./src/app/directives/mask/mask.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directives/mask/mask.directive.ts ***!
  \***************************************************/
/*! exports provided: MaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskDirective", function() { return MaskDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_consts_consts_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/consts/consts.helpers */ "./src/app/helpers/consts/consts.helpers.ts");
/* harmony import */ var _utils_mask_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/mask.utils */ "./src/app/utils/mask.utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MaskDirective = /** @class */ (function () {
    function MaskDirective() {
        var _this = this;
        this.onChange = function (value) { };
        this.transform = function ($event, value) {
            $event.target.value = value;
            _this.writeValue(value);
        };
    }
    MaskDirective_1 = MaskDirective;
    MaskDirective.prototype.writeValue = function (value) { this.onChange(value); };
    MaskDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    MaskDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    MaskDirective.prototype.onKeyup = function ($event) {
        var _mask = _helpers_consts_consts_helpers__WEBPACK_IMPORTED_MODULE_2__["masks"][this.type.toUpperCase()];
        if ($event.keyCode !== 8) {
            if (this.type.toUpperCase() === 'PHONE') {
                var length_1 = $event.target.value.length;
                if (length_1 > 14) {
                    this.localType = 'PHONE_D';
                    _mask = _helpers_consts_consts_helpers__WEBPACK_IMPORTED_MODULE_2__["masks"][this.localType];
                }
            }
            var newValue = Object(_utils_mask_utils__WEBPACK_IMPORTED_MODULE_3__["maskFormat"])($event.target.value, _mask);
            this.transform($event, newValue);
        }
        else {
            var newValue = $event.target.value;
            if (this.type.toUpperCase() === 'PHONE') {
                var length_2 = $event.target.value.length;
                if (length_2 > 14) {
                    newValue = Object(_utils_mask_utils__WEBPACK_IMPORTED_MODULE_3__["maskFormat"])($event.target.value, _helpers_consts_consts_helpers__WEBPACK_IMPORTED_MODULE_2__["masks"]['PHONE']);
                }
            }
            this.transform($event, newValue);
        }
    };
    MaskDirective.prototype.onBlur = function ($event) {
        var type = this.localType ? this.localType : this.type;
        if ($event.target.value.length > _helpers_consts_consts_helpers__WEBPACK_IMPORTED_MODULE_2__["masks"][type.toUpperCase()].length) {
            var newValue = $event.target.value.slice(0, _helpers_consts_consts_helpers__WEBPACK_IMPORTED_MODULE_2__["masks"][this.type.toUpperCase()].length);
            this.transform($event, newValue);
        }
    };
    var MaskDirective_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('mask'),
        __metadata("design:type", String)
    ], MaskDirective.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MaskDirective.prototype, "onKeyup", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('blur', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MaskDirective.prototype, "onBlur", null);
    MaskDirective = MaskDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[mask]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: MaskDirective_1,
                    multi: true
                }]
        })
    ], MaskDirective);
    return MaskDirective;
}());



/***/ }),

/***/ "./src/app/directives/modal/modal.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/modal/modal.directive.ts ***!
  \*****************************************************/
/*! exports provided: ModalDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDirective", function() { return ModalDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalDirective = /** @class */ (function () {
    function ModalDirective() {
        this.alignItems = 'center';
        this.justifyContent = 'center';
        this.verticalAlign = 'middle';
        this.height = '100vh';
        this.maxWidth = '100%';
        this.width = '100%';
        this.position = 'fixed';
        this.zIndex = '99999';
        this.background = 'rgba(0, 0, 0, .6)';
        this.left = '0';
        this.top = '0';
        this.bottom = '0';
        this.right = '0';
        this.display = 'flex';
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.align-items'),
        __metadata("design:type", Object)
    ], ModalDirective.prototype, "alignItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.justify-content'),
        __metadata("design:type", Object)
    ], ModalDirective.prototype, "justifyContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.vertical-align'),
        __metadata("design:type", Object)
    ], ModalDirective.prototype, "verticalAlign", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.height'),
        __metadata("design:type", Object)
    ], ModalDirective.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.max-width'),
        __metadata("design:type", Object)
    ], ModalDirective.prototype, "maxWidth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.width'),
        __metadata("design:type", Object)
    ], ModalDirective.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.position'),
        __metadata("design:type", Object)
    ], ModalDirective.prototype, "position", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.z-index'),
        __metadata("design:type", Object)
    ], ModalDirective.prototype, "zIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.background'),
        __metadata("design:type", Object)
    ], ModalDirective.prototype, "background", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.left'),
        __metadata("design:type", Object)
    ], ModalDirective.prototype, "left", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.top'),
        __metadata("design:type", Object)
    ], ModalDirective.prototype, "top", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.bottom'),
        __metadata("design:type", Object)
    ], ModalDirective.prototype, "bottom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.right'),
        __metadata("design:type", Object)
    ], ModalDirective.prototype, "right", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.display'),
        __metadata("design:type", Object)
    ], ModalDirective.prototype, "display", void 0);
    ModalDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[modal]'
        }),
        __metadata("design:paramtypes", [])
    ], ModalDirective);
    return ModalDirective;
}());



/***/ }),

/***/ "./src/app/helpers/animations/animations.ts":
/*!**************************************************!*\
  !*** ./src/app/helpers/animations/animations.ts ***!
  \**************************************************/
/*! exports provided: routerTransition, bounceIn, listContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return bounceIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listContent", function() { return listContent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var DEFAULT_TIMING = 1;
var routerTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter .block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(400, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0px)', opacity: 1 })),
        ]), { optional: true }),
    ])
]);
var bounceIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])(Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ timing }}s {{ delay }}s cubic-bezier(0.215, 0.610, 0.355, 1.000)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(.9, .9, .9)', offset: 0.4 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'scale3d(1.03, 1.03, 1.03)',
        offset: 0.6
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(.97, .97, .97)', offset: 0.8 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 })
])), { params: { timing: DEFAULT_TIMING, delay: 0 } });
var listContent = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('listContent', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('150ms', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms cubic-bezier(.25,.75,.5,1.25)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translate3d(0,100%,0)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: .5, transform: ' translate3d(0,50%,0)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: ' translate3d(0,0,0)' }),
            ]))
        ]), { optional: true }),
    ])
]);


/***/ }),

/***/ "./src/app/helpers/consts/consts.helpers.ts":
/*!**************************************************!*\
  !*** ./src/app/helpers/consts/consts.helpers.ts ***!
  \**************************************************/
/*! exports provided: EMAIL_REGEX, NAME_REGEX, masks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_REGEX", function() { return EMAIL_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME_REGEX", function() { return NAME_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "masks", function() { return masks; });
var EMAIL_REGEX = /^(([^<>()\[\]\.,;:\s@\']+(\.[^<>()\[\]\.,;:\s@\']+)*)|(\'.+\'))@(([^<>()[\]\.,;:\s@\']+\.)+[^<>()[\]\.,;:\s@\']{2,})/;
var NAME_REGEX = /^(?!\s)[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]{2,25}$/;
var masks = {
    CPF: '999.999.999-99',
    CEP: '99999-999',
    CNPJ: '99.999.999/9999-99',
    PHONE_D: '(99) 99999-9999',
    PHONE: '(99) 9999-9999',
    CARD: '9999 9999 9999 9999 9',
    CARD_I: '999999 9999 99999 9999',
    DATE: '99/99/9999'
};


/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header\" id=\"home\">        \n        <div class=\"content-center\">\n            <div class=\"container\">\n                <div class=\"title-brand\">\n                        <img (load)=\"endLoad()\" class=\"img-fluid\" src=\"assets/img/brand/3 - Marca_fundo_transparente.png\" alt=\"\">\n                    <!-- <h1 class=\"presentation-title\">Property Solutions</h1> -->\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"main\">\n        <app-about></app-about>\n        <app-areas></app-areas>\n        <app-contact></app-contact>\n        <app-more-info> </app-more-info>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home {\n  padding: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZmxhdmlvLXNpcXVlaXJhL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob21lIHtcbiAgICBwYWRkaW5nOiA0MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.model = {
            left: true,
            middle: false,
            right: false
        };
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.endLoad = function () {
        document.querySelector('.site-preloader').classList.add('none');
    };
    HomeComponent.prototype.ngAfterViewChecked = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var app_components_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var app_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var app_components_areas_areas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/components/areas/areas.component */ "./src/app/components/areas/areas.component.ts");
/* harmony import */ var app_components_maps_maps_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/components/maps/maps.component */ "./src/app/components/maps/maps.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var app_directives_mask_mask_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/directives/mask/mask.directive */ "./src/app/directives/mask/mask.directive.ts");
/* harmony import */ var app_components_more_info_more_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/components/more-info/more-info.component */ "./src/app/components/more-info/more-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAc3mIx6dm3j6euaZkmmuafct-mpsBlvyY'
                })
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                app_components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                app_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                app_components_maps_maps_component__WEBPACK_IMPORTED_MODULE_9__["MapsComponent"],
                app_components_areas_areas_component__WEBPACK_IMPORTED_MODULE_8__["AreasComponent"],
                app_directives_mask_mask_directive__WEBPACK_IMPORTED_MODULE_13__["MaskDirective"],
                app_components_more_info_more_info_component__WEBPACK_IMPORTED_MODULE_14__["MoreInfoComponent"]
            ],
            exports: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/media/media.component.html":
/*!********************************************!*\
  !*** ./src/app/media/media.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu (selectMenu)=\"loadData($event)\" [type]=\"typeSnapshop\" [mode]=\"showMode\"></app-menu>\n\n<div class=\"main-wraper\">\n    <app-loading [loading]=\"loading\"></app-loading>\n    <app-media-header [type]=\"type\"></app-media-header>\n    <app-display-data *ngIf=\"!showMode\"  [type]=\"type\" [data]=\"data\" (selectVideo)=\"selectVideo($event)\"></app-display-data>\n    <app-content-view *ngIf=\"showMode && content\" [content]=\"content\"></app-content-view>\n</div>\n\n<app-show-video *ngIf=\"showVideo\" [video]=\"video\" (close)=\"close($event)\"></app-show-video>\n"

/***/ }),

/***/ "./src/app/media/media.component.scss":
/*!********************************************!*\
  !*** ./src/app/media/media.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*      light colors - used for select dropdown         */\n.main-wraper {\n  -webkit-transform: translate3d(150px, 0, 0);\n          transform: translate3d(150px, 0, 0);\n  min-height: calc(100vh - 100px);\n  position: relative;\n  transition: 0.3s all; }\n.main-wraper.menu-closed {\n    -webkit-transform: translate3d(0px, 0, 0);\n            transform: translate3d(0px, 0, 0);\n    transition: 0.3s all; }\n@media (min-width: 768px) {\n  .main-wraper {\n    padding-right: 150px; }\n    .main-wraper.menu-closed {\n      padding-right: 0 !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZmxhdmlvLXNpcXVlaXJhL3NyYy9hc3NldHMvc2Fzcy9wYXBlci1raXQvX3ZhcmlhYmxlcy5zY3NzIiwiL3Zhci93d3cvaHRtbC9mbGF2aW8tc2lxdWVpcmEvc3JjL2FwcC9tZWRpYS9tZWRpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RUEsMERBQTBEO0FDckUxRDtFQUVJLDRDQUFtQztVQUFuQyxvQ0FBbUM7RUFDbkMsZ0NBQWlEO0VBQ2pELG1CQUFrQjtFQUNsQixxQkFBb0IsRUFTdkI7QUFkRDtJQVdRLDBDQUFpQztZQUFqQyxrQ0FBaUM7SUFDakMscUJBQW9CLEVBQ3ZCO0FBSUw7RUFDSTtJQUNJLHFCQUFvQixFQUl2QjtJQUxEO01BR1EsNEJBQTBCLEVBQzdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZWRpYS9tZWRpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmb250LWNvbG9yOiAgICAgICAgICAgICAgICAgIzY2NjE1YiAhZGVmYXVsdDtcbiRmaWxsLWZvbnQtY29sb3I6ICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgICAnTW9udHNlcnJhdCcsIFwiSGVsdmV0aWNhXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kbm9uZTogICAgICAgICAgICAgICAgICAgICAgIDAgICAhZGVmYXVsdDtcbiRib3JkZXItdGhpbjogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuJGJvcmRlci10aGljazogICAgICAgICAgICAgICAycHggIWRlZmF1bHQ7XG5cbiR3aGl0ZS1jb2xvcjogICAgICAgICAgICAgICAgI0ZGRkZGRiAhZGVmYXVsdDtcbiR3aGl0ZS1iZzogICAgICAgICAgICAgICAgICAgI0ZGRkZGRiAhZGVmYXVsdDtcbiR3aGl0ZS1zdGF0ZXMtY29sb3I6ICAgICAgICAgcmdiYSgkd2hpdGUtY29sb3IsIDAuOCk7XG5cbiRzbW9rZS1iZzogICAgICAgICAgICAgICAgICAgI0Y1RjVGNSAhZGVmYXVsdDtcbiRwYWxlLWJnOiAgICAgICAgICAgICAgICAgICAgI0ZGRkNGNSAhZGVmYXVsdDtcbiRtZWRpdW0tcGFsZS1iZzogICAgICAgICAgICAgI0YxRUFFMCAhZGVmYXVsdDtcblxuJHRhYmxlLWxpbmUtY29sb3I6ICAgICAgICAgICAjY2NjICFkZWZhdWx0O1xuJG11dGVkLWNvbG9yOiAgICAgICAgICAgICAgICAjYTQ5ZTkzICFkZWZhdWx0O1xuXG4kYmxhY2stYmc6ICAgICAgICAgICAgICAgICAgIHJnYmEoMzAsMzAsMzAsLjk3KSAhZGVmYXVsdDtcblxuJGJsYWNrLWNvbG9yOiAgICAgICAgICAgICAgICAjMzMzMzMzICFkZWZhdWx0O1xuJGJsYWNrLWhyOiAgICAgICAgICAgICAgICAgICAjNDQ0NDQ0ICFkZWZhdWx0O1xuXG4kbGlnaHQtZ3JheTogICAgICAgICAgICAgICAgICNFM0UzRTMgIWRlZmF1bHQ7XG4kbWVkaXVtLWdyYXk6ICAgICAgICAgICAgICAgICNEREREREQgIWRlZmF1bHQ7XG4kZGFyay1ncmF5OiAgICAgICAgICAgICAgICAgICM5QTlBOUEgIWRlZmF1bHQ7XG5cbiRwbGFjZWhvbGRlci1ncmF5OiAgICAgICAgICAgcmdiYSgyMTAsIDIxMCwgMjEwLCAxKSAgIWRlZmF1bHQ7XG5cbiRncmF5LWlucHV0LWJnOiAgICAgICAgICAgICAgI2ZmZmNmNSAhZGVmYXVsdDtcbiRkYW5nZXItaW5wdXQtYmc6ICAgICAgICAgICAgI0ZGQzBBNCAhZGVmYXVsdDtcbiRzdWNjZXNzLWlucHV0LWJnOiAgICAgICAgICAgI0FCRjNDQiAhZGVmYXVsdDtcbiRvdGhlci1tZWRpdW0tZ3JheTogICAgICAgICAgI0E0OUU5MyAhZGVmYXVsdDtcbiR0cmFuc3BhcmVudC1iZzogICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRkZWZhdWx0LWNvbG9yOiAgICAgICAgICAgICAgIzY2NjE1QiAhZGVmYXVsdDtcbiRkZWZhdWx0LWJnOiAgICAgICAgICAgICAgICAgIzY2NjE1QiAhZGVmYXVsdDtcbiRkZWZhdWx0LXN0YXRlcy1jb2xvcjogICAgICAgIzQwM0QzOSAhZGVmYXVsdDtcblxuJHByaW1hcnktY29sb3I6ICAgICAgICAgICAgICAjNTFjYmNlICFkZWZhdWx0O1xuJHByaW1hcnktc3RhdGVzLWNvbG9yOiAgICAgICBkYXJrZW4oJHByaW1hcnktY29sb3IsIDEwJSkgIWRlZmF1bHQ7XG5cbiRzdWNjZXNzLWNvbG9yOiAgICAgICAgICAgICAgIzZiZDA5OCAhZGVmYXVsdDtcbiRzdWNjZXNzLXN0YXRlcy1jb2xvcjogICAgICAgZGFya2VuKCRzdWNjZXNzLWNvbG9yLCAxMCUpICFkZWZhdWx0O1xuXG4kaW5mby1jb2xvcjogICAgICAgICAgICAgICAgICM1MWJjZGEgIWRlZmF1bHQ7XG4kaW5mby1zdGF0ZXMtY29sb3I6ICAgICAgICAgIGRhcmtlbigkaW5mby1jb2xvciwgMTAlKSAhZGVmYXVsdDtcblxuJHdhcm5pbmctY29sb3I6ICAgICAgICAgICAgICAjZmJjNjU4ICFkZWZhdWx0O1xuJHdhcm5pbmctc3RhdGVzLWNvbG9yOiAgICAgICBkYXJrZW4oJHdhcm5pbmctY29sb3IsIDEwJSkgIWRlZmF1bHQ7XG5cbiRkYW5nZXItY29sb3I6ICAgICAgICAgICAgICAgI2Y1NTkzZCAhZGVmYXVsdDtcbiRkYW5nZXItc3RhdGVzLWNvbG9yOiAgICAgICAgZGFya2VuKCRkYW5nZXItY29sb3IsIDglKSAhZGVmYXVsdDtcblxuJGxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICAjNjY2NjY2ICFkZWZhdWx0O1xuXG4kcHVycGxlLWNvbG9yOiAgICAgICAgICAgICAgICNjMTc4YzEgIWRlZmF1bHQ7XG4kcHVycGxlLXN0YXRlcy1jb2xvcjogICAgICAgIGRhcmtlbigkcHVycGxlLWNvbG9yLCA4JSkgIWRlZmF1bHQ7XG5cbiRicm93bi1jb2xvcjogICAgICAgICAgICAgICAgI2RjYjI4NSAhZGVmYXVsdDtcbiRicm93bi1zdGF0ZXMtY29sb3I6ICAgICAgICAgZGFya2VuKCRicm93bi1jb2xvciwgOCUpICFkZWZhdWx0O1xuXG5cbi8vIEJSQU5EIFZBUklBQkxFU1xuJG1haW4tY29sb3I6ICAgICAgICAgICAgICAgICAjOUY3NDI1ICFkZWZhdWx0O1xuJHNlY29uZC1jb2xvcjogICAgICAgICAgICAgICAjRUJENTgyICFkZWZhdWx0O1xuJGJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICAjMDAwMDAwICFkZWZhdWx0O1xuXG5cblxuLyogICAgICBsaWdodCBjb2xvcnMgLSB1c2VkIGZvciBzZWxlY3QgZHJvcGRvd24gICAgICAgICAqL1xuXG4kbGlnaHQtYmx1ZTogICAgICAgICAgICAgICAgIHJnYmEoJHByaW1hcnktY29sb3IsIC4yKTtcbiRsaWdodC1henVyZTogICAgICAgICAgICAgICAgcmdiYSgkaW5mby1jb2xvciwgLjIpO1xuJGxpZ2h0LWdyZWVuOiAgICAgICAgICAgICAgICByZ2JhKCRzdWNjZXNzLWNvbG9yLCAuMik7XG4kbGlnaHQtb3JhbmdlOiAgICAgICAgICAgICAgIHJnYmEoJHdhcm5pbmctY29sb3IsIC4yKTtcbiRsaWdodC1yZWQ6ICAgICAgICAgICAgICAgICAgcmdiYSgkZGFuZ2VyLWNvbG9yLCAuMik7XG5cblxuLy89PSBDb21wb25lbnRzXG4vL1xuJHBhZGRpbmctYmFzZS12ZXJ0aWNhbDogICAgICAgICA3cHggIWRlZmF1bHQ7XG4kcGFkZGluZy1iYXNlLWhvcml6b250YWw6ICAgICAgIDE4cHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLXJvdW5kLXZlcnRpY2FsOiAgICAgICAgOXB4ICFkZWZhdWx0O1xuJHBhZGRpbmctcm91bmQtaG9yaXpvbnRhbDogICAgIDE4cHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLXNpbXBsZS12ZXJ0aWNhbDogICAgICAxMHB4ICFkZWZhdWx0O1xuJHBhZGRpbmctc2ltcGxlLWhvcml6b250YWw6ICAgIDE4cHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLWxhcmdlLXZlcnRpY2FsOiAgICAgICAxMXB4ICFkZWZhdWx0O1xuJHBhZGRpbmctbGFyZ2UtaG9yaXpvbnRhbDogICAgIDMwcHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLXNtYWxsLXZlcnRpY2FsOiAgICAgICAgNHB4ICFkZWZhdWx0O1xuJHBhZGRpbmctc21hbGwtaG9yaXpvbnRhbDogICAgIDEwcHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLXhzLXZlcnRpY2FsOiAgICAgICAgICAgMnB4ICFkZWZhdWx0O1xuJHBhZGRpbmcteHMtaG9yaXpvbnRhbDogICAgICAgICA1cHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLWxhYmVsLXZlcnRpY2FsOiAgICAgICAgMnB4ICFkZWZhdWx0O1xuJHBhZGRpbmctbGFiZWwtaG9yaXpvbnRhbDogICAgIDEycHggIWRlZmF1bHQ7XG5cbi8vIHBhZGRpbmcgZm9yIGxpbmtzIGluc2lkZSBkcm9wZG93biBtZW51XG4kcGFkZGluZy1kcm9wZG93bi12ZXJ0aWNhbDogICAgIDEwcHggIWRlZmF1bHQ7XG4kcGFkZGluZy1kcm9wZG93bi1ob3Jpem9udGFsOiAgIDE1cHggIWRlZmF1bHQ7XG5cbiRtYXJnaW4tbGFyZ2UtdmVydGljYWw6ICAgICAgICAzMHB4ICFkZWZhdWx0O1xuJG1hcmdpbi1iYXNlLXZlcnRpY2FsOiAgICAgICAgIDE1cHggIWRlZmF1bHQ7XG5cbi8vIGJvcmRlciByYWRpdXMgZm9yIGJ1dHRvbnNcbiRib3JkZXItcmFkaXVzLW5vbmU6ICAgICAgICAgICAgIDBweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWJ0bi1zbWFsbDogICAgICAyNnB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtYnRuLWJhc2U6ICAgICAgIDIwcHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1idG4tbGFyZ2U6ICAgICAgNTBweCAhZGVmYXVsdDtcblxuXG4kbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAgMCAwIDEwcHggMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtYWxsOiAgICAgICAgICAgM3B4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtYmFzZTogICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sYXJnZTogICAgICAgICAgIDZweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXgtbGFyZ2U6ICAgICAgICAgOHB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtZXh0cmVtZTogICAgICAgICAxMnB4ICFkZWZhdWx0O1xuXG4kYm9yZGVyLXJhZGl1cy1ub25lLXRvcDogICAgICAkYm9yZGVyLXJhZGl1cy1ub25lICRib3JkZXItcmFkaXVzLW5vbmUgMCAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbm9uZS1ib3R0b206ICAgMCAwICRib3JkZXItcmFkaXVzLW5vbmUgJGJvcmRlci1yYWRpdXMtbm9uZSAhZGVmYXVsdDtcblxuJGJvcmRlci1yYWRpdXMtc21hbGwtdG9wOiAgICAgICRib3JkZXItcmFkaXVzLXNtYWxsICRib3JkZXItcmFkaXVzLXNtYWxsIDAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtYWxsLWJvdHRvbTogICAwIDAgJGJvcmRlci1yYWRpdXMtc21hbGwgJGJvcmRlci1yYWRpdXMtc21hbGwgIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzLWxhcmdlLXRvcDogICAgICAkYm9yZGVyLXJhZGl1cy1sYXJnZSAkYm9yZGVyLXJhZGl1cy1sYXJnZSAwIDAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sYXJnZS1ib3R0b206ICAgMCAwICRib3JkZXItcmFkaXVzLWxhcmdlICRib3JkZXItcmFkaXVzLWxhcmdlICFkZWZhdWx0O1xuXG4kYnRuLXJvdW5kLXJhZGl1czogICAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcblxuJGhlaWdodC1iYXNlOiAgICAgICAgICAgICAgICAgIDQwcHggIWRlZmF1bHQ7XG5cbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgICAxNHB4ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1zbWFsbDogICAgICAgICAgICAgIDEycHggIWRlZmF1bHQ7XG4kZm9udC1zaXplLW1lZGl1bTogICAgICAgICAgICAgMTZweCAhZGVmYXVsdDtcbiRmb250LXNpemUtbGFyZ2U6ICAgICAgICAgICAgICAyMHB4ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1sYXJnZS1uYXZiYXI6ICAgICAgIDIycHggIWRlZmF1bHQ7XG5cbiRmb250LXNpemUtaDE6ICAgICAgICAgICAgICAgICAzLjZlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtaDI6ICAgICAgICAgICAgICAgICAyLjhlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtaDM6ICAgICAgICAgICAgICAgICAxLjgyNWVtICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1oNDogICAgICAgICAgICAgICAgIDEuNmVtICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1oNTogICAgICAgICAgICAgICAgIDEuMzVlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtaDY6ICAgICAgICAgICAgICAgICAwLjllbSAhZGVmYXVsdDtcbiRmb250LXBhcmFncmFwaDogICAgICAgICAgICAgICAxNXB4ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1uYXZiYXI6ICAgICAgICAgICAgIDE0cHggIWRlZmF1bHQ7XG5cbiRmb250LXNpemUtaW5mby1ob3Jpem9udGFsOiAgICAyLjVlbSAhZGVmYXVsdDtcblxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiAgICAgICAgIDQwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1zZW1pOiAgICAgICAgICAgNTAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWJvbGQ6ICAgICAgICAgICA2MDAgIWRlZmF1bHQ7XG5cbiRsaW5lLWhlaWdodC1zbWFsbDogICAgICAgICAgICAyMHB4ICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0LWdlbmVyYWw6ICAgICAgICAgIDEuNWVtICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAgICAgMzZweCAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1sZzogICAgICAgICAgICAgIDU0cHggIWRlZmF1bHQ7XG5cblxuJGJvcmRlci1yYWRpdXMtdG9wOiAgICAgICAgMTBweCAxMHB4IDAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWJvdHRvbTogICAgIDAgMCAxMHB4IDEwcHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1kcm9wZG93bjogICAxMHB4IDEwcHggIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1zaGFkb3c6ICAgICAgICAgIDAgMnB4IHJnYmEoMTcsIDE2LCAxNSwgMC4xKSwgMCAycHggMTBweCByZ2JhKDE3LCAxNiwgMTUsIDAuMSk7XG5cbiRnZW5lcmFsLXRyYW5zaXRpb24tdGltZTogIDMwMG1zICFkZWZhdWx0O1xuXG4kc2xvdy10cmFuc2l0aW9uLXRpbWU6ICAgICAgICAgICAzMDBtcyAhZGVmYXVsdDtcbiRkcm9wZG93bi1jb29yZGluYXRlczogICAgICAyOXB4IC01MHB4ICFkZWZhdWx0O1xuXG4kZmFzdC10cmFuc2l0aW9uLXRpbWU6ICAgICAgICAgICAxNTBtcyAhZGVmYXVsdDtcbiRzZWxlY3QtY29vcmRpbmF0ZXM6ICAgICAgICAgNTAlIC00MHB4ICFkZWZhdWx0O1xuXG4kdHJhbnNpdGlvbi1saW5lYXI6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lYXIgIWRlZmF1bHQ7XG4kdHJhbnNpdGlvbi1iZXppZXI6ICAgICAgICAgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNjEsIDAuNywgMSkgIWRlZmF1bHQ7XG4kdHJhbnNpdGlvbi1lYXNlOiAgICAgICAgICAgZWFzZSAwcztcblxuJG5hdmJhci1wYWRkaW5nLWE6ICAgICAgICAgICAgICAgMTBweCAxNXB4O1xuJG5hdmJhci1tYXJnaW4tYTogICAgICAgICAgICAgICAgMTVweCAgMHB4O1xuXG4kcGFkZGluZy1zb2NpYWwtYTogICAgICAgICAgICAgICAxMHB4ICA1cHg7XG5cbiRuYXZiYXItbWFyZ2luLWEtYnRuOiAgICAgICAgICAgIDE1cHggM3B4O1xuJG5hdmJhci1tYXJnaW4tYS1idG4tcm91bmQ6ICAgICAgMTZweCAzcHg7XG5cbiRuYXZiYXItcGFkZGluZy1hLWljb25zOiAgICAgICAgIDZweCAxNXB4O1xuJG5hdmJhci1tYXJnaW4tYS1pY29uczogICAgICAgICAgNnB4ICAzcHg7XG5cbiRuYXZiYXItcGFkZGluZy1icmFuZDogICAgICAgICAgIDIwcHggMTVweDtcbiRuYXZiYXItbWFyZ2luLWJyYW5kOiAgICAgICAgICAgICA1cHggIDBweDtcblxuJG5hdmJhci1tYXJnaW4tYnJhbmQtaWNvbnM6ICAgICAgMTJweCBhdXRvO1xuXG4kbmF2YmFyLW1hcmdpbi1idG46ICAgICAgICAgICAgICAxNXB4ICAzcHg7XG5cbiRoZWlnaHQtaWNvbjpcdFx0XHRcdFx0IDY0cHggIWRlZmF1bHQ7XG4kd2lkdGgtaWNvbjpcdFx0XHRcdFx0IDY0cHggIWRlZmF1bHQ7XG4kcGFkZGluZy1pY29uOlx0XHRcdFx0XHQgMTJweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWljb246XHRcdCAgICAgMTVweCAhZGVmYXVsdDtcblxuJHNpemUtaWNvbjogXHRcdFx0XHRcdCA2NHB4O1xuJHNpemUtaWNvbi1zbTogXHRcdFx0XHRcdCAzMnB4O1xuXG5cbiRoZWlnaHQtaWNvbi1zbTpcdFx0XHRcdCAzMnB4O1xuJHdpZHRoLWljb24tc206XHRcdFx0XHRcdCAzMnB4O1xuJHBhZGRpbmctaWNvbi1zbTpcdFx0XHQgICAgIDRweDtcbiRib3JkZXItcmFkaXVzLWljb24tc206XHRcdFx0IDdweDtcblxuJGhlaWdodC1pY29uLW1lc3NhZ2U6XHRcdFx0IDQwcHg7XG4kd2lkdGgtaWNvbi1tZXNzYWdlOlx0XHRcdCA0MHB4O1xuXG4kaGVpZ2h0LWljb24tbWVzc2FnZS1zbTogXHRcdCAyMHB4O1xuJHdpZHRoLWljb24tbWVzc2FnZS1zbTpcdFx0XHQgMjBweDtcblxuXG5cbiR3aGl0ZS1uYXZiYXI6ICAgICAgICAgICAgICByZ2JhKCNGRkZGRkYsIC45Nik7XG4kYmx1ZS1uYXZiYXI6ICAgICAgICAgICAgICAgcmdiYSgjMzRBQ0RDLCAuOTgpO1xuJGF6dXJlLW5hdmJhcjogICAgICAgICAgICAgIHJnYmEoIzVCQ0FGRiwgLjk4KTtcbiRncmVlbi1uYXZiYXI6ICAgICAgICAgICAgICByZ2JhKCM0Q0Q5NjQsIC45OCk7XG4kb3JhbmdlLW5hdmJhcjogICAgICAgICAgICAgcmdiYSgjRkY5NTAwLCAuOTgpO1xuJHJlZC1uYXZiYXI6ICAgICAgICAgICAgICAgIHJnYmEoI0ZGNEM0MCwgLjk4KTtcblxuJGJnLW51ZGU6ICAgICAgICAgICAgICAgI0ZGRkNGNSAhZGVmYXVsdDtcbiRiZy1wcmltYXJ5OiAgICAgICAgICAgIGxpZ2h0ZW4oJHByaW1hcnktY29sb3IsIDclKSAhZGVmYXVsdDtcbiRiZy1pbmZvOiAgICAgICAgICAgICAgIGxpZ2h0ZW4oJGluZm8tY29sb3IsIDclKSAhZGVmYXVsdDtcbiRiZy1zdWNjZXNzOiAgICAgICAgICAgIGxpZ2h0ZW4oJHN1Y2Nlc3MtY29sb3IsIDclKSAhZGVmYXVsdDtcbiRiZy13YXJuaW5nOiAgICAgICAgICAgIGxpZ2h0ZW4oJHdhcm5pbmctY29sb3IsIDclKSAhZGVmYXVsdDtcbiRiZy1kYW5nZXI6ICAgICAgICAgICAgIGxpZ2h0ZW4oJGRhbmdlci1jb2xvciwgNyUpICFkZWZhdWx0O1xuJGJnLWJyb3duOiAgICAgICAgICAgICAgbGlnaHRlbigkYnJvd24tY29sb3IsIDclKSAhZGVmYXVsdDtcbiRiZy1wdXJwbGU6ICAgICAgICAgICAgIGxpZ2h0ZW4oJHB1cnBsZS1jb2xvciwgNyUpICFkZWZhdWx0O1xuXG4kcHJlbG9hZGVyLWNvbG9yOiAgICAgICAgICAjRDhEMUM5ICFkZWZhdWx0O1xuXG4kZmlsdGVyLWJsdWU6ICAgICAgICAgZGFya2VuKCRwcmltYXJ5LWNvbG9yLCAxMCUpO1xuJGZpbHRlci1henVyZTogICAgICAgIGRhcmtlbigkaW5mby1jb2xvciwgMTAlKTtcbiRmaWx0ZXItZ3JlZW46ICAgICAgICBkYXJrZW4oJHN1Y2Nlc3MtY29sb3IsIDEwJSk7XG4kZmlsdGVyLW9yYW5nZTogICAgICAgZGFya2VuKCR3YXJuaW5nLWNvbG9yLCAxMCUpO1xuJGZpbHRlci1yZWQ6ICAgICAgICAgIGRhcmtlbigkZGFuZ2VyLWNvbG9yLCAxMCUpO1xuXG5cbiR0b3BiYXIteDogICAgICAgICAgICAgdG9wYmFyLXggIWRlZmF1bHQ7XG4kdG9wYmFyLWJhY2s6ICAgICAgICAgIHRvcGJhci1iYWNrICFkZWZhdWx0O1xuJGJvdHRvbWJhci14OiAgICAgICAgICBib3R0b21iYXIteCAhZGVmYXVsdDtcbiRib3R0b21iYXItYmFjazogICAgICAgYm90dG9tYmFyLWJhY2sgIWRlZmF1bHQ7XG5cbiRzb2NpYWwtZmFjZWJvb2s6IFx0XHRcdCMzYjU5OTg7XG4kc29jaWFsLXR3aXR0ZXI6IFx0XHRcdCM1NWFjZWU7XG4kc29jaWFsLXBpbnRlcmVzdDogXHRcdFx0I2NjMjEyNztcbiRzb2NpYWwtZ29vZ2xlOiBcdFx0XHQjZGQ0YjM5O1xuJHNvY2lhbC1saW5rZWRpbjogXHRcdFx0IzA5NzZiNDtcbiRzb2NpYWwtZHJpYmJibGU6IFx0XHRcdCNlYTRjODk7XG4kc29jaWFsLWdpdGh1YjogXHRcdFx0IzMzMzMzMztcbiRzb2NpYWwteW91dHViZTogXHRcdFx0I2U1MmQyNztcbiRzb2NpYWwtaW5zdGFncmFtOiBcdFx0ICAgICMxMjU2ODg7XG4kc29jaWFsLXJlZGRpdDogXHRcdFx0I2ZmNDUwMDtcbiRzb2NpYWwtdHVtYmxyOiBcdFx0XHQjMzU0NjVjO1xuXG4kYmFja2dyb3VuZC1saWdodC1ncmV5OiAgICAgI0U4RTdFMyAhZGVmYXVsdDtcbiRiYWNrZ3JvdW5kLWxpZ2h0ZXItZ3JleTogICAjRjBFRkVCICFkZWZhdWx0O1xuJGZvbnQtYmFja2dyb3VuZC1saWdodC1ncmV5OiAjOUM5Qjk5ICFkZWZhdWx0O1xuJGZvbnQtaG92ZXItYmFja2dyb3VuZC1saWdodC1ncmV5OiAjNUU1RTVDICFkZWZhdWx0O1xuXG4vLyB2YXJpYWJsZXMgdXNlZCBpbiBoZWFkZXJzXG4kaGVhZGVyLWJhY2tncm91bmQ6ICAgICAgICAgI0IyQUZBQiAhZGVmYXVsdDtcblxuJGZpbHRlci1wcmltYXJ5OiAgICAgICAgIGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMTAlKTtcbiRmaWx0ZXItaW5mbzogICAgICAgIGRhcmtlbigkaW5mby1jb2xvciwgMTAlKTtcbiRmaWx0ZXItc3VjY2VzczogICAgICAgIGRhcmtlbigkc3VjY2Vzcy1jb2xvciwgMTAlKTtcbiRmaWx0ZXItd2FybmluZzogICAgICAgZGFya2VuKCR3YXJuaW5nLWNvbG9yLCAxMCUpO1xuJGZpbHRlci1kYW5nZXI6ICAgICAgICAgIGRhcmtlbigkZGFuZ2VyLWNvbG9yLCAxMCUpO1xuXG4vLyB2YXJpYWJsZSB1c2VkIGluIGZvb3RlcnNcbiRibGFjay1mb290ZXItYmc6ICAgICAgICAgICAgIzI1MjQyMiAhZGVmYXVsdDtcbiRicm93bi1mb250LWNvbG9yOiAgICAgICAgICAgI0E0OUU5RSAhZGVmYXVsdDtcbiRicm93bi1mb250LWNvbG9yLWhvdmVyOiAgICAgI0YxRUFFMCAhZGVmYXVsdDtcblxuLy92YXJpYWJsZXMgdXNlZCBpbiBjYXJkc1xuJGNhcmQtYmxhY2stY29sb3I6ICAgICAgICAgICAjMzMzMzMzICFkZWZhdWx0O1xuJGNhcmQtbXV0ZWQtY29sb3I6ICAgICAgICAgICAjY2NjICFkZWZhdWx0O1xuXG4kY2FyZC1iYWNrZ3JvdW5kLWJsdWU6ICAgICAgI2I4ZDhkOCAhZGVmYXVsdDtcbiRjYXJkLWZvbnQtYmx1ZTogICAgICAgICAgICAjNTA2NTY4ICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUtYmx1ZTogICAgICAgICM3YTllOWYgIWRlZmF1bHQ7XG5cbiRjYXJkLWJhY2tncm91bmQtZ3JlZW46ICAgICAgI2Q1ZTVhMyAhZGVmYXVsdDtcbiRjYXJkLWZvbnQtZ3JlZW46ICAgICAgICAgICAgIzYwNzczZCAhZGVmYXVsdDtcbiRjYXJkLXN1YnRpdGxlLWdyZWVuOiAgICAgICAgIzkyYWM1NiAhZGVmYXVsdDtcblxuJGNhcmQtYmFja2dyb3VuZC15ZWxsb3c6ICAgICAgI2ZmZTI4YyAhZGVmYXVsdDtcbiRjYXJkLWZvbnQteWVsbG93OiAgICAgICAgICAgICNiMjU4MjUgIWRlZmF1bHQ7XG4kY2FyZC1zdWJ0aXRsZS15ZWxsb3c6ICAgICAgICAjZDg4NzE1ICFkZWZhdWx0O1xuXG4kY2FyZC1iYWNrZ3JvdW5kLWJyb3duOiAgICAgICNkNmMxYWIgIWRlZmF1bHQ7XG4kY2FyZC1mb250LWJyb3duOiAgICAgICAgICAgICM3NTQ0MmUgIWRlZmF1bHQ7XG4kY2FyZC1zdWJ0aXRsZS1icm93bjogICAgICAgICNhNDdlNjUgIWRlZmF1bHQ7XG5cbiRjYXJkLWJhY2tncm91bmQtcHVycGxlOiAgICAgICNiYWE5YmEgIWRlZmF1bHQ7XG4kY2FyZC1mb250LXB1cnBsZTogICAgICAgICAgICAjM2EyODNkICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUtcHVycGxlOiAgICAgICAgIzVhMjgzZCAhZGVmYXVsdDtcblxuJGNhcmQtYmFja2dyb3VuZC1vcmFuZ2U6ICAgICAgI2ZmOGY1ZSAhZGVmYXVsdDtcbiRjYXJkLWZvbnQtb3JhbmdlOiAgICAgICAgICAgICM3NzI1MTAgIWRlZmF1bHQ7XG4kY2FyZC1zdWJ0aXRsZS1vcmFuZ2U6ICAgICAgICAjZTk1ZTM3ICFkZWZhdWx0O1xuXG4kY2FyZC1iYWNrZ3JvdW5kLXByaW1hcnk6ICAgICAjNDI3Qzg5ICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgIzQyN0M4OSAhZGVmYXVsdDtcblxuJGNvbG9yLXJlZC1lcnJvcjogcmdiKDE4NSwgNzQsIDcyKSAhZGVmYXVsdDtcbiRjb2xvci1ncmV5LWFycm93OiByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuMikgIWRlZmF1bHQ7XG5cbiR3aWR0aC1kZWZhdWx0OiAyMjBweCAhZGVmYXVsdDsgLy8gMyA5NjBweC1ncmlkIGNvbHVtbnNcblxuJHppbmRleC1zZWxlY3QtZHJvcGRvd246IDEwNjAgIWRlZmF1bHQ7IC8vIG11c3QgYmUgaGlnaGVyIHRoYW4gYSBtb2RhbCBiYWNrZ3JvdW5kICgxMDUwKVxuXG4vLyoqIFBsYWNlaG9sZGVyIHRleHQgY29sb3JcbiRpbnB1dC1jb2xvci1wbGFjZWhvbGRlcjogIzk5OSAhZGVmYXVsdDtcblxuXG4vLyBtZWRpYSBoZWFkZXIgXG4kbWVkaWEtaGVhZGVyLWhlaWdodDogMTAwcHg7IiwiQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9zYXNzL3BhcGVyLWtpdC92YXJpYWJsZXNcIjtcblxuLm1haW4td3JhcGVyIHtcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDE1MHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTUwcHgsIDAsIDApO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRtZWRpYS1oZWFkZXItaGVpZ2h0fSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDE1MHB4O1xuXG4gICAgJi5tZW51LWNsb3NlZHtcbiAgICAgICAgLy8gcGFkZGluZy1yaWdodDogMCFpbXBvcnRhbnQ7XG4gICAgICAgIC8vIHBhZGRpbmctbGVmdDogMCFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwLCAwKTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG4gICAgfVxufVxuXG5cbkBtZWRpYShtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLm1haW4td3JhcGVyIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTUwcHg7XG4gICAgICAgICYubWVudS1jbG9zZWR7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH0gICAgXG59Il19 */"

/***/ }),

/***/ "./src/app/media/media.component.ts":
/*!******************************************!*\
  !*** ./src/app/media/media.component.ts ***!
  \******************************************/
/*! exports provided: MediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaComponent", function() { return MediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_contents_contents_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/contents/contents.service */ "./src/app/services/contents/contents.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MediaComponent = /** @class */ (function () {
    function MediaComponent(contentService, active) {
        this.contentService = contentService;
        this.active = active;
        this.loading = false;
        this.mobile = false;
        this.showMode = false;
        this.showVideo = false;
    }
    MediaComponent.prototype.onWindowResize = function ($event) {
        this.mobileMode();
    };
    MediaComponent.prototype.mobileMode = function () {
        var width = window.innerWidth;
        var wraper = document.querySelector('.main-wraper');
        var menu = document.querySelector('.media-menu');
        var classMobile = 'menu-closed';
        if (width <= 768) {
            this.mobile = true;
            if (!menu.classList.contains(classMobile) && wraper.classList.contains(classMobile)) {
            }
            else {
                menu.classList.add(classMobile);
                wraper.classList.add(classMobile);
            }
        }
        else {
            this.mobile = false;
            menu.classList.remove(classMobile);
            wraper.classList.remove(classMobile);
        }
    };
    MediaComponent.prototype.loadContent = function (type, id) {
        var _this = this;
        var $type = type === 'videos' ? type : type === 'artigos' ? 'articles' : type === 'noticias' ? 'news' : 'decisions';
        this.typeSnapshop = $type;
        this.contentService.show($type, id).subscribe(function (content) {
            _this.content = content;
        }, function (error) { });
    };
    MediaComponent.prototype.loadData = function ($event) {
        var _this = this;
        if (!this.id && $event.click) {
            this.data = [];
            this.showMode = false;
            this.loading = true;
            this.type = $event.type;
            this.contentService.get(this.type.value).subscribe(function (contents) {
                _this.loading = false;
                _this.data = contents;
            }, function (error) {
                _this.loading = false;
                _this.data = {
                    data: [],
                    meta: null
                };
            });
        }
    };
    MediaComponent.prototype.close = function ($event) {
        this.showVideo = false;
    };
    MediaComponent.prototype.selectVideo = function ($event) {
        this.showVideo = true;
        this.video = $event;
    };
    MediaComponent.prototype.ngOnInit = function () {
        this.mobileMode();
        this.id = this.active.snapshot.params['id'];
        this.typeSnapshop = this.active.snapshot.data['type'];
        if (this.typeSnapshop === 'show' && this.id) {
            var type = this.active.snapshot.params['type'];
            this.showMode = true;
            this.loadContent(type, this.id);
        }
    };
    MediaComponent.prototype.ngAfterViewChecked = function () {
        document.querySelector('.site-preloader').classList.add('none');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MediaComponent.prototype, "onWindowResize", null);
    MediaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-media',
            template: __webpack_require__(/*! ./media.component.html */ "./src/app/media/media.component.html"),
            styles: [__webpack_require__(/*! ./media.component.scss */ "./src/app/media/media.component.scss")],
            providers: [app_services_contents_contents_service__WEBPACK_IMPORTED_MODULE_1__["ContentsService"]]
        }),
        __metadata("design:paramtypes", [app_services_contents_contents_service__WEBPACK_IMPORTED_MODULE_1__["ContentsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MediaComponent);
    return MediaComponent;
}());



/***/ }),

/***/ "./src/app/media/media.module.ts":
/*!***************************************!*\
  !*** ./src/app/media/media.module.ts ***!
  \***************************************/
/*! exports provided: MediaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaModule", function() { return MediaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _media_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media.component */ "./src/app/media/media.component.ts");
/* harmony import */ var app_components_content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/components/content/content.component */ "./src/app/components/content/content.component.ts");
/* harmony import */ var app_components_display_data_display_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/components/display-data/display-data.component */ "./src/app/components/display-data/display-data.component.ts");
/* harmony import */ var app_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/components/loading/loading.component */ "./src/app/components/loading/loading.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_components_media_header_media_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/components/media-header/media-header.component */ "./src/app/components/media-header/media-header.component.ts");
/* harmony import */ var app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_components_content_view_content_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/components/content-view/content-view.component */ "./src/app/components/content-view/content-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_components_show_video_show_video_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/components/show-video/show-video.component */ "./src/app/components/show-video/show-video.component.ts");
/* harmony import */ var app_directives_modal_modal_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/directives/modal/modal.directive */ "./src/app/directives/modal/modal.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var MediaModule = /** @class */ (function () {
    function MediaModule() {
    }
    MediaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]
            ],
            declarations: [
                _media_component__WEBPACK_IMPORTED_MODULE_2__["MediaComponent"],
                app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                app_components_content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"],
                app_components_display_data_display_data_component__WEBPACK_IMPORTED_MODULE_4__["DisplayDataComponent"],
                app_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"],
                app_components_media_header_media_header_component__WEBPACK_IMPORTED_MODULE_7__["MediaHeaderComponent"],
                app_components_content_view_content_view_component__WEBPACK_IMPORTED_MODULE_10__["ContentViewComponent"],
                app_components_show_video_show_video_component__WEBPACK_IMPORTED_MODULE_12__["ShowVideoComponent"],
                app_directives_modal_modal_directive__WEBPACK_IMPORTED_MODULE_13__["ModalDirective"]
            ]
        })
    ], MediaModule);
    return MediaModule;
}());



/***/ }),

/***/ "./src/app/services/contents/contents.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/contents/contents.service.ts ***!
  \*******************************************************/
/*! exports provided: ContentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentsService", function() { return ContentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentsService = /** @class */ (function () {
    function ContentsService(http) {
        this.http = http;
        this.API_URL = 'https://api.propertysolutions.com.br/api';
    }
    ContentsService.prototype.get = function (type) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.http.get(_this.API_URL + "/" + type).subscribe(function (contents) {
                observer.next(contents);
            }, function (error) {
                observer.error(error);
            });
        });
    };
    ContentsService.prototype.show = function (type, id) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.http.get(_this.API_URL + "/" + type + "/" + id).subscribe(function (content) {
                observer.next(content.data);
            }, function (error) {
                observer.error(error);
            });
        });
    };
    ContentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContentsService);
    return ContentsService;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <!--start footer-->\n   <footer class=\"section-dark\" id=\"footer\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"copyright-text\">\n                    <p>Copyright By - Property Solutions - 2018</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</footer>\n<!--end footer-->"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-------------------------------------------------------------------------------------\n    Footer Area\n---------------------------------------------------------------------------------------*/\n#footer {\n  background-color: #1e2729;\n  padding: 22px 0 10px; }\n.footer-social ul li {\n  display: inline-block; }\n.footer-social ul li a {\n  padding: 0 5px;\n  color: #fff; }\n.copyright-text p {\n  color: #c2c8c9; }\n.footer-info-content img {\n  margin: 0 0 35px; }\n.footer-info-content p {\n  color: #aeb3b4; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZmxhdmlvLXNpcXVlaXJhL3NyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O3lGQUV5RjtBQUV6RjtFQUNJLDBCQUF5QjtFQUN6QixxQkFDSixFQUFDO0FBRUQ7RUFDSSxzQkFBcUIsRUFDeEI7QUFFRDtFQUNJLGVBQWM7RUFDZCxZQUFXLEVBQ2Q7QUFFRDtFQUNJLGVBQ0osRUFBQztBQUVEO0VBQ0ksaUJBQ0osRUFBQztBQUVEO0VBQ0ksZUFDSixFQUFDIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBGb290ZXIgQXJlYVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuI2Zvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjcyOTtcbiAgICBwYWRkaW5nOiAyMnB4IDAgMTBweFxufVxuXG4uZm9vdGVyLXNvY2lhbCB1bCBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZm9vdGVyLXNvY2lhbCB1bCBsaSBhIHtcbiAgICBwYWRkaW5nOiAwIDVweDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmNvcHlyaWdodC10ZXh0IHAge1xuICAgIGNvbG9yOiAjYzJjOGM5XG59XG5cbi5mb290ZXItaW5mby1jb250ZW50IGltZyB7XG4gICAgbWFyZ2luOiAwIDAgMzVweFxufVxuXG4uZm9vdGVyLWluZm8tY29udGVudCBwIHtcbiAgICBjb2xvcjogI2FlYjNiNFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"500\">\n    <div class=\"container\">\n\n        <div class=\"navbar-translate\">\n            <a class=\"navbar-brand\" href=\"/\">\n                <img src=\"assets/img/brand/logo-nav.png\" class=\"logo\" alt=\"\">\n            </a>\n            <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\"\n                aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n            </button>\n        </div>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarToggler\">\n            <ul class=\"navbar-nav ml-auto\">\n\n                <li class=\"nav-item\">\n                    <a (click)=\"navScroll('home')\" class=\"nav-link\" target=\"_blank\">\n                        Início\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a (click)=\"navScroll('about')\" class=\"nav-link\" target=\"_blank\">\n                        Quem Somos\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a (click)=\"navScroll('passport-process-area')\" class=\"nav-link\" target=\"_blank\">\n                        Áreas de atuação\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a (click)=\"navScroll('contact-area')\" class=\"nav-link\" target=\"_blank\">\n                        Contato\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a (click)=\"navScroll('more-info')\" class=\"nav-link\" target=\"_blank\">\n                        Links úteis\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a  [routerLink]=\"['/midia/noticias']\" class=\"nav-link\">\n                        <span> Mídias</span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-item {\n  cursor: pointer; }\n\n.toggled {\n  display: initial; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZmxhdmlvLXNpcXVlaXJhL3NyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1pdGVtIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50b2dnbGVkIHtcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, location, element) {
        this.router = router;
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (val) {
            _this.mode = _this.location.path().includes('midia');
        });
    };
    NavbarComponent.prototype.navScroll = function (path) {
        var target = document.querySelector('#' + path);
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.sidebarClose();
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        if (!this.mode) {
            var html = document.getElementsByTagName('html')[0];
            setTimeout(function () {
                var toggleButton = document.getElementById('navbarToggler');
                toggleButton.classList.remove('collapse');
            }, 200);
            html.classList.add('nav-open');
            this.sidebarVisible = true;
        }
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        if (!this.mode) {
            var html = document.getElementsByTagName('html')[0];
            setTimeout(function () {
                var toggleButton = document.getElementById('navbarToggler');
                toggleButton.classList.add('collapse');
            }, 200);
            html.classList.remove('nav-open');
            this.sidebarVisible = false;
        }
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        if (!this.mode) {
            if (this.sidebarVisible === false) {
                this.sidebarOpen();
            }
            else {
                this.sidebarClose();
            }
        }
    };
    ;
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/utils/mask.utils.ts":
/*!*************************************!*\
  !*** ./src/app/utils/mask.utils.ts ***!
  \*************************************/
/*! exports provided: maskFormat, cleanUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskFormat", function() { return maskFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanUp", function() { return cleanUp; });
var maskFormat = function (value, maskDefault) {
    var valor = cleanUp(value);
    var pad = maskDefault.replace(/\D/g, '').replace(/9/g, '_');
    var valorMask = valor + pad.substring(0, pad.length - valor.length);
    var valorMaskPos = 0;
    valor = '';
    for (var i = 0; i < maskDefault.length; i++) {
        valor += isNaN(parseInt(maskDefault.charAt(i), 10)) ? maskDefault.charAt(i) : valorMask[valorMaskPos++];
    }
    if (valor.indexOf('_') > -1) {
        valor = valor.substr(0, valor.indexOf('_'));
    }
    value = valor;
    return value;
};
var cleanUp = function (value) {
    return value.replace(/\D/g, '');
};


/***/ }),

/***/ "./src/app/validators/form-builder.validators.ts":
/*!*******************************************************!*\
  !*** ./src/app/validators/form-builder.validators.ts ***!
  \*******************************************************/
/*! exports provided: FormBuilderValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilderValidators", function() { return FormBuilderValidators; });
/* harmony import */ var _single_validators_regex_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-validators/regex.validators */ "./src/app/validators/single-validators/regex.validators.ts");
/* harmony import */ var _single_validators_cpf_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-validators/cpf.validators */ "./src/app/validators/single-validators/cpf.validators.ts");
/* harmony import */ var _single_validators_phone_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-validators/phone.validators */ "./src/app/validators/single-validators/phone.validators.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormBuilderValidators = /** @class */ (function () {
    function FormBuilderValidators() {
    }
    FormBuilderValidators.prototype.emailFormat = function (control) {
        return Object(_single_validators_regex_validators__WEBPACK_IMPORTED_MODULE_0__["validEmail"])(control.value) ? null : { 'emailFormat': true };
    };
    FormBuilderValidators.prototype.nameFormat = function (control) {
        return Object(_single_validators_regex_validators__WEBPACK_IMPORTED_MODULE_0__["validName"])(control.value) ? null : { 'nameFormat': true };
    };
    FormBuilderValidators.prototype.cpfFormat = function (control) {
        return Object(_single_validators_cpf_validators__WEBPACK_IMPORTED_MODULE_1__["validCpf"])(control.value) ? null : { 'cpfFormat': true };
    };
    FormBuilderValidators.prototype.phoneFormat = function (control) {
        return Object(_single_validators_phone_validators__WEBPACK_IMPORTED_MODULE_2__["validPhone"])(control.value) ? null : { 'phoneFormat': true };
    };
    FormBuilderValidators = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FormBuilderValidators);
    return FormBuilderValidators;
}());



/***/ }),

/***/ "./src/app/validators/index.ts":
/*!*************************************!*\
  !*** ./src/app/validators/index.ts ***!
  \*************************************/
/*! exports provided: FormBuilderValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_builder_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-builder.validators */ "./src/app/validators/form-builder.validators.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormBuilderValidators", function() { return _form_builder_validators__WEBPACK_IMPORTED_MODULE_0__["FormBuilderValidators"]; });




/***/ }),

/***/ "./src/app/validators/single-validators/cpf.validators.ts":
/*!****************************************************************!*\
  !*** ./src/app/validators/single-validators/cpf.validators.ts ***!
  \****************************************************************/
/*! exports provided: validCpf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validCpf", function() { return validCpf; });
/* harmony import */ var _utils_mask_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/mask.utils */ "./src/app/utils/mask.utils.ts");

var invalidsCpfs = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
];
var validCpf = function (cpf) {
    var result = true;
    if (cpf) {
        var value = Object(_utils_mask_utils__WEBPACK_IMPORTED_MODULE_0__["cleanUp"])(cpf);
        var length_1 = value.length;
        result = length_1 === 11 ? checkCpf(value) : false;
    }
    return result;
};
var checkCpf = function (strCPF) {
    var sum = 0;
    var over;
    if (invalidsCpfs.includes(strCPF)) {
        return false;
    }
    for (var i = 1; i <= 9; i++) {
        sum += parseInt(strCPF.substring(i - 1, i), 10) * (11 - i);
    }
    over = (sum * 10) % 11;
    if ((over === 10) || (over === 11)) {
        over = 0;
    }
    if (over !== parseInt(strCPF.substring(9, 10), 10)) {
        return false;
    }
    sum = 0;
    for (var i = 1; i <= 10; i++) {
        sum = sum + parseInt(strCPF.substring(i - 1, i), 10) * (12 - i);
    }
    over = (sum * 10) % 11;
    if ((over === 10) || (over === 11)) {
        over = 0;
    }
    return over === parseInt(strCPF.substring(10, 11), 10);
};


/***/ }),

/***/ "./src/app/validators/single-validators/phone.validators.ts":
/*!******************************************************************!*\
  !*** ./src/app/validators/single-validators/phone.validators.ts ***!
  \******************************************************************/
/*! exports provided: validPhone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validPhone", function() { return validPhone; });
/* harmony import */ var _utils_mask_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/mask.utils */ "./src/app/utils/mask.utils.ts");

var validPhone = function (phone) {
    return validWIthDigt(phone);
};
var validWIthDigt = function ($phone) {
    var validation = true;
    var phone = Object(_utils_mask_utils__WEBPACK_IMPORTED_MODULE_0__["cleanUp"])($phone);
    if (phone.length < 10 || phone.length > 11) {
        validation = false;
    }
    if (['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10'].indexOf(phone.substring(0, 2)) !== -1) {
        validation = false;
    }
    return validation;
};


/***/ }),

/***/ "./src/app/validators/single-validators/regex.validators.ts":
/*!******************************************************************!*\
  !*** ./src/app/validators/single-validators/regex.validators.ts ***!
  \******************************************************************/
/*! exports provided: validEmail, validName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validEmail", function() { return validEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validName", function() { return validName; });
/* harmony import */ var _helpers_consts_consts_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/consts/consts.helpers */ "./src/app/helpers/consts/consts.helpers.ts");

var validEmail = function (email) {
    return (!email) ? true : _helpers_consts_consts_helpers__WEBPACK_IMPORTED_MODULE_0__["EMAIL_REGEX"].test(email);
};
var validName = function (name) {
    return (!name) ? true : _helpers_consts_consts_helpers__WEBPACK_IMPORTED_MODULE_0__["NAME_REGEX"].test(name);
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/flavio-siqueira/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map