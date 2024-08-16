webpackJsonp([30],{

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentPageModule", function() { return DocumentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__document__ = __webpack_require__(752);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DocumentPageModule = /** @class */ (function () {
    function DocumentPageModule() {
    }
    DocumentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__document__["a" /* DocumentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__document__["a" /* DocumentPage */]),
            ],
        })
    ], DocumentPageModule);
    return DocumentPageModule;
}());

//# sourceMappingURL=document.module.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_file_manager_file_manager__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_manager_auth_manager__ = __webpack_require__(55);
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
 * Generated class for the DocumentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DocumentPage = /** @class */ (function () {
    function DocumentPage(navCtrl, navParams, fileManager, authProvider, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fileManager = fileManager;
        this.authProvider = authProvider;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        if (navParams.get("data") == null && this.fileManager.cached == null) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            return;
        }
        if (navParams.get("data") == null) {
            this.firstLayerCall();
            return;
        }
        this.document = navParams.get("data");
        this.otherLayerCall();
    }
    DocumentPage_1 = DocumentPage;
    Object.defineProperty(DocumentPage.prototype, "isDir", {
        get: function () {
            if (this.document == null)
                return false;
            return this.document.isDirectory;
        },
        enumerable: false,
        configurable: true
    });
    DocumentPage.prototype.openHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    /**
     * Initial view which shows the folders
     */
    DocumentPage.prototype.firstLayerCall = function () {
        this.document = this.fileManager.cached;
    };
    DocumentPage.prototype.otherLayerCall = function () {
    };
    DocumentPage.prototype.uploadFile = function () {
        this.modalCtrl.create('FileUploadPage').present();
    };
    Object.defineProperty(DocumentPage.prototype, "canUpload", {
        get: function () {
            return this.authProvider.isMedical;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Refreshes UI and the documents appearing
     * @param refresher
     */
    DocumentPage.prototype.doRefresh = function (refresher) {
        var me = this;
        this.fileManager.updateFile(function () {
            me.firstLayerCall();
            refresher.complete();
        });
    };
    /**
     * Prompts the user to confirm to download the document from the server
     */
    DocumentPage.prototype.download = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle("Download bestätigen");
        alert.setMessage("Diese Aktion verwendet einen Teil des Verschlüsselungsschlüssels, um die sichere Datei herunterzuladen.<br/>Wollen Sie fortfahren?");
        alert.addButton('Abbrechen');
        alert.addButton({
            text: 'Bestätigen',
            handler: function (data) {
                _this.fileManager.downloadFile(_this.document);
            }
        });
        alert.present();
    };
    /**
     * Opens a preview page of the document
     * @param item
     */
    DocumentPage.prototype.itemTapped = function (item) {
        console.log("File:", item);
        // TODO Add links to the item here?
        if (item.isDirectory == false) {
            if (item.type.includes("image")) {
                item.links = [];
                item.links.push(this.fileManager.generatePreviewLink(this.authProvider.key, item.parent.name, item.name, "image"));
                console.log("Added image previews:", item);
            }
            else if (item.type.includes("pdf")) {
                item.links = [];
                for (var c = 0; c < item.siteCount; c++) {
                    var link = this.fileManager.generatePreviewLink(this.authProvider.key, item.parent.name, item.name, "preview", c);
                    item.links.push(link);
                }
                console.log("Added PDF previews:", item);
            }
        }
        this.navCtrl.push(DocumentPage_1, { data: item });
    };
    DocumentPage.prototype.ionViewDidLoad = function () {
    };
    var DocumentPage_1;
    DocumentPage = DocumentPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-document',template:/*ion-inline-start:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\document\document.html"*/'<!--\n  Generated template for the DocumentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>{{document.name}}</ion-title>\n    <ion-buttons end>\n      <button *ngIf="document.isRoot" ion-button (click)="openHomePage()">\n        <img class="homeLogoNavBar" src="assets/home/icon.svg">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-refresher *ngIf="document.isRoot" (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div *ngIf="!isDir">\n\n    <ion-card *ngIf="!document.canOpen">\n\n      <ion-card-header>\n        Datei kann nicht angezeigt werden\n      </ion-card-header>\n\n      <ion-card-content>\n        Diese Datei zum ansehen bitte herunterladen\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-slides pager>\n      <ion-slide *ngFor="let picture of document.links">\n        <img (click)="download()" src="{{picture}}"/>\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <div *ngIf="isDir">\n\n    <ion-list>\n\n      <ion-item detail-push (click)="itemTapped(item)" *ngFor="let item of document.childrenFiles">\n        <ion-icon *ngIf="!item.isDirectory" color="secondary" name=\'document\' item-left></ion-icon>\n        {{item.name}}\n        <!-- 			<img src="{{item.thumb}}"> -->\n        <p>\n          <ion-note *ngIf="item.author">von\n            {{item.author}}\n          </ion-note>\n        </p>\n\n        <!--ion-note item-right> {{item.type}}</ion-note-->\n      </ion-item>\n    </ion-list>\n\n  </div>\n  <!--<ion-card *ngIf="document.isRoot && canUpload">\n    <ion-card-content>\n      <button ion-button color="primary" (click)="uploadFile()">Datei hochladen</button>\n    </ion-card-content>\n  </ion-card>-->\n</ion-content>\n<ion-footer *ngIf="!isDir" color="secondary">\n  <ion-toolbar color="primary">\n    <ion-buttons>\n      <button (click)="download()" color="text-color" ion-button icon-only>\n        <ion-icon color="white" name="download"></ion-icon>\n        <span color="text-color"> <b>Download</b> </span>\n      </button>\n    </ion-buttons>\n    <!--<ion-buttons end>\n      <button color="text-color" ion-button icon-only>\n        <ion-icon color="white" name="share"></ion-icon>\n        <b>Teilen</b>\n      </button>\n    </ion-buttons>-->\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\document\document.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_file_manager_file_manager__["a" /* FileManagerProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_manager_auth_manager__["a" /* AuthManagerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DocumentPage);
    return DocumentPage;
}());

//# sourceMappingURL=document.js.map

/***/ })

});
//# sourceMappingURL=30.js.map