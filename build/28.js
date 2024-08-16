webpackJsonp([28],{

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailConfirmationPageModule", function() { return EmailConfirmationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_confirmation__ = __webpack_require__(753);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmailConfirmationPageModule = /** @class */ (function () {
    function EmailConfirmationPageModule() {
    }
    EmailConfirmationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__email_confirmation__["a" /* EmailConfirmation */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__email_confirmation__["a" /* EmailConfirmation */]),
            ],
        })
    ], EmailConfirmationPageModule);
    return EmailConfirmationPageModule;
}());

//# sourceMappingURL=email-confirmation.module.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailConfirmation; });
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
 * Generated class for the EmailConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmailConfirmation = /** @class */ (function () {
    function EmailConfirmation(navCtrl, navParams, viewCtrl, renderer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.renderer = renderer;
        this.email = 'mail@mail.de';
        if (this.navParams.get('selectedEmail')) {
            this.email = this.navParams.get('selectedEmail');
        }
    }
    EmailConfirmation.prototype.ngAfterViewInit = function () {
        var modalWrapper = document.querySelector('.modal-wrapper');
        if (modalWrapper) {
            this.renderer.setStyle(modalWrapper, 'height', '190px');
        }
    };
    EmailConfirmation.prototype.handleCloseButton = function () {
        this.viewCtrl.dismiss();
        var modalWrapper = document.querySelector('.modal-wrapper');
        if (modalWrapper) {
            this.renderer.setStyle(modalWrapper, 'height', '100%');
        }
    };
    EmailConfirmation.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmailConfirmationPage');
    };
    EmailConfirmation = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-email-confirmation',template:/*ion-inline-start:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\email-confirmation\email-confirmation.html"*/'<ion-content class="confirmation-content" padding>\n\n    <h2><b>Bestätigungsmail</b></h2>\n    <h5 style="margin-top: 5px">Wir haben eine Bestätigungsmail an {{email}} versandt, bitte öffnen Sie den Link\n        innerhalb dieser um fortzufahren.\n    </h5>\n    <div style="margin-top: 40px">\n    </div>\n    <button ion-button full class="confirmation-button" (click)="handleCloseButton()">Weiter</button>\n\n</ion-content>'/*ion-inline-end:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\email-confirmation\email-confirmation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], EmailConfirmation);
    return EmailConfirmation;
}());

//# sourceMappingURL=email-confirmation.js.map

/***/ })

});
//# sourceMappingURL=28.js.map