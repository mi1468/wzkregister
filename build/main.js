webpackJsonp([35],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Info; });
var Info = /** @class */ (function () {
    function Info() {
    }
    /**/
    /*
      public static backendUrl = "https://demobackend.clinetplatforms.com/backend";
      public static apiURL = "https://demo.clinetplatforms.com/api";
      public static testOtpKeyUrl = "https://demo.clinetplatforms.com/files/template/";
      /**/
    /*
        public static backendUrl = "https://devbackend.clinetplatforms.com/backend";
        public static apiURL = "https://dev.clinetplatforms.com/api";
        public static testOtpKeyUrl = "https://demo.clinetplatforms.com/files/template/";
        /**/
    /**
     * Returns the full path for the api or backend service,
     * combining the main url of each service with the path specified.
     * @param path The URI path that you want to merge
     * @param api Set to true if the URI is on the API service, false if the URI is on the backend/drupal service. Default: false
     */
    Info.merge = function (path, api) {
        if (api === void 0) { api = false; }
        return (api ? this.apiURL : this.backendUrl()) + path;
    };
    Info.backendUrl = function () {
        if (this.debug == true) {
            return this.backendUrlDev;
        }
        else {
            return this.backendUrlProd;
        }
    };
    Info.debug = !true;
    /*This is the main repository for the WZK app*/
    /*
    public static backendUrl = "http://backend.clinetplatforms.com/backend";
    public static apiURL = "https://api.clinetplatforms.com:8243";
    public static testOtpKeyUrl = "https://api.clinetplatforms.com/files/template/";
    /**/
    // Internal project ID
    Info.projectId = "wzk";
    Info.backendUrlProd = "https://wappbackend.wz-kliniken.de/backend";
    Info.backendUrlDev = "http://clinet.drupal.local";
    Info.backendOauthClientId = "6349e81a-5e76-4398-ad31-2c62e76b5834";
    Info.backendOauthClientPassword = "qqUefZtu2f4GsWwk";
    Info.backendOauthClientScope = "app";
    Info.apiURL = "https://wappapi.wz-kliniken.de/api";
    Info.testOtpKeyUrl = "https://wappapi.wz-kliniken.de/files/template/";
    Info.showCalendarAfter = new Date('2021-03-01 00:00:01');
    return Info;
}());

//# sourceMappingURL=statics.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, authManager, guiManager) {
        this.navCtrl = navCtrl;
        this.authManager = authManager;
        this.guiManager = guiManager;
        this.textsClinicNames = {
            "": "Klinik",
            "saulgau": "Rehaklinik Saulgau",
            "waldsee": "Klinik im Hofgarten",
            "salzelmen": "Rehaklinik Bad Salzelmen",
            "niederbayern": "Klinik Niederbayern"
        };
        this.textsClinicSubtitles = {
            "": "Ein Stück Leben.",
            "saulgau": "Ein Stück Leben.",
            "salzelmen": "Ein Stück Leben.",
            "waldsee": "Ein Stück Leben.",
            "niederbayern": "Ein Stück Leben."
        };
        this.textsClinicDescriptions = {
            "": "Ein Stück Leben.",
            "saulgau": "Fachklinik für Orthopädie und Unfallchirurgie (BGSW)",
            "waldsee": "Fachklinik für Orthopädie",
            "salzelmen": "Fachklinik für Orthopädie, Onkologie und Pneumologie",
            "niederbayern": "Fachklinik für Orthopädie, Physikalische und Rehabilitative Medizin"
        };
        this.backgroundImages = {
            "": "assets/home/home.jpg",
            "saulgau": "assets/home/homeImageSmaller.jpg",
            "waldsee": "assets/home/WZ-BadWaldsee-editSmaller.jpg",
            "salzelmen": "assets/home/WZ_SE_Klinik.jpg",
            "niederbayern": "assets/home/WZ-NB-Klinik.jpg"
        };
    }
    HomePage.prototype.ngOnInit = function () {
    };
    Object.defineProperty(HomePage.prototype, "textClinicName", {
        get: function () {
            return this.textsClinicNames[this.authManager.clinicName] == undefined ? this.textsClinicNames[""] : this.textsClinicNames[this.authManager.clinicName];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "textClinicSubtitle", {
        get: function () {
            return this.textsClinicSubtitles[this.authManager.clinicName] == undefined ? this.textsClinicSubtitles[""] : this.textsClinicSubtitles[this.authManager.clinicName];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "textClinicDescription", {
        get: function () {
            return this.textsClinicDescriptions[this.authManager.clinicName] == undefined ? this.textsClinicDescriptions[""] : this.textsClinicDescriptions[this.authManager.clinicName];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "backgroundLoggedInImage", {
        get: function () {
            return this.backgroundImages[this.authManager.clinicName] == undefined ? this.backgroundImages[""] : this.backgroundImages[this.authManager.clinicName];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "tiles", {
        get: function () {
            return this.guiManager.tiles;
        },
        enumerable: false,
        configurable: true
    });
    HomePage.prototype.navigateTo = function (item) {
        this.navCtrl.setRoot(item.component);
    };
    Object.defineProperty(HomePage.prototype, "footerNeed", {
        get: function () {
            return !this.authManager.isLoggedIn && !this.guiManager.isLoginPageActive;
        },
        enumerable: false,
        configurable: true
    });
    HomePage.prototype.goToLoginPage = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    HomePage.prototype.checkDisabled = function (item) {
        if (item.loader == null)
            return false;
        return this.guiManager.loaders[item.loader] == true;
    };
    Object.defineProperty(HomePage.prototype, "userStatus", {
        get: function () {
            if (this.authManager.isLoggedIn && this.authManager.isMedical)
                return "medical";
            if (this.authManager.isLoggedIn) {
                return "user";
            }
            return 0;
        },
        enumerable: false,
        configurable: true
    });
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\ger\wzk\front\3 wzk few options3\3 wzk few options\clinic_app_frontend\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="image-right" text-right style="padding-right: 5px;text-align:right;">\n      <img class=\'title-image\' src=\'assets/home/Logo_Waldburg-Zeil-Kliniken.svg\' />\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf="!userStatus" class="home-hello"\n       style="background:url(assets/home/home.jpg);background-size: cover;background-attachment:scroll;background-repeat:no-repeat;">\n    <!-- 		<img src="assets/img/doctor.jpg"/> -->\n    <!-- <spacer class="" style="height:300px;"> </spacer> -->\n    <div class="hello-title " text-wrap>\n      <div class="">\n        <h1>Waldburg-Zeil Kliniken</h1>\n        <h3 color="secondary">Ein Stück Leben.</h3>\n      </div>\n    </div>\n\n  </div>\n  <div class="old-browser-info"><ion-card>\n<ion-card-header><span color="primary">Achtung:</span> Browser wird nicht vollständig unterstützt</ion-card-header>\n<ion-card-content>Ihr Browser "Internet Explorer" ist sehr alt und wird von dieser Anwendung nicht vollständig unterstützt, sie können jedoch einige Basisfunktionen verwenden.\n<br> Für ein besseres Erlebnis nutzen Sie bitte einen modernen Browser wie Google Chrome, Firefox, Edge, Safari oder laden die die Desktop Version dieser Anwendung herunter:<br><a ion-button href="#">weitere Informationen und Download</a></ion-card-content>\n  </ion-card></div>\n  <div *ngIf="userStatus == \'medical\'" class="home-hello"\n       style="background: center top;background-size: cover;background-attachment:scroll;background-repeat:no-repeat;" [style.backgroundImage]="\'url(\' + backgroundLoggedInImage + \')\'">\n    <!-- 		<img src="assets/img/doctor.jpg"/> -->\n    <!-- <spacer class="" style="height:300px;"> </spacer> -->\n    <div class="hello-title " text-wrap>\n      <div class="">\n        <h1>{{textClinicName}}</h1>\n        <h3 color="secondary">{{textClinicSubtitle}}</h3>\n      </div>\n    </div>\n  </div>\n  <div *ngIf="userStatus == \'user\'" class="home-hello"\n       style="background: center top;background-size: cover;background-attachment:scroll;background-repeat:no-repeat;" [style.backgroundImage]="\'url(\' + backgroundLoggedInImage + \')\'">\n    <!-- 		<img src="assets/img/doctor.jpg"/> -->\n    <!-- <spacer class="" style="height:300px;"> </spacer> -->\n    <div class="hello-title " text-wrap>\n      <div class="">\n        <h1>{{textClinicName}}</h1>\n        <h3 color="secondary">{{textClinicSubtitle}}</h3>\n      </div>\n    </div>\n  </div>\n  <p class="text-description" style="padding: 10px 10px 0px 10px;color:#000" *ngIf="userStatus == \'user\'" padding>\n      {{textClinicDescription}}\n  </p>\n  <p class="text-description" style="padding: 10px 10px 0px 10px;color:#000" *ngIf="!userStatus" padding>\n      Hier finden Sie alle Informationen, die Sie für Ihren Aufenthalt benötigen.\n  </p>\n\n  <ion-row  class="grid" style="" *ngFor="let tilePair of tiles">\n    <ion-col *ngFor="let tile of tilePair">\n      <ion-card class="tile" padding (click)="navigateTo(tile)" *ngIf="!checkDisabled(tile)">\n\n        <ion-item text-center>\n\n          <img class="image-icon large" src="{{tile.icon}}">\n          <h2>{{tile.title}}</h2>\n        </ion-item>\n        <!-- </ion-card-content> -->\n      </ion-card>\n      <ion-card class="tile" padding *ngIf="checkDisabled(tile)" disabled>\n        <ion-item text-center>\n\n          <ion-spinner></ion-spinner>\n          <h2>{{tile.title}} - Laden</h2>\n        </ion-item>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <!--     <ion-list right text-right  >  <ion-note >							<ion-icon name="time"></ion-icon> Zuletzt genutzt      </ion-note></ion-list> -->\n\n  <!-- <ion-row>\n    <ion-card class="quick-action" [navPush]="newsListPage">\n\n      <ion-card-content>\n        <ion-icon  name="add-circle"></ion-icon>\n        <span>News</span>\n      </ion-card-content>\n    </ion-card>\n  </ion-row> -->\n\n  <!-- <ion-row>\n    <ion-card class="quick-action" [navPush]="drupalListPage">\n      <ion-card-content>\n        <ion-icon   name="information-circle"></ion-icon>\n        <span>Allgemeine Informationen</span>\n      </ion-card-content>\n    </ion-card>\n  </ion-row> -->\n\n  <!-- <br/>\n	<ion-card>\n	  <ion-list detail-push no-lines *ngFor="let subLinkPair of subLinks">\n		<button ion-item *ngFor="let subLink of subLinkPair" (click)="navigateTo(subLink)">\n\n		  {{ subLink.title }}\n		</button>\n\n	  </ion-list>\n	</ion-card> -->\n\n  <!--\n      <ion-row>\n          <ion-card class="quick-action" (click)="getDirections()">\n              <ion-card-content>\n                  <ion-icon name="compass"></ion-icon>\n                  <span>Wegeplan</span>\n              </ion-card-content>\n          </ion-card>\n      </ion-row>\n\n      <ion-row>\n          <ion-card class="quick-action" (click)="openFacebookPage()">\n              <ion-card-content>\n                  <ion-icon name="question"></ion-icon>\n                  <span>Häufige Fragen</span>\n              </ion-card-content>\n          </ion-card>\n      </ion-row>\n  -->\n\n</ion-content>\n<ion-footer (click)="goToLoginPage()" *ngIf="footerNeed" style="z-index: 500000; margin-top: 120px" no-border>\n  <ion-toolbar color="primary">\n    <ion-title><span style="color: #5b5b5b">Hier zum Login</span></ion-title>\n    <ion-buttons end>\n      <button style="color: white" ion-button icon-only>\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"D:\ger\wzk\front\3 wzk few options3\3 wzk few options\clinic_app_frontend\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_manager_auth_manager__["a" /* AuthManagerProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_gui_manager_gui_manager__["a" /* GuiManagerProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectronProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
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
  Generated class for the ElectronProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ElectronProvider = /** @class */ (function () {
    function ElectronProvider(http, modalCtrl) {
        var _this = this;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.currentCallback = function (data) {
        };
        var me = this;
        try {
            var socket_1 = new WebSocket("ws://127.0.0.1:56796");
            socket_1.onclose = function (evt) {
                if (evt.code == 3001) {
                }
                else {
                    me.isElectron = false;
                }
            };
            socket_1.onmessage = function (rep) {
                var data = rep.data;
                if (data.action == "reset") {
                    _this.modalCtrl.create('PasswordResetPage', { key: data.key });
                }
                else {
                    me.currentCallback(JSON.parse(data));
                }
            };
            socket_1.onopen = function () {
                me.isElectron = true;
                me.websocket = socket_1;
                socket_1.send(JSON.stringify({ action: "handshake" }));
            };
        }
        catch (error) {
            console.log(error);
        }
    }
    ElectronProvider.prototype.downloadFile = function (name, data, callback) {
        this.currentCallback = callback;
        this.websocket.send(JSON.stringify({
            action: "download",
            data: { point: "api.clinetplatforms.com", data: data, port: 8243, name: name }
        }));
    };
    ElectronProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ModalController */]])
    ], ElectronProvider);
    return ElectronProvider;
}());

//# sourceMappingURL=electron.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkin_modals__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storage_manager_storage_manager__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gui_manager_gui_manager__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__otp_otp__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__platform_manager_platform_manager__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__link_manager_link_manager__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_checkin_conditions__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__draw_draw__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__form_manager_form_manager__ = __webpack_require__(402);
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
  Generated class for the CheckinServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CheckinServiceProvider = /** @class */ (function () {
    function CheckinServiceProvider(http, api, drawManager, storageProvider, guiManager, otp, file, platformUtils, linkManager, alertCtrl, formManagerProvider) {
        // this.formManagerProvider.retrieveWebFormStructureFrom(this.linkManager.getWebformAsHalJSON(), "", (form) => {
        //   this.form = form;
        // });
        this.http = http;
        this.api = api;
        this.drawManager = drawManager;
        this.storageProvider = storageProvider;
        this.guiManager = guiManager;
        this.otp = otp;
        this.file = file;
        this.platformUtils = platformUtils;
        this.linkManager = linkManager;
        this.alertCtrl = alertCtrl;
        this.formManagerProvider = formManagerProvider;
        this.counter = 0;
        this.savedData = [];
        this.presetData = null;
        this.isIE = false;
        this.viewPositionData = {};
        this.authKey = "";
        this.encodedEmailId = "";
        this.backendContent = null;
        this.form = null;
        /*this.parse(null, (parsed) => {
         this.presetData = parsed;
         });*/
    }
    CheckinServiceProvider.prototype.initWithAuthKey = function (key, encodedEmailId) {
        var _this = this;
        this.authKey = key;
        this.encodedEmailId = encodedEmailId;
        this.formManagerProvider.retrieveWebFormStructureFrom(this.linkManager.getWebformAsHalJSON(), encodedEmailId, function (form) {
            _this.form = form;
            //  form.retrieveSavedDataAndMerge( (retrievedData) => {
            // //   console.log("Retrieved data from storage: ", retrievedData);
            // //   this.guiManager.loaders.checkin = false;
            //  })
            _this.guiManager.loaders.checkin = false;
        });
        /*
              this.parse(this.backendContent, (parsed) => {
                this.storageProvider.contains(this.encodedEmailId + "checkin_custom_data", (nodeDataContains) => {
                  //console.log("Custome data contains response: ", nodeDataContains);
                  if (nodeDataContains) {
                    this.storageProvider.fetch(this.encodedEmailId + "checkin_custom_data", (nodeDataResponse) => {
        
                      //this.guiManager.showToast("Contains custom data, merging nodes...", 2000);
                      console.log("Saved custom data:", nodeDataResponse);
                      this.presetData = this.mergeNodeState(parsed, nodeDataResponse);
                      this.guiManager.loaders.checkin = false;
                      //this.guiManager.showPopupMessage("loader off", "loader off 1");
                      console.log("parse: callback: Checkin loader should be off now.")
                    })
                  }
                  else {
                    console.log("custom data aren't in the device", nodeDataContains);
                    this.presetData = parsed;
                    this.guiManager.loaders.checkin = false;
                    //this.guiManager.showPopupMessage("loader off", "loader off 2 ");
                    console.log("parse: callback: Checkin loader should be off now.")
                  }
                });
              });
        */
    };
    CheckinServiceProvider.prototype.fixNodeChildren = function (node) {
        if (node.hasOwnProperty("children") && node.children != undefined) {
            for (var i = 0; i < node.children.length; i++) {
                var current = node.children[i];
                if (current instanceof __WEBPACK_IMPORTED_MODULE_3__checkin_modals__["b" /* Node */]) {
                    this.fixNodeChildren(current);
                }
                else {
                    var newNode = Object.assign(new __WEBPACK_IMPORTED_MODULE_3__checkin_modals__["b" /* Node */](current.name, current.title, current.type, current.id), current);
                    this.fixNodeChildren(newNode);
                    node.children[i] = newNode;
                }
            }
        }
    };
    CheckinServiceProvider.prototype.mergeNode = function (node, data) {
        if (data == undefined) {
            return;
        }
        // Parse data of the node itself if possible
        if (data.hasOwnProperty("reflector") && data.reflector != undefined) {
            node.reflector = data.reflector;
        }
        if (node.type == "checkboxes") {
            if (data.hasOwnProperty("fields") && data.fields != undefined && data.fields) {
                if (data.fields instanceof Array) {
                    for (var _i = 0, _a = data.fields; _i < _a.length; _i++) {
                        var pair = _a[_i];
                        if (pair.hasOwnProperty("key") && pair.key == "values") {
                            node.removeField("values");
                            node.addField("values", pair.value);
                        }
                    }
                }
            }
        }
        if (node.canMultiply == true) {
            if (data.hasOwnProperty("children") && data.children.hasOwnProperty("length") && data.children.length > 0) {
                node.children = [];
                for (var i = 0; i < data.children.length; i++) {
                    var currentChild = data.children[i];
                    var newNode = Object.assign(new __WEBPACK_IMPORTED_MODULE_3__checkin_modals__["b" /* Node */](currentChild.name, currentChild.title, currentChild.type, currentChild.id), currentChild);
                    this.fixNodeChildren(newNode);
                    node.children.push(newNode);
                }
            }
        }
        else if (node.canMultiply == false) {
            // Parse data of the children
            if (node.children.length > 0) {
                this.mergeNodeState(node.children, data.children);
            }
        }
    };
    CheckinServiceProvider.prototype.mergeNodeState = function (parsed, nodeSavedState) {
        for (var i = 0; i < parsed.length; i++) {
            this.mergeNode(parsed[i], nodeSavedState[i]);
        }
        return parsed;
    };
    CheckinServiceProvider.prototype.parseNode = function (parentName, content) {
        this.counter++;
        if (content["#type"] == "webform_signature")
            return this.drawNode();
        var contentKeys = Object.keys(content);
        var type = content["#type"];
        var name = content["#title"];
        var node = new __WEBPACK_IMPORTED_MODULE_3__checkin_modals__["b" /* Node */](parentName, name, type, content["#webform_id"]);
        for (var i = 0; i < contentKeys.length; i++) {
            var current = contentKeys[i];
            if (!current.startsWith("#")) {
                var newNode = this.parseNode(current, content[current]);
                //newNode.parent = node;
                if (content[current]["#webform_multiple"] && content[current]["#webform_id"] != "test2--an_welchen_erkrankungen_leiden_bzw_litten_sie_ausserdem_1") {
                    newNode.selfMultiply = true;
                    node.canMultiply = true;
                }
                node.children.push(newNode);
            }
        }
        if (content["#other__option_label"] != null) {
            node.addField("placeholder", content["#other__placeholder"]);
        }
        // States refer to the input status, if it is disabled, visible, etc..
        if (content["#states"] != null) {
            var keys = Object.keys(content["#states"]);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var current = content["#states"][key];
                var rule = new __WEBPACK_IMPORTED_MODULE_3__checkin_modals__["c" /* Rule */](key);
                var childKeys = Object.keys(current);
                for (var x = 0; x < childKeys.length; x++) {
                    var currentChild = current[childKeys[x]];
                    var name_1 = childKeys[x].substr(13).substr(0, childKeys[x].substr(13).length - 2);
                    var number = 0;
                    if (name_1.indexOf("[") != -1 && name_1.indexOf("[radios]") == -1) {
                        if (Number.isNaN(Number.parseInt(name_1.substr(name_1.length - 3, 2)))) {
                            number = Number.parseInt(name_1.substr(name_1.length - 2, 1));
                            name_1 = name_1.substr(0, name_1.length - 3);
                        }
                        else {
                            number = Number.parseInt(name_1.substr(name_1.length - 3, 2));
                            name_1 = name_1.substr(0, name_1.length - 4);
                        }
                    }
                    var conditionKeys = Object.keys(currentChild);
                    for (var y = 0; y < keys.length; y++) {
                        var c = new __WEBPACK_IMPORTED_MODULE_3__checkin_modals__["a" /* Condition */](name_1, conditionKeys[y], currentChild[conditionKeys[y]]);
                        if (number != 0) {
                            c.fromArray = true;
                            c.arrId = number;
                        }
                        rule.conditions.push(c);
                    }
                }
                node.rules.push(rule);
            }
        }
        // This is the type of the form element
        switch (type) {
            case "processed_text": {
                node.addField("text", content["#text"]);
                break;
            }
            case "select": {
                var arr = [];
                var keys = Object.keys(content["#options"]);
                for (var i = 0; i < keys.length; i++) {
                    arr.push(content["#options"][keys[i]]);
                }
                node.addField("values", arr);
                break;
            }
            case "range": {
                node.addField("min", content["#min"]);
                node.addField("max", content["#max"]);
                break;
            }
            case "webform_radios_other": {
                //console.log("Parsing webform_radios_other", content);
                var options = content.radios["#options"];
                var optionsKeys = Object.keys(options);
                var arr = [];
                for (var i = 0; i < optionsKeys.length; i++) {
                    if (optionsKeys[i] == "_other_") {
                        node.addField("other_select", options[optionsKeys[i]]);
                    }
                    arr.push(options[optionsKeys[i]]);
                }
                node.addField("values", arr);
                //node.reflector = arr[0];
                //console.log("processed node:", node);
                break;
            }
            case "radios": {
                var options = content["#options"];
                var optionsKeys = Object.keys(options);
                var arr = [];
                for (var i = 0; i < optionsKeys.length; i++) {
                    if (optionsKeys[i] == "_other_") {
                        node.addField("other_select", options[optionsKeys[i]]);
                    }
                    arr.push(options[optionsKeys[i]]);
                }
                node.addField("values", arr);
                //node.reflector = arr[0];
                break;
            }
            case "checkboxes": {
                //console.log("Parsing checkboxes", content);
                var options = content["#options"];
                var optionsKeys = Object.keys(options);
                var arr = [];
                for (var i = 0; i < optionsKeys.length; i++) {
                    if (optionsKeys[i] == "_other_") {
                        node.addField("other_select", options[optionsKeys[i]]);
                    }
                    arr.push({ val: options[optionsKeys[i]], ref: false });
                }
                node.addField("values", arr);
                //console.log("processed node:", node);
                break;
            }
            case "webform_likert": {
                var optionsArr = [];
                var optionKeys = Object.keys(content["#answers"]);
                for (var i = 0; i < optionKeys.length; i++) {
                    var optionValue = content["#answers"][optionKeys[i]];
                    optionsArr.push({ key: optionKeys[i], value: optionValue });
                }
                var questions = content["#questions"];
                var questionKeys = Object.keys(questions);
                for (var i = 0; i < questionKeys.length; i++) {
                    var value = questions[questionKeys[i]];
                    var childNode = new __WEBPACK_IMPORTED_MODULE_3__checkin_modals__["b" /* Node */](questionKeys[i], value, "likert_child", content["#webform_id-" + i]);
                    childNode.addField("values", optionsArr);
                    /*for (let y = 0; y < this.savedData.length; y++) {
                        const current = this.savedData[y];
                        if (current.id == childNode.id) {
                            childNode.reflector = current.value;
                            break;
                        }
                    }*/
                    node.children.push(childNode);
                }
                break;
            }
            case "webform_checkboxes_other": {
                //              console.log("Parsing webform checkboxes other", content);
                var options = content.checkboxes["#options"];
                var optionsKeys = Object.keys(options);
                var arr = [];
                for (var i = 0; i < optionsKeys.length; i++) {
                    if (optionsKeys[i] == "_other_") {
                        node.addField("other_select", options[optionsKeys[i]]);
                    }
                    arr.push({ val: options[optionsKeys[i]], ref: false });
                }
                node.addField("values", arr);
                node.reflector = arr[0];
                //              console.log("processed node:", node);
                break;
            }
            default: {
            }
        }
        /*
                for (let i = 0; i < this.savedData.length; i++) {
                    const current = this.savedData[i];
                    if (current.id == node.id) {
        
                      if (node.type == "checkboxes") {
                          node.removeField("values");
                          node.addField("values", current.value)
                      }
                      /!*
                      // Untested - broken code
                      else if (node.type == "webform_checkboxes_other") {
                        node.removeField("values");
                        node.addField("values", current.value)
                      }*!/
                      else if (node.type != "checkboxes") {
                        node.reflector = current.value;
                      }
                      break;
                    }
                }*/
        return node;
    };
    /**
     * This prepares the data to be send to the backend in a specific format and returns the result.
     * Warning: There is hardcoded re-order of the sections in case the amount of the sections is 10.
     * @param all
     * @param getValsForRules
     */
    CheckinServiceProvider.prototype.prepareForSend = function (all, getValsForRules) {
        var arr = [];
        var order = [2, 6, 8, 5, 3, 4, 9, 7, 10, 1];
        console.log('length of nodes is ' + all.length);
        if (order.length == all.length) {
            for (var _i = 0, order_1 = order; _i < order_1.length; _i++) {
                var i = order_1[_i];
                var current = all[i - 1];
                arr.push({
                    title: current.title,
                    type: current.type,
                    name: current.name,
                    childs: this.prepareForSendSubroutine(current.children, getValsForRules),
                    value: current.reflector_other ? current.reflector_other : current.reflector,
                    visible: __WEBPACK_IMPORTED_MODULE_13__pages_checkin_conditions__["a" /* Process */].rulesFullFilled('visible', current, getValsForRules),
                    options: current.getField('values') == null ? null : current.getField('values')
                });
            }
            return arr;
        }
        else {
            return this.prepareForSendSubroutine(all, getValsForRules);
        }
    };
    CheckinServiceProvider.prototype.prepareForSendSubroutine = function (all, getValsForRules) {
        var arr = [];
        for (var i = 0; i < all.length; i++) {
            var current = all[i];
            var currentValue = current.reflector_other ? current.reflector_other : current.reflector;
            if (current.type == "date" || current.type == "datelist") {
                if (current.reflector != undefined && current.reflector != null) {
                    var date = new Date(current.reflector);
                    currentValue = __WEBPACK_IMPORTED_MODULE_12_moment__(date).format("DD.MM.YYYY");
                }
            }
            if (current.type == "canvas") {
                console.info('Current name is ' + current.name);
                console.info(this.drawManager.processed);
                var canvasImages = [{ name: "Vorne", path: 'assets/checkin/man_model_03.jpg' },
                    { name: "Rücken", path: 'assets/checkin/man_model_04.jpg' },
                    { name: "linke Seite", path: 'assets/checkin/man_model_05.jpg' },
                    { name: "rechte Seite", path: 'assets/checkin/man_model_06.jpg' }];
                for (var _i = 0, canvasImages_1 = canvasImages; _i < canvasImages_1.length; _i++) {
                    var image = canvasImages_1[_i];
                    var imageData = this.drawManager.processed[current.name + image.path];
                    if (imageData != null) {
                        arr.push({
                            title: image.name,
                            type: "canvas_image",
                            name: image.name,
                            childs: [],
                            value: imageData,
                            visible: true,
                            options: null
                        });
                    }
                }
                continue;
            }
            if (current.type == "webform_checkboxes_other") {
                if (current.isOtherChecked) {
                    currentValue = current.reflector_other;
                }
                else {
                    currentValue = '';
                }
                arr.push({
                    title: current.title,
                    type: current.type,
                    name: current.name,
                    childs: [],
                    value: currentValue,
                    visible: __WEBPACK_IMPORTED_MODULE_13__pages_checkin_conditions__["a" /* Process */].rulesFullFilled('visible', current, getValsForRules),
                    options: current.getField('values') == null ? null : current.getField('values')
                });
                continue;
            }
            arr.push({
                title: current.title,
                type: current.type,
                name: current.name,
                childs: this.prepareForSendSubroutine(current.children, getValsForRules),
                value: currentValue,
                visible: __WEBPACK_IMPORTED_MODULE_13__pages_checkin_conditions__["a" /* Process */].rulesFullFilled('visible', current, getValsForRules),
                options: current.getField('values') == null ? null : current.getField('values'),
                group: current.getField('GroupId'),
                question: current.getField('QuestionId'),
                answer: current.getField('AnswerId'),
                answer_ids: current.getField('answers')
            });
        }
        return arr;
    };
    CheckinServiceProvider.prototype.hashFormFields = function (text) {
        if (Array.prototype.reduce) {
            return text.split("").reduce(function (a, b) { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0);
        }
        var hash = 0;
        if (text.length === 0)
            return hash;
        for (var i = 0; i < text.length; i++) {
            var character = text.charCodeAt(i);
            hash = ((hash << 5) - hash) + character;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    };
    CheckinServiceProvider.prototype.removeCache = function (callback) {
        var _this = this;
        this.storageProvider.contains(this.encodedEmailId + "checkin_data", function (ckdContains) {
            if (ckdContains) {
                _this.savedData = [];
                _this.storageProvider.remove(_this.encodedEmailId + "checkin_data", function () {
                    _this.storageProvider.contains(_this.encodedEmailId + "checkin_custom_data", function (ckcdContains) {
                        if (ckcdContains) {
                            _this.storageProvider.remove(_this.encodedEmailId + "checkin_custom_data", function () {
                                callback();
                            });
                        }
                        else {
                            callback();
                        }
                    });
                });
            }
            else {
                _this.storageProvider.contains(_this.encodedEmailId + "checkin_custom_data", function (ckcdContains) {
                    if (ckcdContains) {
                        _this.storageProvider.remove(_this.encodedEmailId + "checkin_custom_data", function () {
                            callback();
                        });
                    }
                    else {
                        callback();
                    }
                });
            }
        });
    };
    /*    parse(backendContent, callback = (nodes: Node[]) => {}) {
    
          const parseContent = (content) => {
            //this.guiManager.showToast("Received form-data from the backend...", 1000);
            let hash = this.hashFormFields(JSON.stringify(content));
            console.log("Hash of the form: ", hash);
            const next = () => {
              //this.guiManager.showToast("Inside next function...", 1000);
              const nodes: Node[] = [];
              const keys = Object.keys(content);
              for (let i = 0; i < keys.length; i++) {
                if (!keys[i].startsWith("#")) {
                  nodes.push(this.parseNode(keys[i], content[keys[i]]))
                }
    
              }
              console.log("parse function, fetch: Checkin loader should be off now");
              console.log("nodes are: ", nodes);
              callback(nodes);
              this.counter = 0;
            };
    
            this.storageProvider.contains("checkin_form_hash", (contains) => {
              if (contains) {
                this.storageProvider.fetch("checkin_form_hash", (previousHash) => {
                  if (previousHash != hash) {
                    console.log("Hash of the form is different. Clearing checkin data from cache.");
                    this.storageProvider.save("checkin_form_hash", hash, () => {
                      console.log("Hash of the form has been saved in the cache.");
                      this.removeCache(()=> {
                        next();
                      });
                    });
                  }
                  else {
                    console.log("Hash of the form is correct. The data should load soon.");
                    next();
                  }
                });
              }
              else {
                console.log("There is no hash of the form in cache. Clearing checkin data from cache");
                this.storageProvider.save("checkin_form_hash", hash, () => {
                  console.log("Hash of the form has been saved in the cache.");
                  this.removeCache(()=> {
                    next();
                  });
                });
              }
            });
          };
    
          const fetch = () => {
    
              if (backendContent == null) {
                this.http.get(this.linkManager.getWebformAsHalJSON()).map(res => res.json()).subscribe(content => {
                  console.log("Content received by the backend: ", content);
                  this.backendContent = content;
                  parseContent(content);
                });
              }
              else {
                console.log("Backend content are already retrieved: ", backendContent);
                parseContent(backendContent);
              }
          };
    
    
          this.storageProvider.contains(this.encodedEmailId + "checkin_data", (contains) => {
              if (contains) {
                  console.log("Restoring checkin data...");
                  this.storageProvider.fetch(this.encodedEmailId + "checkin_data", (response) => {
                    //this.savedData = response;
                    console.log("Saved", response);
                    fetch();
                  })
              } else {
                  fetch();
              }
          })
        }
    */
    CheckinServiceProvider.prototype.parseData = function (data, callback) {
        var _this = this;
        var fetch = function (nodeDataResponse) {
            console.log("parseData, fetch: Starting fetching the information for the form from backend...");
            _this.http.get(_this.linkManager.getWebformAsHalJSON()).map(function (res) { return res.json(); }).subscribe(function (content) {
                console.log("parseData, fetch: Finished fetching the information from the backend ", content);
                var nodes = [];
                var keys = Object.keys(content);
                for (var i = 0; i < keys.length; i++) {
                    if (!keys[i].startsWith("#")) {
                        nodes.push(_this.parseNode(keys[i], content[keys[i]]));
                    }
                }
                //this.presetData = nodes;
                console.log("Saved custom data:", nodeDataResponse);
                var finalNodes = _this.mergeNodeState(nodes, nodeDataResponse);
                _this.presetData = finalNodes;
                _this.guiManager.loaders.checkin = false;
                //this.guiManager.showPopupMessage("loader off", "loader off 3");
                //this.guiManager.loaders.checkin = false;
                console.log("parseData, fetch: Checkin loader should be off now");
                console.log("nodes are: ", finalNodes);
                callback(finalNodes);
                _this.counter = 0;
            }, function (error) {
                _this.guiManager.showPopupMessage("Fehler", "Die Formulardaten konnten nicht heruntergeladen werden. Beenden Sie die Anwendung und versuchen Sie es erneut.");
                console.log("Error when downloading the form's field data: ", error);
            });
        };
        this.counter = 0;
        this.presetData = null;
        //this.savedData = data;
        fetch(data);
    };
    CheckinServiceProvider.prototype.saveViewPosition = function (positionData) {
        /*this.viewPositionData = positionData;*/
        if (this.form != null) {
            this.form.saveViewPosition(positionData);
        }
        /*this.storageProvider.save(this.encodedEmailId + "checkin_view_position", positionData, (success) => {
          console.log("View position saved successfully:", positionData)
        });*/
    };
    CheckinServiceProvider.prototype.getViewPosition = function (callback) {
        this.form.getViewPosition(callback);
        /*this.storageProvider.contains(this.encodedEmailId + "checkin_view_position", (contains) => {
          if (contains) {
            this.storageProvider.fetch(this.encodedEmailId + "checkin_view_position", (response) => {
              console.log("Saved view position retrieved: ", response);
              callback(response);
            })
          } else {
            callback({});
          }
        });*/
    };
    CheckinServiceProvider.prototype.drawNode = function () {
        this.counter++;
        return new __WEBPACK_IMPORTED_MODULE_3__checkin_modals__["b" /* Node */]("canvas_field", "Bitte einzeichnen", "canvas", "draw_canvas");
    };
    CheckinServiceProvider.prototype.deleteCheckins = function (patientEmail, callback) {
        var apiPath = "/checkin/delete";
        this.api.post(apiPath, {
            key: this.authKey,
            data: patientEmail
        }, [], function (success, data) {
            if (success) {
                var bodyResponse = JSON.parse(data["_body"]);
                var successfullyTransferred = bodyResponse["success"];
                var dataResponse = bodyResponse["data"];
                if (successfullyTransferred) {
                    callback(true, dataResponse);
                }
                else {
                    callback(false, dataResponse);
                }
            }
            else {
                callback(false, data);
            }
        });
    };
    CheckinServiceProvider.prototype.retrieveCheckins = function (patientsIds, callback) {
        var _this = this;
        var doNotUseOTPEncryption = false;
        if (this.otp.shouldNotRunOTP()) {
            doNotUseOTPEncryption = true;
        }
        var apiPath = "/checkin/retrieve";
        this.api.post(apiPath, {
            key: this.authKey,
            id: patientsIds,
            crypt: doNotUseOTPEncryption
        }, [], function (success, data) {
            if (success) {
                console.log("Success on retrieving checkins data from the server");
                var bodyResponse = JSON.parse(data["_body"]);
                var successfullyTransferred = bodyResponse["success"];
                var dataResponse = bodyResponse["data"];
                if (successfullyTransferred) {
                    if (doNotUseOTPEncryption == true) {
                        callback(true, dataResponse);
                    }
                    else {
                        _this.otp.decryptBase64DataAndGetBase64(dataResponse, function (decrSuccess, decrData) {
                            callback(decrSuccess, decrData);
                        });
                    }
                }
                else {
                    console.log("There was a problem with the server.");
                    console.log(false, dataResponse);
                }
            }
            else {
                console.log("Failed to retrieve checkin data from the server");
                data["success"] = false;
                callback(false, data);
            }
        });
    };
    CheckinServiceProvider.prototype.sendCheckin = function (data, patientEmail, callback) {
        var _this = this;
        var doNotUseOTPEncryption = false;
        if (this.otp.shouldNotRunOTP()) {
            doNotUseOTPEncryption = true;
        }
        var apiPath = "/checkin/post";
        var preparedData = btoa(encodeURIComponent(JSON.stringify(data)));
        if (doNotUseOTPEncryption == true) {
            this.api.post(apiPath, {
                key: this.authKey,
                content: preparedData,
                data: patientEmail,
                crypt: doNotUseOTPEncryption
            }, [], function (success, data) {
                _this.handleServerResponse(success, data, function (s, d) { callback(s, d); });
                if (success == false) {
                    console.log("The server was most likely un-responsive. Please see details: ", success, data);
                }
            });
        }
        else {
            var me_1 = this;
            var sendData_1 = function () {
                me_1.otp.encryptDataAndGetBase64(preparedData, function (success, encodedData) {
                    if (success == true) {
                        console.log("Success of encrypting data: ", encodedData);
                        me_1.api.post(apiPath, {
                            key: me_1.authKey,
                            content: encodedData,
                            data: patientEmail,
                            crypt: doNotUseOTPEncryption
                        }, [], function (success, data) {
                            me_1.handleServerResponse(success, data, function (s, d) { callback(s, d); });
                            if (success == false) {
                                console.log("The server was most likely un-responsive. Please see details: ", success, data);
                            }
                        });
                    }
                    else {
                        callback(false, encodedData);
                        console.log("Error when sending check-in:", encodedData);
                    }
                });
            };
            this.otp.doesKeyExistOnDevice(function (exists) {
                console.log("The key exists: ", exists);
                if (exists) {
                    sendData_1();
                }
                else {
                    var userChoice = _this.alertCtrl.create({
                        title: 'Sicherheitsschlüssel Herunterladen?',
                        message: 'Um das Formular abzusenden, laden Sie bitte jetzt unseren Sicherheitsschlüssel herunter. ',
                        buttons: [{
                                text: 'Abbrechen',
                                handler: function () {
                                    callback(false, "Der Benutzer hat den Vorgang abgebrochen.");
                                }
                            }, {
                                text: 'Herunterladen',
                                handler: function () {
                                    _this.otp.downloadOtpKey(function (keyDownloaded) {
                                        if (keyDownloaded) {
                                            sendData_1();
                                        }
                                        else {
                                            _this.guiManager.showPopupMessage("Fehler beim Senden des Formulars", "Der Sicherheitsschlüssel konnte nicht heruntergeladen werden.", function () { }, false);
                                            callback(false, "");
                                        }
                                    });
                                }
                            }],
                        enableBackdropDismiss: false
                    });
                    userChoice.present();
                }
            });
        }
    };
    CheckinServiceProvider.prototype.sendCheckinToKIS = function (data, patientEmail, callback) {
        var _this = this;
        //        let doNotUseOTPEncryption: boolean = false;
        var doNotUseOTPEncryption = true;
        if (this.otp.shouldNotRunOTP()) {
            doNotUseOTPEncryption = true;
        }
        var apiPath = "/rest/app/checkin/submit";
        var preparedData = btoa(encodeURIComponent(JSON.stringify(data)));
        if (doNotUseOTPEncryption == true) {
            this.api.backendPost(apiPath, data, [], function (success, data) {
                console.info("server answer is:", data);
                _this.handleServerResponse(success, data, function (s, d) { callback(s, d); });
                if (success == false) {
                    console.log("The server was most likely un-responsive. Please see details: ", success, data);
                }
            });
        }
        else {
            var me_2 = this;
            var sendData_2 = function () {
                me_2.otp.encryptDataAndGetBase64(preparedData, function (success, encodedData) {
                    if (success == true) {
                        console.log("Success of encrypting data: ", encodedData);
                        me_2.api.post(apiPath, {
                            key: me_2.authKey,
                            content: encodedData,
                            data: patientEmail,
                            crypt: doNotUseOTPEncryption
                        }, [], function (success, data) {
                            me_2.handleServerResponse(success, data, function (s, d) { callback(s, d); });
                            if (success == false) {
                                console.log("The server was most likely un-responsive. Please see details: ", success, data);
                            }
                        });
                    }
                    else {
                        callback(false, encodedData);
                        console.log("Error when sending check-in:", encodedData);
                    }
                });
            };
            this.otp.doesKeyExistOnDevice(function (exists) {
                console.log("The key exists: ", exists);
                if (exists) {
                    sendData_2();
                }
                else {
                    var userChoice = _this.alertCtrl.create({
                        title: 'Sicherheitsschlüssel Herunterladen?',
                        message: 'Um das Formular abzusenden, laden Sie bitte jetzt unseren Sicherheitsschlüssel herunter. ',
                        buttons: [{
                                text: 'Abbrechen',
                                handler: function () {
                                    callback(false, "Der Benutzer hat den Vorgang abgebrochen.");
                                }
                            }, {
                                text: 'Herunterladen',
                                handler: function () {
                                    _this.otp.downloadOtpKey(function (keyDownloaded) {
                                        if (keyDownloaded) {
                                            sendData_2();
                                        }
                                        else {
                                            _this.guiManager.showPopupMessage("Fehler beim Senden des Formulars", "Der Sicherheitsschlüssel konnte nicht heruntergeladen werden.", function () { }, false);
                                            callback(false, "");
                                        }
                                    });
                                }
                            }],
                        enableBackdropDismiss: false
                    });
                    userChoice.present();
                }
            });
        }
    };
    CheckinServiceProvider.prototype.checkIfPatientAllowedToCompleteCheckin = function (callback) {
        var apiPath = "/rest/app/users/checkin/allowed";
        this.api.backendPost(apiPath, [], [], function (success, answer) {
            //      console.info('answer is:', answer);
            callback(success, answer.data);
        });
        // this.storageProvider.fetch('user_info', user_info => {
        //   this.api.postBackend(apiPath, {
        //     patient_id: user_info.patient_id
        //   }, [], (success, data) => {
        //     this.handleServerResponse(success, data, (s, d) => {
        //       callback(s, d);
        //     });
        //     if (success == false) {
        //       console.log("The server was most likely un-responsive. Please see details: ", success, data);
        //     }
        //   });
        // });
    };
    CheckinServiceProvider.prototype.handleServerResponse = function (success, data, callback) {
        var dataResponse = "";
        var successResponse = success;
        if (data.hasOwnProperty("success")) {
            successResponse = data["success"];
        }
        if (data.hasOwnProperty("_body")) {
            dataResponse = data["_body"];
            try {
                var json = JSON.parse(dataResponse);
                if (json.hasOwnProperty("data")) {
                    dataResponse = json["data"];
                }
                if (json.hasOwnProperty("success")) {
                    successResponse = json["success"];
                }
            }
            catch (e) {
            }
        }
        else {
            dataResponse = data;
        }
        callback(successResponse, dataResponse);
    };
    CheckinServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_14__draw_draw__["a" /* DrawProvider */],
            __WEBPACK_IMPORTED_MODULE_4__storage_manager_storage_manager__["a" /* StorageManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_5__gui_manager_gui_manager__["a" /* GuiManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_7__otp_otp__["a" /* OtpProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_10__platform_manager_platform_manager__["a" /* PlatformManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_11__link_manager_link_manager__["a" /* LinkManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_15__form_manager_form_manager__["a" /* FormManagerProvider */]])
    ], CheckinServiceProvider);
    return CheckinServiceProvider;
}());

//# sourceMappingURL=checkin-service.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__file_modal__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__electron_electron__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_is_cordova_available__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__storage_manager_storage_manager__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gui_manager_gui_manager__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_opener__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__otp_otp__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__platform_manager_platform_manager__ = __webpack_require__(54);
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
  Generated class for the FileManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FileManagerProvider = /** @class */ (function () {
    function FileManagerProvider(http, electron, storage, guiManager, fileManager, opener, otp, alertCtrl, platformUtils) {
        this.http = http;
        this.electron = electron;
        this.storage = storage;
        this.guiManager = guiManager;
        this.fileManager = fileManager;
        this.opener = opener;
        this.otp = otp;
        this.alertCtrl = alertCtrl;
        this.platformUtils = platformUtils;
        this.fileIds = [];
        this.fetching = false;
        this.encodedEmailId = "";
    }
    FileManagerProvider_1 = FileManagerProvider;
    FileManagerProvider.prototype.clear = function () {
        this.fileIds = [];
        this.cached = new __WEBPACK_IMPORTED_MODULE_3__file_modal__["a" /* File */]();
        this.key = "";
        this.isMedical = false;
        this.name = "";
    };
    FileManagerProvider.prototype.writeDataToFileAndOpen = function (data, file, notUseOTP) {
        var _this = this;
        var me = this;
        var id = file.fileId;
        var hash = file.hashcode;
        var strid = file.fileId + "";
        if (notUseOTP) {
            if (me.platformUtils.isWebApplication()) {
                var link = document.createElement("a");
                link.href = window.URL.createObjectURL(data.blob());
                //link.download = item.name;
                link.download = "Aufnahmefragebogen.pdf";
                link.click();
            }
            else {
                var path = me.fileManager.dataDirectory.substr(7) + "/" + strid + "/" + file.name;
                me.fileManager.checkDir(this.fileManager.dataDirectory, strid).then(function (exists) {
                    console.log("The folder does exist");
                    me.fileManager.writeFile(_this.fileManager.dataDirectory + "/" + strid, file.name, data.blob(), { replace: true }).then(function (written) {
                        console.log("saved ", file.name, " file");
                        console.log("Path is: " + me.fileManager.dataDirectory.substr(7) + strid + "/" + file.name);
                        me.storage.save("file-" + id, { id: id, hashcode: hash }, function () {
                            me.openFile(file);
                        });
                    }).catch(function (err) {
                    });
                }).catch(function (err) {
                    console.log("Folder does not exist");
                    me.fileManager.createDir(_this.fileManager.dataDirectory, strid, true).then(function (_) {
                        console.log("folder created");
                        me.fileManager.writeFile(_this.fileManager.dataDirectory + "/" + strid, file.name, data.blob(), { replace: true }).then(function (written) {
                            console.log("saved ", file.name, " file");
                            console.log("Path is: " + me.fileManager.dataDirectory.substr(7) + strid + "/" + file.name);
                            me.storage.save("file-" + id, { id: id, hashcode: hash }, function () {
                                me.openFile(file);
                            });
                        }).catch(function (err) {
                        });
                    });
                });
            }
        }
        else {
            me.fileManager.checkDir(this.fileManager.dataDirectory, strid).then(function (exists) {
                console.log("The folder does exist");
                me.fileManager.writeFile(_this.fileManager.dataDirectory + "/" + strid, file.name + ".crypt", data.blob(), { replace: true }).then(function (written) {
                    console.log("wrote .crypt file");
                    console.log("Path is: " + me.fileManager.dataDirectory.substr(7) + strid + "/" + file.name);
                    console.log(me.fileManager.dataDirectory.substr(7) + "key.otp");
                    console.log(me.fileManager.dataDirectory.substr(7) + strid + "/" + file.name + ".crypt");
                    me.otp.resetKey();
                    me.otp.decrypt(me.fileManager.dataDirectory.substr(7) + "/key.otp", me.fileManager.dataDirectory.substr(7) + "/" + strid + "/" + file.name + ".crypt", me.fileManager.dataDirectory.substr(7) + "/" + strid + "/" + file.name, function (success) {
                        console.log(success);
                        me.storage.save("file-" + id, { id: id, hashcode: hash }, function () {
                            me.openFile(file);
                        });
                    }, function (error) {
                        console.log(error);
                    });
                }).catch(function (err) {
                });
            }).catch(function (err) {
                console.log("Folder does not exist");
                me.fileManager.createDir(_this.fileManager.dataDirectory, strid, true).then(function (_) {
                    console.log("folder created");
                    me.fileManager.writeFile(_this.fileManager.dataDirectory + "/" + strid, file.name + ".crypt", data.blob(), { replace: true }).then(function (written) {
                        console.log("wrote .crypt file");
                        console.log("Path is: " + me.fileManager.dataDirectory.substr(7) + strid + "/" + file.name);
                        me.otp.resetKey();
                        me.otp.decrypt(me.fileManager.dataDirectory.substr(7) + "/key.otp", me.fileManager.dataDirectory.substr(7) + "/" + strid + "/" + file.name + ".crypt", me.fileManager.dataDirectory.substr(7) + "/" + strid + "/" + file.name, function (success) {
                            console.log(success);
                            me.openFile(file);
                        }, function (error) {
                            console.log(error);
                        });
                    }).catch(function (err) {
                    });
                });
            });
        }
    };
    FileManagerProvider.prototype.downloadFileWithHTTPS = function (item) {
        var _this = this;
        var me = this;
        var id = item.fileId;
        var hash = item.hashcode;
        var cont = function () {
            var strid = item.fileId + "";
            var data = null;
            if (item.rawLink == null || item.rawLink == "") {
                data = encodeURIComponent(btoa(JSON.stringify({ fid: id, key: _this.key, crypt: false })));
            }
            else {
                data = item.rawLink;
            }
            {
                if (!Object(__WEBPACK_IMPORTED_MODULE_5__services_is_cordova_available__["a" /* isCordovaAvailable */])()) {
                    window.open(_this.http.target + "/download/" + data, '_blank');
                }
                else {
                    if (_this.electron.isElectron) {
                        me.electron.downloadFile(item.name, data, function (data) {
                            me.guiManager.showToast("Datei wurde geladen", 6500);
                        });
                    }
                    else {
                        var indicator_1 = _this.guiManager.showToast("Die Datei wird geladen", 60000);
                        _this.http.get("/download/" + data, [], function (success, data) {
                            indicator_1.dismissAll();
                            _this.writeDataToFileAndOpen(data, item, true);
                        }, false, __WEBPACK_IMPORTED_MODULE_8__angular_http__["e" /* ResponseContentType */].Blob);
                    }
                }
            }
        };
        this.storage.contains(this.encodedEmailId + "file-" + id, function (contains) {
            if (contains) {
                me.storage.fetch(_this.encodedEmailId + "file-" + id, function (obj) {
                    if (obj.hashcode == hash) {
                        _this.openFile(item);
                    }
                    else {
                        cont();
                    }
                });
            }
            else {
                cont();
            }
        });
    };
    FileManagerProvider.prototype.downloadFile = function (item) {
        var _this = this;
        var abort = function () {
            var alerter = _this.alertCtrl.create({
                title: "Download im Browser nicht möglich",
                message: "Das herunterladen von Dateien ist nicht vom Browser möglich, bitte benutzen sie die mobile App, oder die Destop Software.",
                buttons: [{ text: "Ok", handler: function () { } }]
            }).present();
        };
        if (!Object(__WEBPACK_IMPORTED_MODULE_5__services_is_cordova_available__["a" /* isCordovaAvailable */])()) {
            abort();
            return;
        }
        if (this.otp.shouldNotRunOTP()) {
            //abort();
            this.downloadFileWithHTTPS(item);
            return;
        }
        this.otp.checkOtpTestFile();
        var me = this;
        var id = item.fileId;
        var hash = item.hashcode;
        var cont = function () {
            var strid = item.fileId + "";
            var data = null;
            if (item.rawLink == null || item.rawLink == "") {
                data = encodeURIComponent(btoa(JSON.stringify({ fid: id, key: _this.key, crypt: true })));
            }
            else {
                data = item.rawLink;
            }
            {
                if (!Object(__WEBPACK_IMPORTED_MODULE_5__services_is_cordova_available__["a" /* isCordovaAvailable */])()) {
                    window.open(_this.http.target + "/download/" + data, '_blank');
                }
                else {
                    if (_this.electron.isElectron) {
                        me.electron.downloadFile(item.name, data, function (data) {
                            me.guiManager.showToast("Datei wurde geladen", 6500);
                        });
                    }
                    else {
                        var indicator_2 = _this.guiManager.showToast("Die Datei wird geladen", 60000);
                        _this.http.get("/download/" + data, [], function (success, data) {
                            indicator_2.dismissAll();
                            _this.writeDataToFileAndOpen(data, item, false);
                        }, false, __WEBPACK_IMPORTED_MODULE_8__angular_http__["e" /* ResponseContentType */].Blob);
                    }
                }
            }
        };
        this.storage.contains("file-" + id, function (contains) {
            if (contains) {
                me.storage.fetch("file-" + id, function (obj) {
                    if (obj.hashcode == hash) {
                        _this.openFile(item);
                    }
                    else {
                        cont();
                    }
                });
            }
            else {
                cont();
            }
        });
    };
    FileManagerProvider.prototype.openFile = function (item) {
        var strid = item.fileId + "";
        var id = item.fileId;
        var data = null;
        if (item.rawLink == null || item.rawLink == "") {
            data = encodeURIComponent(btoa(JSON.stringify({ fid: id, key: this.key, crypt: this.electron.isElectron })));
        }
        else {
            data = item.rawLink;
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_5__services_is_cordova_available__["a" /* isCordovaAvailable */])()) {
            window.open(this.http.target + "/download/" + data, '_blank');
        }
        else {
            if (this.electron.isElectron) {
                //TODO
            }
            else {
                var path = this.fileManager.dataDirectory + strid + "/" + item.name;
                this.opener.open(path, item.type).catch(function (err) {
                    console.log("Err while opening: " + JSON.stringify(err));
                });
            }
        }
    };
    Object.defineProperty(FileManagerProvider.prototype, "current", {
        get: function () {
            return this.cached;
        },
        enumerable: false,
        configurable: true
    });
    FileManagerProvider.prototype.init = function (key, isMedical, name, encodedEmailId) {
        this.key = key;
        this.isMedical = isMedical;
        this.name = name;
        this.encodedEmailId = encodedEmailId;
        var me = this;
        // this.storage.contains(this.encodedEmailId + "saved-file-ids", (cont) => {
        //   if (cont) {
        //     this.storage.fetch(this.encodedEmailId + "saved-file-ids", (data) => {
        //       me.fileIds = data;
        //       console.log("Init of file-manager. Calling updateFile");
        //       this.updateFile(() => {
        //       })
        //     })
        //   }
        //   else {
        //     console.log("Init of file-manager. Calling updateFile");
        //     this.updateFile(() => {
        //     })
        //   }
        // });
    };
    FileManagerProvider.prototype.updateFile = function (callback, returnNew) {
        var _this = this;
        if (returnNew === void 0) { returnNew = false; }
        var me = this;
        var newFileArr = returnNew ? [] : null;
        this.guiManager.loaders["docs"] = true;
        if (this.fetching)
            return;
        this.fetching = true;
        var data = { name: this.name };
        this.http.post("/search", data, [], function (success, data) {
            console.log("Returned from searching for the file manager updateFile method");
            console.log("Success, data:", success, data);
            if (success) {
                if (data.success) {
                    console.log("This is success...?", data.success);
                    if (data.data.level == "all") {
                        var files = data.data.results;
                        _this.cached = new __WEBPACK_IMPORTED_MODULE_3__file_modal__["a" /* File */]();
                        _this.cached.isDirectory = true;
                        _this.cached.isRoot = true;
                        _this.cached.childrenFiles = [];
                        _this.cached.name = "Patienten";
                        for (var i = 0; i < files.length; i++) {
                            var current = files[i];
                            var patientFile = new __WEBPACK_IMPORTED_MODULE_3__file_modal__["a" /* File */]();
                            patientFile.isDirectory = true;
                            patientFile.name = current.id;
                            patientFile.childrenFiles = [];
                            var ownFiles = current.data;
                            for (var x = 0; x < ownFiles.length; x++) {
                                var found = false;
                                var theSub = null;
                                for (var y = 0; y < patientFile.childrenFiles.length; y++) {
                                    if (ownFiles[x] == null) {
                                        console.log(ownFiles, x, patientFile.name);
                                    }
                                    if (patientFile.childrenFiles[y].name == ownFiles[x].directory) {
                                        found = true;
                                        theSub = patientFile.childrenFiles[y];
                                        break;
                                    }
                                }
                                if (!found) {
                                    var newSubDir = new __WEBPACK_IMPORTED_MODULE_3__file_modal__["a" /* File */]();
                                    newSubDir.parent = patientFile;
                                    newSubDir.name = ownFiles[x].directory;
                                    newSubDir.isDirectory = true;
                                    newSubDir.childrenFiles = [];
                                    patientFile.childrenFiles.push(newSubDir);
                                    theSub = newSubDir;
                                }
                                var current_1 = ownFiles[x];
                                var obj = new __WEBPACK_IMPORTED_MODULE_3__file_modal__["a" /* File */]();
                                obj.isDirectory = false;
                                obj.name = current_1.name;
                                obj.type = FileManagerProvider_1.fileTypeFetcher(current_1.name);
                                obj.siteCount = current_1.count;
                                obj.canOpen = current_1.type == "pdf" || current_1.type == "image";
                                if (obj.canOpen)
                                    obj.links = [];
                                obj.fileId = current_1.id;
                                if (me.fileIds.indexOf(obj.fileId) == -1) {
                                    me.fileIds.push(obj.fileId);
                                    if (returnNew)
                                        newFileArr.push({ id: obj.fileId, name: obj.name });
                                }
                                obj.parent = theSub;
                                obj.hashcode = current_1.hashcode;
                                /*if (current.type == "image") {
                                  obj.links.push(this.generatePreviewLink(this.key, current.directory, current.name, "image"));
                                } else if (current.type == "pdf") {
                                  for (let c = 0; c < obj.siteCount; c++) {
                                    let link = this.generatePreviewLink(this.key, current.directory, current.name, "preview", c);
                                    obj.links.push(link)
                
                                  }
                                }*/
                                theSub.childrenFiles.push(obj);
                            }
                            _this.cached.childrenFiles.push(patientFile);
                        }
                    }
                    else {
                        var files = data.data;
                        _this.cached = new __WEBPACK_IMPORTED_MODULE_3__file_modal__["a" /* File */]();
                        _this.cached.isDirectory = true;
                        _this.cached.childrenFiles = [];
                        _this.cached.name = "Dokumente";
                        _this.cached.isRoot = true;
                        var dirs = FileManagerProvider_1.defaultFolders(_this.cached);
                        for (var i = 0; i < files.length; i++) {
                            var current = files[i];
                            var obj = new __WEBPACK_IMPORTED_MODULE_3__file_modal__["a" /* File */]();
                            obj.isDirectory = false;
                            obj.name = current.name;
                            obj.siteCount = current.count;
                            obj.links = [];
                            obj.type = FileManagerProvider_1.fileTypeFetcher(current.name);
                            obj.canOpen = current.type == "pdf" || current.type == "image";
                            /*if (current.type == "image") {
                              obj.links.push(this.generatePreviewLink(this.key, current.directory, current.name, "image"));
                            } else if (current.type == "pdf") {
                              for (let c = 0; c < obj.siteCount; c++) {
                                let link = this.generatePreviewLink(this.key, current.directory, current.name, "preview", c);
                                obj.links.push(link)
              
                              }
                            }*/
                            obj.fileId = current.id;
                            if (me.fileIds.indexOf(obj.fileId) == -1) {
                                me.fileIds.push(obj.fileId);
                                if (returnNew)
                                    newFileArr.push({ id: obj.fileId, name: obj.name });
                            }
                            for (var x = 0; x < dirs.length; x++) {
                                if (dirs[x].name == current.directory) {
                                    obj.parent = dirs[x];
                                }
                            }
                            obj.hashcode = current.hashcode;
                            if (obj.parent)
                                obj.parent.childrenFiles.push(obj);
                        }
                        for (var x = 0; x < dirs.length; x++) {
                            _this.cached.childrenFiles.push(dirs[x]);
                        }
                    }
                    me.storage.contains(_this.encodedEmailId + "saved-file-ids", function (contains) {
                        var next = function () {
                            me.storage.save(_this.encodedEmailId + "saved-file-ids", me.fileIds, function () {
                                console.log("Loader should be off now.");
                                me.guiManager.loaders["docs"] = false;
                                if (returnNew)
                                    callback(newFileArr);
                                else
                                    callback();
                            });
                        };
                        if (contains) {
                            me.storage.remove(_this.encodedEmailId + "saved-file-ids", function () {
                                next();
                            });
                        }
                        else {
                            next();
                        }
                    });
                }
                else {
                    me.guiManager.showToast("Dokumente können nicht vom Server geladen werden. Erneuter Versuch, Daten zu erhalten...", 5000);
                    _this.fetching = false;
                    setTimeout(function () {
                        if (_this.key != "") {
                            _this.updateFile(function (newArray) {
                                if (returnNew)
                                    callback(newArray);
                                else
                                    callback();
                            }, returnNew);
                        }
                    }, 5000);
                    console.log("Error receiving document data from server. Re-trying to receive Loader should be off now though.");
                }
            }
            else {
                //me.guiManager.loaders["docs"] = false;
                me.guiManager.showToast("Dokumente können nicht vom Server geladen werden. Erneuter Versuch, Daten zu erhalten...", 5000);
                _this.fetching = false;
                setTimeout(function () {
                    if (_this.key != "") {
                        _this.updateFile(function (newArray) {
                            if (returnNew)
                                callback(newArray);
                            else
                                callback();
                        }, returnNew);
                    }
                }, 5000);
                console.log("Error receiving document data from server. Re-trying to receive Loader should be off now though.");
            }
            _this.fetching = false;
        }, this.key, true);
    };
    FileManagerProvider.defaultFolders = function (parent) {
        var generalFiles = new __WEBPACK_IMPORTED_MODULE_3__file_modal__["a" /* File */]();
        var medicalFiles = new __WEBPACK_IMPORTED_MODULE_3__file_modal__["a" /* File */]();
        {
            generalFiles.name = "Allgemeine-Dokumente";
            generalFiles.childrenFiles = [];
            generalFiles.isDirectory = true;
            generalFiles.parent = parent;
        }
        {
            medicalFiles.name = "Medizinische-Dokumente";
            medicalFiles.childrenFiles = [];
            medicalFiles.isDirectory = true;
            medicalFiles.parent = parent;
        }
        return [generalFiles, medicalFiles];
    };
    FileManagerProvider.fileTypeFetcher = function (name) {
        if (name.endsWith(".pdf"))
            return "application/pdf";
        if (name.endsWith(".png"))
            return "image/png";
        if (name.endsWith(".jpg"))
            return "image/jpg";
        if (name.endsWith(".doc"))
            return "application/msword";
        if (name.endsWith(".dot"))
            return "application/msword";
        if (name.endsWith(".docx"))
            return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
        if (name.endsWith(".dotx"))
            return "application/vnd.openxmlformats-officedocument.wordprocessingml.template";
        if (name.endsWith(".docm"))
            return "application/vnd.ms-word.document.macroEnabled.12";
        if (name.endsWith(".dotm"))
            return "application/vnd.ms-word.template.macroEnabled.12";
        if (name.endsWith(".xls"))
            return "application/vnd.ms-excel";
        if (name.endsWith(".xlt"))
            return "application/vnd.ms-excel";
        if (name.endsWith(".xla"))
            return "application/vnd.ms-excel";
        if (name.endsWith(".xlsx"))
            return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        if (name.endsWith(".xltx"))
            return "application/vnd.openxmlformats-officedocument.spreadsheetml.template";
        if (name.endsWith(".xlsm"))
            return "application/vnd.ms-excel.sheet.macroEnabled.12";
        if (name.endsWith(".xltm"))
            return "application/vnd.ms-excel.template.macroEnabled.12";
        if (name.endsWith(".xlam"))
            return "application/vnd.ms-excel.addin.macroEnabled.12";
        if (name.endsWith(".xlsb"))
            return "application/vnd.ms-excel.sheet.binary.macroEnabled.12";
        if (name.endsWith(".ppt"))
            return "application/vnd.ms-powerpoint";
        if (name.endsWith(".pot"))
            return "application/vnd.ms-powerpoint";
        if (name.endsWith(".pps"))
            return "application/vnd.ms-powerpoint";
        if (name.endsWith(".ppa"))
            return "application/vnd.ms-powerpoint";
        if (name.endsWith(".pptx"))
            return "application/vnd.openxmlformats-officedocument.presentationml.presentation";
        if (name.endsWith(".potx"))
            return "application/vnd.openxmlformats-officedocument.presentationml.template";
        if (name.endsWith(".ppsx"))
            return "application/vnd.openxmlformats-officedocument.presentationml.slideshow";
        if (name.endsWith(".ppam"))
            return "application/vnd.ms-powerpoint.addin.macroEnabled.12";
        if (name.endsWith(".pptm"))
            return "application/vnd.ms-powerpoint.presentation.macroEnabled.12";
        if (name.endsWith(".potm"))
            return "application/vnd.ms-powerpoint.template.macroEnabled.12";
        if (name.endsWith(".ppsm"))
            return "application/vnd.ms-powerpoint.slideshow.macroEnabled.12";
        if (name.endsWith(".mdb"))
            return "application/vnd.ms-access";
        return "none";
    };
    FileManagerProvider.prototype.generatePreviewLink = function (key, folder, file, method, site) {
        if (method === void 0) { method = "preview"; }
        if (site === void 0) { site = 0; }
        var link = this.http.target + "/" + method + "/";
        var json = JSON.stringify({ dir: folder, file: file, site: site, key: key });
        link += encodeURIComponent(btoa(json));
        if (key == "") {
            return null;
        }
        return link;
    };
    var FileManagerProvider_1;
    FileManagerProvider = FileManagerProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_4__electron_electron__["a" /* ElectronProvider */], __WEBPACK_IMPORTED_MODULE_6__storage_manager_storage_manager__["a" /* StorageManagerProvider */], __WEBPACK_IMPORTED_MODULE_7__gui_manager_gui_manager__["a" /* GuiManagerProvider */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_11__otp_otp__["a" /* OtpProvider */], __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_13__platform_manager_platform_manager__["a" /* PlatformManagerProvider */]])
    ], FileManagerProvider);
    return FileManagerProvider;
}());

//# sourceMappingURL=file-manager.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
  Generated class for the DrawProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DrawProvider = /** @class */ (function () {
    function DrawProvider(http) {
        this.http = http;
        this.imageData = {};
        this.processed = {};
        console.log('Hello DrawProvider Provider');
    }
    DrawProvider.prototype.processImage = function (path, orig, parent, callback) {
        var _this = this;
        var backgroundImage = new Image();
        backgroundImage.src = path;
        backgroundImage.onload = function () {
            var canvas = _this.createContext(backgroundImage.width, backgroundImage.height);
            canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
            console.log(path);
            canvas.getContext('2d').drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
            var img = new Image();
            img.src = _this.imageData[parent + path];
            img.onload = function () {
                canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
                var data = canvas.toDataURL("image/png");
                _this.processed[parent + path] = data;
                callback(data);
            };
        };
    };
    DrawProvider.prototype.createContext = function (width, height) {
        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        return canvas;
    };
    DrawProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DrawProvider);
    return DrawProvider;
}());

//# sourceMappingURL=draw.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_background_fetch__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_phonegap_local_notification__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__file_manager_file_manager__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_firebase__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__electron_electron__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_is_cordova_available__ = __webpack_require__(80);
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
  Generated class for the MessagesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MessagesProvider = /** @class */ (function () {
    function MessagesProvider(http, fetcher, noitifs, fileManager, firebase, electron) {
        this.http = http;
        this.fetcher = fetcher;
        this.noitifs = noitifs;
        this.fileManager = fileManager;
        this.firebase = firebase;
        this.electron = electron;
        this.x = 0;
        this.fireBaseToken = "";
    }
    MessagesProvider.prototype.sendTestNotification = function () {
        this.x++;
        this.noitifs.create('Test Nachricht', {
            tag: 'message' + this.x,
            body: 'Das ist eine Test Nachricht',
            icon: 'resources/icon.png'
        });
    };
    MessagesProvider.prototype.register = function (code) {
        var _this = this;
        if (this.electron.isElectron || !Object(__WEBPACK_IMPORTED_MODULE_8__services_is_cordova_available__["a" /* isCordovaAvailable */])())
            return;
        var me = this;
        var next = function () {
            me.firebase.getToken()
                .then(function (token) {
                me.fireBaseToken = token;
                me.http.get("/push/set/" + encodeURIComponent(btoa(JSON.stringify({
                    key: code,
                    token: me.fireBaseToken
                }))), [], function (success, data) {
                }, true);
            });
            me.firebase.onTokenRefresh().subscribe(function (token) {
                me.fireBaseToken = token;
                me.http.get("/push/set/" + encodeURIComponent(btoa(JSON.stringify({
                    key: code,
                    token: me.fireBaseToken
                }))), [], function (success, data) {
                }, true);
            });
            me.firebase.onNotificationOpen().subscribe(function (data) {
            });
            me.firebase.hasPermission().then(function (jas) {
                console.log(JSON.stringify(jas));
            });
        };
        this.firebase.grantPermission().then(function (_) {
            next();
        }).catch(function (err) {
            console.log(err);
            next();
        });
        var config = {
            stopOnTerminate: false, // Set true to cease background-fetch from operating after user "closes" the app. Defaults to true.
        };
        this.noitifs.requestPermission().then(function (permission) {
            if (permission === 'granted') {
                _this.fetcher.configure(config)
                    .then(function () {
                    _this.x++;
                    /*this.noitifs.create('Test message', {
                      tag: 'message' + this.x,
                      body: 'Jetzt können Nachrichten verschickt werden',
                      icon: 'resources/icon.png'
                    });*/
                    me.fileManager.updateFile(function (newFiles) {
                        for (var i = 0; i < newFiles.length; i++) {
                            var current = newFiles[i];
                            me.noitifs.create("Neues Dokument!", {
                                tag: 'doc-' + current.id,
                                body: "Es ist ein neues Dokument vohanden, mit dem Namen: " + current.name,
                                icon: 'resources/icon.png'
                            });
                        }
                    }, true);
                    _this.fetcher.finish();
                });
                _this.fetcher.start();
            }
        });
    };
    MessagesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_background_fetch__["a" /* BackgroundFetch */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_phonegap_local_notification__["a" /* PhonegapLocalNotification */], __WEBPACK_IMPORTED_MODULE_4__file_manager_file_manager__["a" /* FileManagerProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_firebase__["a" /* Firebase */], __WEBPACK_IMPORTED_MODULE_7__electron_electron__["a" /* ElectronProvider */]])
    ], MessagesProvider);
    return MessagesProvider;
}());

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Condition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Rule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Node; });
var Condition = /** @class */ (function () {
    function Condition(name, type, value) {
        this.name = name;
        this.type = type;
        this.value = value;
        this.fromArray = false;
        this.arrId = 0;
    }
    return Condition;
}());

var Rule = /** @class */ (function () {
    function Rule(effect) {
        this.effect = effect;
        this.conditions = [];
    }
    return Rule;
}());

var Node = /** @class */ (function () {
    function Node(name, title, type, id) {
        this.name = name;
        this.title = title;
        this.type = type;
        this.id = id;
        // If you uncomment this and use the variable, it results to circular reference object in the checkin module
        // which causes JSON.stringify to fail, thus resulting in an error when trying to save and restore the checkin data
        //public parent;
        this.subGroupCount = 0;
        this.subGroups = {};
        this.canMultiply = false;
        this.selfMultiply = false;
        this.children = [];
        this.fields = [];
        this.rules = [];
        this.visible = true;
        this.style = false;
    }
    Object.defineProperty(Node.prototype, "isLegitValue", {
        get: function () {
            var current = this.reflector;
            var values = this.getField("values");
            return (values.indexOf(current) != -1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "isOtherChecked", {
        get: function () {
            var output = false;
            var values = this.getField("values");
            var other = this.getField("other_select");
            //    console.info('values is', values);
            if (values != null) {
                for (var i = 0; i < values.length; i++) {
                    if (values[i].val == other && values[i].ref == true) {
                        output = true;
                        break;
                    }
                }
            }
            return output;
        },
        enumerable: false,
        configurable: true
    });
    Node.prototype.containsField = function (key) {
        for (var i = 0; i < this.fields.length; i++) {
            if (this.fields[i].key == key)
                return true;
        }
        return false;
    };
    Node.prototype.addField = function (key, value) {
        if (this.containsField(key))
            return;
        this.fields.push({ key: key, value: value });
    };
    Node.prototype.updateValue = function (key, value) {
        for (var i = 0; i < this.fields.length; i++) {
            if (this.fields[i].key == key)
                this.fields[i].value = value;
        }
    };
    Node.prototype.getFieldKeys = function () {
        var arr = [];
        for (var i = 0; i < this.fields.length; i++) {
            arr.push(this.fields[i].key);
        }
        return arr;
    };
    Node.prototype.getField = function (key) {
        for (var i = 0; i < this.fields.length; i++) {
            if (this.fields[i].key == key)
                return this.fields[i].value;
        }
        return null;
    };
    Node.prototype.removeField = function (key) {
        for (var i = 0; i < this.fields.length; i++) {
            if (this.fields[i].key == key) {
                this.fields.splice(this.fields.indexOf(this.fields[i], 1));
                return;
            }
        }
    };
    return Node;
}());

//# sourceMappingURL=checkin.modals.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityTrackerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_manager_auth_manager__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__platform_manager_platform_manager__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gui_manager_gui_manager__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActivityTrackerProvider = /** @class */ (function () {
    function ActivityTrackerProvider(authManager, platform, guiManagerProvider) {
        this.authManager = authManager;
        this.platform = platform;
        this.guiManagerProvider = guiManagerProvider;
        this.userActionDetected();
        var me = this;
        setInterval(function () {
            var expirationDateString = me.getCookie("expires");
            var expirationDate = new Date(expirationDateString);
            if (new Date() > expirationDate && authManager.isLoggedIn == true && platform.isWebApplication()) {
                authManager.logout();
                me.guiManagerProvider.showLoggedOutInactivity();
            }
        }, 5000);
    }
    /**
     * Should be called each time that the user does an action.
     */
    ActivityTrackerProvider.prototype.userActionDetected = function () {
        var d = new Date();
        var minutes = 20;
        d.setTime(d.getTime() + (minutes * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = expires + ";";
    };
    /**
     * Retrieves the cookie with the name specified.
     * @param cname
     */
    ActivityTrackerProvider.prototype.getCookie = function (cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    ActivityTrackerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_manager_auth_manager__["a" /* AuthManagerProvider */], __WEBPACK_IMPORTED_MODULE_2__platform_manager_platform_manager__["a" /* PlatformManagerProvider */], __WEBPACK_IMPORTED_MODULE_3__gui_manager_gui_manager__["a" /* GuiManagerProvider */]])
    ], ActivityTrackerProvider);
    return ActivityTrackerProvider;
}());

//# sourceMappingURL=activity-tracker.js.map

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 215;

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/calendar.module/calendar/calendar.module": [
		666,
		5
	],
	"../pages/calendar.module/event-modal/event-modal.module": [
		667,
		34
	],
	"../pages/checkin-for-doctors/checkin-for-doctors.module": [
		668,
		33
	],
	"../pages/checkin/checkin.module": [
		670,
		32
	],
	"../pages/debugger/debugger.module": [
		669,
		31
	],
	"../pages/document/document.module": [
		671,
		30
	],
	"../pages/draw/draw.module": [
		672,
		29
	],
	"../pages/email-confirmation/email-confirmation.module": [
		673,
		28
	],
	"../pages/file-upload/file-upload.module": [
		674,
		27
	],
	"../pages/food-card/food-card.module": [
		675,
		26
	],
	"../pages/imprint/imprint.module": [
		676,
		25
	],
	"../pages/info-item/info-item.module": [
		677,
		24
	],
	"../pages/info-list/info-list.module": [
		678,
		4
	],
	"../pages/intro-slider/intro-slider.module": [
		679,
		23
	],
	"../pages/login/login.module": [
		680,
		22
	],
	"../pages/map/map.module": [
		682,
		3
	],
	"../pages/message-center/message-center.module": [
		681,
		2
	],
	"../pages/news-item/news-item.module": [
		683,
		21
	],
	"../pages/news-list/news-list.module": [
		684,
		0
	],
	"../pages/news/news.module": [
		685,
		20
	],
	"../pages/password-reset/password-reset.module": [
		686,
		19
	],
	"../pages/privacy/privacy.module": [
		687,
		18
	],
	"../pages/start-filter/start-filter.module": [
		688,
		17
	],
	"../pages/start-text/start-text.module": [
		689,
		16
	],
	"../pages/text/text.module": [
		690,
		15
	],
	"../pages/therapy-entry/therapy-entry.module": [
		691,
		14
	],
	"../pages/tos/tos.module": [
		692,
		13
	],
	"../pages/user-settings-account-information/user-settings-account-information.module": [
		693,
		12
	],
	"../pages/user-settings-change-password/user-settings-change-password.module": [
		694,
		11
	],
	"../pages/user-settings-create-account/user-settings-create-account.module": [
		695,
		10
	],
	"../pages/user-settings-fingerprint-activation/user-settings-fingerprint-activation.module": [
		696,
		9
	],
	"../pages/user-settings-message-center/user-settings-message-center.module": [
		697,
		8
	],
	"../pages/user-settings-push-notification/user-settings-push-notification.module": [
		698,
		7
	],
	"../pages/user-settings-refill-keys/user-settings-refill-keys.module": [
		699,
		6
	],
	"../pages/user-settings/user-settings.module": [
		700,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 257;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(184);
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
  Generated class for the StorageManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StorageManagerProvider = /** @class */ (function () {
    function StorageManagerProvider(storage) {
        this.storage = storage;
        console.log('Hello StorageManagerProvider Provider');
    }
    StorageManagerProvider.prototype.save = function (key, value, callback) {
        this.storage.set(key, value).then(function (_) {
            callback();
        });
    };
    StorageManagerProvider.prototype.contains = function (key, callback) {
        this.storage.get(key).then(function (val) {
            callback(val != null && val != undefined);
        });
    };
    StorageManagerProvider.prototype.foreachCall = function (callbackForEach) {
        var me = this;
        this.storage.keys().then(function (keys) {
            for (var i = 0; i < keys.length; i++) {
                me.fetch(keys[i], callbackForEach);
            }
        });
    };
    StorageManagerProvider.prototype.fetch = function (key, callback) {
        this.storage.get(key).then(function (val) {
            callback(val);
        });
    };
    StorageManagerProvider.prototype.remove = function (key, callback) {
        this.storage.remove(key).then(function (_) {
            callback();
        });
    };
    StorageManagerProvider.prototype.clear = function (callback) {
        this.storage.clear().then(function (_) {
            callback();
        });
    };
    StorageManagerProvider.prototype.removeIfContains = function (key, callback) {
        var _this = this;
        if (callback === void 0) { callback = function () { }; }
        this.contains(key, function (ckdContains) {
            if (ckdContains)
                _this.remove(key, function () { return callback(); });
            else
                callback();
        });
    };
    StorageManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], StorageManagerProvider);
    return StorageManagerProvider;
}());

//# sourceMappingURL=storage-manager.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuiManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__link_manager_link_manager__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(108);
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
  Generated class for the GuiManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GuiManagerProvider = /** @class */ (function () {
    function GuiManagerProvider(toastCtrl, lCtrl, alertCtrl, linkManager, app) {
        this.toastCtrl = toastCtrl;
        this.lCtrl = lCtrl;
        this.alertCtrl = alertCtrl;
        this.linkManager = linkManager;
        this.app = app;
        this.messageCenter = false;
        this.loaders = { docs: true, checkin: true };
        this.subLinks = [[{
                    title: 'Impressum',
                    path: 'wordpress-articles',
                    icon: 'copy',
                    component: "ImprintPage"
                },
                // {
                //   title: 'AGBs',
                //   path: 'intro',
                //   icon: 'calendar',
                //   component: "ImprintPage"
                // },
            ]];
        this.tiles = [[
            // {
            //   title: 'Infocenter',
            //   path: 'slides',
            //   icon: 'assets/information/icon.svg',
            //   component: 'InfoListPage',
            //   loader: null
            // },
            // {
            //   title: 'Wegeplan',
            //   path: 'map',
            //   icon: 'assets/map/icon.svg',
            //   component: 'MapPage',
            //   loader: null
            // },
            // {
            //   title: 'News',
            //   path: 'slides',
            //   icon: 'assets/news/icon.svg',
            //   component: 'NewsListPage',
            //   loader: null
            // }
            ]];
        this.pages = {
            Anwendungen: [
            /*{title: 'Speiseplan', component: 'FoodCardPage', icon: 'assets/food-card/icon.svg'},*/
            // {title: 'Infocenter', component: 'InfoListPage', icon: 'assets/information/icon.svg'},
            // {title: 'Wegeplan', component: 'MapPage', icon: 'assets/map/icon.svg'},
            // {title: 'News', component: 'NewsListPage', icon: 'assets/news/icon.svg'}
            ],
            Einstellungen: [
                { title: 'Login', component: 'LoginPage', icon: '' },
                { title: 'Intro', component: 'IntroSliderPage', icon: '' },
                // {title: 'Impressum', component: 'ImprintPage', icon: ''},
                // {title: 'Datenschutzerklärung', component: 'TextPage', icon: '', params: {html: true, closable: false, target: this.linkManager.getDatenschutzAsJSON()}},
                // {title: 'Nutzungsbedingungen', component: 'TextPage', icon: '', params: {html: true, closable: false, target: this.linkManager.getNutungsbedingungenAsHalJSON()}}
            ]
        };
        this.isLoginPageActive = false;
        setInterval(function () { }, 250);
    }
    GuiManagerProvider.prototype.showPromptMessage = function (title, message, callbackOnOkayPressed, callbackOnCancelPress) {
        if (callbackOnOkayPressed === void 0) { callbackOnOkayPressed = function () { }; }
        if (callbackOnCancelPress === void 0) { callbackOnCancelPress = function () { }; }
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message.replace("\n", "<br>"),
            buttons: [
                {
                    text: 'Bestätigen',
                    handler: function (_) {
                        callbackOnOkayPressed();
                    }
                },
                {
                    text: 'Abbrechen',
                    handler: function (_) {
                        callbackOnCancelPress();
                    }
                }
            ]
        });
        alert.present();
    };
    GuiManagerProvider.prototype.showPopupMessage = function (title, message, callback, allowBackgroundDismiss) {
        if (callback === void 0) { callback = function () { }; }
        if (allowBackgroundDismiss === void 0) { allowBackgroundDismiss = true; }
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message.replace("\n", "<br>"),
            buttons: [
                {
                    text: 'Bestätigen',
                    handler: function (_) {
                        callback();
                    }
                }
            ],
            enableBackdropDismiss: allowBackgroundDismiss
        });
        alert.present();
    };
    GuiManagerProvider.prototype.showToast = function (text, time, extraClass) {
        if (extraClass === void 0) { extraClass = ""; }
        var instance = this.toastCtrl.create({
            message: text,
            duration: time,
            position: 'bottom',
            cssClass: extraClass
        });
        instance.present();
        return instance;
    };
    GuiManagerProvider.prototype.afterLogin = function (isMedical, userGroup) {
        if (isMedical && userGroup == 2) {
            this.afterLoginForAufnahme();
        }
        else if (isMedical && userGroup == 1) {
            this.afterLoginForDoctor();
        }
        else if (isMedical == false) {
            this.afterLoginForPatient();
        }
        else {
            console.log("Shouldn't be here, after log in GUI function. Medical:", isMedical, "Usergroup:", userGroup);
        }
        /*
        this.tiles[0].unshift( {
          title: 'Dokumente',
          path: 'slides',
          icon: 'assets/document/icon.svg',
          component: 'DocumentPage',
          loader: "docs"
        });
        if(isMedical && userGroup == 2) {
            this.tiles[0].unshift( {
                title: 'Patientenaufnahme',
                path: 'slides',
                icon: 'assets/checkin/icon.svg',
                component: 'CheckinForDoctorsPage',
                loader: null
            });
        }
        else {
            this.tiles[0].unshift( {
                title: 'Patientenaufnahme',
                path: 'slides',
                icon: 'assets/checkin/icon.svg',
                component: 'CheckinPage',
                loader: "checkin"
            });
        }
        this.appendPage("Anwendungen", "Dokumente", "DocumentPage", 'assets/document/icon.svg',"docs");
        //this.appendPage("Anwendungen", "Terminplaner", "CalendarPage", 'assets/document/icon.svg');
        if(isMedical && userGroup == 2) {
            this.prependPage("Anwendungen", "Patientenaufnahme", "CheckinForDoctorsPage", 'assets/checkin/icon.svg');
        }
        else {
            this.prependPage("Anwendungen", "Patientenaufnahme", "CheckinPage", 'assets/checkin/icon.svg', "checkin");
        }
        this.appendPage("Einstellungen", 'Einstellungen', 'UserSettingsPage');
        this.removeByIndex("Einstellungen", 0);*/
    };
    GuiManagerProvider.prototype.afterLogout = function (isMedical, userGroup) {
        if (isMedical && userGroup == 2) {
            this.afterLogoutForAufnahme();
        }
        else if (isMedical && userGroup == 1) {
            this.afterLogoutForDoctor();
        }
        else if (isMedical == false) {
            this.afterLogoutForPatient();
        }
        else {
            console.log("Shouldn't be here, after log out GUI function. Medical:", isMedical, "Usergroup:", userGroup);
        }
        this.app.getActiveNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    /**
     * After login hook for patient accounts.
     *
     * @private
     */
    GuiManagerProvider.prototype.afterLoginForPatient = function () {
        //    console.log("afterLoginForPatient");
        // this.tiles[0].splice(1, 0,
        // {
        //   title: 'Speiseplan',
        //   path: 'slides',
        //   icon: 'assets/food-card/icon.svg',
        //   component: 'FoodCardPage',
        //   loader: null
        // });
        // if (Info.projectId == 'wzk') {
        //   this.tiles[0].splice(2, 0,
        //     {
        //       title: 'Terminplaner',
        //       path: 'slides',
        //       icon: 'assets/calendar/icon.svg',
        //       component: 'CalendarPage',
        //       loader: null
        //     });
        // }
        // this.tiles[0].unshift({
        //   title: 'Dokumente',
        //   path: 'slides',
        //   icon: 'assets/document/icon.svg',
        //   component: 'DocumentPage',
        //   loader: "docs"
        // });
        this.tiles[0].unshift({
            title: 'Patientenaufnahme',
            path: 'slides',
            icon: 'assets/checkin/icon.svg',
            component: 'CheckinPage',
            loader: "checkin"
        });
        // if (Info.projectId == 'wzk') {
        //   this.appendPage("Anwendungen", "Terminplaner", "CalendarPage", 'assets/calendar/icon.svg', null);
        // }
        // this.appendPage("Anwendungen", "Dokumente", "DocumentPage", 'assets/document/icon.svg', "docs");
        // this.prependPage("Anwendungen", "Speiseplan", "FoodCardPage", 'assets/food-card/icon.svg');
        this.prependPage("Anwendungen", "Patientenaufnahme", "CheckinPage", 'assets/checkin/icon.svg', "checkin");
        this.appendPage("Einstellungen", 'Einstellungen', 'UserSettingsPage');
        this.removeByName("Einstellungen", 'Login'); // Remove login from menu
        this.removeByName("Einstellungen", 'Intro'); // Remove intro from menu
    };
    GuiManagerProvider.prototype.afterLogoutForPatient = function () {
        console.log("Afterlougout patient");
        this.tiles[0].splice(0, 2);
        this.tiles[0].splice(1, 1);
        this.removeTileByName('Terminplaner');
        // this.removeByName('Anwendungen', 'Dokumente');
        // this.removeByName('Anwendungen', 'Terminplaner');
        this.removeByName('Anwendungen', 'Patientenaufnahme');
        // this.removeByName('Anwendungen', 'Speiseplan');
        this.removeByName('Einstellungen', 'Einstellungen');
        this.prependPage("Einstellungen", "Intro", "IntroSliderPage");
        this.prependPage("Einstellungen", "Login", "LoginPage");
    };
    GuiManagerProvider.prototype.afterLoginForDoctor = function () {
        this.afterLoginForPatient();
    };
    GuiManagerProvider.prototype.afterLogoutForDoctor = function () {
        this.afterLogoutForPatient();
    };
    GuiManagerProvider.prototype.afterLoginForAufnahme = function () {
        this.tiles[0].splice(0, 4);
        this.tiles[0].unshift({
            title: 'Patientenaufnahme',
            path: 'slides',
            icon: 'assets/checkin/icon.svg',
            component: 'CheckinForDoctorsPage',
            loader: null
        });
        this.removeByName('Anwendungen', 'Infocenter');
        // this.removeByName('Anwendungen', 'Wegeplan');
        // this.removeByName('Anwendungen', 'Speiseplan');
        this.removeByName('Anwendungen', 'News');
        this.prependPage("Anwendungen", "Patientenaufnahme", "CheckinForDoctorsPage", 'assets/checkin/icon.svg');
        this.appendPage("Einstellungen", 'Einstellungen', 'UserSettingsPage');
        this.removeByName("Einstellungen", 'Login'); // Remove login from menu
        this.removeByName("Einstellungen", 'Intro'); // Remove intro from menu
    };
    /*
    
    {
      title: 'Infocenter',
      path: 'slides',
      icon: 'assets/information/icon.svg',
      component: 'InfoListPage',
      loader: null
    },
    {
      title: 'Wegeplan',
        path: 'map',
      icon: 'assets/map/icon.svg',
      component: 'MapPage',
      loader: null
    },
    {
      title: 'Speiseplan',
        path: 'slides',
      icon: 'assets/food-card/icon.svg',
      component: 'FoodCardPage',
      loader: null
    },
    
    {
      title: 'News',
        path: 'slides',
      icon: 'assets/news/icon.svg',
      component: 'NewsListPage',
      loader: null
    }
    
    
          {title: 'Speiseplan', component: 'FoodCardPage', icon: 'assets/food-card/icon.svg'},
          {title: 'News', component: 'NewsListPage', icon: 'assets/news/icon.svg'},
          {title: 'Wegeplan', component: 'MapPage', icon: 'assets/map/icon.svg'},
          {title: 'Infocenter', component: 'InfoListPage', icon: 'assets/information/icon.svg'}
    */
    GuiManagerProvider.prototype.afterLogoutForAufnahme = function () {
        this.tiles[0].splice(0, 1);
        this.tiles[0].unshift(
        // {
        //   title: 'Infocenter',
        //   path: 'slides',
        //   icon: 'assets/information/icon.svg',
        //   component: 'InfoListPage',
        //   loader: null
        // },
        // {
        //   title: 'Wegeplan',
        //   path: 'map',
        //   icon: 'assets/map/icon.svg',
        //   component: 'MapPage',
        //   loader: null
        // },
        // {
        //   title: 'Speiseplan',
        //   path: 'slides',
        //   icon: 'assets/food-card/icon.svg',
        //   component: 'FoodCardPage',
        //   loader: null
        // },
        // {
        //   title: 'News',
        //   path: 'slides',
        //   icon: 'assets/news/icon.svg',
        //   component: 'NewsListPage',
        //   loader: null
        // }
        );
        this.removeByName('Anwendungen', 'Patientenaufnahme');
        this.removeByName('Einstellungen', 'Einstellungen');
        this.prependPage("Einstellungen", "Intro", "IntroSliderPage");
        this.prependPage("Einstellungen", "Login", "LoginPage");
        // this.appendPage("Anwendungen", "Speiseplan", "FoodCardPage", "assets/food-card/icon.svg");
        // this.appendPage("Anwendungen", "News", "NewsListPage", "assets/news/icon.svg");
        // this.appendPage("Anwendungen", "Wegeplan", "MapPage", "assets/map/icon.svg");
        // this.appendPage("Anwendungen", "Infocenter", "InfoListPage", "assets/information/icon.svg");
    };
    GuiManagerProvider.prototype.showLoader = function (text, time) {
        var loader = this.lCtrl.create({
            content: text,
            duration: time
        });
        loader.present();
        return loader;
    };
    GuiManagerProvider.prototype.removeTileByName = function (name) {
        var all = this.tiles[0];
        for (var i = 0; i < all.length; i++) {
            var item = all[i];
            if (item.title == name) {
                all.splice(all.indexOf(item), 1);
                break;
            }
        }
    };
    GuiManagerProvider.prototype.removeByIndex = function (section, index) {
        var all = this.pages[section];
        for (var i = 0; i < all.length; i++) {
            if (i == index) {
                var item = all[i];
                all.splice(all.indexOf(item), 1);
            }
        }
    };
    GuiManagerProvider.prototype.removeByName = function (section, name) {
        var all = this.pages[section];
        for (var i = 0; i < all.length; i++) {
            var item = all[i];
            if (item.title == name) {
                all.splice(all.indexOf(item), 1);
                break;
            }
        }
    };
    GuiManagerProvider.prototype.removeByItem = function (section, item) {
        var all = this.pages[section];
        if (all.indexOf(item) !== -1) {
            all.splice(all.indexOf(item), 1);
        }
    };
    GuiManagerProvider.prototype.appendPage = function (section, name, component, icon, loader) {
        if (icon === void 0) { icon = null; }
        if (loader === void 0) { loader = ""; }
        if (this.pages[section] == null)
            this.pages[section] = [];
        this.pages[section].push({ title: name, component: component, icon: icon, loader: loader != "" ? loader : null });
    };
    GuiManagerProvider.prototype.prependPage = function (section, name, component, icon, loader) {
        if (icon === void 0) { icon = null; }
        if (loader === void 0) { loader = null; }
        if (this.pages[section] == null)
            this.pages[section] = [];
        this.pages[section].unshift({ title: name, component: component, icon: icon, loader: loader != "" ? loader : null });
    };
    GuiManagerProvider.prototype.showLoggedOutInactivity = function () {
        this.showPopupMessage("Sie wurden ausgeloggt", "Zu Ihrer Sicherheit wurden Sie aufgrund einer Inaktivität von 20 Minuten automatisch aus der Anwendung ausgeloggt.\n" +
            "Sie können sich wieder einloggen, indem Sie die Login-Seite besuchen.", function () { }, false);
    };
    GuiManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__link_manager_link_manager__["a" /* LinkManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */]])
    ], GuiManagerProvider);
    return GuiManagerProvider;
}());

//# sourceMappingURL=gui-manager.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_modal__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_manager_storage_manager__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_api__ = __webpack_require__(48);
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
  Generated class for the FormManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FormManagerProvider = /** @class */ (function () {
    function FormManagerProvider(http, storageProvider) {
        this.http = http;
        this.storageProvider = storageProvider;
        this.formsStructure = {};
        console.log('Hello FormManagerProvider Provider');
    }
    FormManagerProvider.prototype.retrieveWebFormStructureFrom = function (url, accountId, callback) {
        var _this = this;
        console.info('URL is: ' + url);
        if (url != null) {
            var getForm_1 = function (content) {
                var form = new __WEBPACK_IMPORTED_MODULE_1__form_modal__["a" /* WebForm */](accountId, __WEBPACK_IMPORTED_MODULE_1__form_modal__["a" /* WebForm */].getFormId(url), _this.storageProvider);
                form.parse(content, function (formCallback) {
                    //TODO maybe do something extra here, although doesn't seem that is needed
                    callback(formCallback);
                });
            };
            if (this.formsStructure.hasOwnProperty(url)) {
                console.log("Content already in the memory", this.formsStructure[url]);
                getForm_1(this.formsStructure[url]);
            }
            else {
                this.storageProvider.fetch('token_info', function (token_info) {
                    _this.http.getBackend(url, [{ name: 'Authorization', value: token_info.token_type + " " + token_info.access_token }], function (success, data) {
                        console.log("Content received by the backend: ", data);
                        _this.formsStructure[url] = data;
                        getForm_1(_this.formsStructure[url]);
                    }, true);
                });
                // this.http.getBackend(url, [], null).map(res => res.json()).subscribe(content => {
                //   console.log("Content received by the backend: ", content);
                //   this.formsStructure[url] = content;
                //   getForm( this.formsStructure[url] );
                // });
            }
        }
        else {
            console.log("retrieveWebFormStructureFrom: URL is null");
            callback(null);
        }
    };
    FormManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_2__storage_manager_storage_manager__["a" /* StorageManagerProvider */]])
    ], FormManagerProvider);
    return FormManagerProvider;
}());

//# sourceMappingURL=form-manager.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_touch_id__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_manager_storage_manager__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_manager_auth_manager__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_android_fingerprint_auth__ = __webpack_require__(404);
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
  Generated class for the TouchManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TouchManagerProvider = /** @class */ (function () {
    function TouchManagerProvider(touchID, storage, authManager, alert, androidFingerprintAuth) {
        this.touchID = touchID;
        this.storage = storage;
        this.authManager = authManager;
        this.alert = alert;
        this.androidFingerprintAuth = androidFingerprintAuth;
        console.log('Hello TouchManagerProvider Provider');
    }
    TouchManagerProvider.prototype.check = function (callback) {
        var _this = this;
        this.storage.contains("touch-info", function (contains) {
            if (contains) {
                _this.storage.fetch("touch-info", function (savedData) {
                    _this.touchID.isAvailable().then(function (_) {
                        _this.touchID.verifyFingerprint("Mit TouchID einloggen").then(function (_) {
                            _this.authManager.login(savedData.name, savedData.password, function (success) {
                                callback(success);
                            });
                        });
                    }).catch(function (_) {
                        _this.androidFingerprintAuth.isAvailable().then(function (result) {
                            console.log("Android fingerprint available:", result);
                            if (result.isAvailable) {
                                _this.androidFingerprintAuth.decrypt({ token: savedData.token, clientId: 'ClinetApp', dialogTitle: "Fingerabdruck", dialogMessage: "Fingerabdruck zum Anmelden bei WZK Kliniken", username: savedData.name }).then(function (data) {
                                    _this.authManager.login(savedData.name, data.password, function (success) {
                                        callback(success);
                                    });
                                }).catch(function (err) {
                                    console.log("Error when trying to call decrypt method", err);
                                });
                            }
                        });
                    });
                });
            }
        });
    };
    TouchManagerProvider.prototype.disableTouch = function (callback) {
        var _this = this;
        this.storage.contains("touch-info", function (contains) {
            if (contains) {
                _this.storage.remove("touch-info", function () {
                    _this.storage.save("touch-ignore", true, function () {
                        callback();
                    });
                });
            }
            else {
                _this.storage.save("touch-ignore", true, function () {
                    callback();
                });
            }
        });
    };
    /**
     * Ensures that the next time a manual log-in happens,
     * the user will be given the chance to activate the Touch ID.
     * On success, it calls the callback function.
     * @param callback
     */
    TouchManagerProvider.prototype.activateTouch = function (callback) {
        var _this = this;
        this.storage.contains("touch-ignore", function (doesIgnoreTouch) {
            if (doesIgnoreTouch) {
                _this.storage.remove("touch-ignore", function () {
                    callback();
                });
            }
            else {
                callback();
            }
        });
    };
    TouchManagerProvider.prototype.handle = function (name, password) {
        var _this = this;
        this.touchID.isAvailable().then(function (_) {
            var me = _this;
            me.storage.contains("touch-ignore", function (does) {
                if (!does) {
                    var confirm_1 = me.alert.create({
                        title: 'Touch ID?',
                        message: 'Möchten Sie sich mit TouchID anmelden können?',
                        buttons: [{
                                text: 'Nicht aktivieren',
                                handler: function () {
                                    _this.storage.save("touch-ignore", true, function () {
                                    });
                                }
                            }, {
                                text: 'Aktivieren',
                                handler: function () {
                                    _this.storage.contains("touch-info", function (contains) {
                                        if (contains) {
                                            _this.storage.remove("touch-info", function () {
                                                _this.storage.save("touch-info", { name: name, password: password }, function () {
                                                });
                                            });
                                        }
                                        else {
                                            _this.storage.save("touch-info", { name: name, password: password }, function () {
                                            });
                                        }
                                    });
                                }
                            }]
                    });
                    confirm_1.present();
                }
            });
        }).catch(function (_) {
            _this.androidFingerprintAuth.isAvailable().then(function (result) {
                if (result.isAvailable) {
                    _this.storage.contains("touch-ignore", function (contains) {
                        if (!contains) {
                            var confirm_2 = _this.alert.create({
                                title: 'Fingerabdruck?',
                                message: 'Möchten Sie sich mit ihrem Fingerabdruck anmelden können?',
                                buttons: [{
                                        text: 'Nicht aktivieren',
                                        handler: function () {
                                            _this.storage.save("touch-ignore", true, function () {
                                            });
                                        }
                                    }, {
                                        text: 'Aktivieren',
                                        handler: function () {
                                            var androidOpts = {
                                                clientId: 'ClinetApp',
                                                username: name,
                                                password: password
                                            };
                                            _this.storage.contains("touch-info", function (contains) {
                                                if (contains) {
                                                    _this.storage.remove("touch-info", function () {
                                                        _this.androidFingerprintAuth.encrypt(androidOpts).then(function (result) {
                                                            if (result.withFingerprint) {
                                                                _this.storage.save("touch-info", { token: result.token, name: name }, function () {
                                                                });
                                                            }
                                                        });
                                                    });
                                                }
                                                else {
                                                    _this.androidFingerprintAuth.encrypt(androidOpts).then(function (result) {
                                                        if (result.withFingerprint) {
                                                            _this.storage.save("touch-info", { token: result.token, name: name }, function () {
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    }]
                            });
                            confirm_2.present();
                        }
                    });
                }
            }).catch(function (exc) {
                console.log("This device doesn't have a fingerprint sensor.");
            });
        });
    };
    TouchManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_touch_id__["a" /* TouchID */], __WEBPACK_IMPORTED_MODULE_3__storage_manager_storage_manager__["a" /* StorageManagerProvider */], __WEBPACK_IMPORTED_MODULE_4__auth_manager_auth_manager__["a" /* AuthManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_android_fingerprint_auth__["a" /* AndroidFingerprintAuth */]])
    ], TouchManagerProvider);
    return TouchManagerProvider;
}());

//# sourceMappingURL=touch-manager.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendarEvent_Model__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendarUserCalendar_Model__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_is_cordova_available__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_manager_auth_manager__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__platform_manager_platform_manager__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










/*
  Generated class for the CalendarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CalendarProvider = /** @class */ (function () {
    function CalendarProvider(http, alertCtrl, platformUtils, calendar, authManager) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.platformUtils = platformUtils;
        this.calendar = calendar;
        this.authManager = authManager;
        this.CURRENT_DATE = new Date();
        this.EARLIEST_SEARCH_DATE = new Date(this.CURRENT_DATE.getFullYear() - 5, 0, 0, 0, 0, 0);
        this.LATEST_SEARCH_DATE = new Date(this.CURRENT_DATE.getFullYear() + 5, 11, 31, 0, 0, 0);
        this.usersList = [];
        this.usersListUpdating = false;
        this.usersListFinishedUpdate = false;
        this.updatedUserEvents = false;
        this.updatedUserExternalEvents = false;
        console.log('Hello CalendarProvider Provider');
        this.userEvents = [];
        this.userExternalEvents = [];
        this.userCalendars = [];
        if (!Object(__WEBPACK_IMPORTED_MODULE_7__services_is_cordova_available__["a" /* isCordovaAvailable */])()) {
            CalendarProvider_1.abort("Error: Cordova isn't available.");
        }
        if (!this.isPlatformAvailable()) {
            CalendarProvider_1.abort("Error: Your device isn't supported");
        }
        if (calendar == null) {
            this.calendar = new __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__["a" /* Calendar */]();
        }
    }
    CalendarProvider_1 = CalendarProvider;
    CalendarProvider.abort = function (text) {
        if (text === void 0) { text = "Error. Calendar module isn't working properly."; }
        console.log(text);
    };
    CalendarProvider.prototype.isPlatformAvailable = function () {
        return this.platformUtils.isMobileApplication();
    };
    /**
     * Returns true if cordova is available and the device's OS is supported, false otherwise
     * @returns {boolean}
     */
    CalendarProvider.prototype.doChecks = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_7__services_is_cordova_available__["a" /* isCordovaAvailable */])(); //&& this.isPlatformAvailable(); // TODO add for removing browser support
    };
    /**
     * Returns if it can read/write on the external calendars
     */
    CalendarProvider.prototype.hasCalendarReadWritePermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.doChecks()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.calendar.hasReadWritePermission().catch(function (exc) { console.log("Error while reading the calendar read & write permissions", exc); })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/, false];
                }
            });
        });
    };
    /**
     * Requests read/write permissions for external calendars
     */
    CalendarProvider.prototype.requestCalendarReadWritePermissions = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.calendar.requestReadWritePermission().then(function (succ) {
                            console.log("Calendar provider request permission", succ);
                        }, function () {
                            console.log("Calendar provider didn't get the permission");
                        }).catch(function (exc) {
                            console.log("CalendarProvider exception while getting permissions", exc);
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Parses data that describe a calendar event
     * @param data
     */
    CalendarProvider.prototype.parseCalendarEvent = function (data) {
        var event = new __WEBPACK_IMPORTED_MODULE_1__calendarEvent_Model__["a" /* CalendarEvent */]();
        if (!data) {
            console.log("There was a problem while parsing data of an event: ", data);
            return event;
        }
        //    console.info(data);
        if (data.hasOwnProperty("start")) {
            event.startTime = __WEBPACK_IMPORTED_MODULE_6_moment__(data["start"], "YYYY-MM-DD HH:mm:ss").toDate();
        }
        if (data.hasOwnProperty("end")) {
            event.endTime = __WEBPACK_IMPORTED_MODULE_6_moment__(data["end"], "YYYY-MM-DD HH:mm:ss").toDate();
        }
        if (data.hasOwnProperty("startDate")) {
            event.startTime = new Date(data["startDate"]);
        }
        if (data.hasOwnProperty("endDate")) {
            event.endTime = new Date(data["endDate"]);
        }
        if (data.hasOwnProperty("title")) {
            event.title = data["title"];
        }
        if (data.hasOwnProperty("location")) {
            event.location = data["location"];
        }
        if (data.hasOwnProperty("notes")) {
            event.notes = data["notes"];
        }
        if (data.hasOwnProperty("message")) {
            event.message = data["message"];
        }
        if (data.hasOwnProperty("id")) {
            event.id = data["id"];
        }
        if (data.hasOwnProperty("all_day")) {
            event.allday = data["all_day"] == 1 ? true : false;
        }
        if (data.hasOwnProperty("typeOfMeeting")) {
            event.typeOfMeeting = data["typeOfMeeting"];
            if (event.typeOfMeeting == __WEBPACK_IMPORTED_MODULE_1__calendarEvent_Model__["a" /* CalendarEvent */].GLOBAL_EVENT_TYPE && this.authManager.isMedical) {
                event.calendarType = __WEBPACK_IMPORTED_MODULE_1__calendarEvent_Model__["a" /* CalendarEvent */].GLOBAL_CALENDAR_TYPE;
            }
        }
        if (data.hasOwnProperty("participants")) {
            event.participants = data["participants"];
        }
        if (data.hasOwnProperty("practitioner")) {
            event.practitioner = data["practitioner"];
        }
        // TODO: replace fields to standart names
        event.end = event.endTime;
        event.start = event.startTime;
        event.allDay = event.allday;
        return event;
    };
    /**
     * Parses data into a UserCalendar
     * @param data
     */
    CalendarProvider.parseUserCalendar = function (data) {
        var usrCal = new __WEBPACK_IMPORTED_MODULE_4__calendarUserCalendar_Model__["a" /* UserCalendar */]();
        if (data.hasOwnProperty("displayname")) {
            usrCal.displayname = data["displayname"];
        }
        if (data.hasOwnProperty("name")) {
            usrCal.name = data["name"];
        }
        if (data.hasOwnProperty("id")) {
            usrCal.id = data["id"];
        }
        return usrCal;
    };
    /**
     * Retrieves events in the specified time period from the external calendars.
     * Updates the internal field of userExternalEvents.
     * @param start
     * @param end
     */
    CalendarProvider.prototype.retrieveAndUpdateEventsFromExternalCalendars = function (start, end) {
        if (start === void 0) { start = this.EARLIEST_SEARCH_DATE; }
        if (end === void 0) { end = this.LATEST_SEARCH_DATE; }
        return __awaiter(this, void 0, void 0, function () {
            var events, _i, _a, extCalendar, options, calendarsEvents;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        events = [];
                        _i = 0, _a = this.userCalendars;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        extCalendar = _a[_i];
                        options = this.calendar.getCalendarOptions();
                        options.calendarName = extCalendar.displayname;
                        options.id = extCalendar.id + "";
                        options.calendarId = extCalendar.id;
                        if (!(extCalendar.sync == true)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getEventsFromCalendarAsync(start, end, options)];
                    case 2:
                        calendarsEvents = _b.sent();
                        calendarsEvents.forEach(function (event) {
                            event.calendarType = __WEBPACK_IMPORTED_MODULE_1__calendarEvent_Model__["a" /* CalendarEvent */].EXTERNAL_CALENDAR_TYPE;
                            events.push(event);
                        });
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.userExternalEvents = events;
                        this.updatedUserExternalEvents = true;
                        return [2 /*return*/, events];
                }
            });
        });
    };
    /**
     * Returns an array of all the events from the devices' calendars in the specified time period. Calendar, or one of the other parameters can be used to limit the results.
     * In case of no permissions, it returns an empty array.
     * @param {Date} start
     * @param {Date} end
     * @param {CalendarOptions} calOptions
     * @param {string} title
     * @param {string} location
     * @param {string} notes
     * @returns {Promise<CalendarEvent[]>}
     */
    CalendarProvider.prototype.getEventsFromCalendarAsync = function (start, end, calOptions, title, location, notes) {
        if (title === void 0) { title = ""; }
        if (location === void 0) { location = ""; }
        if (notes === void 0) { notes = ""; }
        return __awaiter(this, void 0, void 0, function () {
            var data, eventsArray;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        eventsArray = [];
                        if (!calOptions) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.calendar.findEventWithOptions(title, location, notes, start, end, { 'calendarId': calOptions.calendarId }).catch(function (exc) { console.log("Probably we don't have permission:", exc); })];
                    case 1:
                        data = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.calendar.findEvent(title, location, notes, start, end).catch(function (exc) { console.log("Probably we don't have permission:", exc); })];
                    case 3:
                        data = _a.sent();
                        _a.label = 4;
                    case 4:
                        if (data)
                            data.forEach(function (value) {
                                var event = _this.parseCalendarEvent(value);
                                eventsArray.push(event);
                            });
                        return [2 /*return*/, eventsArray];
                }
            });
        });
    };
    /**
     * Returns all the calendars registered at the device. If there are no permissions returns an empty array.
     * @returns {Promise<UserCalendar[]>}
     */
    CalendarProvider.prototype.getUserCalendarsAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var hasPermissions, data, calArray_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hasCalendarReadWritePermission()];
                    case 1:
                        hasPermissions = _a.sent();
                        if (!(hasPermissions == false)) return [3 /*break*/, 2];
                        //TODO Perhaps request permission instead?
                        return [2 /*return*/, []];
                    case 2: return [4 /*yield*/, this.calendar.listCalendars().catch(function (exc) { console.log("Probably we don't have permission:", exc); })];
                    case 3:
                        data = _a.sent();
                        calArray_1 = [];
                        if (data)
                            data.forEach(function (value) {
                                var userCalendar = CalendarProvider_1.parseUserCalendar(value);
                                calArray_1.push(userCalendar);
                            });
                        return [2 /*return*/, calArray_1];
                }
            });
        });
    };
    /**
     * Creates an event in an external calendar
     * @param event
     * @param calendar
     */
    CalendarProvider.prototype.createEventOnUserCalendar = function (event, calendar) {
        var ADD_TEXT_TO_NOTES_WHEN_ADDING_TO_EXTERNAL_CALENDAR = " ID: " + event.id;
        var options = this.calendar.getCalendarOptions();
        options.calendarName = calendar.displayname;
        options.id = calendar.id + "";
        options.calendarId = calendar.id;
        var notes = event.notes + ADD_TEXT_TO_NOTES_WHEN_ADDING_TO_EXTERNAL_CALENDAR;
        this.createEventOnCalendarWithOptions(event.startTime, event.endTime, event.title, event.location, notes, options);
    };
    /**
     * Creates an event in an external calendar.
     * @param startDate
     * @param endDate
     * @param title
     * @param eventLocation
     * @param notes
     * @param calendarOptions
     */
    CalendarProvider.prototype.createEventOnCalendarWithOptions = function (startDate, endDate, title, eventLocation, notes, calendarOptions) {
        this.calendar.createEventWithOptions(title, eventLocation, notes, startDate, endDate, calendarOptions)
            .then(function (isCreated) { return console.log("Creation of event was done successfully: ", isCreated); }, function (rej) { return console.log("Creation of event got rejected", rej); })
            .catch(function (exc) { return console.log("Exception in creation of event", exc); });
    };
    /**
     * Careful use this function! It deletes all events that are matched from the parameters from all the calendars on the device.
     * Any of the specified parameters can be partially matched and the event will be deleted
     * E.g. the for the strings: if the Event title is "Hello" and you specify "ell", and the rest parameters are also matched then the event will be deleted
     * E.g. If the event starts at 10:00 and ends at 11:00 and you give as parameters the startDate 10:59 and endDate 11:00, the event will be deleted
     * @param event Event to delete
     */
    CalendarProvider.prototype.deleteEventsFromAllExternalCalendars = function (event) {
        var ADD_TEXT_TO_NOTES_WHEN_ADDING_TO_EXTERNAL_CALENDAR = " ID: " + event.id;
        var startDate = event.startTime;
        var endDate = event.endTime;
        var title = event.title;
        var eventLocation = event.location;
        var notes;
        if (event.calendarType == __WEBPACK_IMPORTED_MODULE_1__calendarEvent_Model__["a" /* CalendarEvent */].CLINET_CALENDAR_TYPE || event.calendarType == __WEBPACK_IMPORTED_MODULE_1__calendarEvent_Model__["a" /* CalendarEvent */].GLOBAL_CALENDAR_TYPE)
            notes = event.notes + ADD_TEXT_TO_NOTES_WHEN_ADDING_TO_EXTERNAL_CALENDAR;
        else
            notes = event.message + ADD_TEXT_TO_NOTES_WHEN_ADDING_TO_EXTERNAL_CALENDAR;
        this.calendar.deleteEvent(title, eventLocation, notes, startDate, endDate)
            .then(function (isDeleted) {
            console.log("Deletion on external calendars was done successfully: ", isDeleted, event);
        }, function (rej) { return console.log("Deletion on external calendars got rejected", rej); })
            .catch(function (exc) { return console.log("Exception in deleting event on external calendars", exc); });
    };
    /**
     * Encodes data for the transmission
     * @param data
     */
    CalendarProvider.encodeJSONForApiCall = function (data) {
        return btoa(encodeURIComponent(data));
    };
    /*public static decodeJSONForApiCall(data: string): string {
        return atob(data);
    }*/
    /**
     * Creates a json from a CalendarEvent
     * @param event
     */
    CalendarProvider.getJSON = function (event) {
        return JSON.stringify(event);
    };
    /**
     * Adds extra fields in a json object.
     * @param params
     * @param object
     */
    CalendarProvider.addParametersIntoJsonObject = function (params, object) {
        for (var param in params) {
            object[param] = params[param];
        }
        return object;
    };
    /**
     * Makes an API post request ot the specified endpoint.
     * It "encapsulates" the key and the data in a json and sends it.
     * Replacer can be used to replace specific fields of the data if needed
     * @param path
     * @param callbackFunction
     * @param key
     * @param data
     * @param replacer
     */
    CalendarProvider.prototype.makeAPIcall = function (path, callbackFunction, key, data, replacer) {
        if (replacer === void 0) { replacer = function (k, v) { return v; }; }
        var preparedData = JSON.stringify(data, function (key, value) { return replacer(key, value); });
        var encodedData = JSON.stringify({ 'key': key, 'data': CalendarProvider_1.encodeJSONForApiCall(preparedData) });
        this.http.post(path, encodedData, [], function (success, data) { callbackFunction(success, data); });
    };
    CalendarProvider.prototype.makeBackendAPIcall = function (path, callbackFunction, key, data, replacer) {
        if (replacer === void 0) { replacer = function (k, v) { return v; }; }
        this.http.backendPost(path, [], [], function (success, data) { callbackFunction(success, data); });
        /*        let scrf = '';
                let preparedData = JSON.stringify(data,(key,value)=>replacer(key,value));
                let encodedData = JSON.stringify({'key': key, 'data' : CalendarProvider.encodeJSONForApiCall(preparedData)});
        //        let scrf = this.http.getBackend('/rest/session/token', null,[],(success,data) => { callbackFunction(success, data) });
                this.http.getBackend('/rest/session/token', [], (success, data) => {
                  this.http.CSRFToken = data.text()
                  this.http.postBackend(path,encodedData,[],(success,data) => { callbackFunction(success, data) });
                });*/
    };
    /**
     * Parse event data after an api call
     * @param success
     * @param data
     */
    CalendarProvider.prototype.parseEventsFromAPICall = function (success, data) {
        if (success) {
            var events = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var eventData = data_1[_i];
                eventData.calendarType = __WEBPACK_IMPORTED_MODULE_1__calendarEvent_Model__["a" /* CalendarEvent */].CLINET_CALENDAR_TYPE;
                events.push(this.parseCalendarEvent(eventData));
            }
            this.userEvents = events;
            this.updatedUserEvents = true;
        }
    };
    /**
     * Process response after the Saving Event api call.
     *
     * @param success
     * @param data
     * @param event
     */
    CalendarProvider.prototype.getResponseFromAPIAfterSavingEvent = function (success, data, event) {
        var _this = this;
        console.log("The event data: ", event);
        if (success) {
            if (data.hasOwnProperty("success")) {
                if (data["success"]) {
                    console.log("The data received back are:", data);
                }
                else {
                    console.log("The data received back are:", data);
                }
            }
            else if (data.hasOwnProperty("_body")) {
                var json = JSON.parse(data["_body"]);
                if (json["success"]) {
                    console.log(json); // Console printing after adding an event
                    if (json["data"]) {
                        event.id = json["data"];
                        event.calendarType = __WEBPACK_IMPORTED_MODULE_1__calendarEvent_Model__["a" /* CalendarEvent */].CLINET_CALENDAR_TYPE;
                    }
                    console.log(event);
                    this.userEvents.push(event);
                    this.userCalendars.forEach(function (oneCalendar) {
                        if (oneCalendar.sync == true)
                            _this.createEventOnUserCalendar(event, oneCalendar);
                    });
                    //TODO Add here any handle code for the success
                }
                console.log("The data received back are:", data);
            }
            else {
                console.log("Error while creating Event in DB: ", data);
            }
        }
        else {
            console.log("Error while creating Event in DB: ", data);
        }
    };
    CalendarProvider.prototype.getResponseFromAPIAfterDeletingEvent = function (success, data) {
        if (success) {
            console.log("Delete API call, success: ", success);
            if (data.hasOwnProperty("_body")) {
                var json = JSON.parse(data["_body"]);
                var deleteMsg = json["data"];
                console.log("Delete response: ", deleteMsg);
                if (deleteMsg == "deleted") {
                    //TODO add any code here
                }
            }
        }
        else {
            console.log("Error when deleting an event from DB: ", success, data);
        }
    };
    CalendarProvider.prototype.getResponseFromAPIAfterUpdatingAttendanceOfEvent = function (success, data, event) {
        if (success) {
            console.log("Update API call, success: ", success);
            if (data.hasOwnProperty("_body")) {
                var json = JSON.parse(data["_body"]);
                var updateMsg = json["data"];
                if (updateMsg == "updated") {
                    console.log("The update of the attendance was successful");
                    //TODO add any code here
                }
                else {
                    event.attending = !event.attending;
                    console.log("The update of the attendance failed", event);
                    console.log("Update response: ", updateMsg);
                }
            }
        }
        else {
            console.log("Error when updating an event from DB: ", success, data, event);
        }
    };
    CalendarProvider.prototype.registerEventToTheDatabaseAndSync = function (event) {
        var me = this;
        var key = this.authManager.key;
        var start = __WEBPACK_IMPORTED_MODULE_6_moment__(event.startTime).format("YYYY-MM-DD HH:mm:ss");
        var end = __WEBPACK_IMPORTED_MODULE_6_moment__(event.endTime).format("YYYY-MM-DD HH:mm:ss");
        var data = CalendarProvider_1.addParametersIntoJsonObject({ 'start': start, 'end': end }, event);
        //console.log("Making the API call to register the event to DB");
        this.makeAPIcall("/meetings/set", function (success, data) {
            me.getResponseFromAPIAfterSavingEvent(success, data, event);
        }, key, data);
    };
    CalendarProvider.prototype.retrieveAndUpdateEventsFromTheDatabase = function () {
        var me = this;
        var key = this.authManager.key;
        var data = {};
        this.makeBackendAPIcall("/rest/app/meetings?_format=json", function (success, data) { me.parseEventsFromAPICall(data.success, data.data); }, key, data);
    };
    CalendarProvider.prototype.deleteEventFromTheDatabase = function (event) {
        var me = this;
        if (event.calendarType == __WEBPACK_IMPORTED_MODULE_1__calendarEvent_Model__["a" /* CalendarEvent */].GLOBAL_CALENDAR_TYPE && this.authManager.isMedical != true) {
            console.log("You are not authorized to delete Global events.");
            return;
        }
        var key = this.authManager.key;
        var data = JSON.stringify({ 'key': key, 'id': event.id });
        this.http.post("/meetings/delete", data, [], function (success, data) { me.getResponseFromAPIAfterDeletingEvent(success, data); });
    };
    CalendarProvider.prototype.updateEventAttendanceInTheDatabase = function (event) {
        var me = this;
        var key = this.authManager.key;
        var start = __WEBPACK_IMPORTED_MODULE_6_moment__(event.startTime).format("YYYY-MM-DD HH:mm:ss");
        var end = __WEBPACK_IMPORTED_MODULE_6_moment__(event.endTime).format("YYYY-MM-DD HH:mm:ss");
        var data = CalendarProvider_1.addParametersIntoJsonObject({ 'start': start, 'end': end }, event);
        console.log("Making the API call to update the event on DB");
        this.makeAPIcall("/meetings/update", function (success, data) {
            console.log("In the callback function after doing the call to DB to update attendance of event");
            me.getResponseFromAPIAfterUpdatingAttendanceOfEvent(success, data, event);
        }, key, data);
    };
    CalendarProvider.prototype.updateUserList = function () {
        var _this = this;
        if (this.usersListUpdating == true) {
            return;
        }
        this.usersListUpdating = true;
        var result = [];
        if (this.authManager.isMedical == true) {
            var query = JSON.stringify({ "key": this.authManager.key, "data": "*" });
            console.log("Retrieving user data from the API call...");
            this.http.post("/search", query, [], function (success, searchData) {
                console.log("Finished retrieving user data from the API call...");
                if (searchData.hasOwnProperty("_body")) {
                    var json = JSON.parse(searchData["_body"]);
                    if (json["data"]["level"] == "all") {
                        result = json["data"]["results"];
                    }
                }
                _this.setUserList(result);
                _this.usersListUpdating = false;
            });
        }
        else {
            this.setUserList(result);
            this.usersListUpdating = false;
        }
    };
    CalendarProvider.prototype.setUserList = function (array) {
        this.usersList = array;
        this.usersListFinishedUpdate = true;
    };
    /*
    // I'll just leave those here
    // ucs-2 string to base64 encoded ascii
    public  utoa(str) {
        return btoa(encodeURIComponent(str));
    }
    // base64 encoded ascii to ucs-2 string
    public atou(str) {
        return decodeURIComponent(atob(str));
    }
    */
    CalendarProvider.prototype.receiveTherapyEntryWithId = function (id, callback) {
        var data = { id: id };
        this.http.post('/therapy/get', data, [], function (success, data) {
            console.log("POST reply: ", success, data);
            if (success) {
                if (data.success) {
                    callback(true, data.data);
                }
                else {
                    callback(false, data);
                }
            }
            else {
                callback(false, data);
            }
        }, this.authManager.key, true);
    };
    var CalendarProvider_1;
    CalendarProvider = CalendarProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_9__platform_manager_platform_manager__["a" /* PlatformManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__["a" /* Calendar */],
            __WEBPACK_IMPORTED_MODULE_8__auth_manager_auth_manager__["a" /* AuthManagerProvider */]])
    ], CalendarProvider);
    return CalendarProvider;
}());

//# sourceMappingURL=calendarProvider.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarEvent; });
var CalendarEvent = /** @class */ (function () {
    function CalendarEvent(start, end, title, location, notes, allday, message, calendarType, id, typeOfMeeting, attending, participants, practitioner) {
        if (start === void 0) { start = new Date(); }
        if (end === void 0) { end = new Date(); }
        if (title === void 0) { title = ""; }
        if (location === void 0) { location = ""; }
        if (notes === void 0) { notes = ""; }
        if (allday === void 0) { allday = false; }
        if (message === void 0) { message = ""; }
        if (calendarType === void 0) { calendarType = CalendarEvent.CLINET_CALENDAR_TYPE; }
        if (id === void 0) { id = -1; }
        if (typeOfMeeting === void 0) { typeOfMeeting = CalendarEvent.TYPE1_EVENT_TYPE; }
        if (attending === void 0) { attending = false; }
        if (participants === void 0) { participants = ""; }
        if (practitioner === void 0) { practitioner = ""; }
        this.title = title;
        this.location = location;
        this.notes = notes;
        this.startTime = start;
        this.endTime = end;
        this.allday = allday;
        this.message = message;
        this.id = id;
        this.calendarType = calendarType;
        this.typeOfMeeting = typeOfMeeting;
        this.attending = attending;
        this.participants = participants;
        this.practitioner = practitioner;
    }
    CalendarEvent.getEventTypeByNumber = function (type) {
        if (type == CalendarEvent.TYPE1_EVENT_TYPE)
            return CalendarEvent.TYPE1_EVENT_TYPE_TEXT;
        if (type == CalendarEvent.TYPE2_EVENT_TYPE)
            return CalendarEvent.TYPE2_EVENT_TYPE_TEXT;
        if (type == CalendarEvent.GLOBAL_EVENT_TYPE)
            return CalendarEvent.GLOBAL_EVENT_TYPE_TEXT;
    };
    CalendarEvent.prototype.getHTMLClassName = function () {
        //console.log("Cal event, HTML class: ", event);
        if (this.typeOfMeeting == CalendarEvent.TYPE2_EVENT_TYPE) {
            return "CustomColorType2";
        }
        else {
            return "CustomColorUnknownType";
        }
    };
    CalendarEvent.CUSTOM_TEXT_FOR_APPLICATION = "--- Created by CLINET application.";
    CalendarEvent.CLINET_CALENDAR_TYPE = "CLINET";
    CalendarEvent.GLOBAL_CALENDAR_TYPE = "Global";
    CalendarEvent.EXTERNAL_CALENDAR_TYPE = "External";
    CalendarEvent.TYPE1_EVENT_TYPE = 1;
    CalendarEvent.TYPE2_EVENT_TYPE = 2;
    CalendarEvent.GLOBAL_EVENT_TYPE = 3;
    CalendarEvent.TYPE1_EVENT_TYPE_TEXT = "Type1 event";
    CalendarEvent.TYPE2_EVENT_TYPE_TEXT = "Type2 event";
    CalendarEvent.GLOBAL_EVENT_TYPE_TEXT = "Global event";
    CalendarEvent.ALL_EVENT_TYPES = [CalendarEvent.TYPE1_EVENT_TYPE, CalendarEvent.TYPE2_EVENT_TYPE, CalendarEvent.GLOBAL_EVENT_TYPE];
    return CalendarEvent;
}());

//# sourceMappingURL=calendarEvent.Model.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Process; });
var Process = /** @class */ (function () {
    function Process() {
    }
    Process.rulesFullFilled = function (condition, item, currentValues) {
        //         if (item.id.endsWith('wenn_ja_wie_lang_in_wochen_')) {
        // //          console.info(item.rules);
        //         }
        for (var i = 0; i < item.rules.length; i++) {
            var current = item.rules[i];
            if (current.effect != condition)
                continue;
            var conditions = current.conditions;
            for (var c = 0; c < conditions.length; c++) {
                var currentCondition = conditions[c];
                var nameSearched = currentCondition.name;
                var type = currentCondition.type;
                var value = currentCondition.value;
                // if (item.id.endsWith('wenn_ja_wie_lang_in_wochen_')) {
                //     // console.info(currentCondition);
                //     // console.info(currentValues);
                // }
                var actualValue = null;
                for (var w = 0; w < currentValues.length; w++) {
                    if (currentValues[w].key == nameSearched) {
                        if (currentCondition.fromArray) {
                            actualValue = currentValues[w].value[currentCondition.arrId - 1].ref;
                        }
                        else {
                            actualValue = currentValues[w].value;
                        }
                        break;
                    }
                }
                if (actualValue == null) {
                    switch (condition) {
                        case "visible": {
                            return conditions.length == 0;
                        }
                        case "disabled": {
                            return false;
                        }
                    }
                }
                switch (condition) {
                    case "visible": {
                        return Process.parseVisible(type, actualValue, value);
                    }
                    case "disabled": {
                        return Process.parseDisabled(type, actualValue, value);
                    }
                }
            }
        }
        switch (condition) {
            case "visible": {
                return true;
            }
            case "disabled": {
                return false;
            }
            case "required": {
                return Process.parseRequired(item);
            }
        }
    };
    /*
      Returns if the specified Node item or its children have any unfulfilled required Rule.
      Returns true if any required rule is unfulfilled, false otherwise.
     */
    Process.parseRequired = function (item) {
        if (item.children.length == 0) {
            for (var _i = 0, _a = item.rules; _i < _a.length; _i++) {
                var rule = _a[_i];
                if (rule.effect == "required") {
                    return !(item.reflector != null && item.reflector != "");
                }
            }
            return false;
        }
        else {
            var required = false;
            for (var _b = 0, _c = item.rules; _b < _c.length; _b++) {
                var rule = _c[_b];
                if (rule.effect == "required") {
                    required = !(item.reflector != null && item.reflector != "");
                }
            }
            for (var _d = 0, _e = item.children; _d < _e.length; _d++) {
                var childNode = _e[_d];
                if (required)
                    break;
                required = Process.parseRequired(childNode);
            }
            return required;
        }
    };
    Process.parseVisible = function (type, actualValue, value) {
        switch (type) {
            case "unchecked": {
                if (actualValue == true)
                    return false;
                break;
            }
            case "filled": {
                if (value) {
                    if (actualValue.length == 0 || actualValue == false)
                        return false;
                }
                else {
                    if (actualValue.length != 0 || actualValue == true)
                        return false;
                }
                break;
            }
            case "empty": {
                if (value && actualValue.length != 0)
                    return false;
                if (!value && actualValue.length == 0)
                    return false;
                break;
            }
            case "value": {
                if (value != actualValue)
                    return false;
                break;
            }
            case "!value": {
                if (value == actualValue)
                    return false;
                break;
            }
        }
        return true;
    };
    Process.parseDisabled = function (type, actualValue, value) {
        switch (type) {
            case "unchecked": {
                if (actualValue == true)
                    return true;
                break;
            }
            case "filled": {
                if (value) {
                    if (actualValue.length == 0)
                        return true;
                }
                else {
                    if (actualValue.length != 0)
                        return true;
                }
                break;
            }
            case "empty": {
                if (value && actualValue.length == 0)
                    return true;
                if (!value && actualValue.length == 0)
                    return true;
                break;
            }
            case "value": {
                if (value != actualValue)
                    return true;
                break;
            }
            case "!value": {
                if (value == actualValue)
                    return true;
                break;
            }
        }
        return false;
    };
    return Process;
}());

//# sourceMappingURL=conditions.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DebuggerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
  Generated class for the DebuggerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DebuggerProvider = /** @class */ (function () {
    function DebuggerProvider(http) {
        this.http = http;
        this.printStack = [];
        this.ownCallback = function (content) {
        };
        console.log('Hello DebuggerProvider Provider');
    }
    Object.defineProperty(DebuggerProvider.prototype, "callback", {
        set: function (item) {
            this.ownCallback = item;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebuggerProvider.prototype, "stack", {
        get: function () {
            return this.printStack;
        },
        enumerable: false,
        configurable: true
    });
    DebuggerProvider.prototype.register = function () {
        var me = this;
        window["logCallback"] = function (args) {
            var content = "LOG: ";
            var obType = typeof {};
            var arrType = typeof [];
            for (var i = 0; i < args.length; i++) {
                var current = args[i];
                if (typeof current == obType || typeof current == arrType) {
                    content += JSON.stringify(current) + " ";
                }
            }
            me.printStack.push(content);
            me.ownCallback(content);
        };
        window["errCallback"] = function (args) {
            var content = "ERR: ";
            var obType = typeof {};
            var arrType = typeof [];
            for (var i = 0; i < args.length; i++) {
                var current = args[i];
                if (typeof current == obType || typeof current == arrType) {
                    content += JSON.stringify(current) + " ";
                }
            }
            me.printStack.push(content);
            me.ownCallback(content);
        };
        window["warnCallback"] = function (args) {
            var content = "WARN: ";
            var obType = typeof {};
            var arrType = typeof [];
            for (var i = 0; i < args.length; i++) {
                var current = args[i];
                if (typeof current == obType || typeof current == arrType) {
                    content += JSON.stringify(current) + " ";
                }
            }
            me.printStack.push(content);
            me.ownCallback(content);
        };
    };
    DebuggerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DebuggerProvider);
    return DebuggerProvider;
}());

//# sourceMappingURL=debugger.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_link_manager_link_manager__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalContentPage = /** @class */ (function () {
    function ModalContentPage(platform, params, viewCtrl, http, linkManager) {
        var _this = this;
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.linkManager = linkManager;
        this.nids = [];
        this.title = this.params.get('art');
        this.nids = this.params.get('food_ids');
        this.time = this.params.get('time');
        console.log("Showing the day's nids:", this.nids);
        var me = this;
        http.get(this.linkManager.getMenuFoodAdditionals(this.nids.join('+'))).map(function (res) { return res.json(); }).subscribe(function (response) {
            /*
                  let reference_array = me.nids;
                  let reference_object = {};
                  for (let i = 0; i < reference_array.length; i++) {
                    reference_object[reference_array[i]] = i;
                  }
                  response.sort(function(a, b) {
                    return reference_object[a.nid] - reference_object[b.nid];
                  });
            */
            response.sort(function (a, b) {
                return me.nids.indexOf(a.nid) - me.nids.indexOf(b.nid);
            });
            console.log(response);
            _this.menuData = response;
        });
    }
    ModalContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ger\wzk\front\3 wzk few options3\3 wzk few options\clinic_app_frontend\src\pages\food-card\modal-box.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <ion-title style="white-space: normal !important;">\n      Menü {{title}}\n    </ion-title>\n    <ion-buttons end>\n      <button item-right ion-button (click)="dismiss()">\n        <span ion-text color="primary" >Schließen</span>\n<ion-icon name="md-close" ></ion-icon>\n</button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card *ngFor="let food of menuData">\n    <ion-list>\n      <ion-item>\n        <ion-icon name="restaurant" color="primary"></ion-icon> <b>{{food.title}}</b><ion-note item-right><p><ion-icon name=\'clock\'></ion-icon> {{time}}</p></ion-note>\n\n      </ion-item>\n      <div style="padding: 0px 2rem;" [innerHTML]="food.value"></div>\n\n      <ion-item *ngIf="food.calorie">\n        <ion-note>Kalorien:</ion-note> <br/>{{food.calorie}}\n        <ion-note>kcal</ion-note>\n      </ion-item>\n\n\n      <ion-item *ngIf="food.additives">\n        <ion-note>Zusatzstoffe:</ion-note> <br/>{{food.additives}}\n\n      </ion-item>\n      <ion-item *ngIf="food.allergenes">\n        <ion-note>Allergene:</ion-note> <br/>{{food.allergenes}}\n\n        <!-- <h4>Allergene:</h4> {{food.allergenes}} -->\n      </ion-item>\n\n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\ger\wzk\front\3 wzk few options3\3 wzk few options\clinic_app_frontend\src\pages\food-card\modal-box.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__providers_link_manager_link_manager__["a" /* LinkManagerProvider */]])
    ], ModalContentPage);
    return ModalContentPage;
}());

//# sourceMappingURL=modal-box.page.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NutzungsbedingungenModalPage; });
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


var NutzungsbedingungenModalPage = /** @class */ (function () {
    function NutzungsbedingungenModalPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    NutzungsbedingungenModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    NutzungsbedingungenModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "nutzungsbedingungen-modal",template:/*ion-inline-start:"D:\ger\wzk\front\3 wzk few options3\3 wzk few options\clinic_app_frontend\src\pages\Nutzungsbedingungen\nutzungsbedingungen-modal.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>Nutzungsbedingungen</ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div style="margin: 1em">\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      <strong>Nutzungsbedingungen</strong>\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      der WZK Applikation und webseitenbasierten Kommunikationsplattform für\n\n      Patienten zu den Waldburg-Zeil Kliniken.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      <strong>1. Anbieter und Anwendungsbereich</strong>\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Anbieter der WZK Applikation und webseitenbasierten\n\n      Kommunikationsplattform für Patienten zu den Waldburg-Zeil Kliniken ist\n\n      die\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in">\n\n      Waldburg-Zeil Kliniken GmbH &amp; Co. KG&nbsp;<br />Zentrale&nbsp;<br />Riedstraße\n\n      16&nbsp;<br />88316 Isny-Neutrauchburg &nbsp;\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      vertreten durch den Geschäftsführer:\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">Ellio Schneider</p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Email: info@wz-kliniken.de\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Tel.: +49 (0) 7562 71-1135\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Die Nutzung der Kommunikationsplattformen richtet sich nach diesen\n\n      Nutzungsbedingungen in der jeweils vorliegenden Version. Abweichende\n\n      Vereinbarungen bedürfen der Schriftform.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      <strong>2. Umfang des Dienste-Angebotes</strong>\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Die WZK Applikation und webseitenbasierten Kommunikationsplattform für\n\n      Patienten zu den Waldburg-Zeil Kliniken (im folgenden insgesamt bezeichnet\n\n      als „WZK-App“) bietet Ihnen als Patienten der Waldburg-Zeil Kliniken (im\n\n      folgenden „WZ-Kliniken“) eine digitale Schnittstelle und\n\n      Kommunikationplattform zum Krankenhausinformationssystem (im folgenden\n\n      „KIS“) der WZ-Kliniken. Sie können sich der Mobile App (iOS und Android)\n\n      und/oder der webseitenbasierten Schnittstelle bedienen.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Mit Ihrer Anmeldung bei der WZK-App können Sie den WZ-Kliniken\n\n      verschiedene Gesundheitsdaten und medizinische Unterlagen übermitteln. So\n\n      etwa Ihre Patientenstammdaten, Ihren Anamnesebogen oder einzelne\n\n      medizinische Befunde. Ferner können Sie Ihre Abrechnungen der WZ-Kliniken\n\n      einsehen. Zudem können Sie über die WZK-App auf verschiedene\n\n      Informationsangebote der WZ-Kliniken zugreifen, so etwa Speisepläne,\n\n      Wegepläne und allgemeine News.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Die WZK-App bietet Ihren behandelnden Ärzten bei den WZ-Kliniken eine\n\n      Kommunikationsplattform an, mit dem diese zu Behandlungszwecken in Ihre\n\n      jeweiligen Gesundheitsdaten, Befunde etc. Einsicht nehmen können und\n\n      wiederum für Sie die Behandlungspläne und -ergebnisse einstellen können.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Die WZK-App bietet Ihnen die Kontrolle über die von Ihnen bei den\n\n      WZ-Kliniken angelegten elektronischen Gesundheitsakte. Sie können\n\n      jederzeit die in dieser Gesundheitsakte eingestellten medizinischen Daten\n\n      sicher speichern, verwalten oder etwa zum Drucken oder externen speichern\n\n      exportieren.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Voraussetzung für die Nutzung dieser Angebote ist, dass Sie sich\n\n      erfolgreich als Nutzer registrieren und anmelden und die WZK-App Sie als\n\n      Patient der WZ-Kliniken identifiziert.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Die WZK-App selbst bietet keine eigenen medizinischen Leistungen,\n\n      Diagnosen oder Therapien an.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Die Waldburg-Zeil Kliniken GmbH &amp; Co. KG ist jederzeit berechtigt, auf\n\n      dem Portal unentgeltlich bereitgestellte Dienste zu ändern, neue Dienste\n\n      unentgeltlich oder entgeltlich verfügbar zu machen und die Bereitstellung\n\n      unentgeltlicher Dienste einzustellen. Die Waldburg-Zeil Kliniken GmbH\n\n      &amp; Co. KG wird hierbei jeweils auf Ihre berechtigten Interessen\n\n      Rücksicht nehmen.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      <strong>3. Nutzerregistrierung und -vertrag</strong>\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Ihre Anmeldung bei der WZK-App setzt voraus, dass Sie gegenwärtig Patient\n\n      der WZ-Kliniken sind oder bereits einen entsprechenden Behandlungsvertrag\n\n      abgeschlossen haben. Um die Angebote der WZK-App nutzen zu können, müssen\n\n      sich für sich einen nutzerspezifischen Account anlegen und sich hierfür\n\n      mit einen Nutzernamen und Passwort registrieren. Die in der Anmeldemaske\n\n      einzugebenden Daten müssen Sie vollständig und wahrheitsgemäß angeben. Bei\n\n      der Registrierung müssen Sie geschäftsfähig sein. Mit Ihrer Registrierung\n\n      kommt ein Nutzungsvertrag mit der Waldburg-Zeil Kliniken GmbH &amp; Co. KG\n\n      zustande, der sich nach diesen Nutzungsbedingungen richtet.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Während des Anmeldeprozesses bei den WZ-Kliniken wird für Sie ein\n\n      nutzerbezogener Zugangscode generiert, über welche Sie im KIS der\n\n      WZ-Kliniken zugeordnet werden. Bei der Registrierung und jeder späteren\n\n      Anmeldung in der WZK-App wird zur Sicherung vor Missbrauch ein spezielles\n\n      Authentifizierungsverfahren zum Matching des Nutzernamens/Passwort mit dem\n\n      Zugangscode angewendet. Sie willigen mit der Nutzung in die hierfür\n\n      erforderliche Erhebung Ihrer Daten zum Zweck der Authentifizierung\n\n      ein.&nbsp;\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Die Nutzung der WZK-App ist für Sie kostenfrei.&nbsp;\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Für die Inanspruchnahme der Leistungen der WZK-App besteht kein\n\n      Rechtsanspruch. Die Waldburg-Zeil Kliniken GmbH &amp; Co. KG ist\n\n      berechtigt, eine Registrierung ohne Angaben von Gründen zu verweigern.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Die WZK Mobile App erhalten Sie über den Google Play Store und den Apple\n\n      App Store. Hierfür müssen Sie sich bei dem jeweiligen App Store\n\n      registrieren, die App downloaden und installieren. Auf die Erhebung,\n\n      Verarbeitung und Nutzung von personenbezogenen Daten auf Grund der\n\n      Registrierung und der Bereitstellung von Downloads aus den jeweiligen App\n\n      Stores hat die Waldburg-Zeil Kliniken GmbH &amp; Co. KG keinen Einfluss.\n\n      An dieser Stelle wird auf die jeweiligen Nutzungsbedingungen und\n\n      Datenschutzerklärungen des jeweiligen Appstores verwiesen.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      <strong>4. Datenerhebung und -verwendung</strong>\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Die WZK-App, bzw. die Waldburg-Zeil Kliniken GmbH &amp; Co. KG, erhebt,\n\n      verarbeitet und verwendet die von Ihnen angegebenen Daten ausschließlich\n\n      für die Abwicklung des geschlossenen Nutzungsvertrages und nur soweit dies\n\n      für die Leistungserfüllung erforderlich und durch gesetzliche Vorschriften\n\n      erlaubt, oder vom Gesetzgeber angeordnet ist. Ohne Ihre vorherige\n\n      Einwilligung werden keine Daten erhoben, verarbeitet, genutzt oder\n\n      weitergegeben. Eine von Ihnen erteilte Einwilligung können Sie jederzeit\n\n      mit Wirkung für die Zukunft widerrufen.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Die bei Ihrer Registrierung von Ihnen eingegebenen persönlichen Daten\n\n      werden nur für die Authentifizierung und das Matching von\n\n      Nutzername/Passwort kurz zwischengespeichert. Sie werden danach an die\n\n      Server der WZ-Kliniken verschlüsselt übermittelt und werden dort für die\n\n      spätere Anmeldung gespeichert.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Wenn Sie medizinische Unterlagen, Gesundheitsdaten, Anamnesebogen, Befunde\n\n      oder ähnliches über die WZK-App an die WZ-Kliniken übermitteln wollen\n\n      („Patient-Klinik-Weg“) und sie zu diesem Zweck über die WZK-App hochladen,\n\n      so werden diese zum Zwecke der Aufbereitung in ein pdf-Dokument auf den\n\n      Servern der WZ-Kliniken zwischengespeichert und sodann verschlüsselt an\n\n      das KIS der WZ-Kliniken weitergeleitet. Das erzeugte pdf-Dokument bleibt\n\n      dort 14 Tage gespeichert und wird und danach automatisch und routinemäßig\n\n      gelöscht. Es ist danach nur noch im KIS der WZ-Kliniken gespeichert. Mit\n\n      der Übermittlung willigen Sie in diese Zwischenspeicherung ein.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Wenn Ihnen die WZ-Kliniken medizinische Unterlagen, Befunde aus Ihrer\n\n      dortigen Behandlung oder ähnliche über die WZK-App zur Einsichtnahme, zum\n\n      externen Speichern oder etwa zum Ausdrucken zur Verfügung stellen wollen\n\n      („Klinik-Patient-Weg“), werden die Dokumente zu keinem Zeitpunkt an Dritte\n\n      weitergegeben.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Die WZK-App ist daher eine reine Schnittstelle zur Herstellung der\n\n      Kommunikation zwischen Ihnen als Patient und den WZ-Kliniken. Die WZK-App\n\n      und die Waldburg-Zeil Kliniken GmbH &amp; Co. KG geben zu keinem Zeitpunkt\n\n      Ihre persönlichen und/oder medizinischen Daten an dritte Personen oder\n\n      Stellen weiter, außer den WZ-Kliniken und den sie dort behandelnden\n\n      Ärzten.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Die Datenübermittlung erfolgt jeweils verschlüsselt und entspricht den\n\n      aktuellen technischen Standards.&nbsp;\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Weiter Informationen zur Nutzerdatenerhebung und -verarbeitung finden Sie\n\n      in der „Datenschutzerklärung“ der webbasierten Kommunikationsplattform und\n\n      der WZK Mobile App.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      <strong>5. Nutzungsrechte</strong>\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Ihnen steht, vorbehaltlich einer erfolgreichen Registrierung und eines\n\n      ungekündigten Vertragsverhältnisses, die Nutzung der WZK-App entsprechend\n\n      des unter 2. beschriebenen Angebotes zu. Es handelt sich um einfache,\n\n      zeitlich beschränkte Nutzungsrechte für private, persönliche und\n\n      nichtkommerzielle Zwecke.&nbsp;\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Die über die WZK-App veröffentlichten Inhalte, Datenbanken, Informationen,\n\n      Bilder und Videos sind grundsätzlich urheberrechtlich oder durch sonstige\n\n      Schutzrechte geschützt und in der Regel Eigentum oder lizenziert von der\n\n      Waldburg-Zeil Kliniken GmbH &amp; Co. KG. Ohne ausdrückliche Zustimmung\n\n      der &nbsp;Waldburg-Zeil Kliniken GmbH &amp; Co. KG ist jede Weitergabe von\n\n      Inhalten untersagt.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Soweit die WZK-App auf Inhalte von Dritten verweist, verweisen wir auf\n\n      deren Urheber- und sonstige Schutzrechte.&nbsp;\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      <strong>6. Nutzerpflichten</strong>\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Sie sind verpflichtet, Ihre Angaben, die für die Bereitstellung der\n\n      Leistungen benötigt werden, vollständig und wahrheitsgemäß anzugeben.\n\n      Sollten sich Ihre Stammdaten, wie Name, Adresse u.ä., ändern, haben Sie\n\n      diese selbstständig in der WZK-App zu aktualisieren.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Sie dürfen das Leistungsangebot der WZK-App nur sachgerecht nutzen. Die\n\n      Waldburg-Zeil Kliniken GmbH &amp; Co. KG weist darauf hin, dass Ihre\n\n      Nutzungsaktivitäten im gesetzlich zulässigen Umfang überwacht werden\n\n      können. Dies beinhaltet ggf. auch die Protokollierung von\n\n      IP-Verbindungsdaten sowie deren Auswertungen bei einem konkreten Verdacht\n\n      eines Verstoßes gegen die vorliegenden Teilnahme- und Nutzungsbedingungen\n\n      und/oder bei einem konkreten Verdacht auf das Vorliegen einer sonstigen\n\n      rechtswidrigen Handlung oder Straftat.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Sie sind verpflichtet, Ihren Benutzernamen und Ihr Passwort für den Zugang\n\n      geheim zu halten, nicht weiterzugeben und auch keine Kenntnisnahme durch\n\n      Dritte zu ermöglichen oder dulden. Bei einem Missbrauch oder Verlust der\n\n      Anmeldedaten oder entsprechendem Verdacht sind sie verpflichtet, dies der\n\n      Waldburg-Zeil Kliniken GmbH &amp; Co. KG unverzüglich anzuzeigen.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      <strong>7. Beendigung des Nutzungsverhältnisses</strong>\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Sie können Ihr Nutzungsverhältnis zur WZK-App jederzeit kündigen/beenden,\n\n      indem Sie Ihre Registrierung für die WZK-App aufheben. Hierzu müssen Sie\n\n      in der WZK-App im Bereich „mein Konto“ den Button „Profil Löschen“\n\n      anklicken.<i>&nbsp;</i>Das zugrunde liegende Vertragsverhältnis mit der\n\n      Waldburg-Zeil Kliniken GmbH &amp; Co. KG endet damit automatisch.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Nach Beendigung Ihres Behandlungsverhältnisses mit den WZ-Kliniken stehen\n\n      bestimmte Nutzungen der WZK-App nicht mehr zur Verfügung. Nach einem Login\n\n      ist keine Verbindung zum KIS der WZK-Kliniken mehr möglich. Ihre\n\n      Profildaten und der Zugangscode bleiben aber für einen möglichen späteren\n\n      Aufenthalt bestehen. Zur weiteren Speicherung Ihrer medizinischen Daten,\n\n      Unterlagen etc. im KIS der WZ-Kliniken nach Beendigung des\n\n      Behandlungsverhältnisses wird auf die bestehenden Datenschutzbestimmungen\n\n      des KIS verwiesen.&nbsp;\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Die Waldburg-Zeil Kliniken GmbH &amp; Co. KG kann bei einem begründeten\n\n      Verdacht auf eine missbräuchliche Nutzung oder wesentliche\n\n      Vertragsverletzung Ihren Zugang zur WZK-App sperren. Sollte sich der\n\n      Verdacht bestätigen, steht der Waldburg-Zeil Kliniken GmbH &amp; Co. KG\n\n      ein außerordentliches Kündigungsrecht des Nutzungsvertrages zu.\n\n      Anderenfalls wird der Zugang wieder entsperrt.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      <strong>8. Verfügbarkeit der Dienste der WZK-App</strong>\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Die Dienste der WZK-App stehen Ihnen in der Regel 24 Stunden am Tag zur\n\n      Verfügung. In Zeiten, zu denen Wartungsarbeiten am System oder Programm\n\n      bzw. den Datenbanken durchgeführt werden, kann der Zugang zu den Diensten\n\n      eingeschränkt sein. Die Waldburg-Zeil Kliniken GmbH &amp; Co. KG bemüht\n\n      sich um eine möglichst unterbrechungsfreie Nutzbarkeit der Dienste. Jedoch\n\n      können durch technische Störungen (wie zB Unterbrechung der\n\n      Stromversorgung, Hardware- und Softwarefehler, technische Probleme in den\n\n      Datenleitungen) zeitweilige Beschränkungen oder Unterbrechungen auftreten.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      <strong>9. Haftung</strong>\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Sollten Ihnen durch die Nutzung der unentgeltlich zur Verfügung gestellten\n\n      Dienste der WZK-App ein Schaden entstehen, so haftet die Waldburg-Zeil\n\n      Kliniken GmbH &amp; Co. KG nur, soweit Ihr Schaden aufgrund der\n\n      vertragsgemäßen Nutzung der unentgeltlichen Inhalte und/oder Dienste\n\n      entstanden ist, und nur bei Vorsatz und grober Fahrlässigkeit.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Die vorstehende Haftungsbeschränkung gilt nicht im Falle von Arglist, im\n\n      Falle von Körper- bzw. Personenschäden, für die Verletzung von Garantien\n\n      sowie für Ansprüche aus Produkthaftung.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      <strong>10. Änderungen</strong>\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Die Waldburg-Zeil Kliniken GmbH &amp; Co. KG behält sich vor, diese\n\n      Nutzungsbedingungen jederzeit mit Wirksamkeit auch innerhalb der\n\n      bestehenden Vertragsverhältnisse zu ändern. Über derartige Änderungen wird\n\n      die Waldburg-Zeil Kliniken GmbH &amp; Co. KG Sie mindestens zwei Wochen\n\n      vor dem geplanten Inkrafttreten der Änderungen in Kenntnis setzen. Sofern\n\n      Sie nicht innerhalb von zwei Wochen ab Zugang der Mitteilung widersprechen\n\n      und die Inanspruchnahme der Dienste auch nach Ablauf der Widerspruchsfrist\n\n      fortsetzen, so gelten die Änderungen ab Fristablauf als wirksam\n\n      vereinbart. Im Falle Ihres Widerspruchs ist die Waldburg-Zeil Kliniken\n\n      GmbH &amp; Co. KG berechtigt, das Vertragsverhältnis fristlos zu beenden,\n\n      ohne dass Ihnen hieraus Ansprüche gegen die Waldburg-Zeil Kliniken GmbH\n\n      &amp; Co. KG entstehen. Wird das Vertragsverhältnis nach dem wirksamen\n\n      Widerspruch des Nutzers fortgesetzt, behalten die bisherigen\n\n      Nutzungsbedingungen ihre Gültigkeit.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      <strong>11. Salvatorische Klausel</strong>\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      Sollte eine Bestimmung dieser Nutzungsbedingungen unwirksam sein oder\n\n      werden, so bleibt die Rechtswirksamkeit der übrigen Bestimmungen hiervon\n\n      unberührt. An Stelle der unwirksamen Bestimmung gilt eine wirksame\n\n      Bestimmung als vereinbart, die der von den Parteien gewollten\n\n      wirtschaftlich am nächsten kommt.\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n    <p style="margin-left: 0in; text-align: justify">\n\n      (Version 1.1, Stand: 10.04.2024)\n\n    </p>\n\n    <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ger\wzk\front\3 wzk few options3\3 wzk few options\clinic_app_frontend\src\pages\Nutzungsbedingungen\nutzungsbedingungen-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], NutzungsbedingungenModalPage);
    return NutzungsbedingungenModalPage;
}());

//# sourceMappingURL=nutzungsbedingungen-modal.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatenschutzerklaerungModalPage; });
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


var DatenschutzerklaerungModalPage = /** @class */ (function () {
    function DatenschutzerklaerungModalPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    DatenschutzerklaerungModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    DatenschutzerklaerungModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "datenschutzerklaerung-modal",template:/*ion-inline-start:"D:\ger\wzk\front\3 wzk few options3\3 wzk few options\clinic_app_frontend\src\pages\Datenschutzerklarung\datenschutzerklaerung-modal.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>Datenschutzerklärung</ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div style="margin:1em;">\n\n  <h2 style="margin-left: 0in"><strong>Datenschutzerklärung</strong></h2>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    zur WZK Applikation und webseitenbasierten Kommunikationsplattform für\n\n    Patienten zu den Waldburg-Zeil Kliniken.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Wir freuen uns über Ihr Interesse an der&nbsp;WZK Applikation und\n\n    webseitenbasierten Kommunikationsplattform für Patienten. Der Schutz Ihrer\n\n    persönlichen Daten ist uns ein wichtiges Anliegen. Mit dieser\n\n    Datenschutzerklärung möchten wir Sie über die Art, den Umfang und Zweck der\n\n    Erhebung und Verwendung personenbezogener Daten informieren.\n\n  </p>\n\n  <p style="margin-left: 0in">\n\n    <br /><strong>1. Verantwortlicher im Sinne des Datenschutzrechtes</strong>\n\n  </p>\n\n  <p style="margin-left: 0in">\n\n    Zur Erbringung der nach Nr. 2. der Nutzungsbedingungen der WZK Applikation\n\n    beschriebenen Dienste, erhebt, verarbeitet und nutzt die\n\n  </p>\n\n  <p style="margin-left: 0in">\n\n    Waldburg-Zeil Kliniken GmbH &amp; Co. KG&nbsp;<br />Zentrale&nbsp;<br />Riedstraße\n\n    16&nbsp;<br />88316 Isny-Neutrauchburg &nbsp;\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    vertreten durch den Geschäftsführer:\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">Ellio Schneider</p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Email: info@wz-kliniken.de\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Tel.: +49 (0) 7562 71-1135\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in">\n\n    die von den Nutzern der WZK Applikation angegebenen oder freigegebenen\n\n    Daten, sowie die IP-Adresse dessen Endgerätes (nachfolgend „personenbezogene\n\n    Daten”).\n\n  </p>\n\n  <p style="margin-left: 0in"><strong>2. Datenschutzbeauftragter</strong></p>\n\n  <p style="margin-left: 0in">\n\n    Datenschutzbeauftragter der Waldburg-Zeil Kliniken ist:\n\n  </p>\n\n  <p style="margin-left: 0in">Claus Beham</p>\n\n  <p style="margin-left: 0in">Datenschutzbeauftragter@wz-kliniken.de</p>\n\n  <p style="margin-left: 0in">Tel.: +49 (0) 7562 71-1040</p>\n\n  <p style="margin-left: 0in">\n\n    <br /><strong>3. Zweck der Erhebung, Verarbeitung und Nutzung</strong>\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Die personenbezogenen Daten erhebt, verarbeitet und nutzen die Waldburg-Zeil\n\n    Kliniken (im folgenden kurz WZK genannt) ausschließlich zu dem Zweck, die\n\n    mit dem Nutzer im Sinne der Nr. 2 der Nutzungsbedingungen vereinbarten\n\n    Dienste und Leistungen zu erbringen.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Grundlage der Datenverarbeitung ist der mit Ihnen geschlossene\n\n    Nutzungsvertrag, der in Nr. 3 der Nutzungsbedingungen beschrieben ist.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Sensible personenbezogene Daten (Gesundheitsdaten), die in der WZK App\n\n    hinterlegt werden, werden ausschließlich auf Servern in Deutschland\n\n    gespeichert und verarbeitet.&nbsp;\n\n  </p>\n\n  <p style="margin-left: 0in">\n\n    <strong\n\n      >4. Datenerhebung, Verarbeitung und Nutzung bei Aufruf der\n\n      webseitenbasierten Kommunikationsplattform</strong\n\n    >\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Beim Aufruf der WZK-App über die entsprechende Website ist es technisch\n\n    notwendig, verschiedene Daten zu erheben, zu verarbeiten und zu nutzen,\n\n    damit eine fehlerfreie Kommunikation zwischen Ihrem Internetbrowser (z.B.\n\n    Internet Explorer, Mozilla Firefox etc.) und unserem Server stabil und\n\n    sicher möglich ist. Dabei werden automatisch folgende Daten erhoben und bis\n\n    zu ihrer automatisierten Löschung nach 30 Tagen in einer so genannten\n\n    Log-Datei protokolliert (funktionale Server-Logs):\n\n  </p>\n\n  <ul>\n\n    <li>IP-Adresse (Internet-Protokoll-Adresse, ungekürzt)</li>\n\n    <li>Datum und Uhrzeit der Anfrage</li>\n\n    <li>Zeitzonendifferenz zur GMT (GMT = Greenwich Mean Time)</li>\n\n    <li>URL der Seite</li>\n\n    <li>Zugriffsstatus / HTTP-Statuscode</li>\n\n    <li>Übertragene Datenmenge</li>\n\n    <li>\n\n      Referrer (das bezeichnet die Internetseite, von der ein zugreifendes\n\n      System auf unsere Internetseite gelangt)\n\n    </li>\n\n    <li>Browser (Typ und Version)</li>\n\n    <li>Betriebssystem des zugreifenden Rechners</li>\n\n  </ul>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Wir erheben diese Daten in anonymisierter Form, so dass die Daten keiner\n\n    bestimmten oder bestimmbaren Person zugeordnet werden können. Dies geschieht\n\n    zum Zwecke der systeminternen technischen Verarbeitung (Verbindungsaufbau),\n\n    der Systemsicherheit, der technischen Administration der System- und\n\n    Netzinfrastruktur sowie zur Optimierung des Internetangebotes und zu\n\n    statistischen Zwecken. Rechtsgrundlage für die Datenerhebung und\n\n    -verarbeitung ist unser berechtigtes Interesse gemäß Art. 6 Abs. 1 S. 1 lit.\n\n    f) DSGVO. Wir behalten uns jedoch vor, die Log-Datei nachträglich zu\n\n    überprüfen, wenn aufgrund konkreter Anhaltspunkte der berechtigte Verdacht\n\n    einer rechtswidrigen Nutzung besteht.&nbsp;\n\n  </p>\n\n  <p style="margin-left: 0in">\n\n    <strong\n\n      >5. Datenerhebung, Verarbeitung und Nutzung bei Aufruf der mobilen\n\n      WZK-App</strong\n\n    >\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Beim Aufruf der WZK-App über das entsprechende mobile Endgerät ist es\n\n    technisch notwendig, verschiedene Daten zu erheben, zu verarbeiten und zu\n\n    nutzen, damit eine fehlerfreie Kommunikation zwischen Ihrem mobilen Endgerät\n\n    und unserem Server stabil und sicher möglich ist. Dabei werden automatisch\n\n    folgende Daten erhoben und bis zu ihrer automatisierten Löschung nach 30\n\n    Tagen in einer so genannten Log-Datei protokolliert (funktionale\n\n    Server-Logs):\n\n  </p>\n\n  <ul>\n\n    <li>IP-Adresse (Internet-Protokoll-Adresse, ungekürzt)</li>\n\n    <li>Datum und Uhrzeit der Anfrage</li>\n\n    <li>Zeitzonendifferenz zur GMT (GMT = Greenwich Mean Time)</li>\n\n    <li>URL der Seite</li>\n\n    <li>Zugriffsstatus / HTTP-Statuscode</li>\n\n    <li>Übertragene Datenmenge</li>\n\n    <li>\n\n      Referrer (das bezeichnet die Internetseite, von der ein zugreifendes\n\n      System auf unsere Internetseite gelangt)\n\n    </li>\n\n    <li>Browser (Typ und Version)</li>\n\n    <li>Betriebssystem des zugreifenden Rechners</li>\n\n  </ul>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Wir erheben diese Daten in anonymisierter Form, so dass die Daten keiner\n\n    bestimmten oder bestimmbaren Person zugeordnet werden können. Dies geschieht\n\n    zum Zwecke der systeminternen technischen Verarbeitung (Verbindungsaufbau),\n\n    der Systemsicherheit, der technischen Administration der System- und\n\n    Netzinfrastruktur sowie zur Optimierung des Internetangebotes und zu\n\n    statistischen Zwecken. Rechtsgrundlage für die Datenerhebung und\n\n    -verarbeitung ist unser berechtigtes Interesse gemäß Art. 6 Abs. 1 S. 1 lit.\n\n    f) DSGVO. Wir behalten uns jedoch vor, die Log-Datei nachträglich zu\n\n    überprüfen, wenn aufgrund konkreter Anhaltspunkte der berechtigte Verdacht\n\n    einer rechtswidrigen Nutzung besteht.&nbsp;\n\n  </p>\n\n  <p style="margin-left: 0in">&nbsp;</p>\n\n  <p style="margin-left: 0in"><strong>6. Einsatz von Cookies</strong></p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Cookies sind Textdateien, die auf Ihrem System gespeichert werden, um Sie\n\n    wieder zu erkennen, wenn Sie die WZK-App erneut aufrufen. Die verwendeten\n\n    Cookies enthalten eine anonymisierte Kennung. Wir nutzen Cookies\n\n    ausschließlich, um die Inhalte unseres Portals besser an die Nutzer anpassen\n\n    zu können.&nbsp;\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Wenn sie keine Cookies akzeptieren, können sie diese in Ihrem Browser oder\n\n    auf Ihrem mobilen Endgerät einschränken oder deaktivieren. Es kann dann\n\n    allerdings zu einer eingeschränkten Nutzbarkeit unserer Webinhalte kommen.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    <strong>7. Web-Analyse</strong>\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Unsere WZK-App verwendet Funktionen des Webanalysedienste Google\n\n    Analytics.&nbsp;Betreibergesellschaft der Google-Analytics-Komponente ist\n\n    die Google Inc., 1600 Amphitheatre Pkwy, Mountain View, CA 94043-1351, USA.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Dazu werden Cookies verwendet, die eine Analyse der Benutzung der Website\n\n    durch Ihre Benutzer ermöglicht. Die dadurch erzeugten Informationen werden\n\n    auf den Server des Anbieters in die Vereinigten Staaten von Amerika\n\n    übertragen und dort gespeichert.&nbsp;\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Sie können dies verhindern, indem Sie Ihren Browser oder Ihr mobiles\n\n    Endgerät so einrichten, dass keine Cookies gespeichert werden.&nbsp;\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Ihre IP-Adresse wird erfasst, aber umgehend pseudonymisiert. Dadurch ist nur\n\n    eine grobe Lokalisierung möglich. Die Beziehung zum Webanalyseanbieter\n\n    basiert auf dem Abkommen EU-US Privacy Shield und erfüllt die\n\n    Datenschutzbestimmungen.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Die Datenverarbeitung erfolgt auf Basis der gesetzlichen Bestimmungen des\n\n    Art. 6 Abs. 1 S. 1 lit. a) (Einwilligung) und/oder f) (berechtigtes\n\n    Interesse) der DSGVO.&nbsp;Weitere Informationen zu den Nutzungsbedingungen\n\n    und Datenschutzrichtlinien der Google Inc. finden Sie auf&nbsp;<a\n\n      href="http://www.google.com/analytics/terms/de.html"\n\n      >http://www.google.com/analytics/terms/de.html</a\n\n    >&nbsp;und unter&nbsp;<a href="https://www.google.de/intl/de/policies/"\n\n      >https://www.google.de/intl/de/policies/</a\n\n    >.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Unser Anliegen im Sinne der DSGVO (berechtigtes Interesse) ist die\n\n    Verbesserung unseres Angebotes und unseres Webauftritts. Da uns die\n\n    Privatsphäre unserer Nutzer wichtig ist, werden die Nutzerdaten\n\n    pseudonymisiert.&nbsp;Mit der Google-Analytics-Komponente werden die\n\n    Besucherströme auf unserer Internetseite analysiert. Google nutzt die\n\n    gewonnenen Daten und Informationen unter anderem dazu, die Nutzung unserer\n\n    Internetseite auszuwerten, um für uns Online-Reports, welche die Aktivitäten\n\n    auf unseren Internetseiten aufzeigen, zusammenzustellen, und um weitere mit\n\n    der Nutzung unserer Internetseite in Verbindung stehende Dienstleistungen zu\n\n    erbringen.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    <strong>8. Social Plug-Ins</strong>\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Auf unserer WZK-App sind Plugins des sozialen Netzwerks Facebook, 1601 South\n\n    California Avenue, Palo Alto, CA 94304, USA integriert.&nbsp;Die\n\n    Facebook-Plugins erkennen&nbsp;Sie an dem Facebook-Logo oder dem\n\n    "Like-Button ("Gefällt mir") auf unserer Seite. Eine Übersicht über\n\n    die&nbsp;<a href="http://developers.facebook.com/docs/plugins/"\n\n      >Facebook-Plugins finden Sie hier</a\n\n    >. Wenn Sie unsere Seiten besuchen, wird über das Plugin eine direkte\n\n    Verbindung zwischen Ihrem Browser und dem Facebook-Server hergestellt.\n\n    Facebook erhält dadurch die Information, dass Sie mit Ihrer IP-Adresse\n\n    unsere Seite besucht haben. Wenn Sie den Facebook "Like-Button" anklicken\n\n    während Sie in Ihrem Facebook-Account eingeloggt sind, können Sie die\n\n    Inhalte unserer Seiten auf Ihrem Facebook-Profil verlinken. Dadurch kann\n\n    Facebook den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen\n\n    darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der\n\n    übermittelten Daten sowie deren Nutzung durch Facebook erhalten. Weitere\n\n    Informationen hierzu finden Sie in&nbsp;der Datenschutzerklärung&nbsp;von\n\n    facebook unter&nbsp;<a href="http://de-de.facebook.com/policy.php"\n\n      >http://de-de.facebook.com/policy.php</a\n\n    >. Die Datenverarbeitung erfolgt auf Basis der gesetzlichen Bestimmungen des\n\n    Art. 6 Abs. 1 S. 1 lit. a) (Einwilligung) der DSGVO.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Wenn Sie nicht wünschen, dass Facebook den Besuch unserer Seiten Ihrem\n\n    Facebook-Nutzerkonto zuordnen kann, loggen Sie sich bitte aus Ihrem\n\n    Facebook-Benutzerkonto aus.\n\n  </p>\n\n  <p style="margin-left: 0in">\n\n    <strong\n\n      >9. weitere Informationen zu einzelnen Datenverarbeitungsprozessen</strong\n\n    >\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Im Folgenden informieren wir Sie über die Prozesse, bei denen die WZK-App\n\n    personenbezogenen Daten nutzt und verarbeitet. Wir kommen damit unseren\n\n    Informationspflichten gemäß Art. 13 &amp; 14 DSGVO nach.\n\n  </p>\n\n  <p style="margin-left: 0in">\n\n    <br /><strong>Eintragung für Newsletter</strong>\n\n  </p>\n\n  <ul>\n\n    <li>\n\n      <p style="text-align: justify">\n\n        Betroffene Personengruppen: Interessenten\n\n      </p>\n\n    </li>\n\n    <li>\n\n      <p style="text-align: justify">\n\n        Verarbeitete personenbezogene Daten: Identifikationsdaten,\n\n        Kommunikationsdaten\n\n      </p>\n\n    </li>\n\n    <li>\n\n      <p style="text-align: justify">Zweck: Erhalten eines Newsletters</p>\n\n    </li>\n\n    <li>\n\n      <p style="text-align: justify">\n\n        Rechtsgrundlage: &nbsp;Erteilung einer Einwilligung zur Verarbeitung\n\n        (Art. 6 Abs. 1 S. 1 lit. a) DSGVO) und die Verarbeitung ist erforderlich\n\n        für vorvertragliche Maßnahmen auf Anfrage der betroffenen Person (Art. 6\n\n        Abs. 1 S. 1 lit. b) DSGVO)\n\n      </p>\n\n    </li>\n\n    <li>\n\n      <p style="text-align: justify">\n\n        Folgen der Nicht-Bereitstellung: Der Interessent bekommt keinen\n\n        Newsletter zugesendet\n\n      </p>\n\n    </li>\n\n    <li>\n\n      <p style="text-align: justify">\n\n        Empfänger: WZK-Mitarbeiter; wir nutzen für die Speicherung Ihrer\n\n        E-Mail-Adresse und zur Versendung der Newsletter den\n\n        Newsletterversender...... in Deutschland\n\n      </p>\n\n    </li>\n\n    <li>\n\n      <p style="text-align: justify">\n\n        Übermittlung Drittland: Findet nicht statt\n\n      </p>\n\n    </li>\n\n    <li>\n\n      <p style="text-align: justify">\n\n        Dauer der Speicherung: E-Mail Adressen für Newsletter werden bis auf\n\n        Widerruf gespeichert.\n\n      </p>\n\n    </li>\n\n  </ul>\n\n  <p style="margin-left: 0in">&nbsp;</p>\n\n  <p style="margin-left: 0in">\n\n    <strong>Registrierungsprozess in der WZK-App:</strong>\n\n  </p>\n\n  <ul>\n\n    <li>\n\n      <p style="text-align: justify">\n\n        Betroffene Personengruppen: Interessenten\n\n      </p>\n\n    </li>\n\n    <li>\n\n      <p style="text-align: justify">\n\n        Verarbeitete personenbezogene Daten: Identifikationsdaten (Nutzername,\n\n        Passwort, nutzerbezogener Zugangscode), Kommunikationsdaten\n\n      </p>\n\n    </li>\n\n    <li>\n\n      <p style="text-align: justify">\n\n        Zweck: Identifizierung der Nutzers zur Registrierung/Anmeldung in der\n\n        WZK-App&nbsp;\n\n      </p>\n\n    </li>\n\n    <li>\n\n      <p style="text-align: justify">\n\n        Rechtsgrundlage: Erteilung einer Einwilligung zur Verarbeitung (Art. 6\n\n        Abs. 1 S. 1 lit. a) DSGVO) und die Verarbeitung ist erforderlich für\n\n        vorvertragliche Maßnahmen auf Anfrage der betroffenen Person (Art. 6\n\n        Abs. 1 S. 1 lit. b) DSGVO)\n\n      </p>\n\n    </li>\n\n    <li>\n\n      <p style="text-align: justify">\n\n        Folgen der Nicht-Bereitstellung: Die App, oder Teilbereiche der App\n\n        können nicht verwendet werden\n\n      </p>\n\n    </li>\n\n    <li>\n\n      <p style="text-align: justify">Empfänger: WZK-Mitarbeiter</p>\n\n    </li>\n\n    <li>\n\n      <p style="text-align: justify">\n\n        Übermittlung Drittland: Findet nicht statt\n\n      </p>\n\n    </li>\n\n    <li>\n\n      <p style="text-align: justify">\n\n        Dauer der Speicherung: Soweit wir nicht rechtlich anders verpflichtet\n\n        sind, werden Ihre Account-Daten bis zur Löschung des WZK-Accounts sicher\n\n        gespeichert bei Ihrer Abmeldung innerhalb 1 Monats gelöscht.\n\n      </p>\n\n    </li>\n\n  </ul>\n\n  <p style="margin-left: 0in">&nbsp;&nbsp;</p>\n\n  <p style="margin-left: 0in">\n\n    <strong>Dokumentenmanagement in der WZK-App:</strong>\n\n  </p>\n\n  <ul>\n\n    <li>\n\n      <p style="text-align: justify">Betroffene Personengruppen: Nutzer</p>\n\n    </li>\n\n    <li>\n\n      <p style="text-align: justify">\n\n        Verarbeitete personenbezogene Daten: alle von Ihnen nach dem\n\n        Registrierungsprozess über die WZK-App auf dem "Patient-Klinik-Weg" an\n\n        uns übermittelte Daten (wie z.B. Anamnesebogen, medizinische Dokumente\n\n        etc.); alle von uns an Sie auf dem "Klinik-Patient-Weg" nach dem\n\n        Registrierungsprozess über die WZK-App übermittelte Daten (wie z.B.\n\n        Befunde, medizinische Unterlagen etc.).\n\n      </p>\n\n    </li>\n\n    <li>\n\n      <p style="text-align: justify">\n\n        Zweck: Die Versendung, Speicherung und Verwaltung der medizinischen\n\n        Unterlagen ist wesentlicher Zweck der WZK-App.\n\n      </p>\n\n    </li>\n\n    <li>\n\n      <p style="text-align: justify">\n\n        Rechtsgrundlage: Erteilung einer Einwilligung zur Verarbeitung (Art. 6\n\n        Abs. 1 S. 1 lit. a) DSGVO) und die Verarbeitung ist erforderlich zur\n\n        Erfüllung eines Vertrages mit der betroffenen Person (Art. 6 Abs. 1 S. 1\n\n        lit. b) DSGVO)\n\n      </p>\n\n    </li>\n\n    <li>\n\n      <p style="text-align: justify">\n\n        Folgen der Nicht-Bereitstellung: Keine Möglichkeit das\n\n        Dokumentenmanagement der WZK-App zu nutzen bzw. eingeschränkte\n\n        Nutzbarkeit.\n\n      </p>\n\n    </li>\n\n    <li>\n\n      <p style="text-align: justify">\n\n        Empfänger: Gesundheitsdaten, die Sie an uns bereitstellen, werden\n\n        verschlüsselt verwaltet im Krankenhausinformationssystem der WZ-Kliniken\n\n        auf Servern in Deutschland. Zum Zwecke der Aufbereitung der von Ihnen\n\n        übermittelten Gesundheitsdaten in ein pdf-Dokument werden diese auf\n\n        Servern der Wz-Kliniken, in Deutschland zwischengespeichert und sodann\n\n        verschlüsselt an das KIS der WZ-Kliniken weitergeleitet. Empfänger der\n\n        von uns an Sie übermittelten medizinischen Unterlagen sind\n\n        ausschließlich Sie.\n\n      </p>\n\n    </li>\n\n    <li>\n\n      <p style="text-align: justify">\n\n        Übermittlung Drittland: Findet nicht statt.\n\n      </p>\n\n    </li>\n\n    <li>\n\n      <p style="text-align: justify">\n\n        Dauer der Speicherung: Soweit wir nicht rechtlich anders verpflichtet\n\n        sind, werden die von Ihnen an uns übermittelten Daten bis zur Löschung\n\n        Ihres WZK-App-Accounts sicher gespeichert. Das bei der Übermittlung\n\n        erzeugte pdf-Dokument bleibt dort 14 Tage gespeichert und wird danach\n\n        automatisch und routinemäßig gelöscht. Es ist danach nur noch im KIS der\n\n        WZ-Kliniken gespeichert.\n\n      </p>\n\n    </li>\n\n  </ul>\n\n  <p style="margin-left: 0in">\n\n    <br /><strong>10. Schutz der Privatsphäre</strong>\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    WZK verpflichtet sich, Ihre Privatsphäre zu schützen und versichert, die\n\n    personenbezogenen Daten im Einklang mit dem Bundesdatenschutzgesetz, der\n\n    Datenschutzgrundverordnung und dem Telemediengesetz zu erheben, zu\n\n    verarbeiten und zu nutzen und ausschließlich für die Erfüllung der unter Nr.\n\n    2 definierten Zwecke zu verarbeiten und zu nutzen.&nbsp;\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Diese webseitenbasierte Kommunikationsplattform nutzt aus Gründen der\n\n    Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte, wie zum\n\n    Beispiel der Anfragen, die Sie an uns senden, eine SSL-Verschlüsselung. Eine\n\n    verschlüsselte Verbindung ist daran zu erkennen, dass die Adresszeile des\n\n    Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in\n\n    der Browserzeile.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Wenn die SSL Verschlüsselung aktiviert ist, können die Daten, die Sie an WZK\n\n    übermitteln, in der Regel nicht von Dritten mitgelesen werden.\n\n  </p>\n\n  <p style="margin-left: 0in"><strong>11. Einwilligung</strong></p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Sofern Sie in die Bedingungen dieser Erklärung einwilligen, erklären Sie\n\n    sich mit der hier geregelten Nutzung Ihrer personenbezogenen Daten\n\n    einverstanden. Die Einwilligung oder ihre Verweigerung erfolgt durch Klicken\n\n    oder Nichtklicken auf das entsprechende Feld nach dem Hinweis auf diese\n\n    Bestimmungen.&nbsp;\n\n  </p>\n\n  <p style="margin-left: 0in">\n\n    <strong>10. Auskunftsrecht und Datenberichtigung&nbsp;</strong>\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Sie haben einen gesetzlichen Anspruch auf jederzeitige, unentgeltliche\n\n    Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten. Ferner\n\n    steht Ihnen das Recht zu, unrichtige Daten berichtigen sowie Daten sperren\n\n    und löschen zu lassen.&nbsp;\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Wenn Sie Auskunft über Ihre personenbezogenen Daten wünschen oder\n\n    weitergehende Fragen über die Verarbeitung oder Nutzung Ihrer uns\n\n    überlassenen personenbezogenen Daten haben sowie eine Korrektur oder\n\n    Löschung Ihrer Daten veranlassen möchten, so wenden Sie sich bitte an die\n\n    unter Ziffer 9 „Widerspruchs- und Widerrufsrecht“ angegebene\n\n    Kontaktadresse.&nbsp;\n\n  </p>\n\n  <p style="margin-left: 0in">\n\n    <strong>11. Widerspruchs- und Widerrufsrecht&nbsp;</strong>\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Sie haben das Recht, eine an uns erteilte Einwilligung zur Datenerhebung,\n\n    -verarbeitung und -nutzung zu widerrufen. In diesem Fall werden wir die\n\n    Verarbeitung und Nutzung Ihrer Daten zu diesem Zwecke unverzüglich\n\n    unterlassen, es sei denn, es liegen zwingende, schutzwürdige Gründe für eine\n\n    Verarbeitung vor, die Ihre Interessen, Rechte und Freiheiten überwiegen,\n\n    oder die Verarbeitung ist zur Geltendmachung, Ausübung oder Verteidigung von\n\n    Rechtsansprüchen erforderlich. Einen Widerspruch oder Widerruf können Sie\n\n    jederzeit ohne Angabe von Gründen formlos per Post oder E-Mail an uns\n\n    übermitteln. Die aktuell gültigen notwendigen Kontaktdaten finden Sie auch\n\n    im Impressum unserer Website.&nbsp;\n\n  </p>\n\n  <p style="margin-left: 0in">\n\n    Per Post:&nbsp;Waldburg-Zeil Kliniken GmbH &amp; Co. KG, Zentrale,\n\n    Riedstraße 16, 88316 Isny-Neutrauchburg &nbsp;\n\n  </p>\n\n  <p style="margin-left: 0in">Per E-Mail: info@wz-kliniken.de</p>\n\n  <p style="margin-left: 0in">\n\n    <br /><strong>12. Beschwerderecht bei Aufsichtsbehörde</strong>\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Außerdem haben Sie das Recht, sich bei der zuständigen Aufsichtsbehörde über\n\n    datenschutzrechtliche Sachverhalte zu beschweren. Sie können sich an die\n\n    Aufsichtsbehörde Ihres Bundeslandes oder an die Aufsichtsbehörde des\n\n    Bundeslandes, in dem WZK seinen Firmensitz hat, wenden.<br />Die\n\n    Aufsichtsbehörde ist in Deutschland in der Regel der Landesbeauftragte für\n\n    Datenschutz und Informationsfreiheit.<br /><br />&nbsp;\n\n  </p>\n\n  <p style="margin-left: 0in">&nbsp;</p>\n\n  <p style="margin-left: 0in">&nbsp;</p>\n\n  <p style="margin-left: 0in">(Version 1.1, Stand: 10.04.2024)</p>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ger\wzk\front\3 wzk few options3\3 wzk few options\clinic_app_frontend\src\pages\Datenschutzerklarung\datenschutzerklaerung-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], DatenschutzerklaerungModalPage);
    return DatenschutzerklaerungModalPage;
}());

//# sourceMappingURL=datenschutzerklaerung-modal.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(578);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_statics__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storage_manager_storage_manager__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_util_isObject__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_util_isObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_util_isObject__);
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
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiProvider = /** @class */ (function () {
    function ApiProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.target = __WEBPACK_IMPORTED_MODULE_3__services_statics__["a" /* Info */].apiURL;
        this.targetBackend = __WEBPACK_IMPORTED_MODULE_3__services_statics__["a" /* Info */].backendUrl();
        this.CSRFToken = '';
    }
    /**
     * Makes a post request to the API endpoint.
     * @param path The relative path to the base API endpoint
     * @param data
     * @param headers
     * @param callback
     * @param key
     * @param json
     * @param responseType
     */
    ApiProvider.prototype.post = function (path, data, headers, callback, key, json, responseType) {
        if (key === void 0) { key = null; }
        if (json === void 0) { json = false; }
        if (responseType === void 0) { responseType = __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* ResponseContentType */].Text; }
        var opts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        opts.append("Content-type", "application/json");
        for (var i = 0; i < headers.length; i++) {
            opts.append(headers[i].name, headers[i].value);
        }
        if (key !== null && key.length > 0)
            data.key = key;
        var headersObject = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: opts, responseType: responseType });
        if (!json) {
            this.http.post(this.target + path, data, headersObject).subscribe(function (val) {
                callback(true, val);
            }, function (error) {
                callback(false, error);
            });
        }
        else {
            this.http.post(this.target + path, data, headersObject).map(function (res) { return res.json(); }).subscribe(function (val) {
                callback(true, val);
            }, function (error) {
                callback(false, error);
            });
        }
    };
    ApiProvider.prototype.postBackend = function (path, data, headers, callback, key, json, responseType) {
        var _this = this;
        if (key === void 0) { key = null; }
        if (json === void 0) { json = false; }
        if (responseType === void 0) { responseType = __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* ResponseContentType */].Text; }
        if (this.CSRFToken == '') {
            this.getBackend('/rest/session/token', [], function (success, data) {
                _this.CSRFToken = data.text();
            });
        }
        var opts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        opts.append("Content-type", "application/json");
        if (this.CSRFToken != '') {
            opts.append("X-CSRF-Token", this.CSRFToken);
        }
        //    opts.append("withCredentials", "true");
        console.info('this.CSRFToken is ', this.CSRFToken);
        for (var i = 0; i < headers.length; i++) {
            opts.append(headers[i].name, headers[i].value);
        }
        if (key !== null && key.length > 0)
            data.key = key;
        var headersObject = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: opts, responseType: responseType });
        if (!json) {
            this.http.post(this.targetBackend + path, data, headersObject).subscribe(function (val) {
                callback(true, val);
            }, function (error) {
                callback(false, error);
            });
        }
        else {
            this.http.post(this.targetBackend + path, data, headersObject).map(function (res) { return res.json(); }).subscribe(function (val) {
                callback(true, val);
            }, function (error) {
                callback(false, error);
            });
        }
    };
    /**
     * Make post request to Drupal backend.
     *
     * @param uri
     * @param payload
     * @param headers
     * @param callback
     */
    ApiProvider.prototype.backendPost = function (uri, payload, headers, callback) {
        var _this = this;
        if (payload === void 0) { payload = []; }
        if (headers === void 0) { headers = []; }
        if (callback === void 0) { callback = null; }
        console.info('backendPost ---------------------------------');
        this.storage.fetch('token_info', function (token_info) {
            var opts = _this.prepareHeaders(token_info, headers);
            // const opts = new Headers();
            // opts.append("Content-type", "application/json");
            //
            // for(let i = 0; i < headers.length; i++) {
            //   opts.append(headers[i].name, headers[i].value);
            // }
            //
            // if (isObject(token_info)) {
            //   opts.append("Authorization", token_info.token_type + ' ' + token_info.access_token);
            // }
            console.info(opts);
            var headersObject = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: opts });
            _this.http.post(_this.targetBackend + uri, JSON.stringify(payload), headersObject).subscribe(function (Response) {
                console.info(Response);
                console.info(Response.status);
                callback(true, Response.json());
            }, function (Error) {
                if (Error.status == 401) {
                    _this.postBackendRefreshOAuthToken(token_info.refresh_token, function (success, new_token) {
                        if (success) {
                            _this.storage.save('token_info', new_token, function (_) {
                                var opts = _this.prepareHeaders(new_token, headers);
                                var headersObject = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: opts });
                                _this.http.post(_this.targetBackend + uri, payload, headersObject).subscribe(function (Response) {
                                    callback(true, Response.json());
                                }, function (Error) {
                                    callback(false, Error);
                                });
                            });
                        }
                    });
                }
                else if (Error.status == 403) {
                    callback(false, null);
                }
            });
        });
        //    this.http.post(this.targetBackend).subscribe().
    };
    /**
     * Create headers list for request.
     *
     * @param token_info
     * @param headers
     * @private
     */
    ApiProvider.prototype.prepareHeaders = function (token_info, headers) {
        if (headers === void 0) { headers = []; }
        var opts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        opts.append("Content-type", "application/json");
        for (var i = 0; i < headers.length; i++) {
            opts.append(headers[i].name, headers[i].value);
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_util_isObject__["isObject"])(token_info)) {
            opts.append("Authorization", token_info.token_type + ' ' + token_info.access_token);
        }
        return opts;
    };
    ApiProvider.prototype.postBackendGetOAuthToken = function (user, pass, callback) {
        var formData = new FormData();
        formData.append("grant_type", "password");
        formData.append("client_id", __WEBPACK_IMPORTED_MODULE_3__services_statics__["a" /* Info */].backendOauthClientId);
        formData.append("client_secret", __WEBPACK_IMPORTED_MODULE_3__services_statics__["a" /* Info */].backendOauthClientPassword);
        formData.append("username", user);
        formData.append("password", pass);
        formData.append("scope", __WEBPACK_IMPORTED_MODULE_3__services_statics__["a" /* Info */].backendOauthClientScope);
        var opts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        //    opts.append("withCredentials", "true");
        var headersObject = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: opts });
        this.http.post(this.targetBackend + "/oauth/token", formData, headersObject).map(function (res) { return res.json(); }).subscribe(function (val) {
            callback(true, val);
        }, function (error) {
            callback(false, error);
        });
    };
    ApiProvider.prototype.postBackendRefreshOAuthToken = function (refresh_token, callback) {
        var formData = new FormData();
        formData.append("grant_type", "refresh_token");
        formData.append("refresh_token", refresh_token);
        formData.append("client_id", __WEBPACK_IMPORTED_MODULE_3__services_statics__["a" /* Info */].backendOauthClientId);
        formData.append("client_secret", __WEBPACK_IMPORTED_MODULE_3__services_statics__["a" /* Info */].backendOauthClientPassword);
        var opts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        //    opts.append("withCredentials", "true");
        var headersObject = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: opts });
        this.http.post(this.targetBackend + "/oauth/token", formData, headersObject).map(function (res) { return res.json(); }).subscribe(function (val) {
            callback(true, val);
        }, function (error) {
            callback(false, error);
        });
    };
    /**
     * Makes a get request to the API endpoint.
     * @param path The relative path to the base API endpoint
     * @param headers
     * @param callback
     * @param json
     * @param responseType
     */
    ApiProvider.prototype.get = function (path, headers, callback, json, responseType) {
        if (json === void 0) { json = false; }
        if (responseType === void 0) { responseType = __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* ResponseContentType */].Text; }
        var opts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        if (json)
            opts.append("Content-type", "application/json");
        for (var i = 0; i < headers.length; i++) {
            opts.append(headers[i].name, headers[i].value);
        }
        var headersObject = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: opts, responseType: responseType });
        if (!json) {
            this.http.get(this.target + path, headersObject).subscribe(function (val) {
                callback(true, val);
            }, function (error) {
                callback(false, error);
            });
        }
        else {
            this.http.get(this.target + path, headersObject).map(function (res) { return res.json(); }).subscribe(function (val) {
                callback(true, val);
            }, function (error) {
                callback(false, error);
            });
        }
    };
    ApiProvider.prototype.getBackend = function (path, headers, callback, json, responseType) {
        if (json === void 0) { json = false; }
        if (responseType === void 0) { responseType = __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* ResponseContentType */].Text; }
        var opts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        if (json)
            opts.append("Content-type", "application/json");
        for (var i = 0; i < headers.length; i++) {
            opts.append(headers[i].name, headers[i].value);
        }
        //    opts.append("withCredentials", "true");
        opts.append("Accept", "application/vnd.api+json");
        var headersObject = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: opts, responseType: responseType });
        if (!json) {
            this.http.get(this.targetBackend + path, headersObject).subscribe(function (val) {
                callback(true, val);
            }, function (error) {
                callback(false, error);
            });
        }
        else {
            this.http.get(this.targetBackend + path, headersObject).map(function (res) { return res.json(); }).subscribe(function (val) {
                callback(true, val);
            }, function (error) {
                callback(false, error);
            });
        }
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__storage_manager_storage_manager__["a" /* StorageManagerProvider */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlatformManagerProvider; });
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


var PlatformManagerProvider = /** @class */ (function () {
    function PlatformManagerProvider(platform) {
        this.platform = platform;
        console.log('Hello PlatformManagerProvider Provider');
        if (this.isRunningIOS())
            console.log("This is an iOS device.");
        if (this.isRunningAndroid())
            console.log("This is an Android device.");
        if (this.isMobileApplication())
            console.log("This is being run in mobile application");
        else if (this.isWebApplication())
            console.log("This is being run in web browser application");
        else
            console.log("This is being run on unknown type");
    }
    PlatformManagerProvider.prototype.printInConsole = function () {
        if (this.isRunningIOS())
            console.log("This is an iOS device.");
        if (this.isRunningAndroid())
            console.log("This is an Android device.");
        if (this.isMobileApplication())
            console.log("This is being run in mobile application");
        else if (this.isWebApplication())
            console.log("This is being run in web browser application");
        else
            console.log("This is being run on unknown type");
    };
    PlatformManagerProvider.prototype.isMobileApplication = function () {
        return (document.URL.indexOf('ionic') === 0 ||
            document.URL.indexOf('http://localhost') === 0 ||
            document.URL.indexOf('https://localhost') === 0);
    };
    PlatformManagerProvider.prototype.isRunningIOS = function () {
        return this.platform.is("ios");
    };
    PlatformManagerProvider.prototype.isRunningAndroid = function () {
        return this.platform.is("android");
    };
    PlatformManagerProvider.prototype.isWebApplication = function () {
        return !this.isMobileApplication();
    };
    PlatformManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], PlatformManagerProvider);
    return PlatformManagerProvider;
}());

//# sourceMappingURL=platform-manager.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__file_manager_file_manager__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storage_manager_storage_manager__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gui_manager_gui_manager__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__otp_otp__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__messages_messages__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__checkin_service_checkin_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_statics__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//import {Info} from "../../services/statics";
// import { NavController } from "ionic-angular";
/*
  Generated class for the AuthManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthManagerProvider = /** @class */ (function () {
    function AuthManagerProvider(http, fileManager, storage, guiManager, otpProvider, messageService, checkinService) {
        this.http = http;
        this.fileManager = fileManager;
        this.storage = storage;
        this.guiManager = guiManager;
        this.otpProvider = otpProvider;
        this.messageService = messageService;
        this.checkinService = checkinService;
        this.isMedical = false;
        this.email = "";
        this.key = "";
        this.resetSaveMail = "";
        this.userGroup = 0;
        this.clinicName = "";
        this.encodedEmailId = "";
        this.userInfo = [];
    }
    AuthManagerProvider.prototype.checkLogin = function (callback, check) {
        var _this = this;
        if (check === void 0) { check = false; }
        if (!check) {
            this.storage.contains("token_info", function (c) {
                if (c) {
                    _this.storage.fetch("token_info", function (saved) {
                        var loader = _this.guiManager.showLoader("Einloggen", 60000);
                        // this.http.post("/check", {key: saved.key}, [], (success, data) => {
                        //   loader.dismissAll();
                        //   callback(success && data.data)
                        //   if (success && data.data) {
                        //     this.internalPostLogin(saved.key, saved.medical, saved.name, saved.userGroup, saved.clinicName,
                        //                            saved.clinicId, saved.registered);
                        //   }
                        // }, null, true);
                        _this.http.postBackendRefreshOAuthToken(saved.refresh_token, function (success, data) {
                            loader.dismissAll();
                            if (success) {
                                _this.internalPostLogin_new(data);
                            }
                            else {
                                _this.logout();
                            }
                            callback(true);
                        });
                    });
                }
            });
        }
        /*    else {
          this.storage.contains("user_info", (c) => {
            if (c) {
              this.storage.fetch("user_info", (saved) => {
                // this.http.post("/check", {key: saved.key}, [], (success, data) => {
                //   callback(success && data.data)
                // }, null, true);
                this.http.getBackend("/rest/app/users/current",[],(success, data) => {
                  callback(success)
                },true);
              });
            }
            else {
              callback(false)
            }
          });
        }*/
    };
    /**
     * Logins with the mail and password and
     * receives the authkey of the session.
     * @param mail
     * @param password
     * @param callback
     */
    AuthManagerProvider.prototype.login = function (mail, password, callback) {
        var _this = this;
        var loader = this.guiManager.showLoader("Einloggen...", 60000);
        //    const data = JSON.stringify({mail: mail, pass: password, pass2: password});
        //    this.http.post("/login/*", data, [], (success, data) => {
        //    const data = JSON.stringify({name: mail, pass: password});
        this.http.postBackendGetOAuthToken(mail, password, function (success, data) {
            console.log("Loggin success: ", success);
            console.log("Loggin response: ", data);
            loader.dismissAll();
            if (success) {
                // this.storage.save('registration', 'login', _ => {
                //   console.log("Registration status has been updated in storage to login")
                // });
                callback(success);
                //        if (data.success) {
                //           if (this.loggedIn == true) {
                //             this.logout();
                //           }
                //           const key        = data.data.key;
                //           const isMedical  = data.data.medical;
                //           const userGroup  = data.data.group;
                //           const clinicName = data.data.clinicName;
                //           const clinicId   = data.data.clinicId;
                //           const registerd  = data.data.registered;
                _this.internalPostLogin_new(data);
                //        }
                // else {
                //   const msg = data.data;
                //   if (msg == "wrong_pass") {
                //     this.guiManager.showToast("Das Passwort ist nicht korrekt!", 5000);
                //
                //   }
                //   if (msg == "name_or_password_null") {
                //     this.guiManager.showToast("Es wurden nicht alle felder ausgefüllt", 5000);
                //   }
                //   if (msg == "empty_result") {
                //     this.guiManager.showToast("dies ist keine korrekte E-Mail Adresse", 5000);
                //   }
                //
                // }
            }
            else {
                var answer = JSON.parse(data._body);
                _this.guiManager.showPopupMessage("Anmeldung nicht möglich", "Bitte stellen Sie sicher, dass Ihr Handy über eine Internetverbindung verfügt und versuchen Sie es erneut.<br/><br/>Fehler: " +
                    answer.message);
                //this.guiManager.showPopupMessage("Unable to login", "Please ensure that your mobile has internet connection and retry.\nError:" + data);
                callback(false);
            }
        });
    };
    /**
     * Initialization of different components that need authentication
     * @param key
     * @param isMedical
     * @param mail
     * @param userGroup
     * @param clinicName
     * @param clinicId
     * @param registered
     */
    AuthManagerProvider.prototype.internalPostLogin = function (key, isMedical, mail, userGroup, clinicName, clinicId, registered) {
        var _this = this;
        if (registered === void 0) { registered = null; }
        console.log("This is internal post login message. Medical", isMedical, " User group: ", userGroup);
        console.log("The clinic name is: " + clinicName);
        console.log("The clinic id is : " + clinicId);
        console.log("The registered is : " + registered);
        console.info("showCalendarAfter is:", __WEBPACK_IMPORTED_MODULE_9__services_statics__["a" /* Info */].showCalendarAfter);
        this.loggedIn = true;
        this.key = key;
        this.email = mail;
        this.encodedEmailId = encodeURIComponent(btoa(this.email));
        this.isMedical = isMedical;
        this.userGroup = userGroup;
        this.clinicName = clinicName;
        if (registered != null) {
            this.registered = new Date(registered);
        }
        else {
            this.registered = null;
        }
        this.guiManager.afterLogin(isMedical, userGroup);
        if (__WEBPACK_IMPORTED_MODULE_9__services_statics__["a" /* Info */].projectId == "wzk") {
            if (this.registered == null ||
                __WEBPACK_IMPORTED_MODULE_9__services_statics__["a" /* Info */].showCalendarAfter == null ||
                (this.registered != null && this.registered < __WEBPACK_IMPORTED_MODULE_9__services_statics__["a" /* Info */].showCalendarAfter) ||
                clinicId != 115) {
                // TODO: check this later!
                // this.guiManager.removeByName("Anwendungen", "Terminplaner");
                // this.guiManager.removeTileByName("Terminplaner");
            }
        }
        this.fileManager.init(this.key, this.isMedical, mail, this.encodedEmailId);
        this.otpProvider.checkOtpTestFile();
        this.messageService.register(this.key);
        this.checkinService.initWithAuthKey(this.key, this.encodedEmailId);
        this.storage.contains("save", function (contains) {
            if (contains) {
                _this.storage.remove("save", function (_) {
                    _this.storage.save("save", {
                        key: _this.key,
                        name: mail,
                        medical: isMedical,
                        userGroup: userGroup,
                        clinicName: clinicName,
                        clinicId: clinicId,
                        registered: _this.registered,
                    }, function () { });
                });
            }
            else {
                _this.storage.save("save", {
                    key: _this.key,
                    name: mail,
                    medical: isMedical,
                    userGroup: userGroup,
                    clinicName: clinicName,
                    clinicId: clinicId,
                    registered: registered,
                }, function () { });
            }
        });
    };
    AuthManagerProvider.prototype.internalPostLogin_new = function (tokenInfo /*, key, isMedical, mail, userGroup, clinicName, clinicId, registered = null*/) {
        var _this = this;
        if (tokenInfo === void 0) { tokenInfo = []; }
        var isMedical = false;
        var userGroup = 0;
        console.log("This is NEW internal post login message. Medical", isMedical, " User group: ", userGroup);
        var userInfo = tokenInfo["user_info"];
        var currentUser = userInfo["current_user"];
        var clinicId = currentUser.clinic_id;
        delete tokenInfo["user_info"];
        console.info("tokenInfo is: ");
        console.info(tokenInfo);
        console.info("current_user is: ");
        console.info(currentUser);
        // console.log("The clinic name is: " + clinicName);
        // console.log("The clinic id is : " + clinicId);
        // console.log("The registered is : " + registered);
        // console.info('showCalendarAfter is:', Info.showCalendarAfter);
        this.userInfo = currentUser;
        this.loggedIn = currentUser.id > 0;
        this.key = userInfo["csrf_token"];
        this.email = currentUser.mail;
        this.encodedEmailId = encodeURIComponent(btoa(this.email));
        this.isMedical = isMedical;
        this.userGroup = userGroup;
        this.clinicName = currentUser.clinic_name;
        if (currentUser.registered != null) {
            this.registered = new Date(currentUser.registered);
        }
        else {
            this.registered = null;
        }
        this.storage.contains("user_info", function (contains) {
            if (contains) {
                _this.storage.remove("user_info", function (_) {
                    _this.storage.save("user_info", currentUser, function () { });
                });
            }
            else {
                _this.storage.save("user_info", currentUser, function () { });
            }
        });
        // this.storage.contains("token_info", (contains) => {
        //   if (contains) {
        //     this.storage.remove("token_info", (_) => {
        //       this.storage.save("token_info", tokenInfo, () => {});
        //     })
        //   }
        //   else {
        //     this.storage.save("token_info", tokenInfo, () => {});
        //   }
        // });
        this.storage.save("token_info", tokenInfo, function () {
            _this.guiManager.afterLogin(isMedical, userGroup);
            if (__WEBPACK_IMPORTED_MODULE_9__services_statics__["a" /* Info */].projectId == "wzk") {
                if (_this.registered == null ||
                    __WEBPACK_IMPORTED_MODULE_9__services_statics__["a" /* Info */].showCalendarAfter == null ||
                    (_this.registered != null &&
                        _this.registered < __WEBPACK_IMPORTED_MODULE_9__services_statics__["a" /* Info */].showCalendarAfter) ||
                    clinicId != 115) {
                    //          this.guiManager.removeByName("Anwendungen", "Terminplaner");
                    //          this.guiManager.removeTileByName("Terminplaner");
                }
            }
            _this.fileManager.init(_this.key, _this.isMedical, _this.email, _this.encodedEmailId);
            _this.otpProvider.checkOtpTestFile();
            _this.messageService.register(_this.key);
            _this.checkinService.initWithAuthKey(_this.key, _this.encodedEmailId);
        });
    };
    /**
     * Registers with user using the activation code/invitation number.
     * @param email
     * @param password
     * @param passsword2
     * @param code
     * @param callback
     */
    AuthManagerProvider.prototype.registerWithInvitationNumber = function (email, password, passsword2, code, callback) {
        var data = JSON.stringify({
            key: code,
            mail: email,
            pass: password,
            pass2: passsword2,
        });
        this.register(data, email, callback);
    };
    /**
     * Registers the user using the Fallnummer and birthday.
     * @param email
     * @param password
     * @param passsword2
     * @param fallnummer
     * @param birthday
     * @param callback
     */
    AuthManagerProvider.prototype.registerWithFallnummer = function (email, password, passsword2, fallnummer, birthday, callback) {
        var data = JSON.stringify({
            fallnummer: fallnummer,
            birthday: birthday,
            mail: email,
            pass: password,
            pass2: passsword2,
        });
        //    this.register(data, email, callback);
        this.register_new(data, email, callback);
    };
    /**
     * Registers the user.
     * @param data
     * @param email
     * @param callback
     */
    // TODO: Deprecated method
    AuthManagerProvider.prototype.register = function (data, email, callback) {
        var _this = this;
        var loader = this.guiManager.showLoader("Registrieren...", 60000);
        this.http.post("/create/*", data, [], function (success, data) {
            loader.dismissAll();
            if (success) {
                callback(data.success);
                if (data.success) {
                    var key = data.data.key;
                    var isMedical = data.data.medical;
                    var userGroup = data.data.userGroup;
                    var clinicName = data.data.clinicName;
                    var clinicId = data.data.clinicId;
                    _this.internalPostLogin(key, isMedical, email, userGroup, clinicName, clinicId);
                }
                else {
                    var msg = data.data;
                    if (msg == "missing_arg") {
                        _this.guiManager.showToast("Wurden alle Felder ausgefüllt?", 5000);
                        _this.guiManager.showPopupMessage("Fehler", "Wurden alle Felder ausgefüllt?");
                    }
                    if (msg == "birthday_wrong_format") {
                        _this.guiManager.showToast("Fehler im Geburtstagsformat", 5000);
                        _this.guiManager.showPopupMessage("Fehler", "Bitte füllen Sie den Geburtstag im folgenden Format aus: TT.MM.JJJJJJ z.B. 31.12.1999");
                    }
                    if (msg == "unknown_patient_combination") {
                        _this.guiManager.showToast("Falsche Informationen", 5000);
                        _this.guiManager.showPopupMessage("Fehler", "Die von Ihnen angegebenen Informationen sind auf der Datenbank nicht vorhanden. Bitte überprüfen Sie, ob sie korrekt sind. Wenn der Fehler weiterhin besteht, kontaktieren Sie uns bitte.");
                    }
                    if (msg == "mail_taken") {
                        _this.guiManager.showToast("Diese Email Adresse wurde bereits verwendet", 5000);
                        _this.guiManager.showPopupMessage("Fehler", "Diese Email Adresse wurde bereits verwendet");
                    }
                    if (msg == "invalid_result") {
                        _this.guiManager.showToast("Der eingegebene Zugangscode ist nicht gültig!", 5000);
                        _this.guiManager.showPopupMessage("Fehler", "Der eingegebene Zugangscode ist nicht gültig!");
                    }
                    if (msg == "alrdy_confirmed") {
                        _this.guiManager.showToast("Dieser Schlüssel wurde bereits benutzt!", 5000);
                        _this.guiManager.showPopupMessage("Fehler", "Dieser Schlüssel wurde bereits benutzt!");
                    }
                    if (msg == "pass_not_same") {
                        _this.guiManager.showToast("Dies´angebenen Passworter stimment nicht überrein!", 5000);
                        _this.guiManager.showPopupMessage("Fehler", "Dies´angebenen Passworter stimment nicht überrein!");
                    }
                    if (msg == "empty_vals") {
                        _this.guiManager.showToast("Einiege Felder wurden nicht ausgefüllt!", 5000);
                        _this.guiManager.showPopupMessage("Fehler", "Einiege Felder wurden nicht ausgefüllt!");
                    }
                    if (msg == "db_err") {
                        _this.guiManager.showToast("Es ist ein Interner Fehler aufgetreten, bitte versuche es später erneut! db_err", 5000);
                        _this.guiManager.showPopupMessage("Fehler", "Es ist ein Interner Fehler aufgetreten, bitte versuche es später erneut! db_err");
                    }
                }
            }
            else {
                //TODO handle error messages
                callback(false);
                _this.guiManager.showPopupMessage("Fehler", "Es ist ein Fehler aufgetreten. Möglicherweise gibt es keine Internetverbindung. \nWeitere Informationen siehe unten: " +
                    JSON.stringify(data));
            }
        }, null, true);
    };
    /**
     * Send request for register user to backend.
     *
     * @param data
     * @param email
     * @param callback
     */
    AuthManagerProvider.prototype.register_new = function (data, email, callback) {
        var _this = this;
        var loader = this.guiManager.showLoader("Registrieren...", 60000);
        this.http.postBackend("/rest/app/users/register", data, [], function (success, data) {
            loader.dismissAll();
            if (success) {
                _this.guiManager.showPopupMessage("Ihre Registrierung war erfolgreich", "Bitte machen Sie weiter mit Login");
                console.info("yess go to login form");
                // this.navCtrl.setRoot("LoginPage");
                // this.navCtrl.push("LoginPage");
                return;
            }
            console.info("success is: " + success);
            console.info("data is:");
            console.info(data);
            var answer = JSON.parse(data["_body"]);
            console.info("answer is:");
            console.info(answer);
            if (success) {
                _this.guiManager.showPopupMessage("yesss1", "its ok !!!!!!!!!!");
                console.info("yess go to login form");
                // return;
            }
            if (success) {
                _this.guiManager.showToast("Its ok !!!!!!", 5000);
                // return;
                callback(success);
                // if (data.success) {
                //   const key = data.data.key;
                //   const isMedical = data.data.medical;
                //   const userGroup = data.data.userGroup;
                //   const clinicName = data.data.clinicName;
                //   const clinicId = data.data.clinicId;
                //   this.guiManager.showPopupMessage("yesss", "its ok !!!!!!!!!!");
                //   this.internalPostLogin(
                //     key,
                //     isMedical,
                //     email,
                //     userGroup,
                //     clinicName,
                //     clinicId,
                //   );
                // }
                // else {
                //   const msg = data.data;
                //   if (msg == "missing_arg") {
                //     this.guiManager.showToast("Wurden alle Felder ausgefüllt?", 5000);
                //     this.guiManager.showPopupMessage("Fehler","Wurden alle Felder ausgefüllt?");
                //
                //   }
                //   if (msg == "birthday_wrong_format") {
                //     this.guiManager.showToast("Fehler im Geburtstagsformat", 5000);
                //     this.guiManager.showPopupMessage("Fehler","Bitte füllen Sie den Geburtstag im folgenden Format aus: TT.MM.JJJJJJ z.B. 31.12.1999");
                //   }
                //   if (msg == "unknown_patient_combination") {
                //     this.guiManager.showToast("Falsche Informationen", 5000);
                //     this.guiManager.showPopupMessage("Fehler","Die von Ihnen angegebenen Informationen sind auf der Datenbank nicht vorhanden. Bitte überprüfen Sie, ob sie korrekt sind. Wenn der Fehler weiterhin besteht, kontaktieren Sie uns bitte.");
                //   }
                //   if (msg == "mail_taken") {
                //     this.guiManager.showToast("Diese Email Adresse wurde bereits verwendet", 5000);
                //     this.guiManager.showPopupMessage("Fehler","Diese Email Adresse wurde bereits verwendet");
                //   }
                //   if (msg == "invalid_result") {
                //     this.guiManager.showToast("Der eingegebene Zugangscode ist nicht gültig!", 5000);
                //     this.guiManager.showPopupMessage("Fehler","Der eingegebene Zugangscode ist nicht gültig!");
                //   }
                //   if (msg == "alrdy_confirmed") {
                //     this.guiManager.showToast("Dieser Schlüssel wurde bereits benutzt!", 5000);
                //     this.guiManager.showPopupMessage("Fehler","Dieser Schlüssel wurde bereits benutzt!");
                //   }
                //   if (msg == "pass_not_same") {
                //     this.guiManager.showToast("Dies´angebenen Passworter stimment nicht überrein!", 5000);
                //     this.guiManager.showPopupMessage("Fehler","Dies´angebenen Passworter stimment nicht überrein!");
                //
                //   }
                //   if (msg == "empty_vals") {
                //     this.guiManager.showToast("Einiege Felder wurden nicht ausgefüllt!", 5000);
                //     this.guiManager.showPopupMessage("Fehler","Einiege Felder wurden nicht ausgefüllt!");
                //
                //   }
                //   if (msg == "db_err") {
                //     this.guiManager.showToast("Es ist ein Interner Fehler aufgetreten, bitte versuche es später erneut! db_err", 5000);
                //     this.guiManager.showPopupMessage("Fehler","Es ist ein Interner Fehler aufgetreten, bitte versuche es später erneut! db_err");
                //
                //   }
                // }
            }
            else {
                var answer_1 = JSON.parse(data["_body"]);
                callback(false);
                _this.guiManager.showPopupMessage("Fehler", "Es ist ein Fehler aufgetreten. Weitere Informationen siehe unten: <b>" +
                    answer_1.message +
                    "</b>");
            }
        }, null, true);
    };
    /**
     * Logs out the user.
     */
    AuthManagerProvider.prototype.logout = function () {
        var _this = this;
        var me = this;
        this.clinicName = "";
        this.fileManager.clear();
        this.guiManager.afterLogout(this.isMedical, this.userGroup);
        this.loggedIn = false;
        this.userInfo = [];
        this.storage.contains("user_info", function (contains) {
            if (contains) {
                _this.storage.remove("user_info", function (_) {
                    me.storage.contains(_this.encodedEmailId + "saved-file-ids", function (contains) {
                        if (contains) {
                            me.storage.remove(_this.encodedEmailId + "saved-file-ids", function (_) { });
                        }
                    });
                });
            }
        });
        this.storage.contains("token_info", function (contains) {
            if (contains) {
                _this.storage.remove("token_info", function (_) { });
            }
        });
        console.debug("User is logged out");
    };
    /**
     * Requests a password reset.
     * @param mail
     * @param callback
     */
    AuthManagerProvider.prototype.requestPasswordReset = function (mail, callback) {
        var _this = this;
        this.http.get("/reset/request/" + encodeURIComponent(btoa(mail)), [], function (success, data) {
            callback(data.success);
            if (data.success)
                _this.resetSaveMail = mail;
        }, true);
    };
    Object.defineProperty(AuthManagerProvider.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn;
        },
        enumerable: false,
        configurable: true
    });
    AuthManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__file_manager_file_manager__["a" /* FileManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__storage_manager_storage_manager__["a" /* StorageManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_5__gui_manager_gui_manager__["a" /* GuiManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_6__otp_otp__["a" /* OtpProvider */],
            __WEBPACK_IMPORTED_MODULE_7__messages_messages__["a" /* MessagesProvider */],
            __WEBPACK_IMPORTED_MODULE_8__checkin_service_checkin_service__["a" /* CheckinServiceProvider */]])
    ], AuthManagerProvider);
    return AuthManagerProvider;
}());

//# sourceMappingURL=auth-manager.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_manager_auth_manager__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_gui_manager_gui_manager__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_storage_manager_storage_manager__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_checkin_service_checkin_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_api_api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_touch_manager_touch_manager__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_touch_id__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_android_fingerprint_auth__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_otp_otp__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_file__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_file_manager_file_manager__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_electron_electron__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_opener__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_food_card_modal_box_page__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ionic2_calendar__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_geolocation__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_in_app_browser__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_draw_draw__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_messages_messages__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_debugger_debugger__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_calendar__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_calendar_calendarProvider__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_file_chooser__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_file_path__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_file_picker__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_background_fetch__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_phonegap_local_notification__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_firebase__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_platform_manager_platform_manager__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_link_manager_link_manager__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_activity_tracker_activity_tracker__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_form_manager_form_manager__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_fire__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__angular_fire_auth__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__environments_environment__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_simple_text_modal_simple_text_modal__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_Nutzungsbedingungen_nutzungsbedingungen_modal__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_Datenschutzerklarung_datenschutzerklaerung_modal__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_help_help_modal__ = __webpack_require__(813);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_food_card_modal_box_page__["a" /* ModalContentPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_simple_text_modal_simple_text_modal__["a" /* SimpleTextModalPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_Nutzungsbedingungen_nutzungsbedingungen_modal__["a" /* NutzungsbedingungenModalPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_Datenschutzerklarung_datenschutzerklaerung_modal__["a" /* DatenschutzerklaerungModalPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_help_help_modal__["a" /* helpModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_22_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    backButtonText: "Zurück",
                    scrollAssist: false,
                    autoFocusAssist: false,
                }, {
                    links: [
                        { loadChildren: '../pages/calendar.module/calendar/calendar.module#CalendarPageModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendar.module/event-modal/event-modal.module#EventModalPageModule', name: 'EventModalPage', segment: 'event-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkin-for-doctors/checkin-for-doctors.module#CheckinForDoctorsPageModule', name: 'CheckinForDoctorsPage', segment: 'checkin-for-doctors', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/debugger/debugger.module#DebuggerPageModule', name: 'DebuggerPage', segment: 'debugger', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkin/checkin.module#CheckinPageModule', name: 'CheckinPage', segment: 'checkin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/document/document.module#DocumentPageModule', name: 'DocumentPage', segment: 'document', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/draw/draw.module#DrawPageModule', name: 'DrawPage', segment: 'draw', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/email-confirmation/email-confirmation.module#EmailConfirmationPageModule', name: 'EmailConfirmation', segment: 'email-confirmation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-upload/file-upload.module#FileUploadPageModule', name: 'FileUploadPage', segment: 'file-upload', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/food-card/food-card.module#FoodCardPageModule', name: 'FoodCardPage', segment: 'food-card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/imprint/imprint.module#ImprintPageModule', name: 'ImprintPage', segment: 'imprint', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info-item/info-item.module#InfoItemPageModule', name: 'InfoItemPage', segment: 'info-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info-list/info-list.module#InfoListPageModule', name: 'InfoListPage', segment: 'info-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro-slider/intro-slider.module#IntroSliderPageModule', name: 'IntroSliderPage', segment: 'intro-slider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message-center/message-center.module#MessageCenterPageModule', name: 'MessageCenterPage', segment: 'message-center', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news-item/news-item.module#NewsItemPageModule', name: 'NewsItemPage', segment: 'news-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news-list/news-list.module#NewsListPageModule', name: 'NewsListPage', segment: 'news-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password-reset/password-reset.module#PasswordResetPageModule', name: 'PasswordResetPage', segment: 'password-reset', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/privacy/privacy.module#PrivacyPageModule', name: 'PrivacyPage', segment: 'privacy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/start-filter/start-filter.module#StartFilterPageModule', name: 'StartFilterPage', segment: 'start-filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/start-text/start-text.module#StartTextPageModule', name: 'StartTextPage', segment: 'start-text', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/text/text.module#TextPageModule', name: 'TextPage', segment: 'text', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/therapy-entry/therapy-entry.module#TherapyEntryPageModule', name: 'TherapyEntryPage', segment: 'therapy-entry', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tos/tos.module#TosPageModule', name: 'TosPage', segment: 'tos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-settings-account-information/user-settings-account-information.module#UserSettingsAccountInformationPageModule', name: 'UserSettingsAccountInformationPage', segment: 'user-settings-account-information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-settings-change-password/user-settings-change-password.module#UserSettingsChangePasswordPageModule', name: 'UserSettingsChangePasswordPage', segment: 'user-settings-change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-settings-create-account/user-settings-create-account.module#UserSettingsCreateAccountPageModule', name: 'UserSettingsCreateAccountPage', segment: 'user-settings-create-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-settings-fingerprint-activation/user-settings-fingerprint-activation.module#UserSettingsFingerprintActivationPageModule', name: 'UserSettingsFingerprintActivationPage', segment: 'user-settings-fingerprint-activation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-settings-message-center/user-settings-message-center.module#UserSettingsMessageCenterPageModule', name: 'UserSettingsMessageCenterPage', segment: 'user-settings-message-center', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-settings-push-notification/user-settings-push-notification.module#UserSettingsPushNotificationPageModule', name: 'UserSettingsPushNotificationPage', segment: 'user-settings-push-notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-settings-refill-keys/user-settings-refill-keys.module#UserSettingsRefillKeysPageModule', name: 'UserSettingsRefillKeysPage', segment: 'user-settings-refill-keys', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-settings/user-settings.module#UserSettingsPageModule', name: 'UserSettingsPage', segment: 'user-settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: "__mydb",
                    driverOrder: ["sqlite", "websql", "indexeddb", "localstorage"],
                }),
                __WEBPACK_IMPORTED_MODULE_43__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_40__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_42__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_41__angular_fire_auth__["b" /* AngularFireAuthModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_food_card_modal_box_page__["a" /* ModalContentPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_simple_text_modal_simple_text_modal__["a" /* SimpleTextModalPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_Nutzungsbedingungen_nutzungsbedingungen_modal__["a" /* NutzungsbedingungenModalPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_Datenschutzerklarung_datenschutzerklaerung_modal__["a" /* DatenschutzerklaerungModalPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_help_help_modal__["a" /* helpModalPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_auth_manager_auth_manager__["a" /* AuthManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_gui_manager_gui_manager__["a" /* GuiManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_storage_manager_storage_manager__["a" /* StorageManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_checkin_service_checkin_service__["a" /* CheckinServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_touch_manager_touch_manager__["a" /* TouchManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_touch_id__["a" /* TouchID */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_android_fingerprint_auth__["a" /* AndroidFingerprintAuth */],
                __WEBPACK_IMPORTED_MODULE_16__providers_otp_otp__["a" /* OtpProvider */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_18__providers_file_manager_file_manager__["a" /* FileManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_electron_electron__["a" /* ElectronProvider */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_25__providers_draw_draw__["a" /* DrawProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_messages_messages__["a" /* MessagesProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_debugger_debugger__["a" /* DebuggerProvider */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_calendar__["a" /* Calendar */],
                __WEBPACK_IMPORTED_MODULE_29__providers_calendar_calendarProvider__["a" /* CalendarProvider */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_file_picker__["a" /* IOSFilePicker */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_background_fetch__["a" /* BackgroundFetch */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_phonegap_local_notification__["a" /* PhonegapLocalNotification */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_36__providers_platform_manager_platform_manager__["a" /* PlatformManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_link_manager_link_manager__["a" /* LinkManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_activity_tracker_activity_tracker__["a" /* ActivityTrackerProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_form_manager_form_manager__["a" /* FormManagerProvider */],
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 258,
	"./af.js": 258,
	"./ar": 259,
	"./ar-dz": 260,
	"./ar-dz.js": 260,
	"./ar-kw": 261,
	"./ar-kw.js": 261,
	"./ar-ly": 262,
	"./ar-ly.js": 262,
	"./ar-ma": 263,
	"./ar-ma.js": 263,
	"./ar-sa": 264,
	"./ar-sa.js": 264,
	"./ar-tn": 265,
	"./ar-tn.js": 265,
	"./ar.js": 259,
	"./az": 266,
	"./az.js": 266,
	"./be": 267,
	"./be.js": 267,
	"./bg": 268,
	"./bg.js": 268,
	"./bm": 269,
	"./bm.js": 269,
	"./bn": 270,
	"./bn-bd": 271,
	"./bn-bd.js": 271,
	"./bn.js": 270,
	"./bo": 272,
	"./bo.js": 272,
	"./br": 273,
	"./br.js": 273,
	"./bs": 274,
	"./bs.js": 274,
	"./ca": 275,
	"./ca.js": 275,
	"./cs": 276,
	"./cs.js": 276,
	"./cv": 277,
	"./cv.js": 277,
	"./cy": 278,
	"./cy.js": 278,
	"./da": 279,
	"./da.js": 279,
	"./de": 280,
	"./de-at": 281,
	"./de-at.js": 281,
	"./de-ch": 282,
	"./de-ch.js": 282,
	"./de.js": 280,
	"./dv": 283,
	"./dv.js": 283,
	"./el": 284,
	"./el.js": 284,
	"./en-au": 285,
	"./en-au.js": 285,
	"./en-ca": 286,
	"./en-ca.js": 286,
	"./en-gb": 287,
	"./en-gb.js": 287,
	"./en-ie": 288,
	"./en-ie.js": 288,
	"./en-il": 289,
	"./en-il.js": 289,
	"./en-in": 290,
	"./en-in.js": 290,
	"./en-nz": 291,
	"./en-nz.js": 291,
	"./en-sg": 292,
	"./en-sg.js": 292,
	"./eo": 293,
	"./eo.js": 293,
	"./es": 294,
	"./es-do": 295,
	"./es-do.js": 295,
	"./es-mx": 296,
	"./es-mx.js": 296,
	"./es-us": 297,
	"./es-us.js": 297,
	"./es.js": 294,
	"./et": 298,
	"./et.js": 298,
	"./eu": 299,
	"./eu.js": 299,
	"./fa": 300,
	"./fa.js": 300,
	"./fi": 301,
	"./fi.js": 301,
	"./fil": 302,
	"./fil.js": 302,
	"./fo": 303,
	"./fo.js": 303,
	"./fr": 304,
	"./fr-ca": 305,
	"./fr-ca.js": 305,
	"./fr-ch": 306,
	"./fr-ch.js": 306,
	"./fr.js": 304,
	"./fy": 307,
	"./fy.js": 307,
	"./ga": 308,
	"./ga.js": 308,
	"./gd": 309,
	"./gd.js": 309,
	"./gl": 310,
	"./gl.js": 310,
	"./gom-deva": 311,
	"./gom-deva.js": 311,
	"./gom-latn": 312,
	"./gom-latn.js": 312,
	"./gu": 313,
	"./gu.js": 313,
	"./he": 314,
	"./he.js": 314,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 316,
	"./hr.js": 316,
	"./hu": 317,
	"./hu.js": 317,
	"./hy-am": 318,
	"./hy-am.js": 318,
	"./id": 319,
	"./id.js": 319,
	"./is": 320,
	"./is.js": 320,
	"./it": 321,
	"./it-ch": 322,
	"./it-ch.js": 322,
	"./it.js": 321,
	"./ja": 323,
	"./ja.js": 323,
	"./jv": 324,
	"./jv.js": 324,
	"./ka": 325,
	"./ka.js": 325,
	"./kk": 326,
	"./kk.js": 326,
	"./km": 327,
	"./km.js": 327,
	"./kn": 328,
	"./kn.js": 328,
	"./ko": 329,
	"./ko.js": 329,
	"./ku": 330,
	"./ku.js": 330,
	"./ky": 331,
	"./ky.js": 331,
	"./lb": 332,
	"./lb.js": 332,
	"./lo": 333,
	"./lo.js": 333,
	"./lt": 334,
	"./lt.js": 334,
	"./lv": 335,
	"./lv.js": 335,
	"./me": 336,
	"./me.js": 336,
	"./mi": 337,
	"./mi.js": 337,
	"./mk": 338,
	"./mk.js": 338,
	"./ml": 339,
	"./ml.js": 339,
	"./mn": 340,
	"./mn.js": 340,
	"./mr": 341,
	"./mr.js": 341,
	"./ms": 342,
	"./ms-my": 343,
	"./ms-my.js": 343,
	"./ms.js": 342,
	"./mt": 344,
	"./mt.js": 344,
	"./my": 345,
	"./my.js": 345,
	"./nb": 346,
	"./nb.js": 346,
	"./ne": 347,
	"./ne.js": 347,
	"./nl": 348,
	"./nl-be": 349,
	"./nl-be.js": 349,
	"./nl.js": 348,
	"./nn": 350,
	"./nn.js": 350,
	"./oc-lnc": 351,
	"./oc-lnc.js": 351,
	"./pa-in": 352,
	"./pa-in.js": 352,
	"./pl": 353,
	"./pl.js": 353,
	"./pt": 354,
	"./pt-br": 355,
	"./pt-br.js": 355,
	"./pt.js": 354,
	"./ro": 356,
	"./ro.js": 356,
	"./ru": 357,
	"./ru.js": 357,
	"./sd": 358,
	"./sd.js": 358,
	"./se": 359,
	"./se.js": 359,
	"./si": 360,
	"./si.js": 360,
	"./sk": 361,
	"./sk.js": 361,
	"./sl": 362,
	"./sl.js": 362,
	"./sq": 363,
	"./sq.js": 363,
	"./sr": 364,
	"./sr-cyrl": 365,
	"./sr-cyrl.js": 365,
	"./sr.js": 364,
	"./ss": 366,
	"./ss.js": 366,
	"./sv": 367,
	"./sv.js": 367,
	"./sw": 368,
	"./sw.js": 368,
	"./ta": 369,
	"./ta.js": 369,
	"./te": 370,
	"./te.js": 370,
	"./tet": 371,
	"./tet.js": 371,
	"./tg": 372,
	"./tg.js": 372,
	"./th": 373,
	"./th.js": 373,
	"./tk": 374,
	"./tk.js": 374,
	"./tl-ph": 375,
	"./tl-ph.js": 375,
	"./tlh": 376,
	"./tlh.js": 376,
	"./tr": 377,
	"./tr.js": 377,
	"./tzl": 378,
	"./tzl.js": 378,
	"./tzm": 379,
	"./tzm-latn": 380,
	"./tzm-latn.js": 380,
	"./tzm.js": 379,
	"./ug-cn": 381,
	"./ug-cn.js": 381,
	"./uk": 382,
	"./uk.js": 382,
	"./ur": 383,
	"./ur.js": 383,
	"./uz": 384,
	"./uz-latn": 385,
	"./uz-latn.js": 385,
	"./uz.js": 384,
	"./vi": 386,
	"./vi.js": 386,
	"./x-pseudo": 387,
	"./x-pseudo.js": 387,
	"./yo": 388,
	"./yo.js": 388,
	"./zh-cn": 389,
	"./zh-cn.js": 389,
	"./zh-hk": 390,
	"./zh-hk.js": 390,
	"./zh-mo": 391,
	"./zh-mo.js": 391,
	"./zh-tw": 392,
	"./zh-tw.js": 392
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 604;

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCalendar; });
var UserCalendar = /** @class */ (function () {
    function UserCalendar(name, displayname, id, sync) {
        if (sync === void 0) { sync = false; }
        this.name = name;
        this.displayname = displayname;
        this.id = id;
        this.sync = sync;
    }
    return UserCalendar;
}());

//# sourceMappingURL=calendarUserCalendar.Model.js.map

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return File; });
var File = /** @class */ (function () {
    function File() {
        this.isRoot = false;
    }
    return File;
}());

//# sourceMappingURL=file.modal.js.map

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checkin_service_checkin_modals__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__ = __webpack_require__(4);


var WebForm = /** @class */ (function () {
    function WebForm(accountId, formId, storageProvider) {
        this.storageProvider = storageProvider;
        this.counter = 0;
        this.presetData = null;
        this.accountId = "";
        this.formId = "";
        this.accountId = accountId;
        this.formId = formId;
    }
    WebForm.prototype.saveDataToStorage = function (callback) {
        this.storageProvider.save(this.accountId + "form_custom_data" + this.formId, this.presetData, function () {
            //      console.log("Saving the form custom data :", this.presetData, "under the: ", this.accountId + "form_custom_data" + this.formId);
            callback();
        });
    };
    WebForm.prototype.retrieveSavedDataAndMerge = function (callback) {
        var _this = this;
        if (this.presetData != null) {
            this.storageProvider.contains(this.accountId + "form_custom_data" + this.formId, function (nodeDataContains) {
                //console.log("Custome data contains response: ", nodeDataContains);
                //        console.log("Checking for custom data of the form... Found: ", nodeDataContains);
                if (nodeDataContains) {
                    _this.storageProvider.fetch(_this.accountId + "form_custom_data" + _this.formId, function (nodeDataResponse) {
                        //            console.log("Checking for custom data of the form... The data are: ", nodeDataResponse);
                        //this.guiManager.showToast("Contains custom data, merging nodes...", 2000);
                        //console.log("Saved custom data fetched:", nodeDataResponse);
                        _this.presetData = _this.mergeNodeState(_this.presetData, nodeDataResponse);
                        callback(true);
                    });
                }
                else {
                    //          console.log("custom data aren't in the device", nodeDataContains);
                    callback(false);
                }
            });
        }
        else {
            callback(false);
        }
    };
    WebForm.prototype.parse = function (backendContent, callback) {
        var _this = this;
        if (callback === void 0) { callback = function (form) {
        }; }
        var parseContent = function (content) {
            //this.guiManager.showToast("Received form-data from the backend...", 1000);
            var hash = WebForm.hashFormFields(JSON.stringify(content));
            //      console.log("Hash of the form: ", hash);
            var next = function () {
                //this.guiManager.showToast("Inside next function...", 1000);
                var nodes = [];
                var keys = Object.keys(content.Objects.FormDef.NFormDefAttribute.FormDefAttribute);
                console.info(keys);
                // for (let i = 0; i < keys.length; i++) {
                //   if (!keys[i].startsWith("#")) {
                //     nodes.push(this.parseNode(keys[i], content[keys[i]]))
                //   }
                // }
                console.log("parse function, fetch: Checkin loader should be off now");
                content.Objects.FormDef.NFormDefAttribute.FormDefAttribute.forEach(function (xmlNode) {
                    //          console.info(xmlNode);
                    _this.parseNodeNew(xmlNode, nodes);
                });
                console.log("nodes are: ", nodes);
                console.log("this is test", nodes[1].children[3].title);
                function findJsonObjectByTitle(arr, targetTitle) {
                    for (var i = 0; i < arr.length; i++) {
                        var obj = arr[i];
                        if (targetTitle.indexOf(obj.title) > -1) {
                            return obj;
                        }
                        if (obj.children && obj.children.length > 0) {
                            var nestedObject = findJsonObjectByTitle(obj.children, targetTitle);
                            if (nestedObject) {
                                return nestedObject;
                            }
                        }
                    }
                    return null;
                }
                var targetTitle = ['Möchten Sie uns noch weitere Informationen zu Ihrer Schmerzbeschreibung geben?', 'Gab es akute Ereignisse, die zu den Beeinträchtigungen geführt haben (z. B. Unfälle?)'];
                for (var target = 0; target < targetTitle.length; target++) {
                    var jsonObject = findJsonObjectByTitle(nodes, targetTitle);
                    if (jsonObject && targetTitle[target] === "Möchten Sie uns noch weitere Informationen zu Ihrer Schmerzbeschreibung geben?") {
                        jsonObject.title = 'Sonstiges und Anmerkungenzur Schmerzanammase';
                    }
                    else if (jsonObject && targetTitle[target] === "Gab es akute Ereignisse, die zu den Beeinträchtigungen geführt haben (z. B. Unfälle?)") {
                        jsonObject.style = true;
                    }
                }
                _this.remakeNodeArray(nodes);
                _this.presetData = nodes;
                callback(_this);
                _this.counter = 0;
            };
            _this.storageProvider.contains(_this.accountId + "form_hash" + _this.formId, function (contains) {
                if (contains) {
                    _this.storageProvider.fetch(_this.accountId + "form_hash" + _this.formId, function (previousHash) {
                        if (previousHash != hash) {
                            //              console.log("Hash of the form is different. Clearing checkin data from cache.");
                            _this.storageProvider.save(_this.accountId + "form_hash" + _this.formId, hash, function () {
                                //                console.log("Hash of the form has been saved in the cache.");
                                _this.removeCache(function () {
                                    next();
                                });
                            });
                        }
                        else {
                            //              console.log("Hash of the form is correct. The data should load soon.");
                            next();
                        }
                    });
                }
                else {
                    //          console.log("There is no hash of the form in cache. Clearing checkin data from cache");
                    _this.storageProvider.save(_this.accountId + "form_hash" + _this.formId, hash, function () {
                        //            console.log("Hash of the form has been saved in the cache.");
                        _this.removeCache(function () {
                            next();
                        });
                    });
                }
            });
        };
        //  TODO:  parseContent(backendContent);
        callback(this);
        var fetch = function () {
            console.info(backendContent);
            if (backendContent == null) {
                // this.http.get(this.linkManager.getWebformAsHalJSON()).map(res => res.json()).subscribe(content => {
                //   console.log("Content received by the backend: ", content);
                //   this.backendContent = content;
                //   parseContent(content);
                // });
            }
            else {
                console.log("Backend content are already retrieved: ", backendContent);
                parseContent(backendContent);
            }
        };
        // this.storageProvider.contains(this.encodedEmailId + "form_data", (contains) => {
        //   if (contains) {
        //     console.log("Restoring checkin data...");
        //     this.storageProvider.fetch(this.encodedEmailId + "form_data", (response) => {
        //       //this.savedData = response;
        //       console.log("Saved", response);
        //       fetch();
        //     })
        //   }
        //   else {
        //     fetch();
        //   }
        // })
        fetch();
    };
    WebForm.prototype.remakeNodeArray = function (nodes) {
        var newNode = nodes;
        var removeValFromIndex = [10, 11, 12];
        for (var i = removeValFromIndex.length - 1; i >= 0; i--) {
            newNode.splice(removeValFromIndex[i], 1);
        }
        console.log(newNode);
        this.presetData = newNode;
    };
    WebForm.prototype.parseNodeNew = function (content, nodes) {
        this.counter++;
        var node = null;
        //    console.info(content);
        /*    const title        = content.AnswerDesc;
            const type = content.ControlType;
            const id = content.AnswerId;

        //    console.info(content);
        */
        var Group = this.getNodebyValue(content.GroupId, 'GroupId', nodes);
        if (Group == null) {
            Group = new __WEBPACK_IMPORTED_MODULE_0__checkin_service_checkin_modals__["b" /* Node */](content.GroupId, content.GroupDesc, 'group', content.GroupId);
            Group.addField('GroupId', content['GroupId']);
            nodes.push(Group);
        }
        var Question = this.getNodebyValue(content.QuestionId, 'QuestionId', Group.children);
        if (Question == null) {
            Question = new __WEBPACK_IMPORTED_MODULE_0__checkin_service_checkin_modals__["b" /* Node */](content.QuestionId, content.QuestionDesc, 'fieldset', content.QuestionId);
            Question.addField('GroupId', content['GroupId']);
            Question.addField('QuestionId', content['QuestionId']);
            Group.children.push(Question);
        }
        var title = content.AnswerDesc;
        // Grouping all radio buttons from Question
        if (content.ControlType == 'RadioButton') {
            //      console.info(content);
            title = content.QuestionDesc;
            var Answer = this.getNodebyValue(content.QuestionId + 'radios', 'AnswerId', Question.children);
            if (Answer == null) {
                Answer = new __WEBPACK_IMPORTED_MODULE_0__checkin_service_checkin_modals__["b" /* Node */](content.AnswerId, title, 'radios', content.AnswerId);
                Answer.addField('GroupId', content.GroupId);
                Answer.addField('QuestionId', content.QuestionId);
                Answer.addField('AnswerId', content.QuestionId + 'radios');
                Answer.addField("values", [content.AnswerDesc]);
                Answer.addField("answers", [content.AnswerId]);
                Question.children.push(Answer);
                //        console.info('New radio created');
            }
            else {
                var values = Answer.getField("values");
                values.push(content.AnswerDesc);
                Answer.updateValue("values", values);
                var answers = Answer.getField("answers");
                answers.push(content.AnswerId);
                Answer.updateValue("answers", answers);
                //        console.info('Radio updated');
            }
            //      console.info(Answer);
        }
        else {
            var Answer = this.getNodebyValue(content.AnswerId, 'AnswerId', Question.children);
            if (Answer == null) {
                // Preprocessing nodes.
                if (content.ControlType == 'List') {
                    title = content.NColumn.Column.ColumnHeader;
                }
                else if (content.ControlType == 'Memo') {
                    //          console.info(content.QuestionDesc == content.AnswerDesc, 'Titles equal');
                    if (content.QuestionDesc == content.AnswerDesc) {
                        title = '';
                    }
                }
                Answer = new __WEBPACK_IMPORTED_MODULE_0__checkin_service_checkin_modals__["b" /* Node */](content.AnswerId, title, content.ControlType, content.AnswerId);
                // Postprocessing nodes.
                Answer.addField('GroupId', content.GroupId);
                Answer.addField('QuestionId', content.QuestionId);
                Answer.addField('AnswerId', content.AnswerId);
                if (content.ControlType == 'Checkbox') {
                    Answer.addField("values", [{ val: content.AnswerDesc, ref: false }]);
                }
                else if (content.ControlType == 'RadioButton') {
                    Answer.addField("values", [content.AnswerDesc]);
                }
                else if (content.ControlType == 'List') {
                    var values_1 = [];
                    content.NColumn.Column.NColumnItem.ColumnItem.forEach(function (value) {
                        values_1.push(value);
                    });
                    Answer.addField("values", values_1);
                    if (title != content.AnswerDesc) {
                        Answer.addField("description", content.AnswerDesc);
                    }
                }
                else if (content.ControlType == 'Float') {
                    if (content.Unit != null) {
                        Answer.addField("suffix", content.Unit);
                    }
                }
                else if (content.ControlType == 'Memo') {
                    //          console.info(content);
                    //          Answer.addField("text", [content.AnswerDesc]);
                    //          console.info(Answer);
                }
                this.checkPrivateData(Answer, content);
                //        console.info(Answer);
                Question.children.push(Answer);
            }
        }
        return node;
    };
    WebForm.prototype.getNodebyValue = function (value, searchField, nodes) {
        var found = false;
        var node = null;
        var next = function (items) {
            items.forEach(function (currNode) {
                if (currNode.getField(searchField) == value) {
                    found = true;
                    node = currNode;
                }
                if (!found) {
                    next(currNode.children);
                }
            });
        };
        next(nodes);
        return node;
    };
    WebForm.prototype.parseNode = function (parentName, content) {
        this.counter++;
        // if (content["#type"] == "webform_signature") {
        //   return this.drawNode(content)
        // }
        //    console.info('parsing for ', content);
        var contentKeys = Object.keys(content);
        var type = content["#type"] == "webform_signature" ? "canvas" : content["#type"];
        var name = content["#title"];
        var node = new __WEBPACK_IMPORTED_MODULE_0__checkin_service_checkin_modals__["b" /* Node */](parentName, name, type, content["#webform_id"]);
        //    Node("canvas_field", content['#title'], "canvas", "draw_canvas")
        for (var i = 0; i < contentKeys.length; i++) {
            var current = contentKeys[i];
            if (!current.startsWith("#")) {
                var newNode = this.parseNode(current, content[current]);
                //newNode.parent = node;
                if (content[current]["#webform_multiple"] && content[current]["#webform_id"] != "checkin_2--an_welchen_erkrankungen_leiden_bzw_litten_sie_ausserdem_1") {
                    newNode.selfMultiply = true;
                    node.canMultiply = true;
                }
                node.children.push(newNode);
            }
        }
        // if (content["#other__option_label"] != null) {
        //   node.addField("placeholder", content["#other__placeholder"])
        // }
        if (content["#other__placeholder"] != null) {
            node.addField("placeholder", content["#other__placeholder"]);
        }
        else {
            node.addField("placeholder", '');
        }
        if (content["#other__field_prefix"] != null) {
            node.addField("other_prefix", content["#other__field_prefix"]);
        }
        if (content["#other__field_suffix"] != null) {
            node.addField("other_suffix", content["#other__field_suffix"]);
        }
        if ('#description' in content && '#markup' in content['#description']) {
            node.addField("description", content["#description"]['#markup']);
        }
        // else {
        //   node.addField("description", '');
        // }
        // States refer to the input status, if it is disabled, visible, etc..
        if (content["#states"] != null) {
            var marker = ':input';
            var keys = Object.keys(content["#states"]);
            //      console.info(content["#states"]);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var current = content["#states"][key];
                var rule = new __WEBPACK_IMPORTED_MODULE_0__checkin_service_checkin_modals__["c" /* Rule */](key);
                var childKeys = Object.keys(current);
                for (var x = 0; x < childKeys.length; x++) {
                    var currentChild = current[childKeys[x]];
                    var name_1 = null;
                    var found = childKeys[x].match(/\"([^"]+)"/g); //.substr(13).substr(0, childKeys[x].substr(13).length - 2);
                    if (found) {
                        name_1 = found[0].replace('"', '').replace('"', '');
                    }
                    var number = 0;
                    /*          if (name.indexOf("[") != -1 && name.indexOf("[radios]") == -1) {
                     if (Number.isNaN(Number.parseInt(name.substr(name.length - 3, 2)))) {

                     number = Number.parseInt(name.substr(name.length - 2, 1));
                     name = name.substr(0, name.length - 3);
                     } else {
                     number = Number.parseInt(name.substr(name.length - 3, 2));
                     name = name.substr(0, name.length - 4);
                     }
                     }*/
                    var conditionKeys = Object.keys(currentChild);
                    for (var y = 0; y < keys.length; y++) {
                        var c = new __WEBPACK_IMPORTED_MODULE_0__checkin_service_checkin_modals__["a" /* Condition */](name_1, conditionKeys[y], currentChild[conditionKeys[y]]);
                        if (number != 0) {
                            c.fromArray = true;
                            c.arrId = number;
                        }
                        rule.conditions.push(c);
                    }
                }
                node.rules.push(rule);
            }
        }
        // This is the type of the form element
        switch (type) {
            case "processed_text": {
                node.addField("text", content["#text"]);
                break;
            }
            case "select": {
                var arr = [];
                var keys = Object.keys(content["#options"]);
                for (var i = 0; i < keys.length; i++) {
                    arr.push(content["#options"][keys[i]]);
                }
                node.addField("values", arr);
                break;
            }
            case "range": {
                node.addField("min", content["#min"]);
                node.addField("max", content["#max"]);
                break;
            }
            case "webform_radios_other": {
                //        console.log("Parsing webform_radios_other", content);
                var options = content.radios["#options"];
                var optionsKeys = Object.keys(options);
                var arr = [];
                for (var i = 0; i < optionsKeys.length; i++) {
                    if (optionsKeys[i] == "_other_") {
                        node.addField("other_select", options[optionsKeys[i]]);
                    }
                    arr.push(options[optionsKeys[i]]);
                }
                node.addField("values", arr);
                if ('#default_value' in content) {
                    node.reflector = content['#default_value'];
                }
                //        console.log("processed node:", node);
                break;
            }
            case "radios": {
                var options = content["#options"];
                var optionsKeys = Object.keys(options);
                var arr = [];
                for (var i = 0; i < optionsKeys.length; i++) {
                    if (optionsKeys[i] == "_other_") {
                        node.addField("other_select", options[optionsKeys[i]]);
                    }
                    arr.push(options[optionsKeys[i]]);
                }
                node.addField("values", arr);
                //node.reflector = arr[0];
                break;
            }
            case "checkboxes": {
                //console.log("Parsing checkboxes", content);
                var options = content["#options"];
                var optionsKeys = Object.keys(options);
                var arr = [];
                for (var i = 0; i < optionsKeys.length; i++) {
                    if (optionsKeys[i] == "_other_") {
                        node.addField("other_select", options[optionsKeys[i]]);
                    }
                    arr.push({ val: options[optionsKeys[i]], ref: false });
                }
                node.addField("values", arr);
                //console.log("processed node:", node);
                break;
            }
            case "webform_likert": {
                var optionsArr = [];
                var optionKeys = Object.keys(content["#answers"]);
                for (var i = 0; i < optionKeys.length; i++) {
                    var optionValue = content["#answers"][optionKeys[i]];
                    optionsArr.push({ key: optionKeys[i], value: optionValue });
                }
                var questions = content["#questions"];
                var questionKeys = Object.keys(questions);
                for (var i = 0; i < questionKeys.length; i++) {
                    var value = questions[questionKeys[i]];
                    var childNode = new __WEBPACK_IMPORTED_MODULE_0__checkin_service_checkin_modals__["b" /* Node */](questionKeys[i], value, "likert_child", content["#webform_id-" + i]);
                    childNode.addField("values", optionsArr);
                    /*for (let y = 0; y < this.savedData.length; y++) {
                     const current = this.savedData[y];
                     if (current.id == childNode.id) {
                     childNode.reflector = current.value;
                     break;
                     }
                     }*/
                    node.children.push(childNode);
                }
                break;
            }
            case "webform_checkboxes_other": {
                //        console.log("Parsing webform checkboxes other", content);
                var options = content.checkboxes["#options"];
                var optionsKeys = Object.keys(options);
                var other = content.other;
                var arr = [];
                for (var i = 0; i < optionsKeys.length; i++) {
                    if (optionsKeys[i] == "_other_") {
                        node.addField("other_select", options[optionsKeys[i]]);
                        node.reflector = options[optionsKeys[i]];
                    }
                    arr.push({ val: options[optionsKeys[i]], ref: false });
                }
                node.addField("values", arr);
                //        node.reflector = arr[0];
                if ('#field_suffix' in other) {
                    node.addField("other_suffix", other['#field_suffix']);
                }
                node.addField("other_type", other['#type'].replace('field', ''));
                //        console.log("processed node:", node);
                break;
            }
            case "checkbox": {
                //        console.log("Parsing webform checkbox", content);
                node.addField("values", [{ val: content["#title"], ref: false }]);
                //        console.log("processed node:", node);
                break;
            }
            case "canvas": {
                //        console.log("Parsing webform canvas", content);
                if ('#kind' in content) {
                    node.addField("kind", content['#kind']);
                }
                else {
                    node.addField("kind", "human");
                }
                //        node.addField("values", [{val: content["#title"], ref: false}]);
                //        console.log("processed node:", node);
                break;
            }
            // End to-do
            default: {
            }
        }
        /*
         for (let i = 0; i < this.savedData.length; i++) {
         const current = this.savedData[i];
         if (current.id == node.id) {

         if (node.type == "checkboxes") {
         node.removeField("values");
         node.addField("values", current.value)
         }
         /!*
         // Untested - broken code
         else if (node.type == "webform_checkboxes_other") {
         node.removeField("values");
         node.addField("values", current.value)
         }*!/
         else if (node.type != "checkboxes") {
         node.reflector = current.value;
         }
         break;
         }
         }*/
        return node;
    };
    WebForm.prototype.drawNode = function (content) {
        this.counter++;
        return new __WEBPACK_IMPORTED_MODULE_0__checkin_service_checkin_modals__["b" /* Node */]("canvas_field", content['#title'], "canvas", "draw_canvas");
    };
    WebForm.prototype.removeCache = function (callback) {
        var _this = this;
        this.storageProvider.removeIfContains(this.accountId + "form_data", function () {
            _this.storageProvider.removeIfContains(_this.accountId + "form_custom_data" + _this.formId, function () {
                callback();
            });
        });
    };
    WebForm.prototype.saveViewPosition = function (positionData) {
        this.storageProvider.save(this.accountId + "form_view_position" + this.formId, positionData, function (success) {
            //      console.log("View position saved successfully:", positionData)
        });
    };
    WebForm.prototype.getViewPosition = function (callback) {
        var _this = this;
        this.storageProvider.contains(this.accountId + "form_view_position" + this.formId, function (contains) {
            if (contains) {
                _this.storageProvider.fetch(_this.accountId + "form_view_position" + _this.formId, function (response) {
                    //          console.log("Saved view position retrieved: ", response);
                    callback(response);
                });
            }
            else {
                callback({});
            }
        });
    };
    WebForm.prototype.fixNodeChildren = function (node) {
        if (node.hasOwnProperty("children") && node.children != undefined) {
            for (var i = 0; i < node.children.length; i++) {
                var current = node.children[i];
                if (current instanceof __WEBPACK_IMPORTED_MODULE_0__checkin_service_checkin_modals__["b" /* Node */]) {
                    this.fixNodeChildren(current);
                }
                else {
                    var newNode = Object.assign(new __WEBPACK_IMPORTED_MODULE_0__checkin_service_checkin_modals__["b" /* Node */](current.name, current.title, current.type, current.id), current);
                    this.fixNodeChildren(newNode);
                    node.children[i] = newNode;
                }
            }
        }
    };
    WebForm.prototype.mergeNode = function (node, data) {
        if (data == undefined) {
            return;
        }
        // Parse data of the node itself if possible
        if (data.hasOwnProperty("reflector") && data.reflector != undefined) {
            node.reflector = data.reflector;
        }
        if (node.type == "checkboxes") {
            if (data.hasOwnProperty("fields") && data.fields != undefined && data.fields) {
                if (data.fields instanceof Array) {
                    for (var _i = 0, _a = data.fields; _i < _a.length; _i++) {
                        var pair = _a[_i];
                        if (pair.hasOwnProperty("key") && pair.key == "values") {
                            node.removeField("values");
                            node.addField("values", pair.value);
                        }
                    }
                }
            }
        }
        if (node.canMultiply == true) {
            if (data.hasOwnProperty("children") && data.children.hasOwnProperty("length") && data.children.length > 0) {
                node.children = [];
                for (var i = 0; i < data.children.length; i++) {
                    var currentChild = data.children[i];
                    var newNode = Object.assign(new __WEBPACK_IMPORTED_MODULE_0__checkin_service_checkin_modals__["b" /* Node */](currentChild.name, currentChild.title, currentChild.type, currentChild.id), currentChild);
                    this.fixNodeChildren(newNode);
                    node.children.push(newNode);
                }
            }
        }
        else if (node.canMultiply == false) {
            // Parse data of the children
            if (node.children.length > 0) {
                this.mergeNodeState(node.children, data.children);
            }
        }
    };
    WebForm.prototype.mergeNodeState = function (parsed, nodeSavedState) {
        for (var i = 0; i < parsed.length; i++) {
            this.mergeNode(parsed[i], nodeSavedState[i]);
        }
        return parsed;
    };
    WebForm.hashFormFields = function (text) {
        if (Array.prototype.reduce) {
            return text.split("").reduce(function (a, b) {
                a = ((a << 5) - a) + b.charCodeAt(0);
                return a & a;
            }, 0);
        }
        var hash = 0;
        if (text.length === 0) {
            return hash;
        }
        for (var i = 0; i < text.length; i++) {
            var character = text.charCodeAt(i);
            hash = ((hash << 5) - hash) + character;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    };
    WebForm.prototype.checkPrivateData = function (node, data) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["n" /* isString */])(data.PrivateData)) {
            // console.info(node.id, node.type, data.PrivateData);
            if (data.PrivateData.startsWith('inv')) {
                var rule = new __WEBPACK_IMPORTED_MODULE_0__checkin_service_checkin_modals__["c" /* Rule */]('visible');
                var c = new __WEBPACK_IMPORTED_MODULE_0__checkin_service_checkin_modals__["a" /* Condition */](node.name, 'value', '@');
                rule.conditions.push(c);
                node.rules.push(rule);
                //        node.visible = false;
                //        node.rules.push({'visible', false});
            }
        }
    };
    /**
     * Returns the form id of a form based on the url string.
     * @param url The URL string of the form.
     */
    WebForm.getFormId = function (url) {
        return encodeURIComponent(btoa(url));
    };
    return WebForm;
}());

//# sourceMappingURL=form-modal.js.map

/***/ }),

/***/ 629:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_gui_manager_gui_manager__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_manager_auth_manager__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_checkin_service_checkin_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_activity_tracker_activity_tracker__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_platform_manager_platform_manager__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, guiManager, authProvider, modalCtrl, checkinProvider, tracker, platformManager) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.guiManager = guiManager;
        this.authProvider = authProvider;
        this.modalCtrl = modalCtrl;
        this.checkinProvider = checkinProvider;
        this.tracker = tracker;
        this.platformManager = platformManager;
        this.homePage = { title: "Home", component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] };
        this.rootPage = "LoginPage";
        this.appManager = {};
        // Importing from Visit iran
        this.profile_pic = "assets/sidebar/no_pic.jpg";
        this.fullname = "unknown name";
        this.acs_lvl_typ = "";
        this.initializeApp();
        this.detectOldIE();
    }
    MyApp.prototype.goEditProfile = function () {
        //this.nav.push("ProfilePage");
        console.log("Unsupported function: goEditprofile (app.component.ts)");
    };
    Object.defineProperty(MyApp.prototype, "showMsgCenter", {
        ///
        get: function () {
            return this.guiManager.messageCenter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyApp.prototype, "pages", {
        get: function () {
            this.content.resize();
            return this.guiManager.pages;
        },
        enumerable: false,
        configurable: true
    });
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.tracker.userActionDetected();
        var me = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            if (_this.platformManager.isWebApplication()) {
                _this.nav._app.viewDidEnter.subscribe(function (view, error, complete) {
                    _this.tracker.userActionDetected();
                });
            }
            _this.authProvider.checkLogin(function (success) {
                if (success)
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
            });
        });
    };
    MyApp.prototype.detectOldIE = function () {
        var isOldIE = navigator.userAgent.match(/Trident/);
        console.log("Monkey patched because of old IE" + isOldIE);
        if (isOldIE) {
            document.body.classList.add("ie-old");
            this.appManager.isOldIEVersion = true;
            console.log("Monkey patched because of old IE");
            this.checkinProvider.isIE = true;
        }
    };
    MyApp.prototype.openMessageCenter = function () {
        var modal = this.modalCtrl.create("MessageCenterPage");
        modal.present();
    };
    MyApp.prototype.openDrawer = function () {
        this.nav.push("DrawPage");
    };
    MyApp.prototype.logout = function () {
        this.authProvider.logout();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    Object.defineProperty(MyApp.prototype, "loggedIn", {
        get: function () {
            return this.authProvider.isLoggedIn;
        },
        enumerable: false,
        configurable: true
    });
    MyApp.prototype.sitesFromKey = function (key) {
        return this.pages[key];
    };
    Object.defineProperty(MyApp.prototype, "pageKeys", {
        get: function () {
            return Object.keys(this.pages);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyApp.prototype, "footerNeed", {
        get: function () {
            return !this.authProvider.isLoggedIn && !this.guiManager.isLoginPageActive;
        },
        enumerable: false,
        configurable: true
    });
    MyApp.prototype.goToLoginPage = function () {
        this.nav.setRoot("LoginPage");
    };
    MyApp.prototype.checkDisabled = function (item) {
        if (item.loader == null)
            return false;
        return this.guiManager.loaders[item.loader] == true;
    };
    MyApp.prototype.openHomePage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], {}, { animate: true, direction: "forward" });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component, page.params != null ? page.params : {}, {
            animate: true,
            direction: "forward",
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], MyApp.prototype, "content", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ger\wzk\front\3 wzk few options3\3 wzk few options\clinic_app_frontend\src\app\app.html"*/'<ion-menu id="leftMenu" type="overlay" [content]="content">\n  <ion-header>\n    <ion-toolbar>\n\n      <button *ngIf="showMsgCenter" icon-only style="margin-left: 5px; background-color: transparent" (click)="openMessageCenter()">\n        <ion-icon name="mail" style="font-size: 35px; color: #ffd512;"></ion-icon>\n      </button>\n      <!--button icon-only style="margin-left: 5px; background-color: transparent" (click)="openDrawer()">\n        Draw\n      </button-->\n      <ion-title></ion-title>\n    </ion-toolbar>\n    <!--<ion-toolbar *ngIf="loggedIn" color="primary" text-center>\n      <ion-item ion-item color="primary" no-lines text-left>\n        <ion-avatar item-start>\n          <img [src]="profile_pic">\n        </ion-avatar>\n        <div ion-text color="text-color">\n          {{fullname}} really long name rip papadopoulos\n        </div>\n      </ion-item>\n      <ion-list>\n        <button ion-item>\n          <ion-avatar item-start>\n            <img [src]="profile_pic">\n          </ion-avatar>\n          {{fullname}} really long name rip papadopoulos\n        </button>\n      </ion-list>\n\n      &lt;!&ndash;<ion-buttons>\n        <button ion-button outline full icon-start color="text-color" menuClose (click)="goEditProfile()" padding margin-bottom="1px" text-capitalize="false">\n          <ion-icon name="contact"></ion-icon>\n          Edit profile\n        </button>\n        <button ion-button outline full icon-start color="text-color" menuClose (click)="logout()" padding margin-bottom="1px" text-capitalize="false">\n          <ion-icon name="log-out"></ion-icon>\n          Log out\n        </button>\n      </ion-buttons>&ndash;&gt;\n    </ion-toolbar>-->\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose detail-none ion-item (click)="openHomePage()">\n        Home <img item-right class="image-icon" src="assets/home/icon.svg">\n      </button>\n      <div *ngFor="let key of pageKeys">\n        <ion-item-divider color="white">\n          {{key}}\n        </ion-item-divider>\n        <div *ngFor="let p of sitesFromKey(key)">\n\n          <button menuClose detail-none ion-item *ngIf="!checkDisabled(p)" (click)="openPage(p)">\n            {{p.title}} <img *ngIf="p.icon" item-right class="image-icon" [src]="p.icon">\n          </button>\n          <button menuClose detail-none ion-item *ngIf="checkDisabled(p)" disabled>\n            {{p.title}}\n            <ion-spinner item-right=""></ion-spinner>\n          </button>\n        </div>\n      </div>\n      <button *ngIf="loggedIn" menuClose ion-item (click)="logout()">Logout</button>\n\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<div>\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n</div>\n'/*ion-inline-end:"D:\ger\wzk\front\3 wzk few options3\3 wzk few options\clinic_app_frontend\src\app\app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_gui_manager_gui_manager__["a" /* GuiManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_manager_auth_manager__["a" /* AuthManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_checkin_service_checkin_service__["a" /* CheckinServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_activity_tracker_activity_tracker__["a" /* ActivityTrackerProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_platform_manager_platform_manager__["a" /* PlatformManagerProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyB4945532LPNKZztQR_DMl35YBdZps8wX0",
        authDomain: "clinet-patient-whitelabel.firebaseapp.com",
        databaseURL: "https://clinet-patient-whitelabel.firebaseio.com",
        projectId: "clinet-patient-whitelabel",
        storageBucket: "clinet-patient-whitelabel.appspot.com",
        messagingSenderId: "1089286241779",
        appId: "1:1089286241779:web:5f631c6f1b9c073d27a686"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleTextModalPage; });
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


var SimpleTextModalPage = /** @class */ (function () {
    function SimpleTextModalPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    SimpleTextModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    SimpleTextModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "simple-text-modal",template:/*ion-inline-start:"D:\ger\wzk\front\3 wzk few options3\3 wzk few options\clinic_app_frontend\src\pages\simple-text-modal\simple-text-modal.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title> Sample Text </ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    <strong>Nutzungsbedingungen</strong>\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    der WZK Applikation und webseitenbasierten Kommunikationsplattform für\n\n    Patienten zu den Waldburg-Zeil Kliniken.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    <strong>1. Anbieter und Anwendungsbereich</strong>\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Anbieter der WZK Applikation und webseitenbasierten Kommunikationsplattform\n\n    für Patienten zu den Waldburg-Zeil Kliniken ist die\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in">\n\n    Waldburg-Zeil Kliniken GmbH &amp; Co. KG&nbsp;<br />Zentrale&nbsp;<br />Riedstraße\n\n    16&nbsp;<br />88316 Isny-Neutrauchburg &nbsp;\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    vertreten durch den Geschäftsführer:\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">Ellio Schneider</p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Email: info@wz-kliniken.de\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Tel.: +49 (0) 7562 71-1135\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Die Nutzung der Kommunikationsplattformen richtet sich nach diesen\n\n    Nutzungsbedingungen in der jeweils vorliegenden Version. Abweichende\n\n    Vereinbarungen bedürfen der Schriftform.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    <strong>2. Umfang des Dienste-Angebotes</strong>\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Die WZK Applikation und webseitenbasierten Kommunikationsplattform für\n\n    Patienten zu den Waldburg-Zeil Kliniken (im folgenden insgesamt bezeichnet\n\n    als „WZK-App“) bietet Ihnen als Patienten der Waldburg-Zeil Kliniken (im\n\n    folgenden „WZ-Kliniken“) eine digitale Schnittstelle und\n\n    Kommunikationplattform zum Krankenhausinformationssystem (im folgenden\n\n    „KIS“) der WZ-Kliniken. Sie können sich der Mobile App (iOS und Android)\n\n    und/oder der webseitenbasierten Schnittstelle bedienen.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Mit Ihrer Anmeldung bei der WZK-App können Sie den WZ-Kliniken verschiedene\n\n    Gesundheitsdaten und medizinische Unterlagen übermitteln. So etwa Ihre\n\n    Patientenstammdaten, Ihren Anamnesebogen oder einzelne medizinische Befunde.\n\n    Ferner können Sie Ihre Abrechnungen der WZ-Kliniken einsehen. Zudem können\n\n    Sie über die WZK-App auf verschiedene Informationsangebote der WZ-Kliniken\n\n    zugreifen, so etwa Speisepläne, Wegepläne und allgemeine News.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Die WZK-App bietet Ihren behandelnden Ärzten bei den WZ-Kliniken eine\n\n    Kommunikationsplattform an, mit dem diese zu Behandlungszwecken in Ihre\n\n    jeweiligen Gesundheitsdaten, Befunde etc. Einsicht nehmen können und\n\n    wiederum für Sie die Behandlungspläne und -ergebnisse einstellen können.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Die WZK-App bietet Ihnen die Kontrolle über die von Ihnen bei den\n\n    WZ-Kliniken angelegten elektronischen Gesundheitsakte. Sie können jederzeit\n\n    die in dieser Gesundheitsakte eingestellten medizinischen Daten sicher\n\n    speichern, verwalten oder etwa zum Drucken oder externen speichern\n\n    exportieren.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Voraussetzung für die Nutzung dieser Angebote ist, dass Sie sich erfolgreich\n\n    als Nutzer registrieren und anmelden und die WZK-App Sie als Patient der\n\n    WZ-Kliniken identifiziert.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Die WZK-App selbst bietet keine eigenen medizinischen Leistungen, Diagnosen\n\n    oder Therapien an.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Die Waldburg-Zeil Kliniken GmbH &amp; Co. KG ist jederzeit berechtigt, auf\n\n    dem Portal unentgeltlich bereitgestellte Dienste zu ändern, neue Dienste\n\n    unentgeltlich oder entgeltlich verfügbar zu machen und die Bereitstellung\n\n    unentgeltlicher Dienste einzustellen. Die Waldburg-Zeil Kliniken GmbH &amp;\n\n    Co. KG wird hierbei jeweils auf Ihre berechtigten Interessen Rücksicht\n\n    nehmen.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    <strong>3. Nutzerregistrierung und -vertrag</strong>\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Ihre Anmeldung bei der WZK-App setzt voraus, dass Sie gegenwärtig Patient\n\n    der WZ-Kliniken sind oder bereits einen entsprechenden Behandlungsvertrag\n\n    abgeschlossen haben. Um die Angebote der WZK-App nutzen zu können, müssen\n\n    sich für sich einen nutzerspezifischen Account anlegen und sich hierfür mit\n\n    einen Nutzernamen und Passwort registrieren. Die in der Anmeldemaske\n\n    einzugebenden Daten müssen Sie vollständig und wahrheitsgemäß angeben. Bei\n\n    der Registrierung müssen Sie geschäftsfähig sein. Mit Ihrer Registrierung\n\n    kommt ein Nutzungsvertrag mit der Waldburg-Zeil Kliniken GmbH &amp; Co. KG\n\n    zustande, der sich nach diesen Nutzungsbedingungen richtet.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Während des Anmeldeprozesses bei den WZ-Kliniken wird für Sie ein\n\n    nutzerbezogener Zugangscode generiert, über welche Sie im KIS der\n\n    WZ-Kliniken zugeordnet werden. Bei der Registrierung und jeder späteren\n\n    Anmeldung in der WZK-App wird zur Sicherung vor Missbrauch ein spezielles\n\n    Authentifizierungsverfahren zum Matching des Nutzernamens/Passwort mit dem\n\n    Zugangscode angewendet. Sie willigen mit der Nutzung in die hierfür\n\n    erforderliche Erhebung Ihrer Daten zum Zweck der Authentifizierung\n\n    ein.&nbsp;\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Die Nutzung der WZK-App ist für Sie kostenfrei.&nbsp;\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Für die Inanspruchnahme der Leistungen der WZK-App besteht kein\n\n    Rechtsanspruch. Die Waldburg-Zeil Kliniken GmbH &amp; Co. KG ist berechtigt,\n\n    eine Registrierung ohne Angaben von Gründen zu verweigern.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Die WZK Mobile App erhalten Sie über den Google Play Store und den Apple App\n\n    Store. Hierfür müssen Sie sich bei dem jeweiligen App Store registrieren,\n\n    die App downloaden und installieren. Auf die Erhebung, Verarbeitung und\n\n    Nutzung von personenbezogenen Daten auf Grund der Registrierung und der\n\n    Bereitstellung von Downloads aus den jeweiligen App Stores hat die\n\n    Waldburg-Zeil Kliniken GmbH &amp; Co. KG keinen Einfluss. An dieser Stelle\n\n    wird auf die jeweiligen Nutzungsbedingungen und Datenschutzerklärungen des\n\n    jeweiligen Appstores verwiesen.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    <strong>4. Datenerhebung und -verwendung</strong>\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Die WZK-App, bzw. die Waldburg-Zeil Kliniken GmbH &amp; Co. KG, erhebt,\n\n    verarbeitet und verwendet die von Ihnen angegebenen Daten ausschließlich für\n\n    die Abwicklung des geschlossenen Nutzungsvertrages und nur soweit dies für\n\n    die Leistungserfüllung erforderlich und durch gesetzliche Vorschriften\n\n    erlaubt, oder vom Gesetzgeber angeordnet ist. Ohne Ihre vorherige\n\n    Einwilligung werden keine Daten erhoben, verarbeitet, genutzt oder\n\n    weitergegeben. Eine von Ihnen erteilte Einwilligung können Sie jederzeit mit\n\n    Wirkung für die Zukunft widerrufen.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Die bei Ihrer Registrierung von Ihnen eingegebenen persönlichen Daten werden\n\n    nur für die Authentifizierung und das Matching von Nutzername/Passwort kurz\n\n    zwischengespeichert. Sie werden danach an die Server der WZ-Kliniken\n\n    verschlüsselt übermittelt und werden dort für die spätere Anmeldung\n\n    gespeichert.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Wenn Sie medizinische Unterlagen, Gesundheitsdaten, Anamnesebogen, Befunde\n\n    oder ähnliches über die WZK-App an die WZ-Kliniken übermitteln wollen\n\n    („Patient-Klinik-Weg“) und sie zu diesem Zweck über die WZK-App hochladen,\n\n    so werden diese zum Zwecke der Aufbereitung in ein pdf-Dokument auf den\n\n    Servern der WZ-Kliniken zwischengespeichert und sodann verschlüsselt an das\n\n    KIS der WZ-Kliniken weitergeleitet. Das erzeugte pdf-Dokument bleibt dort 14\n\n    Tage gespeichert und wird und danach automatisch und routinemäßig gelöscht.\n\n    Es ist danach nur noch im KIS der WZ-Kliniken gespeichert. Mit der\n\n    Übermittlung willigen Sie in diese Zwischenspeicherung ein.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Wenn Ihnen die WZ-Kliniken medizinische Unterlagen, Befunde aus Ihrer\n\n    dortigen Behandlung oder ähnliche über die WZK-App zur Einsichtnahme, zum\n\n    externen Speichern oder etwa zum Ausdrucken zur Verfügung stellen wollen\n\n    („Klinik-Patient-Weg“), werden die Dokumente zu keinem Zeitpunkt an Dritte\n\n    weitergegeben.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Die WZK-App ist daher eine reine Schnittstelle zur Herstellung der\n\n    Kommunikation zwischen Ihnen als Patient und den WZ-Kliniken. Die WZK-App\n\n    und die Waldburg-Zeil Kliniken GmbH &amp; Co. KG geben zu keinem Zeitpunkt\n\n    Ihre persönlichen und/oder medizinischen Daten an dritte Personen oder\n\n    Stellen weiter, außer den WZ-Kliniken und den sie dort behandelnden Ärzten.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Die Datenübermittlung erfolgt jeweils verschlüsselt und entspricht den\n\n    aktuellen technischen Standards.&nbsp;\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Weiter Informationen zur Nutzerdatenerhebung und -verarbeitung finden Sie in\n\n    der „Datenschutzerklärung“ der webbasierten Kommunikationsplattform und der\n\n    WZK Mobile App.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    <strong>5. Nutzungsrechte</strong>\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Ihnen steht, vorbehaltlich einer erfolgreichen Registrierung und eines\n\n    ungekündigten Vertragsverhältnisses, die Nutzung der WZK-App entsprechend\n\n    des unter 2. beschriebenen Angebotes zu. Es handelt sich um einfache,\n\n    zeitlich beschränkte Nutzungsrechte für private, persönliche und\n\n    nichtkommerzielle Zwecke.&nbsp;\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Die über die WZK-App veröffentlichten Inhalte, Datenbanken, Informationen,\n\n    Bilder und Videos sind grundsätzlich urheberrechtlich oder durch sonstige\n\n    Schutzrechte geschützt und in der Regel Eigentum oder lizenziert von der\n\n    Waldburg-Zeil Kliniken GmbH &amp; Co. KG. Ohne ausdrückliche Zustimmung der\n\n    &nbsp;Waldburg-Zeil Kliniken GmbH &amp; Co. KG ist jede Weitergabe von\n\n    Inhalten untersagt.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Soweit die WZK-App auf Inhalte von Dritten verweist, verweisen wir auf deren\n\n    Urheber- und sonstige Schutzrechte.&nbsp;\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    <strong>6. Nutzerpflichten</strong>\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Sie sind verpflichtet, Ihre Angaben, die für die Bereitstellung der\n\n    Leistungen benötigt werden, vollständig und wahrheitsgemäß anzugeben.\n\n    Sollten sich Ihre Stammdaten, wie Name, Adresse u.ä., ändern, haben Sie\n\n    diese selbstständig in der WZK-App zu aktualisieren.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Sie dürfen das Leistungsangebot der WZK-App nur sachgerecht nutzen. Die\n\n    Waldburg-Zeil Kliniken GmbH &amp; Co. KG weist darauf hin, dass Ihre\n\n    Nutzungsaktivitäten im gesetzlich zulässigen Umfang überwacht werden können.\n\n    Dies beinhaltet ggf. auch die Protokollierung von IP-Verbindungsdaten sowie\n\n    deren Auswertungen bei einem konkreten Verdacht eines Verstoßes gegen die\n\n    vorliegenden Teilnahme- und Nutzungsbedingungen und/oder bei einem konkreten\n\n    Verdacht auf das Vorliegen einer sonstigen rechtswidrigen Handlung oder\n\n    Straftat.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Sie sind verpflichtet, Ihren Benutzernamen und Ihr Passwort für den Zugang\n\n    geheim zu halten, nicht weiterzugeben und auch keine Kenntnisnahme durch\n\n    Dritte zu ermöglichen oder dulden. Bei einem Missbrauch oder Verlust der\n\n    Anmeldedaten oder entsprechendem Verdacht sind sie verpflichtet, dies der\n\n    Waldburg-Zeil Kliniken GmbH &amp; Co. KG unverzüglich anzuzeigen.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    <strong>7. Beendigung des Nutzungsverhältnisses</strong>\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Sie können Ihr Nutzungsverhältnis zur WZK-App jederzeit kündigen/beenden,\n\n    indem Sie Ihre Registrierung für die WZK-App aufheben. Hierzu müssen Sie in\n\n    der WZK-App im Bereich „mein Konto“ den Button „Profil Löschen“\n\n    anklicken.<i>&nbsp;</i>Das zugrunde liegende Vertragsverhältnis mit der\n\n    Waldburg-Zeil Kliniken GmbH &amp; Co. KG endet damit automatisch.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Nach Beendigung Ihres Behandlungsverhältnisses mit den WZ-Kliniken stehen\n\n    bestimmte Nutzungen der WZK-App nicht mehr zur Verfügung. Nach einem Login\n\n    ist keine Verbindung zum KIS der WZK-Kliniken mehr möglich. Ihre Profildaten\n\n    und der Zugangscode bleiben aber für einen möglichen späteren Aufenthalt\n\n    bestehen. Zur weiteren Speicherung Ihrer medizinischen Daten, Unterlagen\n\n    etc. im KIS der WZ-Kliniken nach Beendigung des Behandlungsverhältnisses\n\n    wird auf die bestehenden Datenschutzbestimmungen des KIS verwiesen.&nbsp;\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Die Waldburg-Zeil Kliniken GmbH &amp; Co. KG kann bei einem begründeten\n\n    Verdacht auf eine missbräuchliche Nutzung oder wesentliche\n\n    Vertragsverletzung Ihren Zugang zur WZK-App sperren. Sollte sich der\n\n    Verdacht bestätigen, steht der Waldburg-Zeil Kliniken GmbH &amp; Co. KG ein\n\n    außerordentliches Kündigungsrecht des Nutzungsvertrages zu. Anderenfalls\n\n    wird der Zugang wieder entsperrt.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    <strong>8. Verfügbarkeit der Dienste der WZK-App</strong>\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Die Dienste der WZK-App stehen Ihnen in der Regel 24 Stunden am Tag zur\n\n    Verfügung. In Zeiten, zu denen Wartungsarbeiten am System oder Programm bzw.\n\n    den Datenbanken durchgeführt werden, kann der Zugang zu den Diensten\n\n    eingeschränkt sein. Die Waldburg-Zeil Kliniken GmbH &amp; Co. KG bemüht sich\n\n    um eine möglichst unterbrechungsfreie Nutzbarkeit der Dienste. Jedoch können\n\n    durch technische Störungen (wie zB Unterbrechung der Stromversorgung,\n\n    Hardware- und Softwarefehler, technische Probleme in den Datenleitungen)\n\n    zeitweilige Beschränkungen oder Unterbrechungen auftreten.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    <strong>9. Haftung</strong>\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Sollten Ihnen durch die Nutzung der unentgeltlich zur Verfügung gestellten\n\n    Dienste der WZK-App ein Schaden entstehen, so haftet die Waldburg-Zeil\n\n    Kliniken GmbH &amp; Co. KG nur, soweit Ihr Schaden aufgrund der\n\n    vertragsgemäßen Nutzung der unentgeltlichen Inhalte und/oder Dienste\n\n    entstanden ist, und nur bei Vorsatz und grober Fahrlässigkeit.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Die vorstehende Haftungsbeschränkung gilt nicht im Falle von Arglist, im\n\n    Falle von Körper- bzw. Personenschäden, für die Verletzung von Garantien\n\n    sowie für Ansprüche aus Produkthaftung.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    <strong>10. Änderungen</strong>\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Die Waldburg-Zeil Kliniken GmbH &amp; Co. KG behält sich vor, diese\n\n    Nutzungsbedingungen jederzeit mit Wirksamkeit auch innerhalb der bestehenden\n\n    Vertragsverhältnisse zu ändern. Über derartige Änderungen wird die\n\n    Waldburg-Zeil Kliniken GmbH &amp; Co. KG Sie mindestens zwei Wochen vor dem\n\n    geplanten Inkrafttreten der Änderungen in Kenntnis setzen. Sofern Sie nicht\n\n    innerhalb von zwei Wochen ab Zugang der Mitteilung widersprechen und die\n\n    Inanspruchnahme der Dienste auch nach Ablauf der Widerspruchsfrist\n\n    fortsetzen, so gelten die Änderungen ab Fristablauf als wirksam vereinbart.\n\n    Im Falle Ihres Widerspruchs ist die Waldburg-Zeil Kliniken GmbH &amp; Co. KG\n\n    berechtigt, das Vertragsverhältnis fristlos zu beenden, ohne dass Ihnen\n\n    hieraus Ansprüche gegen die Waldburg-Zeil Kliniken GmbH &amp; Co. KG\n\n    entstehen. Wird das Vertragsverhältnis nach dem wirksamen Widerspruch des\n\n    Nutzers fortgesetzt, behalten die bisherigen Nutzungsbedingungen ihre\n\n    Gültigkeit.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    <strong>11. Salvatorische Klausel</strong>\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">\n\n    Sollte eine Bestimmung dieser Nutzungsbedingungen unwirksam sein oder\n\n    werden, so bleibt die Rechtswirksamkeit der übrigen Bestimmungen hiervon\n\n    unberührt. An Stelle der unwirksamen Bestimmung gilt eine wirksame\n\n    Bestimmung als vereinbart, die der von den Parteien gewollten wirtschaftlich\n\n    am nächsten kommt.\n\n  </p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <p style="margin-left: 0in; text-align: justify">(Version 1.0, Stand:…………)</p>\n\n  <p style="margin-left: 0in; text-align: justify">&nbsp;</p>\n\n  <button ion-button (click)="close()">Close</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ger\wzk\front\3 wzk few options3\3 wzk few options\clinic_app_frontend\src\pages\simple-text-modal\simple-text-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], SimpleTextModalPage);
    return SimpleTextModalPage;
}());

//# sourceMappingURL=simple-text-modal.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_statics__ = __webpack_require__(102);
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
  Generated class for the LinkManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LinkManagerProvider = /** @class */ (function () {
    function LinkManagerProvider() {
        // If you create new webform in Drupal, you can retrieve the elements and structure of the webform with this url:
        // (BACKEND_URL)/webform_rest/elements/WEBFORM_NAME?_format=hal_json
        this.webforms = {
            //    "": Info.merge("/webform_rest/checkin_2/elements?_format=hal_json"),
            "": "/rest/app/checkin/template?_format=json",
            saulgau: __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/webform_rest/checkin_2/elements?_format=hal_json"),
            waldsee: __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/webform_rest/checkin_2/elements?_format=hal_json"),
            salzelmen: __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/webform_rest/checkin_2/elements?_format=hal_json"),
            wurzach: __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/webform_rest/checkin_2/elements?_format=hal_json"),
            aplenblick: __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/webform_rest/checkin_2/elements?_format=hal_json"),
            argenta: __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/webform_rest/checkin_2/elements?_format=hal_json"),
            schwabenland: __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/webform_rest/checkin_2/elements?_format=hal_json"),
            niederbayern: __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/webform_rest/checkin_2/elements?_format=hal_json"),
        };
        this.foodMenus = {
            "": __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/api/menu"),
            saulgau: __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/saulgau/api/menu"),
            waldsee: __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/waldsee/api/menu"),
            salzelmen: __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/salzelmen/api/menu"),
            wurzach: __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/wurzach/api/menu"),
            aplenblick: __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/aplenblick/api/menu"),
            argenta: __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/argenta/api/menu"),
            schwabenland: __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/schwabenland/api/menu"),
            niederbayern: __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/niederbayern/api/menu"),
        };
        this.infoIdsLists = {
            "": __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/api/infos/ids/114"),
            saulgau: __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/saulgau/api/infos/ids"),
            waldsee: __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/waldsee/api/infos/ids"),
            salzelmen: __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/salzelmen/api/infos/ids"),
            wurzach: __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/wurzach/api/infos/ids"),
            aplenblick: __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/aplenblick/api/infos/ids"),
            argenta: __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/argenta/api/infos/ids"),
            schwabenland: __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/schwabenland/api/infos/ids"),
            niederbayern: __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/niederbayern/api/infos/ids"),
            "111": __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/api/infos/ids/111", false),
            "114": __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/api/infos/ids/114", false),
        };
        this.newsList = {
            "": "https://www.wz-kliniken.de/news-rss.php?section=2&kliniken=8&linkprefix=https://www.rehabilitationsklinik-bad-saulgau.de/154.html?id=",
            saulgau: "https://www.wz-kliniken.de/news-rss.php?section=2&kliniken=8&linkprefix=https://www.rehabilitationsklinik-bad-saulgau.de/154.html?id=",
            waldsee: "https://www.wz-kliniken.de/news-rss.php?section=2&kliniken=7&linkprefix=https://www.klinik-im-hofgarten.de/154.html?id=",
            salzelmen: "https://www.wz-kliniken.de/news-rss.php?section=2&kliniken=11&linkprefix=https://www.rehaklinik-bad-salzelmen.de/154.html?id=",
            wurzach: "https://www.wz-kliniken.de/news-rss.php?section=2&kliniken=6&linkprefix=https://www.rehabilitationsklinik-bad-wurzach.de/154.html?id=",
            aplenblick: "https://www.wz-kliniken.de/news-rss.php?section=2&kliniken=3&linkprefix=https://www.klinik-alpenblick.de/154.html?id=",
            argenta: "https://www.wz-kliniken.de/news-rss.php?section=2&kliniken=2&linkprefix=https://www.argentalklinik.de/154.html?id=",
            schwabenland: "https://www.wz-kliniken.de/news-rss.php?section=2&kliniken=1&linkprefix=https://www.klinik-schwabenland.de/154.html?id=",
            niederbayern: "https://www.wz-kliniken.de/news-rss.php?section=2&kliniken=10&linkprefix=https://www.klinik-niederbayern.de/154.html?id=",
        };
    }
    LinkManagerProvider.prototype.getNews = function (clinic) {
        if (clinic === void 0) { clinic = ""; }
        console.log("getNews is: " + this.newsList[clinic]);
        return this.newsList[clinic] == undefined
            ? this.newsList[""]
            : this.newsList[clinic];
    };
    LinkManagerProvider.prototype.getRegistrierungsanweisungenAsJSON = function () {
        return __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/registrierungsanweisungen?_format=json", false);
    };
    LinkManagerProvider.prototype.getNutungsbedingungenAsHalJSON = function () {
        console.log(__WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/nutzungsbedingungen?_format=hal_json", false));
        return __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/nutzungsbedingungen?_format=hal_json", false);
    };
    LinkManagerProvider.prototype.getDatenschutzAsJSON = function () {
        return __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/datenschutz?_format=json", false);
    };
    LinkManagerProvider.prototype.getWebformAsHalJSON = function (clinic) {
        if (clinic === void 0) { clinic = ""; }
        console.log("getWebformAsHalJSON is: " + this.webforms[clinic]);
        return this.webforms[clinic] == undefined
            ? this.webforms[""]
            : this.webforms[clinic];
    };
    LinkManagerProvider.prototype.getInfoIdsList = function (clinic) {
        if (clinic === void 0) { clinic = ""; }
        console.log("getInfoIdsList is: " + this.infoIdsLists[clinic]);
        return this.infoIdsLists[clinic] == undefined
            ? this.infoIdsLists[""]
            : this.infoIdsLists[clinic];
    };
    LinkManagerProvider.prototype.getMenu = function (clinic) {
        if (clinic === void 0) { clinic = ""; }
        console.log("getMenu is: " + this.foodMenus[clinic]);
        return this.foodMenus[clinic] == undefined
            ? this.foodMenus[""]
            : this.foodMenus[clinic];
    };
    /**
     * @param subFoodsIds String of IDs combined with the plus symbol
     */
    LinkManagerProvider.prototype.getMenuFoodAdditionals = function (subFoodsIds) {
        return __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/menu/food/additionals" + "/" + subFoodsIds, false);
    };
    /**
     *
     * @param ids String of IDs combined with the plus symbol
     */
    LinkManagerProvider.prototype.getInfos = function (ids) {
        return __WEBPACK_IMPORTED_MODULE_1__services_statics__["a" /* Info */].merge("/api/infos" + ids, false);
    };
    LinkManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LinkManagerProvider);
    return LinkManagerProvider;
}());

//# sourceMappingURL=link-manager.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__storage_manager_storage_manager__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_is_cordova_available__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_statics__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gui_manager_gui_manager__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__platform_manager_platform_manager__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var OtpProvider = /** @class */ (function () {
    function OtpProvider(http, fileNative, alertCtrl, storage, guiManager, platformUtils, loadingController) {
        this.http = http;
        this.fileNative = fileNative;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.guiManager = guiManager;
        this.platformUtils = platformUtils;
        this.loadingController = loadingController;
        this.keyFile = "";
        this.ready = false;
        this.tempFileName = "temp.crypt";
        this.keyTemplate = "key.template";
    }
    /**
     * Based on the platform, it returns if this device should not use
     * the OTP encryption/decryption algorithm.
     * Returns true if the encryption shouldn't be used, false if it should be used.
     */
    OtpProvider.prototype.shouldNotRunOTP = function () {
        //return (this.platformUtils.isWebApplication()) || (this.platformUtils.isMobileApplication() && this.platformUtils.isRunningIOS());
        return this.platformUtils.isWebApplication();
    };
    OtpProvider.prototype.downloadOtpKey = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = function (success) { }; }
        var me = this;
        var headersObject = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* ResponseContentType */].Blob });
        console.log("Starting download of otp key");
        var loadingMsg = this.loadingController.create({
            content: "Die Sicherheitsschlüsseldatei wird gerade heruntergeladen.<br>" +
                "Dies kann je nach Netzwerkverbindung einige Zeit dauern.<br>" +
                "Bitte warten Sie...",
            enableBackdropDismiss: false,
            spinner: "ios"
        });
        loadingMsg.present().then(function (msgThen) {
            console.log("message then", msgThen);
        }).catch(function (msgCathc) {
            console.log("msg catch", msgCathc);
        });
        /*

        let message = this.alertCtrl.create({
          title: 'Herunterladen von Sicherheitsschlüsseln',
          message: "Die Sicherheitsschlüsseldatei wird gerade heruntergeladen.\n" +
            "Dies kann je nach Netzwerkverbindung einige Zeit dauern.\n" +
            "Bitte warten Sie...",
          buttons: [],
          enableBackdropDismiss: false
        });
        message.present().then(msgThen => {
          console.log("message then", msgThen)
        }).catch(msgCathc => {
          console.log("msg catch", msgCathc)
        })*/
        /*
        this.navCtrl.setRoot(InProgressPage, {title: "Herunterladen von Sicherheitsschlüsseln", message: "Die Sicherheitsschlüsseldatei wird gerade heruntergeladen.\n" +
            "Dies kann je nach Netzwerkverbindung einige Zeit dauern.\n" +
            "Bitte warten Sie..."}).catch( catchRej => {
              console.log("Catching the rejection of the Inprogress page...");
        }).then(thenProgress => {
          console.log("Cathcing the then of the Inprogress page....");
        });
        */
        me.http.get(__WEBPACK_IMPORTED_MODULE_7__services_statics__["a" /* Info */].testOtpKeyUrl, headersObject).toPromise().then(function (content) {
            console.log("Finished download of otp key.");
            me.fileNative.writeFile(me.fileNative.dataDirectory, me.keyTemplate, content.blob(), { replace: true }).then(function (_) {
                loadingMsg.dismiss().then(function (thenDismss) {
                    console.log("message dimiss then:", thenDismss);
                }).catch(function (dismissCathc) {
                    console.log("message dismiss", dismissCathc);
                });
                me.storage.save("otp_downloaded", true, function (x) {
                    me.ready = true;
                    me.resetKey(function () {
                        //alert("Der sicherheitsschlüssel wurde heruntergeladen!")
                        _this.guiManager.showPopupMessage("Erfolgreicher Download", "Der sicherheitsschlüssel wurde heruntergeladen!", function () { callback(true); }, false);
                    });
                });
            }).catch(function (saveRej) {
                loadingMsg.dismiss().then(function (thenDismss) {
                    console.log("message dimiss then:", thenDismss);
                }).catch(function (dismissCathc) {
                    console.log("message dismiss", dismissCathc);
                });
                console.log("Error while saving the file:", saveRej);
                _this.guiManager.showPopupMessage("Download fehlgeschlagen", "Fehler beim Speichern der Datei:\n" + JSON.stringify(saveRej), function () { callback(false); }, false);
            });
        }).catch(function (rej) {
            console.log("Http download of OTP key failed. Rejection: ", rej);
            _this.guiManager.showPopupMessage("Download fehlgeschlagen", "Fehler beim Speichern der Datei:\n" + JSON.stringify(rej), function () { callback(false); }, false);
            loadingMsg.dismiss().then(function (thenDismss) {
                console.log("message dimiss then:", thenDismss);
            }).catch(function (dismissCathc) {
                console.log("message dismiss", dismissCathc);
            });
        });
        /*
        me.http.get(Info.testOtpKeyUrl, headersObject).subscribe(content => {
          console.log("Finished download of otp key.");
          me.fileNative.writeFile(me.fileNative.dataDirectory, "key.template", content.blob()).then(_ => {
            me.storage.save("otp_downloaded", true, (x) => {
              me.ready = true;
              me.resetKey(() => {
                //alert("Der sicherheitsschlüssel wurde heruntergeladen!")
                message.dismiss().then(thenDismss => {
                  console.log("message dimiss then:", thenDismss)
                }).catch(dismissCathc => {
                  console.log("message dismiss", dismissCathc)
                })
                this.guiManager.showPopupMessage("Erfolgreicher Download", "Der sicherheitsschlüssel wurde heruntergeladen!", ()=>{}, false)
              })

            });
          })
        })*/
    };
    OtpProvider.prototype.checkOtpTestFile = function (callback) {
        if (callback === void 0) { callback = function (fileExists) { }; }
        var me = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_6__services_is_cordova_available__["a" /* isCordovaAvailable */])()) {
            if (this.platformUtils.isMobileApplication()) {
                {
                    this.storage.contains("otp_downloaded", function (c) {
                        if (!c) {
                            var confirm_1 = me.alertCtrl.create({
                                title: 'Sicherheitsschlüssel Herunterladen?',
                                message: 'Um Daten mit Ihrer Klinik zu teilen, benötigen Sie einen Sicherheitsschlüssel. Dadurch garantieren wir Ihnen den verlässlichen Schutz Ihrer vertraulichen Informationen.',
                                buttons: [{
                                        text: 'Später',
                                        handler: function () {
                                            callback(false);
                                        }
                                    }, {
                                        text: 'Herunterladen',
                                        handler: function () {
                                            me.downloadOtpKey(function (success) {
                                                callback(success);
                                            });
                                        }
                                    }],
                                enableBackdropDismiss: false
                            });
                            confirm_1.present();
                        }
                        else {
                            if (c == true)
                                callback(true);
                            else {
                                callback(false);
                            }
                        }
                    });
                }
            }
            else {
                callback(false);
            }
        }
        else {
            callback(false);
        }
    };
    OtpProvider.prototype.resetKey = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        var me = this;
        var next = function () {
            me.fileNative.copyFile(me.fileNative.dataDirectory, me.keyTemplate, me.fileNative.dataDirectory, "key.otp").then(function (_) {
                if (callback != null)
                    callback();
            }).catch(function (err) {
                console.log("Could not copy File: " + JSON.stringify(err));
                _this.guiManager.showPopupMessage("OTP key could not be used", "The OTP key could not be copied internally to encrypt the data. Please re-try. If the problem persists, contact the application's support. Error: " + JSON.stringify(err));
            });
        };
        me.fileNative.checkFile(me.fileNative.dataDirectory, "key.otp").then(function (contains) {
            if (contains) {
                me.fileNative.removeFile(me.fileNative.dataDirectory, "key.otp").then(function (_) {
                    next();
                }).catch(function (err) {
                    console.log("Could not delete: " + JSON.stringify(err));
                });
            }
            else {
                next();
            }
        }).catch(function (err) {
            console.log("Could not check File: " + JSON.stringify(err));
            next();
        });
    };
    OtpProvider.prototype.getDefaultOTPKeyPath = function () {
        return this.fileNative.dataDirectory.substr(7) + "/key.otp";
    };
    OtpProvider.prototype.decrypt = function (keyPath, filePath, outPath, successCallback, errorCallback) {
        console.log("OTP decrypt method has been called with arguments:", "Keypath: " + keyPath, "Filepath: " + filePath, "Output path: " + outPath);
        return cordova.plugins.OTP.decrypt(keyPath, filePath, outPath, successCallback, errorCallback);
    };
    OtpProvider.prototype.encrypt = function (keyPath, filePath, outPath, successCallback, errorCallback) {
        console.log("OTP encrypt method has been called with arguments:", "Keypath: " + keyPath, "Filepath: " + filePath, "Output path: " + outPath);
        return cordova.plugins.OTP.encrypt(keyPath, filePath, outPath, successCallback, errorCallback);
    };
    /**
     * Data should be in base64 format.
     * Callback should be a function with 2 parameters, first one is a boolean and indicates if the process was successful and the second one has the decrypted data or an error message in case of an error.
     * @param base64data
     * @param callback
     */
    OtpProvider.prototype.decryptBase64DataAndGetBase64 = function (base64data, callback) {
        var _this = this;
        var returnSuccess = true;
        var returnDecryptedData = "";
        var workingFileDirectory = this.fileNative.dataDirectory;
        var tempFilename = "file.dec.temp.crypt";
        var tempDecryptedFilename = "file.dec.temp";
        var fileDirectoryForDecryption = workingFileDirectory.substr(7);
        var base64ToArrayBuffer = function (base64) {
            console.log("Converting base 64 to array buffer...");
            var binary_string = atob(base64);
            var len = binary_string.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                bytes[i] = binary_string.charCodeAt(i);
            }
            return bytes.buffer;
        };
        var encryptedData = base64ToArrayBuffer(base64data);
        var createTempFileWithData = function (data, folder, file, callback) {
            _this.fileNative.writeFile(folder, file, data, { replace: true }).then(function (written) {
                if (written) {
                    console.log("Data were successfully written in the temp file " + file + " on location: " + folder);
                    callback();
                }
                else {
                    console.log("Writing the data to the temp file " + file + " on location: " + folder + " was not successful: ", written);
                    if (returnSuccess == true) {
                        returnSuccess = false;
                        returnDecryptedData = "OTP_Decrypt: Unable to create temp file: " + file + " at " + folder + " . Error message: " + written;
                    }
                    callback();
                }
            }, function (rej) {
                console.log("Rejection while trying to write the data to the temp file for creating decrypted data: ", rej);
                if (returnSuccess == true) {
                    returnSuccess = false;
                    returnDecryptedData = "OTP_Decrypt: Rejection: Unable to create temp file: " + file + " at " + folder + " . Error message: " + rej;
                }
                callback();
            }).catch(function (exc) {
                console.log("Exception while trying to write the data to the temp file for creating decrypted data: ", exc);
                if (returnSuccess == true) {
                    returnSuccess = false;
                    returnDecryptedData = "OTP_Decrypt: Exception: Unable to create temp file: " + file + " at " + folder + " . Error message: " + exc;
                }
                callback();
            });
        };
        var decryptFileWithData = function (folder, inputFile, outputFile, callback) {
            _this.decrypt(_this.getDefaultOTPKeyPath(), folder + inputFile, folder + outputFile, function (decryptionSuccess) {
                console.log("OTP decrypt success: " + decryptionSuccess);
                callback();
            }, function (error) {
                if (returnSuccess == true) {
                    returnSuccess = false;
                    returnDecryptedData = "OTP_Decrypt: Error when decrypting the data. Error message: " + error;
                }
                callback();
            });
        };
        var deleteFile = function (folder, filename, callbackSuccess, callbackError) {
            if (callbackSuccess === void 0) { callbackSuccess = function (success) { console.log("Deletion of the file " + filename + " was: ", success); }; }
            if (callbackError === void 0) { callbackError = function (error) { console.log("Error while deleting file " + filename + ":", error); }; }
            _this.fileNative.removeFile(folder, filename).then(function (success) {
                callbackSuccess(success);
            }, function (rej) {
                callbackError(rej);
            }).catch(function (exc) {
                callbackError(exc);
            });
        };
        var readDecryptedData = function (fileDirectory, filename, callback) {
            _this.fileNative.checkFile(workingFileDirectory, filename).then(function (_) {
                _this.fileNative.readAsDataURL(fileDirectory, filename).then(function (encryptedData) {
                    if (encryptedData) {
                        returnDecryptedData = encryptedData.substring(encryptedData.indexOf("base64,") + 7);
                        callback();
                    }
                    else {
                        if (returnSuccess == true) {
                            returnSuccess = false;
                            returnDecryptedData = "OTP_Decrypt: Error when reading decrypting data from file: Error message: " + encryptedData;
                        }
                        callback();
                    }
                }, function (rej) {
                    if (returnSuccess == true) {
                        returnSuccess = false;
                        returnDecryptedData = "OTP_Decrypt: Rejection: Error when reading decrypting data from file. Error message: " + rej;
                    }
                    callback();
                }).catch(function (exc) {
                    if (returnSuccess == true) {
                        returnSuccess = false;
                        returnDecryptedData = "OTP_Decrypt: Exception: Error when reading decrypting data from file. Error message: " + exc;
                    }
                    callback();
                });
            }, function (rej) {
                if (returnSuccess == true) {
                    returnSuccess = false;
                    returnDecryptedData = "OTP_Decrypt: Rejection: Decrypted file was not created. Error message: " + rej;
                }
                callback();
            }).catch(function (exc) {
                if (returnSuccess == true) {
                    returnSuccess = false;
                    returnDecryptedData = "OTP_Decrypt: Exception: Decrypted file was not created. Error message: " + exc;
                }
                callback();
            });
        };
        this.resetKey(function () {
            _this.fileNative.checkFile(workingFileDirectory, tempDecryptedFilename).then(function (_) {
                _this.fileNative.removeFile(workingFileDirectory, tempDecryptedFilename).then(function (deleted) {
                    if (deleted) {
                        console.log("Encrypted Temp file for DEC was deleted. Trying to create the encrypted temp file...");
                        createTempFileWithData(encryptedData, workingFileDirectory, tempFilename, function () {
                            decryptFileWithData(fileDirectoryForDecryption, tempFilename, tempDecryptedFilename, function () {
                                deleteFile(workingFileDirectory, tempFilename);
                                readDecryptedData(workingFileDirectory, tempDecryptedFilename, function () {
                                    deleteFile(workingFileDirectory, tempDecryptedFilename);
                                    callback(returnSuccess, returnDecryptedData);
                                });
                            });
                        });
                    }
                }).catch(function (rej) {
                    if (returnSuccess == true) {
                        returnSuccess = false;
                        returnDecryptedData = "OTP_Decrypt: Rejection: Error when trying to re-create temp file. Error message: " + rej;
                    }
                    callback(returnSuccess, returnDecryptedData);
                    console.log("Trying to delete the temp encrypted file, but exception occured:", rej);
                });
            }).catch(function (rej) {
                console.log("No Encrypted Temp file for DEC probably exist with that name. Trying to create the encrypted temp file...");
                createTempFileWithData(encryptedData, workingFileDirectory, tempFilename, function () {
                    decryptFileWithData(fileDirectoryForDecryption, tempFilename, tempDecryptedFilename, function () {
                        deleteFile(workingFileDirectory, tempFilename);
                        readDecryptedData(workingFileDirectory, tempDecryptedFilename, function () {
                            deleteFile(workingFileDirectory, tempDecryptedFilename);
                            callback(returnSuccess, returnDecryptedData);
                        });
                    });
                });
            });
        });
    };
    /**
     * Data preferably should be in base64 format.
     * Callback should be a function with 2 parameters, first one is a boolean and indicates if the process was successful and the second one has the encrypted data or an error message in case of an error.
     * @param data
     * @param callback
     */
    OtpProvider.prototype.encryptDataAndGetBase64 = function (data, callback) {
        var _this = this;
        var returnSuccess = true;
        var returnEncryptedData = "";
        var workingFileDirectory = this.fileNative.dataDirectory;
        var tempFilename = "file.temp";
        var tempEncryptedFilename = "file.temp.crypt";
        var fileDirectoryForEncryption = workingFileDirectory.substr(7);
        var createTempFileWithData = function (data, folder, file, callback) {
            _this.fileNative.writeFile(folder, file, data, { replace: true }).then(function (written) {
                if (written) {
                    console.log("Data were successfully written in the temp file " + file + " on location: " + folder);
                    callback();
                }
                else {
                    console.log("Writing the data to the temp file " + file + " on location: " + folder + " was not successful: ", written);
                    console.log("Data are: ", data);
                    if (returnSuccess == true) {
                        returnSuccess = false;
                        returnEncryptedData = "OTP_Encrypt: Unable to create temp file: " + file + " at " + folder + " . Error message: " + written;
                    }
                    callback();
                }
            }, function (rej) {
                console.log("Rejection while trying to write the data to the temp file for creating encrypted data: ", rej);
                if (returnSuccess == true) {
                    returnSuccess = false;
                    returnEncryptedData = "OTP_Encrypt: Rejection: Unable to create temp file: " + file + " at " + folder + " . Error message: " + rej;
                }
                callback();
            }).catch(function (exc) {
                console.log("Exception while trying to write the data to the temp file for creating encrypted data: ", exc);
                if (returnSuccess == true) {
                    returnSuccess = false;
                    returnEncryptedData = "OTP_Encrypt: Exception: Unable to create temp file: " + file + " at " + folder + " . Error message: " + exc;
                }
                callback();
            });
        };
        var encryptFileWithData = function (folder, inputFile, outputFile, callback) {
            _this.encrypt(_this.getDefaultOTPKeyPath(), folder + inputFile, folder + outputFile, function (encryptionSuccess) {
                console.log("OTP encrypt success: " + encryptionSuccess);
                callback();
            }, function (error) {
                if (returnSuccess == true) {
                    returnSuccess = false;
                    returnEncryptedData = "OTP_Encrypt: Error when encrypting the data. Error message: " + error;
                }
                callback();
            });
        };
        var deleteFile = function (folder, filename, callbackSuccess, callbackError) {
            if (callbackSuccess === void 0) { callbackSuccess = function (success) { console.log("Deletion of the file " + filename + " was: ", success); }; }
            if (callbackError === void 0) { callbackError = function (error) { console.log("Error while deleting file " + filename + ":", error); }; }
            _this.fileNative.removeFile(folder, filename).then(function (success) {
                callbackSuccess(success);
            }, function (rej) {
                callbackError(rej);
            }).catch(function (exc) {
                callbackError(exc);
            });
        };
        var readEncryptedData = function (fileDirectory, filename, callback) {
            _this.fileNative.checkFile(workingFileDirectory, filename).then(function (_) {
                _this.fileNative.readAsDataURL(fileDirectory, filename).then(function (encryptedData) {
                    if (encryptedData) {
                        returnEncryptedData = encryptedData.substring(encryptedData.indexOf("base64,") + 7);
                        callback();
                    }
                    else {
                        if (returnSuccess == true) {
                            returnSuccess = false;
                            returnEncryptedData = "OTP_Encrypt: Error when reading encrypting data from file: Error message: " + encryptedData;
                        }
                        callback();
                    }
                }, function (rej) {
                    if (returnSuccess == true) {
                        returnSuccess = false;
                        returnEncryptedData = "OTP_Encrypt: Rejection: Error when reading encrypting data from file. Error message: " + rej;
                    }
                    callback();
                }).catch(function (exc) {
                    if (returnSuccess == true) {
                        returnSuccess = false;
                        returnEncryptedData = "OTP_Encrypt: Exception: Error when reading encrypting data from file. Error message: " + exc;
                    }
                    callback();
                });
            }, function (rej) {
                if (returnSuccess == true) {
                    returnSuccess = false;
                    returnEncryptedData = "OTP_Encrypt: Rejection: Encrypted file was not created. Error message: " + rej;
                }
                callback();
            }).catch(function (exc) {
                if (returnSuccess == true) {
                    returnSuccess = false;
                    returnEncryptedData = "OTP_Encrypt: Exception: Encrypted file was not created. Error message: " + exc;
                }
                callback();
            });
        };
        this.resetKey(function () {
            _this.fileNative.checkFile(workingFileDirectory, tempEncryptedFilename).then(function (_) {
                _this.fileNative.removeFile(workingFileDirectory, tempEncryptedFilename).then(function (deleted) {
                    if (deleted) {
                        console.log("Enc Temp file was deleted. Trying to create the encrypted temp file...");
                        createTempFileWithData(data, workingFileDirectory, tempFilename, function () {
                            encryptFileWithData(fileDirectoryForEncryption, tempFilename, tempEncryptedFilename, function () {
                                deleteFile(workingFileDirectory, tempFilename);
                                readEncryptedData(workingFileDirectory, tempEncryptedFilename, function () {
                                    deleteFile(workingFileDirectory, tempEncryptedFilename);
                                    callback(returnSuccess, returnEncryptedData);
                                });
                            });
                        });
                    }
                }).catch(function (rej) {
                    if (returnSuccess == true) {
                        returnSuccess = false;
                        returnEncryptedData = "OTP_Encrypt: Rejection: Error when trying to re-create temp file. Error message: " + rej;
                    }
                    callback(returnSuccess, returnEncryptedData);
                    console.log("Trying to delete the temp encrypted file, but exception occured:", rej);
                });
            }).catch(function (rej) {
                console.log("No enc temp file probably exist with that name. Trying to create the encrypted temp file...");
                createTempFileWithData(data, workingFileDirectory, tempFilename, function () {
                    encryptFileWithData(fileDirectoryForEncryption, tempFilename, tempEncryptedFilename, function () {
                        deleteFile(workingFileDirectory, tempFilename);
                        readEncryptedData(workingFileDirectory, tempEncryptedFilename, function () {
                            deleteFile(workingFileDirectory, tempEncryptedFilename);
                            callback(returnSuccess, returnEncryptedData);
                        });
                    });
                });
            });
        });
    };
    /**
     * Checks if the OTP key exists in the device and calls the passed method with either true or false.
     * @param callback
     */
    OtpProvider.prototype.doesKeyExistOnDevice = function (callback) {
        var me = this;
        me.fileNative.checkFile(me.fileNative.dataDirectory, me.keyTemplate).then(function (success) {
            console.log("Success :", success);
            callback(true);
        }, function (rej) {
            console.log("Rejection: ", rej);
            callback(false);
        }).catch(function (exc) {
            console.log("Exception: ", exc);
            callback(true);
        });
    };
    OtpProvider.prototype.copyKeyFromUSB = function () {
        var _this = this;
        this.guiManager.showPromptMessage("Plug in flash drive", "Please plug in the flash drive to your mobile device and press Confirm.", function () {
            _this.findPathOfMainUSBFolder(function (usbDevicesArray) {
                _this.scanContentsOfUSBsAndCopyKey(usbDevicesArray);
            });
        }, function () {
            console.log("User cancelled the refill process.");
        });
    };
    OtpProvider.prototype.copyKeyToInternalAppStorage = function (path, dirname, filename) {
        var _this = this;
        var folderToMoveKeysTo = this.fileNative.dataDirectory;
        var nameOfKey = "key.otp";
        this.fileNative.moveFile(path + "/" + dirname, filename, folderToMoveKeysTo, nameOfKey).then(function (success) {
            console.log("key was moved successfully!", success);
            _this.guiManager.showPopupMessage("Key transfer completed", "The key refill was completed successfully!");
        }, function (rej) {
            console.log("Failed to move the key from the USB to local storage", rej);
            _this.guiManager.showPopupMessage("Key transfer failed", "Failed to move the key from the flash drive to local storage: " + rej.toString());
        }).catch(function (err) {
            console.log("Error moving the key from the USB to the local storage ", err);
            _this.guiManager.showPopupMessage("Key transfer failed", "Failed to move the key from the flash drive to local storage: " + err.toString());
        });
    };
    OtpProvider.prototype.scanContentsOfUSBsAndCopyKey = function (usbArray) {
        var _this = this;
        if (usbArray.length == 0) {
            this.guiManager.showPopupMessage("Flash drive not connected", "No flash drives were detected. Please re-try.");
        }
        var _loop_1 = function (usb) {
            this_1.fileNative.listDir(usb.path, usb.dirName).then(function (success) {
                console.log("USB with ID " + usb.dirName + " has contents: ", success);
                var foundKey = false;
                for (var _i = 0, success_1 = success; _i < success_1.length; _i++) {
                    var entry = success_1[_i];
                    if (entry.isFile && entry.name.endsWith("otp") && foundKey == false) {
                        foundKey = true;
                        _this.copyKeyToInternalAppStorage(usb.path, usb.dirName, entry.name);
                    }
                }
                if (foundKey == false) {
                    _this.guiManager.showPopupMessage("Key not found", "No keys were detected in the connected devices.");
                }
            }, function (rej) {
                console.log("REJ on USB with ID " + usb.dirName + " : ", rej);
            }).catch(function (err) {
                console.log("ERr on USB with ID " + usb.dirName + " : ", err);
            });
        };
        var this_1 = this;
        for (var _i = 0, usbArray_1 = usbArray; _i < usbArray_1.length; _i++) {
            var usb = usbArray_1[_i];
            _loop_1(usb);
        }
    };
    OtpProvider.prototype.findPathOfMainUSBFolder = function (callback) {
        var _this = this;
        var usbDevicesConnected = [];
        this.fileNative.listDir("file:///", "storage").then(function (success) {
            for (var _i = 0, success_2 = success; _i < success_2.length; _i++) {
                var entry = success_2[_i];
                if (entry.isDirectory == true && entry.name != "emulated" && entry.name != "self") {
                    usbDevicesConnected.push({ path: "file:///storage/", dirName: entry.name });
                    console.log("USB ", entry.name, " has been added to the list");
                }
            }
            callback(usbDevicesConnected);
        }, function (rej) {
            _this.guiManager.showPopupMessage("Device unsupported", "This device is not supported for copying keys from flash drives.\n" + rej);
            console.log("rej file:///, storage ", "Contents: ", rej);
        }).catch(function (err) {
            _this.guiManager.showPopupMessage("Device unsupported", "This device is not supported for copying keys from flash drives.\n" + err);
            console.log("err file:///, storage ", "Contents: ", err);
        });
    };
    OtpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__storage_manager_storage_manager__["a" /* StorageManagerProvider */], __WEBPACK_IMPORTED_MODULE_8__gui_manager_gui_manager__["a" /* GuiManagerProvider */], __WEBPACK_IMPORTED_MODULE_9__platform_manager_platform_manager__["a" /* PlatformManagerProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */]])
    ], OtpProvider);
    return OtpProvider;
}());

//# sourceMappingURL=otp.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isCordovaAvailable; });
var isCordovaAvailable = function () {
    return window.cordova;
};
//# sourceMappingURL=is-cordova-available.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return helpModalPage; });
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


var helpModalPage = /** @class */ (function () {
    function helpModalPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    helpModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    helpModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "help-modal",template:/*ion-inline-start:"D:\ger\wzk\front\3 wzk few options3\3 wzk few options\clinic_app_frontend\src\pages\help\help-modal.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>Hilfe</ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div style="margin: 1em">\n\n    <p>\n\n      Um sich im System zu registrieren, müssen Sie Ihre vollständige Fallnummer\n\n      und Ihr Geburtsdatum korrekt eingeben. Hierzu gehen Sie zum Register-Tab\n\n      und geben Ihre Informationen sorgfältig ein. Wenn Sie falsche\n\n      Informationen eingeben, wird Ihre Registrierung nicht durchgeführt! Wenn\n\n      Sie Fragen oder Probleme haben, können Sie uns unter\n\n      <a href="mailto:support@clinetplatformsgmbh.freshdesk.com"\n\n        >support@clinetplatformsgmbh.freshdesk.com</a\n\n      >\n\n      kontaktieren.\n\n    </p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ger\wzk\front\3 wzk few options3\3 wzk few options\clinic_app_frontend\src\pages\help\help-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], helpModalPage);
    return helpModalPage;
}());

//# sourceMappingURL=help-modal.js.map

/***/ })

},[465]);
//# sourceMappingURL=main.js.map