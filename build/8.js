webpackJsonp([8],{

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsMessageCenterPageModule", function() { return UserSettingsMessageCenterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_settings_message_center__ = __webpack_require__(809);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserSettingsMessageCenterPageModule = /** @class */ (function () {
    function UserSettingsMessageCenterPageModule() {
    }
    UserSettingsMessageCenterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_settings_message_center__["a" /* UserSettingsMessageCenterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_settings_message_center__["a" /* UserSettingsMessageCenterPage */]),
            ],
        })
    ], UserSettingsMessageCenterPageModule);
    return UserSettingsMessageCenterPageModule;
}());

//# sourceMappingURL=user-settings-message-center.module.js.map

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettingsMessageCenterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_gui_manager_gui_manager__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_manager_storage_manager__ = __webpack_require__(39);
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
 * Generated class for the UserSettingsMessageCenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserSettingsMessageCenterPage = /** @class */ (function () {
    function UserSettingsMessageCenterPage(navCtrl, navParams, guiManager, storageManager) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.guiManager = guiManager;
        this.storageManager = storageManager;
        this.msgCenterBool = false;
        var me = this;
        storageManager.contains("msg-center", function (cont) {
            me.msgCenter = cont;
            guiManager.messageCenter = cont;
        });
    }
    UserSettingsMessageCenterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserSettingsMessageCenterPage');
    };
    UserSettingsMessageCenterPage.prototype.ionViewWillLeave = function () {
        var me = this;
        this.storageManager.contains("msg-center", function (contains) {
            if (contains) {
                if (!me.msgCenter) {
                    me.storageManager.remove("msg-center", function () {
                        me.guiManager.messageCenter = false;
                    });
                }
            }
            else {
                if (me.msgCenter) {
                    me.storageManager.save("msg-center", "", function () {
                        me.guiManager.messageCenter = true;
                    });
                }
            }
        });
    };
    Object.defineProperty(UserSettingsMessageCenterPage.prototype, "msgCenter", {
        get: function () {
            return this.msgCenterBool;
        },
        set: function (val) {
            this.msgCenterBool = val;
            this.guiManager.messageCenter = val;
        },
        enumerable: false,
        configurable: true
    });
    UserSettingsMessageCenterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-settings-message-center',template:/*ion-inline-start:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\user-settings-message-center\user-settings-message-center.html"*/'<!--\n  Generated template for the UserSettingsMessageCenterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Message Center Optionen</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        Message Center Optionen\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label>Message Center zeigen</ion-label>\n      <ion-toggle [(ngModel)]="msgCenter" checked="true"></ion-toggle>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\user-settings-message-center\user-settings-message-center.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_gui_manager_gui_manager__["a" /* GuiManagerProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_storage_manager_storage_manager__["a" /* StorageManagerProvider */]])
    ], UserSettingsMessageCenterPage);
    return UserSettingsMessageCenterPage;
}());

//# sourceMappingURL=user-settings-message-center.js.map

/***/ })

});
//# sourceMappingURL=8.js.map