webpackJsonp([32],{

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinPageModule", function() { return CheckinPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkin__ = __webpack_require__(755);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckinPageModule = /** @class */ (function () {
    function CheckinPageModule() {
    }
    CheckinPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checkin__["a" /* CheckinPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkin__["a" /* CheckinPage */]),
            ],
        })
    ], CheckinPageModule);
    return CheckinPageModule;
}());

//# sourceMappingURL=checkin.module.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_checkin_service_checkin_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_manager_storage_manager__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__conditions__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_checkin_service_checkin_modals__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_draw_draw__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_manager_auth_manager__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_link_manager_link_manager__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_gui_manager_gui_manager__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_activity_tracker_activity_tracker__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CheckinPage = /** @class */ (function () {
    function CheckinPage(activityTrackerProvider, navCtrl, navParams, checkinService, storageProv, modelCtrl, drawManager, authManager, alertCtrl, linkManager, cdRef, modalCtrl, renderer, guiManager) {
        this.activityTrackerProvider = activityTrackerProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.checkinService = checkinService;
        this.storageProv = storageProv;
        this.modelCtrl = modelCtrl;
        this.drawManager = drawManager;
        this.authManager = authManager;
        this.alertCtrl = alertCtrl;
        this.linkManager = linkManager;
        this.cdRef = cdRef;
        this.modalCtrl = modalCtrl;
        this.renderer = renderer;
        this.guiManager = guiManager;
        this.maxSelectionDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString();
        this.counter = 0;
        this.data = [];
        this.loaded = false;
        this.currentSlide = 0;
        this.activeDot = 1;
        this.elementNr = 0;
        this.speed = 1000;
        this.currentTab = 0;
        this.currentPercent = 0;
        this.privacyChecked = false;
        this.agbChecked = false;
        this.finishedPressed = false;
        this.uploadComplete = false;
        this.allowedToComplete = false;
        this.loadingText = "";
        this.component6Indexes = [0, 1, 2];
        this.component7Indexes = [0, 1, 2, 3, 4, 5];
        this.component8Indexes = [0, 1, 2, 3, 4, 5];
        this.buttonIndex = 1;
        this.viewTopOffsetPosition = 0;
        this.tabsState = {};
        this.stepsToBeRemoved = [
            "1.4 Biographische Anamnese",
            "2.1 Sozialanamnese mit Kontextfaktoren",
            "2.2 Arbeitsanamnese mit Kontextfaktoren",
            // "2.3. Subjektive Beeinträchtigung der Aktivitäten und Teilhaben",
            "3.4 Diagnostik",
        ];
        this.changelogList = {
            P7BCSV2NKDO5: false,
            P7BCSV713OBZ: "Nein",
            P7BCSVS9BJ51: "Nein",
            P7BCSVC1EZDD: "Nein",
            P7BCSVKEKE6U: "Nein",
            P7BCSVUN791B: "Nein",
            P7BCSV2I7H1G: "Nein",
            P7BCSVM68ZUA: "nein",
            P7BCSV5JIAYK: "nein",
            P7BCSV930UAW: false,
            P7BCSV05869W: false,
            P7BCSVWQ6NNJ: false,
            P7BCSVBPIEA4: false,
            P7BCSVI847EB: false,
            P7BCSV56XY6N: false,
            P7BCSVTUQQA9: false,
            P7BCSV3G6GTA: false,
            P7BCSVX5C0UL: false,
            P7BCSVF9XU57: false,
            P7BCSVHNOTG5: false,
            P7BCSVEVCJ0E: false,
            P7BCSVTJOJLN: false,
            P7BCSV9ENJNO: false,
            P7BCSV2DGKNB: false,
            P7BCSVDE46X5: false,
            P7BCSV6NLH8A: false,
            P7BCSVC67J36: false,
            P7BCSVTVPIGK: false,
            P7BCSVKGATTE: false,
            P7BCSV5GIWPX: false,
        };
        this.keysToCheck = [
            "P7BCSV2NKDO5",
            "P7BCSVMNWW2B",
            "P7BCSV930UAW",
            "P7BCSV05869W",
            "P7BCSVWQ6NNJ",
            "P7BCSVBPIEA4",
            "P7BCSVI847EB",
            "P7BCSV713OBZ",
            "P7BCSV56XY6N",
            "P7BCSVM68ZUA",
            "P7BCSVS9BJ51",
            "P7BCSVC1EZDD",
            "P7BCSVTUQQA9",
            "P7BCSV3G6GTA",
            "P7BCSVUN791B",
            "P7BCSVKEKE6U",
            "P7BCSV2I7H1G",
            "P7BCSVX5C0UL",
            "P7BCSV5JIAYK",
            "P7BCSVF9XU57",
            "P7BCSVHNOTG5",
            "P7BCSVEVCJ0E",
            "P7BCSVTJOJLN",
            "P7BCSV9ENJNO",
            "P7BCSV2DGKNB",
            "P7BCSVDE46X5",
            "P7BCSV6NLH8A",
            "P7BCSVC67J36",
            "P7BCSVTVPIGK",
            "P7BCSVKGATTE",
            "P7BCSV5GIWPX",
        ];
    }
    CheckinPage.prototype.rulesFullFilled = function (condition, item) {
        return __WEBPACK_IMPORTED_MODULE_4__conditions__["a" /* Process */].rulesFullFilled(condition, item, this.getVals());
    };
    CheckinPage.prototype.logItem = function (item) {
        console.log("This is the item:", item);
    };
    CheckinPage.prototype.ngOnInit = function () {
        var _this = this;
        this.checkinService.checkIfPatientAllowedToCompleteCheckin(function (success, data) {
            //      console.info('data is: ', data);
            if (success == true) {
                //        console.log("Is allowed to complete checkin: ", data);
                if (data == true || data == "true") {
                    //          console.log("Response is  true")
                    //          console.log("The form loaded is: ", this.checkinService.form);
                    _this.allowedToComplete = true;
                    _this.loaded = true;
                    _this.tabs = "p" + _this.currentTab;
                    _this.data = _this.checkinService.form.presetData;
                    console.log(data);
                    console.log("this is the current data", _this.data, _this.tabs);
                    _this.checkinService.getViewPosition(function (posData) {
                        //            console.log("Trying to restore position: ", posData);
                        _this.tabsState = posData;
                        if (posData.hasOwnProperty("latest") && posData["latest"]) {
                            _this.restorePosition(posData.latest);
                        }
                    });
                }
                else {
                    _this.loaded = true;
                    _this.finishedPressed = true;
                }
            }
            else {
                _this.showMessage("Fehler", "Fehler bei der Verbindung zum Server.\nBitte versuchen Sie es erneut.");
            }
        });
        if (!this.finishedPressed) {
            this.openStartFilter();
        }
    };
    CheckinPage.prototype.handleCheckBoxChange = function (name, value) {
        console.log(name, value);
        console.log(this.keysToCheck);
        console.log("1111111111111");
        if (name == "Q3SKP9KBHOHF") {
            console.log("shooooood");
            this.changelogList[name] = value;
            console.log(this.changelogList[name]);
            this.firstPageOptionHandle2();
        }
        if (this.keysToCheck.includes(name)) {
            if (this.changelogList[name] !== value) {
                this.changelogList[name] = value;
            }
            this.onSelectionChange();
        }
    };
    CheckinPage.prototype.onSelectionChange = function () {
        var _this = this;
        console.log("this.currentTab = ");
        console.log(this.currentTab);
        setTimeout(function () {
            if (_this.currentTab === 0) {
                _this.firstPageOptionHandle();
            }
            if (_this.currentTab === 1) {
                _this.secondPageOptionHandle();
            }
            if (_this.currentTab === 2) {
                _this.thirdPageSecondOptionHandle();
            }
            if (_this.currentTab === 4) {
                _this.fifthPageOptionHandle();
            }
            if (_this.currentTab === 6) {
                _this.seventhPageOptionHandle();
            }
            if (_this.currentTab === 7) {
                _this.eighthPageOptionHandle();
            }
            if (_this.data.length <= 7) {
                if (_this.currentTab === 5) {
                    _this.seventhPageOptionHandle();
                }
            }
            else {
                if (_this.currentTab === 5) {
                    _this.sixthPageOptionHandle();
                }
            }
        }, 50);
    };
    CheckinPage.prototype.firstPageOptionHandle = function () {
        console.log("herrrrrrrrrrrrrr");
        console.log(this.changelogList["P7BCSV2NKDO5"]);
        var nextItem = document.getElementById("element-" + 2).children[0]
            .children[1].children[0].children;
        for (var i = 0; i < nextItem.length; i++) {
            if (i !== 0) {
                nextItem[i].children[0].classList.add("disabled-item");
            }
        }
        if (this.changelogList["P7BCSV2NKDO5"] == "Ja") {
            for (var i = 0; i < nextItem.length; i++) {
                if (i !== 0) {
                    nextItem[i].children[0].classList.remove("disabled-item");
                }
            }
        }
        else {
            for (var i = 0; i < nextItem.length; i++) {
                if (i !== 0) {
                    nextItem[i].children[0].classList.add("disabled-item");
                }
            }
        }
    };
    CheckinPage.prototype.firstPageOptionHandle2 = function () {
        console.log("herrrrrrrrrrrrrr");
        console.log(this.changelogList["P7BCSV2NKDO5"]);
        var nextItem = document.getElementById("element-" + 2).children[0]
            .children[1].children[0].children;
        for (var i = 0; i < nextItem.length; i++) {
            if (i !== 0) {
                nextItem[i].children[0].classList.add("disabled-item");
            }
        }
        if (this.changelogList["Q3SKP9KBHOHF"] == "Ja") {
            for (var i = 0; i < nextItem.length; i++) {
                if (i !== 0) {
                    nextItem[i].children[0].classList.remove("disabled-item");
                }
            }
        }
        else {
            for (var i = 0; i < nextItem.length; i++) {
                if (i !== 0) {
                    nextItem[i].children[0].classList.add("disabled-item");
                }
            }
        }
    };
    CheckinPage.prototype.secondPageOptionHandle = function () {
        var nextItem = document.getElementById("element-" + 1).children[0]
            .children[1].children[0].children;
        console.log(nextItem);
        for (var i = 0; i < nextItem.length; i++) {
            if (i > 11) {
                nextItem[i].children[0].classList.add("disabled-item");
            }
        }
        if (this.changelogList["P7BCSVF9XU57"] == true) {
            for (var i = 0; i < nextItem.length; i++) {
                if (i != 0) {
                    nextItem[i].children[0].classList.add("disabled-item");
                }
            }
        }
        else {
            for (var i = 0; i < nextItem.length; i++) {
                if (i < 11) {
                    nextItem[i].children[0].classList.remove("disabled-item");
                }
            }
        }
        this.checkAndDoFadeInFadeOut(nextItem);
    };
    CheckinPage.prototype.checkAndDoFadeInFadeOut = function (nextItem) {
        var keysArray = [
            "P7BCSVHNOTG5",
            "P7BCSVEVCJ0E",
            "P7BCSVTJOJLN",
            "P7BCSV9ENJNO",
            "P7BCSV2DGKNB",
            "P7BCSVDE46X5",
            "P7BCSV6NLH8A",
            "P7BCSVC67J36",
            "P7BCSVTVPIGK",
            "P7BCSVKGATTE",
            "P7BCSV5GIWPX",
        ];
        var allValuesFalse = true;
        for (var _i = 0, keysArray_1 = keysArray; _i < keysArray_1.length; _i++) {
            var item = keysArray_1[_i];
            if (this.changelogList[item] === true) {
                allValuesFalse = false;
                break;
            }
        }
        if (allValuesFalse) {
            // Do something when all values are false
            for (var i = 0; i < nextItem.length; i++) {
                if (i > 12) {
                    nextItem[i].children[0].classList.add("disabled-item");
                }
            }
        }
        else {
            for (var i = 0; i < nextItem.length; i++) {
                if (i > 12) {
                    nextItem[i].children[0].classList.remove("disabled-item");
                }
            }
        }
    };
    CheckinPage.prototype.thirdPageSecondOptionHandle = function () {
        var nextItem = document.getElementById("element-" + 2).children[0]
            .children[1].children[0].children;
        var indexes = [2, 4, 6, 8, 10, 11];
        for (var i = 0; i < nextItem.length; i++) {
            if (indexes.includes(i)) {
                console.log("is it here");
                nextItem[i].children[0].classList.add("disabled-item");
            }
        }
        if (this.changelogList["P7BCSVMNWW2B"] === true) {
            for (var i = 0; i < nextItem.length; i++) {
                if (i !== 0) {
                    nextItem[i].children[0].classList.add("disabled-item");
                }
            }
        }
        else {
            for (var i = 0; i < nextItem.length; i++) {
                if (i !== 0 && !indexes.includes(i)) {
                    nextItem[i].children[0].classList.remove("disabled-item");
                }
            }
        }
        if (this.changelogList["P7BCSV930UAW"] === true) {
            nextItem[2].children[0].classList.remove("disabled-item");
        }
        else {
            nextItem[2].children[0].classList.add("disabled-item");
        }
        if (this.changelogList["P7BCSV05869W"] === true) {
            nextItem[4].children[0].classList.remove("disabled-item");
        }
        else {
            nextItem[4].children[0].classList.add("disabled-item");
        }
        if (this.changelogList["P7BCSVWQ6NNJ"] === true) {
            nextItem[6].children[0].classList.remove("disabled-item");
        }
        else {
            nextItem[6].children[0].classList.add("disabled-item");
        }
        if (this.changelogList["P7BCSVBPIEA4"] === true) {
            nextItem[8].children[0].classList.remove("disabled-item");
        }
        else {
            nextItem[8].children[0].classList.add("disabled-item");
        }
        if (this.changelogList["P7BCSVI847EB"] === true) {
            nextItem[10].children[0].classList.remove("disabled-item");
            nextItem[11].children[0].classList.remove("disabled-item");
        }
        else {
            nextItem[10].children[0].classList.add("disabled-item");
            nextItem[11].children[0].classList.add("disabled-item");
        }
    };
    CheckinPage.prototype.fifthPageOptionHandle = function () {
        var _this = this;
        var nextItem = document.getElementById("element-" + 0).children[0]
            .children[1].children[0];
        console.log(nextItem.children);
        var button = this.renderer.createElement("button");
        this.renderer.setAttribute(button, "ion-button", "");
        this.renderer.setProperty(button, "innerText", "+ Hinzufügen");
        this.renderer.setAttribute(button, "color", "secondary");
        this.renderer.setAttribute(button, "clear", "true");
        this.renderer.setAttribute(button, "class", "button button-md button-default button-default-md");
        this.renderer.listen(button, "click", function () { return _this.onButtonClick(); });
        this.renderer.insertBefore(nextItem, button, nextItem.children[this.buttonIndex * 5]);
        for (var i = 0; i < nextItem.children.length; i++) {
            if (i > this.buttonIndex * 5 + (this.buttonIndex - 1)) {
                nextItem.children[i].classList.add("disabled-item");
            }
        }
        for (var i = 0; i < nextItem.children.length; i++) {
            if (i <= this.buttonIndex * 5 - 1) {
                nextItem.children[i].classList.remove("disabled-item");
            }
        }
    };
    CheckinPage.prototype.onButtonClick = function () {
        var _a;
        // Your function logic when the button is clicked
        var nextItem = document.getElementById("element-" + 0).children[0]
            .children[1].children[0];
        // nextItem[(this.buttonIndex * 4) +this.buttonIndex].classList.add('disabled-item');
        for (var i = 0; i < nextItem.children.length; i++) {
            var child = nextItem.children[i];
            if (child.tagName === "BUTTON" &&
                ((_a = child.textContent) === null || _a === void 0 ? void 0 : _a.trim()) === "+ Hinzufügen") {
                // Remove the button element from the parent element using Renderer2
                this.renderer.removeChild(nextItem, child);
                break; // Stop looping after the first matching button is removed
            }
        }
        this.buttonIndex += 1;
        this.fifthPageOptionHandle();
    };
    CheckinPage.prototype.sixthPageOptionHandle = function () {
        var nextItem = document.getElementById("element-" + 0).children[0]
            .children[1].children[0].children;
        console.log(nextItem);
        for (var i = 0; i < nextItem.length; i++) {
            if (i !== 0) {
                nextItem[i].children[0].classList.add("disabled-item");
            }
        }
        nextItem[6].children[0].classList.add("disabled-item");
        if (this.changelogList["P7BCSV713OBZ"] == "Ja") {
            for (var i = 0; i < nextItem.length; i++) {
                if (i !== 0 && i !== 6) {
                    nextItem[i].children[0].classList.remove("disabled-item");
                }
            }
        }
        else {
            for (var i = 0; i < nextItem.length; i++) {
                if (i !== 0) {
                    nextItem[i].children[0].classList.add("disabled-item");
                }
            }
        }
        if (this.changelogList["P7BCSV56XY6N"] === true) {
            nextItem[6].children[0].classList.remove("disabled-item");
        }
        else {
            nextItem[6].children[0].classList.add("disabled-item");
        }
    };
    CheckinPage.prototype.seventhPageOptionHandle = function () {
        console.log("in seven page");
        var nextItem = document.getElementById("element-" + 0).children[0]
            .children[1].children[0].children;
        for (var i = 0; i < nextItem.length; i++) {
            if (i !== 0 && i !== 8) {
                nextItem[i].children[0].classList.remove("disabled-item");
            }
        }
        return;
        for (var i = 0; i < nextItem.length; i++) {
            if (i !== 0 && i !== 8) {
                // nextItem[i].children[0].classList.add('disabled-item');
            }
        }
        if (this.changelogList["P7BCSVM68ZUA"] == "ja") {
            for (var i = 0; i < nextItem.length; i++) {
                if (i !== 0 && i !== 8) {
                    nextItem[i].children[0].classList.remove("disabled-item");
                }
            }
        }
        else {
            for (var i = 0; i < nextItem.length; i++) {
                if (i !== 0 && i !== 8) {
                    //    nextItem[i].children[0].classList.add('disabled-item');
                }
            }
        }
        var secondItem = document.getElementById("element-" + 6).children[0]
            .children[1].children[0].children;
        // secondItem[1].children[0].classList.add("disabled-item");
        if (this.changelogList["P7BCSVS9BJ51"] == "Ja") {
            secondItem[1].children[0].classList.remove("disabled-item");
        }
        else {
            //   secondItem[1].children[0].classList.add("disabled-item");
        }
        var thirdItem = document.getElementById("element-" + 7).children[0]
            .children[1].children[0].children;
        // thirdItem[1].children[0].classList.add("disabled-item");
        if (this.changelogList["P7BCSVC1EZDD"] == "Ja") {
            thirdItem[1].children[0].classList.remove("disabled-item");
        }
        else {
            //   thirdItem[1].children[0].classList.add("disabled-item");
        }
        var fourthItem = document.getElementById("element-" + 4).children[0];
        // fourthItem.classList.add("disabled-item");
        if (this.changelogList["P7BCSVTUQQA9"] === true) {
            fourthItem.classList.remove("disabled-item");
        }
        var fifthItem = document.getElementById("element-" + 9).children[0]
            .children[1].children[0].children;
        console.log(fifthItem);
        for (var i = 0; i < fifthItem.length; i++) {
            if (i !== 0) {
                // fifthItem[i].children[0].classList.add("disabled-item");
            }
        }
        if (this.changelogList["P7BCSV5JIAYK"] == "ja") {
            for (var i = 0; i < fifthItem.length; i++) {
                if (i !== 0) {
                    fifthItem[i].children[0].classList.remove("disabled-item");
                }
            }
        }
        else {
            for (var i = 0; i < fifthItem.length; i++) {
                if (i !== 0) {
                    //   fifthItem[i].children[0].classList.add("disabled-item");
                }
            }
        }
    };
    CheckinPage.prototype.eighthPageOptionHandle = function () {
        var nextItem = document.getElementById("element-" + 2).children[0];
        var firstItem = document.getElementById("element-" + 4).children[0]
            .children[1].children[0].children;
        var secondItem = document.getElementById("element-" + 5).children[0]
            .children[1].children[0].children;
        var thirdItem = document.getElementById("element-" + 13).children[0]
            .children[1].children[0].children;
        var fourthItem = document.getElementById("element-" + 15).children[0]
            .children[1].children[0].children;
        console.log(thirdItem);
        firstItem[1].classList.add("disabled-item");
        secondItem[1].classList.add("disabled-item");
        for (var i = 0; i < thirdItem.length; i++) {
            if (i !== 0) {
                thirdItem[i].children[0].classList.add("disabled-item");
            }
        }
        for (var i = 0; i < fourthItem.length; i++) {
            if (i !== 0 && i !== 1) {
                fourthItem[i].children[0].classList.add("disabled-item");
            }
        }
        nextItem.classList.add("disabled-item");
        if (this.changelogList["P7BCSV3G6GTA"] == true) {
            nextItem.classList.remove("disabled-item");
        }
        if (this.changelogList["P7BCSVUN791B"] == "Ja") {
            firstItem[1].classList.remove("disabled-item");
        }
        if (this.changelogList["P7BCSVKEKE6U"] == "Ja") {
            secondItem[1].classList.remove("disabled-item");
        }
        if (this.changelogList["P7BCSV2I7H1G"] == "Ja") {
            for (var i = 0; i < thirdItem.length; i++) {
                if (i !== 0) {
                    thirdItem[i].children[0].classList.remove("disabled-item");
                }
            }
        }
        if (this.changelogList["P7BCSVX5C0UL"] == true) {
            for (var i = 0; i < thirdItem.length; i++) {
                if (i !== 0 && i !== 1) {
                    fourthItem[i].children[0].classList.remove("disabled-item");
                }
            }
        }
    };
    CheckinPage.prototype.onRadioChange = function (item) {
        item.reflector_other = "";
    };
    CheckinPage.prototype.openStartFilter = function () {
        var _this = this;
        // const modal = this.modalCtrl.create('StartStartFilterPageFilter');
        // modal.present();
        var modal = this.modalCtrl.create("StartFilterPage", {
            html: true,
            closeable: false,
            animated: true,
            showBackdrop: true,
            backdropDismiss: false,
        });
        modal.present();
        modal.onDidDismiss(function (data) {
            console.log(data);
            if (data) {
                _this.stepsToBeRemoved.forEach(function (item) {
                    _this.data = _this.data.filter(function (obj) {
                        return obj.title !== item;
                    });
                });
            }
            else {
                _this.data = _this.data.filter(function (obj) {
                    return obj.title !== "3.4 Diagnostik";
                });
            }
            _this.onSelectionChange();
        });
    };
    /**
     * FormItem change event.
     *
     * @param item
     */
    CheckinPage.prototype.onFormItemChange = function (item) { };
    Object.defineProperty(CheckinPage.prototype, "isIE", {
        get: function () {
            return this.checkinService.isIE;
        },
        enumerable: false,
        configurable: true
    });
    CheckinPage.prototype.showAgb = function (agbs) {
        if (agbs) {
            this.modelCtrl
                .create("TextPage", {
                html: true,
                closeable: true,
                target: this.linkManager.getNutungsbedingungenAsHalJSON(),
            })
                .present();
            return;
        }
        this.modelCtrl
            .create("TextPage", {
            html: true,
            closeable: true,
            target: this.linkManager.getDatenschutzAsJSON(),
        })
            .present();
    };
    Object.defineProperty(CheckinPage.prototype, "currentTitle", {
        get: function () {
            return this.data[this.currentTab] != null
                ? this.data[this.currentTab].title
                : "Nicht definiert";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CheckinPage.prototype, "currentCount", {
        get: function () {
            return this.data[this.currentTab] != null
                ? this.data[this.currentTab].children.length
                : 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CheckinPage.prototype, "tabCount", {
        get: function () {
            return this.data != null ? this.data.length : 0;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Shows an alert to the user
     * @param title
     * @param message
     * @param callback Callback function that will be called if user selects the OK option.
     */
    CheckinPage.prototype.showMessage = function (title, message, callback) {
        if (callback === void 0) { callback = function (data) {
            console.log("On the message with title " +
                title +
                " and messsage '" +
                message +
                "'", data);
        }; }
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message.replace("\n", "<br>"),
            buttons: [
                {
                    text: "OK",
                    handler: function (data) {
                        callback(data);
                    },
                },
            ],
        });
        alert.present();
    };
    /**
     * Sends the checkin data to the backend for they will be saved and transmitted as PDF to the GPM.
     */
    CheckinPage.prototype.sendDataToKISandCreatePDF = function () {
        var _this = this;
        console.log("Checkin data to send: ", this.data);
        var dataToSend = this.checkinService.prepareForSend(this.data, this.getVals());
        console.log("Checkin data to send to finalize: ", dataToSend);
        var patientEmail = this.authManager.email;
        this.loaded = false;
        this.loadingText =
            "Die Daten werden verschlüsselt und an die Klinik gesendet. Dies kann eine Weile dauern (ca. 20-60 Sekunden). Bitte warten Sie.";
        // -------------------------------------------------
        /*    this.loaded = true;
                this.loadingText = "";*/
        // -------------------------------------------------
        this.checkinService.sendCheckinToKIS(dataToSend, patientEmail, function (success, response) {
            if (success) {
                _this.loaded = true;
                _this.loadingText = "";
                _this.finishedPressed = true;
                _this.allowedToComplete = false;
            }
            else {
                _this.showMessage("Fehler beim Speichern der Daten auf DB", "Fehler bei der Übermittlung der Registrierungsdaten an die Krankenhausdatenbank.\n" +
                    response); // "Error storing the data to DB", "Error when submitting the registration data to the hospital database.\n"
                _this.loaded = true;
            }
        });
        // -------------------------------------------------
    };
    /**
     * Sends the checkin data to the backend only, without creating a PDF in GPM.
     */
    CheckinPage.prototype.sendDataToBackendOnly = function () {
        var _this = this;
        var data = this.data;
        //    console.log("Data", data);
        //    console.log("Checkin data in form: ", this.data);
        this.loaded = false;
        this.checkinService.sendCheckin(data, "", function (success, data) {
            if (success) {
                //this.showMessage("Success", "");
                console.log("Checkin was submitted successfully!");
                _this.loaded = true;
                _this.finishedPressed = true;
                _this.allowedToComplete = false;
            }
            else {
                if (data == "entry_already_exists") {
                    _this.showMessage("Fehler", "Sie haben das Formular bereits abgeschickt.");
                }
                else {
                    _this.showMessage("Fehler", "Fehler beim Senden des Formulars an den Server:\n" + data);
                }
            }
        });
    };
    /**
     * Function called when the finish button is clicked.
     */
    CheckinPage.prototype.finishedClicked = function () {
        /* const data = this.checkinService.prepareForSend(this.data);*/
        this.sendDataToKISandCreatePDF();
    };
    /**
     * Saves the position of the user in the current tab.
     */
    CheckinPage.prototype.savePreviousTabState = function () {
        var positionData = {
            currentTab: this.currentTab,
            tabs: this.tabs,
            scrollTop: this.viewTopOffsetPosition,
            currentSlide: this.currentSlide,
            currentPercent: this.currentPercent,
            currentPercentString: this.currentPercentString,
        };
        this.tabsState[this.currentTab] = {};
        this.tabsState[this.currentTab]["position"] = positionData;
    };
    /**
     * Function being called when segment is being changed.
     * @param i
     */
    CheckinPage.prototype.onSegmentChange = function (i) {
        console.log(this.data);
        console.log("2222222222222");
        this.activityTrackerProvider.userActionDetected();
        var sectionIndex;
        var disallowedToProceed = false;
        for (sectionIndex = 0; sectionIndex < i; sectionIndex++) {
            var site = this.data[sectionIndex];
            disallowedToProceed = __WEBPACK_IMPORTED_MODULE_4__conditions__["a" /* Process */].parseRequired(site);
            if (disallowedToProceed)
                break;
        }
        if (disallowedToProceed) {
            this.guiManager.showToast("Seite Nummer " +
                sectionIndex +
                " hat Pflichtfelder. Bitte füllen Sie die Pflichtfelder aus.", 5000, "warningToast");
        }
        else {
            this.savePreviousTabState();
            this.currentTab = i;
            this.tabs = "p" + this.currentTab;
            if (this.tabsState.hasOwnProperty(i)) {
                this.onSelectionChange();
                console.log("On segment change. Found position stored in the tabsState, trying to restore...");
                var savedState = this.tabsState[i];
                this.restorePosition(savedState);
            }
            else {
                this.onSelectionChange();
                this.currentSlide = 0;
                this.content.scrollTo(0, 0, 0);
                this.changedScrollToPosition(0);
                this.currentPercent = (this.currentSlide / this.currentCount) * 100;
                this.currentPercentString = this.currentPercent + "%";
            }
            this.saveState();
        }
        this.cdRef.detectChanges();
    };
    /**
     * Function being called when user types in the questionnaire's fields
     * @param event
     * @param elementNr
     * @param totalLength
     * @param pageIndex
     */
    CheckinPage.prototype.keyDownFunction = function (event, elementNr, totalLength, pageIndex) {
        this.activityTrackerProvider.userActionDetected();
        if (event.keyCode == 40) {
            var wanted = elementNr + 1;
            if (wanted === totalLength) {
                this.onSegmentChange(this.currentTab + 1);
            }
            else {
                this.nextElement(elementNr, totalLength, pageIndex);
            }
        }
        if (event.keyCode == 38) {
            var wanted = elementNr - 1;
            if (wanted === totalLength) {
                this.onSegmentChange(this.currentTab - 1);
            }
            else {
                this.prevElement(elementNr, pageIndex);
            }
        }
    };
    /**
     * Restores the user's previous position.
     * @param latestPosition
     */
    CheckinPage.prototype.restorePosition = function (latestPosition) {
        //    console.log("Restoring position: ", latestPosition);
        if (latestPosition.hasOwnProperty("position")) {
            var positionData = latestPosition.position;
            if (positionData.hasOwnProperty("currentTab")) {
                this.currentTab = positionData["currentTab"];
            }
            if (positionData.hasOwnProperty("tabs")) {
                this.tabs = positionData["tabs"];
            }
            if (positionData.hasOwnProperty("currentSlide")) {
                this.currentSlide = positionData["currentSlide"];
            }
            if (positionData.hasOwnProperty("currentPercent")) {
                this.currentPercent = positionData["currentPercent"];
            }
            if (positionData.hasOwnProperty("currentPercentString")) {
                this.currentPercentString = positionData["currentPercentString"];
            }
            if (positionData.hasOwnProperty("scrollTop")) {
                this.content.scrollTo(0, positionData["scrollTop"], 1000);
                this.changedScrollToPosition(positionData["scrollTop"]);
            }
        }
    };
    /**
     * Saves the position of the user.
     */
    CheckinPage.prototype.savePosition = function () {
        var positionData = {
            currentTab: this.currentTab,
            tabs: this.tabs,
            scrollTop: this.viewTopOffsetPosition,
            currentSlide: this.currentSlide,
            currentPercent: this.currentPercent,
            currentPercentString: this.currentPercentString,
        };
        this.tabsState["latest"] = {};
        this.tabsState["latest"]["position"] = positionData;
        this.checkinService.saveViewPosition(this.tabsState);
    };
    CheckinPage.prototype.changedScrollToPosition = function (offset) {
        this.viewTopOffsetPosition = offset;
    };
    /**
     * Returns a class that styles differently elements that are mandatory to be filled.
     * @param item
     */
    CheckinPage.prototype.getBorderClassOfItem = function (item) {
        if (__WEBPACK_IMPORTED_MODULE_4__conditions__["a" /* Process */].parseRequired(item)) {
            return "redBorderClass";
        }
        else
            return "";
    };
    /**
     * Changes the UI position to the next element.
     * @param elementNr
     * @param totalLength
     * @param pageIndex
     */
    CheckinPage.prototype.nextElement = function (elementNr, totalLength, pageIndex) {
        var site = this.data[this.currentTab];
        var currentElement = site.children[elementNr];
        // if (currentElement == undefined) {
        console.log("Site children are:", site.children, site.children.length);
        console.log("current element is: ", elementNr);
        //}
        var disallowedToProceed = __WEBPACK_IMPORTED_MODULE_4__conditions__["a" /* Process */].parseRequired(currentElement);
        if (disallowedToProceed) {
            this.guiManager.showToast("Die mit rot markierten Pflichtfelder müssen ausgefüllt werden.", 5000, "warningToast");
            if (elementNr > totalLength) {
                return;
            }
            var next = document.getElementById("element-" + elementNr);
            while (next.children[0] == undefined) {
                next = next.nextSibling;
            }
            var yOffset = next.offsetTop;
            this.content.scrollTo(0, yOffset - 50, this.speed);
            this.changedScrollToPosition(yOffset - 50);
        }
        else {
            //Proceed to the next section
            var wanted = elementNr;
            if ((pageIndex === 6 || pageIndex === 5) && elementNr === 2) {
                this.component6Indexes = Array.from(Array(30).keys());
                // this.component6Indexes = Array.from(Array(6).keys());
            }
            if ((pageIndex === 6 || pageIndex === 5) && [5, 7].includes(elementNr)) {
                if (elementNr === 5) {
                    //   this.component6Indexes = Array.from(Array(8).keys());
                    this.component6Indexes = Array.from(Array(30).keys());
                }
                else {
                    //   this.component6Indexes = Array.from(Array(10).keys());
                    this.component6Indexes = Array.from(Array(30).keys());
                }
            }
            if (pageIndex === 7 && elementNr === 5) {
                this.component7Indexes = Array.from(Array(11).keys());
            }
            if (pageIndex === 6 && elementNr === 7) {
                console.log("page index is 7777777777777777777");
                this.component6Indexes = Array.from(Array(30).keys());
            }
            if (pageIndex === 7 && elementNr === 10) {
                this.component7Indexes = Array.from(Array(15).keys());
            }
            if (pageIndex === 7 && elementNr === 14) {
                this.component7Indexes = Array.from(Array(21).keys());
            }
            if (pageIndex === 8 && elementNr === 5) {
                this.component8Indexes = Array.from(Array(20).keys());
            }
            if (pageIndex === 8 && elementNr === 19) {
                this.component8Indexes = Array.from(Array(25).keys());
            }
            if (pageIndex === 8 && elementNr === 24) {
                this.component8Indexes = Array.from(Array(30).keys());
            }
            if (wanted > totalLength) {
                return;
            }
            var next = {};
            next = document.getElementById("element-" + wanted).parentElement
                .nextSibling;
            while (next.children[0] == undefined) {
                next = next.nextSibling;
            }
            var yOffset = next.offsetTop;
            this.content.scrollTo(0, yOffset - 50, this.speed);
            this.changedScrollToPosition(yOffset - 50);
            this.currentSlide = Number.parseInt(next.children[0].getAttribute("id").substr(8));
            this.currentPercent = (this.currentSlide / this.currentCount) * 100;
            this.currentPercentString = this.currentPercent + "%";
            this.saveState();
        }
    };
    /**
     * Changes the UI position to the previous element.
     * @param elementNr
     * @param pageIndex
     */
    CheckinPage.prototype.prevElement = function (elementNr, pageIndex) {
        console.log(elementNr, pageIndex);
        console.log("3333333333333");
        var wanted = elementNr;
        if (wanted < 0) {
            return;
        }
        if ((pageIndex === 6 || pageIndex === 5) && elementNr === 5) {
            this.component6Indexes = Array.from(Array(3).keys());
            wanted = elementNr - 3;
        }
        if ((pageIndex === 6 || pageIndex === 5) && elementNr === 7) {
            this.component6Indexes = Array.from(Array(6).keys());
            wanted = elementNr - 1;
        }
        if (pageIndex === 7 && elementNr === 10) {
            this.component7Indexes = Array.from(Array(6).keys());
            wanted = elementNr - 4;
        }
        if (pageIndex === 7 && elementNr === 14) {
            this.component7Indexes = Array.from(Array(11).keys());
            wanted = elementNr - 3;
        }
        if (pageIndex === 8 && elementNr === 19) {
            this.component8Indexes = Array.from(Array(6).keys());
            wanted = elementNr - 13;
        }
        if (pageIndex === 8 && elementNr === 24) {
            this.component8Indexes = Array.from(Array(20).keys());
            wanted = elementNr - 4;
        }
        var previous = {};
        previous = document.getElementById("element-" + wanted).parentElement
            .previousSibling;
        while (previous.children[0] == undefined) {
            previous = previous.previousSibling;
        }
        var yOffset = previous.offsetTop;
        this.content.scrollTo(0, yOffset - 50, this.speed);
        this.changedScrollToPosition(yOffset - 50);
        this.currentSlide = Number.parseInt(previous.children[0].getAttribute("id").substr(8));
        // if (document.getElementById('element-' + wanted) != null) {
        //
        //     let yOffset = document.getElementById('element-' + wanted).offsetTop;
        //     this.content.scrollTo(0, yOffset - 50, this.speed);
        // }
        // this.currentSlide = wanted;
        this.currentPercent = (this.currentSlide / this.currentCount) * 100;
        this.currentPercentString = this.currentPercent + "%";
        this.saveState();
    };
    /**
     * Changes the UI to the previous region.
     */
    CheckinPage.prototype.regionBack = function () {
        this.currentSlide = this.slides.getActiveIndex();
        this.slides.getActiveIndex();
        this.slides.slidePrev();
        this.slides.update();
        this.content.scrollToTop(150);
    };
    /**
     * Changes the UI to the next region.
     */
    CheckinPage.prototype.regionForward = function () {
        this.currentSlide = this.slides.getActiveIndex();
        this.slides.getActiveIndex();
        this.slides.slideNext();
        this.slides.update();
        this.content.scrollToTop(150);
    };
    /**
     * Retrieves the drawn path of the user on the images/canvas.
     * @param path The filepath of the base image that is being used
     */
    CheckinPage.prototype.getPreviewData = function (path, parent) {
        if (this.drawManager.processed[parent + path] != null) {
            return this.drawManager.processed[parent + path];
        }
        return path;
    };
    CheckinPage.prototype.slidePrev = function (elementNr) {
        var wanted = elementNr - 1;
        if (wanted < 0) {
            return;
        }
        if (document.getElementById("element-" + wanted) != null) {
            var yOffset = document.getElementById("element-" + wanted).offsetTop;
            this.content.scrollTo(0, yOffset, this.speed);
            this.changedScrollToPosition(yOffset);
        }
        this.currentSlide = wanted;
    };
    /**
     * Adds another node (multiply attribute - the node can have multiple answers).
     * @param parent
     */
    CheckinPage.prototype.appendOther = function (parent) {
        var _this = this;
        var newArr = [];
        for (var i = 0; i < parent.children.length; i++) {
            var currentItem = parent.children[i];
            if (currentItem.selfMultiply && currentItem.id.indexOf("child-") == -1) {
                this.counter--;
                var node = new __WEBPACK_IMPORTED_MODULE_5__providers_checkin_service_checkin_modals__["b" /* Node */](currentItem.name + "-" + newArr.length, currentItem.title, currentItem.type, currentItem.id + "child-" + this.counter);
                for (var y = 0; y < currentItem.children.length; y++) {
                    this.counter--;
                    var copyNode = currentItem.children[y];
                    var nNode = new __WEBPACK_IMPORTED_MODULE_5__providers_checkin_service_checkin_modals__["b" /* Node */](copyNode.name, copyNode.title, copyNode.type, copyNode.id + "-child-" + this.counter);
                    var fieldKeys_1 = copyNode.getFieldKeys();
                    for (var x = 0; x < fieldKeys_1.length; x++) {
                        nNode.addField(fieldKeys_1[i], copyNode.getField(fieldKeys_1[i]));
                    }
                    node.children.push(nNode);
                }
                var fieldKeys = currentItem.getFieldKeys();
                console.log(fieldKeys);
                console.log("444444444444444");
                var _loop_1 = function (x) {
                    if ((node.type == "checkboxes" ||
                        node.type == "webform_checkboxes_other") &&
                        fieldKeys[x] == "values") {
                        var vals = currentItem.getField("values");
                        var arr_1 = [];
                        this_1.counter--;
                        vals.forEach(function (elem) {
                            arr_1.push({ val: elem.val, ref: elem.ref + "-" + _this.counter });
                        });
                        node.addField("values", arr_1);
                        return "continue";
                    }
                    node.addField(fieldKeys[x], currentItem.getField(fieldKeys[x]));
                };
                var this_1 = this;
                for (var x = 0; x < fieldKeys.length; x++) {
                    _loop_1(x);
                }
                //node.parent = parent;
                newArr.push(node);
            }
        }
        parent.subGroupCount++;
        this.counter--;
        var deleter = new __WEBPACK_IMPORTED_MODULE_5__providers_checkin_service_checkin_modals__["b" /* Node */]("del_group", "Gruppe Löschen", "group_del", "del-" + parent.id + "child-" + this.counter);
        deleter.addField("id", parent.subGroupCount);
        newArr.unshift(deleter);
        parent.subGroups[parent.subGroupCount] = newArr;
        for (var y = 0; y < newArr.length; y++) {
            parent.children.push(newArr[y]);
        }
        //    console.log(this.data)
    };
    CheckinPage.prototype.delSubGroup = function (parent, id) {
        var tArr = parent.subGroups[id];
        for (var i = 0; i < tArr.length; i++) {
            var cId = tArr[i].id;
            for (var x = 0; x < parent.children.length; x++) {
                var current = parent.children[x];
                if (current.id == cId) {
                    parent.children.splice(parent.children.indexOf(current), 1);
                }
            }
        }
    };
    /**
     * Returns if the element is the end/last one.
     * @param elementNr
     * @param total
     */
    CheckinPage.prototype.isEnd = function (elementNr, total) {
        return elementNr + 1 == total;
    };
    /**
     * Prints the data to the console and also saves them in cache.
     */
    CheckinPage.prototype.printVals = function () {
        var data = this.getVals();
        //    console.log(data);
        this.storageProv.save(this.authManager.encodedEmailId + "checkin_data", data, function () { }); /*
            const getCircularReplacer = () => {
              const seen = new WeakSet();
              return (key, value) => {
                if (typeof value === "object" && value !== null) {
                  if (seen.has(value)) {
                    return;
                  }
                  seen.add(value);
                }
                return value;
              };
            };*/
        //let storeData = JSON.stringify(this.data);
        //let storeData = smartcirc(this.data);
        //console.log("Store data", storeData);
        //console.log("ACtual data", this.data);
        this.storageProv.save(this.authManager.encodedEmailId + "checkin_custom_data", this.data, function () {
            //      console.log("Saving the custom data :", this.data)
        });
        if (this.checkinService.form != null) {
            this.checkinService.form.saveDataToStorage(function () {
                //console.log("Saving teh custom data", )
            });
        }
    };
    /**
     * Returns an array with all the nodes printed in it.
     */
    CheckinPage.prototype.getVals = function () {
        var _this = this;
        var arr = [];
        //console.log("Gets vals: ", this.data);
        this.data.forEach(function (it) {
            _this.printNode(it, arr);
        });
        return arr;
    };
    /**
     * Saves the state of the questionnaire
     */
    CheckinPage.prototype.saveState = function () {
        this.printVals();
        this.savePosition();
    };
    /// View Listeners
    CheckinPage.prototype.ionViewWillLeave = function () {
        console.log("ionview will leave");
        this.saveState();
    };
    /// End of View Listeners
    /**
     * Shows the DrawPage/canvas page.
     * @param path
     */
    CheckinPage.prototype.showDrawer = function (path, kind, parent) {
        if (kind === void 0) { kind = "human"; }
        this.modelCtrl
            .create("DrawPage", { img: path, kind: kind, parent: parent })
            .present();
    };
    /**
     * Adds the node and its sub-nodes to the array.
     * @param node
     * @param array
     */
    CheckinPage.prototype.printNode = function (node, array) {
        if (node.children != null) {
            for (var i = 0; i < node.children.length; i++) {
                var child = node.children[i];
                this.printNode(child, array);
            }
        }
        // if (node.type != "checkboxes") {
        //   array.push({key: node.name, value: node.reflector_other ? node.reflector_other : node.reflector, id: node.id});
        //   // if (node.reflector_other) {
        //   //   array.push({key: node.name, value: node.reflector_other, id: node.id});
        //   // }
        // 'webform_checkboxes_other'
        // }
        if (node.type == "webform_checkboxes_other") {
            array.push({
                key: node.name,
                value: node.getField("values"),
                id: node.id,
            });
        }
        else if (node.type == "checkboxes") {
            array.push({
                key: node.name,
                value: node.getField("values"),
                id: node.id,
            });
        }
        else {
            array.push({
                key: node.name,
                value: node.reflector_other ? node.reflector_other : node.reflector,
                id: node.id,
            });
        }
    };
    /**
     * Returns if the slides are on the beginning.
     */
    CheckinPage.prototype.isBeginning = function () {
        if (this.slides != null) {
            return this.slides.isBeginning();
        }
        return true;
    };
    CheckinPage.prototype.openHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
    };
    CheckinPage.prototype.shouldSkipCondition = function (index, componentIndex) {
        var slidesIndex = [0, 1, 2, 3, 4, 9];
        var componentIndexes = [2, 5, 7];
        var component7Indexes = [5, 10, 14];
        var component8Indexes = [5, 19, 24];
        if (this.data.length < 9 &&
            index === 5 &&
            !componentIndexes.includes(componentIndex)) {
            return true;
        }
        if (slidesIndex.includes(index)) {
            return true;
        }
        else if (index === 6 && !componentIndexes.includes(componentIndex)) {
            return true;
        }
        else if (index === 7 && !component7Indexes.includes(componentIndex)) {
            return true;
        }
        else if (index === 8 && !component8Indexes.includes(componentIndex)) {
            return true;
        }
        return false;
    };
    CheckinPage.prototype.backButtonSkip = function (index, componentIndex) {
        var slidesIndex = [0, 1, 2, 3, 4, 9];
        var component6Indexes = [5, 7];
        var component7Indexes = [10, 14];
        var component8Indexes = [19, 24];
        if (this.data.length < 9 &&
            index === 5 &&
            !component6Indexes.includes(componentIndex)) {
            return true;
        }
        if (slidesIndex.includes(index)) {
            return true;
        }
        else if (index === 6 && !component6Indexes.includes(componentIndex)) {
            return true;
        }
        else if (index === 7 && !component7Indexes.includes(componentIndex)) {
            return true;
        }
        else if (index === 8 && !component8Indexes.includes(componentIndex)) {
            return true;
        }
        return false;
    };
    CheckinPage.prototype.isElementActive = function (index, componentIndex) {
        var slidesIndex = [0, 1, 2, 3, 4, 9];
        var component6Indexes = [0, 1, 2];
        if (this.data.length < 8 &&
            index === 5 &&
            this.component6Indexes.includes(componentIndex)) {
            return true;
        }
        if (slidesIndex.includes(index)) {
            return true;
        }
        else if (index === 6 && this.component6Indexes.includes(componentIndex)) {
            return true;
        }
        else if (index === 7 && this.component7Indexes.includes(componentIndex)) {
            return true;
        }
        else if (index === 8 && this.component8Indexes.includes(componentIndex)) {
            return true;
        }
        return false;
    };
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */]) === "function" ? _a : Object)
    ], CheckinPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]) === "function" ? _b : Object)
    ], CheckinPage.prototype, "content", void 0);
    CheckinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-checkin",template:/*ion-inline-start:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\checkin\checkin.html"*/'<!--\n  Generated template for the CheckinPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title text-center>Patientenaufnahme</ion-title>\n        <ion-buttons end>\n            <button ion-button (click)="openHomePage()">\n                <img class="homeLogoNavBar" src="assets/home/icon.svg">\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n    <ion-toolbar color="primary">\n        <div class="segment-container" *ngIf="loaded && allowedToComplete">\n            <div class="segment" *ngFor="let site of data, let i = index">\n                <span class="progress" *ngIf="i == currentTab" [style.width]="currentPercentString"></span>\n                <span class="progress done" *ngIf="i < currentTab"></span>\n                <div (click)="onSegmentChange(i)">\n                    <span *ngIf="i != currentTab" class="dot"></span>\n                    <span *ngIf="i < currentTab" class="dot done"></span>\n                    <span *ngIf="i == currentTab" class="dotActive">{{i + 1}}</span></div>\n            </div>\n            <!-- <div class="segment">\n                      <div>\n                          <span *ngIf="tabCount != currentTab" class="dot"></span>\n                          <span *ngIf="tabCount == currentTab" class="dot done"></span>\n\n                      </div>\n                  </div> -->\n        </div>\n        <span color="secondary">\n      </span>\n        <!-- <ion-buttons right>\n               <button (click)="regionForward()" item-right medium clear color="white" ion-button icon-only>\n                <ion-icon name="arrow-forward"></ion-icon>\n              </button>\n            </ion-buttons> -->\n    </ion-toolbar>\n    <ion-toolbar color="white">\n        <h3 style="text-align: left; margin: 0 auto; text-transform:uppercase;font-size:14px;line-height:1.87"\n            class="form-element-container" *ngIf="loaded && allowedToComplete">\n            <span *ngIf="currentTab < data.length && currentTab != -1"><!--<span class="dotActive">{{currentTab}} </span>--> {{currentTitle}}</span>\n            <span *ngIf="currentTab === data.length"><span class="dotActive"> <ion-icon style="font-size:.9em;"\n                                                                                        name="checkmark"></ion-icon> </span> Abschließen</span>\n        </h3>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content [ngSwitch]="tabs" style="background: #efefef">\n    <ion-toolbar *ngIf="!loaded" color="primary" text-center>{{loadingText}}</ion-toolbar>\n    <ion-spinner *ngIf="!loaded" style="margin: 0 auto; top: 45%; display: block"></ion-spinner>\n    <div text-center *ngIf="finishedPressed && !allowedToComplete && loaded" style="margin-top: 5%; display: block">\n        <img src="assets/checkin/icon.svg" style="max-width: 200px;">\n        <h2>Vielen Dank!</h2>\n        <p>Sie haben Ihre Daten erfolgreich gesendet.</p>\n    </div>\n    <div *ngIf="loaded && allowedToComplete">\n\n        <!-- Default switch section which appears after the form has been completed or at the end of the form -->\n        <div class="form-element-container" *ngSwitchDefault>\n            <div *ngIf="!!!finishedPressed && loaded">\n                <div class="radio-group">\n                    <ion-list radio-group>\n                        <!--Privacy button and checkbox-->\n                        <button ion-item small full font-bold style="font-weight:bold" (click)="showAgb(false)">\n                            Datenschutzbestimmungen anzeigen\n                        </button>\n\n                        <ion-item>\n                            <ion-label>Ich habe die Datenschutzbestimmungen gelesen und stimme diesen zu.\n                            </ion-label>\n                            <ion-checkbox [(ngModel)]="privacyChecked"></ion-checkbox>\n                        </ion-item>\n\n                        <!--Terms of use button and checkbox-->\n                        <button style="margin-top:30px;" ion-item font-bold small full (click)="showAgb(true)">\n                            Nutzungsbedingungen\n                            anzeigen\n                        </button>\n\n                        <ion-item>\n                            <ion-label>Ich stimme den Nutzungsbedingungen zu\n                            </ion-label>\n                            <ion-checkbox [(ngModel)]="agbChecked"></ion-checkbox>\n                        </ion-item>\n                    </ion-list>\n\n                    <button style="margin-top:100px;" *ngIf="agbChecked && privacyChecked" ion-button full\n                            color="primary"\n                            (click)="finishedClicked()">\n                        <ion-icon name="checkmark"></ion-icon>&nbsp; DATEN ÜBERMITTELN\n                    </button>\n                    <button style="margin-top:100px;" *ngIf="!agbChecked || !privacyChecked" ion-button full\n                            color="primary"\n                            disabled>\n                        <ion-icon name="checkmark"></ion-icon>&nbsp; DATEN ÜBERMITTELN\n                    </button>\n\n                </div>\n\n            </div>\n            <!-- AFTER SUBMIT !-->\n            <div text-center *ngIf="finishedPressed">\n                <img src="assets/checkin/icon.svg" style="max-width: 200px;">\n                <h2>Vielen Dank!</h2>\n                <p>Sie haben Ihre Daten erfolgreich gesendet.</p>\n            </div>\n        </div>\n\n        <div class="checkinTab" *ngFor="let site of data, let j = index" scrollX="true">\n            <div *ngSwitchCase="\'p\'+j">\n\n                <!-- <span [ngSwitch]="tabs" *ngFor="let site of data, let j = index"> -->\n                <!-- <span *ngSwitchCase="\'p\'+j"> -->\n\n                <span *ngFor="let item of site.children, let elementNr = index" class="element">\n<!--          {{item.type}} - root-->\n                    <!--[ngClass]="{\'active\': currentSlide===elementNr, \'finished\': elementNr < currentSlide}"-->\n          <div (keydown)="keyDownFunction($event,elementNr, site.children.length, j)" id="element-{{elementNr}}"\n               [ngClass]="{\'active\':  isElementActive(j,elementNr) || elementNr <= currentSlide}"\n               class="form-element"\n               *ngIf="rulesFullFilled(\'visible\', item)">\n            <div class="form-element-container">\n              <h3 [ngClass]="{\'large\': item.style}">{{item.title}}</h3>\n                <!-- <ion-note>Voluptatum ducimus voluptates voluptas?</ion-note> -->\n\n                <!-- TEXT Input -->\n              <ion-item *ngIf="item.type == \'textfield\' || item.type == \'webform_multiple\'">\n                <ion-label stacked>{{item.title}}</ion-label>\n                <ion-input disabled="{{rulesFullFilled(\'disabled\', item)}}" [(ngModel)]="item.reflector" type="text"\n                           [ngClass]="getBorderClassOfItem(item)"\n                           value="" placeholder="{{item.getField(\'placeholder\')}}"></ion-input>\n              </ion-item>\n                <!-- TEXT Input END -->\n\n                <!-- INTEGER Input -->\n              <ion-item *ngIf="item.type == \'Integer\'">\n                <ion-label *ngIf="rulesFullFilled(\'visible\', item)" stacked>{{item.title}}</ion-label>\n                <ion-input *ngIf="rulesFullFilled(\'visible\', item)" [(ngModel)]="item.reflector" type="number"\n                           [ngClass]="getBorderClassOfItem(item)"\n                           value="" min="0"\n                           placeholder="{{item.getField(\'placeholder\')}}">\n                </ion-input>\n              </ion-item>\n                <!-- INTEGER Input END -->\n\n                <!-- TEL Input -->\n              <ion-item *ngIf="item.type == \'tel\'">\n                <ion-label stacked>{{item.title}}</ion-label>\n                  <!-- <ion-label stacked>{{item.title}}</ion-label> -->\n                <ion-input disabled="{{rulesFullFilled(\'disabled\', item)}}" [(ngModel)]="item.reflector" type="tel"\n                           [ngClass]="getBorderClassOfItem(item)"\n                           value="" placeholder="{{item.getField(\'placeholder\')}}"></ion-input>\n              </ion-item>\n                <!-- TEL Input END -->\n\n                <!-- EMAIL Input -->\n              <ion-item *ngIf="item.type == \'email\'">\n                <ion-label stacked>{{item.title}}</ion-label>\n                  <!-- <ion-label stacked>{{item.title}}</ion-label> -->\n                <ion-input disabled="{{rulesFullFilled(\'disabled\', item)}}" [(ngModel)]="item.reflector" type="email"\n                           [ngClass]="getBorderClassOfItem(item)"\n                           value="" placeholder="{{item.getField(\'placeholder\')}}"></ion-input>\n              </ion-item>\n                <!-- EMAIL Input END -->\n\n                <!-- SELECT -->\n              <ion-item *ngIf="item.type == \'select\' && rulesFullFilled(\'visible\', item)">\n                <ion-label stacked>{{item.title}}</ion-label>\n                <ion-select disabled="{{rulesFullFilled(\'disabled\', item)}}" [(ngModel)]="item.reflector"\n                            [ngClass]="getBorderClassOfItem(item)">\n                  <ion-option *ngFor="let option of item.getField(\'values\')">{{option}}</ion-option>\n                </ion-select>\n              </ion-item>\n                <!-- SELECT END -->\n\n                <!-- TOGGLE -->\n              <ion-item *ngIf="item.type == \'webform_toggle\' && rulesFullFilled(\'visible\', item)"\n                        [ngClass]="getBorderClassOfItem(item)">\n                <ion-label> {{ item.title}}</ion-label>\n                <ion-toggle disabled="{{rulesFullFilled(\'disabled\', item)}}" [(ngModel)]="item.reflector"\n                            checked="false"></ion-toggle>\n              </ion-item>\n                <!-- TOGGLE END -->\n\n                <!-- RANGE -->\n              <ion-item *ngIf="item.type == \'range\'" disabled="{rulesFullFilled(\'disabled\', item)}}"\n                        [(ngModel)]="item.reflector">\n                <ion-label text-left>{{item.title}}</ion-label>\n                <ion-range min="0" max="10" snaps="true" step="1" disabled="{{rulesFullFilled(\'disabled\', item)}}"\n                           [ngClass]="getBorderClassOfItem(item)"\n                           [(ngModel)]="item.reflector">\n                  <ion-label range-left>0</ion-label>\n                  <ion-label range-right>10</ion-label>\n                </ion-range>\n              </ion-item>\n                <!-- RANGE END -->\n\n                <!-- RADIO -->\n              <div class="radio-group" *ngIf="item.type == \'radios\' && rulesFullFilled(\'visible\', item)">\n                <ion-list disabled="{{rulesFullFilled(\'disabled\', item)}}" [ngClass]="getBorderClassOfItem(item)"\n                          [(ngModel)]="item.reflector" radio-group>\n                  <ion-item *ngFor="let option of item.getField(\'values\')">\n                    <ion-label>{{option}}</ion-label>\n                    <ion-radio value="{{option}}"></ion-radio>\n                  </ion-item>\n                </ion-list>\n              </div>\n                <!-- RADIO END -->\n\n                <!-- TEXTAREA -->\n              <ion-item *ngIf="(item.type == \'Memo\') && rulesFullFilled(\'visible\', item)">\n                <ion-label stacked>{{item.title}}</ion-label>\n                <ion-textarea disabled="{{rulesFullFilled(\'disabled\', item)}}" [(ngModel)]="item.reflector"\n                              [ngClass]="getBorderClassOfItem(item)"\n                              placeholder="{{item.getField(\'placeholder\')}}"></ion-textarea>\n              </ion-item>\n                <!-- TEXTAREA END -->\n\n                <!-- CANVAS  -->\n	            <div *ngIf="item.type == \'canvas\'" class="canvas" style="margin-bottom:30px;">\n                      <ion-label text-left>{{item.title}}</ion-label>\n                      <ion-grid>\n                        <ion-row *ngIf="item.getField(\'kind\') == \'human\'">\n                          <ion-col col-6 col-md-3 text-center>\n                            <img src="{{getPreviewData(\'assets/checkin/man_model_03.jpg\', item.name)}}"\n                                 (click)="showDrawer(\'assets/checkin/man_model_03.jpg\', item.getField(\'kind\'), item.name)">\n                            <button ion-button\n                                    (click)="showDrawer(\'assets/checkin/man_model_03.jpg\', item.getField(\'kind\'), item.name)">Vorne &nbsp;\n                              <ion-icon name="brush"></ion-icon>\n                            </button>\n                          </ion-col>\n\n                          <ion-col col-6 col-md-3 text-center>\n                            <img src="{{getPreviewData(\'assets/checkin/man_model_04.jpg\', item.name)}}"\n                                 (click)="showDrawer(\'assets/checkin/man_model_04.jpg\', item.getField(\'kind\'), item.name)">\n                            <button ion-button\n                                    (click)="showDrawer(\'assets/checkin/man_model_04.jpg\', item.getField(\'kind\'), item.name)">Rücken &nbsp;\n                              <ion-icon name="brush"></ion-icon>\n                            </button>\n                          </ion-col>\n\n                          <ion-col col-6 col-md-3 text-center>\n                            <img src="{{getPreviewData(\'assets/checkin/man_model_05.jpg\', item.name)}}"\n                                 (click)="showDrawer(\'assets/checkin/man_model_05.jpg\', item.getField(\'kind\'), item.name)">\n                            <button ion-button\n                                    (click)="showDrawer(\'assets/checkin/man_model_05.jpg\', item.getField(\'kind\'), item.name)">Seite &nbsp;\n                              <ion-icon name="brush"></ion-icon>\n                            </button>\n                          </ion-col>\n\n                          <ion-col col-6 col-md-3 text-center>\n                            <img src="{{getPreviewData(\'assets/checkin/man_model_06.jpg\', item.name)}}"\n                                 (click)="showDrawer(\'assets/checkin/man_model_06.jpg\', item.getField(\'kind\'), item.name)">\n                            <button ion-button\n                                    (click)="showDrawer(\'assets/checkin/man_model_06.jpg\', item.getField(\'kind\'), item.name)">Seite &nbsp;\n                              <ion-icon name="brush"></ion-icon>\n                            </button>\n                          </ion-col>\n                        </ion-row>\n\n                        <ion-row *ngIf="item.getField(\'kind\') == \'sign\'">\n                          <ion-col col-12 text-center>\n                            <img src="{{getPreviewData(\'assets/checkin/sign.jpg\', item.name)}}"\n                                 (click)="showDrawer(\'assets/checkin/sign.jpg\', item.getField(\'kind\'), item.name)">\n                            <button ion-button\n                                    (click)="showDrawer(\'assets/checkin/sign.jpg\', item.getField(\'kind\'), item.name)">Hier Unterschreiben\n                              <ion-icon name="brush"></ion-icon>\n                            </button>\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </div>\n                <!-- CANVAS END -->\n\n                <!-- RADIO WITH OTHERS -->\n              <div class="radio-group" *ngIf="item.type == \'webform_radios_other\' && rulesFullFilled(\'visible\', item)">\n                <ion-list disabled="{{rulesFullFilled(\'disabled\', item)}}" [ngClass]="getBorderClassOfItem(item)"\n                          [(ngModel)]="item.reflector" radio-group>\n                  <ion-item *ngFor="let option of item.getField(\'values\')">\n                    <ion-label>{{option}}</ion-label>\n                    <ion-radio value="{{option}}" *ngIf="option != item.getField(\'other_select\')"\n                               checked="{{item.reflector == option && option != item.getField(\'other_select\')}}"></ion-radio>\n                    <ion-radio (ionSelect)="onRadioChange(item)" value="{{option}}"\n                               checked="{{item.reflector == option && option == item.getField(\'other_select\')}}"\n                               *ngIf="option == item.getField(\'other_select\')"></ion-radio>\n                  </ion-item>\n\n                  <ion-item *ngIf="item.reflector == item.getField(\'other_select\')">\n                    <!-- TODO write explaning Text -->\n                    <ion-note item-start *ngIf="item.getField(\'other_prefix\') != null">\n                      {{item.getField(\'other_prefix\')}}\n                    </ion-note>\n                    <ion-note item-end *ngIf="item.getField(\'other_suffix\') != null">\n                      {{item.getField(\'other_suffix\')}}\n                    </ion-note>\n                    <ion-input [(ngModel)]="item.reflector_other" type="text"\n                               value="" placeholder="{{item.getField(\'placeholder\')}}">\n                    </ion-input>\n                  </ion-item>\n                </ion-list>\n              </div>\n                <!-- RADIO WITH OTHER END -->\n\n                <!-- PROCESSED TEXT -->\n              <div *ngIf="item.type == \'processed_text\'">\n                <ion-card>\n                  <ion-card-content padding>\n                  <div [innerHTML]="item.getField(\'text\')"></div>\n                  </ion-card-content>\n                </ion-card>\n              </div>\n                <!-- PROCESSED TEXT END -->\n\n                <!-- CHECKBOXES -->\n              <div class="radio-group" *ngIf="item.type == \'checkboxes\' && rulesFullFilled(\'visible\', item)">\n                <ion-list disabled="{{rulesFullFilled(\'disabled\', item)}}" [ngClass]="getBorderClassOfItem(item)"\n                          [(ngModel)]="item.reflector" radio-group>\n                  <ion-item *ngFor="let option of item.getField(\'values\')">\n                    <ion-label>{{option.val}}</ion-label>\n                    <ion-checkbox [(ngModel)]="option.ref"></ion-checkbox>\n                  </ion-item>\n                </ion-list>\n              </div>\n                <!-- CHECKBOXES END -->\n\n                <!-- CHECKBOXES WITH OTHERS -->\n              <div class="radio-group"\n                   *ngIf="item.type == \'webform_checkboxes_other\' && rulesFullFilled(\'visible\', item)">\n                <ion-list disabled="{{rulesFullFilled(\'disabled\', item)}}" [ngClass]="getBorderClassOfItem(item)"\n                          radio-group>\n                  <ion-item *ngFor="let option of item.getField(\'values\')">\n                    <ion-label>{{option.val}}</ion-label>\n                    <ion-checkbox [(ngModel)]="option.ref"></ion-checkbox>\n                  </ion-item>\n                  <ion-item *ngIf="item.isOtherChecked">\n                    <!-- TODO write explaning Text -->\n                    <ion-input [(ngModel)]="item.reflector_other" type="text" [ngClass]="getBorderClassOfItem(item)"\n                               placeholder="{{item.getField(\'placeholder\')}}"></ion-input>\n                  </ion-item>\n                </ion-list>\n              </div>\n                <!-- CHECKBOXES WITH OTHERS END -->\n\n                <!-- DATE -->\n              <ion-item *ngIf="item.type == \'date\' || item.type == \'datelist\'">\n                <!-- <ion-label stacked>{{item.title}}</ion-label> -->\n                <ion-input type="date" [max]="maxSelectionDate" displayFormat="DD/MM/YYYY"\n                           [(ngModel)]="item.reflector" [ngClass]="getBorderClassOfItem(item)"\n                           disabled="{{rulesFullFilled(\'disabled\', item)}}"\n                           value="" placeholder="{{item.getField(\'placeholder\')}}">\n                </ion-input>\n                  <!--                <ion-datetime [max]="maxSelectionDate" *ngIf="!isIE" displayFormat="DD/MM/YYYY" [(ngModel)]="item.reflector" [ngClass]="getBorderClassOfItem(item)"-->\n                  <!--                              cancelText="Abbrechen" doneText="Fertig"-->\n                  <!--                              disabled="{{rulesFullFilled(\'disabled\', item)}}"></ion-datetime>-->\n                  <!--                <ion-input [max]="maxSelectionDate" *ngIf="isIE" disabled="{{rulesFullFilled(\'disabled\', item)}}" [(ngModel)]="item.reflector" [ngClass]="getBorderClassOfItem(item)"-->\n                  <!--                           type="text"-->\n                  <!--                           value="" placeholder="{{item.getField(\'placeholder\')}}"></ion-input>-->\n              </ion-item>\n                <!-- DATE END -->\n\n                <!-- TIME -->\n              <ion-item *ngIf="item.type == \'webform_time\'">\n                <!-- <ion-label stacked>{{item.title}}</ion-label> -->\n                <ion-input type="time"\n                           displayFormat="HH:mm"\n                           [ngClass]="getBorderClassOfItem(item)"\n                           [(ngModel)]="item.reflector"\n                           disabled="{{rulesFullFilled(\'disabled\', item)}}">\n                </ion-input>\n                  <!--                <ion-datetime *ngIf="!isIE" displayFormat="HH:mm" [(ngModel)]="item.reflector" cancelText="Abbrechen" [ngClass]="getBorderClassOfItem(item)"-->\n                  <!--                              doneText="Fertig"-->\n                  <!--                              disabled="{{rulesFullFilled(\'disabled\', item)}}"></ion-datetime>-->\n                  <!--                <ion-input *ngIf="isIE" disabled="{{rulesFullFilled(\'disabled\', item)}}" [(ngModel)]="item.reflector" [ngClass]="getBorderClassOfItem(item)"-->\n                  <!--                           type="text"-->\n                  <!--                           value="" placeholder="{{item.getField(\'placeholder\')}}"></ion-input>-->\n              </ion-item>\n                <!-- TIME END -->\n\n                <!-- LIKERT -->\n              <div *ngIf="item.type == \'webform_likert\' && rulesFullFilled(\'visible\', item)">\n                <div class="radio-group" *ngFor="let childNode of item.children">\n                  <ion-label>{{childNode.title}}</ion-label>\n                  <ion-list disabled="{{rulesFullFilled(\'disabled\', item)}}" *ngIf="childNode.name != \'table\'"\n                            [(ngModel)]="childNode.reflector" radio-group>\n\n                    <ion-item *ngFor="let option of childNode.getField(\'values\')">\n                    <ion-label>{{option.value}}</ion-label>\n                    <ion-radio value="{{option.key}}"></ion-radio>\n                    </ion-item>\n                  </ion-list>\n                </div>\n              </div>\n                <!-- LIKERT END -->\n\n                <!-- Web Address OR FIELDSET -->\n              <div *ngIf="item.type == \'webform_address\' || item.type == \'fieldset\'">\n                <div *ngIf="rulesFullFilled(\'visible\', item)">\n                  <div *ngIf="item.getField(\'description\') != null">\n                    <ion-card>\n                      <ion-card-content padding>\n                        <div [innerHTML]="item.getField(\'description\')"></div>\n                      </ion-card-content>\n                    </ion-card>\n                  </div>\n\n                  <ion-row *ngFor="let subItem of item.children">\n<!--                    {{subItem.type + \' \' + subItem.id}} - 1-->\n\n                      <!-- SUB TEXT Input -->\n                    <ion-item *ngIf="subItem.type == \'Text\' || subItem.type == \'webform_multiple\'">\n                      <ion-label *ngIf="rulesFullFilled(\'visible\', subItem)" stacked>{{subItem.title}}</ion-label>\n                      <ion-input *ngIf="rulesFullFilled(\'visible\', subItem)" [(ngModel)]="subItem.reflector" type="text"\n                                 value="" placeholder="{{subItem.getField(\'placeholder\')}}"\n                                 [ngClass]="getBorderClassOfItem(subItem)"></ion-input>\n                    </ion-item>\n                      <!-- SUB TEXT Input END-->\n\n                      <!-- SUB INTEGER -->\n                          <ion-item *ngIf="subItem.type == \'Integer\'">\n                            <ion-label stacked>{{subItem.title}}</ion-label>\n                            <ion-input disabled="{{rulesFullFilled(\'disabled\', subItem)}}"\n                                       [(ngModel)]="subItem.reflector"\n                                       type="number" value="" min="0"\n                                       placeholder="{{subItem.getField(\'placeholder\')}}"\n                                       [ngClass]="getBorderClassOfItem(subItem)">\n                            </ion-input>\n                          </ion-item>\n                      <!-- SUB INTEGER END -->\n\n                      <!-- SUB FLOAT -->\n                    <ion-item *ngIf="subItem.type == \'Float\'">\n                      <ion-label stacked>{{subItem.title}}</ion-label>\n\n                      <ion-input disabled="{{rulesFullFilled(\'disabled\', subItem)}}" [(ngModel)]="subItem.reflector"\n                                 type="number" value="" step="0.1" min="0"\n                                 placeholder="{{subItem.getField(\'placeholder\')}}"\n                                 [ngClass]="getBorderClassOfItem(subItem)">\n                      </ion-input>\n                      <ion-note item-end *ngIf="subItem.getField(\'suffix\') != null">\n                            {{subItem.getField(\'suffix\')}}\n                      </ion-note>\n                    </ion-item>\n                      <!-- SUB FLOAT END -->\n\n                      <!-- SUB TEL Input -->\n                    <ion-item *ngIf="subItem.type == \'tel\'">\n                      <ion-label stacked>{{subItem.title}}</ion-label>\n                      <ion-input disabled="{{rulesFullFilled(\'disabled\', subItem)}}" [(ngModel)]="subItem.reflector"\n                                 type="tel" value="" placeholder="{{subItem.getField(\'placeholder\')}}"\n                                 [ngClass]="getBorderClassOfItem(subItem)"></ion-input>\n                    </ion-item>\n                      <!-- SUB TEL Input END -->\n\n                      <!-- SUB EMAIL Input -->\n                    <ion-item *ngIf="subItem.type == \'email\'">\n                      <ion-label stacked>{{subItem.title}}</ion-label>\n                        <!-- <ion-label stacked>{{item.title}}</ion-label> -->\n                      <ion-input disabled="{{rulesFullFilled(\'disabled\', subItem)}}" [(ngModel)]="subItem.reflector"\n                                 type="email"\n                                 value="" placeholder="{{subItem.getField(\'placeholder\')}}"\n                                 [ngClass]="getBorderClassOfItem(subItem)"></ion-input>\n                    </ion-item>\n                      <!-- SUB EMAIL Input END -->\n\n                      <!-- SUB PROCESSED TEXT -->\n                      <!--                    <div *ngIf="subItem.type == \'Memo\'">-->\n                      <!--                      <ion-card>-->\n                      <!--                        <ion-card-content padding>-->\n                      <!--                        <div [innerHTML]="subItem.getField(\'text\')"></div>-->\n                      <!--                        </ion-card-content>-->\n                      <!--                      </ion-card>-->\n                      <!--                    </div>-->\n                      <!-- SUB PROCESSED TEXT END -->\n\n                      <!-- SUB SELECT -->\n                    <ion-item *ngIf="subItem.type == \'List\'">\n                      <ion-label stacked>{{subItem.title}}</ion-label>\n                      <ion-select [(ngModel)]="subItem.reflector" [ngClass]="getBorderClassOfItem(subItem)" cancelText="Abbrechen">\n                        <ion-option *ngFor="let option of subItem.getField(\'values\')">{{option}}</ion-option>\n                      </ion-select>\n                    </ion-item>\n                    <div *ngIf="subItem.getField(\'description\') != null && subItem.getField(\'description\') !==\'re und/oder li\'">\n                      {{subItem.getField(\'description\')}}\n                    </div>\n\n                      <!-- SUB SELECT END -->\n\n                      <!-- SUB TOGGLE -->\n                    <ion-item *ngIf="subItem.type == \'webform_toggle\'">\n                      <ion-label> {{ subItem.title}}</ion-label>\n                      <ion-toggle disabled="{{rulesFullFilled(\'disabled\', subItem)}}" [(ngModel)]="subItem.reflector"\n                                  [ngClass]="getBorderClassOfItem(subItem)"\n                                  checked="false"></ion-toggle>\n                    </ion-item>\n                      <!-- SUB TOGGLE END -->\n\n                      <!-- SUB RANGE -->\n                    <ion-item *ngIf="subItem.type == \'range\'">\n                      <ion-label text-left>{{subItem.title}}</ion-label>\n                      <ion-range min="0" max="10" snaps="true" step="1"\n                                 disabled="{{rulesFullFilled(\'disabled\', subItem)}}"\n                                 [ngClass]="getBorderClassOfItem(subItem)"\n                                 [(ngModel)]="subItem.reflector">\n                        <ion-label range-left>0</ion-label>\n                        <ion-label range-right>10</ion-label>\n                      </ion-range>\n                    </ion-item>\n                      <!-- SUB RANGE END -->\n\n                      <!-- SUB RADIOS -->\n                    <div class="radio-group" *ngIf="subItem.type == \'radios\' && rulesFullFilled(\'visible\', subItem)">\n                      <ion-list disabled="{{rulesFullFilled(\'disabled\', subItem)}}"\n                                [ngClass]="getBorderClassOfItem(subItem)" [(ngModel)]="subItem.reflector" radio-group>\n                        <ion-label>{{elementNr === 4 && j === 6 ? subItem.title : \'\'}}</ion-label>\n                        <ion-item *ngFor="let option of subItem.getField(\'values\')">\n                          <ion-label>{{option}}</ion-label>\n                          <ion-radio (ionSelect)="handleCheckBoxChange(subItem.name, option)"\n                                     value="{{option}}"></ion-radio>\n                        </ion-item>\n                      </ion-list>\n                    </div>\n                      <!-- SUB RADIO END -->\n\n                      <!-- SUB CHECKBOXES -->\n                    <div class="radio-group"\n                         *ngIf="subItem.type == \'checkboxes\' && rulesFullFilled(\'visible\', subItem)">\n                      <ion-list disabled="{{rulesFullFilled(\'disabled\', subItem)}}"\n                                [ngClass]="getBorderClassOfItem(subItem)"\n                                [(ngModel)]="subItem.reflector" radio-group>\n                        <ion-label>{{subItem.title}}</ion-label>\n\n                        <ion-item *ngFor="let option of subItem.getField(\'values\')">\n                          <ion-label>{{option.val}}</ion-label>\n                          <ion-checkbox [(ngModel)]="option.ref"></ion-checkbox>\n                            <!-- NOT READY -->\n                        </ion-item>\n                      </ion-list>\n                    </div>\n                      <!-- SUB CHECKBOXES END -->\n\n                      <!-- SUB CHECKBOX -->\n                    <div class="radio-group" *ngIf="subItem.type == \'Checkbox\' && rulesFullFilled(\'visible\', subItem)">\n                      <ion-list disabled="{{rulesFullFilled(\'disabled\', subItem)}}"\n                                [ngClass]="getBorderClassOfItem(subItem)"\n                                [(ngModel)]="subItem.reflector" radio-group>\n                        <table width="100%">\n                            <tr *ngFor="let option of subItem.getField(\'values\')">\n                              <td *ngIf="subItem.getField(\'field_prefix\') != null">\n                                <ion-item>\n                                  <ion-label text-right>{{subItem.getField(\'field_prefix\')}}</ion-label>\n                                </ion-item>\n                              </td>\n                              <td>\n                                <ion-item>\n                                  <ion-checkbox (ionChange)="handleCheckBoxChange(subItem.name, option.ref)"\n                                                [(ngModel)]="option.ref">{{option.val}}></ion-checkbox>\n                                  <ion-label>{{subItem.title}}</ion-label>\n                                </ion-item>\n\                              </td>\n                            </tr>\n                        </table>\n                      </ion-list>\n                    </div>\n                      <!-- SUB CHECKBOX END -->\n\n                      <!-- SUB RADIO WITH OTHERS -->\n                    <div class="radio-group"\n                         *ngIf="subItem.type == \'webform_radios_other\' && rulesFullFilled(\'visible\', subItem)">\n                      <ion-list disabled="{{rulesFullFilled(\'disabled\', item)}}"\n                                [ngClass]="getBorderClassOfItem(subItem)"\n                                [(ngModel)]="subItem.reflector" radio-group>\n                        <ion-label>{{subItem.title}}</ion-label>\n\n                        <ion-item *ngFor="let option of subItem.getField(\'values\')">\n                          <ion-label>{{option}}</ion-label>\n                          <ion-radio value="{{option}}" *ngIf="option != subItem.getField(\'other_select\')"\n                                     checked="{{subItem.reflector == option && option != subItem.getField(\'other_select\')}}"></ion-radio>\n                          <ion-radio value="{{option}}"\n                                     checked="{{subItem.reflector == option && option == subItem.getField(\'other_select\')}}"\n                                     (ionSelect)="onRadioChange(subItem)"\n                                     *ngIf="option == subItem.getField(\'other_select\')"></ion-radio>\n                        </ion-item>\n\n                        <ion-item *ngIf="subItem.reflector == subItem.getField(\'other_select\')">\n                          <ion-note item-start *ngIf="subItem.getField(\'other_prefix\') != null">\n                            {{subItem.getField(\'other_prefix\')}}\n                          </ion-note>\n                          <ion-note item-end *ngIf="subItem.getField(\'other_suffix\') != null">\n                            {{subItem.getField(\'other_suffix\')}}\n                          </ion-note>\n                          <ion-input [(ngModel)]="subItem.reflector_other" type="text"\n                                     value="" placeholder="{{subItem.getField(\'placeholder\')}}">\n                          </ion-input>\n                        </ion-item>\n                      </ion-list>\n                    </div>\n                      <!-- SUB RADIO WITH OTHER END -->\n\n                      <!-- SUB Delete added items -->\n                    <ion-item *ngIf="subItem.type == \'group_del\'">\n                      <button ion-button (click)="delSubGroup(item, subItem.getField(\'id\'))">x</button><button\n                            color="secondary" ion-button clear\n                            (click)="delSubGroup(item, subItem.getField(\'id\'))">entfernen</button>\n                    </ion-item>\n                      <!-- SUB Delete added items END -->\n\n                      <!-- SUB LIKERT -->\n                    <div *ngIf="subItem.type == \'webform_likert\' && rulesFullFilled(\'visible\', subItem)">\n                      <div class="radio-group" *ngFor="let childNode of subItem.children">\n                        <ion-label>{{childNode.title}}</ion-label>\n                        <ion-list disabled="{{rulesFullFilled(\'disabled\', subItem)}}" *ngIf="childNode.name != \'table\'"\n                                  [ngClass]="getBorderClassOfItem(subItem)"\n                                  [(ngModel)]="childNode.reflector" radio-group>\n\n                          <ion-item *ngFor="let option of childNode.getField(\'values\')">\n                            <ion-label>{{option.value}}</ion-label>\n                            <ion-radio value="{{option.key}}"></ion-radio>\n                          </ion-item>\n                        </ion-list>\n                      </div>\n                    </div>\n                      <!-- SUB LIKERT END-->\n\n                      <!-- SUB DATE -->\n                    <ion-item\n                            *ngIf="(subItem.type == \'date\' || subItem.type == \'datelist\') && rulesFullFilled(\'visible\', subItem)">\n                      <ion-label stacked>{{subItem.title}}</ion-label>\n                      <ion-input type="date" [max]="maxSelectionDate" displayFormat="DD/MM/YYYY"\n                                 [(ngModel)]="subItem.reflector" [ngClass]="getBorderClassOfItem(subItem)"\n                                 disabled="{{rulesFullFilled(\'disabled\', subItem)}}"\n                                 value="" placeholder="{{subItem.getField(\'placeholder\')}}">\n                      </ion-input>\n                        <!--                      <ion-datetime [max]="maxSelectionDate" *ngIf="!isIE" displayFormat="DD/MM/YYYY" [(ngModel)]="subItem.reflector" [ngClass]="getBorderClassOfItem(subItem)"-->\n                        <!--                                    cancelText="Abbrechen" doneText="Fertig"-->\n                        <!--                                    disabled="{{rulesFullFilled(\'disabled\', subItem)}}"></ion-datetime>-->\n                        <!--                      <ion-input [max]="maxSelectionDate"*ngIf="isIE" disabled="{{rulesFullFilled(\'disabled\', subItem)}}" [ngClass]="getBorderClassOfItem(subItem)"-->\n                        <!--                                 [(ngModel)]="subItem.reflector" type="text"-->\n                        <!--                                 value="" placeholder="{{subItem.getField(\'placeholder\')}}"></ion-input>-->\n\n                    </ion-item>\n                      <!-- SUB DATE END -->\n\n                      <!-- SUB TIME -->\n                    <ion-item *ngIf="subItem.type == \'webform_time\' && rulesFullFilled(\'visible\', subItem)">\n                      <ion-label stacked>{{subItem.title}}</ion-label>\n                      <ion-input type="time"\n                                 displayFormat="HH:mm"\n                                 [ngClass]="getBorderClassOfItem(subItem)"\n                                 [(ngModel)]="subItem.reflector"\n                                 disabled="{{rulesFullFilled(\'disabled\', subItem)}}">\n                      </ion-input>\n                        <!--                      <ion-datetime *ngIf="!isIE" displayFormat="HH:mm" [(ngModel)]="subItem.reflector" [ngClass]="getBorderClassOfItem(subItem)"-->\n                        <!--                                    cancelText="Abbrechen" doneText="Fertig"-->\n                        <!--                                    disabled="{{rulesFullFilled(\'disabled\', subItem)}}"></ion-datetime>-->\n                        <!--                      <ion-input *ngIf="isIE" disabled="{{rulesFullFilled(\'disabled\', subItem)}}" [ngClass]="getBorderClassOfItem(subItem)"-->\n                        <!--                                 [(ngModel)]="subItem.reflector" type="text"-->\n                        <!--                                 value="" placeholder="{{subItem.getField(\'placeholder\')}}"></ion-input>-->\n                    </ion-item>\n                      <!-- SUB TIME END -->\n\n                      <!-- SUB TEXTAREA -->\n                    <ion-item *ngIf="subItem.type == \'Memo\' && rulesFullFilled(\'visible\', subItem)">\n                      <ion-label stacked>{{subItem.title}}</ion-label>\n                      <ion-textarea disabled="{{rulesFullFilled(\'disabled\', subItem)}}"\n                                    [ngClass]="getBorderClassOfItem(subItem)"\n                                    [(ngModel)]="subItem.reflector"\n                                    placeholder="{{subItem.getField(\'placeholder\')}}"></ion-textarea>\n                    </ion-item>\n                      <!-- SUB TEXTAREA END -->\n\n                      <!-- SUB CANVAS  -->\n                    <div *ngIf="subItem.type == \'canvas\'" class="canvas" style="margin-bottom:30px;">\n                      <ion-label text-left>{{subItem.title}}</ion-label>\n                      <ion-grid>\n                        <ion-row *ngIf="subItem.getField(\'kind\') == \'human\'">\n                          <ion-col col-6 col-md-3 text-center>\n                            <img src="{{getPreviewData(\'assets/checkin/man_model_03.jpg\', subItem.name)}}"\n                                 (click)="showDrawer(\'assets/checkin/man_model_03.jpg\', subItem.getField(\'kind\'), subItem.name)">\n                            <button ion-button\n                                    (click)="showDrawer(\'assets/checkin/man_model_03.jpg\', subItem.getField(\'kind\'), subItem.name)">Vorne &nbsp;\n                              <ion-icon name="brush"></ion-icon>\n                            </button>\n                          </ion-col>\n\n                          <ion-col col-6 col-md-3 text-center>\n                            <img src="{{getPreviewData(\'assets/checkin/man_model_04.jpg\', subItem.name)}}"\n                                 (click)="showDrawer(\'assets/checkin/man_model_04.jpg\', subItem.getField(\'kind\'), subItem.name)">\n                            <button ion-button\n                                    (click)="showDrawer(\'assets/checkin/man_model_04.jpg\', subItem.getField(\'kind\'), subItem.name)">Rücken &nbsp;\n                              <ion-icon name="brush"></ion-icon>\n                            </button>\n                          </ion-col>\n\n                          <ion-col col-6 col-md-3 text-center>\n                            <img src="{{getPreviewData(\'assets/checkin/man_model_05.jpg\', subItem.name)}}"\n                                 (click)="showDrawer(\'assets/checkin/man_model_05.jpg\', subItem.getField(\'kind\'), subItem.name)">\n                            <button ion-button\n                                    (click)="showDrawer(\'assets/checkin/man_model_05.jpg\', subItem.getField(\'kind\'), subItem.name)">Seite &nbsp;\n                              <ion-icon name="brush"></ion-icon>\n                            </button>\n                          </ion-col>\n\n                          <ion-col col-6 col-md-3 text-center>\n                            <img src="{{getPreviewData(\'assets/checkin/man_model_06.jpg\', subItem.name)}}"\n                                 (click)="showDrawer(\'assets/checkin/man_model_06.jpg\', subItem.getField(\'kind\'), subItem.name)">\n                            <button ion-button\n                                    (click)="showDrawer(\'assets/checkin/man_model_06.jpg\', subItem.getField(\'kind\'), subItem.name)">Seite &nbsp;\n                              <ion-icon name="brush"></ion-icon>\n                            </button>\n                          </ion-col>\n                        </ion-row>\n\n                        <ion-row *ngIf="subItem.getField(\'kind\') == \'sign\'">\n                          <ion-col col-12 text-center>\n                            <img src="{{getPreviewData(\'assets/checkin/sign.jpg\', subItem.name)}}"\n                                 (click)="showDrawer(\'assets/checkin/sign.jpg\', subItem.getField(\'kind\'), subItem.name)">\n                            <button ion-button\n                                    (click)="showDrawer(\'assets/checkin/sign.jpg\', subItem.getField(\'kind\'), subItem.name)">Hier Unterschreiben\n                              <ion-icon name="brush"></ion-icon>\n                            </button>\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </div>\n                      <!-- SUB CANVAS END -->\n\n                      <!-- SUB CHECKBOXES WITH OTHERS -->\n                    <div class="checkbox-group"\n                         *ngIf="subItem.type == \'webform_checkboxes_other\' && rulesFullFilled(\'visible\', subItem)">\n                      <ion-label>{{subItem.title}}</ion-label>\n                      <ion-list disabled="{{rulesFullFilled(\'disabled\', subItem)}}"\n                                [ngClass]="getBorderClassOfItem(subItem)" radio-group>\n                        <ion-item *ngFor="let option of subItem.getField(\'values\')">\n                          <ion-label>{{option.val}}</ion-label>\n                          <ion-checkbox [(ngModel)]="option.ref"></ion-checkbox>\n                        </ion-item>\n                        <table *ngIf="subItem.isOtherChecked">\n                            <tr>\n                              <th>\n                                <ion-item>\n                                  <ion-input [(ngModel)]="subItem.reflector_other" type="text"\n                                             [ngClass]="getBorderClassOfItem(subItem)"\n                                             placeholder="{{subItem.getField(\'placeholder\')}}">\n                                  </ion-input>\n                                </ion-item>\n                              </th>\n                              <th>\n                                &nbsp;{{subItem.getField(\'other_suffix\')}}\n                              </th>\n                            </tr>\n                          </table>\n                          <!-- TODO write explaning Text -->\n                      </ion-list>\n\n                    </div>\n                      <!-- SUB CHECKBOXES WITH OTHERS END -->\n\n                      <!-- SUB2 Web Address OR FIELDSET -->\n                    <div *ngIf="subItem.type == \'webform_address\' || subItem.type == \'fieldset\'">\n                      <div *ngIf="rulesFullFilled(\'visible\', subItem)">\n                        <h4>{{subItem.title}}</h4>\n                        <div *ngIf="subItem.getField(\'description\') != null">\n                          <ion-card>\n                            <ion-card-content padding>\n                              <div [innerHTML]="subItem.getField(\'description\')"></div>\n                            </ion-card-content>\n                          </ion-card>\n                        </div>\n\n                        <ion-row *ngFor="let subItem2 of subItem.children">\n                          {{subItem2.type}} - 2\n                            <!-- SUB3 LEVEL -->\n                          <div *ngIf="subItem2.type == \'webform_address\' || subItem2.type == \'fieldset\'">\n                            <div *ngIf="rulesFullFilled(\'visible\', subItem2)">\n                              <h4>{{subItem2.title}}</h4>\n                              <ion-row *ngFor="let subItem3 of subItem2.children">\n                                {{subItem3.type}} - 3\n                                  <!-- SUB4 LEVEL -->\n                                <div *ngIf="subItem3.type == \'webform_address\' || subItem3.type == \'fieldset\'">\n                                  <div *ngIf="rulesFullFilled(\'visible\', subItem3)">\n                                    <h5>{{subItem3.title}}</h5>\n                                    <ion-row *ngFor="let subItem4 of subItem3.children">\n                                      {{subItem4.type}} - 4\n                                        <!-- SUB4 TEXT Input -->\n                                      <ion-item\n                                              *ngIf="subItem4.type == \'textfield\' || subItem4.type == \'webform_multiple\'">\n                                        <ion-label *ngIf="rulesFullFilled(\'visible\', subItem4)"\n                                                   stacked>{{subItem4.title}}</ion-label>\n                                        <ion-input *ngIf="rulesFullFilled(\'visible\', subItem4)"\n                                                   [(ngModel)]="subItem4.reflector" type="text"\n                                                   value="" placeholder="{{subItem4.getField(\'placeholder\')}}"\n                                                   [ngClass]="getBorderClassOfItem(subItem4)"></ion-input>\n                                      </ion-item>\n                                        <!-- SUB4 TEXT Input END-->\n\n                                        <!-- SUB4 LIKERT -->\n                                      <div *ngIf="subItem4.type == \'webform_likert\' && rulesFullFilled(\'visible\', subItem4)">\n                                        <div class="radio-group" *ngFor="let childNode of subItem4.children">\n                                          <ion-label>{{childNode.title}}</ion-label>\n                                          <ion-list disabled="{{rulesFullFilled(\'disabled\', subItem4)}}"\n                                                    *ngIf="childNode.name != \'table\'"\n                                                    [ngClass]="getBorderClassOfItem(subItem4)"\n                                                    [(ngModel)]="childNode.reflector" radio-group>\n\n                                            <ion-item *ngFor="let option of childNode.getField(\'values\')">\n                                              <ion-label>{{option.value}}</ion-label>\n                                              <ion-radio value="{{option.key}}"></ion-radio>\n                                            </ion-item>\n                                          </ion-list>\n                                        </div>\n                                      </div>\n                                        <!-- SUB4 LIKERT END-->\n                                    </ion-row>\n                                  </div>\n                                </div>\n\n                                  <!-- SUB3 TEXT Input -->\n                                <ion-item *ngIf="subItem3.type == \'textfield\' || subItem3.type == \'webform_multiple\'">\n                                  <ion-label *ngIf="rulesFullFilled(\'visible\', subItem3)"\n                                             stacked>{{subItem3.title}}</ion-label>\n                                  <ion-input *ngIf="rulesFullFilled(\'visible\', subItem3)"\n                                             [(ngModel)]="subItem3.reflector" type="text"\n                                             value="" placeholder="{{subItem3.getField(\'placeholder\')}}"\n                                             [ngClass]="getBorderClassOfItem(subItem3)"></ion-input>\n                                </ion-item>\n                                  <!-- SUB3 TEXT Input END-->\n\n                                  <!-- SUB3 RADIO -->\n                                <div class="radio-group"\n                                     *ngIf="subItem3.type == \'radios\' && rulesFullFilled(\'visible\', subItem3)">\n                                  <ion-list disabled="{{rulesFullFilled(\'disabled\', subItem3)}}"\n                                            [ngClass]="getBorderClassOfItem(subItem3)"\n                                            [(ngModel)]="subItem3.reflector" radio-group>\n                                    <ion-label>{{subItem3.title}}</ion-label>\n\n                                    <ion-item *ngFor="let option of subItem3.getField(\'values\')">\n                                      <ion-label>{{option}}</ion-label>\n                                      <ion-radio value="{{option}}"></ion-radio>\n                                    </ion-item>\n                                  </ion-list>\n                                </div>\n                                  <!-- SUB3 RADIO END -->\n\n                                  <!-- SUB3 RADIO WITH OTHERS -->\n                                <div class="radio-group"\n                                     *ngIf="subItem3.type == \'webform_radios_other\' && rulesFullFilled(\'visible\', subItem3)">\n                                  <ion-list disabled="{{rulesFullFilled(\'disabled\', subItem3)}}"\n                                            [ngClass]="getBorderClassOfItem(subItem3)"\n                                            [(ngModel)]="subItem3.reflector" radio-group>\n                                    <ion-label>{{subItem3.title}}</ion-label>\n\n                                    <ion-item *ngFor="let option of subItem3.getField(\'values\')">\n                                      <ion-label>{{option}}</ion-label>\n                                      <ion-radio value="{{option}}" *ngIf="option != subItem3.getField(\'other_select\')"\n                                                 checked="{{subItem3.reflector == option && option != subItem3.getField(\'other_select\')}}"></ion-radio>\n                                      <ion-radio value="{{option}}"\n                                                 checked="{{subItem3.reflector == option && option == subItem3.getField(\'other_select\')}}"\n                                                 (ionSelect)="onRadioChange(subItem)"\n                                                 *ngIf="option == subItem3.getField(\'other_select\')"></ion-radio>\n                                    </ion-item>\n\n                                    <ion-item *ngIf="subItem3.reflector == subItem3.getField(\'other_select\')">\n                                      <ion-note item-start *ngIf="subItem3.getField(\'other_prefix\') != null">\n                                        {{subItem3.getField(\'other_prefix\')}}\n                                      </ion-note>\n                                      <ion-note item-end *ngIf="subItem3.getField(\'other_suffix\') != null">\n                                        {{subItem3.getField(\'other_suffix\')}}\n                                      </ion-note>\n                                      <ion-input [(ngModel)]="subItem3.reflector_other" type="text"\n                                                 value="" placeholder="{{subItem3.getField(\'placeholder\')}}">\n                                      </ion-input>\n                                    </ion-item>\n                                  </ion-list>\n                                </div>\n                                  <!-- SUB3 RADIO WITH OTHER END -->\n\n                                  <!-- SUB3 TEXTAREA -->\n                                <ion-item\n                                        *ngIf="subItem3.type == \'Memo\' && rulesFullFilled(\'visible\', subItem3) && subItem3.visible">\n                                  <ion-label stacked>{{subItem3.title}}</ion-label>\n                                  <ion-textarea disabled="{{rulesFullFilled(\'disabled\', subItem3)}}"\n                                                [ngClass]="getBorderClassOfItem(subItem3)"\n                                                [(ngModel)]="subItem3.reflector"\n                                                placeholder="{{subItem3.getField(\'placeholder\')}}"></ion-textarea>\n                                </ion-item>\n                                  <!-- SUB3 TEXTAREA END -->\n\n                                  <!-- SUB3 INTEGER -->\n                                <ion-item *ngIf="subItem3.type == \'Integer\'">\n                                  <ion-label stacked>{{subItem3.title}}</ion-label>\n                                  <ion-input disabled="{{rulesFullFilled(\'disabled\', subItem3)}}"\n                                             [(ngModel)]="subItem3.reflector"\n                                             type="number" value="" min="0"\n                                             placeholder="{{subItem3.getField(\'placeholder\')}}"\n                                             [ngClass]="getBorderClassOfItem(subItem3)">\n                                  </ion-input>\n                                </ion-item>\n                                  <!-- SUB3 INTEGER END -->\n\n                                  <!-- SUB3 CHECKBOXES WITH OTHERS -->\n                                <div class="checkbox-group"\n                                     *ngIf="subItem3.type == \'webform_checkboxes_other\' && rulesFullFilled(\'visible\', subItem3)">\n                                  <ion-label>{{subItem3.title}}</ion-label>\n                                  <ion-list disabled="{{rulesFullFilled(\'disabled\', subItem3)}}"\n                                            [ngClass]="getBorderClassOfItem(subItem3)" radio-group>\n                                    <ion-item *ngFor="let option of subItem3.getField(\'values\')">\n                                      <ion-label>{{option.val}}</ion-label>\n                                      <ion-checkbox [(ngModel)]="option.ref"></ion-checkbox>\n                                    </ion-item>\n                                    <ion-item *ngIf="subItem3.isOtherChecked">\n                                      <!-- TODO write explaning Text -->\n                                      <ion-input type="text" [ngClass]="getBorderClassOfItem(subItem3)"\n                                                 placeholder="{{subItem3.getField(\'placeholder\')}}"\n                                                 [(ngModel)]="subItem3.reflector_other">\n                                      </ion-input>\n                                    </ion-item>\n                                  </ion-list>\n                                </div>\n                                  <!-- SUB3 CHECKBOXES WITH OTHERS END -->\n\n                                  <!-- SUB3 CHECKBOXES -->\n                                <div class="radio-group"\n                                     *ngIf="subItem3.type == \'checkboxes\' && rulesFullFilled(\'visible\', subItem3)">\n                                  <ion-list disabled="{{rulesFullFilled(\'disabled\', subItem3)}}"\n                                            [ngClass]="getBorderClassOfItem(subItem3)"\n                                            [(ngModel)]="subItem3.reflector" radio-group>\n                                    <ion-label>{{subItem3.title}}</ion-label>\n\n                                    <ion-item *ngFor="let option of subItem3.getField(\'values\')">\n                                      <ion-label>{{option.val}}</ion-label>\n                                      <ion-checkbox [(ngModel)]="option.ref"></ion-checkbox>\n                                        <!-- NOT READY -->\n                                    </ion-item>\n                                  </ion-list>\n                                </div>\n                                  <!-- SUB3 CHECKBOXES END -->\n\n                                  <!-- SUB3 LIKERT -->\n                                <div *ngIf="subItem3.type == \'webform_likert\' && rulesFullFilled(\'visible\', subItem3)">\n                                  <div class="radio-group" *ngFor="let childNode of subItem3.children">\n                                    <ion-label>{{childNode.title}}</ion-label>\n                                    <ion-list disabled="{{rulesFullFilled(\'disabled\', subItem3)}}"\n                                              *ngIf="childNode.name != \'table\'"\n                                              [ngClass]="getBorderClassOfItem(subItem3)"\n                                              [(ngModel)]="childNode.reflector" radio-group>\n\n                                      <ion-item *ngFor="let option of childNode.getField(\'values\')">\n                                        <ion-label>{{option.value}}</ion-label>\n                                        <ion-radio value="{{option.key}}"></ion-radio>\n                                      </ion-item>\n                                    </ion-list>\n                                  </div>\n                                </div>\n                                  <!-- SUB3 LIKERT END-->\n                              </ion-row>\n                            </div>\n                          </div>\n\n                            <!-- SUB2 CANVAS  -->\n                          <div *ngIf="subItem2.type == \'canvas\'" class="canvas" style="margin-bottom:30px;">\n                            <ion-label text-left>{{subItem2.title}}</ion-label>\n                            <ion-grid>\n                              <ion-row *ngIf="subItem2.getField(\'kind\') == \'human\'">\n                                <ion-col col-6 col-md-3 text-center>\n                                  <img src="{{getPreviewData(\'assets/checkin/man_model_03.jpg\', subItem2.name)}}"\n                                       (click)="showDrawer(\'assets/checkin/man_model_03.jpg\', subItem2.getField(\'kind\'), subItem2.name)">\n                                  <button ion-button\n                                          (click)="showDrawer(\'assets/checkin/man_model_03.jpg\', subItem2.getField(\'kind\'), subItem2.name)">Vorne &nbsp;\n                                    <ion-icon name="brush"></ion-icon>\n                                  </button>\n                                </ion-col>\n\n                                <ion-col col-6 col-md-3 text-center>\n                                  <img src="{{getPreviewData(\'assets/checkin/man_model_04.jpg\', subItem2.name)}}"\n                                       (click)="showDrawer(\'assets/checkin/man_model_04.jpg\', subItem2.getField(\'kind\'), subItem2.name)">\n                                  <button ion-button\n                                          (click)="showDrawer(\'assets/checkin/man_model_04.jpg\', subItem2.getField(\'kind\'), subItem2.name)">Rücken &nbsp;\n                                    <ion-icon name="brush"></ion-icon>\n                                  </button>\n                                </ion-col>\n\n                                <ion-col col-6 col-md-3 text-center>\n                                  <img src="{{getPreviewData(\'assets/checkin/man_model_05.jpg\', subItem2.name)}}"\n                                       (click)="showDrawer(\'assets/checkin/man_model_05.jpg\', subItem2.getField(\'kind\'), subItem2.name)">\n                                  <button ion-button\n                                          (click)="showDrawer(\'assets/checkin/man_model_05.jpg\', subItem2.getField(\'kind\'), subItem2.name)">Seite &nbsp;\n                                    <ion-icon name="brush"></ion-icon>\n                                  </button>\n                                </ion-col>\n\n                                <ion-col col-6 col-md-3 text-center>\n                                  <img src="{{getPreviewData(\'assets/checkin/man_model_06.jpg\', subItem2.name)}}"\n                                       (click)="showDrawer(\'assets/checkin/man_model_06.jpg\', subItem2.getField(\'kind\'), subItem2.name)">\n                                  <button ion-button\n                                          (click)="showDrawer(\'assets/checkin/man_model_06.jpg\', subItem2.getField(\'kind\'), subItem2.name)">Seite &nbsp;\n                                    <ion-icon name="brush"></ion-icon>\n                                  </button>\n                                </ion-col>\n                              </ion-row>\n\n                              <ion-row *ngIf="subItem2.getField(\'kind\') == \'sign\'">\n                                <ion-col col-12 text-center>\n                                  <img src="{{getPreviewData(\'assets/checkin/sign.jpg\', subItem2.name)}}"\n                                       (click)="showDrawer(\'assets/checkin/sign.jpg\', subItem2.getField(\'kind\'), subItem2.name)">\n                                  <button ion-button\n                                          (click)="showDrawer(\'assets/checkin/sign.jpg\', subItem2.getField(\'kind\'), subItem2.name)">Hier Unterschreiben\n                                    <ion-icon name="brush"></ion-icon>\n                                  </button>\n                                </ion-col>\n                              </ion-row>\n                            </ion-grid>\n                          </div>\n                            <!-- SUB2 CANVAS END -->\n\n                            <!-- SUB2 PROCESSED TEXT -->\n                            <!--                          <div *ngIf="subItem2.type == \'processed_text\'">-->\n                            <!--                            <ion-card>-->\n                            <!--                              <ion-card-content padding>-->\n                            <!--                              <div [innerHTML]="subItem2.getField(\'text\')"></div>-->\n                            <!--                              </ion-card-content>-->\n                            <!--                            </ion-card>-->\n                            <!--                          </div>-->\n                            <!-- SUB2 PROCESSED TEXT END -->\n\n                            <!-- SUB2 RANGE -->\n                          <ion-item *ngIf="subItem2.type == \'range\'">\n                            <ion-label text-left>{{subItem2.title}}</ion-label>\n                            <ion-range min="0" max="10" snaps="true" step="1"\n                                       disabled="{{rulesFullFilled(\'disabled\', subItem2)}}"\n                                       [ngClass]="getBorderClassOfItem(subItem2)"\n                                       [(ngModel)]="subItem2.reflector">\n                              <ion-label range-left>0</ion-label>\n                              <ion-label range-right>10</ion-label>\n                            </ion-range>\n                          </ion-item>\n                            <!-- SUB2 RANGE END -->\n\n                            <!-- SUB2 TEXT Input -->\n                          <ion-item\n                                  *ngIf="(subItem2.type == \'textfield\' || subItem2.type == \'webform_multiple\') && rulesFullFilled(\'visible\', subItem2)">\n                            <ion-label stacked>{{subItem2.title}}</ion-label>\n                            <ion-input [(ngModel)]="subItem2.reflector" type="text"\n                                       value="" placeholder="{{subItem2.getField(\'placeholder\')}}"\n                                       [ngClass]="getBorderClassOfItem(subItem2)"></ion-input>\n                          </ion-item>\n                            <!-- SUB2 TEXT Input END-->\n\n                            <!-- SUB2 DATE -->\n                          <ion-item\n                                  *ngIf="(subItem2.type == \'date\' || subItem2.type == \'datelist\') && rulesFullFilled(\'visible\', subItem2)">\n                            <ion-label stacked>{{subItem2.title}}</ion-label>\n                              <ion-input type="date" [max]="maxSelectionDate" displayFormat="DD/MM/YYYY"\n                                         [(ngModel)]="subItem2.reflector" [ngClass]="getBorderClassOfItem(subItem2)"\n                                         disabled="{{rulesFullFilled(\'disabled\', subItem2)}}"\n                                         value="" placeholder="{{subItem2.getField(\'placeholder\')}}">\n                              </ion-input>\n                              <!--                            <ion-datetime [max]="maxSelectionDate" *ngIf="!isIE" displayFormat="DD/MM/YYYY" [(ngModel)]="subItem2.reflector" [ngClass]="getBorderClassOfItem(subItem2)"-->\n                              <!--                                          cancelText="Abbrechen" doneText="Fertig"-->\n                              <!--                                          disabled="{{rulesFullFilled(\'disabled\', subItem2)}}"></ion-datetime>-->\n                              <!--                            <ion-input [max]="maxSelectionDate"*ngIf="isIE" disabled="{{rulesFullFilled(\'disabled\', subItem2)}}" [ngClass]="getBorderClassOfItem(subItem2)"-->\n                              <!--                                       [(ngModel)]="subItem2.reflector" type="text"-->\n                              <!--                                       value="" placeholder="{{subItem2.getField(\'placeholder\')}}"></ion-input>-->\n                          </ion-item>\n                            <!-- SUB2 DATE END -->\n\n                            <!-- SUB2 RADIO -->\n                          <div class="radio-group"\n                               *ngIf="subItem2.type == \'radios\' && rulesFullFilled(\'visible\', subItem2)">\n                            <ion-list disabled="{{rulesFullFilled(\'disabled\', subItem2)}}"\n                                      [ngClass]="getBorderClassOfItem(subItem2)"\n                                      [(ngModel)]="subItem2.reflector" radio-group>\n                              <ion-label>{{subItem2.title}}</ion-label>\n\n                              <ion-item *ngFor="let option of subItem2.getField(\'values\')">\n                                <ion-label>{{option}}</ion-label>\n                                <ion-radio value="{{option}}" checked="{{subItem2.reflector == option}}"></ion-radio>\n                              </ion-item>\n                            </ion-list>\n                          </div>\n                            <!-- SUB2 RADIO END -->\n\n                            <!-- SUB2 RADIO WITH OTHERS -->\n                          <div class="radio-group"\n                               *ngIf="subItem2.type == \'webform_radios_other\' && rulesFullFilled(\'visible\', subItem2)">\n                            <ion-list disabled="{{rulesFullFilled(\'disabled\', subItem)}}"\n                                      [ngClass]="getBorderClassOfItem(subItem2)"\n                                      [(ngModel)]="subItem2.reflector" radio-group>\n                              <ion-label>{{subItem2.title}}</ion-label>\n\n                              <ion-item *ngFor="let option of subItem2.getField(\'values\')">\n                                <ion-label>{{option}}</ion-label>\n                                <ion-radio value="{{option}}" *ngIf="option != subItem2.getField(\'other_select\')"\n                                           checked="{{subItem2.reflector == option && option != subItem2.getField(\'other_select\')}}"></ion-radio>\n                                <ion-radio value="{{option}}"\n                                           checked="{{subItem2.reflector == option && option == subItem2.getField(\'other_select\')}}"\n                                           (ionSelect)="onRadioChange(subItem)"\n                                           *ngIf="option == subItem2.getField(\'other_select\')"></ion-radio>\n                              </ion-item>\n\n                              <ion-item *ngIf="subItem2.reflector == subItem2.getField(\'other_select\')">\n                                <ion-note item-start *ngIf="subItem2.getField(\'other_prefix\') != null">\n                                  {{subItem2.getField(\'other_prefix\')}}\n                                </ion-note>\n                                <ion-note item-end *ngIf="subItem2.getField(\'other_suffix\') != null">\n                                  {{subItem2.getField(\'other_suffix\')}}\n                                </ion-note>\n                                <ion-input [(ngModel)]="subItem2.reflector_other" type="text"\n                                           value="" placeholder="{{subItem2.getField(\'placeholder\')}}">\n                                </ion-input>\n                              </ion-item>\n                            </ion-list>\n                          </div>\n                            <!-- SUB2 RADIO WITH OTHER END -->\n\n                            <!-- SUB2 Delete added items -->\n                          <ion-item *ngIf="subItem2.type == \'group_del\'">\n                            <button ion-button (click)="delSubGroup(subItem, subItem2.getField(\'id\'))">x</button><button\n                                  color="secondary" ion-button clear\n                                  (click)="delSubGroup(subItem, subItem2.getField(\'id\'))">entfernen</button>\n                          </ion-item>\n                            <!-- SUB2 Delete added items END -->\n\n                            <!-- SUB2 CHECKBOXES -->\n                          <div class="radio-group"\n                               *ngIf="subItem2.type == \'checkboxes\' && rulesFullFilled(\'visible\', subItem2)">\n                            <ion-list disabled="{{rulesFullFilled(\'disabled\', subItem2)}}"\n                                      [ngClass]="getBorderClassOfItem(subItem2)"\n                                      [(ngModel)]="subItem2.reflector" radio-group>\n                              <ion-label>{{subItem2.title}}</ion-label>\n\n                              <ion-item *ngFor="let option of subItem2.getField(\'values\')">\n                                <ion-label>{{option.val}}</ion-label>\n                                <ion-checkbox [(ngModel)]="option.ref"></ion-checkbox>\n                                  <!-- NOT READY -->\n                              </ion-item>\n                            </ion-list>\n                          </div>\n                            <!-- SUB2 CHECKBOXES END -->\n\n                            <!-- SUB2 CHECKBOXES WITH OTHERS -->\n                          <div class="radio-group"\n                               *ngIf="subItem2.type == \'webform_checkboxes_other\' && rulesFullFilled(\'visible\', subItem2)">\n                            <ion-label>{{subItem2.title}}</ion-label>\n                            <ion-list disabled="{{rulesFullFilled(\'disabled\', subItem2)}}"\n                                      [ngClass]="getBorderClassOfItem(subItem2)" radio-group>\n                              <ion-item *ngFor="let option of subItem2.getField(\'values\')">\n                                <ion-label>{{option.val}}</ion-label>\n                                <ion-checkbox [(ngModel)]="option.ref"></ion-checkbox>\n                              </ion-item>\n                              <ion-item *ngIf="subItem2.isOtherChecked">\n                                <!-- TODO write explaning Text -->\n                                <ion-input [(ngModel)]="subItem2.reflector_other" type="text"\n                                           [ngClass]="getBorderClassOfItem(subItem2)"\n                                           placeholder="{{subItem2.getField(\'placeholder\')}}"></ion-input>\n                              </ion-item>\n                            </ion-list>\n                          </div>\n                            <!-- SUB2 CHECKBOXES WITH OTHERS END -->\n\n                            <!-- SUB2 INTEGER -->\n                          <ion-item *ngIf="subItem2.type == \'Integer\'">\n                            <ion-label stacked>{{subItem2.title}}</ion-label>\n                            <ion-input disabled="{{rulesFullFilled(\'disabled\', subItem2)}}"\n                                       [(ngModel)]="subItem2.reflector"\n                                       type="number" value="" min="0"\n                                       placeholder="{{subItem2.getField(\'placeholder\')}}"\n                                       [ngClass]="getBorderClassOfItem(subItem2)">\n                            </ion-input>\n                          </ion-item>\n                            <!-- SUB2 INTEGER END -->\n                        </ion-row>\n                      </div>\n\n                      <ion-item *ngIf="subItem.canMultiply && subItem.id != \'checkin_2--wasserlassen123\'\n                        && subItem.id != \'checkin_2--sozialversicherungsrechtlicher_status\'\n                        && subItem.id != \'checkin_2--beruf\'\n                        && subItem.id != \'checkin_2--arbeitsanamnese_beruflicher_werdegang\'">\n<!--                        {{subItem.id}} - 2-->\n                        <button ion-button (click)="appendOther(subItem)">+</button>\n                        <button color="secondary" ion-button clear\n                                (click)="appendOther(subItem)"> weitere hinzufügen</button>\n                      </ion-item>\n                    </div>\n                      <!-- SUB2 Web Address OR FIELDSET END-->\n                  </ion-row>\n                </div>\n\n                <ion-item *ngIf="item.canMultiply && item.id != \'checkin_2--was_sind_ihre_aktuellen_beschww\'\n                  && item.id != \'checkin_2--wie_haben_sich_ihre_beschwerden_entwickelt_2\'\n                  && item.id != \'checkin_2--psychische_erkr_\'\n                  && item.id != \'checkin_2--lebensgewohnheiten\'\n                  && item.id != \'checkin_2--familiaere_angaben\'\n                  && item.id != \'checkin_2--wurden_sie_schon_einmal_in_einer_rehabilitationsklinik_behandelt\'">\n<!--                  {{item.id}} - 1-->\n                  <button ion-button (click)="appendOther(item)">+</button>\n                  <button color="secondary" ion-button clear (click)="appendOther(item)"> weitere hinzufügen</button>\n                </ion-item>\n\n              </div>\n                <!-- Web Address OR FIELDSET END-->\n\n                <!-- <section *ngIf="loaded"> -->\n              <button ion-button *ngIf="(elementNr != 0 && !backButtonSkip(j, elementNr))" color="secondary" float-left\n                      (click)="prevElement(elementNr, j)">zurück</button>\n\n              <button ion-button (click)="nextElement(elementNr, site.children.length, j)"\n                      *ngIf="(!isEnd(elementNr, site.children.length) && !shouldSkipCondition(j, elementNr))">weiter</button>\n\n              <button ion-button clear *ngIf="elementNr <= 3 && currentTab == 1" color="secondary"\n                      (click)="nextElement(elementNr, site.children.length, j)">oder Enter&nbsp; <ion-icon\n                      name="return-left"></ion-icon></button>\n\n              <button ion-button *ngIf="isEnd(elementNr, site.children.length) && tabCount != currentTab+1" float-right\n                      (click)="onSegmentChange(j+1)">Nächster Themenbereich &nbsp;<ion-icon\n                      name="arrow-forward"></ion-icon></button>\n\n              <div *ngIf="data.length === currentTab+1 && isEnd(elementNr, site.children.length)">\n                        <button ion-button float-right\n                                (click)="onSegmentChange(j+1)">Aufnahmefragebogen abschließen &nbsp;<ion-icon\n                                name="arrow-ok"></ion-icon></button>\n              </div>\n\n                <!-- </section> -->\n                <!-- form element container END -->\n            </div>\n          </div>\n        </span>\n            </div>\n        </div>\n\n\n    </div>\n</ion-content>\n<ion-footer>\n    <div class="pager">{{currentSlide + 1}} von {{currentCount}}</div>\n</ion-footer>\n'/*ion-inline-end:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\checkin\checkin.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_11__providers_activity_tracker_activity_tracker__["a" /* ActivityTrackerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__providers_activity_tracker_activity_tracker__["a" /* ActivityTrackerProvider */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__providers_checkin_service_checkin_service__["a" /* CheckinServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_checkin_service_checkin_service__["a" /* CheckinServiceProvider */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__providers_storage_manager_storage_manager__["a" /* StorageManagerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_storage_manager_storage_manager__["a" /* StorageManagerProvider */]) === "function" ? _g : Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" ? _h : Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__providers_draw_draw__["a" /* DrawProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_draw_draw__["a" /* DrawProvider */]) === "function" ? _j : Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_7__providers_auth_manager_auth_manager__["a" /* AuthManagerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_auth_manager_auth_manager__["a" /* AuthManagerProvider */]) === "function" ? _k : Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" ? _l : Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_9__providers_link_manager_link_manager__["a" /* LinkManagerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__providers_link_manager_link_manager__["a" /* LinkManagerProvider */]) === "function" ? _m : Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]) === "function" ? _o : Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" ? _p : Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]) === "function" ? _q : Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_10__providers_gui_manager_gui_manager__["a" /* GuiManagerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__providers_gui_manager_gui_manager__["a" /* GuiManagerProvider */]) === "function" ? _r : Object])
    ], CheckinPage);
    return CheckinPage;
}());

//# sourceMappingURL=checkin.js.map

/***/ })

});
//# sourceMappingURL=32.js.map