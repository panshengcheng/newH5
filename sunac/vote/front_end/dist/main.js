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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/alert/alert.component.css":
/*!*******************************************!*\
  !*** ./src/app/alert/alert.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert-container{\n    width:100%;\n    height:100%;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    top: 0;\n    left: 0;\n    background: rgba(0,0,0,0.7);\n    position: fixed;\n    z-index: 1;\n}\n\n.force-none{\n    display:none !important;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxlcnQvYWxlcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsT0FBTztJQUNQLFFBQVE7SUFDUiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLHdCQUF3QjtDQUMzQiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnQtY29udGFpbmVye1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uZm9yY2Utbm9uZXtcbiAgICBkaXNwbGF5Om5vbmUgIWltcG9ydGFudDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/alert/alert.component.html":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert-container fill flex-center\" [ngClass]='{\"alert-container\":true,\"fill\":true,\"flex-center\":true,\"force-none\":(!alertInfo.display)}' (click)=\"onClick()\">\n  <div class=\"{{alertInfo.class}}\" role=\"alert\">\n    {{alertInfo.text}}\n  </div> \n</div>"

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent.prototype.onClick = function () {
        this.alertInfo = {
            class: "alert",
            display: false,
            text: ""
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "alertInfo", void 0);
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/alert/alert.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _ranking_ranking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ranking/ranking.component */ "./src/app/ranking/ranking.component.ts");
/* harmony import */ var _join_join_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./join/join.component */ "./src/app/join/join.component.ts");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personal/personal.component */ "./src/app/personal/personal.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: "info", component: _info_info_component__WEBPACK_IMPORTED_MODULE_2__["InfoComponent"] },
    { path: "ranking", component: _ranking_ranking_component__WEBPACK_IMPORTED_MODULE_3__["RankingComponent"] },
    { path: "personal/:player_id", component: _personal_personal_component__WEBPACK_IMPORTED_MODULE_5__["PersonalComponent"] },
    { path: "myinfo/:player_id", component: _personal_personal_component__WEBPACK_IMPORTED_MODULE_5__["PersonalComponent"] },
    { path: "notfound/:player_id", component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] },
    { path: "join", component: _join_join_component__WEBPACK_IMPORTED_MODULE_4__["JoinComponent"] },
    { path: "", redirectTo: "/info", pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<app-tabbar></app-tabbar>\n<app-wechat-userinfo></app-wechat-userinfo>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'vote';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tabbar_tabbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabbar/tabbar.component */ "./src/app/tabbar/tabbar.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _ranking_ranking_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ranking/ranking.component */ "./src/app/ranking/ranking.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _join_join_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./join/join.component */ "./src/app/join/join.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./personal/personal.component */ "./src/app/personal/personal.component.ts");
/* harmony import */ var _cover_cover_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cover/cover.component */ "./src/app/cover/cover.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _delete_me_delete_me_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./delete-me/delete-me.component */ "./src/app/delete-me/delete-me.component.ts");
/* harmony import */ var _wechat_userinfo_wechat_userinfo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./wechat-userinfo/wechat-userinfo.component */ "./src/app/wechat-userinfo/wechat-userinfo.component.ts");
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
                _tabbar_tabbar_component__WEBPACK_IMPORTED_MODULE_4__["TabbarComponent"],
                _info_info_component__WEBPACK_IMPORTED_MODULE_5__["InfoComponent"],
                _ranking_ranking_component__WEBPACK_IMPORTED_MODULE_6__["RankingComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
                _join_join_component__WEBPACK_IMPORTED_MODULE_8__["JoinComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"],
                _personal_personal_component__WEBPACK_IMPORTED_MODULE_10__["PersonalComponent"],
                _cover_cover_component__WEBPACK_IMPORTED_MODULE_11__["CoverComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"],
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_14__["AlertComponent"],
                _delete_me_delete_me_component__WEBPACK_IMPORTED_MODULE_15__["DeleteMeComponent"],
                _wechat_userinfo_wechat_userinfo_component__WEBPACK_IMPORTED_MODULE_16__["WechatUserinfoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cover/cover.component.css":
/*!*******************************************!*\
  !*** ./src/app/cover/cover.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdmVyL2NvdmVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/cover/cover.component.html":
/*!********************************************!*\
  !*** ./src/app/cover/cover.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col no-padding\">\n     <img class=\"img-fluid\" src=\"{{coverImg}}\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/cover/cover.component.ts":
/*!******************************************!*\
  !*** ./src/app/cover/cover.component.ts ***!
  \******************************************/
/*! exports provided: CoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverComponent", function() { return CoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoverComponent = /** @class */ (function () {
    function CoverComponent() {
    }
    CoverComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CoverComponent.prototype, "coverImg", void 0);
    CoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cover',
            template: __webpack_require__(/*! ./cover.component.html */ "./src/app/cover/cover.component.html"),
            styles: [__webpack_require__(/*! ./cover.component.css */ "./src/app/cover/cover.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CoverComponent);
    return CoverComponent;
}());



/***/ }),

/***/ "./src/app/delete-me/delete-me.component.css":
/*!***************************************************!*\
  !*** ./src/app/delete-me/delete-me.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZS1tZS9kZWxldGUtbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/delete-me/delete-me.component.html":
/*!****************************************************!*\
  !*** ./src/app/delete-me/delete-me.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "      <button class=\"btn btn-danger\" (click)=\"onDeleteMe()\">删除我{{openid}}</button>\n"

/***/ }),

/***/ "./src/app/delete-me/delete-me.component.ts":
/*!**************************************************!*\
  !*** ./src/app/delete-me/delete-me.component.ts ***!
  \**************************************************/
/*! exports provided: DeleteMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteMeComponent", function() { return DeleteMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeleteMeComponent = /** @class */ (function () {
    function DeleteMeComponent(service) {
        var _this = this;
        this.service = service;
        this.subscribe = this.service.getObservableUserinfo().subscribe(function (userinfo) {
            console.log(userinfo);
            _this.openid = userinfo.openid;
        });
    }
    DeleteMeComponent.prototype.ngOnInit = function () {
        this.service.syncUserinfo();
    };
    DeleteMeComponent.prototype.ngAfterViewInit = function () {
    };
    DeleteMeComponent.prototype.ngOnDestroy = function () {
        this.subscribe.unsubscribe();
    };
    DeleteMeComponent.prototype.onDeleteMe = function () {
        var value = JSON.stringify({ openid: this.openid });
        $.ajax({
            url: "http://www.ulifecity.com:4003/delete-me",
            type: "post",
            contentType: "application/json",
            data: value,
            success: function (v) {
                console.log(v);
                window.location.href = window.location.href;
            },
            error: function (err) {
                console.log(err);
            }
        });
    };
    DeleteMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-me',
            template: __webpack_require__(/*! ./delete-me.component.html */ "./src/app/delete-me/delete-me.component.html"),
            styles: [__webpack_require__(/*! ./delete-me.component.css */ "./src/app/delete-me/delete-me.component.css")]
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], DeleteMeComponent);
    return DeleteMeComponent;
}());



/***/ }),

/***/ "./src/app/info/info.component.css":
/*!*****************************************!*\
  !*** ./src/app/info/info.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm8vaW5mby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/info/info.component.html":
/*!******************************************!*\
  !*** ./src/app/info/info.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n  <app-cover [coverImg]=\"coverImg\"></app-cover>\n  <div class=\"container margin-tb-15\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h4>活动介绍</h4>\n        <p class=\"card-text\">\n          一个粉丝，每日只能投一票,次日还可以再投一票，以此累推！\n        </p>\n        <p class=\"card-text\">\n          排名顺序以得票数进行降序，同票数以报名时间靠前排列\n        </p>\n        <p class=\"card-text\">\n          底部懒加载：排名列表，每次向服务器服务器获取10位用户，当滚动条到达底部时再向服务器索取10个用户，直到排名列表获取完为止，当启用搜索功能时候，底部懒加载功能被禁止； \n        </p>\n        <p class=\"card-text\">\n          模糊搜索：搜索用户姓名，采用模糊匹配，只要包含关键字就会匹配成功\n        </p>\n        <p class=\"card-text\">\n          拍照，当照片大于屏幕宽度则等比例缩小，否则不变，根据手机的exif信息获取照片方向，自动旋转，因设备支持而异，如果不能获取exif，也可以通过UI按钮组进行手动控制 \n        </p>\n        <p class=\"card-text\">\n          选手与粉丝都可以分享选手的投票页面直接给其他人投票，分享文字包含有粉丝与选手、活动等命名规则\n        </p>\n        <p>\n          <app-delete-me></app-delete-me>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/info/info.component.ts":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wechat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wechat.service */ "./src/app/wechat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoComponent = /** @class */ (function () {
    function InfoComponent(wechatService) {
        this.wechatService = wechatService;
        this.coverImg = "http://placehold.it/640x640";
    }
    InfoComponent.prototype.ngOnInit = function () {
        this.wechatService.getShare();
    };
    InfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.css */ "./src/app/info/info.component.css")]
        }),
        __metadata("design:paramtypes", [_wechat_service__WEBPACK_IMPORTED_MODULE_1__["WechatService"]])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/join/join.component.css":
/*!*****************************************!*\
  !*** ./src/app/join/join.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fix-box {\n    position: absolute;\n    background: #009688;\n    width: 100%;\n    height: 100%;\n}\n\n#canvas{\n    width: 70vw;\n    height: 70vw;\n    position: relative;\n    left: 15vw;\n}\n\n#btn-control{\n    width: 95%;\n    position: relative;\n    left: 2.5%;\n}\n\n.btn{\n    border-color:white;\n}\n\n#btn-control button {\n    width: 20%;\n}\n\ndiv#userMessage {\n    width: 90%;\n    left: 5%;\n    position: relative;\n    top: 1%;\n    height: 20%;\n}\n\ndiv#userMessage textarea{\n    margin-top:1%;\n}\n\n.form-control{\n    margin-bottom:1%;\n}\n\ndiv#btn-end {\n    width: 100%;\n    text-align: center;\n    justify-content: space-around;\n    align-items: center;\n    position: relative;\n    top: 3%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9pbi9qb2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztDQUNkOztBQUdEO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsWUFBWTtDQUNmOztBQUVEO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsUUFBUTtDQUNYIiwiZmlsZSI6InNyYy9hcHAvam9pbi9qb2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZml4LWJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6ICMwMDk2ODg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jY2FudmFze1xuICAgIHdpZHRoOiA3MHZ3O1xuICAgIGhlaWdodDogNzB2dztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMTV2dztcbn1cblxuXG4jYnRuLWNvbnRyb2x7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMi41JTtcbn1cblxuLmJ0bntcbiAgICBib3JkZXItY29sb3I6d2hpdGU7XG59XG5cbiNidG4tY29udHJvbCBidXR0b24ge1xuICAgIHdpZHRoOiAyMCU7XG59XG5cbmRpdiN1c2VyTWVzc2FnZSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBsZWZ0OiA1JTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxJTtcbiAgICBoZWlnaHQ6IDIwJTtcbn1cblxuZGl2I3VzZXJNZXNzYWdlIHRleHRhcmVhe1xuICAgIG1hcmdpbi10b3A6MSU7XG59XG5cbi5mb3JtLWNvbnRyb2x7XG4gICAgbWFyZ2luLWJvdHRvbToxJTtcbn1cblxuZGl2I2J0bi1lbmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDMlO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/join/join.component.html":
/*!******************************************!*\
  !*** ./src/app/join/join.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n  <div class=\"fix-box\">\n    <div id=\"control\" class=\"fill\">\n      <canvas id=\"canvas\"></canvas>\n      <div id=\"userMessage\" class=\"none\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <input id=\"name\" type=\"text\" placeholder=\"请输入姓名\" maxlength=\"5\" class=\"form-control\" />\n          </div>\n          <div class=\"col\">\n            <input id=\"phone\" type=\"number\" placeholder=\"请输入电话\" maxlength=\"11\" class=\"form-control\" />\n          </div>\n        </div>\n        <textarea id=\"message\" type=\"text\" placeholder=\"请输入一句座右铭\" maxlength=\"35\" class=\"form-control\"></textarea>\n      </div>\n      <img id=\"preview\" src=\"\" alt=\"\" class=\"wImg\">\n      <div class=\"btn-group none\" id=\"btn-control\">\n        <button class=\"btn btn-primary\" id=\"sPlus\">\n          <i class=\"fa fa-search-plus\"></i>\n        </button>\n        <button class=\"btn btn-primary\" id=\"sMinus\">\n          <i class=\"fa fa-search-minus\"></i>\n        </button>\n        <button class=\"btn btn-primary\" id=\"rLeft\">\n          <i class=\"fa fa-rotate-left\"></i>\n        </button>\n        <button class=\"btn btn-primary\" id=\"rRight\">\n          <i class=\"fa fa-rotate-right\"></i>\n        </button>\n        <button class=\"btn btn-primary\" id=\"reset\">\n          <i class=\"fa fa-eraser\"></i>\n        </button>\n      </div>\n      <div id=\"btn-end\" class=\"none\">\n        <button class=\"btn btn-info btn-lg\" id=\"previewBtn\">生成</button>\n        <button class=\"btn btn-dark btn-lg\" id=\"commitBtn\">提交</button>\n      </div>\n    </div>\n    <div id=\"select\" class=\"fill flex-center\">\n      <div id=\"camera\" class=\"form-group\">\n        <label class=\"fa fa-camera fa-3x\" for=\"inputfile\">\n        </label>\n        <input type=\"file\" id=\"inputfile\" accept=\"image/*\" hidden>\n      </div>\n    </div>\n  </div>\n  <app-alert [alertInfo]=\"alertInfo\"></app-alert>\n</div>"

/***/ }),

/***/ "./src/app/join/join.component.ts":
/*!****************************************!*\
  !*** ./src/app/join/join.component.ts ***!
  \****************************************/
/*! exports provided: JoinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinComponent", function() { return JoinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wechat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wechat.service */ "./src/app/wechat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JoinComponent = /** @class */ (function () {
    function JoinComponent(service, router, wechatService) {
        this.service = service;
        this.router = router;
        this.wechatService = wechatService;
        this.alertInfo = {
            class: "alert",
            display: false,
            text: ""
        };
    }
    JoinComponent.prototype.ngOnInit = function () {
        this.getPlayerid();
    };
    JoinComponent.prototype.getPlayerid = function () {
        this.player_id = this.service.getUserinfo().player_id;
        console.log(this.player_id);
        if (this.player_id !== 0) {
            this.router.navigate(["notfound", this.player_id]);
        }
    };
    JoinComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.wechatService.getShare({
            title: "UVCSI Superhero快来报名吧！",
            desc: "我知道你不是DC'Fans，但这重要吗？",
            imgUrl: "https://s2.ax1x.com/2019/04/06/AW21YQ.png",
            link: "http://vote.ulifecity.com/join",
            success: function () {
                console.log("ok");
            }
        });
        var select = document.getElementById("select");
        var btnCotrol = document.getElementById("btn-control");
        var inputfile = document.getElementById("inputfile");
        var userMessage = document.getElementById("userMessage");
        var btnEnd = document.getElementById("btn-end");
        var canvas = document.getElementById("canvas");
        //let result:any = document.getElementById("result");
        inputfile.addEventListener("change", onSelect);
        var tempImg = new Image();
        function onSelect(e) {
            var file = e.target.files[0];
            var isImg = /image/.test(file.type);
            if (isImg) {
                fileRender(file);
            }
            else {
                throw "这不是图片";
            }
            function fileRender(f) {
                var reader = new FileReader();
                reader.readAsDataURL(f);
                reader.addEventListener("load", function (e) {
                    tempImg.src = reader.result;
                    tempImg.addEventListener("load", function () {
                        that.canvasRender(canvas, tempImg);
                        hideSelect();
                    });
                });
            }
            function hideSelect() {
                select.style.display = "none";
                btnCotrol.style.display = "block";
                userMessage.style.display = "block";
                btnEnd.style.display = "flex";
            }
        }
    };
    JoinComponent.prototype.canvasRender = function (canvas, tempImg) {
        var that = this;
        var config = {
            width: 640,
            height: 640,
            view: canvas,
            forceCanvas: true
        };
        var app = new PIXI.Application(config);
        var scale = 640 / tempImg.naturalWidth;
        scale = scale > 1 ? 1 : scale;
        console.log(scale);
        var Control = /** @class */ (function () {
            function Control() {
                this.imgDrop = false;
                this.isAbleCommit = false;
                this.img = PIXI.Sprite.from(tempImg);
                this.img.anchor.x = 0.5;
                this.img.anchor.y = 0.5;
                this.img.scale.x = scale;
                this.img.scale.y = scale;
                this.img.position.set(320, 320);
            }
            Control.prototype.init = function () {
                app.stage.addChild(this.img);
                this.exif();
                this.imgOnDrop();
                this.btnOnEvent();
                this.preview();
                this.commit();
            };
            Control.prototype.exif = function () {
                var _this = this;
                var orientation;
                EXIF.getData(tempImg, function () {
                    orientation = EXIF.getTag(this, "Orientation");
                    next();
                });
                function next() {
                    if (orientation == 1 || orientation == undefined) {
                        return true;
                    }
                    else if (orientation == 6) {
                        _this.img.rotation = (Math.PI / 180) * 90;
                    }
                    else if (orientation == 8) {
                        _this.img.rotation = (Math.PI / 180) * 90 * -1;
                    }
                    else if (orientation == 3) {
                        _this.img.rotation = (Math.PI / 180) * 180;
                    }
                }
            };
            Control.prototype.imgOnDrop = function () {
                var that = this;
                that.img.interactive = true;
                that.img.on("pointerdown", dropStart);
                that.img.on("pointermove", dropMove);
                that.img.on("pointerup", dropUp);
                function dropStart(event) {
                    that.imgDrop = true;
                }
                function dropMove(event) {
                    if (that.imgDrop === true) {
                        that.img.position = event.data.global;
                    }
                }
                function dropUp() {
                    that.imgDrop = false;
                }
            };
            Control.prototype.btnOnEvent = function () {
                var that = this;
                var sPlus = document.getElementById("sPlus");
                var sMinus = document.getElementById("sMinus");
                var rLeft = document.getElementById("rLeft");
                var rRight = document.getElementById("rRight");
                var reset = document.getElementById("reset");
                sPlus.addEventListener("click", function () {
                    that.img.scale.x += 0.1;
                    that.img.scale.y += 0.1;
                });
                sMinus.addEventListener("click", function () {
                    that.img.scale.x -= 0.1;
                    that.img.scale.y -= 0.1;
                });
                rLeft.addEventListener("click", function () {
                    that.img.rotation -= (Math.PI / 180) * 4;
                });
                rRight.addEventListener("click", function () {
                    that.img.rotation += (Math.PI / 180) * 4;
                });
                reset.addEventListener("click", function () {
                    app.ticker.stop();
                    location.href = "http://www.jonnypeng.com/vote/dist/join";
                });
            };
            Control.prototype.preview = function () {
                var _this = this;
                var previewBtn = document.getElementById("previewBtn");
                var commitBtn = document.getElementById("commitBtn");
                var name = document.getElementById("name");
                var message = document.getElementById("message");
                var phone = document.getElementById("phone");
                var userMessage = document.getElementById("userMessage");
                var btnCotrol = document.getElementById("btn-control");
                previewBtn.addEventListener("click", checkout);
                function checkout() {
                    var mobile = /^1[\d]{10}$/;
                    if (name.value.length === 0 || message.value.length === 0 || phone.value.length === 0) {
                        that.alertInfo = {
                            class: "alert alert-danger",
                            display: true,
                            text: "你尚有未填写的信息"
                        };
                    }
                    else if (!mobile.test(phone.value)) {
                        that.alertInfo = {
                            class: "alert alert-danger",
                            display: true,
                            text: "你填写的手机号码有误"
                        };
                    }
                    else {
                        previewBtn.setAttribute("class", "btn btn-dark");
                        commitBtn.setAttribute("class", "btn btn-info");
                        previewBtn.removeEventListener("click", checkout);
                        btnCotrol.style.display = "none";
                        userMessage.style.display = "none";
                        render();
                    }
                }
                function render() {
                    // let tempText = `${name.value}:${message.value}`;
                    // let rowLength = 15;
                    // let newText = "";
                    // for (let i = 0; i < tempText.length; i++) {
                    //   let isRowEnd = i !== 0 && i % 15 === 0;
                    //   newText += tempText[i];
                    //   if (isRowEnd) {
                    //     newText += "\n";
                    //   }
                    // }
                    // let style: PIXI.TextStyleOptions = {
                    //   fill: 0x000000,
                    //   align: "left",
                    //   fontSize: 32
                    // }
                    // let text = new PIXI.Text(newText, style);
                    // app.stage.addChild(text);
                    // text.position.set(65, 609);
                    cacheService();
                }
                function cacheService() {
                    app.ticker.stop();
                    app.renderer.render(app.stage);
                    var value = {
                        headimg: canvas.toDataURL("image/jpeg", "0.5"),
                        name: name.value,
                        phone: phone.value.toString(),
                        message: message.value
                    };
                    that.service.savePlayer(value);
                    _this.isAbleCommit = true;
                }
            };
            Control.prototype.commit = function () {
                var _this = this;
                var previewBtn = document.getElementById("previewBtn");
                var commitBtn = document.getElementById("commitBtn");
                commitBtn.addEventListener("click", function () {
                    if (_this.isAbleCommit) {
                        that.service.getjoin().subscribe(function (v) {
                            console.log(v);
                            //that.service.savePlayerId({player_id:v.result.insertId});
                            //that.router.navigate(["/personal",v.result.insertId]);
                            previewBtn.style.display = "none";
                            commitBtn.style.display = "none";
                            window.location.href = "http://www.jonnypeng.com/vote/dist/personal/" + v.result.insertId;
                        }, function (err) {
                            console.log(err);
                        });
                    }
                    else {
                        that.alertInfo = {
                            class: "alert alert-danger",
                            display: true,
                            text: "请先生成图片"
                        };
                    }
                });
            };
            return Control;
        }());
        var control = new Control().init();
    };
    JoinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-join',
            template: __webpack_require__(/*! ./join.component.html */ "./src/app/join/join.component.html"),
            styles: [__webpack_require__(/*! ./join.component.css */ "./src/app/join/join.component.css")]
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _wechat_service__WEBPACK_IMPORTED_MODULE_3__["WechatService"]])
    ], JoinComponent);
    return JoinComponent;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  list works!\n</p>\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListComponent = /** @class */ (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/main.interface.ts":
/*!***********************************!*\
  !*** ./src/app/main.interface.ts ***!
  \***********************************/
/*! exports provided: Userinfo, Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Userinfo", function() { return Userinfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var Userinfo = /** @class */ (function () {
    function Userinfo() {
        this.player_id = 0;
    }
    return Userinfo;
}());

var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());



/***/ }),

/***/ "./src/app/main.service.ts":
/*!*********************************!*\
  !*** ./src/app/main.service.ts ***!
  \*********************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _main_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.interface */ "./src/app/main.interface.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HOST = "http://www.ulifecity.com:4003";
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var MainService = /** @class */ (function () {
    function MainService(http) {
        this.http = http;
        this.userinfo = new _main_interface__WEBPACK_IMPORTED_MODULE_4__["Userinfo"]();
        this.rankingAnchor = "p0";
        this.boradcastEmitter = new events__WEBPACK_IMPORTED_MODULE_3__();
        this.boradcastUserinfo = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.boradcastEmitter, "msg");
    }
    MainService.prototype.getSnsapi = function (v) {
        return this.http.post("http://www.ulifecity.com:4001/snsapi", v, httpOptions);
    };
    MainService.prototype.serverLogin = function () {
        var v = {
            openid: this.userinfo.openid,
            headimgurl: this.userinfo.headimgurl,
            nickname: this.userinfo.nickname
        };
        if (v.openid === undefined) {
            throw "没有openid";
        }
        return this.http.post(HOST + "/login", v, httpOptions);
    };
    MainService.prototype.saveRankingAnchor = function (v) {
        this.rankingAnchor = v;
    };
    MainService.prototype.showRankingAnchor = function () {
        return this.rankingAnchor;
    };
    MainService.prototype.saveWechatInfo = function (v) {
        this.userinfo.headimgurl = v.headimgurl;
        this.userinfo.openid = v.openid;
        this.userinfo.nickname = v.nickname;
        this.syncUserinfo();
    };
    MainService.prototype.saveID = function (v) {
        this.userinfo.fans_id = v.fans_id;
        this.userinfo.player_id = v.player_id;
        this.userinfo.time = v.time;
    };
    MainService.prototype.saveTime = function (time) {
        this.userinfo.time = time;
    };
    MainService.prototype.showTime = function () {
        return this.userinfo.time;
    };
    MainService.prototype.savePlayer = function (v) {
        this.userinfo.name = v.name;
        this.userinfo.headimg = v.headimg;
        this.userinfo.phone = v.phone;
        this.userinfo.message = v.message;
        console.log(this.userinfo);
    };
    MainService.prototype.savePlayerId = function (v) {
        this.userinfo.player_id = v.player_id;
    };
    MainService.prototype.getjoin = function () {
        var v = {
            openid: this.userinfo.openid,
            name: this.userinfo.name,
            phone: this.userinfo.phone,
            headimg: this.userinfo.headimg,
            message: this.userinfo.message
        };
        return this.http.post(HOST + "/join", v, httpOptions);
    };
    MainService.prototype.getVote = function (v) {
        return this.http.post(HOST + "/vote", v, httpOptions);
    };
    MainService.prototype.getUserinfo = function () {
        return this.userinfo;
    };
    MainService.prototype.getplayer = function (v) {
        return this.http.post(HOST + "/getplayer", v, httpOptions);
    };
    MainService.prototype.getSinglePlayer = function (v) {
        return this.http.post(HOST + "/get_single_personal", v, httpOptions);
    };
    MainService.prototype.getPlayersOfName = function (v) {
        return this.http.post(HOST + "/name", v, httpOptions);
    };
    MainService.prototype.syncUserinfo = function () {
        this.boradcastEmitter.emit("msg", this.userinfo);
    };
    MainService.prototype.getObservableUserinfo = function () {
        return this.boradcastUserinfo;
        //let that = this;
        // return Observable.create(obs=>{
        //     obs.next(that.userinfo)
        //     if(that.userinfo.openid === undefined){
        //       setTimeout(()=>{
        //         obs.next(that.userinfo)
        //       },1000)
        //     }
        // })
    };
    MainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fill\">\n  <img src=\"{{img}}\" alt=\"\" class=\"cover\">\n</div>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wechat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wechat.service */ "./src/app/wechat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(route, wechatService) {
        this.route = route;
        this.wechatService = wechatService;
        this.imgs = [
            "assets/imgs/no_sign_up.jpg",
            "assets/imgs/sign_up.jpg"
        ];
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        this.player_id = Number(this.route.snapshot.paramMap.get("player_id"));
        this.img = this.player_id === 0 ? this.imgs[0] : this.imgs[1];
        this.wechatService.getShare();
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _wechat_service__WEBPACK_IMPORTED_MODULE_2__["WechatService"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/personal/personal.component.css":
/*!*************************************************!*\
  !*** ./src/app/personal/personal.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#back {\n    position: absolute;\n    left: 4%;\n    top: 1%;\n    color: darkred;\n}\n\n    .rowData {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        text-align: center;\n    }\n\n    .bg-gray{\n    background:gray;\n}\n\n    .card p {\n    font-size: 0.85rem;\n}\n\n    .card {\n    border:none;\n    border-radius:0%;\n}\n\n    .card-body {\n    flex: 1 1 auto;\n    padding: 0.2rem 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uYWwvcGVyc29uYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsUUFBUTtJQUNSLGVBQWU7Q0FDbEI7O0lBRUc7UUFDSSxjQUFjO1FBQ2Qsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQixtQkFBbUI7S0FDdEI7O0lBRUw7SUFDSSxnQkFBZ0I7Q0FDbkI7O0lBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0lBRUQ7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0NBQ3BCOztJQUVEO0lBRUksZUFBZTtJQUNmLHdCQUF3QjtDQUMzQiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbmFsL3BlcnNvbmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFjayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDQlO1xuICAgIHRvcDogMSU7XG4gICAgY29sb3I6IGRhcmtyZWQ7XG59XG5cbiAgICAucm93RGF0YSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4uYmctZ3JheXtcbiAgICBiYWNrZ3JvdW5kOmdyYXk7XG59XG5cbi5jYXJkIHAge1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbn1cblxuLmNhcmQge1xuICAgIGJvcmRlcjpub25lO1xuICAgIGJvcmRlci1yYWRpdXM6MCU7XG59XG5cbi5jYXJkLWJvZHkge1xuICAgIC1tcy1mbGV4OiAxIDEgYXV0bztcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBwYWRkaW5nOiAwLjJyZW0gMS4yNXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/personal/personal.component.html":
/*!**************************************************!*\
  !*** ./src/app/personal/personal.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 no-padding\">\n        <div class=\"card\">\n          <img src=\"{{player.headimg}}\" alt=\"\" class=\"card-img-top\">\n          <div class=\"card-body bg-white text-gray\">\n            <blockquote class=\"blockquote text-left\">\n              <p class=\"mb-0\">{{player.message}}</p>\n              <footer class=\"blockquote-footer text-right\">{{player.name}}</footer>\n            </blockquote>\n            <button class=\"btn btn-primary btn-block\" (click)=\"onVote()\">\n              投票,目前票数为{{player.star}}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n<app-alert [alertInfo]=\"alertInfo\"></app-alert>\n  </div>\n</div>\n<a class=\"text-primary\" id=\"back\" routerLink=\"/ranking\">\n  <i class=\"fa fa-arrow-left\">返回</i>\n</a>\n"

/***/ }),

/***/ "./src/app/personal/personal.component.ts":
/*!************************************************!*\
  !*** ./src/app/personal/personal.component.ts ***!
  \************************************************/
/*! exports provided: PersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalComponent", function() { return PersonalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wechat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wechat.service */ "./src/app/wechat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonalComponent = /** @class */ (function () {
    function PersonalComponent(service, route, router, wechatService) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.wechatService = wechatService;
        this.player = {
            headimg: "",
            name: "未知用户",
            message: "未知信息",
            player_id: 0,
            star: 0
        };
        this.alertInfo = {
            display: false,
            class: "alert-success",
            text: "投票成功"
        };
    }
    PersonalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTime();
        this.herPlayerId = this.route.snapshot.paramMap.get("player_id");
        this.service.saveRankingAnchor("p" + this.herPlayerId); //保存锚点
        if (this.herPlayerId !== "0") {
            var playerInfo = this.service.getSinglePlayer({ player_id: this.herPlayerId }).subscribe(function (v) {
                console.log(v);
                console.log(_this.player);
                _this.afterGetSingPlayer(v);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.router.navigate(["/notfound", "0"]);
        }
    };
    PersonalComponent.prototype.afterGetSingPlayer = function (v) {
        this.player = v.result[0];
        this.getWechatShare();
    };
    PersonalComponent.prototype.getTime = function () {
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        month = month < 10 ? "0" + month : "" + month;
        var date = now.getDate();
        date = date < 10 ? "0" + date : "" + date;
        this.time = year + "-" + month + "-" + date;
        console.log("今天的日期是" + this.time);
    };
    PersonalComponent.prototype.getUserinfo = function () {
        this.userinfo = this.service.getUserinfo();
        console.log(this.userinfo);
    };
    PersonalComponent.prototype.ngAfterViewInit = function () {
        this.getUserinfo();
    };
    PersonalComponent.prototype.onVote = function () {
        var that = this;
        var time = this.userinfo.time; //数据记录的事件
        if (this.time !== time) {
            gotoServer();
        }
        else {
            //alert("你已经投过票了");
            this.alertInfo = {
                display: true,
                class: "alert alert-danger",
                text: "你已经投过票了"
            };
        }
        function gotoServer() {
            that.service.getVote({
                player_id: that.herPlayerId,
                fans_id: that.userinfo.fans_id,
                time: that.time
            }).subscribe(function (v) {
                console.log(v);
                that.player.star += 1;
                that.service.saveTime(that.time);
                that.userinfo.time = that.service.showTime();
                that.alertInfo = {
                    display: true,
                    class: "alert alert-success",
                    text: "投票成功"
                };
            }, function (err) {
                console.log(err);
            });
        }
    };
    PersonalComponent.prototype.getWechatShare = function () {
        var value = {
            title: "\u6211\u662F" + this.userinfo.nickname + ",\u8BF7\u4E3A\u6211\u7684\u670B\u53CB\"" + this.player.name + "\"\u6295\u7968\u52A9\u529B",
            desc: "come on!come on!",
            link: "http://www.jonnypeng.com/vote/dist/personal/" + this.player.player_id,
            imgUrl: this.userinfo.headimgurl,
            success: function () {
                console.log("thank you");
            }
        };
        this.wechatService.getShare(value);
    };
    PersonalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personal',
            template: __webpack_require__(/*! ./personal.component.html */ "./src/app/personal/personal.component.html"),
            styles: [__webpack_require__(/*! ./personal.component.css */ "./src/app/personal/personal.component.css")]
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _wechat_service__WEBPACK_IMPORTED_MODULE_3__["WechatService"]])
    ], PersonalComponent);
    return PersonalComponent;
}());



/***/ }),

/***/ "./src/app/ranking/ranking.component.css":
/*!***********************************************!*\
  !*** ./src/app/ranking/ranking.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rowData{\n    display: flex;\n    align-items: center;\n    text-align: center;\n    font-size:0.85rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmFua2luZy9yYW5raW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9yYW5raW5nL3JhbmtpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3dEYXRhe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOjAuODVyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/ranking/ranking.component.html":
/*!************************************************!*\
  !*** ./src/app/ranking/ranking.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\" (scroll)=\"onScroll($event)\">\n    <app-cover [coverImg]=\"coverImg\"></app-cover>\n    <div class=\"container margin-tb-15\">\n        <app-search (outPlayers)=\"onReceive($event)\" (resetPlayers)=\"onResetPlayers($event)\"></app-search>\n        <div class=\"row\">\n            <div class=\"col-6 margin-tb-15\" *ngFor=\"let player of players\">\n                <a routerLink=\"/personal/{{player.player_id}}\" id=\"p{{player.player_id}}\">\n                    <div class=\"card\">\n                        <img src=\"{{player.headimg}}\" alt=\"\" class=\"card-img-top\">\n                        <div class=\"card-body\">\n                            <div class=\"card-title\">\n                                {{player.name}}\n                            </div>\n                            <p class=\"card-text\">{{player.star}}票</p>\n                        </div>\n                    </div>\n                </a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/ranking/ranking.component.ts":
/*!**********************************************!*\
  !*** ./src/app/ranking/ranking.component.ts ***!
  \**********************************************/
/*! exports provided: RankingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingComponent", function() { return RankingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _wechat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wechat.service */ "./src/app/wechat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());
var RankingComponent = /** @class */ (function () {
    function RankingComponent(service, wechatService) {
        this.service = service;
        this.wechatService = wechatService;
        this.coverImg = "http://placehold.it/640x320";
        this.offset = 0;
        this.players = [];
        this.isBottom = false;
        this.isRequestServer = true;
        this.searchClose = true;
    }
    RankingComponent.prototype.ngOnInit = function () {
        this.onResetPlayers({ searchClose: true });
    };
    RankingComponent.prototype.onResetPlayers = function (event) {
        var _this = this;
        this.searchClose = event.searchClose;
        this.offset = 0;
        var value = {
            offset: this.offset
        };
        this.service.getplayer(value).subscribe(function (v) {
            console.log(v);
            _this.players = v.result.players;
            _this.playerCount = v.result.playerCount;
        }, function (err) {
            console.log(err);
        });
    };
    RankingComponent.prototype.ngAfterViewInit = function () {
        this.wechatService.getShare({
            title: "UVCSI Superhero 当前排名榜单",
            desc: "我知道你想报名，但是我们需要看你的邀请函！！！",
            imgUrl: "https://s2.ax1x.com/2019/04/06/AW21YQ.png",
            link: "http://www.jonnypeng.com/vote/dist/ranking",
            success: function () {
                console.log("ok");
            }
        });
        // let anchor:string = this.service.showRankingAnchor();
        // setTimeout(()=>{
        //   window.location.href =`http://www.jonnypeng.com/vote/dist/ranking#${anchor}`;
        // },1000);
    };
    RankingComponent.prototype.onReceive = function (event) {
        this.players = event.players;
        this.searchClose = event.searchClose;
    };
    RankingComponent.prototype.onScroll = function (event) {
        var that = this;
        //console.log(event.target.scrollTop);   //偏移高度 2577
        /*
         event.target.scrollTop:2577
         event.target.scrollHeight:3132
         event.target.clientHeight:555
        */
        var clientHeight = event.target.clientHeight;
        var scrollHeight = event.target.scrollHeight;
        var offseetHeight = scrollHeight - clientHeight;
        var scrollTop = event.target.scrollTop;
        if (scrollTop <= offseetHeight - 70) {
            console.log("已经远离底部");
            that.isBottom = false;
        }
        if (scrollTop > offseetHeight - 70) {
            if (!that.isBottom && that.searchClose && that.offset < that.playerCount) {
                that.isBottom = true;
                console.log(that.isBottom, "到达底部");
                gotoServer();
            }
        }
        function gotoServer() {
            that.offset += 10;
            var value = {
                offset: that.offset
            };
            that.service.getplayer(value).subscribe(function (v) {
                console.log(v);
                that.players = that.players.concat(v.result.players);
            }, function (err) {
                console.log(err);
            });
        }
    };
    RankingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ranking',
            template: __webpack_require__(/*! ./ranking.component.html */ "./src/app/ranking/ranking.component.html"),
            styles: [__webpack_require__(/*! ./ranking.component.css */ "./src/app/ranking/ranking.component.css")]
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"], _wechat_service__WEBPACK_IMPORTED_MODULE_2__["WechatService"]])
    ], RankingComponent);
    return RankingComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form input[type=\"text\"],button {\n    border-radius: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXSxidXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <div  class=\"form flex-x-center\">\n      <input id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"请输入选手姓名\" maxlength=\"5\" />\n      <button id=\"search\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i></button>\n      <button id=\"close\" class=\"btn btn-danger\" *ngIf=\"!searchClose\" (click)=\"onCloseSearch()\">\n        <i class=\"fa fa-close\"></i>\n      </button>\n    </div>\n  </div>\n</div>\n<app-alert [alertInfo]=\"alertInfo\"></app-alert>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(service) {
        this.service = service;
        this.searchClose = true;
        this.outPlayers = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resetPlayers = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.alertInfo = {
            class: "alert",
            display: false,
            text: ""
        };
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        $("#search").on("click", onSearch);
        function onSearch() {
            var nameValue = $("#name").val();
            if (nameValue === "") {
                console.log(1);
                that.alertInfo = {
                    class: "alert alert-danger",
                    display: true,
                    text: "你有未输入的内容"
                };
            }
            else {
                that.service.getPlayersOfName({ name: nameValue }).subscribe(function (v) {
                    if (v.code === 0) {
                        that.alertInfo = {
                            class: "alert alert-danger",
                            display: true,
                            text: v.msg
                        };
                    }
                    that.players = v.result;
                }, function (err) {
                    console.log(err);
                }, function () {
                    that.searchClose = false;
                    that.outPlayers.emit({ players: that.players, searchClose: that.searchClose });
                });
            }
        }
    };
    SearchComponent.prototype.onCloseSearch = function () {
        $("#name").val("");
        this.searchClose = true;
        this.resetPlayers.emit({ searchClose: this.searchClose });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SearchComponent.prototype, "outPlayers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SearchComponent.prototype, "resetPlayers", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/tabbar/tabbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/tabbar/tabbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tabbar {\n    position: absolute;\n    width: 100%;\n    height: 8%;\n    background: white;\n    left: 0;\n    bottom: 0%;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    box-shadow: grey 1px 1px 10px;\n}\n\n.tabbar-btn {\n    width:100%;\n    font-family: monospace;\n    color:gray;\n    font-weight: lighter;\n    text-align:center;\n}\n\n.border-right{\n    border-right:1px white solid;\n}\n\n.tabbar-btn-active{\n    color:#17a2b8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiYmFyL3RhYmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsY0FBYztJQUNkLDhCQUE4QjtJQUM5QixvQkFBb0I7SUFDcEIsOEJBQThCO0NBQ2pDOztBQUVEO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLDZCQUE2QjtDQUNoQzs7QUFFRDtJQUNJLGNBQWM7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC90YWJiYXIvdGFiYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiYmFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4JTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IGdyZXkgMXB4IDFweCAxMHB4O1xufVxuXG4udGFiYmFyLWJ0biB7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgIGNvbG9yOmdyYXk7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbi5ib3JkZXItcmlnaHR7XG4gICAgYm9yZGVyLXJpZ2h0OjFweCB3aGl0ZSBzb2xpZDtcbn1cblxuLnRhYmJhci1idG4tYWN0aXZle1xuICAgIGNvbG9yOiMxN2EyYjg7XG59Il19 */"

/***/ }),

/***/ "./src/app/tabbar/tabbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/tabbar/tabbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tabbar\">\n  <div class=\"tabbar-btn\" routerLink=\"/info\" routerLinkActive=\"tabbar-btn-active\">\n    <i class=\"fa fa-info\"></i><br/>\n      活动介绍\n  </div>\n  <div class=\"tabbar-btn\" routerLink=\"/ranking\" routerLinkActive=\"tabbar-btn-active\">\n    <i class=\"fa fa-sort-alpha-asc\"></i><br/>\n    当前排名\n  </div>\n  <div class=\"tabbar-btn\" routerLink=\"/join\" routerLinkActive=\"tabbar-btn-active\">\n    <i class=\"fa fa-user-plus\"></i><br/>\n    我要报名\n  </div>\n  <div class=\"tabbar-btn\" routerLink=\"{{link}}\" routerLinkActive=\"tabbar-btn-active\">\n    <i class=\"fa fa-user-circle\"></i><br/>\n    我的主页 \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/tabbar/tabbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/tabbar/tabbar.component.ts ***!
  \********************************************/
/*! exports provided: TabbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabbarComponent", function() { return TabbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _wechat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wechat.service */ "./src/app/wechat.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabbarComponent = /** @class */ (function () {
    function TabbarComponent(service, wechatService, location, router) {
        var _this = this;
        this.service = service;
        this.wechatService = wechatService;
        this.location = location;
        this.router = router;
        var subscribe = this.service.getObservableUserinfo().subscribe(function (userinfo) {
            _this.player_id = userinfo.player_id;
            _this.link = "/myinfo/" + _this.player_id;
            _this.wechatService.readyShare();
            //subscribe.unsubscribe();
            console.log("tabbar", userinfo);
        });
    }
    TabbarComponent.prototype.ngOnInit = function () {
    };
    TabbarComponent.prototype.ngAfterViewInit = function () {
    };
    TabbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabbar',
            template: __webpack_require__(/*! ./tabbar.component.html */ "./src/app/tabbar/tabbar.component.html"),
            styles: [__webpack_require__(/*! ./tabbar.component.css */ "./src/app/tabbar/tabbar.component.css")]
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"],
            _wechat_service__WEBPACK_IMPORTED_MODULE_2__["WechatService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TabbarComponent);
    return TabbarComponent;
}());



/***/ }),

/***/ "./src/app/wechat-userinfo/wechat-userinfo.component.css":
/*!***************************************************************!*\
  !*** ./src/app/wechat-userinfo/wechat-userinfo.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wechat-login{\n    background-color:white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VjaGF0LXVzZXJpbmZvL3dlY2hhdC11c2VyaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0NBQzFCIiwiZmlsZSI6InNyYy9hcHAvd2VjaGF0LXVzZXJpbmZvL3dlY2hhdC11c2VyaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlY2hhdC1sb2dpbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/wechat-userinfo/wechat-userinfo.component.html":
/*!****************************************************************!*\
  !*** ./src/app/wechat-userinfo/wechat-userinfo.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fill wechat-login\" *ngIf=\"display\"></div>"

/***/ }),

/***/ "./src/app/wechat-userinfo/wechat-userinfo.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/wechat-userinfo/wechat-userinfo.component.ts ***!
  \**************************************************************/
/*! exports provided: WechatUserinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WechatUserinfoComponent", function() { return WechatUserinfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WechatUserinfoComponent = /** @class */ (function () {
    function WechatUserinfoComponent(service) {
        this.service = service;
        this.display = true;
    }
    WechatUserinfoComponent.prototype.ngOnInit = function () {
        this.getWechatInfo();
    };
    WechatUserinfoComponent.prototype.getWechatInfo = function () {
        var that = this;
        var APPID = "wx65387cc5f1ccc0ee";
        var REDIRECT_URI = location.href;
        var SCOPE = "snsapi_userinfo";
        var STATE = (Math.random().toString(26)).substr(2, 15);
        var openid = window.localStorage.getItem("openid");
        var code = window.sessionStorage.getItem("code");
        if (openid === null) {
            if (code === null) {
                location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + APPID + "&redirect_uri=" + REDIRECT_URI + "&response_type=code&scope=" + SCOPE + "&state=" + STATE + "#wechat_redirect";
                window.sessionStorage.setItem("code", "1");
            }
            setTimeout(function () {
                window.sessionStorage.clear();
            }, 5000);
            var value = {
                url: location.href,
                scope: SCOPE
            };
            that.service.getSnsapi(JSON.stringify(value)).subscribe(function (v) {
                window.localStorage.setItem("openid", v.result.openid);
                window.localStorage.setItem("headimgurl", v.result.headimgurl);
                window.localStorage.setItem("nickname", v.result.nickname);
                that.service.saveWechatInfo({
                    openid: v.result.openid,
                    headimgurl: v.result.headimgurl,
                    nickname: v.result.nickname
                });
                next();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            that.service.saveWechatInfo({
                //openid:Math.random().toString(26).substr(2,15),    //=>dev
                openid: window.localStorage.getItem("openid"),
                headimgurl: window.localStorage.getItem("headimgurl"),
                nickname: window.localStorage.getItem("nickname")
            });
            next();
        }
        function next() {
            /* 将openid、headimgurl、nickname存入vote_fans数据库 */
            that.service.serverLogin().subscribe(function (v) {
                if (v.code === 1) { //没有这个人的记录，且加入数据库
                    var fans_id = v.result.insertId;
                    var value = {
                        fans_id: fans_id,
                        player_id: 0,
                        time: "0"
                    };
                    that.service.saveID(value);
                }
                else if (v.code === 2) { //有这个人的记录，且加入本地服务
                    that.service.saveID(v.result[0]);
                    that.player_id = v.result[0].player_id;
                    //that.link = `/myinfo/${that.player_id}`;
                }
            }, function (err) {
                console.log(err);
            }, function () {
                window.sessionStorage.setItem("login", "1");
                that.display = false;
            });
        }
    };
    WechatUserinfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wechat-userinfo',
            template: __webpack_require__(/*! ./wechat-userinfo.component.html */ "./src/app/wechat-userinfo/wechat-userinfo.component.html"),
            styles: [__webpack_require__(/*! ./wechat-userinfo.component.css */ "./src/app/wechat-userinfo/wechat-userinfo.component.css")]
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], WechatUserinfoComponent);
    return WechatUserinfoComponent;
}());



/***/ }),

/***/ "./src/app/wechat.service.ts":
/*!***********************************!*\
  !*** ./src/app/wechat.service.ts ***!
  \***********************************/
/*! exports provided: WechatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WechatService", function() { return WechatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WechatService = /** @class */ (function () {
    function WechatService() {
    }
    WechatService.prototype.OnInit = function () {
    };
    WechatService.prototype.readyShare = function () {
        var that = this;
        var defaultShareInfo = {
            title: "UVCSI超人投票",
            desc: "每个人都是超级英雄，在这里！",
            link: location.href,
            imgUrl: "http://www.jonnypeng.com/imgs/logo.png",
            success: function () {
                console.log("share is ok");
            }
        };
        var value = {
            url: location.href
        };
        $.ajax({
            url: "http://www.ulifecity.com:4001/wechat_jsdk",
            type: 'post',
            contentType: "application/json",
            data: JSON.stringify(value),
            success: function (jsons) {
                if (jsons.code !== 1) {
                    console.log(jsons.msg);
                }
                var data = jsons.result;
                console.log(data);
                wx.config({
                    debug: false,
                    appId: data.appId,
                    timestamp: data.timestamp,
                    nonceStr: data.nonceStr,
                    signature: data.signature,
                    jsApiList: [
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage'
                    ]
                });
            }
        });
    };
    WechatService.prototype.getShare = function (v) {
        if (v === void 0) { v = {
            title: "超级英雄投票DEMO",
            desc: "每个人都有无限的潜力",
            imgUrl: "https://s2.ax1x.com/2019/04/06/AW21YQ.png",
            link: "http://www.jonnypeng.com/vote/dist/info",
            success: function () {
                console.log("ok");
            }
        }; }
        wx.ready(function () {
            wx.onMenuShareAppMessage({
                title: v.title,
                desc: v.desc,
                link: v.link,
                imgUrl: v.imgUrl,
                success: v.success
            });
            wx.onMenuShareTimeline({
                title: v.title,
                desc: v.desc,
                link: v.link,
                imgUrl: v.imgUrl,
                success: v.success
            });
        });
    };
    WechatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WechatService);
    return WechatService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/IMPORTANT/html/ulifecity.com/var/www/node/vote/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map