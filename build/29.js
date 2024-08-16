webpackJsonp([29],{

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawPageModule", function() { return DrawPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__draw__ = __webpack_require__(755);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DrawPageModule = /** @class */ (function () {
    function DrawPageModule() {
    }
    DrawPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__draw__["a" /* DrawPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__draw__["a" /* DrawPage */]),
            ],
        })
    ], DrawPageModule);
    return DrawPageModule;
}());

//# sourceMappingURL=draw.module.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_draw_draw__ = __webpack_require__(180);
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
 * Generated class for the DrawPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DrawPage = /** @class */ (function () {
    function DrawPage(navCtrl, navParams, viewCtrl, dataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.dataProvider = dataProvider;
        this.isMouseDown = false;
        this.ctx = null;
        this.lastX = 0;
        this.lastY = 0;
        this.canvasPos = null;
        this.imgData = null;
        this.imagePath = "";
        this.kind = "human";
        this.imagePath = navParams.get("img");
        this.kind = navParams.get("kind");
        this.parent = navParams.get("parent");
    }
    DrawPage.prototype.mouseLeave = function () {
        this.isMouseDown = false;
    };
    DrawPage.prototype.restart = function () {
        this.ctx.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);
    };
    DrawPage.prototype.mouseUp = function () {
        console.log("Mouse up");
        this.isMouseDown = false;
    };
    DrawPage.prototype.mouseDown = function (e) {
        console.log("Mouse down");
        this.isMouseDown = true;
        this.ctx.fillStyle = 'DD0031';
        var canvasPos = this.getPosition(this.canvasRef.nativeElement);
        this.lastX = e.clientX - canvasPos.x;
        this.lastY = e.clientY - canvasPos.y;
        this.ctx.beginPath();
    };
    DrawPage.prototype.dissmiss = function () {
        var me = this;
        this.dataProvider.imageData[this.parent + this.imagePath] = this.getImage();
        this.viewCtrl.dismiss();
        this.dataProvider.processImage(this.imagePath, this.canvasRef.nativeElement, this.parent, function (data) {
            //            console.log(data);
        });
    };
    DrawPage.prototype.mouseMove = function (e) {
        console.log("Mouse move");
        if (!this.isMouseDown)
            return;
        if (this.canvasPos == null)
            this.canvasPos = this.getPosition(this.canvasRef.nativeElement);
        var xPosition = e.clientX - this.canvasPos.x;
        var yPosition = e.clientY - this.canvasPos.y;
        this.ctx.moveTo(this.lastX, this.lastY);
        this.lastX = xPosition;
        this.lastY = yPosition;
        this.ctx.lineTo(this.lastX, this.lastY);
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = 'rgb(255,0,0)';
        this.ctx.stroke();
    };
    DrawPage.prototype.getPosition = function (el) {
        var xPosition = 0;
        var yPosition = 0;
        while (el) {
            if (el.tagName == "BODY") {
                // deal with browser quirks with body/window/document and page scroll
                var xScrollPos = el.scrollLeft || document.documentElement.scrollLeft;
                var yScrollPos = el.scrollTop || document.documentElement.scrollTop;
                xPosition += (el.offsetLeft - xScrollPos + el.clientLeft);
                yPosition += (el.offsetTop - yScrollPos + el.clientTop);
            }
            else {
                xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
                yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
            }
            el = el.offsetParent;
        }
        return {
            x: xPosition,
            y: yPosition
        };
    };
    DrawPage.prototype.getImage = function () {
        return this.canvasRef.nativeElement.toDataURL("image/png");
    };
    DrawPage.prototype.drawImageProp = function (ctx, img, x, y, w, h, offsetX, offsetY) {
        if (arguments.length === 2) {
            x = y = 0;
            w = ctx.canvas.width;
            h = ctx.canvas.height;
        }
        // default offset is center
        offsetX = typeof offsetX === "number" ? offsetX : 0.5;
        offsetY = typeof offsetY === "number" ? offsetY : 0.5;
        // keep bounds [0.0, 1.0]
        if (offsetX < 0)
            offsetX = 0;
        if (offsetY < 0)
            offsetY = 0;
        if (offsetX > 1)
            offsetX = 1;
        if (offsetY > 1)
            offsetY = 1;
        var iw = img.width, ih = img.height, r = Math.min(w / iw, h / ih), nw = iw * r, // new prop. width
        nh = ih * r, // new prop. height
        cx, cy, cw, ch, ar = 1;
        // decide which gap to fill
        if (nw < w)
            ar = w / nw;
        if (Math.abs(ar - 1) < 1e-14 && nh < h)
            ar = h / nh; // updated
        nw *= ar;
        nh *= ar;
        // calc source rectangle
        cw = iw / (nw / w);
        ch = ih / (nh / h);
        cx = (iw - cw) * offsetX;
        cy = (ih - ch) * offsetY;
        // make sure source rectangle is valid
        if (cx < 0)
            cx = 0;
        if (cy < 0)
            cy = 0;
        if (cw > iw)
            cw = iw;
        if (ch > ih)
            ch = ih;
        // fill image in dest. rectangle
        ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
    };
    DrawPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var me = this;
        console.log('ionViewDidLoad DrawPage');
        this.ctx = this.canvasRef.nativeElement.getContext('2d');
        // this.ctx.scale(2,2); // HiDPI
        this.ctx.clearRect(0, 0, 400, 400);
        if (this.dataProvider.imageData[this.parent + this.imagePath] != null) {
            var img_1 = new Image();
            img_1.src = this.dataProvider.imageData[this.parent + this.imagePath];
            img_1.onload = function () {
                _this.ctx.drawImage(img_1, 0, 0);
            };
        }
        this.canvasRef.nativeElement.addEventListener("touchstart", function mouseDown(e) {
            console.log("Mouse down");
            me.isMouseDown = true;
            me.ctx.fillStyle = 'DD0031';
            me.ctx.strokeStyle = 'rgb(255,0,0)';
            me.ctx.lineWidth = 3;
            var gradient = me.ctx.createLinearGradient(0, 0, 0, 0);
            gradient.addColorStop(0, "magenta");
            gradient.addColorStop(0.5, "blue");
            gradient.addColorStop(1.0, "red");
            // Fill with gradient
            me.ctx.strokeStyle = gradient;
            var canvasPos = me.getPosition(me.canvasRef.nativeElement);
            me.lastX = e.touches[0].clientX - canvasPos.x;
            me.lastY = e.touches[0].clientY - canvasPos.y;
            me.ctx.beginPath();
        }, false);
        this.canvasRef.nativeElement.addEventListener("touchmove", function mouseMove(e) {
            console.log("Mouse move");
            if (!me.isMouseDown)
                return;
            if (me.canvasPos == null)
                me.canvasPos = me.getPosition(me.canvasRef.nativeElement);
            var xPosition = e.touches[0].clientX - me.canvasPos.x;
            var yPosition = e.touches[0].clientY - me.canvasPos.y;
            console.log(xPosition, yPosition);
            me.ctx.moveTo(me.lastX, me.lastY);
            me.lastX = xPosition;
            me.lastY = yPosition;
            me.ctx.lineTo(me.lastX, me.lastY);
            me.ctx.lineWidth = 3;
            me.ctx.strokeStyle = 'rgb(255,0,0)';
            me.ctx.stroke();
        }, false);
        this.canvasRef.nativeElement.addEventListener("touchend", this.mouseUp(), false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('drawCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DrawPage.prototype, "canvasRef", void 0);
    DrawPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-draw',template:/*ion-inline-start:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\draw\draw.html"*/'<!--\n  Generated template for the DrawPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color="primary">\n    <ion-title>Malen</ion-title>\n    <ion-buttons end>\n\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content ion-fixed no-bounce text-center style="overflow: none; height: 100%;">\n  <ion-label *ngIf="kind == \'human\'">Markieren Sie die Körperstellen an denen Sie Schmerzen verspüren.</ion-label>\n  <ion-label *ngIf="kind == \'sign\'">Unterschreiben sie im folgenden Feld</ion-label>\n\n  <div *ngIf="kind == \'human\'" class="draw-wrapper" style="width: 150px; height: 400px;">\n    <img src="{{imagePath}}">\n    <canvas #drawCanvas width="150" height="400" (mousemove)="mouseMove($event)" (mousedown)="mouseDown($event)"\n            (mouseleave)="mouseLeave()" (mouseup)="mouseUp()"\n            style="z-index: 99999; border: 1px solid #efefef; margin: 0 auto; display: block;height:100%; max-height: 100%;width: auto"></canvas>\n  </div>\n  <div *ngIf="kind == \'sign\'" class="draw-wrapper" style="width: 400px; height: 150px;">\n    <img src="{{imagePath}}">\n    <canvas #drawCanvas width="400" height="150" (mousemove)="mouseMove($event)" (mousedown)="mouseDown($event)"\n            (mouseleave)="mouseLeave()" (mouseup)="mouseUp()"\n            style="z-index: 99999; border: 1px solid #efefef; margin: 0 auto; display: block;height:100%; max-height: 100%;width: auto"></canvas>\n  </div>\n\n  <div text-center style="margin-top:15px;">\n    <button ion-button color="secondary" (click)="restart()">\n      <ion-icon name="refresh"></ion-icon> &nbsp; neu beginnen\n    </button>\n    <button ion-button (click)="dissmiss()">Fertig</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\draw\draw.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_draw_draw__["a" /* DrawProvider */]])
    ], DrawPage);
    return DrawPage;
}());

//# sourceMappingURL=draw.js.map

/***/ })

});
//# sourceMappingURL=29.js.map