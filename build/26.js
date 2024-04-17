webpackJsonp([26],{

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodCardPageModule", function() { return FoodCardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__food_card__ = __webpack_require__(755);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FoodCardPageModule = /** @class */ (function () {
    function FoodCardPageModule() {
    }
    FoodCardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__food_card__["a" /* FoodCardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__food_card__["a" /* FoodCardPage */]),
            ],
        })
    ], FoodCardPageModule);
    return FoodCardPageModule;
}());

//# sourceMappingURL=food-card.module.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_box_page__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_link_manager_link_manager__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_manager_auth_manager__ = __webpack_require__(55);
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
 * Generated class for the FoodCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FoodCardPage = /** @class */ (function () {
    function FoodCardPage(alertCtrl, http, modalCtrl, params, navCtrl, linkManager, authManager) {
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.params = params;
        this.navCtrl = navCtrl;
        this.linkManager = linkManager;
        this.authManager = authManager;
        /**
         * No need to change this([clinicLocations]) anymore as this is the list of the clinics that appear when the user isn't logged in.
         * But the Food module view isn't appearing anymore when the user isn't logged in.
         */
        this.clinicLocations = [
            {
                name: "Bad Saulgau",
                developername: "saulgau"
            },
            {
                name: "Bad Waldsee",
                developername: "waldsee"
            }
        ];
        this.loaded = false;
        this.foodNotes = "";
        this.date = new Date();
        this.today = this.date.getFullYear() + ("0" + (this.date.getMonth() + 1)).slice(-2) + ("0" + this.date.getDate()).slice(-2);
        this.food = [];
        this.card = [];
        this.days = [];
        //  data: any;
        this.day = [];
        this.test = "";
        this.loading = true;
        //config: Config;
        this.slidesOptions = { initialSlide: 0 };
        this.locationOptions = {
            title: 'Klinik wählen',
            subTitle: 'Wählen Sie ihre Klinik aus',
            okText: 'anzeigen',
            cancelText: 'abbrechen',
            placeholder: "Klinik auswählen",
            color: "#5b5b5b"
            // mode: 'md'
        };
        if (authManager.isLoggedIn) {
            if (authManager.clinicName == "waldsee") {
                this.foodNotes = "Allergene und Zusatzstoffe können bei der Küchenleitung eingesehen werden. Änderungen vorbehalten.";
            }
            this.loadData(this.linkManager.getMenu(this.authManager.clinicName), function () {
            });
        }
        else {
            this.loaded = true;
        }
    }
    Object.defineProperty(FoodCardPage.prototype, "selectionToolbarNeeded", {
        /**
         * Returns if toolbar to select clinic is needed
         */
        get: function () {
            return !this.authManager.isLoggedIn;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Changes the selected clinic and loads the menu on the UI.
     * @param selectedClinic
     */
    FoodCardPage.prototype.changeClinic = function (selectedClinic) {
        var me = this;
        me.loaded = false;
        this.loadData(this.linkManager.getMenu(selectedClinic.developername), function () {
            me.loaded = true;
        });
    };
    /**
     * Transitions view and opens the home page
     */
    FoodCardPage.prototype.openHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    // console.log(this.data);
    //  console.log(JSON.stringify(this.day));
    // var dayToArray = this.day;
    // this.days = Object.keys(dayToArray).map(key => dayToArray[key]);
    // console.log(dayToArray);
    //  console.log(this.day);
    /**
     * Does refresh the data of the view.
     * @param refresher
     */
    FoodCardPage.prototype.doRefresh = function (refresher) {
        this.loadData(this.linkManager.getMenu(this.authManager.clinicName), function () {
            refresher.complete();
        });
    };
    /**
     * Fetches and loads the data from the backend
     * @param url
     * @param callback
     */
    FoodCardPage.prototype.loadData = function (url, callback) {
        var _this = this;
        var me = this;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (response) {
            _this.data = response;
            console.log("Menu data are: ", _this.data);
            _this.day = [];
            function getDayOfWeek(date) {
                var dayOfWeek = new Date(date).getDay();
                return isNaN(dayOfWeek) ? null : ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'][dayOfWeek];
            }
            function compare(a, b) {
                if (a.day < b.day)
                    return -1;
                if (a.day > b.day)
                    return 1;
                return 0;
            }
            var keys = [];
            var fields = [];
            // This is only to needed to properly show the title from each food on each menu card
            var subFoodsIds = new Set();
            for (var i = 0; i != _this.data.length; i++) {
                var menuCardData = _this.data[i];
                if (menuCardData == null || menuCardData === 'undefined')
                    continue;
                var dates = menuCardData.date.split("          ");
                var food = menuCardData.title.split(", ");
                menuCardData.food = food;
                menuCardData.time = dates[0].substr(11, 5) + ' - ' + dates[0].substr(-13, 5);
                for (var _i = 0, _a = menuCardData.food_ids; _i < _a.length; _i++) {
                    var oneSubFoodId = _a[_i];
                    subFoodsIds.add(oneSubFoodId);
                }
                for (var j = 0; j != dates.length; j++) {
                    var DyKey = new Date(dates[j].substr(0, 19));
                    var date = ("0" + DyKey.getDate()).slice(-2) + "." + ("0" + (DyKey.getMonth() + 1)).slice(-2) + "." + DyKey.getFullYear();
                    var dateKey = "" + DyKey.getFullYear() + ("0" + (DyKey.getMonth() + 1)).slice(-2) + ("0" + DyKey.getDate()).slice(-2);
                    if (keys.indexOf(dateKey) == -1) {
                        keys.push(dateKey);
                        var toPush = { day: dateKey, date: date, dow: getDayOfWeek(DyKey), data: [], };
                        toPush.data.push(menuCardData);
                        fields.push(toPush);
                    }
                    else {
                        for (var _b = 0, fields_1 = fields; _b < fields_1.length; _b++) {
                            var curr = fields_1[_b];
                            if (curr.day == dateKey) {
                                var found = false;
                                for (var _c = 0, _d = curr.data; _c < _d.length; _c++) {
                                    var m = _d[_c];
                                    if (m.nid == menuCardData.nid) {
                                        found = true;
                                        break;
                                    }
                                }
                                if (!found)
                                    curr.data.push(menuCardData);
                                if (found) {
                                }
                                break;
                            }
                        }
                    }
                }
            }
            // only 2 Weeks
            _this.day = fields.sort(compare).slice(0, 14);
            for (var _e = 0, fields_2 = fields; _e < fields_2.length; _e++) {
                var field = fields_2[_e];
                var data = field.data;
                data.sort(function (a, b) {
                    return parseInt(a.time.substr(0, 2)) - parseInt(b.time.substr(0, 2));
                });
            }
            console.log("14 days: ", _this.day);
            // The below block is in order to fix the food array which should contain the titles of the foods for each card
            var arraySubFoodIds = Array.from(subFoodsIds);
            _this.http.get(_this.linkManager.getMenuFoodAdditionals(arraySubFoodIds.join('+'))).map(function (res) { return res.json(); }).subscribe(function (subFoods) {
                var titlesOfSubFoodObject = Object(); // This will be a mapping (key, value) => (nid, {title: "actual title"})
                for (var _i = 0, subFoods_1 = subFoods; _i < subFoods_1.length; _i++) {
                    var subFood = subFoods_1[_i];
                    titlesOfSubFoodObject["" + subFood.nid] = { title: subFood.title };
                }
                for (var _a = 0, _b = _this.day; _a < _b.length; _a++) {
                    var oneDay = _b[_a];
                    for (var _c = 0, _d = oneDay["data"]; _c < _d.length; _c++) {
                        var oneMenu = _d[_c];
                        var newFoodArray = [];
                        for (var _e = 0, _f = oneMenu.food_ids; _e < _f.length; _e++) {
                            var foodNid = _f[_e];
                            if (titlesOfSubFoodObject[foodNid] != undefined) {
                                newFoodArray.push(titlesOfSubFoodObject[foodNid].title);
                            }
                            else {
                                console.log("Nid doesn't exist: " + foodNid);
                            }
                        }
                        oneMenu.food = newFoodArray;
                    }
                }
                callback();
                me.loaded = true;
            });
            //  refresher.complete();
            /*  for (let menuCardData of this.data) {
             if (menuCardData == null || menuCardData === 'undefined') continue;
             //var day = {};
             var date = new Date(menuCardData.date.trim());
             // var monthDayKey ="" + date.getFullYear() +  date.getMonth() + date.getDate();
             var monthDayKey = date.getDate();
      
             var data = [];
             data.push(menuCardData);
             this.day.push({data: data, day: menuCardData.date.trim()});
             //this.day = day;
             }
      
             for (let menuCardData of this.data) {
             //console.log(menuCardData);
             //  var day = {};
             var date = new Date(menuCardData.date.trim());
             //  console.log(date.parse(menuCardData.date));
             //        var monthDayKey = "" + date.getFullYear() + date.getMonth() + date.getDate();
             var monthDayKey = "" + date.getDate();
      
             this.day[monthDayKey].day = ;
             this.day[monthDayKey].data.push(menuCardData);
             //this.day = day;
             } */
            //
            //  console.log(this.day);
            //}
            //console.log("Menu data are: ", this.data);
            //console.log("Menu this.day: ", this.day);
        });
    };
    Object.defineProperty(FoodCardPage.prototype, "dataR", {
        get: function () {
            return this.day;
        },
        enumerable: false,
        configurable: true
    });
    FoodCardPage.prototype.onIonDrag = function (event) {
        this.swiper = event;
        this.swiper.lockSwipes();
    };
    /**
     * Returns if the slide is the last one
     */
    FoodCardPage.prototype.isEnd = function () {
        return this.slides.isEnd();
    };
    /**
     * Returns if the slide is the first one
     */
    FoodCardPage.prototype.isBeginning = function () {
        return this.slides.isBeginning();
    };
    /**
     * Changes the UI and goes to the next slide (day)
     */
    FoodCardPage.prototype.slideNext = function () {
        if (this.swiper) {
            this.swiper.unlockSwipes();
        }
        this.slides.slideNext();
    };
    /**
     * Changes the UI and goes to the previous slide (day)
     */
    FoodCardPage.prototype.slidePrev = function () {
        if (this.swiper) {
            this.swiper.unlockSwipes();
        }
        this.slides.slidePrev();
    };
    /**
     * Prompts user to order the food.
     * NOT IMPLEMENTED FULLY?!
     * @param menu
     */
    FoodCardPage.prototype.doOrder = function (menu) {
        var _this = this;
        var radioAlert = this.alertCtrl.create();
        radioAlert.setTitle('Möchten Sie dieses Essen vorbestellen?');
        for (var i = 0; i != menu.food.length; i++) {
            radioAlert.addInput({
                type: 'checkbox',
                label: menu.food[i],
                value: menu.food_ids[i],
                checked: true
            });
        }
        radioAlert.addButton('Abbrechen');
        radioAlert.addButton({
            text: "Vorbestellen",
            handler: function (data) {
                console.log('Radio data:', data);
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
            }
        });
        radioAlert.present().then(function () {
            _this.testRadioOpen = true;
        });
    };
    /**
     * Prompts user for rating the food
     */
    FoodCardPage.prototype.doRadioAlert = function () {
        var _this = this;
        var radioAlert = this.alertCtrl.create();
        radioAlert.setTitle('Wie hat Ihnen das Menü geschmeckt?');
        radioAlert.addInput({
            type: 'radio',
            label: 'Hervorragend',
            value: 'Hervorragend',
            checked: true
        });
        radioAlert.addInput({
            type: 'radio',
            label: 'Gut',
            value: 'Gut'
        });
        radioAlert.addInput({
            type: 'radio',
            label: 'Ausreichend',
            value: 'Ausreichend'
        });
        radioAlert.addInput({
            type: 'radio',
            label: 'Nicht gut',
            value: 'not-good'
        });
        // radioAlert.addInput({
        //   type: 'text',
        //   label: 'Kommentar',
        //   value: 'comment'
        // });
        radioAlert.addButton('Abbrechen');
        radioAlert.addButton({
            text: 'Speichern',
            handler: function (data) {
                console.log('Radio data:', data);
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
            }
        });
        radioAlert.present().then(function () {
            _this.testRadioOpen = true;
        });
    };
    /**
     * Opens modal with the food details.
     * @param food
     */
    FoodCardPage.prototype.presentModal = function (food) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_box_page__["a" /* ModalContentPage */], food);
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
    ], FoodCardPage.prototype, "slides", void 0);
    FoodCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-food-card',template:/*ion-inline-start:"D:\ger\wzk\front\3 wzk few options3\3 wzk few options\clinic_app_frontend\src\pages\food-card\food-card.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Speiseplan</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="openHomePage()">\n        <img class="homeLogoNavBar" src="assets/home/icon.svg">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-toolbar color="primary" *ngIf="selectionToolbarNeeded">\n    <!-- <ion-list-header color="primary"> -->\n    <!-- <ion-label col-4 style="color:#fff;">\nWas suchen Sie?</ion-label> -->\n    <!-- <ion-buttons left><ion-icon name="locate"></ion-icon> </ion-buttons> -->\n\n    <ion-select full [selectOptions]="locationOptions" interface="popover"\n                multiple="false" color="primary" style="max-width: 100%; color: #5b5b5b; font-weight: bold"\n                [okText]=locationOptions.okText [cancelText]=locationOptions.cancelText [placeholder]=locationOptions.placeholder\n                (ionChange)="changeClinic($event)">\n      <ion-option [value]="clinic" *ngFor="let clinic of clinicLocations">{{clinic.name}}</ion-option>\n    </ion-select>\n    <!-- </ion-list-header> -->\n  </ion-toolbar>\n\n  <ion-grid *ngIf="!loaded">\n\n    <ion-row>\n      <ion-col col-5></ion-col>\n      <ion-col col-2>\n        <ion-spinner style="font-size: 40px" text-center></ion-spinner>\n      </ion-col>\n      <ion-col col-5></ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-slides>\n    <ion-slide *ngFor="let day of dataR " scrollX="true">\n      <ion-toolbar color="primary" *ngIf="!selectionToolbarNeeded">\n        <ion-buttons left>\n          <button (click)="slidePrev()" *ngIf="!isBeginning()" item-left medium clear color="white" ion-button\n                  icon-only>\n            <ion-icon name="arrow-back"></ion-icon>\n          </button>\n        </ion-buttons>\n\n        <span color="secondary">\n          <b>{{ day.dow }}</b> {{ day.date }}</span>\n        <ion-buttons right>\n\n          <button (click)="slideNext()" *ngIf="!isEnd()" item-right medium clear color="white" ion-button icon-only>\n            <ion-icon name="arrow-forward"></ion-icon>\n          </button>\n        </ion-buttons>\n\n\n      </ion-toolbar>\n      <ion-toolbar color="white" *ngIf="selectionToolbarNeeded">\n        <ion-buttons left>\n          <button (click)="slidePrev()" *ngIf="!isBeginning()" item-left medium clear color="primary" ion-button\n                  icon-only>\n            <ion-icon name="arrow-back"></ion-icon>\n          </button>\n        </ion-buttons>\n\n        <span color="secondary" style="font-size: 1.6rem;">\n          <b>{{ day.dow }}</b> {{ day.date }}</span>\n        <ion-buttons right>\n\n          <button (click)="slideNext()" *ngIf="!isEnd()" item-right medium clear color="primary" ion-button icon-only>\n            <ion-icon name="arrow-forward"></ion-icon>\n          </button>\n        </ion-buttons>\n\n\n      </ion-toolbar>\n      <img src="assets/food-card/food-card.jpg" width="100%" height="auto"\n           style="display: block;margin-bottom:20px; margin-left: auto; margin-right: auto;">\n      <div *ngFor="let menu of day.data, let i=index">\n        <div style="font-size:1.3rem;padding-right:5px;color:#B1B3B4">{{ menu.time }}</div>\n        <ion-card style="margin-bottom:20px;">\n\n          <ion-item (click)="presentModal(menu)">\n\n            <!-- <button style="padding-left:0px;"  > -->\n            <span item-left color="primary">\n              <ion-icon name="restaurant" color="primary"></ion-icon>\n              <b>{{ menu.art }}\n                <!-- {{menu.title}} -->\n              </b>\n            </span>\n            <ion-icon name="information-circle" item-right color="primary"></ion-icon>\n            <!-- </button> -->\n\n\n          </ion-item>\n\n\n          <ion-list (click)="presentModal(menu)">\n            <!-- {{day.data | json }} -->\n            <ion-item detail-none *ngFor="let food of menu.food" full ion-item>\n\n              <h2>\n                {{food}}\n                <!-- <ion-note></ion-note> -->\n              </h2>\n\n            </ion-item>\n\n          </ion-list>\n\n          <!--button *ngIf="day.day <= today" item-right text-center color="secondary" ion-button (click)="doRadioAlert()" style="text-transform: none;" clear>\n           <ion-icon color="primary" name="star-outline"></ion-icon>\n           <ion-icon color="primary" name="star-outline"></ion-icon>\n           <ion-icon color="primary" name="star-outline"></ion-icon>\n           <ion-icon color="primary" name="star-outline"></ion-icon>\n           <ion-icon color="primary" name="star-outline"></ion-icon> &nbsp; <span secondary>Bewerten</span>\n         </button>\n        <button *ngIf="day.day > today" color="secondary" item-right text-center ion-button (click)="doOrder(menu)" style="text-transform: none;" clear><ion-icon color="primary" style="margin-right:5px;" name=\'clock\'> </ion-icon>\n         Vorbestellen\n         </button-->\n        </ion-card>\n      </div>\n\n      <div *ngIf="foodNotes!=\'\'" style="font-size:1.3rem;padding-right:5px;color:#B1B3B4;padding-top: 0;" padding>\n        {{foodNotes}}\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"D:\ger\wzk\front\3 wzk few options3\3 wzk few options\clinic_app_frontend\src\pages\food-card\food-card.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_link_manager_link_manager__["a" /* LinkManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_manager_auth_manager__["a" /* AuthManagerProvider */]])
    ], FoodCardPage);
    return FoodCardPage;
}());

//# sourceMappingURL=food-card.js.map

/***/ })

});
//# sourceMappingURL=26.js.map