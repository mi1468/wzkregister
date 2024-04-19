webpackJsonp([14],{

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TherapyEntryPageModule", function() { return TherapyEntryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__therapy_entry__ = __webpack_require__(804);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TherapyEntryPageModule = /** @class */ (function () {
    function TherapyEntryPageModule() {
    }
    TherapyEntryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__therapy_entry__["a" /* TherapyEntryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__therapy_entry__["a" /* TherapyEntryPage */]),
            ],
        })
    ], TherapyEntryPageModule);
    return TherapyEntryPageModule;
}());

//# sourceMappingURL=therapy-entry.module.js.map

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TherapyEntryPage; });
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
 * Generated class for the TherapyEntryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TherapyEntryPage = /** @class */ (function () {
    function TherapyEntryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.date = null;
        this.time = null;
        this.heilmittel = null;
        this.behandler = null;
        this.behandlungsstelle = null;
        this.details = null;
        var therapy_data = this.navParams.get('data');
        console.log("Therapy data: ", therapy_data);
        this.date = therapy_data.date;
        this.time = therapy_data.time;
        this.heilmittel = therapy_data.heilmittel;
        this.behandler = therapy_data.behandler;
        this.behandlungsstelle = therapy_data.behandlungsstelle;
        this.details = therapy_data.details;
        this.date = this.returnNullIfUndefined(this.date);
        this.time = this.returnNullIfUndefined(this.time);
        this.heilmittel = this.returnNullIfUndefined(this.heilmittel);
        this.behandler = this.returnNullIfUndefined(this.behandler);
        this.behandlungsstelle = this.returnNullIfUndefined(this.behandlungsstelle);
        this.details = this.returnNullIfUndefined(this.details);
        if (this.date != null) {
            var options = { day: "numeric", month: "short", year: "numeric" };
            var dateObject = new Date(this.date);
            this.date = dateObject.toLocaleDateString("de-DE", options);
        }
    }
    /**
     * Returns null if the parameter is equal to undefined, otherwise returns the value.
     * @param x
     */
    TherapyEntryPage.prototype.returnNullIfUndefined = function (x) {
        if (x == undefined)
            return null;
        else
            return x;
    };
    TherapyEntryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TherapyEntryPage');
    };
    TherapyEntryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-therapy-entry',template:/*ion-inline-start:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\therapy-entry\therapy-entry.html"*/'<!--\n  Generated template for the TherapyEntryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{heilmittel != null ? heilmittel : ""}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item no-lines>\n    <strong>Date:</strong> {{date != null ? date : ""}}\n  </ion-item>\n  <ion-item no-lines>\n    <strong>Time:</strong> {{time != null ? time : ""}}\n  </ion-item>\n  <ion-item no-lines>\n    <strong>Heilmittel:</strong> {{heilmittel != null ? heilmittel : ""}}\n  </ion-item>\n  <ion-item no-lines>\n    <strong>Behandler:</strong> {{behandler != null ? behandler : ""}}\n  </ion-item>\n  <ion-item no-lines>\n    <strong>Behandlugsstelle:</strong> {{behandlungsstelle != null ? behandlungsstelle : ""}}\n  </ion-item>\n  <ion-item no-lines>\n    <strong>Weitere Einzelheiten:</strong> {{details != null ? details: ""}}\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\therapy-entry\therapy-entry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TherapyEntryPage);
    return TherapyEntryPage;
}());

//# sourceMappingURL=therapy-entry.js.map

/***/ })

});
//# sourceMappingURL=14.js.map