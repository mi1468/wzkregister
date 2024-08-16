webpackJsonp([9],{

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsFingerprintActivationPageModule", function() { return UserSettingsFingerprintActivationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_settings_fingerprint_activation__ = __webpack_require__(808);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserSettingsFingerprintActivationPageModule = /** @class */ (function () {
    function UserSettingsFingerprintActivationPageModule() {
    }
    UserSettingsFingerprintActivationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_settings_fingerprint_activation__["a" /* UserSettingsFingerprintActivationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_settings_fingerprint_activation__["a" /* UserSettingsFingerprintActivationPage */]),
            ],
        })
    ], UserSettingsFingerprintActivationPageModule);
    return UserSettingsFingerprintActivationPageModule;
}());

//# sourceMappingURL=user-settings-fingerprint-activation.module.js.map

/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettingsFingerprintActivationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_manager_storage_manager__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_touch_manager_touch_manager__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_gui_manager_gui_manager__ = __webpack_require__(40);
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
 * Generated class for the UserSettingsFingerprintActivationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserSettingsFingerprintActivationPage = /** @class */ (function () {
    function UserSettingsFingerprintActivationPage(navCtrl, navParams, storage, touchManager, guiManager) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.touchManager = touchManager;
        this.guiManager = guiManager;
        this.activatedBiometricLogin = true;
        this.loadStatus();
    }
    UserSettingsFingerprintActivationPage.prototype.ionViewDidLoad = function () {
        this.loadStatus();
    };
    UserSettingsFingerprintActivationPage.prototype.loadStatus = function () {
        var _this = this;
        this.storage.contains("touch-ignore", function (does) {
            if (does) {
                _this.activatedBiometricLogin = false;
            }
            else {
                _this.storage.contains("touch-info", function (contains) {
                    _this.activatedBiometricLogin = !!contains;
                });
            }
        });
    };
    UserSettingsFingerprintActivationPage.prototype.disableBiometric = function () {
        var me = this;
        this.touchManager.disableTouch(function () {
            me.loadStatus();
        });
    };
    UserSettingsFingerprintActivationPage.prototype.enableBiometric = function () {
        var me = this;
        this.touchManager.activateTouch(function () {
            me.guiManager.showPopupMessage("Biometrisches Login", "Wenn Sie sich das nächste Mal in die W-App einloggen, haben Sie die Möglichkeit, Ihr Passwort mit einem biometrischen Login (Fingerprint oder Face-ID) zu verbinden, sofern dies von Ihrem Gerät unterstützt wird.");
            me.loadStatus();
            me.navCtrl.pop().then(function (navigationSuccess) {
                console.log("Navigation successful!", navigationSuccess);
            }).catch(function (navigCatch) {
                console.log("Navigation failed...", navigCatch);
            });
        });
    };
    UserSettingsFingerprintActivationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-settings-fingerprint-activation',template:/*ion-inline-start:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\user-settings-fingerprint-activation\user-settings-fingerprint-activation.html"*/'<!--\n  Generated template for the UserSettingsFingerprintActivationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-title>Biometrisches Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <p><strong>Die biometrische Anmeldung ist aktiviert:</strong>\n        {{ activatedBiometricLogin ? "Ja" : "Nein"}}\n      </p>\n      <button ion-button block default color="primary" [disabled]="!activatedBiometricLogin" (click)="disableBiometric()">Biometrische Anmeldung deaktivieren</button>\n      <button ion-button block default color="primary" [disabled]="activatedBiometricLogin" (click)="enableBiometric()">Biometrische Anmeldung aktivieren</button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\user-settings-fingerprint-activation\user-settings-fingerprint-activation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_manager_storage_manager__["a" /* StorageManagerProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_touch_manager_touch_manager__["a" /* TouchManagerProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_gui_manager_gui_manager__["a" /* GuiManagerProvider */]])
    ], UserSettingsFingerprintActivationPage);
    return UserSettingsFingerprintActivationPage;
}());

//# sourceMappingURL=user-settings-fingerprint-activation.js.map

/***/ })

});
//# sourceMappingURL=9.js.map