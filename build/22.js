webpackJsonp([22],{

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(760);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_manager_auth_manager__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_touch_manager_touch_manager__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_is_cordova_available__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_gui_manager_gui_manager__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_storage_manager_storage_manager__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_link_manager_link_manager__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_fire_auth__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_electron_electron__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Nutzungsbedingungen_nutzungsbedingungen_modal__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Datenschutzerklarung_datenschutzerklaerung_modal__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__help_help_modal__ = __webpack_require__(463);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, modalCtrl, navParams, authManager, formBuilder, touchManager, guiManager, modelCtrl, storageManager, linkManager, electron, platform, afAuth) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.authManager = authManager;
        this.touchManager = touchManager;
        this.guiManager = guiManager;
        this.modelCtrl = modelCtrl;
        this.storageManager = storageManager;
        this.linkManager = linkManager;
        this.electron = electron;
        this.platform = platform;
        this.afAuth = afAuth;
        this.registrationcode = "";
        this.username = "";
        this.usernameTwo = "";
        this.authkey = "";
        this.passwordOne = "";
        this.passwordTwo = "";
        this.registerLogin = "login";
        this.birthday = "";
        this.fallnummer = "";
        this.showHelpText = true;
        this.privacyChecked = false;
        this.agbChecked = false;
        this.personalDataChecked = false;
        this.loginPassword = "";
        this.passwordType = "password";
        this.passwordIcon = "eye-off";
        this.loginForm = formBuilder.group({
            loginEmail: [
                this.username,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                ]),
            ],
            loginPass: [
                this.loginPassword,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]),
            ],
        });
        this.registerForm = formBuilder.group({
            /*code: [this.authkey, Validators.compose([Validators.maxLength(15), Validators.minLength(12), Validators.required])],*/
            birthday: [
                this.birthday,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern("^[0-3][0-9][.][0-1][0-9][.][0-9]{4}$"),
                ]),
            ],
            registrationcode: [
                this.registrationcode,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]),
            ],
            email: [
                this.username,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                ]),
            ],
            pass: [
                this.passwordOne,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]),
            ],
            pass2: [
                this.passwordTwo,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]),
            ],
        });
    }
    /**
     * Hides or un-hides the password in the UI.
     */
    LoginPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === "text" ? "password" : "text";
        this.passwordIcon = this.passwordIcon === "eye-off" ? "eye" : "eye-off";
    };
    Object.defineProperty(LoginPage.prototype, "loginFormValid", {
        /**
         * Returns if the login form is valid
         */
        get: function () {
            return this.loginForm.valid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "registerFormValid", {
        /**
         * Returns if the registration form is valid
         */
        get: function () {
            return (this.registerForm.valid &&
                this.passwordTwo == this.passwordOne &&
                this.username === this.usernameTwo);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Assists user to write properly the date by removing regularly used characters to dots.
     * @param enteredDate
     */
    LoginPage.prototype.helpCorrectDate = function (enteredDate) {
        this.birthday = enteredDate
            .replace(",", ".")
            .replace("/", ".")
            .replace("-", ".");
    };
    /**
     * Transitions view and opens the home page.
     */
    LoginPage.prototype.openHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    // fffffffffffffffffff
    LoginPage.prototype.clearCookies = function () {
        // Clear all cookies by setting their expiry date to the past
        var cookies = document.cookie.split("; ");
        for (var i = 0; i < cookies.length; i++) {
            var cookieParts = cookies[i].split("=");
            var cookieName = cookieParts.shift();
            document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
    };
    LoginPage.prototype.clearIndexedDB = function () {
        // Clear IndexedDB
        if (window.indexedDB) {
            var request = window.indexedDB.deleteDatabase("firebaseLocalStorageDb"); // Replace 'your_database_name' with the name of your IndexedDB database
            request.onsuccess = function () {
                console.log("IndexedDB cleared successfully");
            };
            request.onerror = function (event) {
                console.error("IndexedDB error:", event.target);
            };
        }
        else {
            console.warn("IndexedDB is not supported in this browser");
        }
    };
    LoginPage.prototype.clearIndexedDB2 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var request_1;
            return __generator(this, function (_a) {
                console.log("clearing indexed DB2");
                // Clear IndexedDB
                if (window.indexedDB) {
                    request_1 = window.indexedDB.deleteDatabase("__mydb");
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            request_1.onsuccess = function () {
                                console.log("IndexedDB cleared successfully");
                                resolve();
                            };
                            request_1.onerror = function (event) {
                                console.error("IndexedDB error:", event.target.error);
                                reject();
                            };
                        })];
                }
                else {
                    console.warn("IndexedDB is not supported in this browser");
                }
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.clearIndexedDB3 = function () {
        this.storageManager.myclear();
    };
    /**
     * Opens the modal for help/instructions on the login process.
     */
    LoginPage.prototype.openInstructionsForRegistration = function () {
        // this.modelCtrl
        //   .create("TextPage", {
        //     html: true,
        //     closeable: true,
        //     target: this.linkManager.getRegistrierungsanweisungenAsJSON(),
        //   })
        //   .present();
        // fffffffffffffffffffffffffff
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_14__help_help_modal__["a" /* helpModalPage */]);
        modal.present();
    };
    /**
     * Registers the user
     */
    LoginPage.prototype.tryRegister = function () {
        var _this = this;
        // this.modalCtrl.create('TextPage', {html: true, closeable: true,}).present();
        if (this.agbChecked == true && this.privacyChecked == true) {
            if (this.registrationcode.length >= 12) {
                this.authManager.registerWithInvitationNumber(this.username, this.passwordOne, this.passwordTwo, this.registrationcode, function (success) {
                    if (success == true) {
                        _this.guiManager.showToast("Its ok !!!!!!", 5000);
                        // this.sendEmailVerification();
                    }
                    if (Object(__WEBPACK_IMPORTED_MODULE_6__services_is_cordova_available__["a" /* isCordovaAvailable */])())
                        _this.handleTouchId(_this.username, _this.passwordOne);
                });
            }
            else {
                this.authManager.registerWithFallnummer(this.username, this.passwordOne, this.passwordTwo, this.registrationcode, this.birthday, function (success) {
                    if (success == true) {
                        // this.sendEmailVerification();
                        _this.guiManager.showToast("Its ok !!!!!!", 5000);
                    }
                    if (Object(__WEBPACK_IMPORTED_MODULE_6__services_is_cordova_available__["a" /* isCordovaAvailable */])())
                        _this.handleTouchId(_this.username, _this.passwordOne);
                });
            }
        }
        else {
            this.guiManager.showToast("Um fortzufahren, müssen Sie mit Datenschutzbestimmungen und Nutzungsbedingungen einverstanden sein.", 5000);
        }
    };
    LoginPage.prototype.sendEmailVerification = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.platform.ready().then(function () {
                    var me = _this;
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
                        me.afAuth.authState.subscribe(function (user) {
                            console.log(user.emailVerified);
                            if (user && user.emailVerified) {
                                console.log(user.emailVerified);
                                // The user has clicked the verification link and their email has been verified.
                                // Update the registration status in the storage.
                                _this.storageManager.save("registration", "login", function (result) {
                                    console.log("Registration status has been updated in storage.");
                                });
                                // Redirect the user to the home page.
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                                // Handle touch ID authentication (if available).
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
    LoginPage.prototype.handleTouchId = function (name, password) {
        if (Object(__WEBPACK_IMPORTED_MODULE_6__services_is_cordova_available__["a" /* isCordovaAvailable */])())
            this.touchManager.handle(name, password);
    };
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Opening registration/login view");
        this.storageManager.fetch("registration", function (result) {
            console.log("Fetched value from storage: ", result);
            if (result == "login") {
                _this.registerLogin = "login";
            }
        });
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        this.guiManager.isLoginPageActive = false;
    };
    /**
     * Logins the user
     */
    LoginPage.prototype.tryLogin = function () {
        var _this = this;
        this.authManager.login(this.username, this.loginPassword, function (success) {
            console.log("Trying to log in, success: ", success);
            if (success == true) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                if (Object(__WEBPACK_IMPORTED_MODULE_6__services_is_cordova_available__["a" /* isCordovaAvailable */])()) {
                    _this.handleTouchId(_this.username, _this.loginPassword);
                }
            }
        });
    };
    /**
     * Opens the reset password page
     */
    LoginPage.prototype.resetPassword = function () {
        /*
            const item = this.modalCtrl.create('PasswordResetPage', {
                ac: 'request'
            });
    
            item.present();*/
        this.navCtrl.push("mailto:support@clinetplatformsgmbh.freshdesk.com", {
            ac: "request",
        });
        // this.navCtrl.push("PasswordResetPage", {
        //   ac: "request",
        // });
    };
    Object.defineProperty(LoginPage.prototype, "loggedVal", {
        get: function () {
            return "";
        },
        enumerable: false,
        configurable: true
    });
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.guiManager.isLoginPageActive = true;
        if (!Object(__WEBPACK_IMPORTED_MODULE_6__services_is_cordova_available__["a" /* isCordovaAvailable */])())
            return;
        this.touchManager.check(function (result) {
            if (result) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                _this.storageManager.save("registration", "login", function (result) {
                    console.log("Registration status has been updated in storage.");
                });
            }
        });
    };
    LoginPage.prototype.handleKeyPress = function (event, input) {
        if (event.keyCode == 13) {
            if (input == "login") {
                this.tryLogin();
            }
            else if (input == "register") {
                this.tryRegister();
            }
        }
    };
    LoginPage.prototype.showNutzungsbedingungenModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__Nutzungsbedingungen_nutzungsbedingungen_modal__["a" /* NutzungsbedingungenModalPage */]);
        modal.present();
    };
    LoginPage.prototype.showDatenschutzerklaerungModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__Datenschutzerklarung_datenschutzerklaerung_modal__["a" /* DatenschutzerklaerungModalPage */]);
        modal.present();
    };
    LoginPage.prototype.showAgb = function (agbs) {
        // let modal = this.modalCtrl.create("EventModalPage", {
        //   // selectedDay: this.selectedDay,
        // });
        // modal.present();
        // modal.onDidDismiss((data) => {
        //   if (data) {
        //     this.addEventsToCalendarView([data]);
        //     this.addEventsToCalendars([data]);
        //   }
        // });
        if (agbs) {
            // let modal = this.modalCtrl.create(SimpleTextModalPage);
            // modal.present();
            // return;
            this.modelCtrl
                .create("TextPage", {
                html: true,
                closeable: true,
                // target: this.linkManager.getNutungsbedingungenAsHalJSON()
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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Login</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="openHomePage()">\n        <img class="homeLogoNavBar" src="assets/home/icon.svg" />\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div\n    class="home-hello"\n    style="\n      background: url(assets/login/login.jpg) top center;\n      background-size: cover;\n      background-attachment: scroll;\n      background-repeat: no-repeat;\n    "\n  >\n    <div class="hello-title" text-wrap>\n      <div class="">\n        <h1>{{loggedVal}}</h1>\n        <h3 color="secondary">Anmelden</h3>\n        Bitte registrieren oder melden Sie sich an, um auf Ihre persönlichen\n        Dokumente zugreifen zu können.\n      </div>\n    </div>\n  </div>\n  <ion-card>\n    <ion-segment class="bottomSegment" [(ngModel)]="registerLogin">\n      <ion-segment-button class="bottomSegment" value="login">\n        Login\n      </ion-segment-button>\n      <ion-segment-button class="bottomSegment" value="register">\n        Registrieren\n      </ion-segment-button>\n    </ion-segment>\n\n    <div [ngSwitch]="registerLogin">\n      <ion-list style="padding-bottom: 50px">\n        <!--<ion-item *ngSwitchCase="\'register\'" [formGroup]="registerForm">\n          <h1>Jetzt starten</h1>\n          <ion-label floating>Zugangscode eingeben</ion-label>\n          <ion-input formControlName="code" type="text" name="code" [(ngModel)]="authkey" (keypress)="handleKeyPress($event,\'register\')"></ion-input>\n          <ion-note>Diesen finden Sie auf Ihrem Schreiben vom Krankenhaus</ion-note>\n        </ion-item>-->\n\n        <ion-item *ngSwitchCase="\'register\'" [formGroup]="registerForm">\n          <ion-label floating>Fallnummer</ion-label>\n          <ion-input\n            formControlName="registrationcode"\n            name="registrationcode"\n            [(ngModel)]="registrationcode"\n            (keypress)="handleKeyPress($event,\'register\')"\n          ></ion-input>\n        </ion-item>\n\n        <ion-item *ngSwitchCase="\'register\'" [formGroup]="registerForm">\n          <ion-label floating>Geburtsdatum (TT.MM.JJJJ)</ion-label>\n          <ion-input\n            formControlName="birthday"\n            name="birthday"\n            [(ngModel)]="birthday"\n            type="text"\n            value=""\n            (ionChange)="helpCorrectDate(birthday)"\n          ></ion-input>\n        </ion-item>\n\n        <ion-item [formGroup]="registerForm" *ngSwitchCase="\'register\'">\n          <ion-label floating>E-Mail Adresse</ion-label>\n          <ion-input\n            formControlName="email"\n            type="email"\n            name="username"\n            [(ngModel)]="username"\n            (keypress)="handleKeyPress($event,\'register\')"\n          ></ion-input>\n        </ion-item>\n\n        <ion-item [formGroup]="registerForm" *ngSwitchCase="\'register\'">\n          <ion-label floating>E-Mail Adresse wiedereholen</ion-label>\n          <ion-input\n            formControlName="email"\n            type="email"\n            name="username"\n            [(ngModel)]="usernameTwo"\n            (keypress)="handleKeyPress($event,\'register\')"\n          ></ion-input>\n        </ion-item>\n\n        <ion-item [formGroup]="loginForm" *ngSwitchCase="\'login\'">\n          <ion-label floating>E-Mail Adresse</ion-label>\n          <ion-input\n            formControlName="loginEmail"\n            type="email"\n            name="username"\n            [(ngModel)]="username"\n            (keypress)="handleKeyPress($event,\'login\')"\n          ></ion-input>\n        </ion-item>\n\n        <ion-item [formGroup]="loginForm" *ngSwitchCase="\'login\'">\n          <ion-label floating>Passwort</ion-label>\n          <ion-input\n            formControlName="loginPass"\n            [type]="passwordType"\n            name="loginPassword"\n            [(ngModel)]="loginPassword"\n            (keypress)="handleKeyPress($event,\'login\')"\n            clearOnEdit="false"\n          ></ion-input>\n          <ion-icon\n            item-end\n            [name]="passwordIcon"\n            class="passwordIcon"\n            (click)="hideShowPassword()"\n          ></ion-icon>\n        </ion-item>\n        <ion-item [formGroup]="registerForm" *ngSwitchCase="\'register\'">\n          <ion-label floating>Passwort (mind. 5 Zeichen)</ion-label>\n          <ion-input\n            formControlName="pass"\n            [type]="passwordType"\n            name="passwordOne"\n            [(ngModel)]="passwordOne"\n            (keypress)="handleKeyPress($event,\'register\')"\n            clearOnEdit="false"\n          ></ion-input>\n          <ion-icon\n            item-end\n            [name]="passwordIcon"\n            class="passwordIcon"\n            (click)="hideShowPassword()"\n          ></ion-icon>\n        </ion-item>\n\n        <ion-item [formGroup]="registerForm" *ngSwitchCase="\'register\'">\n          <ion-label floating>Passwort wiederholen</ion-label>\n          <ion-input\n            formControlName="pass2"\n            [type]="passwordType"\n            name="passwordTwo"\n            [(ngModel)]="passwordTwo"\n            (keypress)="handleKeyPress($event,\'register\')"\n            clearOnEdit="false"\n          ></ion-input>\n          <ion-icon\n            item-end\n            [name]="passwordIcon"\n            class="passwordIcon"\n            (click)="hideShowPassword()"\n          ></ion-icon>\n        </ion-item>\n\n        <ion-item\n          class="customCheckboxesRegistration"\n          [formGroup]="registerForm"\n          *ngSwitchCase="\'register\'"\n          style="padding-top: 10px"\n        >\n          <ion-label\n            >Ich habe die Datenschutzerklärung gelesen und stimme diesen zu.\n          </ion-label>\n          <ion-checkbox\n            [(ngModel)]="privacyChecked"\n            [ngModelOptions]="{standalone: true}"\n            (click)="showDatenschutzerklaerungModal()"\n          ></ion-checkbox>\n        </ion-item>\n\n        <ion-item\n          class="customCheckboxesRegistration"\n          [formGroup]="registerForm"\n          *ngSwitchCase="\'register\'"\n        >\n          <ion-label>Ich stimme den Nutzungsbedingungen zu. </ion-label>\n          <ion-checkbox\n            [(ngModel)]="agbChecked"\n            [ngModelOptions]="{standalone: true}"\n            (click)="showNutzungsbedingungenModal()"\n          ></ion-checkbox>\n        </ion-item>\n\n        <ion-item\n          class="customCheckboxesRegistration"\n          [formGroup]="registerForm"\n          *ngSwitchCase="\'register\'"\n        >\n          <ion-label\n            >Ich Stimme der Speicherung meiner personenbezogenen Daten\n            zu.</ion-label\n          >\n          <ion-checkbox\n            [(ngModel)]="personalDataChecked"\n            [ngModelOptions]="{standalone: true}"\n          ></ion-checkbox>\n        </ion-item>\n\n        <ion-item no-lines>\n          <!--<p>-->\n          <button\n            ion-button\n            block\n            default\n            color="primary"\n            *ngSwitchCase="\'register\'"\n            [disabled]="!registerFormValid"\n            (click)="tryRegister()"\n          >\n            Registrieren\n          </button>\n          <a\n            ion-button\n            clear\n            color="text-color"\n            block\n            style="margin-top: 10px"\n            href="mailto:support@clinetplatformsgmbh.freshdesk.com"\n            *ngSwitchCase="\'login\'"\n            >Password vergessen?\n          </a>\n\n          <button\n            ion-button\n            block\n            default\n            color="primary"\n            *ngSwitchCase="\'login\'"\n            [disabled]="!loginFormValid"\n            (click)="tryLogin()"\n          >\n            Login\n          </button>\n          <!--</p>-->\n        </ion-item>\n        <ion-segment\n          class="topSegment"\n          style="border-bottom-color: transparent"\n        >\n          <ion-segment-button\n            class="topSegment"\n            style="border-bottom-color: transparent"\n            (click)="openInstructionsForRegistration()"\n          >\n            <div>\n              Hilfe\n              <div class="info-ball">i</div>\n            </div>\n          </ion-segment-button>\n        </ion-segment>\n        <ion-segment\n          class="topSegment"\n          style="border-bottom-color: transparent"\n        >\n          <ion-segment-button\n            class="topSegment"\n            style="border-bottom-color: transparent"\n            (click)="clearIndexedDB3()"\n          >\n            <div>\n              Reset App\n              <div class="info-ball">i</div>\n            </div>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-list>\n      <div class="login-box" *ngSwitchCase="\'login\'">\n        <div class="internal-content" *ngIf="showHelpText">\n          <h1>Sind Sie schon registriert?</h1>\n          <br />\n          <p>Bevor Sie die Anwendung in</p>\n          <p>vollem Umfang nützen können,</p>\n          <p>ist eine Registrierung notwendig.</p>\n          <div class="button-wrapper">\n            <button\n              ion-button\n              default\n              style="background-color: #5b5b5b; color: white"\n              (click)="registerLogin =\'register\'"\n            >\n              Jetzt registrieren\n            </button>\n            <button\n              ion-button\n              default\n              style="\n                background-color: transparent;\n                color: #010101;\n                border: 1px solid #5b5b5b;\n              "\n              (click)="showHelpText=false"\n            >\n              Später registrieren\n            </button>\n          </div>\n\n          <!-- <button ion-button outline color="secondary" [hidden]="login" (click)="login = true">Login</button> -->\n          <!-- <button ion-button outline color="secondary" *ngIf="login" (click)="login = false">Registrieren</button> -->\n        </div>\n      </div>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_manager_auth_manager__["a" /* AuthManagerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_manager_auth_manager__["a" /* AuthManagerProvider */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__providers_touch_manager_touch_manager__["a" /* TouchManagerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_touch_manager_touch_manager__["a" /* TouchManagerProvider */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__providers_gui_manager_gui_manager__["a" /* GuiManagerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_gui_manager_gui_manager__["a" /* GuiManagerProvider */]) === "function" ? _g : Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" ? _h : Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_8__providers_storage_manager_storage_manager__["a" /* StorageManagerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_storage_manager_storage_manager__["a" /* StorageManagerProvider */]) === "function" ? _j : Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_9__providers_link_manager_link_manager__["a" /* LinkManagerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__providers_link_manager_link_manager__["a" /* LinkManagerProvider */]) === "function" ? _k : Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_11__providers_electron_electron__["a" /* ElectronProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__providers_electron_electron__["a" /* ElectronProvider */]) === "function" ? _l : Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]) === "function" ? _m : Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_10__angular_fire_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_fire_auth__["a" /* AngularFireAuth */]) === "function" ? _o : Object])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=22.js.map