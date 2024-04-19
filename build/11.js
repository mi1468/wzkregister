webpackJsonp([11],{

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsChangePasswordPageModule", function() { return UserSettingsChangePasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_settings_change_password__ = __webpack_require__(804);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserSettingsChangePasswordPageModule = /** @class */ (function () {
    function UserSettingsChangePasswordPageModule() {
    }
    UserSettingsChangePasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_settings_change_password__["a" /* UserSettingsChangePasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_settings_change_password__["a" /* UserSettingsChangePasswordPage */]),
            ],
        })
    ], UserSettingsChangePasswordPageModule);
    return UserSettingsChangePasswordPageModule;
}());

//# sourceMappingURL=user-settings-change-password.module.js.map

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettingsChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_gui_manager_gui_manager__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_manager_auth_manager__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(48);
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
 * Generated class for the UserSettingsChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserSettingsChangePasswordPage = /** @class */ (function () {
    function UserSettingsChangePasswordPage(navCtrl, navParams, guiManager, authManager, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.guiManager = guiManager;
        this.authManager = authManager;
        this.http = http;
        this.currentPass = '';
        this.newPass1 = '';
        this.newPass2 = '';
    }
    UserSettingsChangePasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserSettingsChangePasswordPage');
    };
    UserSettingsChangePasswordPage.prototype.resetPass = function () {
        var _this = this;
        this.http.post("/reset/direct", {
            current: this.currentPass,
            pass: this.newPass1,
            pass2: this.newPass2
        }, [], function (success, data) {
            if (data.success) {
                if (data.data == "updated") {
                    _this.guiManager.showToast("Passwort aktualisiert", 5000);
                }
            }
            else {
                if (data.data == "pass_not_same") {
                    _this.guiManager.showToast("Passwörter stimmen nicht überrein!", 10000);
                }
                if (data.data == "pass_short") {
                    _this.guiManager.showToast("Neues Passwort muss mindestens 5 zeichen lang sein!!", 10000);
                }
                if (data.data == "current_false") {
                    _this.guiManager.showToast("Aktuelles Passwort falsch!", 10000);
                }
            }
        }, this.authManager.key, true);
    };
    UserSettingsChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-settings-change-password',template:/*ion-inline-start:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\user-settings-change-password\user-settings-change-password.html"*/'<!--\n  Generated template for the UserSettingsChangePasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Passwort zurücksetzen</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        Passwort zurücksetzen\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <!--<ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label floating>Aktuelles Passwort</ion-label>\n              <ion-input [(ngModel)]="currentPass" type="password"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label floating>Neues Passwort angeben</ion-label>\n              <ion-input [(ngModel)]="newPass1" type="password"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label floating>Passwort wiederholen</ion-label>\n              <ion-input [(ngModel)]="newPass2" type="password"></ion-input>\n            </ion-item>\n          </ion-col>\n\n\n        </ion-row>\n      </ion-grid>-->\n      <ion-item>\n        <ion-label floating>Aktuelles Passwort</ion-label>\n        <ion-input [(ngModel)]="currentPass" type="password"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Neues Passwort angeben</ion-label>\n        <ion-input [(ngModel)]="newPass1" type="password"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Passwort wiederholen</ion-label>\n        <ion-input [(ngModel)]="newPass2" type="password"></ion-input>\n      </ion-item>\n      <button ion-button block default color="primary" (click)="resetPass()">Zurücksetzen</button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\user-settings-change-password\user-settings-change-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_gui_manager_gui_manager__["a" /* GuiManagerProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_manager_auth_manager__["a" /* AuthManagerProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */]])
    ], UserSettingsChangePasswordPage);
    return UserSettingsChangePasswordPage;
}());

//# sourceMappingURL=user-settings-change-password.js.map

/***/ })

});
//# sourceMappingURL=11.js.map