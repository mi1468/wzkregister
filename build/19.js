webpackJsonp([19],{

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetPageModule", function() { return PasswordResetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password_reset__ = __webpack_require__(798);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PasswordResetPageModule = /** @class */ (function () {
    function PasswordResetPageModule() {
    }
    PasswordResetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__password_reset__["a" /* PasswordResetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__password_reset__["a" /* PasswordResetPage */]),
            ],
        })
    ], PasswordResetPageModule);
    return PasswordResetPageModule;
}());

//# sourceMappingURL=password-reset.module.js.map

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_manager_auth_manager__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_gui_manager_gui_manager__ = __webpack_require__(40);
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
 * Generated class for the PasswordResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PasswordResetPage = /** @class */ (function () {
    function PasswordResetPage(navCtrl, navParams, authProvider, guiManager) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.guiManager = guiManager;
        this.isRequest = false;
        this.resetMail = '';
        this.passOne = '';
        this.passTwo = '';
        var action = navParams.get('ac');
        this.isRequest = action == "request";
    }
    PasswordResetPage.prototype.reset = function () {
    };
    /**
     * Requests a password reset from the backend.
     */
    PasswordResetPage.prototype.requestReset = function () {
        var _this = this;
        this.authProvider.requestPasswordReset(this.resetMail, function (success) {
            if (success) {
                _this.guiManager.showToast("Es wurde eine Email mit weiteren Schritten versendet", 10000);
            }
            else {
                _this.guiManager.showToast("Fehler beim versenden der Email", 10000);
            }
        });
    };
    PasswordResetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PasswordResetPage');
    };
    PasswordResetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password-reset',template:/*ion-inline-start:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\password-reset\password-reset.html"*/'<!--\n  Generated template for the PasswordResetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <!--<button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>-->\n      <ion-title text-center>Passwort zurücksetzen</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngIf="isRequest">\n    <ion-card-header>\n      <h2>Passwort vergessen?</h2>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Falls Sie ihr Login Passwort vergessen haben, können Sie es hier zurücksetzen!</p>\n\n      <ion-item >\n        <ion-label floating>E-Mail Adresse</ion-label>\n        <ion-input type="email" name="username" [(ngModel)]="resetMail"></ion-input>\n      </ion-item>\n\n      <button style="margin-top: 25px" (click)="requestReset()" ion-button block default color="primary" >Anfordern</button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="!isRequest">\n    <ion-card-header>\n      <h2>Passwort zurücksetzen</h2>\n      <p>Neues Passwort anlegen</p>\n    </ion-card-header>\n    <ion-card-content>\n\n      <ion-item >\n        <ion-label floating>Passwort eingeben</ion-label>\n        <ion-input type="password" [(ngModel)]="passOne"></ion-input>\n      </ion-item>\n      <ion-item >\n        <ion-label floating>Passwort wiederholen</ion-label>\n        <ion-input type="password" [(ngModel)]="passTwo"></ion-input>\n      </ion-item>\n\n      <button style="margin-top: 25px" (click)="reset()" ion-button block default color="primary" [disabled]="!valid">Setzen</button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\password-reset\password-reset.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_manager_auth_manager__["a" /* AuthManagerProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_gui_manager_gui_manager__["a" /* GuiManagerProvider */]])
    ], PasswordResetPage);
    return PasswordResetPage;
}());

//# sourceMappingURL=password-reset.js.map

/***/ })

});
//# sourceMappingURL=19.js.map