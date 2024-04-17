webpackJsonp([25],{

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImprintPageModule", function() { return ImprintPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imprint__ = __webpack_require__(756);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImprintPageModule = /** @class */ (function () {
    function ImprintPageModule() {
    }
    ImprintPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__imprint__["a" /* ImprintPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__imprint__["a" /* ImprintPage */]),
            ],
        })
    ], ImprintPageModule);
    return ImprintPageModule;
}());

//# sourceMappingURL=imprint.module.js.map

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImprintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ImprintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ImprintPage = /** @class */ (function () {
    function ImprintPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ImprintPage.prototype.openHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ImprintPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImprintPage');
    };
    ImprintPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-imprint',template:/*ion-inline-start:"D:\ger\wzk\front\3 wzk few options3\3 wzk few options\clinic_app_frontend\src\pages\imprint\imprint.html"*/'<!--\n  Generated template for the ImprintPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Impressum</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="openHomePage()">\n        <img class="homeLogoNavBar" src="assets/home/icon.svg">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <h4>Impressum</h4>\n  <p>\n    Waldburg-Zeil Kliniken GmbH & Co. KG<br />\n    Riedstraße 16<br />\n    Zentrale<br />\n    88316 Isny-Neutrauchburg<br />\n  </p>\n  <p>\n    Telefon: +49 (0) 7562 71-1135<br />\n    Telefax: +49 (0) 7562 71-1080<br />\n    E-Mail: info@wz-kliniken.de<br />\n  </p>\n  <br />\n  <h5>Vertreten durch:</h5>\n  <p>Waldburg-Zeil Kliniken GmbH<br />\n    Geschäftsführer: Dipl.-Kaufmann Ellio Schneider<br />\n    Registergericht: Ulm<br />\n    Registernummer: HRA 620661</p>\n  <br />\n  <h5>Registereintrag:</h5>\n  <p>\n    Eingetragen im Handelsregister.<br/>\n    Registergericht: Ulm<br/>\n    Registernummer: HRA 620661<br/>\n  </p>\n  <h5>Umsatzsteuer-ID:</h5>\n  <p>Umsatzsteuer-Identifikationsnummer nach §27a Umsatzsteuergesetz:<br />\n    DE 147 359 875</p>\n</ion-content>\n'/*ion-inline-end:"D:\ger\wzk\front\3 wzk few options3\3 wzk few options\clinic_app_frontend\src\pages\imprint\imprint.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ImprintPage);
    return ImprintPage;
}());

//# sourceMappingURL=imprint.js.map

/***/ })

});
//# sourceMappingURL=25.js.map