webpackJsonp([21],{

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItemPageModule", function() { return NewsItemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_item__ = __webpack_require__(798);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewsItemPageModule = /** @class */ (function () {
    function NewsItemPageModule() {
    }
    NewsItemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__news_item__["a" /* NewsItemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__news_item__["a" /* NewsItemPage */]),
            ],
        })
    ], NewsItemPageModule);
    return NewsItemPageModule;
}());

//# sourceMappingURL=news-item.module.js.map

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsItemPage; });
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
 * Generated class for the NewsItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsItemPage = /** @class */ (function () {
    function NewsItemPage(navParams) {
        this.post = navParams.get('item');
    }
    NewsItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsItemPage');
    };
    NewsItemPage.prototype.clickedLinkOfWebsite = function () {
        console.log("The link for this news is: ", this.post.link);
        window.open(this.post.link, '_system', 'location=yes');
    };
    NewsItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news-item',template:/*ion-inline-start:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\news-item\news-item.html"*/'<!--\n  Generated template for the NewsItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{post.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <img *ngIf="!!post.picture" src="{{post.picture}}" style="width: auto; height: auto; max-height: 450px"/>\n\n    <ion-card-content padding>\n      <ion-note color="primary">{{ post.date }}</ion-note>\n\n      <ion-card-title>\n        {{post.title}}\n      </ion-card-title>\n\n\n      <p>{{post.body}}</p>\n      <p *ngIf="post.tags[0] != \'Keine Tags vorhanden\'"><i>[{{post.tags.join(\', \')}}]</i></p>\n      <!-- Add card content here! -->\n    </ion-card-content>\n    <ion-row no-padding="">\n      <ion-col>\n        <button (click)="clickedLinkOfWebsite()" clear="" color="primary" icon-left="" ion-button="" small="" ng-reflect-color="primary"\n                class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-primary"><span\n          class="button-inner">\n         <ion-icon name="link"></ion-icon>\n          Link zur Website\n        </span>\n          <div class="button-effect"></div>\n        </button>\n      </ion-col>\n      <!--ion-col text-center="">\n        <button clear="" color="primary" icon-left="" ion-button="" small="" ng-reflect-color="primary"\n                class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-primary"><span\n          class="button-inner">\n          <ion-icon name="text" role="img" class="icon icon-md ion-md-text" aria-label="text"\n                    ng-reflect-name="text"></ion-icon>\n          4 Kommentare\n        </span>\n          <div class="button-effect"></div>\n        </button>\n      </ion-col-->\n      <ion-col center="" text-center="">\n        <!--ion-note class="note note-md">\n          11.12.2016\n        </ion-note-->\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\news-item\news-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], NewsItemPage);
    return NewsItemPage;
}());

//# sourceMappingURL=news-item.js.map

/***/ })

});
//# sourceMappingURL=21.js.map