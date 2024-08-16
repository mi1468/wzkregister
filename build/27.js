webpackJsonp([27],{

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadPageModule", function() { return FileUploadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_upload__ = __webpack_require__(755);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FileUploadPageModule = /** @class */ (function () {
    function FileUploadPageModule() {
    }
    FileUploadPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_upload__["a" /* FileUploadPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file_upload__["a" /* FileUploadPage */]),
            ],
        })
    ], FileUploadPageModule);
    return FileUploadPageModule;
}());

//# sourceMappingURL=file-upload.module.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_chooser__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_picker__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_manager_auth_manager__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_otp_otp__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__ = __webpack_require__(460);
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
 * Generated class for the FileUploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FileUploadPage = /** @class */ (function () {
    function FileUploadPage(navCtrl, navParams, fileChooserAndroid, platform, filePickerIOS, api, file, authManager, otp, filePath, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fileChooserAndroid = fileChooserAndroid;
        this.platform = platform;
        this.filePickerIOS = filePickerIOS;
        this.api = api;
        this.file = file;
        this.authManager = authManager;
        this.otp = otp;
        this.filePath = filePath;
        this.alertCtrl = alertCtrl;
        this.uploading = false;
        this.uploadingMessage = "Uploading file...";
    }
    FileUploadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FileUploadPage');
    };
    FileUploadPage.prototype.showMessage = function (title, message, callback) {
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
    /**
     * Prompt user to select file using the mobile OS file chooser/picker.
     */
    FileUploadPage.prototype.selectFile = function () {
        var _this = this;
        if (this.platform.is('android')) {
            this.fileChooserAndroid.open().then(function (uri) {
                console.log("File picked for the upload: ", uri);
                _this.filePath.resolveNativePath(uri).then(function (filepath) {
                    console.log("File picked for the upload with resolved path: ", filepath);
                    _this.uploadFile(filepath, function (success, data) { _this.afterUploadFile(success, data); });
                }).catch(function (exc) {
                    console.log("Exception when resolving URI to File path: ", exc);
                });
            }).catch(function (exc) {
                console.log(exc);
            });
        }
        if (this.platform.is('ios')) {
            this.filePickerIOS.pickFile().then(function (uri) {
                console.log("File picked for the upload: ", uri);
                _this.uploadFile(uri, function (success, data) { _this.afterUploadFile(success, data); });
            }).catch(function (exc) {
                console.log(exc);
            });
        }
    };
    /**
     * Processes the response of the upload request
     * @param success
     * @param data
     */
    FileUploadPage.prototype.afterUploadFile = function (success, data) {
        this.uploading = false;
        if (success) {
            var bodyResponse = JSON.parse(data["_body"]);
            var successfullyTransferred = bodyResponse["success"];
            var dataResponse = bodyResponse["data"];
            if (successfullyTransferred) {
                console.log("The transfer of the data to the server was successful and encrypted and everything!");
                console.log("The response was: ", dataResponse);
                this.showMessage("Hochgeladene Datei erfolgreich", "Der Upload der Datei war erfolgreich."); // "Uploaded file successfully", "The upload of the file was successful."
            }
            else {
                this.showMessage("Fehler beim Hochladen der Datei", "Es gab ein Problem beim Hochladen der Datei: " + dataResponse); // "Upload file error", "There was an issue while uploading the file: "
                console.log("There was a problem with the server.");
                console.log(dataResponse);
            }
        }
        else {
            console.log("The server was most likely un-responsive. Please see details: ", success, data);
            this.showMessage("Fehler beim Hochladen der Datei", "Der Server war höchstwahrscheinlich nicht erreichbar. Siehe Details: " + data); // "Upload file error", "The server was most likely un-responsive. Please see details: "
        }
    };
    /**
     * Uploads a file to the server on a hardcoded folder
     * @param unencryptedFilepathURI The file path of the file to upload
     * @param callback The function that will be called after the request is completed.
     */
    FileUploadPage.prototype.uploadFile = function (unencryptedFilepathURI, callback) {
        var _this = this;
        var apiPath = "/upload";
        var keyPath = this.file.dataDirectory.substr(7) + "/key.otp";
        var fileHash = "asf"; //TODO
        var userFolderToUploadTo = "a.pantavos@gmail.com"; // TODO
        var unencryptedFilename = unencryptedFilepathURI.substr(unencryptedFilepathURI.lastIndexOf("/") + 1);
        var encryptedFileFolder = this.file.externalDataDirectory;
        var encryptedFilename = unencryptedFilename + ".crypt";
        var encryptedFilepath = encryptedFileFolder + "/" + encryptedFilename;
        var removeEncryptedFile = function () {
            _this.file.removeFile(encryptedFileFolder, encryptedFilename).then(function (succ) {
                console.log("Tried to remove the temporary encrypted data file: ", succ);
            }, function (rej) {
                console.log("Tried to remove the temporary encrypted data file: ", rej);
            }).catch(function (exc) {
                console.log("Tried to remove the temporary encrypted data file: ", exc);
            });
        };
        this.alertCtrl.create();
        var encryptNUploadFile = function () {
            _this.otp.encrypt(keyPath, unencryptedFilepathURI.substr(7), encryptedFilepath.substr(7), function (success) {
                console.log("Encryption success ", success);
                _this.file.checkFile(encryptedFileFolder, encryptedFilename).then(function (success) {
                    console.log("Encryptd file exists:", success);
                    _this.uploadingMessage = "Uploading file";
                    _this.file.readAsDataURL(unencryptedFilepathURI.substring(0, unencryptedFilepathURI.lastIndexOf("/")), unencryptedFilename).then(function (fileData) {
                        /*let hashTestRaw = Md5.hashStr(fileData,true);
                        console.log("MD5 hash test raw of the file: ", hashTestRaw);
                        let hashTestNotRaw = Md5.hashStr(fileData,false);
                        console.log("MD5 hash test No raw of the file: ", hashTestNotRaw);
                        let hasher = new ParallelHasher('ts-md5/dist/md5_worker.js');*/
                        //fileHash = hasher.hash(fileData);
                        console.log("MD5 hash of the file: ", fileHash);
                        var fileInfo = btoa(encodeURIComponent(JSON.stringify({ 'userFolder': userFolderToUploadTo, 'filename': unencryptedFilename, 'hash': fileHash })));
                        _this.file.readAsDataURL(encryptedFileFolder, encryptedFilename).then(function (encryptedData) {
                            console.log("We are reading encrypted data: ", encryptedData);
                            if (encryptedData) {
                                var encodedData = encryptedData.substring(encryptedData.indexOf("base64,") + 7);
                                _this.api.post(apiPath, {
                                    key: _this.authManager.key,
                                    data: encodedData,
                                    fileinfo: fileInfo
                                }, [], function (success, data) {
                                    callback(success, data);
                                    removeEncryptedFile();
                                });
                            }
                            else {
                                console.log("Could not read the encrypted file (temp.crypt) that was created to send the data to the server.");
                                _this.uploading = false;
                            }
                        }, function (rej) {
                            _this.showMessage("Fehler beim Hochladen der Datei", "Die Anwendung konnte die verschlüsselte Datei nicht öffnen: " + rej.toString()); // "Upload file error", "Application could not open the encrypted file: "
                            console.log("Rejection while reading the encrypted data file..", rej, encryptedFileFolder, encryptedFilename);
                            console.log("Rejection while reading the encrypted data file.. Folder: ", encryptedFileFolder);
                            console.log("Rejection while reading the encrypted data file.. File: ", encryptedFilename);
                            _this.uploading = false;
                        }).catch(function (exc) {
                            _this.showMessage("Fehler beim Hochladen der Datei", "Die Anwendung konnte die verschlüsselte Datei nicht öffnen: " + exc.toString()); // "Application could not open the encrypted file: "
                            console.log("Exception while reading the encrypted data file.. ", exc);
                            _this.uploading = false;
                        });
                    }).catch(function (exc) {
                        console.log("Exception while reading the file to create the hash: ", exc);
                        _this.showMessage("Fehler beim Hochladen der Datei", "Die Anwendung konnte den Hash der Datei nicht erzeugen: " + exc.toString()); // "Application could not create the hash of the file: "
                        _this.uploading = false;
                    });
                }).catch(function (exc) {
                    console.log("Ecrypted file doesn't exist: ", exc);
                    _this.showMessage("Fehler beim Hochladen der Datei", "Die Anwendung konnte die Datei nicht verschlüsseln."); // "Application could not encrypt the file."
                    _this.uploading = false;
                });
            }, function (fail) {
                _this.showMessage("Fehler beim Hochladen der Datei", "Die Anwendung konnte die Verschlüsselung der Datei nicht beenden, daher wurde sie nicht hochgeladen."); // "Application could not finish the encryption of the file, thus it was not uploaded."
                console.log("Failed to encrypt", fail);
                _this.uploading = false;
            });
        };
        var alert = this.alertCtrl.create();
        //const alertTitleMessage = "Do you want to upload " + unencryptedFilename + " to the server under the folder of " + userFolderToUploadTo + " ?";
        var alertTitleMessage = "Möchten Sie Ihre Daten hochladen " + unencryptedFilename + " auf den Server unter dem Ordner von " + userFolderToUploadTo + " ?";
        alert.setTitle(alertTitleMessage);
        alert.addButton('Abbrechen');
        alert.addButton({
            text: 'Hochladen',
            handler: function (data) {
                _this.uploading = true;
                _this.uploadingMessage = "Datei verschlüsseln"; // "Encrypting file"
                setTimeout(function () { encryptNUploadFile(); }, 500);
            }
        });
        alert.present();
    };
    FileUploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-file-upload',template:/*ion-inline-start:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\file-upload\file-upload.html"*/'<!--\n  Generated template for the FileUploadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>File Upload</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-label *ngIf="uploading" style="display: block">{{uploadingMessage}}</ion-label>\n    <ion-spinner *ngIf="uploading" style="margin: 0 auto; top: 45%; display: block"></ion-spinner>\n\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Datei hochladen</ion-card-title>\n      </ion-card-header>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <button ion-button color="primary" (click)="selectFile()">Select file to upload</button>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\file-upload\file-upload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_picker__["a" /* IOSFilePicker */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_manager_auth_manager__["a" /* AuthManagerProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_otp_otp__["a" /* OtpProvider */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FileUploadPage);
    return FileUploadPage;
}());

//# sourceMappingURL=file-upload.js.map

/***/ })

});
//# sourceMappingURL=27.js.map