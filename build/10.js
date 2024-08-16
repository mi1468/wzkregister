webpackJsonp([10],{

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsCreateAccountPageModule", function() { return UserSettingsCreateAccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_settings_create_account__ = __webpack_require__(807);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserSettingsCreateAccountPageModule = /** @class */ (function () {
    function UserSettingsCreateAccountPageModule() {
    }
    UserSettingsCreateAccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_settings_create_account__["a" /* UserSettingsCreateAccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_settings_create_account__["a" /* UserSettingsCreateAccountPage */]),
            ],
        })
    ], UserSettingsCreateAccountPageModule);
    return UserSettingsCreateAccountPageModule;
}());

//# sourceMappingURL=user-settings-create-account.module.js.map

/***/ }),

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettingsCreateAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_manager_storage_manager__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_manager_auth_manager__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_gui_manager_gui_manager__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_messages_messages__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_otp_otp__ = __webpack_require__(79);
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
 * Generated class for the UserSettingsCreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserSettingsCreateAccountPage = /** @class */ (function () {
    function UserSettingsCreateAccountPage(navCtrl, navParams, storageManager, http, authManager, guiManager, messages, otp) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storageManager = storageManager;
        this.http = http;
        this.authManager = authManager;
        this.guiManager = guiManager;
        this.messages = messages;
        this.otp = otp;
        this.name = "";
        this.medical = false;
        this.prename = '';
        this.mainname = '';
        this.insurance = '';
        this.cMedical = '';
        this.shouldSendMail = false;
        this.targetMail = '';
        this.userGroup = 0;
        storageManager.fetch("save", function (response) {
            _this.name = response.name;
            _this.medical = response.medical;
        });
    }
    /**
     * Generates an activation code for a new account (it can be accessed only through the backend at the moment)
     */
    UserSettingsCreateAccountPage.prototype.generateCode = function () {
        var _this = this;
        console.log("Usergroup: ", this.userGroup);
        var data = { prename: this.prename, name: this.mainname, medical: this.cMedical, mail: this.shouldSendMail ? this.targetMail : "no", userGroup: this.userGroup };
        data["p-type"] = "00P";
        data["insurance-num"] = this.insurance;
        this.http.post('/register', data, [], function (success, data) {
            if (data.success) {
                _this.guiManager.showToast("Registrierungscode generiert", 6500);
            }
            else {
                _this.guiManager.showToast("Fehler beim generieren", 6500);
            }
        }, this.authManager.key, true);
    };
    UserSettingsCreateAccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserSettingsCreateAccountPage');
    };
    UserSettingsCreateAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-settings-create-account',template:/*ion-inline-start:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\user-settings-create-account\user-settings-create-account.html"*/'<!--\n  Generated template for the UserSettingsCreateAccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-wrap>Einen Registrierungscode generieren</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card *ngIf="medical">\n    <ion-card-header>\n      Einen Registrierungscode generieren\n    </ion-card-header>\n    <ion-card-content>\n      <p>Bitte bedenken, da die App noch nicht in live nutzung ist, müssen Sie keine echten Daten angeben, Der Text bei\n        Versicherungsnummer hat momentan noch keinen Sinn und kann daher mit zufälligen Nummern gefüllt werden</p>\n      <p>Hier können Codes generiert werden, die erlauben sich in der App zu registrieren</p>\n\n      <ion-grid>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label floating>Vorname</ion-label>\n              <ion-input [(ngModel)]="prename" type="text"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label floating>Hauptname</ion-label>\n              <ion-input [(ngModel)]="mainname" type="text"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label floating>Versicherungsnummer</ion-label>\n              <ion-input [(ngModel)]="insurance" type="text"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label floating>Email Adresse des Benutzers</ion-label>\n              <ion-input [(ngModel)]="targetMail" type="text"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label>Ist der User ein Mitarbeiter?</ion-label>\n              <ion-toggle [(ngModel)]="cMedical" checked="false"></ion-toggle>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label>Soll eine Einladungs-Email verschickt werden?</ion-label>\n              <ion-toggle [(ngModel)]="shouldSendMail" checked="true"></ion-toggle>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label>User group?</ion-label>\n              <ion-input [(ngModel)]="userGroup" type="number"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <button ion-button block default color="primary" (click)="generateCode()">Code Generieren</button>\n    </ion-card-content>\n  </ion-card>\n  <ion-card *ngIf="!medical">\n    <ion-card-header>\n      Einen Registrierungscode generieren\n    </ion-card-header>\n    <ion-card-content>\n      Not available for this type of account\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\user-settings-create-account\user-settings-create-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_manager_storage_manager__["a" /* StorageManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_manager_auth_manager__["a" /* AuthManagerProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_gui_manager_gui_manager__["a" /* GuiManagerProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_messages_messages__["a" /* MessagesProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_otp_otp__["a" /* OtpProvider */]])
    ], UserSettingsCreateAccountPage);
    return UserSettingsCreateAccountPage;
}());

//# sourceMappingURL=user-settings-create-account.js.map

/***/ })

});
//# sourceMappingURL=10.js.map