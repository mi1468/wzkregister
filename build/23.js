webpackJsonp([23],{

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroSliderPageModule", function() { return IntroSliderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intro_slider__ = __webpack_require__(758);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntroSliderPageModule = /** @class */ (function () {
    function IntroSliderPageModule() {
    }
    IntroSliderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__intro_slider__["a" /* IntroSliderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__intro_slider__["a" /* IntroSliderPage */]),
            ],
        })
    ], IntroSliderPageModule);
    return IntroSliderPageModule;
}());

//# sourceMappingURL=intro-slider.module.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroSliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_manager_storage_manager__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_is_cordova_available__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_touch_manager_touch_manager__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_manager_auth_manager__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_gui_manager_gui_manager__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_link_manager_link_manager__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_electron_electron__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_firebase__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_fire_auth__ = __webpack_require__(454);
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














/**
 * Generated class for the IntroSliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntroSliderPage = /** @class */ (function () {
    function IntroSliderPage(alertCtrl, http, modalCtrl, params, navCtrl, storage, formBuilder, touchManager, authManager, guiManager, storageManager, modelCtrl, firebase, electron, platform, afAuth, linkManager) {
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.params = params;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.touchManager = touchManager;
        this.authManager = authManager;
        this.guiManager = guiManager;
        this.storageManager = storageManager;
        this.modelCtrl = modelCtrl;
        this.firebase = firebase;
        this.electron = electron;
        this.platform = platform;
        this.afAuth = afAuth;
        this.linkManager = linkManager;
        //Login Stuff Begin
        this.registrationcode = '';
        this.username = '';
        this.usernameTwo = '';
        this.authkey = '';
        this.passwordOne = '';
        this.passwordTwo = '';
        this.loginPassword = '';
        this.registerLogin = "register";
        this.birthday = '';
        this.fallnummer = '';
        this.errormessage = '';
        this.privacyChecked = false;
        this.agbChecked = false;
        this.personalDataChecked = false;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.food = [];
        this.card = [];
        this.loading = true;
        this.slidesOptions = { initialSlide: 0 };
        this.activeSlide = 0;
        this.amountOfSlides = -1;
        storage.contains("start-info", function (contains) {
            if (!contains) {
                storage.save("start-info", "", function () {
                    modalCtrl.create('StartTextPage').present();
                });
            }
        });
        this.registerLogin = "register";
        this.loginForm = formBuilder.group({
            loginEmail: [this.username, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            loginPass: [this.loginPassword, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])]
        });
        this.registerForm = formBuilder.group({
            /*code: [this.authkey, Validators.compose([Validators.maxLength(15), Validators.minLength(12), Validators.required])],*/
            birthday: [this.birthday, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('^[0-3][0-9][.][0-1][0-9][.][0-9]{4}$')])],
            registrationcode: [this.registrationcode, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            email: [this.username, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            pass: [
                this.passwordOne,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('^(?=.*[a-zA-Z])(?=.*\\d).+$'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]),
            ],
            pass2: [
                this.passwordTwo,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('^(?=.*[a-zA-Z])(?=.*\\d).+$'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]),
            ],
        });
    }
    IntroSliderPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    Object.defineProperty(IntroSliderPage.prototype, "loginFormValid", {
        get: function () {
            return this.loginForm.valid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntroSliderPage.prototype, "registerFormValid", {
        get: function () {
            return this.registerForm.valid && this.passwordTwo == this.passwordOne && this.username === this.usernameTwo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntroSliderPage.prototype, "loggedVal", {
        get: function () {
            return "";
        },
        enumerable: false,
        configurable: true
    });
    IntroSliderPage.prototype.helpCorrectDate = function (enteredDate) {
        this.birthday = enteredDate.replace(",", ".").replace("/", ".").replace("-", ".");
    };
    /*
    ionViewDidLoad() {
    }
    */
    IntroSliderPage.prototype.loginSegmentSelected = function () {
        var _this = this;
        this.touchManager.check(function (result) {
            if (result) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                _this.storageManager.save('registration', 'login', function (result) {
                    console.log("Registration status has been updated in storage.");
                });
            }
        });
    };
    IntroSliderPage.prototype.tryRegister = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.registerForm.controls["email"].value !==
                    this.registerForm.controls["email2"].value) {
                    this.registerForm.controls["email2"].setErrors({ incorrect: true });
                }
                // this.modalCtrl.create('TextPage', {html: true, closeable: true,}).present();
                if (this.agbChecked == true && this.privacyChecked == true) {
                    if (this.registrationcode.length >= 12) {
                        this.sendEmailVerification().then(function () {
                            _this.authManager.registerWithInvitationNumber(_this.username, _this.passwordOne, _this.passwordTwo, _this.registrationcode, function (success) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    if (success == true) {
                                        console.log("success");
                                    }
                                    return [2 /*return*/];
                                });
                            }); });
                        });
                        if (Object(__WEBPACK_IMPORTED_MODULE_6__services_is_cordova_available__["a" /* isCordovaAvailable */])())
                            this.handleTouchId(this.username, this.passwordOne);
                    }
                    else {
                        this.sendEmailVerification().then(function () {
                            _this.authManager.registerWithFallnummer(_this.username, _this.passwordOne, _this.passwordTwo, _this.registrationcode, _this.birthday, function (success) {
                                if (success == true) {
                                    console.log("success");
                                }
                            });
                        });
                        if (Object(__WEBPACK_IMPORTED_MODULE_6__services_is_cordova_available__["a" /* isCordovaAvailable */])())
                            this.handleTouchId(this.username, this.passwordOne);
                    }
                }
                else {
                    this.guiManager.showToast("Um fortzufahren, müssen Sie mit Datenschutzbestimmungen und Nutzungsbedingungen einverstanden sein.", 5000);
                }
                return [2 /*return*/];
            });
        });
    };
    IntroSliderPage.prototype.sendEmailVerification = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.platform.ready().then(function () {
                    _this.afAuth.auth
                        .createUserWithEmailAndPassword(_this.username, _this.passwordOne)
                        .then(function (credential) {
                        var user = credential.user;
                        user.sendEmailVerification();
                    })
                        .then(function () {
                        _this.modalCtrl
                            .create("EmailConfirmation", {
                            html: true,
                            closeable: false,
                            animated: true,
                            showBackdrop: true,
                            selectedEmail: _this.username,
                            backdropDismiss: false,
                        })
                            .present();
                        _this.afAuth.authState.subscribe(function (user) {
                            console.log(user.emailVerified);
                            if (user && user.emailVerified) {
                                console.log(user.emailVerified);
                                // The user has clicked the verification link and their email has been verified.
                                // Update the registration status in the storage.
                                _this.storageManager.save("registration", "login", function (result) {
                                    console.log("Registration status has been updated in storage.");
                                });
                                if (Object(__WEBPACK_IMPORTED_MODULE_6__services_is_cordova_available__["a" /* isCordovaAvailable */])())
                                    _this.handleTouchId(_this.username, _this.passwordOne);
                            }
                            else {
                                console.error("No user found.");
                            }
                        });
                    });
                });
                if (this.electron.isElectron || !Object(__WEBPACK_IMPORTED_MODULE_6__services_is_cordova_available__["a" /* isCordovaAvailable */])())
                    return [2 /*return*/];
                return [2 /*return*/];
            });
        });
    };
    IntroSliderPage.prototype.handleTouchId = function (name, password) {
        if (Object(__WEBPACK_IMPORTED_MODULE_6__services_is_cordova_available__["a" /* isCordovaAvailable */])())
            this.touchManager.handle(name, password);
    };
    IntroSliderPage.prototype.tryLogin = function () {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(this.username, this.loginPassword)
            .then(function (result) {
            console.log(result.user.emailVerified);
            if (result.user.emailVerified) {
                _this.authManager.login(_this.username, _this.loginPassword, function (success) {
                    console.log("Trying to log in, success: ", success);
                    if (success == true) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                        if (Object(__WEBPACK_IMPORTED_MODULE_6__services_is_cordova_available__["a" /* isCordovaAvailable */])()) {
                            _this.handleTouchId(_this.username, _this.loginPassword);
                        }
                    }
                });
            }
            else {
                _this.errormessage = 'Bitte clicken Sie auf den Verifizierungslink';
                setTimeout(function () {
                    _this.errormessage = '';
                }, 5000);
            }
        })
            .catch(function (error) {
            window.alert(error.message);
        });
    };
    Object.defineProperty(IntroSliderPage.prototype, "checkKeyField", {
        get: function () {
            return this.authkey.length != 0;
        },
        enumerable: false,
        configurable: true
    });
    IntroSliderPage.prototype.onIonDrag = function (event) {
        this.swiper = event;
        this.swiper.lockSwipes();
    };
    IntroSliderPage.prototype.isEnd = function () {
        return this.slides.isEnd();
    };
    IntroSliderPage.prototype.isBeginning = function () {
        return this.slides.isBeginning();
    };
    IntroSliderPage.prototype.slideChanged = function () {
        if (this.slides._isEnd && this.registerLogin == 'login') {
            this.loginSegmentSelected();
        }
    };
    IntroSliderPage.prototype.slideNext = function () {
        if (this.swiper) {
            this.swiper.unlockSwipes();
        }
        this.amountOfSlides = this.slides.length();
        this.slides.slideNext();
        this.activeSlide++;
    };
    IntroSliderPage.prototype.slidePrev = function () {
        if (this.swiper) {
            this.swiper.unlockSwipes();
        }
        this.amountOfSlides = this.slides.length();
        this.slides.slidePrev();
        this.activeSlide--;
    };
    IntroSliderPage.prototype.jumpToEnd = function () {
        this.slides.slideTo(this.slides.length());
    };
    IntroSliderPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Opening registration/login view");
        this.storageManager.fetch('registration', function (result) {
            console.log("Fetched value from storage: ", result);
            if (result == 'login') {
                _this.registerLogin = 'login';
            }
        });
    };
    IntroSliderPage.prototype.ionViewWillLeave = function () {
    };
    IntroSliderPage.prototype.closeIntro = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        this.storage.save("clinet_intro", true, function () {
        });
    };
    IntroSliderPage.prototype.clearIntro = function () {
        this.username = '';
        this.authkey = '';
        this.passwordOne = '';
        this.passwordTwo = '';
        this.loginPassword = '';
    };
    IntroSliderPage.prototype.handleKeyPress = function (event, input) {
        if (event.keyCode == 13) {
            if (input == 'login') {
                this.tryLogin();
            }
            else if (input == 'register') {
                this.tryRegister();
            }
        }
    };
    IntroSliderPage.prototype.showAgb = function (agbs) {
        if (agbs) {
            this.modalCtrl.create('TextPage', { html: true, closeable: true, target: this.linkManager.getNutungsbedingungenAsHalJSON() }).present();
            return;
        }
        this.modalCtrl.create('TextPage', { html: true, closeable: true, target: this.linkManager.getDatenschutzAsJSON() }).present();
    };
    IntroSliderPage.prototype.openInstructionsForRegistration = function () {
        this.modelCtrl.create('TextPage', { html: true, closeable: true, target: this.linkManager.getRegistrierungsanweisungenAsJSON() }).present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
    ], IntroSliderPage.prototype, "slides", void 0);
    IntroSliderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro-slider',template:/*ion-inline-start:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="image-right" text-right style="padding-right: 5px;text-align:right;">\n      <img class=\'title-image\' src=\'assets/home/Logo_Waldburg-Zeil-Kliniken.svg\' />\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf="!userStatus" class="home-hello"\n       style="background:url(assets/home/home.jpg);background-size: cover;background-attachment:scroll;background-repeat:no-repeat;">\n    <!-- 		<img src="assets/img/doctor.jpg"/> -->\n    <!-- <spacer class="" style="height:300px;"> </spacer> -->\n    <div class="hello-title " text-wrap>\n      <div class="">\n        <h1>Waldburg-Zeil Kliniken</h1>\n        <h3 color="secondary">Ein Stück Leben.</h3>\n      </div>\n    </div>\n\n  </div>\n  <div class="old-browser-info"><ion-card>\n<ion-card-header><span color="primary">Achtung:</span> Browser wird nicht vollständig unterstützt</ion-card-header>\n<ion-card-content>Ihr Browser "Internet Explorer" ist sehr alt und wird von dieser Anwendung nicht vollständig unterstützt, sie können jedoch einige Basisfunktionen verwenden.\n<br> Für ein besseres Erlebnis nutzen Sie bitte einen modernen Browser wie Google Chrome, Firefox, Edge, Safari oder laden die die Desktop Version dieser Anwendung herunter:<br><a ion-button href="#">weitere Informationen und Download</a></ion-card-content>\n  </ion-card></div>\n  <div *ngIf="userStatus == \'medical\'" class="home-hello"\n       style="background: center top;background-size: cover;background-attachment:scroll;background-repeat:no-repeat;" [style.backgroundImage]="\'url(\' + backgroundLoggedInImage + \')\'">\n    <!-- 		<img src="assets/img/doctor.jpg"/> -->\n    <!-- <spacer class="" style="height:300px;"> </spacer> -->\n    <div class="hello-title " text-wrap>\n      <div class="">\n        <h1>{{textClinicName}}</h1>\n        <h3 color="secondary">{{textClinicSubtitle}}</h3>\n      </div>\n    </div>\n  </div>\n  <div *ngIf="userStatus == \'user\'" class="home-hello"\n       style="background: center top;background-size: cover;background-attachment:scroll;background-repeat:no-repeat;" [style.backgroundImage]="\'url(\' + backgroundLoggedInImage + \')\'">\n    <!-- 		<img src="assets/img/doctor.jpg"/> -->\n    <!-- <spacer class="" style="height:300px;"> </spacer> -->\n    <div class="hello-title " text-wrap>\n      <div class="">\n        <h1>{{textClinicName}}</h1>\n        <h3 color="secondary">{{textClinicSubtitle}}</h3>\n      </div>\n    </div>\n  </div>\n  <p class="text-description" style="padding: 10px 10px 0px 10px;color:#000" *ngIf="userStatus == \'user\'" padding>\n      {{textClinicDescription}}\n  </p>\n  <p class="text-description" style="padding: 10px 10px 0px 10px;color:#000" *ngIf="!userStatus" padding>\n      Hier finden Sie alle Informationen, die Sie für Ihren Aufenthalt benötigen.\n  </p>\n\n  <ion-row  class="grid" style="" *ngFor="let tilePair of tiles">\n    <ion-col *ngFor="let tile of tilePair">\n      <ion-card class="tile" padding (click)="navigateTo(tile)" *ngIf="!checkDisabled(tile)">\n\n        <ion-item text-center>\n\n          <img class="image-icon large" src="{{tile.icon}}">\n          <h2>{{tile.title}}</h2>\n        </ion-item>\n        <!-- </ion-card-content> -->\n      </ion-card>\n      <ion-card class="tile" padding *ngIf="checkDisabled(tile)" disabled>\n        <ion-item text-center>\n\n          <ion-spinner></ion-spinner>\n          <h2>{{tile.title}} - Laden</h2>\n        </ion-item>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <!--     <ion-list right text-right  >  <ion-note >							<ion-icon name="time"></ion-icon> Zuletzt genutzt      </ion-note></ion-list> -->\n\n  <!-- <ion-row>\n    <ion-card class="quick-action" [navPush]="newsListPage">\n\n      <ion-card-content>\n        <ion-icon  name="add-circle"></ion-icon>\n        <span>News</span>\n      </ion-card-content>\n    </ion-card>\n  </ion-row> -->\n\n  <!-- <ion-row>\n    <ion-card class="quick-action" [navPush]="drupalListPage">\n      <ion-card-content>\n        <ion-icon   name="information-circle"></ion-icon>\n        <span>Allgemeine Informationen</span>\n      </ion-card-content>\n    </ion-card>\n  </ion-row> -->\n\n  <!-- <br/>\n	<ion-card>\n	  <ion-list detail-push no-lines *ngFor="let subLinkPair of subLinks">\n		<button ion-item *ngFor="let subLink of subLinkPair" (click)="navigateTo(subLink)">\n\n		  {{ subLink.title }}\n		</button>\n\n	  </ion-list>\n	</ion-card> -->\n\n  <!--\n      <ion-row>\n          <ion-card class="quick-action" (click)="getDirections()">\n              <ion-card-content>\n                  <ion-icon name="compass"></ion-icon>\n                  <span>Wegeplan</span>\n              </ion-card-content>\n          </ion-card>\n      </ion-row>\n\n      <ion-row>\n          <ion-card class="quick-action" (click)="openFacebookPage()">\n              <ion-card-content>\n                  <ion-icon name="question"></ion-icon>\n                  <span>Häufige Fragen</span>\n              </ion-card-content>\n          </ion-card>\n      </ion-row>\n  -->\n\n</ion-content>\n<ion-footer (click)="goToLoginPage()" *ngIf="footerNeed" style="z-index: 500000; margin-top: 120px" no-border>\n  <ion-toolbar color="primary">\n    <ion-title><span style="color: #5b5b5b">Hier zum Login</span></ion-title>\n    <ion-buttons end>\n      <button style="color: white" ion-button icon-only>\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage_manager_storage_manager__["a" /* StorageManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__providers_touch_manager_touch_manager__["a" /* TouchManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_auth_manager_auth_manager__["a" /* AuthManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_gui_manager_gui_manager__["a" /* GuiManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage_manager_storage_manager__["a" /* StorageManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_11__providers_electron_electron__["a" /* ElectronProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_13__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_10__providers_link_manager_link_manager__["a" /* LinkManagerProvider */]])
    ], IntroSliderPage);
    return IntroSliderPage;
}());

//# sourceMappingURL=intro-slider.js.map

/***/ })

});
//# sourceMappingURL=23.js.map