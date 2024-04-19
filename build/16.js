webpackJsonp([16],{

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartTextPageModule", function() { return StartTextPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start_text__ = __webpack_require__(800);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StartTextPageModule = /** @class */ (function () {
    function StartTextPageModule() {
    }
    StartTextPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__start_text__["a" /* StartTextPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__start_text__["a" /* StartTextPage */]),
            ],
        })
    ], StartTextPageModule);
    return StartTextPageModule;
}());

//# sourceMappingURL=start-text.module.js.map

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartTextPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the StartTextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StartTextPage = /** @class */ (function () {
    function StartTextPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StartTextPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StartTextPage');
    };
    StartTextPage.prototype.start = function () {
        this.navCtrl.dismiss();
    };
    StartTextPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-start-text',template:/*ion-inline-start:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\start-text\start-text.html"*/'<!--\n  Generated template for the StartTextPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>Einführung</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-content>\n      <h1 text-center>Willkommen zur WZ Kliniken App!</h1>\n      <br />\n      <br />\n      <br />\n      <p>Sie befinden sich im Einführungsabschnitt der App!</p>\n      <p>Sobald Sie auf den großen Button unter diesem Text drücken, kommen Sie zu einer Einführung aller Funktionen der App!<br />\n      Um durch diese Anleitung zu gehen, streichen Sie von rechts nach links. Um zum vorrherigen Abschnitt der Einleitung zu gelangen, streichen Sie von links nach rechts!</p>\n      <p>Viel Spaß in der App!</p>\n      <br />\n      <button ion-button (click)="start()" full>Zur Einführung Drücken</button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\start-text\start-text.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], StartTextPage);
    return StartTextPage;
}());

//# sourceMappingURL=start-text.js.map

/***/ })

});
//# sourceMappingURL=16.js.map