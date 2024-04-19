webpackJsonp([1],{

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsPageModule", function() { return UserSettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_settings__ = __webpack_require__(812);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserSettingsPageModule = /** @class */ (function () {
    function UserSettingsPageModule() {
    }
    UserSettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_settings__["a" /* UserSettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_settings__["a" /* UserSettingsPage */]),
            ],
        })
    ], UserSettingsPageModule);
    return UserSettingsPageModule;
}());

//# sourceMappingURL=user-settings.module.js.map

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_manager_storage_manager__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_manager_auth_manager__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_gui_manager_gui_manager__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_settings_models_user_setting_page_model__ = __webpack_require__(813);
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
 * Generated class for the UserSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserSettingsPage = /** @class */ (function () {
    function UserSettingsPage(navCtrl, navParams, storageManager, http, authManager, guiManager) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storageManager = storageManager;
        this.http = http;
        this.authManager = authManager;
        this.guiManager = guiManager;
        this.userSettingsPages = [];
        this.userSettingsPages.push(new __WEBPACK_IMPORTED_MODULE_7__providers_settings_models_user_setting_page_model__["a" /* UserSettingPageModel */]("Kontoinformationen", 'UserSettingsAccountInformationPage'));
        this.userSettingsPages.push(new __WEBPACK_IMPORTED_MODULE_7__providers_settings_models_user_setting_page_model__["a" /* UserSettingPageModel */]("Passwort ändern", 'UserSettingsChangePasswordPage'));
        this.userSettingsPages.push(new __WEBPACK_IMPORTED_MODULE_7__providers_settings_models_user_setting_page_model__["a" /* UserSettingPageModel */]("Biometrisches Login", 'UserSettingsFingerprintActivationPage'));
        this.userSettingsPages.push(new __WEBPACK_IMPORTED_MODULE_7__providers_settings_models_user_setting_page_model__["a" /* UserSettingPageModel */]("Nachfüllen von OTP-Codes", 'UserSettingsRefillKeysPage'));
        /*this.userSettingsPages.push(new UserSettingPageModel("Push-Benachrichtigung", 'UserSettingsPushNotificationPage'));*/
        /*this.userSettingsPages.push(new UserSettingPageModel("Message Center", 'UserSettingsMessageCenterPage'));*/
        if (authManager.isMedical && authManager.userGroup == 1) {
            this.userSettingsPages.push(new __WEBPACK_IMPORTED_MODULE_7__providers_settings_models_user_setting_page_model__["a" /* UserSettingPageModel */]("Einen Registrierungscode generieren", 'UserSettingsCreateAccountPage'));
        }
        console.log(this.userSettingsPages);
    }
    UserSettingsPage.prototype.openHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    UserSettingsPage.prototype.logout = function () {
        this.authManager.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    UserSettingsPage.prototype.openDebugger = function () {
        this.navCtrl.push('DebuggerPage');
    };
    UserSettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserSettingsPage');
    };
    /**
     * Transitions and opens the page tapped.
     * @param page
     */
    UserSettingsPage.prototype.itemTapped = function (page) {
        console.log("Item tapped:", page);
        this.navCtrl.push(page.page);
        //this.navCtrl.setRoot(page.page);
    };
    UserSettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-settings',template:/*ion-inline-start:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\user-settings\user-settings.html"*/'<!--\n  Generated template for the UserSettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Einstellungen</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="openHomePage()">\n        <img class="homeLogoNavBar" src="assets/home/icon.svg">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n  <ion-list>\n    <button ion-item *ngFor="let setting_page of userSettingsPages" (click)="itemTapped(setting_page)">{{setting_page.title}}</button>\n    <button ion-item (click)="logout()">Ausloggen</button>\n  </ion-list>\n\n  <!--ACCOUNT INFORMATION-->\n  <!--\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n      Ihre Daten\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p><strong>Email:</strong> {{ name }}</p>\n      <p><strong>Angemeldet als:</strong> {{ medical ? \'Arzt\' : \'Patient\' }}</p>\n    </ion-card-content>\n  </ion-card>-->\n\n  <!--PASSWORD CHANGE-->\n  <!--\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        Passwort zurücksetzen\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label floating>Aktuelles Passwort</ion-label>\n        <ion-input [(ngModel)]="currentPass" type="password"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Neues Passwort angeben</ion-label>\n        <ion-input [(ngModel)]="newPass1" type="password"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Passwort wiederholen</ion-label>\n        <ion-input [(ngModel)]="newPass2" type="password"></ion-input>\n      </ion-item>\n      <button ion-button block default color="primary" (click)="resetPass()">Zurücksetzen</button>\n    </ion-card-content>\n  </ion-card>-->\n\n\n  <!--REFILL KEYS-->\n  <!--\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        Refilling keys\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>You can connect the flash drive that is provided at the hospital in order to refill the encryption key of the application</p>\n      <button ion-button block color="primary" (click)="refillKeys()" >Refill keys</button>\n    </ion-card-content>\n  </ion-card>-->\n\n  <!--CREATE ACCOUNT-->\n  <!--\n  <ion-card *ngIf="medical">\n    <ion-card-header>\n      Einen Registrierungscode generieren\n    </ion-card-header>\n    <ion-card-content>\n      <p>Bitte bedenken, da die App noch nicht in live nutzung ist, müssen Sie keine echten Daten angeben, Der Text bei\n        Versicherungsnummer hat momentan noch keinen Sinn und kann daher mit zufälligen Nummern gefüllt werden</p>\n      <p>Hier können Codes generiert werden, die erlauben sich in der App zu registrieren</p>\n\n      <ion-grid>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label floating>Vorname</ion-label>\n              <ion-input [(ngModel)]="prename" type="text"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label floating>Hauptname</ion-label>\n              <ion-input [(ngModel)]="mainname" type="text"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label floating>Versicherungsnummer</ion-label>\n              <ion-input [(ngModel)]="insurance" type="text"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label floating>Email Adresse des Benutzers</ion-label>\n              <ion-input [(ngModel)]="targetMail" type="text"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n         <ion-col>\n           <ion-item>\n             <ion-label>Ist der User ein Mitarbeiter?</ion-label>\n             <ion-toggle [(ngModel)]="cMedical" checked="false"></ion-toggle>\n           </ion-item>\n         </ion-col>\n         <ion-col>\n           <ion-item>\n             <ion-label>Soll eine Einladungs-Email verschickt werden?</ion-label>\n             <ion-toggle [(ngModel)]="shouldSendMail" checked="true"></ion-toggle>\n           </ion-item>\n         </ion-col>\n        </ion-row>\n          <ion-row>\n              <ion-col>\n                  <ion-item>\n                      <ion-label>User group?</ion-label>\n                      <ion-input [(ngModel)]="userGroup" type="number"></ion-input>\n                  </ion-item>\n              </ion-col>\n          </ion-row>\n      </ion-grid>\n      <button ion-button block default color="primary" (click)="generateCode()">Code Generieren</button>\n    </ion-card-content>\n  </ion-card>-->\n\n  <!--PUSH NOTIFICATIONS-->\n  <!--\n  <ion-card>\n    <ion-card-header>\n      TestNachricht senden\n    </ion-card-header>\n    <ion-card-content>\n      <p>Eine Testnachricht an dieses Handy schicken</p>\n      <button ion-button block default color="primary" (click)="pushNotif()">Abschicken</button>\n\n    </ion-card-content>\n  </ion-card>-->\n\n  <!--MESSAGE CENTER-->\n  <!--<ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        Message Center Optionen\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n        <ion-label>Message Center zeigen</ion-label>\n        <ion-toggle [(ngModel)]="msgCenter" checked="true"></ion-toggle>\n    </ion-card-content>\n  </ion-card>-->\n\n  <!--DEBUGGER-->\n  <!--<ion-card>\n    <ion-card-header>\n      Debugger\n    </ion-card-header>\n    <ion-card-content>\n      <p>Der Debugger ist NUR für entwicklungzwecke und wird natürlich in der App nicht mehr vorhanden sein</p>\n      <button ion-button block default color="primary" (click)="openDebugger()">Debugger Öffnen</button>\n\n    </ion-card-content>\n  </ion-card>-->\n\n  <!--LOGOUT-->\n  <!--<ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        Ausloggen\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Hier können Sie sich ausloggen</p>\n      <button ion-button block default color="primary" (click)="logout()">Logout</button>\n\n    </ion-card-content>\n  </ion-card>-->\n\n</ion-content>\n'/*ion-inline-end:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\user-settings\user-settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_manager_storage_manager__["a" /* StorageManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_manager_auth_manager__["a" /* AuthManagerProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_gui_manager_gui_manager__["a" /* GuiManagerProvider */]])
    ], UserSettingsPage);
    return UserSettingsPage;
}());

//# sourceMappingURL=user-settings.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettingPageModel; });
var UserSettingPageModel = /** @class */ (function () {
    function UserSettingPageModel(title, page) {
        this.title = title;
        this.page = page;
    }
    return UserSettingPageModel;
}());

//# sourceMappingURL=user-setting-page.model.js.map

/***/ })

});
//# sourceMappingURL=1.js.map