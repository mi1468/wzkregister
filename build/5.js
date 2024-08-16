webpackJsonp([5],{

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageModule", function() { return CalendarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_calendar__ = __webpack_require__(455);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CalendarPageModule = /** @class */ (function () {
    function CalendarPageModule() {
    }
    CalendarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__calendar__["a" /* CalendarPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__calendar__["a" /* CalendarPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_calendar__["a" /* NgCalendarModule */]
            ],
        })
    ], CalendarPageModule);
    return CalendarPageModule;
}());

//# sourceMappingURL=calendar.module.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_calendar__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_calendar_calendarProvider__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_calendar_calendarEvent_Model__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_storage_manager_storage_manager__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_locales_de__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_gui_manager_gui_manager__ = __webpack_require__(40);
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













Object(__WEBPACK_IMPORTED_MODULE_9__angular_common__["k" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_10__angular_common_locales_de__["a" /* default */]);
var CalendarPage = /** @class */ (function () {
    function CalendarPage(navCtrl, modalCtrl, guiManager, alertCtrl, nativeCalendar, calProvider, storageManager, storage, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.guiManager = guiManager;
        this.alertCtrl = alertCtrl;
        this.nativeCalendar = nativeCalendar;
        this.calProvider = calProvider;
        this.storageManager = storageManager;
        this.storage = storage;
        this.http = http;
        this.allDayLabel = "Den ganzen Tag";
        this.eventSource = [];
        this.selectedDay = new Date('2021-11-01');
        this.selectedDayTextFormat = "dddd D.M.YYYY";
        this.selectedDayText = __WEBPACK_IMPORTED_MODULE_2_moment__(this.selectedDay).locale("de").format(this.selectedDayTextFormat);
        this.mySwiper = null;
        this.calendar = {
            mode: 'week',
            currentDate: new Date('2021-11-01'),
            locale: 'de-de',
            noEventsLabel: 'Keine Ereignisse',
            startingDayWeek: 1,
            startingDayMonth: 1,
            step: 7,
            startHour: 6,
            endHour: 19,
        };
        /**
         * Changes the selected date when time is selected
         * @param event
         */
        this.onTimeSelected = function (event) {
            _this.setSelectedDay(event.selectedTime);
        };
    }
    CalendarPage_1 = CalendarPage;
    CalendarPage.prototype.openHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__home_home__["a" /* HomePage */]);
    };
    ///////////////////////////// GUI FUNCTIONS ///////////////////////////////
    /**
     * Slides the UI to the next month
     */
    CalendarPage.prototype.slideNextMonth = function () {
        this.retrieveSwiperObject();
        if (this.isSwiperObjectAvailable()) {
            this.mySwiper.slideNext();
        }
        else {
            this.calendar.currentDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.calendar.currentDate).add(1, "months").toDate();
        }
        //this.selectedDay = this.calendar.currentDate;
    };
    /**
     * Slides the UI to the previous month
     */
    CalendarPage.prototype.slidePreviousMonth = function () {
        this.retrieveSwiperObject();
        if (this.isSwiperObjectAvailable()) {
            this.mySwiper.slidePrev();
        }
        else {
            this.calendar.currentDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.calendar.currentDate).subtract(1, "months").toDate();
        }
        //this.selectedDay = this.calendar.currentDate;
    };
    /**
     * Changes the selected date on the UI
     * @param dateSelected
     */
    CalendarPage.prototype.onCurrentDateChanged = function (dateSelected) {
        if (this.selectedDay.getMonth() != dateSelected.getMonth() || this.selectedDay.getDay() != dateSelected.getDay())
            this.setSelectedDay(dateSelected);
    };
    ;
    /**
     * Adds an event to the calendars
     */
    CalendarPage.prototype.addEvent = function () {
        var _this = this;
        var modal = this.modalCtrl.create('EventModalPage', { selectedDay: this.selectedDay });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.addEventsToCalendarView([data]);
                _this.addEventsToCalendars([data]);
            }
        });
    };
    CalendarPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    /**
     * Fetches the therapy entry associated with this event based on the comments/notes of the event.
     * @param event
     * @param callback
     */
    CalendarPage.prototype.receiveTherapyEntry = function (event, callback) {
        if (event.notes.includes("Entry id:")) {
            var id = event.notes.split(":")[1].trim();
            console.log("The id of the calendar entry is: ", id);
            this.calProvider.receiveTherapyEntryWithId(id, function (success, data) {
                callback(success, data);
            });
        }
    };
    /**
     * Shows an alert or opens a new page that has additional information about the event.
     * @param event
     */
    CalendarPage.prototype.onEventSelected = function (event) {
        var _this = this;
        var start = __WEBPACK_IMPORTED_MODULE_2_moment__(event.startTime).locale('de').format('HH:mm');
        var end = __WEBPACK_IMPORTED_MODULE_2_moment__(event.endTime).locale('de').format('HH:mm');
        if (event.calendarType == __WEBPACK_IMPORTED_MODULE_5__providers_calendar_calendarEvent_Model__["a" /* CalendarEvent */].CLINET_CALENDAR_TYPE) {
            if (event.notes.includes("Entry id")) {
                this.receiveTherapyEntry(event, function (success, data) {
                    if (success == true) {
                        //console.log("Success: ", success, " data: " , data);
                        _this.navCtrl.push('TherapyEntryPage', {
                            data: data
                        });
                    }
                    else {
                        _this.guiManager.showPopupMessage("Fehler", "Das Event konnte nicht geladen werden. Fehlerinformation: " + JSON.stringify(data));
                    }
                });
            }
            else {
                var sub_title = '';
                if (event.allDay == true) {
                    sub_title += '<br>Den ganzen Tag: ' + (event.allday ? 'Ja' : 'Nein');
                }
                else {
                    sub_title += '<br>Von: ' + start;
                }
                sub_title += (event.notes ? '<br>Description: ' + event.notes : '');
                sub_title += (event.location ? '<br>Ort: ' + event.location : '');
                sub_title += (event.practitioner ? '<br>Therapeut: ' + event.practitioner : '');
                /*        let sub_title = 'Von: ' + start
                           + '<br>Bis: ' + end
                          + '<br>Ort: ' + (event.location ? event.location : '')
                           + '<br>Notizen: ' + (event.notes ? event.notes : '')
                           + '<br>Den ganzen Tag: ' + (event.allday ? 'Ja' : 'Nein')
                          + '<br>Therapeut: ' + (event.practitioner ? event.practitioner : '')
                          + '<br>Aus dem Kalender: ' + event.calendarType;
                        if (event.allday == true) {
                          sub_title = 'Ort: ' + (event.location ? event.location : '')
                             + '<br>Notizen: ' + (event.notes ? event.notes : '')
                            + '<br>Den ganzen Tag: ' + (event.allday ? 'Ja' : 'Nein')
                            + '<br>Therapeut: ' + (event.practitioner ? event.practitioner : '')
                            + '<br>Aus dem Kalender: ' + event.calendarType;
                        }*/
                var alert_1 = this.alertCtrl.create({
                    title: '' + event.title,
                    subTitle: sub_title,
                    buttons: [{
                            text: 'OK',
                            handler: function (data) {
                                console.log('OK clicked', data, event);
                            }
                        }
                    ]
                });
                alert_1.present();
            }
        }
        else {
            var sub_title = 'Von: ' + start
                + '<br>Bis: ' + end
                // + '<br>Ort: ' + (event.location ? event.location : '')
                // + '<br>Notizen: ' + (event.notes ? event.notes : '')
                // + '<br>Den ganzen Tag: ' + (event.allday ? 'Ja' : 'Nein')
                + '<br>Therapeut: ' + (event.practitioner ? event.practitioner : '');
            if (event.allday == true) {
                sub_title = 'Ort: ' + (event.location ? event.location : '')
                    // + '<br>Notizen: ' + (event.notes ? event.notes : '')
                    + '<br>Den ganzen Tag: ' + (event.allday ? 'Ja' : 'Nein')
                    + '<br>Therapeut: ' + (event.practitioner ? event.practitioner : '');
            }
            var alert_2 = this.alertCtrl.create({
                title: '' + event.title,
                subTitle: sub_title,
                buttons: [{
                        text: 'OK',
                        handler: function (data) {
                            console.log('OK clicked', data, event);
                        }
                    }
                ]
            });
            alert_2.present();
        }
    };
    /**
     * Updates the information of the calendar if the platform is supported.
     */
    CalendarPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //TODO Add a background function that calls  this.retrieveDataAndUpdateCalendarView();  every 15-30-60 minutes?
        //this.addTestEventsToView();
        this.calProvider.updateUserList();
        if (this.calProvider.doChecks()) {
            this.consolePermission();
            this.retrieveCalendarsAndTheirSyncSettings();
            //this.retrieveDataFromCalendarsAndCallMethod(()=> {this.updateView();});
            this.retrieveDataFromCalendarsAndCallMethod(function () {
                _this.synchronizeEventsToExternalCalendarsAndUpdateView();
            });
        }
        else {
            this.showUnsupportedPlatform();
        }
    };
    /**
     * Update the attendance of the user on this event.
     * @param checkboxEvent
     * @param event
     */
    CalendarPage.prototype.eventCheckChangedValue = function (checkboxEvent, event) {
        event.attending = checkboxEvent.checked;
        this.calProvider.updateEventAttendanceInTheDatabase(event);
    };
    ////////////////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    CalendarPage.prototype.setSelectedDay = function (date) {
        this.selectedDay = date;
        this.selectedDayText = __WEBPACK_IMPORTED_MODULE_2_moment__(this.selectedDay).locale("de").format(this.selectedDayTextFormat);
    };
    /**
     * Sets the internal field mySwiper if that is available in the HTML view.
     */
    CalendarPage.prototype.retrieveSwiperObject = function () {
        if (this.isSwiperObjectAvailable() == false && document.querySelector('.swiper-container')) {
            //console.log("Trying to get the object")
            this.mySwiper = document.querySelector('.swiper-container')['swiper'];
        }
    };
    /**
     * Returns true if the Swiper object is available, false otherwise.
     */
    CalendarPage.prototype.isSwiperObjectAvailable = function () {
        return !(this.mySwiper == null || this.mySwiper == undefined);
    };
    /**
     * Removes an event from the calendars.
     * @param event
     */
    CalendarPage.prototype.deleteEvent = function (event) {
        var index = this.eventSource.indexOf(event);
        if (event.calendarType == __WEBPACK_IMPORTED_MODULE_5__providers_calendar_calendarEvent_Model__["a" /* CalendarEvent */].EXTERNAL_CALENDAR_TYPE) {
            //this.calProvider.deleteEventsFromAllCalendars(event.startTime, event.endTime, event.title, event.location, event.message);
            //this.calProvider.deleteEventsFromAllExternalCalendars(event);
            this.removeEvent(index);
            index = this.calProvider.userExternalEvents.indexOf(event);
            this.calProvider.userExternalEvents.splice(index, 1);
        }
        else {
            //this.calProvider.deleteEventsFromAllCalendars(event.startTime, event.endTime, event.title, event.location, event.notes);
            this.calProvider.deleteEventsFromAllExternalCalendars(event);
            this.calProvider.deleteEventFromTheDatabase(event);
            this.removeEvent(index);
            index = this.calProvider.userEvents.indexOf(event);
            this.calProvider.userEvents.splice(index, 1);
        }
    };
    /**
     * Updates/Refreshes the view with new events.
     */
    CalendarPage.prototype.updateView = function () {
        var _this = this;
        var internalEvents = this.calProvider.userEvents;
        var externalEvents = this.calProvider.userExternalEvents;
        var temp = this.combineAndRemoveDuplicateEvents(internalEvents, externalEvents);
        console.log("Updating view...");
        console.log("External events are: ", externalEvents);
        console.log("Internal events are: ", internalEvents);
        this.eventSource = [];
        setTimeout(function () {
            _this.eventSource = temp;
        });
        this.calProvider.updatedUserEvents = false;
        this.calProvider.updatedUserExternalEvents = false;
    };
    /**
     * Combines the two lists of events passed as parameters into one list with no duplicate events.
     * @param internalEvents
     * @param externalEvents
     */
    CalendarPage.prototype.combineAndRemoveDuplicateEvents = function (internalEvents, externalEvents) {
        var temp = [];
        if (externalEvents)
            externalEvents = externalEvents.filter(function (event) {
                for (var _i = 0, internalEvents_2 = internalEvents; _i < internalEvents_2.length; _i++) {
                    var internalEvent = internalEvents_2[_i];
                    if (internalEvent.title == event.title &&
                        (internalEvent.notes == event.notes || internalEvent.message == event.notes || event.notes.includes(internalEvent.notes) || event.notes.includes(internalEvent.message)) &&
                        internalEvent.location == event.location &&
                        internalEvent.startTime.getTime() == event.startTime.getTime() &&
                        internalEvent.endTime.getTime() == event.endTime.getTime()) {
                        return false;
                    }
                }
                return true;
            });
        for (var _i = 0, internalEvents_1 = internalEvents; _i < internalEvents_1.length; _i++) {
            var eventData = internalEvents_1[_i];
            if (eventData.typeOfMeeting == __WEBPACK_IMPORTED_MODULE_5__providers_calendar_calendarEvent_Model__["a" /* CalendarEvent */].GLOBAL_EVENT_TYPE)
                eventData.calendarType = __WEBPACK_IMPORTED_MODULE_5__providers_calendar_calendarEvent_Model__["a" /* CalendarEvent */].GLOBAL_CALENDAR_TYPE;
            else
                eventData.calendarType = __WEBPACK_IMPORTED_MODULE_5__providers_calendar_calendarEvent_Model__["a" /* CalendarEvent */].CLINET_CALENDAR_TYPE;
            temp.push(eventData);
        }
        for (var _a = 0, externalEvents_1 = externalEvents; _a < externalEvents_1.length; _a++) {
            var eventData = externalEvents_1[_a];
            eventData.calendarType = __WEBPACK_IMPORTED_MODULE_5__providers_calendar_calendarEvent_Model__["a" /* CalendarEvent */].EXTERNAL_CALENDAR_TYPE;
            temp.push(eventData);
        }
        return temp;
    };
    /**
     * Waits until the data of the events are retrieved and then calls the function passed as parameter.
     * It waits up to 10 times for 500 miliseconds each time.
     * @param counter
     * @param functionToCall
     */
    CalendarPage.prototype.waitForTheRetrievalOfData = function (counter, functionToCall) {
        var _this = this;
        var WAITING_TIME_PER_CALL = 500;
        var MAXIMUM_WAITING_TIMES = 10;
        if (counter > MAXIMUM_WAITING_TIMES) {
            console.log("The method for updating the events has been called 10 times...");
            return;
        }
        counter = counter + 1;
        if (this.calProvider.updatedUserEvents == true && this.calProvider.updatedUserExternalEvents == true) {
            functionToCall();
        }
        else {
            console.log("Waiting to get data from both sources, the database and the user's calendars.");
            console.log("Received data from the database/server: ", this.calProvider.updatedUserEvents);
            console.log("Received data from the external accounts: ", this.calProvider.updatedUserExternalEvents);
            setTimeout(function (c, f) {
                if (c === void 0) { c = counter; }
                if (f === void 0) { f = functionToCall; }
                _this.waitForTheRetrievalOfData(c, f);
            }, WAITING_TIME_PER_CALL);
        }
    };
    /**
     * Fetches the event data of the calendars and calls the function passed as parameter.
     * @param callback
     */
    CalendarPage.prototype.retrieveDataFromCalendarsAndCallMethod = function (callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.retrieveCalendarsAndTheirSyncSettings()];
                    case 1:
                        _a.sent();
                        if (!(this.calProvider.userCalendars.filter(function (cal) {
                            return cal.sync;
                        }).length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.calProvider.retrieveAndUpdateEventsFromExternalCalendars()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        console.log("There are no accounts selected for sync");
                        this.calProvider.userExternalEvents = [];
                        this.calProvider.updatedUserExternalEvents = true;
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this.calProvider.retrieveAndUpdateEventsFromTheDatabase()];
                    case 5:
                        _a.sent();
                        if (this.calProvider.updatedUserEvents == true && this.calProvider.updatedUserExternalEvents == true) {
                            console.log("All events have been received and booleans are true!");
                        }
                        else {
                            console.log("Events:", this.calProvider.updatedUserEvents, ", ext: ", this.calProvider.updatedUserExternalEvents);
                        }
                        this.waitForTheRetrievalOfData(0, function () {
                            callback();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Edits the event notes to add the custom text of our application.
     * @param event
     */
    CalendarPage.checkAndFinalizeEventBeforeAdding = function (event) {
        if (event) {
            if (event.notes) {
                if (event.notes.indexOf(__WEBPACK_IMPORTED_MODULE_5__providers_calendar_calendarEvent_Model__["a" /* CalendarEvent */].CUSTOM_TEXT_FOR_APPLICATION) == -1) {
                    event.notes = event.notes + " " + __WEBPACK_IMPORTED_MODULE_5__providers_calendar_calendarEvent_Model__["a" /* CalendarEvent */].CUSTOM_TEXT_FOR_APPLICATION;
                }
                else {
                    console.log(event);
                    console.log("Huh? The notes of the event?! : ", event.notes);
                }
            }
            else {
                event.notes = __WEBPACK_IMPORTED_MODULE_5__providers_calendar_calendarEvent_Model__["a" /* CalendarEvent */].CUSTOM_TEXT_FOR_APPLICATION;
            }
        }
        return event;
    };
    /**
     * Adds the events to the calendar.
     * @param events An array of the events
     */
    CalendarPage.prototype.addEventsToCalendars = function (events) {
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var event_1 = events_1[_i];
            CalendarPage_1.checkAndFinalizeEventBeforeAdding(event_1);
            this.calProvider.registerEventToTheDatabaseAndSync(event_1);
        }
    };
    /**
     * Adds the events to the UI view.
     * @param events An array of the events
     */
    CalendarPage.prototype.addEventsToCalendarView = function (events) {
        var _this = this;
        var temp = this.eventSource;
        for (var _i = 0, events_2 = events; _i < events_2.length; _i++) {
            var eventData = events_2[_i];
            temp.push(eventData);
        }
        this.eventSource = [];
        setTimeout(function () {
            _this.eventSource = temp;
        });
    };
    /**
     * Removes an event from the UI view.
     * @param index The index of the event to remove.
     */
    CalendarPage.prototype.removeEvent = function (index) {
        var _this = this;
        var temp = this.eventSource;
        temp.splice(index, 1);
        this.eventSource = [];
        setTimeout(function () {
            _this.eventSource = temp;
        });
    };
    /**
     * Retrieve a list of external calendars and any previous sync settings related.
     */
    CalendarPage.prototype.retrieveCalendarsAndTheirSyncSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var storagePrefix;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        storagePrefix = "CALENDAR_ENTRY_";
                        return [4 /*yield*/, this.calProvider.getUserCalendarsAsync().then(function (calendarsRetrieved) { return __awaiter(_this, void 0, void 0, function () {
                                var _i, calendarsRetrieved_1, oneCalendar, isSync;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _i = 0, calendarsRetrieved_1 = calendarsRetrieved;
                                            _a.label = 1;
                                        case 1:
                                            if (!(_i < calendarsRetrieved_1.length)) return [3 /*break*/, 4];
                                            oneCalendar = calendarsRetrieved_1[_i];
                                            return [4 /*yield*/, this.storage.get(storagePrefix + oneCalendar.displayname)];
                                        case 2:
                                            isSync = _a.sent();
                                            if (isSync != null)
                                                oneCalendar.sync = isSync;
                                            _a.label = 3;
                                        case 3:
                                            _i++;
                                            return [3 /*break*/, 1];
                                        case 4:
                                            this.calProvider.userCalendars = calendarsRetrieved;
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.calProvider.userCalendars];
                }
            });
        });
    };
    /**
     * Prompts user with a selection alert to select to which external calendars the events should be synced.
     */
    CalendarPage.prototype.selectAccountsForSync = function () {
        var _this = this;
        this.calProvider.hasCalendarReadWritePermission().then(function (hasPerm) {
            if (hasPerm) {
                var syncAccountsTitleMessage_1 = "Wählen Sie aus, mit welchen Konten der Kalender der Anwendung synchronisiert werden soll"; // Select which accounts you want the application's calendar to sync to
                var storagePrefix_1 = "CALENDAR_ENTRY_";
                _this.retrieveCalendarsAndTheirSyncSettings().then(function (calendarsRetrieved) {
                    var alert = _this.alertCtrl.create();
                    alert.setTitle(syncAccountsTitleMessage_1);
                    calendarsRetrieved.forEach(function (oneCalendar) {
                        if (_this.calProvider.platformUtils.platform.is('android')) {
                            alert.addInput({
                                type: 'checkbox',
                                label: oneCalendar.displayname,
                                value: oneCalendar.displayname,
                                checked: oneCalendar.sync
                            });
                        }
                        else {
                            alert.addInput({
                                type: 'checkbox',
                                label: oneCalendar.name,
                                value: oneCalendar.name,
                                checked: oneCalendar.sync
                            });
                        }
                    });
                    alert.addButton('Abbrechen'); // Cancel
                    alert.addButton({
                        text: 'Speichern & Synchronisieren',
                        handler: function (data) {
                            calendarsRetrieved.forEach(function (oneCalendar) {
                                oneCalendar.sync = data.indexOf(oneCalendar.name) >= 0; // Returns true if the calendar display name is in data (e.g. was selected by the user)
                                _this.storageManager.save(storagePrefix_1 + oneCalendar.name, oneCalendar.sync, function () {
                                });
                            });
                            _this.calProvider.userCalendars = calendarsRetrieved;
                            //this.retrieveDataFromCalendarsAndCallMethod(()=> {this.updateView();});
                            _this.retrieveDataFromCalendarsAndCallMethod(function () {
                                _this.synchronizeEventsToExternalCalendarsAndUpdateView();
                            });
                        }
                    });
                    alert.present();
                });
            }
            else {
                _this.showPermissionsAlert();
            }
        }).catch(function (exc) {
            console.log("Had problem with reading calendar permissions", exc);
        });
    };
    /**
     * Shows a message that the device is unsupported.
     */
    CalendarPage.prototype.showUnsupportedPlatform = function () {
        console.log("Unable to request permissions for this platform.");
        var alt = this.alertCtrl.create({
            title: "Das Gerät wird nicht vollständig unterstützt.",
            subTitle: "Auf Ihrem Gerät läuft kein iOS oder Android und wird derzeit nicht unterstützt.",
            buttons: ["OK"]
        });
        alt.present();
    };
    /**
     * Asks for permission from the user.
     */
    CalendarPage.prototype.showPermissionsAlert = function () {
        var _this = this;
        var noCalendarPermissionsTitleMessage = "Unzureichende Berechtigungen"; // Insufficient permissions
        var noCalendarPermissionsBodyMessage = "Die Anwendung hat keine Berechtigung für den Zugriff auf Ihren Kalender. Bitte geben Sie die erforderlichen Berechtigungen ein und versuchen Sie es erneut."; // The application has no permission to access your calendar. Please give the permissions required and retry.
        var alert = this.alertCtrl.create({
            title: noCalendarPermissionsTitleMessage,
            subTitle: noCalendarPermissionsBodyMessage
        });
        alert.addButton('Abbrechen'); // Cancel
        alert.addButton({
            text: 'Berechtigungen vergeben',
            handler: function (data) {
                if (_this.calProvider.doChecks())
                    _this.calProvider.requestCalendarReadWritePermissions().catch(function (exc) {
                        console.log("Exception while asking read/write permissions for the calendar.", exc);
                    });
                else
                    _this.showUnsupportedPlatform();
            }
        });
        //alert.present();
    };
    CalendarPage.prototype.consolePermission = function () {
        var _this = this;
        if (this.calProvider.doChecks())
            this.calProvider.hasCalendarReadWritePermission().then(function (perm) {
                if (perm == true) {
                    console.log("We have read and write permissions!", perm);
                }
                else {
                    _this.showPermissionsAlert();
                    console.log("We don't have read and write permissions", perm);
                }
            }).catch(function (exc) { return console.log("We should never be here", exc); });
        else {
            this.showUnsupportedPlatform();
        }
    };
    CalendarPage.prototype.synchronizeEvents = function () {
        var _this = this;
        var dateYesterday = __WEBPACK_IMPORTED_MODULE_2_moment__().subtract(1, "days").toDate();
        var externalEvents = this.calProvider.userExternalEvents;
        var internalFutureEvents = this.calProvider.userEvents.filter(function (event) {
            if (event.startTime.getTime() > dateYesterday.getTime()) {
                return true;
            }
        });
        /**
         * The first element is the event that is on the external calendar and must be updated and
         * the second element is the internal event that has some different details and must synced.
         * @type [[CalendarEvent,CalendarEvent]]
         */
        var eventsToBeUpdated = [];
        var internalEventsThatAlreadyExistsInCalendars = [];
        var internalEventsThatNeedToBeSynced = internalFutureEvents.filter(function (event) {
            for (var _i = 0, externalEvents_2 = externalEvents; _i < externalEvents_2.length; _i++) {
                var externalEvent = externalEvents_2[_i];
                if (externalEvent.title == event.title &&
                    (event.notes == externalEvent.notes || event.message == externalEvent.notes || externalEvent.notes.includes(event.notes) || externalEvent.notes.includes(event.message)) &&
                    externalEvent.location == event.location &&
                    externalEvent.startTime.getTime() == event.startTime.getTime() &&
                    externalEvent.endTime.getTime() == event.endTime.getTime()) {
                    internalEventsThatAlreadyExistsInCalendars.push(event);
                    return false;
                }
                else if (externalEvent.title == event.title &&
                    externalEvent.startTime.getTime() == event.startTime.getTime() &&
                    externalEvent.endTime.getTime() == event.endTime.getTime()) {
                    eventsToBeUpdated.push([externalEvent, event]); // Handle it as special case
                    return false;
                }
            }
            return true;
        });
        var externalFutureEventsThatMustRemove = externalEvents.filter(function (event) {
            if (event.startTime.getTime() > dateYesterday.getTime()) {
                for (var _i = 0, eventsToBeUpdated_2 = eventsToBeUpdated; _i < eventsToBeUpdated_2.length; _i++) {
                    var pair = eventsToBeUpdated_2[_i];
                    if (event == pair[0]) {
                        return false;
                    }
                }
                for (var _a = 0, internalEventsThatAlreadyExistsInCalendars_1 = internalEventsThatAlreadyExistsInCalendars; _a < internalEventsThatAlreadyExistsInCalendars_1.length; _a++) {
                    var internalEvent = internalEventsThatAlreadyExistsInCalendars_1[_a];
                    if (internalEvent.title == event.title &&
                        (internalEvent.notes == event.notes || internalEvent.message == event.notes || event.notes.includes(internalEvent.notes) || event.notes.includes(internalEvent.message)) &&
                        internalEvent.location == event.location &&
                        internalEvent.startTime.getTime() == event.startTime.getTime() &&
                        internalEvent.endTime.getTime() == event.endTime.getTime()) {
                        return false;
                    }
                }
                return true;
            }
        });
        externalFutureEventsThatMustRemove = externalFutureEventsThatMustRemove.filter(function (event) {
            return !(event.notes.indexOf(__WEBPACK_IMPORTED_MODULE_5__providers_calendar_calendarEvent_Model__["a" /* CalendarEvent */].CUSTOM_TEXT_FOR_APPLICATION) == -1 &&
                event.message.indexOf(__WEBPACK_IMPORTED_MODULE_5__providers_calendar_calendarEvent_Model__["a" /* CalendarEvent */].CUSTOM_TEXT_FOR_APPLICATION) == -1);
        });
        console.log("Internal future events: ", internalFutureEvents);
        console.log("Internal events that exist in external calendars: ", internalEventsThatAlreadyExistsInCalendars);
        console.log("Internal events that will be added in external calendars: ", internalEventsThatNeedToBeSynced);
        console.log("Events in external calendars that must remove: ", externalFutureEventsThatMustRemove);
        console.log("Events that must be updated: ", eventsToBeUpdated);
        var _loop_1 = function (event_2) {
            this_1.calProvider.userCalendars.forEach(function (oneCalendar) {
                if (oneCalendar.sync == true)
                    _this.calProvider.createEventOnUserCalendar(event_2, oneCalendar);
            });
        };
        var this_1 = this;
        //sync those: internalEventsThatNeedToBeSynced
        for (var _i = 0, internalEventsThatNeedToBeSynced_1 = internalEventsThatNeedToBeSynced; _i < internalEventsThatNeedToBeSynced_1.length; _i++) {
            var event_2 = internalEventsThatNeedToBeSynced_1[_i];
            _loop_1(event_2);
        }
        //remove those: externalFutureEventsThatMustRemove
        for (var _a = 0, externalFutureEventsThatMustRemove_1 = externalFutureEventsThatMustRemove; _a < externalFutureEventsThatMustRemove_1.length; _a++) {
            var event_3 = externalFutureEventsThatMustRemove_1[_a];
            this.calProvider.deleteEventsFromAllExternalCalendars(event_3);
        }
        var _loop_2 = function (pair) {
            var externalEvent = pair[0];
            var internalEvent = pair[1];
            if (!(externalEvent.notes.indexOf(__WEBPACK_IMPORTED_MODULE_5__providers_calendar_calendarEvent_Model__["a" /* CalendarEvent */].CUSTOM_TEXT_FOR_APPLICATION) == -1 &&
                externalEvent.message.indexOf(__WEBPACK_IMPORTED_MODULE_5__providers_calendar_calendarEvent_Model__["a" /* CalendarEvent */].CUSTOM_TEXT_FOR_APPLICATION) == -1)) {
                this_2.calProvider.deleteEventsFromAllExternalCalendars(externalEvent);
                this_2.calProvider.userCalendars.forEach(function (oneCalendar) {
                    if (oneCalendar.sync == true)
                        _this.calProvider.createEventOnUserCalendar(internalEvent, oneCalendar);
                });
            }
        };
        var this_2 = this;
        //update those: eventsToBeUpdated
        for (var _b = 0, eventsToBeUpdated_1 = eventsToBeUpdated; _b < eventsToBeUpdated_1.length; _b++) {
            var pair = eventsToBeUpdated_1[_b];
            _loop_2(pair);
        }
    };
    CalendarPage.prototype.synchronizeEventsToExternalCalendarsAndUpdateView = function () {
        this.synchronizeEvents();
        this.updateView();
    };
    var CalendarPage_1;
    CalendarPage = CalendarPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calendar',template:/*ion-inline-start:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\calendar.module\calendar\calendar.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            Terminplaner\n        </ion-title>\n      <ion-buttons end>\n        <button ion-button (click)="openHomePage()">\n          <img class="homeLogoNavBar" src="assets/home/icon.svg">\n        </button>\n      </ion-buttons>\n        <!--<ion-buttons end>\n            <button ion-button icon-only (click)="addEvent()" >\n                <ion-icon name="md-add"></ion-icon>\n            </button>\n            <button ion-button icon-only (click)="selectAccountsForSync()">\n                <ion-icon name="md-sync"></ion-icon>\n            </button>\n        </ion-buttons>-->\n    </ion-navbar>\n    <ion-toolbar color="primary" text-center>\n        <ion-buttons left>\n            <button (click)="slidePreviousMonth()" item-left color="white" ion-button icon-only>\n                <ion-icon name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n\n        <span class="CalendarTitleClassDecorator">{{ viewTitle }}</span>\n\n        <ion-buttons right>\n            <button (click)="slideNextMonth()" item-right color="white" ion-button icon-only>\n                <ion-icon name="arrow-forward"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n\n    <!--\n    <ion-navbar color="primary">\n        <ion-buttons end>\n            <button ion-button icon-only (click)="addEvent()">\n                <ion-icon name="add"></ion-icon>\n            </button>\n            <button ion-button (click)="buttonRequestPermissions($event)">\n                Perm\n            </button>\n            <button ion-button (click)="retrieveDataAndUpdateCalendarView()">\n                Events\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n     -->\n</ion-header>\n\n<ion-content>\n    <ng-template #monthviewEventDetailTemplate let-showEventDetail="showEventDetail" let-selectedDate="selectedDate" let-noEventsLabel="noEventsLabel">\n        <ion-item no-lines text-center color="primary">\n            <span class="CalendarTitleClassDecorator">{{selectedDayText}}</span>\n        </ion-item>\n        <!--<button ion-button block (click)="addEvent()">\n            Add event\n        </button>-->\n        <ion-list class="event-detail-container" has-bouncing="false" *ngIf="showEventDetail" overflow-scroll="false"> <!--no-lines-->\n            <ion-grid>\n                    <ion-row *ngFor="let event of selectedDate?.events" (click)="onEventSelected(event)">\n                      <button ion-item>\n                        <span *ngIf="!event.allday" class="monthview-eventdetail-timecolumn"><b>{{event.startTime|date: \'HH:mm\'}}</b></span>\n                        <span *ngIf="event.allday" class="monthview-eventdetail-timecolumn"><b>{{allDayLabel}}</b></span>\n                        <span class="event-detail">{{event.title}}</span>\n                      </button>\n                    </ion-row>\n                <ion-item *ngIf="selectedDate?.events.length==0">\n                    <div class="no-events-label">{{noEventsLabel}}</div>\n                </ion-item>\n            </ion-grid>\n        </ion-list>\n    </ng-template>\n\n    <ng-template #monthviewDisplayEventTemplate let-view="view" let-row="row" let-col="col">\n        <div>\n            {{view.dates[row*7+col].label}}\n        </div>\n    </ng-template>\n\n    <ng-template #monthviewInactiveDisplayEventTemplate let-view="view" let-row="row" let-col="col">\n        <div>\n            {{view.dates[row*7+col].label}}\n        </div>\n    </ng-template>\n\n\n    <calendar class="calendar"\n              [step]="calendar.step"\n              [locale]="calendar.locale"\n              [eventSource]="eventSource"\n              [calendarMode]="calendar.mode"\n              [currentDate]="calendar.currentDate"\n              [startingDayWeek] = "calendar.startingDayWeek"\n              [startingDayMonth]= "calendar.startingDayMonth"\n              [noEventsLabel] = "calendar.noEventsLabel"\n              [monthviewEventDetailTemplate]="monthviewEventDetailTemplate"\n              [monthviewDisplayEventTemplate]="monthviewDisplayEventTemplate"\n              [monthviewInactiveDisplayEventTemplate] = "monthviewInactiveDisplayEventTemplate"\n              [startHour] = "calendar.startHour"\n              [endHour] = "calendar.endHour"\n              (onEventSelected)="onEventSelected($event)"\n              (onTitleChanged)="onViewTitleChanged($event)"\n              (onTimeSelected)="onTimeSelected($event)"\n              (onCurrentDateChanged)="onCurrentDateChanged($event)">\n    </calendar>\n</ion-content>\n'/*ion-inline-end:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\calendar.module\calendar\calendar.html"*/,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_12__providers_gui_manager_gui_manager__["a" /* GuiManagerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_calendar__["a" /* Calendar */], __WEBPACK_IMPORTED_MODULE_4__providers_calendar_calendarProvider__["a" /* CalendarProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_storage_manager_storage_manager__["a" /* StorageManagerProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_8__providers_api_api__["a" /* ApiProvider */]])
    ], CalendarPage);
    return CalendarPage;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY
// See angular/tools/gulp-tasks/cldr/extract.js
function plural(n) {
    var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length;
    if (i === 1 && v === 0)
        return 1;
    return 5;
}
/* harmony default export */ __webpack_exports__["a"] = ([
    'de',
    [
        ['vm.', 'nm.'],
        ['AM', 'PM'],
    ],
    [
        ['vorm.', 'nachm.'],
        ,
    ],
    [
        ['S', 'M', 'D', 'M', 'D', 'F', 'S'], ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'],
        ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
        ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.']
    ],
    [
        ['S', 'M', 'D', 'M', 'D', 'F', 'S'], ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
        ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
        ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.']
    ],
    [
        ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        [
            'Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dez.'
        ],
        [
            'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September',
            'Oktober', 'November', 'Dezember'
        ]
    ],
    [
        ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
        [
            'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September',
            'Oktober', 'November', 'Dezember'
        ]
    ],
    [
        ['v. Chr.', 'n. Chr.'],
        ,
    ],
    1, [6, 0], ['dd.MM.yy', 'dd.MM.y', 'd. MMMM y', 'EEEE, d. MMMM y'],
    ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
    [
        '{1}, {0}',
        ,
        '{1} \'um\' {0}',
    ],
    [',', '.', ';', '%', '+', '-', 'E', '·', '‰', '∞', 'NaN', ':'],
    ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'], '€', 'Euro', plural
]);
//# sourceMappingURL=de.js.map

/***/ })

});
//# sourceMappingURL=5.js.map