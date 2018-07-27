(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody,\ndiv,\nspan {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-size: 1em;\n}\n\n* {\n    transition:.2s ease-in-out;\n}\n\n/*Main styles*/\n\n.main-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: LightSeaGreen;\n    background-size: cover;\n    width: 100vw;\n    height: 100vh;\n}\n\n.app {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    overflow: hidden;\n    height: 70%;\n    width: 90%;\n    margin: auto;\n    padding: 0;\n    border-radius: 7px;\n    box-shadow: 0 13px 40px -13px rgba(0, 0, 0, .75);\n}\n\n.app-container {\n    background-color: #f7f7f7;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    margin: 0;\n    padding: 0;\n    box-shadow: 0 13px 40px -13px rgba(0, 0, 0, .75);\n}\n\n@media (max-width: 768px) {\n    .app-container {\n        overflow: scroll;\n    }\n}\n\n/*Contact list section*/\n\n.side {\n    padding: 0;\n    margin: 0;\n    height: 100%;\n}\n\n.sideBar {\n    overflow: scroll;\n}\n\n.side-mainArea {\n    padding: 0;\n    margin: 0;\n    height: 100%;\n    width: 100%;\n    z-index: 1;\n    position: relative;\n    display: block;\n    top: 0;\n}\n\n.heading {\n    padding: 10px 16px 10px 15px;\n    margin: 0;\n    height: 60px;\n    width: 100%;\n    background-color: #eee;\n    z-index: 1000;\n}\n\n/*navigation buttons*/\n\n.tabsContainer {\n    padding: 0;\n    margin: 0;\n    height: 60px;\n    width: 100%;\n}\n\n.tabsContainer-inner {\n    height: 100%;\n    width: 100%;\n    padding: 0px;\n    background-color: #e2e2e2;\n}\n\n.tabs-container {\n    display: flex;\n    height: 100%;\n}\n\n.tabs-container li {\n    flex: 1;\n}\n\n.tabs-container * {\n    height: 100%;\n}\n\n.nav-tabs .nav-link {\n    border: 0px solid transparent;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n\n.nav-link {\n    padding: 0px;\n}\n\n.nav-item {\n    text-align: center;\n    background-color: #e2e2e2;\n    border-radius: 0px;\n    border-right: 1px solid #c6c6c6;\n}\n\n.nav-item:last-child {\n    border-right: 0px solid #b4b4b4;\n}\n\n.nav-item:hover {\n    background-color: rgba(32, 178, 171, 0.616) !important;\n    border-radius: 0px;\n}\n\n.nav-item:hover * {\n    opacity: 1;\n}\n\n.nav-item a {\n    color: white;\n    border-radius: 0px;\n    line-height: 60px;\n    font-size: 20px;\n}\n\n.nav-link.active {\n    background-color: LightSeaGreen !important;\n}\n\n/*contact component */\n\napp-contact {\n    width: 100%;\n}\n\n/*main chat section*/\n\n.conversation {\n    padding: 0;\n    margin: 0;\n    height: 100%;\n    border-left: 1px solid rgba(0, 0, 0, 0.08);\n}\n\n/*Header section*/\n\n.heading-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: white;\n    text-align: end;\n}\n\n.heading-container div {\n    width: auto;\n    height: auto;\n}\n\n.heading-contact-container {\n    display: flex;\n    align-items: center;\n}\n\n.heading-avatar {\n    padding: 0;\n    cursor: pointer;\n}\n\n.heading-avatar-icon img {\n    border-radius: 50%;\n    height: 40px;\n    width: 40px;\n}\n\n.heading-name {\n    padding: 0;\n    cursor: pointer;\n}\n\n.heading-name-details {\n    margin-left: 10px;\n}\n\n/*settings icon */\n\n.heading-dot {\n    padding: 0;\n    margin-left: 10px;\n}\n\n.heading-dot i {\n    text-align: right;\n    padding: 5px;\n    color: #93918f;\n    cursor: pointer;\n}\n\n.faIcon {\n    opacity: .6;\n}\n\n.faIcon:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n/*messages section*/\n\n.message {\n    padding: 0;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    margin: 0;\n    overflow-y: auto;\n    border: 1px solid #f7f7f7;\n    height: calc(100% - 120px);\n    background-color: #eeeeeeaf;\n}\n\n/*reply section*/\n\n.reply {\n    height: 60px;\n    width: 100%;\n    background-color: #e2e2e2;\n    padding: 10px 5px 10px 5px;\n    margin: 0;\n    z-index: 1000;\n}\n\n.paperClip { /* IE 9 */\n    -webkit-transform: rotate(-45deg); /* Safari */\n    transform: rotate(-45deg);\n    text-align: center;\n}\n\n.paperClip fa-icon {\n    font-size: 26px;\n    opacity: .4;\n}\n\n.paperClip fa-icon:hover {\n    opacity: .7;\n}\n\n.reply-main {\n    padding: 1px 5px;\n}\n\n.reply-main textarea {\n    width: 100%;\n    resize: none;\n    overflow: hidden;\n    padding: 5px;\n    outline: none;\n    border: none;\n    text-indent: 5px;\n    box-shadow: none;\n    height: 100%;\n    font-size: 16px;\n}\n\n.reply-main textarea:focus {\n    outline: none;\n    border: none;\n    text-indent: 5px;\n    box-shadow: none;\n}\n\n.reply-send {\n    padding: 1px 10px;\n}\n\n.reply-send i {\n    text-align: center;\n    padding: 5px;\n    color: #93918f;\n    cursor: pointer;\n}\n\n.btn-send {\n    width: 100%;\n    height: 100%;\n    padding: 0px;\n    border: 0px;\n    background-color: LightSeaGreen;\n}\n\n.btn-send:hover {\n    background-color: rgba(32, 178, 171, 0.658);\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n    <div class=\"container app\">\n        <div class=\"row app-container\">\n\n            <!--Contact list section-->\n            <div class=\"col-12 col-md-4 side\">\n                <div class=\"side-mainArea\">\n                    <div class=\"row heading\">\n\n                    </div>\n\n                    <!--navigation buttons-->\n                    <div class=\"row tabsContainer\">\n                        <div class=\"col-sm-12 tabsContainer-inner\">\n                            <div class=\"form-group has-feedback\">\n\n                                <!-- Nav tabs -->\n                                <ul class=\"nav nav-tabs tabs-container\">\n                                    <li class=\"nav-item\">\n                                        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#chat\">\n                                            <fa-icon [icon]=\"faCommentDots\" class=\"faIcon\"></fa-icon>\n                                        </a>\n                                    </li>\n                                    <li class=\"nav-item\">\n                                        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#contacts\">\n                                            <fa-icon [icon]=\"faUser\" class=\"faIcon\"></fa-icon>\n                                        </a>\n                                    </li>\n                                    <li class=\"nav-item\">\n                                        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#search\">\n                                            <fa-icon [icon]=\"faSearch\" class=\"faIcon\"></fa-icon>\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!--contacts section-->\n                    <div class=\"tab-content\">\n                        <div class=\"tab-pane active\" id=\"chat\">\n                            <div class=\"row sideBar\">\n\n                                <!--contact component-->\n                                <app-contact></app-contact>\n\n                            </div>\n                        </div>\n                        <div class=\"tab-pane fade\" id=\"contacts\">\n                            All Contacts Section\n                        </div>\n                        <div class=\"tab-pane fade\" id=\"search\">\n                            <!--contact component-->\n                            <app-contact></app-contact>\n\n                        </div>\n                    </div>\n\n                </div>\n\n            </div>\n\n            <!--main chat section-->\n            <div class=\"col-12 col-md-8 conversation\">\n\n                <!--header section-->\n                <div class=\"row heading heading-container\">\n                    <div class=\"col-sm-10 col-md-10 col-xs-10\">\n                        <div class=\"heading-contact-container\">\n                            <div class=\"heading-avatar\">\n                                <div class=\"heading-avatar-icon\">\n                                    <img src=\"https://bootdey.com/img/Content/avatar/avatar6.png\">\n                                </div>\n                            </div>\n                            <div class=\"heading-name\">\n                                <a class=\"heading-name-details\">John Doe\n                                </a>\n                                <span class=\"heading-online\">Online</span>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!--Settings-->\n                    <div class=\"col-sm-1 col-md-1 col-xs-1  heading-dot float-right\">\n                        <fa-icon [icon]=\"faSetting\" class=\"faIcon\"></fa-icon>\n                    </div>\n                </div>\n\n                <!--messages section-->\n                <div class=\"row message\" id=\"conversation\">\n                    <div class=\"col-12 col-md-12\">\n\n                        <!--Messages-->\n\n                        <!--received message component-->\n<app-received-message></app-received-message>\n                        <!--sent message component-->\n                        <app-sent-message></app-sent-message>\n                        <app-sent-message></app-sent-message>\n\n                        <!--received message component-->\n                        <app-received-message></app-received-message>\n                        <!--sent message component-->\n                        <app-sent-message></app-sent-message>\n\n\n                    </div>\n                </div>\n\n                <!--reply section-->\n                <div class=\"row reply\">\n                    <div class=\"col-1 col-sm-1 paperClip\">\n                        <fa-icon [icon]=\"faPaperClip\" class=\"faIcon\"></fa-icon>\n                    </div>\n                    <div class=\"col-9 col-sm-9 reply-main\">\n                        <textarea class=\"form-control\" rows=\"1\" id=\"comment\" placeholder=\"write a message...\"></textarea>\n                    </div>\n                    <div class=\"col-2 col-sm-2 reply-send\">\n                        <button type=\"button\" class=\"btn btn-info btn-send\">Send</button>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _contact_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.service */ "./src/app/contact/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.faSetting = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCog"];
        this.faPaperClip = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPaperclip"];
        this.faCommentDots = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCommentAlt"];
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUser"];
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_contact_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _received_message_received_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./received-message/received-message.component */ "./src/app/received-message/received-message.component.ts");
/* harmony import */ var _sent_message_sent_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sent-message/sent-message.component */ "./src/app/sent-message/sent-message.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
                _received_message_received_message_component__WEBPACK_IMPORTED_MODULE_6__["ReceivedMessageComponent"],
                _sent_message_sent_message_component__WEBPACK_IMPORTED_MODULE_7__["SentMessageComponent"]
            ],
            imports: [
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-size: 1em;\n}\n\ndiv {\n    height: auto;\n    width: 100%;\n}\n\n/*contacts component*/\n\n.tab-content div {\n    height: auto;\n}\n\n.sideBar {\n    padding: 0;\n    margin: 0;\n    background-color: #fff;\n    overflow-y: auto;\n    border: 1px solid #f7f7f7;\n    height: calc(100% - 120px);\n}\n\n.sideBar-search {\n    padding: 5px 10px;\n    width: 100%;\n    border: 0px;\n    border-bottom: 1px solid lightgray;\n}\n\n.sideBar div {\n    width: 100%;\n}\n\n.sideBar-body {\n    position: relative;\n    padding: 10px;\n    border-bottom: 1px solid #f7f7f7;\n    height: 72px;\n    margin: 0;\n    cursor: pointer;\n}\n\n.sideBar-body:hover {\n    background-color: #f2f2f2;\n}\n\n/*contact time*/\n\n.time-container {\n    position: absolute;\n    text-align: end;\n    justify-content: flex-end;\n}\n\n.sideBar-time {\n    height: 10px;\n    color: black;\n    line-height: 10px;\n    padding: 0px;\n}\n\n.time-meta {\n    text-align: right;\n    font-size: 10px;\n    color: rgba(0, 0, 0, 0.4);\n    vertical-align: baseline;\n}\n\n/*contact avatar*/\n\n.sideBar-avatar {\n    text-align: center;\n    padding: 0;\n    margin: auto;\n}\n\n.avatar-icon {\n    position: relative;\n    width: 49px;\n    height: 49px;\n}\n\n.avatar-icon img {\n    border-radius: 50%;\n    height: 49px;\n    width: 49px;\n}\n\n.sideBar-main {\n    padding: 0;\n}\n\n.sideBar-main .row {\n    padding: 0;\n    margin: 0;\n}\n\n/*status*/\n\n.status {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 14px;\n    height: 14px;\n    border-radius: 50%;\n}\n\n.status-online {\n    background-color: LightSeaGreen;\n}\n\n.status-offline {\n    background-color: rgb(189, 77, 77);\n}\n\n/*contact name*/\n\n.sideBar-name {\n    padding: 0px;\n    padding: 5px 0px;\n}\n\n.name-meta {\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    text-align: left;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    color: #000;\n    line-height: 10px;\n}\n\n.contact-name {\n    font-size: 16px;\n    color: LightSeaGreen;\n}\n\n.last-message {\n    opacity: 0.5;\n}"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input id=\"searchInput\" type=\"text\" [(ngModel)]=\"contactFilter\" placeholder=\"Search...\" class=\"sideBar-search\" />\n\n<div class=\"row sideBar-body\" *ngFor=\"let contact of filteredContacts\">\n    <div class=\"col-12 col-md-12\">\n        <div class=\"row time-container\">\n            <div class=\"col-12 col-md-12 float-right sideBar-time\">\n                <span class=\"time-meta float-right\">\n                    {{contact.time}}\n                </span>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-3 col-md-3 sideBar-avatar\">\n                <div class=\"avatar-icon\">\n                    <img [src]=\"contact.avatar\">\n                    <span class=\"status status-{{contact.status}}\"></span>\n                </div>\n            </div>\n            <div class=\"col-9 col-md-9 sideBar-main\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-xs-12 sideBar-name\">\n                        <span class=\"name-meta contact-name\">\n                            {{contact.name}}\n                        </span>\n                        <span class=\"name-meta last-message\">\n                            {{contact.messages[0]}}\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.service */ "./src/app/contact/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(_contactService) {
        this._contactService = _contactService;
        this.contactFilter = '';
    }
    Object.defineProperty(ContactComponent.prototype, "contactFilter", {
        get: function () {
            return this._contactFilter;
        },
        set: function (newValue) {
            this._contactFilter = newValue;
            this.filteredContacts = this.contactFilter ? this.performFilter(this.contactFilter) : this.contacts;
        },
        enumerable: true,
        configurable: true
    });
    ContactComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.contacts.filter(function (contact) { return contact.name.toLocaleLowerCase().indexOf(filterBy) > -1; });
    };
    ContactComponent.prototype.ngOnInit = function () {
        this.contacts = this._contactService.getContacts();
        this.filteredContacts = this.contacts;
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.service.ts":
/*!********************************************!*\
  !*** ./src/app/contact/contact.service.ts ***!
  \********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactService = /** @class */ (function () {
    function ContactService() {
    }
    ContactService.prototype.getContacts = function () {
        return [
            {
                'avatar': 'https://bootdey.com/img/Content/avatar/avatar1.png',
                'name': 'John Doe',
                'messages': ['First Message', 'Previous Message'],
                'time': '10:20 PM',
                'status': 'online'
            },
            {
                'avatar': 'https://bootdey.com/img/Content/avatar/avatar2.png',
                'name': 'Mark Doe',
                'messages': ['First Message', 'Previous Message'],
                'time': '10:10 PM',
                'status': 'offline'
            },
            {
                'avatar': 'https://bootdey.com/img/Content/avatar/avatar3.png',
                'name': 'Jean Doe',
                'messages': ['First Message', 'Previous Message'],
                'time': '10:00 PM',
                'status': 'online'
            }
        ];
    };
    ContactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/received-message/received-message.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/received-message/received-message.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message-body {\n    margin: 0;\n    padding: 0;\n    width: auto;\n    height: auto;\n}\n\n.message-main-receiver {\n    padding: 5px 9px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.receiver {\n    width: auto;\n    min-width: 200px;\n    padding: 4px 10px 7px;\n    border-radius: 0px 6px 6px 6px;\n    background: #ffffff;\n    font-size: 12px;\n    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n    word-wrap: break-word;\n    display: inline-block;\n    margin-right: 20px;\n}\n\n.message-text {\n    margin: 0;\n    padding: 5px;\n    word-wrap: break-word;\n    font-weight: 400;\n    font-size: 14px;\n    padding-bottom: 0;\n}\n\n.receiver-time {\n    color: gray;\n    font-size: 12px;\n    text-align: right;\n}\n\n.message-main-receiver .receiver-time {\n    text-align: left;\n}\n"

/***/ }),

/***/ "./src/app/received-message/received-message.component.html":
/*!******************************************************************!*\
  !*** ./src/app/received-message/received-message.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row message-body\">\n  <div class=\"col-sm-12 message-main-receiver\">\n    <div class=\"receiver\">\n      <div class=\"message-text\">\n        Hi, what are you doing?!\n      </div>\n    </div>\n    <div class=\"receiver-time\">\n      18:18 PM\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/received-message/received-message.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/received-message/received-message.component.ts ***!
  \****************************************************************/
/*! exports provided: ReceivedMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceivedMessageComponent", function() { return ReceivedMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReceivedMessageComponent = /** @class */ (function () {
    function ReceivedMessageComponent() {
    }
    ReceivedMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-received-message',
            template: __webpack_require__(/*! ./received-message.component.html */ "./src/app/received-message/received-message.component.html"),
            styles: [__webpack_require__(/*! ./received-message.component.css */ "./src/app/received-message/received-message.component.css")]
        })
    ], ReceivedMessageComponent);
    return ReceivedMessageComponent;
}());



/***/ }),

/***/ "./src/app/sent-message/sent-message.component.css":
/*!*********************************************************!*\
  !*** ./src/app/sent-message/sent-message.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message-body {\n    margin: 0;\n    padding: 0;\n    width: auto;\n    height: auto;\n}\n\n.message-main-sender {\n    padding: 5px 9px;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n}\n\n.receiver-time {\n    color: gray;\n    font-size: 12px;\n    text-align: right;\n}\n\n.sender {\n    float: right;\n    width: auto;\n    min-width: 200px;\n    background-color: LightSeaGreen;\n    color: white;\n    border-radius: 6px 6px 0px 6px;\n    padding: 4px 10px 7px;\n    font-size: 12px;\n    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n    display: inline-block;\n    word-wrap: break-word;\n    margin-left: 20px;\n}\n\n.message-text {\n    margin: 0;\n    padding: 5px;\n    word-wrap: break-word;\n    font-weight: 400;\n    font-size: 14px;\n    padding-bottom: 0;\n}\n"

/***/ }),

/***/ "./src/app/sent-message/sent-message.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sent-message/sent-message.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row message-body\">\n  <div class=\"col-sm-12 message-main-sender\">\n    <div class=\"receiver-time\">\n      18:18 PM\n    </div>\n    <div class=\"sender\">\n      <div class=\"message-text\">\n        I am doing nothing man!\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/sent-message/sent-message.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sent-message/sent-message.component.ts ***!
  \********************************************************/
/*! exports provided: SentMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentMessageComponent", function() { return SentMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SentMessageComponent = /** @class */ (function () {
    function SentMessageComponent() {
    }
    SentMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sent-message',
            template: __webpack_require__(/*! ./sent-message.component.html */ "./src/app/sent-message/sent-message.component.html"),
            styles: [__webpack_require__(/*! ./sent-message.component.css */ "./src/app/sent-message/sent-message.component.css")]
        })
    ], SentMessageComponent);
    return SentMessageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mac/Desktop/Chatapp/chat-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map