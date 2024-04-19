webpackJsonp([2],{

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageCenterPageModule", function() { return MessageCenterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_center__ = __webpack_require__(765);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessageCenterPageModule = /** @class */ (function () {
    function MessageCenterPageModule() {
    }
    MessageCenterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__message_center__["a" /* MessageCenterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__message_center__["a" /* MessageCenterPage */]),
            ],
        })
    ], MessageCenterPageModule);
    return MessageCenterPageModule;
}());

//# sourceMappingURL=message-center.module.js.map

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageCenterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_intern_browser_intern_browser__ = __webpack_require__(766);
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
 * Generated class for the MessageCenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessageCenterPage = /** @class */ (function () {
    function MessageCenterPage(viewCtrl, navParams, browser) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.browser = browser;
    }
    MessageCenterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessageCenterPage');
        this.browser.loadUrl("https://clinetplatforms.com");
        this.browser.show();
    };
    MessageCenterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MessageCenterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message-center',template:/*ion-inline-start:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\message-center\message-center.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Nachrichten Center</ion-title>\n    <ion-buttons end>\n      <button item-right ion-button (click)="dismiss()">\n        <ion-icon name="md-close" ></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\message-center\message-center.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_intern_browser_intern_browser__["a" /* InternBrowserProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_intern_browser_intern_browser__["a" /* InternBrowserProvider */]])
    ], MessageCenterPage);
    return MessageCenterPage;
}());

//# sourceMappingURL=message-center.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternBrowserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(465);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the InternBrowserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var InternBrowserProvider = /** @class */ (function () {
    function InternBrowserProvider(http, iab) {
        this.http = http;
        this.iab = iab;
        this.inst = null;
        this.options = {};
        this.subscriptions = {};
        console.log('Hello InternBrowserProvider Provider');
    }
    InternBrowserProvider.prototype.loadUrl = function (url) {
        if (this.inst == null) {
            this.inst = this.iab.create(url, '_blank', this.options);
            return;
        }
        this.inst.executeScript({ code: "window.location.href = " + url + ";" });
    };
    InternBrowserProvider.prototype.getOption = function (name) {
        return this.options[name];
    };
    InternBrowserProvider.prototype.setOption = function (name, value) {
        this.options[name] = value;
    };
    InternBrowserProvider.prototype.css = function (css, callback) {
        if (callback === void 0) { callback = function (_) {
        }; }
        if (this.inst == null)
            return;
        this.inst.insertCSS({ code: css }).then(function (result) { return callback(result); });
    };
    InternBrowserProvider.prototype.unregisterEvent = function (name) {
        if (this.inst == null || this.subscriptions[name] == null)
            return;
        var subscription = this.subscriptions[name];
        subscription.unsubscribe();
    };
    InternBrowserProvider.prototype.registerEvent = function (name, callback) {
        if (this.inst == null)
            return;
        this.subscriptions[name] = this.inst.on(name).subscribe(function (event) { return callback(event); });
    };
    InternBrowserProvider.prototype.show = function () {
        if (this.inst == null)
            return;
        this.inst.show();
    };
    InternBrowserProvider.prototype.hide = function () {
        if (this.inst == null)
            return;
        this.inst.hide();
    };
    InternBrowserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], InternBrowserProvider);
    return InternBrowserProvider;
}());

//# sourceMappingURL=intern-browser.js.map

/***/ })

});
//# sourceMappingURL=2.js.map