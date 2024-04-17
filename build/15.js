webpackJsonp([15],{

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextPageModule", function() { return TextPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__text__ = __webpack_require__(801);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TextPageModule = /** @class */ (function () {
    function TextPageModule() {
    }
    TextPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__text__["a" /* TextPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__text__["a" /* TextPage */]),
            ],
        })
    ], TextPageModule);
    return TextPageModule;
}());

//# sourceMappingURL=text.module.js.map

/***/ }),

/***/ 801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_link_manager_link_manager__ = __webpack_require__(78);
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
 * Generated class for the TextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TextPage = /** @class */ (function () {
    function TextPage(navCtrl, navParams, viewCtrl, http, linkManager) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.linkManager = linkManager;
        this.title = '';
        this.content = '';
        this.isHtml = false;
        this.closeAble = false;
        if (navParams.get("callback") != null)
            this.callback = navParams.get('callback');
        this.isHtml = navParams.get("html") == true;
        this.closeAble = navParams.get("closeable") == true;
        var link = navParams.get("target");
        if (link == undefined) {
            this.navCtrl.setRoot(TextPage_1, { html: true, closable: false, target: this.linkManager.getDatenschutzAsJSON() }, { animate: true, direction: 'forward' });
        }
        this.http.get(link).subscribe(function (response) {
            _this.content = JSON.parse(response.text())["body"][0]["value"];
            _this.title = JSON.parse(response.text())["title"][0]["value"];
        });
    }
    TextPage_1 = TextPage;
    TextPage.prototype.openHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    TextPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    TextPage.prototype.ionViewDidLoad = function () {
    };
    TextPage.prototype.ionViewDidLeave = function () {
        if (this.callback != null)
            this.callback();
    };
    var TextPage_1;
    TextPage = TextPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-text',template:/*ion-inline-start:"D:\ger\wzk\front\3 wzk few options3\3 wzk few options\clinic_app_frontend\src\pages\text\text.html"*/'<!--\n  Generated template for the TextPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button *ngIf="!closeAble" ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title text-center>{{title}}</ion-title>\n    <ion-buttons end>\n\n     <button item-right ion-button *ngIf="closeAble" (click)="dismiss()">\n        <span ion-text color="primary" >Schließen</span>&nbsp;\n        <ion-icon name="md-close" ></ion-icon>\n      </button>\n      <button *ngIf="!closeAble" ion-button (click)="openHomePage()">\n        <img class="homeLogoNavBar" src="assets/home/icon.svg">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div *ngIf="isHtml" [innerHTML]="content"></div>\n    <div *ngIf="!isHtml" >{{content}}</div>\n\n</ion-content>\n'/*ion-inline-end:"D:\ger\wzk\front\3 wzk few options3\3 wzk few options\clinic_app_frontend\src\pages\text\text.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_link_manager_link_manager__["a" /* LinkManagerProvider */]])
    ], TextPage);
    return TextPage;
}());

//# sourceMappingURL=text.js.map

/***/ })

});
//# sourceMappingURL=15.js.map