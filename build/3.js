webpackJsonp([3],{

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(762);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MapPageModule = /** @class */ (function () {
    function MapPageModule() {
    }
    MapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */]),
            ],
        })
    ], MapPageModule);
    return MapPageModule;
}());

//# sourceMappingURL=map.module.js.map

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_manager_auth_manager__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mapModels__ = __webpack_require__(763);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, geolocation, alertCtrl, authProvider) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.mapActive = false;
        this.markers = [];
        this.selectedClinic = null;
        this.selectedFloor = null;
        this.overlays = {
            "bad_fuessuing": {
                "UG": new google.maps.GroundOverlay('assets/map/map_niederbayern_UG.svg', {
                    north: 48.35143987873117,
                    south: 48.35002442058845,
                    east: 13.322320807434762,
                    west: 13.32021447607731
                }),
                "EG": new google.maps.GroundOverlay('assets/map/map_niederbayern_EG.svg', {
                    north: 48.35143987873117,
                    south: 48.35002442058845,
                    east: 13.322320807434762,
                    west: 13.32021447607731
                }),
                "OG": new google.maps.GroundOverlay('assets/map/map_niederbayern_OG.svg', {
                    north: 48.35143987873117,
                    south: 48.35002442058845,
                    east: 13.322320807434762,
                    west: 13.32021447607731
                })
            },
            "bad_saulgau": {
                "EG": new google.maps.GroundOverlay('assets/map/map_saulgau_svg.svg', {
                    north: 48.015922267460175,
                    south: 48.013345977755364,
                    east: 9.4883262592554,
                    west: 9.484373
                })
            },
            "bad_salzelman": {
                "UG": new google.maps.GroundOverlay('assets/map/map_salzelmen_floor_0.svg', {
                    north: 51.99852664888302,
                    south: 51.996542919852665,
                    east: 11.721627545184674,
                    west: 11.717916190846836
                }),
                "EG": new google.maps.GroundOverlay('assets/map/map_salzelmen_floor_1.svg', {
                    north: 51.99852664888302,
                    south: 51.996542919852665,
                    east: 11.721627545184674,
                    west: 11.717916190846836
                }),
                "2 OG": new google.maps.GroundOverlay('assets/map/map_salzelmen_floor_2.svg', {
                    north: 51.99852664888302,
                    south: 51.996542919852665,
                    east: 11.721627545184674,
                    west: 11.717916190846836
                }),
            },
            "bad_waldsee": {
                "EG": new google.maps.GroundOverlay('assets/map/map_waldsee_floor_0.svg', {
                    north: 47.921931142539634,
                    south: 47.920354505968284,
                    east: 9.751642964367988,
                    west: 9.749093782163982
                }),
                "1 OG": new google.maps.GroundOverlay('assets/map/map_waldsee_floor_1.svg', {
                    north: 47.921931142539634,
                    south: 47.920354505968284,
                    east: 9.751642964367988,
                    west: 9.749093782163982
                }),
                "2 OG": new google.maps.GroundOverlay('assets/map/map_waldsee_floor_2.svg', {
                    north: 47.921931142539634,
                    south: 47.920354505968284,
                    east: 9.751642964367988,
                    west: 9.749093782163982
                }),
                "3 OG": new google.maps.GroundOverlay('assets/map/map_waldsee_floor_3.svg', {
                    north: 47.921931142539634,
                    south: 47.920354505968284,
                    east: 9.751642964367988,
                    west: 9.749093782163982
                }),
            },
        };
        this.clinicsLocations = [
            new __WEBPACK_IMPORTED_MODULE_5__mapModels__["a" /* MapClinic */](new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Bad Füssing", "48.350700", "13.321380"), "bad_fuessuing", [
                new __WEBPACK_IMPORTED_MODULE_5__mapModels__["b" /* MapFloor */](new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("UG", "48.350700", "13.321380"), [
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Besinnungsraum", "48.35058445309193", "13.321049945584447"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Gruppengymnastik", "48.35065798909204", "13.321206436594037"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Kleingruppe", "48.35061720685147", "13.321117671362073"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("MBOR-Raum", "48.35062968446861", "13.320974173179776"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("PMR-Raum", "48.35065998724036", "13.321040222576768"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Station 34/ Europatherme", "48.351039866016606", "13.320594102293493"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("T1 GGS (KG- Gerätetraining)", "48.35118545431061", "13.32113335295138"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("T2", "48.350648168776196", "13.321091473922735"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Tiefgarage", "48.35082701170315", "13.320806059553835"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Wasch- und Bügelraum", "48.35107761312347", "13.321000583605143"),
                ]),
                new __WEBPACK_IMPORTED_MODULE_5__mapModels__["b" /* MapFloor */](new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("EG", "48.350700", "13.321380"), [
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Anmeldung ambulant", "48.350593133378524", "13.32106849798642"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Bücherei", "48.35071211823462", "13.321150654234586"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Cafe Lounge", "48.35080871575089", "13.321446610639569"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Chefarzt/ Sekretariat", "48.350838018570364", "13.320750639989898"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Diätberatung", "48.35061427893203", "13.320948166721548"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Haupteingang", "48.35053955702333", "13.321601378817961"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Labor/ EKG", "48.350959800240375", "13.32079263227035"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Lehrküche", "48.35085122870089", "13.321238248588715"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Röntgen", "48.3508975506987", "13.320856344325302"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Sozialdienst", "48.350818466896136", "13.320900600774047"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Speisesaal", "48.35063120438859", "13.321650370169218"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Studio B", "48.350660691687935", "13.32104366649124"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Studio A", "48.35090653090716", "13.321356835422348"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("T3", "48.350889098802455", "13.321041081471202"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("T4, T5", "48.351144009027294", "13.320901348004126"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Verwaltung", "48.35068772501399", "13.321351604387463"),
                ], true),
                new __WEBPACK_IMPORTED_MODULE_5__mapModels__["b" /* MapFloor */](new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("OG", "48.350700", "13.321380"), [
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Oberärzte", "48.35094285498425", "13.320759763269429"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Psychologen", "48.35088127182119", "13.321026097094704"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Ruheraum", "48.351104048733134", "13.320845066634801"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Sitzungssaal", "48.35083314409015", "13.32092719063728"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Sonographie", "48.35077139400713", "13.32081769991599"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("T6 (Massage, Elektrotherapie)", "48.35107488546633", "13.321001926497859"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("T7 (Gruppentherapie)", "48.351019528683075", "13.320847554678812"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("T7 (Massage, Medi Jet)", "48.35093049237043", "13.320936823862537"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("T8 (Ergotherapie)", "48.35089294480409", "13.320690025835042"),
                ]),
            ]),
            new __WEBPACK_IMPORTED_MODULE_5__mapModels__["a" /* MapClinic */](new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Bad Salzelmen", "51.997690", "11.719180"), "bad_salzelman", [
                new __WEBPACK_IMPORTED_MODULE_5__mapModels__["b" /* MapFloor */](new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("UG", "51.997690", "11.719180"), [
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Ergotherapie", "51.997521433474304", "11.719529936518711"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Ernährungsberatung", "51.997444629597865", "11.719411657939451"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Inhalation", "51.99792528536907", "11.718812676880134"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Labor", "51.997645109873254", "11.719231494666246"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Reha-Kraftraum", "51.99780244148291", "11.718493974261833"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Röntgen", "51.997697928042605", "11.719584710025856"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Wasch- und Bügelraum", "51.99809759736858", "11.718821157158686"),
                ]),
                new __WEBPACK_IMPORTED_MODULE_5__mapModels__["b" /* MapFloor */](new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("EG", "51.997690", "11.719180"), [
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Anmeldung ambulant", "51.99772205136858", "11.718937306394992"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Anmeldung / Verwaltung", "51.99777989514938", "11.719141134359347"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Bibliothek", "51.99764774994442", "11.719930484660608"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Cafeteria", "51.997708230598526", "11.719596403667424"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Chefärtze / Oberätze / Oberschwester", "51.997450747244216", "11.71888393746508"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Krankengymnastik / Isokinetik", "51.997830220202566", "11.718410512725427"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Funktions- diagnostik", "51.99749347891246", "11.71953555589505"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Gesellschaftsraum", "51.997641159884104", "11.720059388263508"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Haupteingang", "51.99788148298885", "11.719302724430008"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Nebeneingang", "51.997932579967724", "11.7191978481967"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Speisesaal", "51.99783142763196", "11.719535174772886"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Schwimmbad", "51.998253289351915", "11.718827181107827"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Turnhalle", "51.99814079417508", "11.718567268367906"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Vortragsraum", "51.99777262597918", "11.718676126812056"),
                ], true),
                new __WEBPACK_IMPORTED_MODULE_5__mapModels__["b" /* MapFloor */](new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("2 OG", "51.997690", "11.719180"), [
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Schwestern- Zentralstation", "51.99775123346982", "11.718910318417329"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Zweiter Schwestern- Zentralstation", "51.99764191134549", "11.71921714666746"),
                ]),
            ]),
            new __WEBPACK_IMPORTED_MODULE_5__mapModels__["a" /* MapClinic */](new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Bad Saulgau", "48.01486750797018", "9.486066699028015"), "bad_saulgau", [
                new __WEBPACK_IMPORTED_MODULE_5__mapModels__["b" /* MapFloor */](new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("EG", "48.01486750797018", "9.486066699028015"), [
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Bastelraum", "48.0146387430285", "9.485650432761759"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Bewegungsbad", "48.01455351661425", "9.486382151953876"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Cafeteria", "48.01467373067355", "9.4859181297943"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Eingang", "48.01486750797018", "9.486066699028015"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Elektrotherapie", "48.014221580816034", "9.486267864704132"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Fango / Stangenbad", "48.01446559869195", "9.486236264929175"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Frisör", "48.01454095692023", "9.485526527278125"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Fußpflege", "48.01453377995086", "9.485647750552744"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Güsse", "48.01439741734289", "9.486236264929175"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Konferenzraum E 109", "48.01520841070599", "9.485565712675452"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Lymphdrainage", "48.014232346334936", "9.486270840279758"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Rehatraining", "48.01429873365164", "9.485562737099826"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Rezeption", "48.014899804115494", "9.485940928570926"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Ruheraum", "48.01484956565847", "9.485703553073108"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Röntgen", "48.01469884999382", "9.48672145139426"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Sozialdienst", "48.01510075745396", "9.485667636618018"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("TV / Klavier", "48.01478676751841", "9.485700053628534"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Verwaltung", "48.01522455867442", "9.485816205851734"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Wartebereich Anbau", "48.01410256510488", "9.486195970620201"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Wartebereich Massage", "48.01423513476142", "9.486145447701801"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Wartebereich Turnhalle", "48.01473114624477", "9.486433113925159"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Wasch & Bügelraum", "48.01466475948476", "9.48554530274123"),
                ], true)
            ]),
            new __WEBPACK_IMPORTED_MODULE_5__mapModels__["a" /* MapClinic */](new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Bad Waldsee", "47.92058460128955", "9.75020019955366"), "bad_waldsee", [
                new __WEBPACK_IMPORTED_MODULE_5__mapModels__["b" /* MapFloor */](new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("EG", "47.921197098614186", "9.750159893184673"), [
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Badehaus", "47.92058460128955", "9.75020019955366"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Bewegungsbad", "47.92058679177336", "9.749818249497594"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Cafeteria", "47.92118906250893", "9.75000038285907"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Eingang", "47.921460544043086", "9.749985153261719"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Zweiter Eingang", "47.92121670068095", "9.750335738156537"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Empfang", "47.92115671328934", "9.750249572537768"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Gymnastiksaal", "47.920947480137144", "9.750723857855519"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Konferenzraum", "47.921342902802294", "9.750554390628281"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Ruheraum", "47.9207450105119", "9.750131090350123"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Speisesaal", "47.921398854546226", "9.750190996911215"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Säulenhalle", "47.9208928976069", "9.750334096399456"),
                ], true),
                new __WEBPACK_IMPORTED_MODULE_5__mapModels__["b" /* MapFloor */](new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("1 OG", "47.921197098614186", "9.750159893184673"), [
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Badehaus 1.OG", "47.92073406187662", "9.750139769498901"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Entspannungsraum", "47.921342089511654", "9.750544987833791"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Labor", "47.92100242312648", "9.750024450357841"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Lehrküche", "47.921558412625345", "9.750408373254686"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Psychologie", "47.92153167517223", "9.750342339116742"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Therapie", "47.92094122335698", "9.750723146313021"),
                ]),
                new __WEBPACK_IMPORTED_MODULE_5__mapModels__["b" /* MapFloor */](new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("2 OG", "47.921197098614186", "9.750159893184673"), [
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Psychologie", "47.92153035186852", "9.75034058756728"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Röntgen (Sportklinik)", "47.920964453826954", "9.750560559672067"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Sonographie", "47.92155851956328", "9.7504088488879"),
                ]),
                new __WEBPACK_IMPORTED_MODULE_5__mapModels__["b" /* MapFloor */](new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("3 OG", "47.921197098614186", "9.750159893184673"), [
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Ärtzliche Abteilung", "47.92111888017685", "9.750236212821733"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Zweiter Ärtzliche Abteilung", "47.92096920686624", "9.74979716245025"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Ernährungs- beratung", "47.921292393986185", "9.75004578190078"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("MTT-Raum", "47.92121326088931", "9.750071399597914"),
                    new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Sozialdienst", "47.92137618162893", "9.749967368624539"),
                ])
            ]),
            new __WEBPACK_IMPORTED_MODULE_5__mapModels__["a" /* MapClinic */](new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Alpenblick", "47.708121", "10.031820"), "alpenblick", []),
            new __WEBPACK_IMPORTED_MODULE_5__mapModels__["a" /* MapClinic */](new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Argental", "47.710087", "10.026270"), "argental", []),
            new __WEBPACK_IMPORTED_MODULE_5__mapModels__["a" /* MapClinic */](new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Aulendorf", "47.956045", "9.639547"), "aulendorf", []),
            new __WEBPACK_IMPORTED_MODULE_5__mapModels__["a" /* MapClinic */](new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Bad Wurzach", "47.911530", "9.904220"), "bad_wurzsach", []),
            new __WEBPACK_IMPORTED_MODULE_5__mapModels__["a" /* MapClinic */](new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Oberammergau", "47.591196", "11.075774"), "oberammergau", []),
            new __WEBPACK_IMPORTED_MODULE_5__mapModels__["a" /* MapClinic */](new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Schwabenland", "47.709460", "10.034590"), "schwabenland", []),
            new __WEBPACK_IMPORTED_MODULE_5__mapModels__["a" /* MapClinic */](new __WEBPACK_IMPORTED_MODULE_5__mapModels__["c" /* TitledCoords */]("Wangen", "47.698440", "9.835990"), "wangen", [])
        ];
        this.selectOptions = {
            title: 'Wonach suchen Sie?',
            subTitle: 'Wählen Sie den Standort aus',
            okText: 'anzeigen',
            cancelText: 'abbrechen',
            placeholder: "Wonach suchen Sie?"
            // mode: 'md'
        };
        this.selectOptionsSmall = {
            title: 'Bereich',
            subTitle: 'Wählen Sie den Standort aus',
            okText: 'anzeigen',
            cancelText: 'abbrechen',
            placeholder: "Bereich"
            // mode: 'md'
        };
        this.floorOptions = {
            title: 'Etage',
            subTitle: 'Wählen Sie den Etage aus',
            okText: 'anzeigen',
            cancelText: 'abbrechen',
            placeholder: "Etage"
            // mode: 'md'
        };
        this.locationOptions = {
            title: 'Klinik wählen',
            subTitle: 'Wählen Sie ihre Klinik aus',
            okText: 'anzeigen',
            cancelText: 'abbrechen',
            placeholder: "Klinik auswählen",
            color: "#5b5b5b"
            // mode: 'md'
        };
    }
    MapPage.prototype.openHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    MapPage.prototype.ionViewDidLoad = function () {
        if (this.authProvider.isLoggedIn) {
            this.changeSelectedClinic(this.getClinic(this.authProvider.clinicName));
        }
        else {
            this.changeSelectedClinic(this.clinicsLocations[0]);
        }
    };
    MapPage.prototype.changeSelectedClinic = function (clinic) {
        if (clinic != null)
            this.locationsPopUp.setValue(clinic);
    };
    MapPage.prototype.changeClinic = function (selectedClinic) {
        if (selectedClinic instanceof __WEBPACK_IMPORTED_MODULE_5__mapModels__["a" /* MapClinic */]) {
            this.hideSelectedFloorOverlay();
            this.selectedClinic = selectedClinic;
            //this.selectOptions.placeholder = "Bitte zuerst Etage auswählen";
            if (this.selectedClinic.floors.length > 0) {
                this.loadMap(this.selectedClinic.info);
                this.onFloorChange(this.chooseDefaultFloor(selectedClinic.floors));
            }
            else {
                this.loadMap(this.selectedClinic.info);
                console.log("Clinic doesn't have floors...");
            }
        }
    };
    /**
     * Returns the first default floor that exists in the array passed as parameter.
     * @param floors
     */
    MapPage.prototype.chooseDefaultFloor = function (floors) {
        for (var _i = 0, floors_1 = floors; _i < floors_1.length; _i++) {
            var floor = floors_1[_i];
            if (floor.defaultFloor === true) {
                return floor;
            }
        }
        return floors[0];
    };
    /**
     * Centers the map to floor and activates the overlay if one exists.
     * @param floor
     */
    MapPage.prototype.onFloorChange = function (floor) {
        if (floor != undefined && floor != null && floor instanceof __WEBPACK_IMPORTED_MODULE_5__mapModels__["b" /* MapFloor */]) {
            this.hideSelectedFloorOverlay();
            this.selectedFloor = floor;
            this.loadMap(floor.info);
            this.activateFloorOverlay();
        }
        this.selectOptions.placeholder = "Wonach suchen Sie?";
    };
    /**
     * Centers the map to the marker and zooms at the desired level.
     * @param area
     * @param zoomLevel
     */
    MapPage.prototype.onRoomAreaChanged = function (area, zoomLevel) {
        if (zoomLevel === void 0) { zoomLevel = 19; }
        this.location = area;
        this.loadMap(this.location, zoomLevel);
    };
    /**
     * Returns the overlay for the selected floor, or null if it doesn't exist.
     */
    MapPage.prototype.getOverlayForSelectedFloor = function () {
        if (this.selectedFloor != null && this.selectedClinic != null) {
            var floorTitle = this.selectedFloor.info.title;
            var clinicId = this.selectedClinic.id;
            var clinicOverlays = this.overlays[clinicId];
            if (clinicOverlays != undefined && clinicOverlays != null) {
                var floorOverlay = clinicOverlays[floorTitle];
                if (floorOverlay != undefined && floorOverlay != null) {
                    return floorOverlay;
                }
            }
        }
        return null;
    };
    /**
     * Shows the overlay for the floor.
     */
    MapPage.prototype.activateFloorOverlay = function () {
        var overlay = this.getOverlayForSelectedFloor();
        if (overlay != null) {
            overlay.setMap(this.mapObject);
            google.maps.event.addListener(overlay, 'click', function (e) {
                var latLng = '"' + e.latLng.lat() + '","' + e.latLng.lng() + '"';
                console.log(latLng);
            });
        }
    };
    /**
     * Hides the overlay for the floor.
     */
    MapPage.prototype.hideSelectedFloorOverlay = function () {
        var overlay = this.getOverlayForSelectedFloor();
        if (overlay != null) {
            overlay.setMap(null);
        }
    };
    /**
     * Returns the clinic associated with the string passed as parameter
     * @param clinicFromAuth
     */
    MapPage.prototype.getClinic = function (clinicFromAuth) {
        if (clinicFromAuth === void 0) { clinicFromAuth = "saulgau"; }
        var clinicsIds = {
            "saulgau": "bad_saulgau",
            "wurzach": "bad_wurzsach",
            "waldsee": "bad_waldsee",
            "aplenblick": "alpenblick",
            "argenta": "argental",
            "schwabenland": "schwabenland",
            "salzelmen": "bad_salzelman",
            "niederbayern": "bad_fuessuing"
        };
        var locationId = clinicsIds[clinicFromAuth];
        /*console.log("Retrieving clinic with map id ", locationId);*/
        for (var i = 0; i < this.clinicsLocations.length; i++) {
            var current = this.clinicsLocations[i];
            if (current.id == locationId)
                return current;
        }
        return null;
    };
    /**
     * Centers the map on the coordinates and zoom level provided
     * @param data lat and lng should be properties of it
     * @param zoomLevel An integer representing the zoom level
     */
    MapPage.prototype.loadMap = function (data, zoomLevel) {
        var _this = this;
        if (zoomLevel === void 0) { zoomLevel = 18; }
        console.log("Loading map... data: ", data);
        this.geolocation.getCurrentPosition().then(function (position) {
            console.log("success on get location, data:", JSON.stringify(position));
            var userPosition = { lat: position.coords.latitude, lng: position.coords.longitude };
            var userPositionImage = {
                clickable: false,
                url: 'assets/map/position.png',
                size: new google.maps.Size(22, 22),
                origin: new google.maps.Point(0, 18),
                anchor: new google.maps.Point(11, 11),
            };
            new google.maps.Marker({
                icon: userPositionImage,
                position: userPosition,
                map: _this.mapObject,
                title: "Ihr Standort",
                animation: google.maps.Animation.DROP
            });
        }, function (err) {
            console.log("The error is:", err);
        });
        //var mapOverlay;
        var latLng = new google.maps.LatLng(data.lat, data.lng);
        var mapOptions = {
            center: latLng,
            zoom: zoomLevel,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
        };
        if (this.mapActive == false) {
            this.mapObject = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            this.mapActive = true;
        }
        else {
            this.mapObject.setZoom(zoomLevel);
        }
        if (undefined !== this.markers && this.markers.length) {
            for (var i = 0; i < this.markers.length; i++) {
                this.markers[i].setMap(null);
            }
        }
        var marker = new google.maps.Marker({
            position: latLng,
            map: this.mapObject,
            title: data.title,
            animation: google.maps.Animation.DROP
        });
        this.mapObject.panTo(marker.getPosition());
        this.markers.push(marker);
        //console.log(marker);
        var infowindow = new google.maps.InfoWindow({
            content: data.title
        });
        google.maps.event.addListener(this.mapObject, 'click', function (e) {
            var latLng = '"lat":"' + e.latLng.lat() + '","lng":"' + e.latLng.lng() + '"';
            console.log(latLng);
        });
        var mapObject = this.mapObject;
        google.maps.event.addListener(marker, 'mouseover', function () {
            infowindow.open(mapObject, marker);
        });
        //  infowindow.open(map, marker);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Select */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Select */])
    ], MapPage.prototype, "locationsPopUp", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\map\map.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Wegeplan</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="openHomePage()">\n        <img class="homeLogoNavBar" src="assets/home/icon.svg">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <!-- </ion-item> -->\n</ion-header>\n\n<ion-content>\n\n    <ion-toolbar color="primary">\n        <!-- <ion-list-header color="primary"> -->\n        <!-- <ion-label col-4 style="color:#fff;">\n    Was suchen Sie?</ion-label> -->\n        <!-- <ion-buttons left><ion-icon name="locate"></ion-icon> </ion-buttons> -->\n\n        <ion-select full [selectOptions]="locationOptions" interface="popover"\n                    multiple="false" color="primary" style="max-width: 100%; color: #5b5b5b; font-weight: bold" ([ngModel])="locationsPopUp"\n                    [okText]=locationOptions.okText [cancelText]=locationOptions.cancelText [placeholder]=locationOptions.placeholder\n                    (ionChange)="changeClinic($event)">\n            <ion-option [value]="clinic" *ngFor="let clinic of clinicsLocations">{{clinic.info.title}}</ion-option>\n        </ion-select>\n        <!-- </ion-list-header> -->\n    </ion-toolbar>\n\n    <ion-toolbar no-border no-lines color="white" *ngIf="selectedClinic != null && selectedClinic.floors.length!=0">\n      <ion-select *ngIf="selectedClinic != null && selectedFloor != null && selectedClinic.floors.length<2" full [selectOptions]="selectOptions" interface="popover"\n                  multiple="false" color="primary" style="max-width:100%; color: #5b5b5b;" ([ngModel])="location"\n                  [okText]=selectOptions.okText [cancelText]=selectOptions.cancelText [placeholder]=selectOptions.placeholder\n                  (ionChange)="onRoomAreaChanged($event)">\n          <ion-option [value]="area" *ngFor="let area of selectedFloor.areas">{{area.title}}</ion-option>\n      </ion-select>\n      <ion-item *ngIf="selectedClinic != null && selectedClinic.floors.length>1" no-lines class="removedPaddings">\n        <ion-select  full [selectOptions]="floorOptions" interface="popover"\n                     multiple="false" color="primary" style="width: 50%; max-width:50%; color: #5b5b5b;" ([ngModel])="location"\n                     [okText]=floorOptions.okText [cancelText]=floorOptions.cancelText [placeholder]=floorOptions.placeholder\n                     (ionChange)="onFloorChange($event)">\n          <ion-option [value]="floor" *ngFor="let floor of selectedClinic.floors">{{floor.info.title}}</ion-option>\n        </ion-select>\n        <ion-select  *ngIf="selectedFloor != null" full [selectOptions]="selectOptionsSmall" interface="popover"\n                     multiple="false" color="primary" style="width: 50%; max-width:50%; color: #5b5b5b;" ([ngModel])="location"\n                     [okText]=selectOptionsSmall.okText [cancelText]=selectOptionsSmall.cancelText [placeholder]=selectOptionsSmall.placeholder\n                     (ionChange)="onRoomAreaChanged($event)">\n          <ion-option [value]="area" *ngFor="let area of selectedFloor.areas">{{area.title}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-toolbar>\n\n\n\n\n  <!-- <ion-list-header sticky class="header-bg"color="primary"> -->\n  <div #map id="map"></div>\n\n</ion-content>\n'/*ion-inline-end:"C:\ger\wzk\front\3 wzk few options4\3 wzk few options\clinic_app_frontend\src\pages\map\map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_manager_auth_manager__["a" /* AuthManagerProvider */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TitledCoords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MapFloor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapClinic; });
var TitledCoords = /** @class */ (function () {
    function TitledCoords(title, lat, lng) {
        this.title = title;
        this.lat = lat;
        this.lng = lng;
    }
    return TitledCoords;
}());

var MapFloor = /** @class */ (function () {
    function MapFloor(info, areas, defaultFloor) {
        if (defaultFloor === void 0) { defaultFloor = false; }
        this.info = info;
        this.areas = areas;
        this.defaultFloor = defaultFloor;
    }
    return MapFloor;
}());

var MapClinic = /** @class */ (function () {
    function MapClinic(info, id, floors) {
        this.info = info;
        this.id = id;
        this.floors = floors;
    }
    return MapClinic;
}());

//# sourceMappingURL=mapModels.js.map

/***/ })

});
//# sourceMappingURL=3.js.map