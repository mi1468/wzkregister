webpackJsonp([34],{

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModalPageModule", function() { return EventModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_modal__ = __webpack_require__(748);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventModalPageModule = /** @class */ (function () {
    function EventModalPageModule() {
    }
    EventModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__event_modal__["a" /* EventModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_modal__["a" /* EventModalPage */])
            ],
        })
    ], EventModalPageModule);
    return EventModalPageModule;
}());

//# sourceMappingURL=event-modal.module.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_calendar_calendarEvent_Model__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_manager_auth_manager__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_calendar_calendarProvider__ = __webpack_require__(451);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventModalPage = /** @class */ (function () {
    function EventModalPage(navCtrl, navParams, viewCtrl, alertController, authManager, calendarProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertController = alertController;
        this.authManager = authManager;
        this.calendarProvider = calendarProvider;
        this.titlePlaceholderText = "Titel"; // Title
        this.eventLocationPlaceholderText = "Veranstaltungsort"; // Event location
        this.notesPlaceholderText = "Notizen"; // Notes
        this.startDatePlaceholderText = "Start"; // Start
        this.endDatePlaceholderText = "Ende"; // End
        this.typeOfEventPlaceholderText = "Art der Veranstaltung"; // Type of event
        this.patientsInvitedPlaceholderText = "Eingeladene Patienten"; // Patients invited
        this.allDayPlaceholderText = "Den ganzen Tag?"; // All Day?
        this.addEventPlaceholderText = "Event hinzufügen"; // Add Event
        this.eventDetailsPlaceholderText = "Veranstaltungsdetails"; // Event Details
        this.currentTime = __WEBPACK_IMPORTED_MODULE_2_moment__().toDate();
        this.event = new __WEBPACK_IMPORTED_MODULE_3__providers_calendar_calendarEvent_Model__["a" /* CalendarEvent */]();
        this.startTime = __WEBPACK_IMPORTED_MODULE_2_moment__(this.currentTime).format();
        this.endTime = __WEBPACK_IMPORTED_MODULE_2_moment__(EventModalPage_1.createDateAddingHours(this.currentTime, 1)).format();
        this.minDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.currentTime).format();
        this.eventTypeInText = __WEBPACK_IMPORTED_MODULE_3__providers_calendar_calendarEvent_Model__["a" /* CalendarEvent */].getEventTypeByNumber(this.event.typeOfMeeting);
        this.isMedical = this.authManager.isMedical;
        this.hasShowedMessageForUpdatingPatientsList = false;
        var selectedDayDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.navParams.get('selectedDay')).toDate();
        if (this.currentTime.getDay() != selectedDayDate.getDay() || this.currentTime.getMonth() != selectedDayDate.getMonth() || this.currentTime.getFullYear() != selectedDayDate.getFullYear()) {
            var preselectedDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.navParams.get('selectedDay')).format();
            var preselectedDateEnd = __WEBPACK_IMPORTED_MODULE_2_moment__(EventModalPage_1.createDateAddingHours(this.navParams.get('selectedDay'), 1)).format();
            this.startTime = preselectedDate;
            this.endTime = preselectedDateEnd;
        }
    }
    EventModalPage_1 = EventModalPage;
    EventModalPage.createDateAddingHours = function (date, hours) {
        var temp = new Date();
        temp.setTime(date.getTime() + (hours * 60 * 60 * 1000));
        return temp;
    };
    EventModalPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    EventModalPage.prototype.save = function () {
        this.event.startTime = __WEBPACK_IMPORTED_MODULE_2_moment__(this.startTime).toDate();
        this.event.endTime = __WEBPACK_IMPORTED_MODULE_2_moment__(this.endTime).toDate();
        this.viewCtrl.dismiss(this.event);
    };
    EventModalPage.prototype.ionViewDidLoad = function () { };
    EventModalPage.prototype.parsePatientsList = function (array) {
        var result = [];
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var user = array_1[_i];
            if (user.hasOwnProperty("id")) {
                result.push(user["id"]);
            }
        }
        return result;
    };
    EventModalPage.prototype.isIncluded = function (item, array) {
        if (array) {
            for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
                var obj = array_2[_i];
                if (obj == item)
                    return true;
            }
        }
        return false;
    };
    EventModalPage.prototype.promptToSelectPatients = function () {
        var _this = this;
        console.log("Inside the select patients function.");
        if (this.calendarProvider.usersListFinishedUpdate == true && (!this.calendarProvider.usersListUpdating == true)) {
            console.log("Inside the if!!! of the select patients function.");
            var emails = this.parsePatientsList(this.calendarProvider.usersList);
            var alert_1 = this.alertController.create({
                title: "Patienten für den Termin" // "Patients for the appointment"
            });
            var selectedPatients = [];
            if (this.event.participants != "") {
                selectedPatients = this.event.participants.split(",");
            }
            for (var _i = 0, emails_1 = emails; _i < emails_1.length; _i++) {
                var patientEmail = emails_1[_i];
                alert_1.addInput({
                    type: 'checkbox',
                    label: patientEmail,
                    value: patientEmail,
                    checked: this.isIncluded(patientEmail, selectedPatients)
                });
            }
            alert_1.addButton('Cancel');
            alert_1.addButton({
                text: 'OK',
                handler: function (data) {
                    var participants = "";
                    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                        var email = data_1[_i];
                        participants += email + ",";
                    }
                    participants = participants.substring(0, participants.length - 1);
                    console.log("Participants: ", participants);
                    _this.event.participants = participants;
                }
            });
            alert_1.present();
        }
        else {
            console.log("Inside the else :((( !!! of the select patients function.");
            if (this.calendarProvider.usersListUpdating == false && this.calendarProvider.usersListFinishedUpdate == false) {
                console.log("Starting updating the list?");
                this.calendarProvider.updateUserList();
            }
            var alert_2 = this.alertController.create({
                title: "Patientenliste abrufen",
                subTitle: "Bitte warten Sie. Die Anwendung ruft die Patientenliste ab und es erscheint ein neues Fenster zur Auswahl der Patienten." //"Please wait. The application retrieves the patients' list and a new window will appear to select patients."
            });
            alert_2.addButton({
                text: 'OK'
            });
            if (this.hasShowedMessageForUpdatingPatientsList == false) {
                alert_2.present();
                this.hasShowedMessageForUpdatingPatientsList = true;
            }
            setTimeout(function () {
                _this.promptToSelectPatients();
            }, 1500);
        }
    };
    EventModalPage.prototype.promptToSelectTypeOfEvent = function () {
        var _this = this;
        var alert = this.alertController.create({
            title: "Art der Veranstaltung" // "Type of event"
        });
        for (var _i = 0, _a = __WEBPACK_IMPORTED_MODULE_3__providers_calendar_calendarEvent_Model__["a" /* CalendarEvent */].ALL_EVENT_TYPES; _i < _a.length; _i++) {
            var eventType = _a[_i];
            alert.addInput({
                type: 'radio',
                label: __WEBPACK_IMPORTED_MODULE_3__providers_calendar_calendarEvent_Model__["a" /* CalendarEvent */].getEventTypeByNumber(eventType),
                value: String(eventType),
                checked: this.event.typeOfMeeting == eventType
            });
        }
        alert.addButton('Abbrechen'); // Cancel
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                console.log(_this.event);
                console.log(data);
                _this.event.typeOfMeeting = Number(data);
                _this.eventTypeInText = __WEBPACK_IMPORTED_MODULE_3__providers_calendar_calendarEvent_Model__["a" /* CalendarEvent */].getEventTypeByNumber(_this.event.typeOfMeeting);
                console.log(_this.event);
            }
        });
        alert.present();
    };
    var EventModalPage_1;
    EventModalPage = EventModalPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-modal',template:/*ion-inline-start:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\calendar.module\event-modal\event-modal.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{eventDetailsPlaceholderText}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-input type="text" [placeholder]="titlePlaceholderText" [(ngModel)]="event.title"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" [placeholder]="eventLocationPlaceholderText" [(ngModel)]="event.location"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" [placeholder]="notesPlaceholderText" [(ngModel)]="event.notes"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>{{startDatePlaceholderText}}</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="startTime" [min]="minDate"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>{{endDatePlaceholderText}}</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="endTime" [min]="startTime"></ion-datetime>\n    </ion-item>\n\n    <ion-item (click)="promptToSelectTypeOfEvent()">\n      <ion-label (click)="promptToSelectTypeOfEvent()">{{typeOfEventPlaceholderText}}</ion-label>\n      <ion-input disabled type="text" [(ngModel)]="eventTypeInText"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="isMedical" (click)="promptToSelectPatients()">\n      <ion-label (click)="promptToSelectPatients()">{{patientsInvitedPlaceholderText}}</ion-label>\n      <ion-input disabled type="text" [(ngModel)]="event.participants"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>{{allDayPlaceholderText}}</ion-label>\n      <ion-checkbox [(ngModel)]="event.allday"></ion-checkbox>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button full icon-left (click)="save()">\n    <ion-icon name="checkmark"></ion-icon> {{addEventPlaceholderText}}\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\calendar.module\event-modal\event-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_manager_auth_manager__["a" /* AuthManagerProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_calendar_calendarProvider__["a" /* CalendarProvider */]])
    ], EventModalPage);
    return EventModalPage;
}());

//# sourceMappingURL=event-modal.js.map

/***/ })

});
//# sourceMappingURL=34.js.map