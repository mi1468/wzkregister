webpackJsonp([4],{

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoListPageModule", function() { return InfoListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_list__ = __webpack_require__(758);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InfoListPageModule = /** @class */ (function () {
    function InfoListPageModule() {
    }
    InfoListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__info_list__["a" /* InfoListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__info_list__["a" /* InfoListPage */]),
            ],
        })
    ], InfoListPageModule);
    return InfoListPageModule;
}());

//# sourceMappingURL=info-list.module.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_info_info__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(108);
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
 * Generated class for the InfoListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoListPage = /** @class */ (function () {
    function InfoListPage(drupal, nav) {
        var _this = this;
        this.drupal = drupal;
        this.nav = nav;
        this.loaded = false;
        var me = this;
        this.drupal.getPosts(function (posts) {
            _this.posts = posts;
            me.loaded = true;
        });
    }
    InfoListPage.prototype.openHomePage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    /**
     * Opens a new page/view with the full information of the item specified
     * @param item
     */
    InfoListPage.prototype.itemTapped = function (item) {
        this.nav.push('InfoItemPage', {
            item: item
        });
    };
    InfoListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoListPage');
    };
    InfoListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info-list',template:/*ion-inline-start:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\info-list\info-list.html"*/'<!--\n  Generated template for the InfoListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Infocenter</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="openHomePage()">\n        <img class="homeLogoNavBar" src="assets/home/icon.svg">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-grid *ngIf="!loaded">\n\n    <ion-row>\n      <ion-col col-5></ion-col>\n      <ion-col col-2>\n        <ion-spinner style="font-size: 40px" text-center></ion-spinner>\n      </ion-col>\n      <ion-col col-5></ion-col>\n    </ion-row>\n  </ion-grid>\n  <div style="">\n    <img src="assets/information/information.jpg" width="100%" height="auto" style="display: block; margin-left: auto; margin-right: auto;">\n  </div>\n  <!-- <ion-card *ngFor="let post of posts" (click)="itemTapped(post)">\n		<img *ngIf="!!post.image" src="{{post.image}}"/>\n		<ion-card-content>\n			<h2 class="card-title">{{post.title}}</h2>\n			<p>{{post.brief | trimHtml | truncate : 140}}</p>\n		</ion-card-content>\n	</ion-card> -->\n  <ion-list>\n    <!-- <ion-item  > -->\n    <!-- <img *ngIf="!!post.image" src="{{post.image}}"/> -->\n    <!-- <ion-card-content> -->\n    <button *ngFor="let post of posts" ion-item  (click)="itemTapped(post)">{{post.title}}</button>\n    <!-- <p>{{post.brief | trimHtml | truncate : 140}}</p> -->\n    <!-- </ion-card-content> -->\n    <!-- </ion-item> -->\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\info-list\info-list.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_info_info__["a" /* InfoProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_info_info__["a" /* InfoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], InfoListPage);
    return InfoListPage;
}());

//# sourceMappingURL=info-list.js.map

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_manager_auth_manager__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__link_manager_link_manager__ = __webpack_require__(78);
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
  Generated class for the InfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var InfoProvider = /** @class */ (function () {
    function InfoProvider(http, authProvider, linkManager) {
        this.http = http;
        this.authProvider = authProvider;
        this.linkManager = linkManager;
    }
    InfoProvider.prototype.getPostIds = function (callback) {
        var url = "";
        if (!this.authProvider.isLoggedIn)
            url = this.linkManager.getInfoIdsList("114");
        else {
            if (this.authProvider.clinicName == "")
                url = this.linkManager.getInfoIdsList("111");
            else
                url = this.linkManager.getInfoIdsList(this.authProvider.clinicName);
        }
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (response) {
            if (response["0"] != undefined)
                callback("/" + response["0"].pages.join('+'), response["0"].pages);
            else
                callback("/", []);
        });
    };
    InfoProvider.prototype.getPosts = function (callback) {
        var _this = this;
        var me = this;
        this.getPostIds(function (ids, idsArr) {
            me.http.get(_this.linkManager.getInfos(ids)).map(function (res) { return res.json(); }).subscribe(function (response) {
                var reSorted = [];
                for (var i = 0; i < idsArr.length; i++) {
                    var current = idsArr[i];
                    if (response != undefined)
                        for (var x = 0; x < response.length; x++) {
                            if (response[x].nid[0].value == current) {
                                reSorted.push(response[x]);
                                break;
                            }
                        }
                }
                me.articles = reSorted.map(function (item) { return me.createArticle(item); });
                callback(me.articles);
            });
        });
    };
    InfoProvider.prototype.parseImgSrc = function (item) {
        if (item.field_image.length) {
            return item.field_image[0].url;
        }
        else {
            return "";
        }
        //const match = tag.match(/<img.+src=(?:"|')(.+?)(?:"|')(?:.+?)>/);
        //return match[1];
    };
    InfoProvider.prototype.createArticle = function (item) {
        return {
            id: item.nid[0].value,
            title: item.title[0].value,
            brief: item.body[0].summary,
            image: this.parseImgSrc(item),
            //image: ,
            content: item.body[0].value,
            tags: item.tags
        };
    };
    ;
    InfoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__auth_manager_auth_manager__["a" /* AuthManagerProvider */], __WEBPACK_IMPORTED_MODULE_4__link_manager_link_manager__["a" /* LinkManagerProvider */]])
    ], InfoProvider);
    return InfoProvider;
}());

//# sourceMappingURL=info.js.map

/***/ })

});
//# sourceMappingURL=4.js.map