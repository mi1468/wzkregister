webpackJsonp([12],{

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsAccountInformationPageModule", function() { return UserSettingsAccountInformationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_settings_account_information__ = __webpack_require__(804);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserSettingsAccountInformationPageModule = /** @class */ (function () {
    function UserSettingsAccountInformationPageModule() {
    }
    UserSettingsAccountInformationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_settings_account_information__["a" /* UserSettingsAccountInformationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_settings_account_information__["a" /* UserSettingsAccountInformationPage */]),
            ],
        })
    ], UserSettingsAccountInformationPageModule);
    return UserSettingsAccountInformationPageModule;
}());

//# sourceMappingURL=user-settings-account-information.module.js.map

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettingsAccountInformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_manager_storage_manager__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_manager_auth_manager__ = __webpack_require__(55);
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
 * Generated class for the UserSettingsAccountInformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserSettingsAccountInformationPage = /** @class */ (function () {
    function UserSettingsAccountInformationPage(navCtrl, navParams, storageManager, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storageManager = storageManager;
        this.auth = auth;
        if (this.auth.isMedical == false) {
            this.accountType = 'Patient';
        }
        else if (this.auth.isMedical == true) {
            if (this.auth.userGroup == 1) {
                this.accountType = 'Arzt';
            }
            else if (this.auth.userGroup == 2) {
                this.accountType = 'Aufnahme';
            }
        }
        this.name = this.auth.email;
        this.clinicName = this.auth.clinicName;
    }
    UserSettingsAccountInformationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserSettingsAccountInformationPage');
    };
    UserSettingsAccountInformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-settings-account-information',template:/*ion-inline-start:"D:\ger\wzk\front\3 wzk few options3\3 wzk few options\clinic_app_frontend\src\pages\user-settings-account-information\user-settings-account-information.html"*/'<!--\n  Generated template for the UserSettingsAccountInformationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ihre Daten</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        Ihre Daten\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p><strong>Email:</strong> {{ name }}</p>\n      <p><strong>Angemeldet als:</strong> {{ accountType }}</p>\n      <p><strong>Konto im Zusammenhang mit der Klinik:</strong> {{ clinicName }}</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\ger\wzk\front\3 wzk few options3\3 wzk few options\clinic_app_frontend\src\pages\user-settings-account-information\user-settings-account-information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_manager_storage_manager__["a" /* StorageManagerProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_manager_auth_manager__["a" /* AuthManagerProvider */]])
    ], UserSettingsAccountInformationPage);
    return UserSettingsAccountInformationPage;
}());

//# sourceMappingURL=user-settings-account-information.js.map

/***/ })

});
//# sourceMappingURL=12.js.map