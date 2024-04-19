webpackJsonp([33],{

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinForDoctorsPageModule", function() { return CheckinForDoctorsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkin_for_doctors__ = __webpack_require__(749);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckinForDoctorsPageModule = /** @class */ (function () {
    function CheckinForDoctorsPageModule() {
    }
    CheckinForDoctorsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checkin_for_doctors__["a" /* CheckinForDoctorsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkin_for_doctors__["a" /* CheckinForDoctorsPage */]),
            ],
        })
    ], CheckinForDoctorsPageModule);
    return CheckinForDoctorsPageModule;
}());

//# sourceMappingURL=checkin-for-doctors.module.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinForDoctorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_checkin_service_checkin_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_manager_storage_manager__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkin_conditions__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_checkin_service_checkin_modals__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_draw_draw__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_manager_auth_manager__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_link_manager_link_manager__ = __webpack_require__(78);
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
 * Generated class for the CheckinForDoctorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckinForDoctorsPage = /** @class */ (function () {
    function CheckinForDoctorsPage(navCtrl, navParams, checkinService, storageProv, modelCtrl, drawManager, authManager, api, alertCtrl, linkManager) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.checkinService = checkinService;
        this.storageProv = storageProv;
        this.modelCtrl = modelCtrl;
        this.drawManager = drawManager;
        this.authManager = authManager;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.linkManager = linkManager;
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
        this.isMedical = this.authManager.isMedical;
        this.patientEmails = [];
        this.doctorIsAtStart = true;
        this.selectedPatientEmail = "";
        this.informationForDoctors = "Informationen für die Patientenaufnahme";
        this.loadingText = "";
        this.patientsEmailsOptions = {
            title: 'E-Mail des Patienten auswählen',
            subTitle: 'E-Mail auswählen',
            okText: 'anzeigen',
            cancelText: 'abbrechen',
            placeholder: "E-Mail des Patienten auswählen",
            cssClass: "doctor-checkin-popover-email"
            // mode: 'md'
        };
        this.doctorIsAtStart = true;
        this.loaded = true;
        this.tabs = 'p' + this.currentTab;
        this.data = this.checkinService.presetData;
        this.initializePatientEmailsForCheckins();
    }
    CheckinForDoctorsPage.prototype.ngAfterViewInit = function () {
    };
    CheckinForDoctorsPage.prototype.rulesFullFilled = function (condition, item) {
        return __WEBPACK_IMPORTED_MODULE_4__checkin_conditions__["a" /* Process */].rulesFullFilled(condition, item, this.getVals());
    };
    CheckinForDoctorsPage.prototype.openHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
    };
    CheckinForDoctorsPage.prototype.onRadioChange = function (item) {
        item.reflector = "";
    };
    Object.defineProperty(CheckinForDoctorsPage.prototype, "isIE", {
        get: function () {
            return this.checkinService.isIE;
        },
        enumerable: false,
        configurable: true
    });
    CheckinForDoctorsPage.prototype.showAgb = function (agbs) {
        if (agbs) {
            this.modelCtrl.create('TextPage', { html: true, closeable: true, target: this.linkManager.getNutungsbedingungenAsHalJSON() }).present();
            return;
        }
        this.modelCtrl.create('TextPage', { html: true, closeable: true, target: this.linkManager.getDatenschutzAsJSON() }).present();
    };
    Object.defineProperty(CheckinForDoctorsPage.prototype, "currentTitle", {
        get: function () {
            return this.data[this.currentTab] != null ? this.data[this.currentTab].title : "Nicht definiert";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CheckinForDoctorsPage.prototype, "currentCount", {
        get: function () {
            return this.data[this.currentTab] != null ? this.data[this.currentTab].children.length : 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CheckinForDoctorsPage.prototype, "tabCount", {
        get: function () {
            return this.data != null ? this.data.length : 0;
        },
        enumerable: false,
        configurable: true
    });
    CheckinForDoctorsPage.prototype.showMessage = function (title, message, callback) {
        if (callback === void 0) { callback = function (data) { console.log("On the message with title " + title + " and messsage '" + message + "'", data); }; }
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message.replace("\n", "<br>"),
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        callback(data);
                    }
                }
            ]
        });
        alert.present();
    };
    CheckinForDoctorsPage.prototype.submitData = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        var alertTitleMessage = "Datenbankübernahme";
        alert.setTitle(alertTitleMessage);
        alert.addInput({
            type: 'radio',
            label: 'Patientendaten freigeben',
            value: 'Patientendaten freigeben'
        });
        alert.addInput({
            type: 'radio',
            label: 'Patientendaten unwiderruflich löschen',
            value: 'Patientendaten unwiderruflich löschen'
        });
        alert.addButton('Abbrechen');
        alert.addButton({
            text: 'Bestätigen',
            handler: function (data) {
                console.log("Data is: ", data);
                _this.loadingText = "Daten verschlüsseln und versenden";
                _this.loaded = false;
                _this.doctorIsAtStart = true;
                if (data == "Patientendaten freigeben") {
                    var dataToSend = _this.checkinService.prepareForSend(_this.data, _this.getVals());
                    console.log("Checkin data to send to finalize: ", dataToSend);
                    _this.checkinService.sendCheckinToKIS(dataToSend, _this.selectedPatientEmail, function (success, response) {
                        if (success) {
                            _this.finishedClicked();
                        }
                        else {
                            _this.showMessage("Fehler beim Speichern der Daten auf DB", "Fehler bei der Übermittlung der Registrierungsdaten an die Krankenhausdatenbank.\n" + response); // "Error storing the data to DB", "Error when submitting the registration data to the hospital database.\n"
                            _this.loaded = true;
                            _this.initializePatientEmailsForCheckins();
                        }
                    });
                }
                if (data == "Patientendaten unwiderruflich löschen") {
                    _this.checkinService.deleteCheckins(_this.selectedPatientEmail, function (success, response) {
                        _this.initializePatientEmailsForCheckins();
                        if (success == false) {
                            _this.showMessage("Fehler beim Löschen", "Fehler beim Löschen von Datensätzen vom Server: " + response); // "Deletion error", "Error deleting records from server: "
                            _this.loaded = true;
                        }
                        else {
                            _this.showMessage("Löschen erfolgreich", "Aufzeichnungen wurden komplett aus dem System gelöscht."); // "Deletion successful", "Records were deleted completely from the system."
                            _this.loaded = true;
                        }
                    });
                }
            }
        });
        alert.present();
    };
    CheckinForDoctorsPage.prototype.selectedPatient = function (data) {
        console.log("Email selected: ", data["email"]);
        this.selectedPatientEmail = data["email"];
        this.showPatientData(this.selectedPatientEmail);
        this.doctorIsAtStart = true;
        this.content.scrollTo(0, 0, 0);
    };
    CheckinForDoctorsPage.prototype.initializePatientEmailsForCheckins = function () {
        var _this = this;
        var apiPath = "/search/GetPatientsEmailsWCheckins";
        this.api.post(apiPath, { key: this.authManager.key }, [], function (success, data) {
            if (success) {
                var bodyResponse = JSON.parse(data["_body"]);
                var successfullyTransferred = bodyResponse["success"];
                var dataResponse = bodyResponse["data"];
                if (successfullyTransferred) {
                    console.log("The response was: ", dataResponse);
                    _this.patientEmails = dataResponse;
                }
                else {
                    console.log("There was a problem with the server.", dataResponse);
                    if (dataResponse == "unable_to_store_pdf_successfully") {
                        console.log("The server had a problem and couldn't store the PDF file successfully");
                    }
                }
            }
            else {
                console.log("The server was most likely un-responsive. Please see details: ", success, data);
            }
        });
    };
    /**
     *
     * @param patientsEmails string with emails seperated by commas. E.g. "first@my.com,second@my.com"
     */
    CheckinForDoctorsPage.prototype.showPatientData = function (patientsEmails) {
        var _this = this;
        this.loaded = false;
        this.loadingText = "Herunterladen und Entschlüsseln von Daten";
        this.checkinService.retrieveCheckins(patientsEmails, function (success, data) {
            if (success) {
                var listOfcheckins = atob(data);
                console.log("List of checkins JSON: ", JSON.parse(listOfcheckins));
                listOfcheckins = JSON.parse(listOfcheckins);
                _this.loadingText = "Verarbeitung und Formatierung von Daten";
                for (var _i = 0, listOfcheckins_1 = listOfcheckins; _i < listOfcheckins_1.length; _i++) {
                    var entry = listOfcheckins_1[_i];
                    var user = entry["username"];
                    console.log("we have checkin info for user: ", user);
                    var checkinData = JSON.parse(JSON.parse(decodeURIComponent(atob(entry["data"]))));
                    _this.checkinService.parseData(checkinData, function (success) {
                        _this.currentTab = 1;
                        _this.tabs = 'p' + _this.currentTab;
                        _this.data = _this.checkinService.presetData;
                        _this.doctorIsAtStart = false;
                        _this.loaded = true;
                        _this.loadingText = "";
                        console.log("After parsing the data.", _this.data);
                        console.log("This checking preset data", _this.checkinService.presetData);
                    });
                }
            }
            else {
                _this.showMessage("Fehler bei der Anzeige von Patientendaten", "Es gab einen Fehler bei der Anzeige der Patientendaten: " + data); // "There was an error showing the patient data: "
                console.log("There was a problem with the checkins retrieval from the server.");
            }
        });
    };
    CheckinForDoctorsPage.prototype.finishedClicked = function () {
        var _this = this;
        this.finishedPressed = true;
        /* const data = this.checkinService.prepareForSend(this.data);*/
        var data = this.getVals();
        console.log("Data", data);
        console.log("Checkin data in form: ", this.data);
        this.checkinService.sendCheckin(data, this.selectedPatientEmail, function (success, data) {
            _this.loaded = true;
            _this.initializePatientEmailsForCheckins();
            if (success) {
                _this.showMessage("Die Freigabe des Patienten ist erfolgt.", "");
            }
            else {
                _this.showMessage("Fehler beim Speichern der Daten in der CDB", "Fehler bei der Übermittlung der Registrierungsdaten an die Datenbank.\n" + data); // "Error storing the data to CDB", "Error when submitting the registration data to the database.\n"
            }
        });
    };
    CheckinForDoctorsPage.prototype.onSegmentChange = function (i) {
        this.currentTab = i;
        this.tabs = 'p' + this.currentTab;
        this.currentSlide = 0;
        this.content.scrollTo(0, 0, 0);
        this.currentPercent = this.currentSlide / this.currentCount * 100;
        this.currentPercentString = this.currentPercent + "%";
    };
    CheckinForDoctorsPage.prototype.keyDownFunction = function (event, elementNr, totalLength) {
        if (event.keyCode == 13 || event.keyCode == 40) {
            var wanted = elementNr + 1;
            if (wanted === totalLength) {
                this.onSegmentChange(this.currentTab + 1);
            }
            else {
                this.nextElement(elementNr, totalLength);
            }
        }
        if (event.keyCode == 38) {
            var wanted = elementNr - 1;
            if (wanted === totalLength) {
                this.onSegmentChange(this.currentTab - 1);
            }
            else {
                this.prevElement(elementNr);
            }
        }
    };
    CheckinForDoctorsPage.prototype.nextElement = function (elementNr, totalLength) {
        var wanted = elementNr;
        if (wanted > totalLength) {
            return;
        }
        var next = {};
        next = document.getElementById('element-' + wanted).parentElement.nextSibling;
        while (next.children[0] == undefined) {
            next = next.nextSibling;
        }
        var yOffset = next.offsetTop;
        this.content.scrollTo(0, yOffset - 50, this.speed);
        this.currentSlide = Number.parseInt(next.children[0].getAttribute('id').substr(8));
        this.currentPercent = this.currentSlide / this.currentCount * 100;
        this.currentPercentString = this.currentPercent + "%";
    };
    CheckinForDoctorsPage.prototype.prevElement = function (elementNr) {
        var wanted = elementNr - 1;
        if (wanted < 0) {
            return;
        }
        var previous = {};
        previous = document.getElementById('element-' + elementNr).parentElement.previousSibling;
        while (previous.children[0] == undefined) {
            previous = previous.previousSibling;
        }
        var yOffset = previous.offsetTop;
        this.content.scrollTo(0, yOffset - 50, this.speed);
        this.currentSlide = Number.parseInt(previous.children[0].getAttribute('id').substr(8));
        // if (document.getElementById('element-' + wanted) != null) {
        //
        //     let yOffset = document.getElementById('element-' + wanted).offsetTop;
        //     this.content.scrollTo(0, yOffset - 50, this.speed);
        // }
        // this.currentSlide = wanted;
        this.currentPercent = this.currentSlide / this.currentCount * 100;
        this.currentPercentString = this.currentPercent + "%";
    };
    CheckinForDoctorsPage.prototype.regionBack = function () {
        this.currentSlide = this.slides.getActiveIndex();
        this.slides.getActiveIndex();
        this.slides.slidePrev();
        this.slides.update();
        this.content.scrollToTop(150);
    };
    CheckinForDoctorsPage.prototype.regionForward = function () {
        this.currentSlide = this.slides.getActiveIndex();
        this.slides.getActiveIndex();
        this.slides.slideNext();
        this.slides.update();
        this.content.scrollToTop(150);
    };
    CheckinForDoctorsPage.prototype.getPreviewData = function (path) {
        if (this.drawManager.processed[path] != null) {
            return this.drawManager.processed[path];
        }
        return path;
    };
    CheckinForDoctorsPage.prototype.slidePrev = function (elementNr) {
        var wanted = elementNr - 1;
        if (wanted < 0) {
            return;
        }
        if (document.getElementById('element-' + wanted) != null) {
            var yOffset = document.getElementById('element-' + wanted).offsetTop;
            this.content.scrollTo(0, yOffset, this.speed);
        }
        this.currentSlide = wanted;
    };
    CheckinForDoctorsPage.prototype.appendOther = function (parent) {
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
                var _loop_1 = function (x) {
                    if (node.type == "checkboxes" && fieldKeys[x] == "values") {
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
        console.log(this.data);
    };
    CheckinForDoctorsPage.prototype.delSubGroup = function (parent, id) {
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
    CheckinForDoctorsPage.prototype.isEnd = function (elementNr, total) {
        var id = elementNr + 1 == total;
        return id;
    };
    CheckinForDoctorsPage.prototype.printVals = function () {
        var data = this.getVals();
        console.log(data);
        this.storageProv.save(this.authManager.encodedEmailId + "checkin_data", data, function () {
        });
    };
    CheckinForDoctorsPage.prototype.getVals = function () {
        var _this = this;
        var arr = [];
        this.data.forEach((function (it) {
            _this.printNode(it, arr);
        }));
        return arr;
    };
    CheckinForDoctorsPage.prototype.ionViewWillLeave = function () {
        this.printVals();
    };
    CheckinForDoctorsPage.prototype.showDrawer = function (path) {
        this.modelCtrl.create('DrawPage', { img: path }).present();
    };
    CheckinForDoctorsPage.prototype.printNode = function (node, array) {
        if (node.children != null) {
            for (var i = 0; i < node.children.length; i++) {
                var child = node.children[i];
                this.printNode(child, array);
            }
        }
        if (node.type != "checkboxes") {
            array.push({ key: node.name, value: node.reflector, id: node.id });
        }
        else {
            array.push({ key: node.name, value: node.getField("values"), id: node.id });
        }
    };
    CheckinForDoctorsPage.prototype.isBeginning = function () {
        if (this.slides != null) {
            return this.slides.isBeginning();
        }
        return true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
    ], CheckinForDoctorsPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], CheckinForDoctorsPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Select */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Select */])
    ], CheckinForDoctorsPage.prototype, "patientEmailPopUp", void 0);
    CheckinForDoctorsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkin-for-doctors',template:/*ion-inline-start:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\checkin-for-doctors\checkin-for-doctors.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Patientenaufnahme</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="openHomePage()">\n        <img class="homeLogoNavBar" src="assets/home/icon.svg">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar *ngIf="isMedical" color="primary">\n    <ion-select [selectOptions]="patientsEmailsOptions" interface="popover"\n                multiple="false" style="max-width: 100%; font-weight: bold; background-color:#ffd512 !important; color: #5b5b5b !important;" ([ngModel])="patientEmailPopUp"\n                okText=\'anzeigen\' cancelText=\'abbrechen\' placeholder="E-Mail des Patienten auswählen"\n                (ionChange)="selectedPatient($event)">\n      <ion-option [value]="item" *ngFor="let item of patientEmails"><span color="text-color"><b>{{item.email}}</b></span></ion-option>\n    </ion-select>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf="isMedical" style="background: #efefef">\n\n    <ion-toolbar *ngIf="!loaded" color="primary" text-center>{{loadingText}}</ion-toolbar>\n    <ion-spinner *ngIf="!loaded" style="margin: 0 auto; top: 45%; display: block"></ion-spinner>\n\n    <div *ngIf="loaded && isMedical && doctorIsAtStart">\n        <ion-card>\n            <ion-card-content padding>\n                <div [innerHTML]="informationForDoctors"></div>\n            </ion-card-content>\n        </ion-card>\n    </div>\n\n    <div *ngIf="!doctorIsAtStart">\n\n        <div class="checkinTab" *ngFor="let site of data, let j = index" scrollX="true">\n\n            <!-- <span [ngSwitch]="tabs" *ngFor="let site of data, let j = index"> -->\n            <!-- <span *ngSwitchCase="\'p\'+j"> -->\n\n            <span *ngFor="let item of site.children, let elementNr = index" class="element">\n          <div (keydown)="keyDownFunction($event,elementNr, site.children.length)" id="element-{{elementNr}}"\n               [ngClass]="{\'active\': 5>1}"\n               class="form-element">\n            <div class="form-element-container">\n            <h3>{{item.title}}</h3>\n                <!-- <ion-note>Voluptatum ducimus voluptates voluptas?</ion-note> -->\n\n                <!-- TEXT Input -->\n          <ion-item *ngIf="item.type == \'textfield\' || item.type == \'webform_multiple\'">\n            <!-- <ion-label stacked>{{item.title}}</ion-label> -->\n            <ion-input [(ngModel)]="item.reflector" type="text"\n                       value="" placeholder="{{item.getField(\'placeholder\')}}"></ion-input>\n          </ion-item>\n\n\n                <!-- TEXT Input END -->\n\n\n                <!-- Number Input -->\n          <ion-item *ngIf="item.type == \'number\'">\n    <ion-label stacked>{{item.title}}</ion-label>\n                  <ion-input [(ngModel)]="item.reflector" type="number"\n                             value="" placeholder="{{item.getField(\'placeholder\')}}"></ion-input>\n          </ion-item>\n\n                <!-- NUMBER Input END -->\n\n                <!-- TEL Input -->\n          <ion-item *ngIf="item.type == \'tel\'">\n                          <ion-label stacked>{{item.title}}</ion-label>\n\n              <!-- <ion-label stacked>{{item.title}}</ion-label> -->\n            <ion-input [(ngModel)]="item.reflector" type="text"\n                       value="" placeholder="{{item.getField(\'placeholder\')}}"></ion-input>\n          </ion-item>\n                <!-- TEL Input END -->\n\n              <!-- EMAIL Input -->\n              <ion-item *ngIf="item.type == \'email\'">\n                <ion-label stacked>{{item.title}}</ion-label>\n                <!-- <ion-label stacked>{{item.title}}</ion-label> -->\n                <ion-input disabled="{{rulesFullFilled(\'disabled\', item)}}" [(ngModel)]="item.reflector" type="email"\n                           value="" placeholder="{{item.getField(\'placeholder\')}}"></ion-input>\n              </ion-item>\n              <!-- EMAIL Input END -->\n\n                <!-- Web Address OR FIELDSET -->\n          <div *ngIf="item.type == \'webform_address\' || item.type == \'fieldset\'">\n           <div>\n                  <ion-row *ngFor="let subItem of item.children">\n\n                <!-- SUB TEXT Input -->\n                <ion-item *ngIf="subItem.type == \'textfield\' || subItem.type == \'webform_multiple\'">\n                  <ion-label stacked>{{subItem.title}}</ion-label>\n                  <ion-input [(ngModel)]="subItem.reflector" type="text"\n                             value="" placeholder="{{subItem.getField(\'placeholder\')}}"></ion-input>\n                </ion-item>\n                      <!-- SUB TEXT Input END-->\n\n\n                      <!-- SUB NUMBER -->\n               <ion-item *ngIf="subItem.type == \'number\'">\n                <ion-label stacked>{{subItem.title}}</ion-label>\n\n                <ion-input disabled="{{rulesFullFilled(\'disabled\', subItem)}}" [(ngModel)]="subItem.reflector"\n                           type="number"\n                           value="" placeholder="{{subItem.getField(\'placeholder\')}}"></ion-input>\n               </ion-item>\n                      <!-- SUB NUMBER END -->\n\n\n                      <!-- SUB TEL Input -->\n          <ion-item *ngIf="subItem.type == \'tel\'">\n            <ion-label stacked>{{subItem.title}}</ion-label>\n            <ion-input disabled="{{rulesFullFilled(\'disabled\', subItem)}}" [(ngModel)]="subItem.reflector" type="text"\n                       value="" placeholder="{{subItem.getField(\'placeholder\')}}"></ion-input>\n          </ion-item>\n                      <!-- SUB TEL Input END -->\n\n\n                      <!-- SUB PROCESSED TEXT -->\n			 				 <div *ngIf="subItem.type == \'processed_text\'">\n			 					 <ion-card>\n			 <ion-card-content padding>\n			 						 <div [innerHTML]="subItem.getField(\'text\')"></div>\n			 					 </ion-card-content></ion-card>\n			 </div>\n                      <!-- SUB PROCESSED TEXT END -->\n\n                      <!-- SUB SELECT -->\n                <ion-item *ngIf="subItem.type == \'select\'">\n                  <ion-label stacked>{{subItem.title}}</ion-label>\n                  <ion-select [(ngModel)]="subItem.reflector">\n                    <ion-option *ngFor="let option of subItem.getField(\'values\')">{{option}}</ion-option>\n                  </ion-select>\n                </ion-item>\n                      <!-- SUB SELECT END -->\n\n                      <!-- SUB TOGGLE -->\n              <ion-item *ngIf="subItem.type == \'webform_toggle\'">\n               <ion-label> {{ subItem.title}}</ion-label>\n               <ion-toggle disabled="{{rulesFullFilled(\'disabled\', subItem)}}" [(ngModel)]="subItem.reflector"\n                           checked="false"></ion-toggle>\n            </ion-item>\n                      <!-- SUB TOGGLE END -->\n\n                    <!-- EMAIL Input -->\n                    <ion-item *ngIf="subItem.type == \'email\'">\n                      <ion-label stacked>{{subItem.title}}</ion-label>\n                      <!-- <ion-label stacked>{{item.title}}</ion-label> -->\n                      <ion-input disabled="{{rulesFullFilled(\'disabled\', subItem)}}" [(ngModel)]="subItem.reflector" type="email"\n                                 value="" placeholder="{{subItem.getField(\'placeholder\')}}"></ion-input>\n                    </ion-item>\n                    <!-- EMAIL Input END -->\n\n                      <!-- SUB RANGE -->\n          <ion-item *ngIf="subItem.type == \'range\'">\n						<ion-label text-left>{{subItem.title}}</ion-label>\n            <ion-range min="0" max="10" snaps="true" step="1" disabled="{{rulesFullFilled(\'disabled\', subItem)}}"\n                       [(ngModel)]="subItem.reflector">\n              <ion-label range-left>0</ion-label>\n              <ion-label range-right>10</ion-label>\n            </ion-range>\n          </ion-item>\n                      <!-- SUB RANGE END -->\n\n                      <!-- SUB RADIO -->\n        <div class="radio-group" *ngIf="subItem.type == \'radios\' && rulesFullFilled(\'visible\', subItem)">\n            <ion-list disabled="{{rulesFullFilled(\'disabled\', subItem)}}"\n                      [(ngModel)]="subItem.reflector" radio-group>\n            <ion-label>{{subItem.title}}</ion-label>\n\n            <ion-item *ngFor="let option of subItem.getField(\'values\')">\n              <ion-label>{{option}}</ion-label>\n              <ion-radio value="{{option}}"></ion-radio>\n            </ion-item>\n            </ion-list>\n        </div>\n                      <!-- SUB RADIO END -->\n\n                      <!-- SUB CHECKBOXES -->\n        <div class="radio-group" *ngIf="subItem.type == \'checkboxes\' && rulesFullFilled(\'visible\', subItem)">\n            <ion-list disabled="{{rulesFullFilled(\'disabled\', subItem)}}"\n                      [(ngModel)]="subItem.reflector" radio-group>\n            <ion-label>{{subItem.title}}</ion-label>\n\n            <ion-item *ngFor="let option of subItem.getField(\'values\')">\n              <ion-label>{{option.val}}</ion-label>\n              <ion-checkbox [(ngModel)]="option.ref"></ion-checkbox>\n                <!-- NOT READY -->\n            </ion-item>\n            </ion-list>\n        </div>\n                      <!-- SUB CHECKBOXES END -->\n\n                      <!-- SUBRADIO WITH OTHERS -->\n        <div class="radio-group" *ngIf="subItem.type == \'webform_radios_other\' && rulesFullFilled(\'visible\', subItem)">\n            <ion-list disabled="{{rulesFullFilled(\'disabled\', item)}}"\n                      [(ngModel)]="subItem.reflector" radio-group>\n            <ion-label>{{subItem.title}}</ion-label>\n\n            <ion-item *ngFor="let option of subItem.getField(\'values\')">\n              <ion-label>{{option}}</ion-label>\n              <ion-radio value="{{option}}" *ngIf="option != subItem.getField(\'other_select\')"\n                         checked="{{subItem.reflector == option && option != subItem.getField(\'other_select\')}}"></ion-radio>\n              <ion-radio value="{{option}}" checked="{{!subItem.isLegitValue}}" (ionSelect)="onRadioChange(subItem)"\n                         *ngIf="option == subItem.getField(\'other_select\')"></ion-radio>\n            </ion-item>\n\n\n          <ion-item *ngIf="subItem.reflector == subItem.getField(\'other_select\') || !subItem.isLegitValue">\n            <ion-input [(ngModel)]="subItem.reflector" type="text"\n                       value="" placeholder="{{subItem.getField(\'placeholder\')}}"></ion-input>\n          </ion-item></ion-list>\n        </div>\n                      <!-- SUB RADIO WITH OTHER END -->\n\n	              <ion-item *ngIf="subItem.type == \'group_del\'">\n									<button ion-button (click)="delSubGroup(item, subItem.getField(\'id\'))">x</button><button\n                          color="secondary" ion-button clear (click)="delSubGroup(item, subItem.getField(\'id\'))">entfernen</button>\n	              </ion-item>\n\n                      <!-- SUB LIKERT -->\n                  <div *ngIf="subItem.type == \'webform_likert\' && rulesFullFilled(\'visible\', subItem)">\n\n                     <div class="radio-group" *ngFor="let childNode of subItem.children">\n                       <ion-label>{{childNode.title}}</ion-label>\n            <ion-list disabled="{{rulesFullFilled(\'disabled\', subItem)}}" *ngIf="childNode.name != \'table\'"\n                      [(ngModel)]="childNode.reflector" radio-group>\n\n            <ion-item *ngFor="let option of childNode.getField(\'values\')">\n              <ion-label>{{option.value}}</ion-label>\n              <ion-radio value="{{option.key}}"></ion-radio>\n            </ion-item>\n            </ion-list>\n        </div>\n                  </div>\n                      <!-- SUB LIKERT END-->\n\n\n                      <!-- SUB DATE -->\n              <ion-item *ngIf="(subItem.type == \'date\' || subItem.type == \'datelist\') && rulesFullFilled(\'visible\', subItem)">\n                <ion-label stacked>{{subItem.title}}</ion-label>\n                <ion-datetime *ngIf="!isIE" displayFormat="DD/MM/YYYY" [(ngModel)]="subItem.reflector" cancelText="Abbrechen" doneText="Fertig"\n                              disabled="{{rulesFullFilled(\'disabled\', subItem)}}"></ion-datetime>\n                   <ion-input *ngIf="isIE" disabled="{{rulesFullFilled(\'disabled\', subItem)}}" [(ngModel)]="subItem.reflector" type="text"\n                              value="" placeholder="{{subItem.getField(\'placeholder\')}}"></ion-input>\n              </ion-item>\n                      <!-- SUB DATE END -->\n\n                      <!-- SUB TIME -->\n              <ion-item *ngIf="subItem.type == \'webform_time\' && rulesFullFilled(\'visible\', subItem)">\n                <ion-label stacked>{{subItem.title}}</ion-label>\n                <ion-datetime *ngIf="!isIE" displayFormat="HH:mm" [(ngModel)]="subItem.reflector"  cancelText="Abbrechen" doneText="Fertig"\n                              disabled="{{rulesFullFilled(\'disabled\', subItem)}}"></ion-datetime>\n                   <ion-input *ngIf="isIE" disabled="{{rulesFullFilled(\'disabled\', subItem)}}" [(ngModel)]="subItem.reflector" type="text"\n                              value="" placeholder="{{subItem.getField(\'placeholder\')}}"></ion-input>\n              </ion-item>\n                      <!-- SUB TIME END -->\n\n                      <!-- SUB TEXTAREA -->\n\n                <ion-item *ngIf="subItem.type == \'textarea\' && rulesFullFilled(\'visible\', subItem)">\n                                        <ion-label stacked>{{subItem.title}}</ion-label>\n\n                    <ion-textarea disabled="{{rulesFullFilled(\'disabled\', subItem)}}" [(ngModel)]="subItem.reflector" placeholder="{{subItem.getField(\'placeholder\')}}"></ion-textarea>\n                </ion-item>\n\n                      <!-- SUB TEXTAREA END -->\n              </ion-row>\n           </div>\n\n             <ion-item *ngIf="item.canMultiply">\n							 <button ion-button (click)="appendOther(item)">+</button><button color="secondary"\n                                                                                              ion-button clear\n                                                                                              (click)="appendOther(item)"> weitere hinzufügen</button>\n             </ion-item>\n\n          </div>\n                <!-- Web Address OR FIELDSET END-->\n\n                <!-- SELECT -->\n          <ion-item *ngIf="item.type == \'select\' && rulesFullFilled(\'visible\', item)">\n            <ion-label stacked>{{item.title}}</ion-label>\n            <ion-select disabled="{{rulesFullFilled(\'disabled\', item)}}" [(ngModel)]="item.reflector">\n              <ion-option *ngFor="let option of item.getField(\'values\')">{{option}}</ion-option>\n            </ion-select>\n          </ion-item>\n                <!-- SELECT END -->\n\n                <!-- TOGGLE -->\n              <ion-item *ngIf="item.type == \'webform_toggle\' && rulesFullFilled(\'visible\', item)">\n               <ion-label> {{ item.title}}</ion-label>\n               <ion-toggle disabled="{{rulesFullFilled(\'disabled\', item)}}" [(ngModel)]="item.reflector"\n                           checked="false"></ion-toggle>\n            </ion-item>\n                <!-- TOGGLE END -->\n\n                <!-- RANGE -->\n\n\n					<ion-item *ngIf="item.type == \'range\'" disabled="{rulesFullFilled(\'disabled\', item)}}"\n                              [(ngModel)]="item.reflector">\n						<ion-label text-left>{{item.title}}</ion-label>\n            <ion-range min="0" max="10" snaps="true" step="1" disabled="{{rulesFullFilled(\'disabled\', item)}}"\n                       [(ngModel)]="item.reflector">\n              <ion-label range-left>0</ion-label>\n              <ion-label range-right>10</ion-label>\n            </ion-range>\n          </ion-item>\n                <!-- RANGE END -->\n\n                <!-- RADIO -->\n        <div class="radio-group" *ngIf="item.type == \'radios\' && rulesFullFilled(\'visible\', item)">\n            <ion-list disabled="{{rulesFullFilled(\'disabled\', item)}}"\n                      [(ngModel)]="item.reflector" radio-group>\n\n            <ion-item *ngFor="let option of item.getField(\'values\')">\n              <ion-label>{{option}}</ion-label>\n              <ion-radio value="{{option}}"></ion-radio>\n            </ion-item>\n            </ion-list>\n        </div>\n                <!-- RADIO END -->\n\n                <!-- TEXTAREA -->\n\n                <ion-item *ngIf="item.type == \'textarea\' && rulesFullFilled(\'visible\', item)">\n                    <ion-label stacked>{{item.title}}</ion-label>\n                    <ion-textarea disabled="{{rulesFullFilled(\'disabled\', item)}}" [(ngModel)]="item.reflector" placeholder="{{item.getField(\'placeholder\')}}"></ion-textarea>\n                </ion-item>\n\n                <!-- TEXTAREA END -->\n                <!-- CANVAS  -->\n\n	            <div *ngIf="item.type == \'canvas\'" class="canvas" style="margin-bottom:30px;">\n\n\n				         <ion-grid>\n					         <ion-row>\n						             <ion-col col-6 col-md-3 text-center> <img\n                                             src="{{getPreviewData(\'assets/checkin/man_model_03.jpg\')}}"\n                                             style=""\n                                             (click)="showDrawer(\'assets/checkin/man_model_03.jpg\')">\n																				<button ion-button\n                                                                                        (click)="showDrawer(\'assets/checkin/man_model_03.jpg\')">Vorne &nbsp;<ion-icon\n                                                                                        name="brush"></ion-icon></button></ion-col>\n\n									 <ion-col col-6 col-md-3 text-center> <img\n                                             src="{{getPreviewData(\'assets/checkin/man_model_04.jpg\')}}"\n                                             (click)="showDrawer(\'assets/checkin/man_model_04.jpg\')">\n\n																	<button ion-button\n                                                                            (click)="showDrawer(\'assets/checkin/man_model_04.jpg\')">Rücken &nbsp;<ion-icon\n                                                                            name="brush"></ion-icon></button>\n																</ion-col>\n\n						         <ion-col col-6 col-md-3 text-center> <img\n                                         src="{{getPreviewData(\'assets/checkin/man_model_05.jpg\')}}"\n                                         (click)="showDrawer(\'assets/checkin/man_model_05.jpg\')">\n																	<button ion-button\n                                                                            (click)="showDrawer(\'assets/checkin/man_model_05.jpg\')">Seite &nbsp;<ion-icon\n                                                                            name="brush"></ion-icon></button></ion-col>\n						         <ion-col col-6 col-md-3 text-center> <img\n                                         src="{{getPreviewData(\'assets/checkin/man_model_06.jpg\')}}"\n                                         (click)="showDrawer(\'assets/checkin/man_model_06.jpg\')">\n																	<button ion-button\n                                                                            (click)="showDrawer(\'assets/checkin/man_model_06.jpg\')">Seite &nbsp;<ion-icon\n                                                                            name="brush"></ion-icon></button></ion-col>\n					         </ion-row>\n\n				          </ion-grid>\n\n\n	            </div>\n                <!-- CANVAS END -->\n\n                <!-- RADIO WITH OTHERS -->\n        <div class="radio-group" *ngIf="item.type == \'webform_radios_other\' && rulesFullFilled(\'visible\', item)">\n            <ion-list disabled="{{rulesFullFilled(\'disabled\', item)}}"\n                      [(ngModel)]="item.reflector" radio-group>\n            <ion-item *ngFor="let option of item.getField(\'values\')">\n              <ion-label>{{option}}</ion-label>\n              <ion-radio value="{{option}}" *ngIf="option != item.getField(\'other_select\')"\n                         checked="{{item.reflector == option && option != item.getField(\'other_select\')}}"></ion-radio>\n              <ion-radio (ionSelect)="onRadioChange(item)" value="{{option}}" checked="{{!item.isLegitValue}}"\n                         *ngIf="option == item.getField(\'other_select\')"></ion-radio>\n            </ion-item>\n\n          <ion-item *ngIf="item.reflector == item.getField(\'other_select\') || !item.isLegitValue">\n            <!-- TODO write explaning Text -->\n            <ion-input [(ngModel)]="item.reflector" type="text"\n                       value="" placeholder="{{item.getField(\'placeholder\')}}"></ion-input>\n          </ion-item>\n        </ion-list>\n\n        </div>\n                <!-- RADIO WITH OTHER END -->\n\n\n                <!-- PROCESSED TEXT -->\n              <div *ngIf="item.type == \'processed_text\'">\n                <ion-card>\n    <ion-card-content padding>\n                  <div [innerHTML]="item.getField(\'text\')"></div>\n                </ion-card-content></ion-card>\n</div>\n                <!-- PROCESSED TEXT END -->\n\n                <!-- CHECKBOX -->\n      <div class="radio-group" *ngIf="item.type == \'checkboxes\' && rulesFullFilled(\'visible\', item)">\n      <ion-list disabled="{{rulesFullFilled(\'disabled\', item)}}"\n                [(ngModel)]="item.reflector" radio-group>\n      <ion-item *ngFor="let option of item.getField(\'values\')">\n      <ion-label>{{option.val}}</ion-label>\n      <ion-checkbox [(ngModel)]="option.ref"></ion-checkbox>\n      </ion-item>\n      </ion-list>\n      </div>\n                <!-- CHECKBIXES END -->\n\n\n                <!-- DATE -->\n              <ion-item *ngIf="item.type == \'date\' || item.type == \'datelist\'">\n                <!-- <ion-label stacked>{{item.title}}</ion-label> -->\n                <ion-datetime *ngIf="!isIE" displayFormat="DD/MM/YYYY" [(ngModel)]="item.reflector"  cancelText="Abbrechen" doneText="Fertig"\n                              disabled="{{rulesFullFilled(\'disabled\', item)}}"></ion-datetime>\n                   <ion-input *ngIf="isIE" disabled="{{rulesFullFilled(\'disabled\', item)}}" [(ngModel)]="item.reflector" type="text"\n                              value="" placeholder="{{item.getField(\'placeholder\')}}"></ion-input>\n              </ion-item>\n                <!-- DATE END -->\n\n                <!-- TIME -->\n              <ion-item *ngIf="item.type == \'webform_time\'">\n                <!-- <ion-label stacked>{{item.title}}</ion-label> -->\n                <ion-datetime *ngIf="!isIE" displayFormat="HH:mm" [(ngModel)]="item.reflector"  cancelText="Abbrechen" doneText="Fertig"\n                              disabled="{{rulesFullFilled(\'disabled\', item)}}"></ion-datetime>\n             <ion-input *ngIf="isIE" disabled="{{rulesFullFilled(\'disabled\', item)}}" [(ngModel)]="item.reflector" type="text"\n                        value="" placeholder="{{item.getField(\'placeholder\')}}"></ion-input>\n              </ion-item>\n                <!-- TIME END -->\n\n                 <div *ngIf="item.type == \'webform_likert\' && rulesFullFilled(\'visible\', item)">\n\n                     <div class="radio-group" *ngFor="let childNode of item.children">\n                       <ion-label>{{childNode.title}}</ion-label>\n            <ion-list disabled="{{rulesFullFilled(\'disabled\', item)}}" *ngIf="childNode.name != \'table\'"\n                      [(ngModel)]="childNode.reflector" radio-group>\n\n            <ion-item *ngFor="let option of childNode.getField(\'values\')">\n              <ion-label>{{option.value}}</ion-label>\n              <ion-radio value="{{option.key}}"></ion-radio>\n            </ion-item>\n            </ion-list>\n        </div>\n                  </div>\n\n                <!-- <section *ngIf="loaded"> -->\n\n                <!-- </section> -->\n      </div>\n    </div>\n\n\n\n      </span>\n        </div>\n\n    </div>\n\n</ion-content>\n\n<ion-footer *ngIf="!doctorIsAtStart" (click)="submitData()" style="z-index: 500000; margin-top: 120px" no-border>\n    <ion-toolbar color="primary">\n        <ion-title><span style="color: #5b5b5b">Datenbankübernahme</span></ion-title>\n        <ion-buttons end>\n            <button style="color: white" ion-button icon-only>\n                <ion-icon name="arrow-forward"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\checkin-for-doctors\checkin-for-doctors.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_checkin_service_checkin_service__["a" /* CheckinServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_storage_manager_storage_manager__["a" /* StorageManagerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6__providers_draw_draw__["a" /* DrawProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_auth_manager_auth_manager__["a" /* AuthManagerProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_10__providers_link_manager_link_manager__["a" /* LinkManagerProvider */]])
    ], CheckinForDoctorsPage);
    return CheckinForDoctorsPage;
}());

//# sourceMappingURL=checkin-for-doctors.js.map

/***/ })

});
//# sourceMappingURL=33.js.map