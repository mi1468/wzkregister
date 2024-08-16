webpackJsonp([17],{

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartFilterPageModule", function() { return StartFilterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start_filter__ = __webpack_require__(799);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StartFilterPageModule = /** @class */ (function () {
    function StartFilterPageModule() {
    }
    StartFilterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__start_filter__["a" /* StartFilterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__start_filter__["a" /* StartFilterPage */]),
            ],
        })
    ], StartFilterPageModule);
    return StartFilterPageModule;
}());

//# sourceMappingURL=start-filter.module.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartFilterPage; });
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
 * Generated class for the StartFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StartFilterPage = /** @class */ (function () {
    function StartFilterPage(navCtrl, navParams, viewCtrl, renderer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.renderer = renderer;
        this.drvSelected = true;
    }
    StartFilterPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad StartFilterPage");
    };
    StartFilterPage.prototype.ngAfterViewInit = function () {
        var modalWrapper = document.querySelector(".modal-wrapper");
        if (modalWrapper) {
            this.renderer.setStyle(modalWrapper, "height", "333px");
        }
    };
    StartFilterPage.prototype.handleDRVClick = function () {
        this.viewCtrl.dismiss(this.drvSelected);
        var modalWrapper = document.querySelector(".modal-wrapper");
        if (modalWrapper) {
            this.renderer.setStyle(modalWrapper, "height", "100%");
        }
    };
    StartFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-start-filter",template:/*ion-inline-start:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\start-filter\start-filter.html"*/'<ion-content class="filter-content" padding>\n      <h2><b>Kostenträger</b></h2>\n      <h5 style="margin-top: 5px"><b>Wer übernimmt die Kosten Ihrer Reha ?:</b></h5>\n      <div style="margin-top: 40px">\n        <ion-item style="margin-top: 5px" >\n          <ion-label style="padding-left: 12px;">Deutsche Rentenversicherung (DRV)\n          </ion-label>\n          <ion-checkbox mode="ios" [(ngModel)]="!drvSelected" (click)="drvSelected = false" ></ion-checkbox>\n        </ion-item>\n        <ion-item style="margin-top: 2px" >\n          <ion-label style="padding-left:12px;">Andere\n          </ion-label>\n          <ion-checkbox mode="ios" [ngModel]="drvSelected" (click)="drvSelected = true"></ion-checkbox>\n        </ion-item>\n      </div>\n    <button ion-button full class="filter-button" (click)="handleDRVClick()">Weiter</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\start-filter\start-filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], StartFilterPage);
    return StartFilterPage;
}());

//# sourceMappingURL=start-filter.js.map

/***/ })

});
//# sourceMappingURL=17.js.map