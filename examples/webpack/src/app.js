"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require("zone.js/dist/zone");
require("reflect-metadata");
const core_1 = require("@angular/core");
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const platform_browser_1 = require("@angular/platform-browser");
const _1 = require("angular-x-data-table/");
const http_1 = require("@angular/http");
let App = class App {
    constructor() {
        this.message = "";
    }
    onKeyUp(input) {
        this.message = input.value;
    }
};
App = __decorate([
    core_1.Component({
        selector: 'app',
        template: `<div>
                   <input (keyup)="onKeyUp(input)" #input placeholder="Type Here">
                   {{message}}
                   <hr>
                   Hello world => <angular-x-data-table></angular-x-data-table>
                   <hr>
               </div>`
    }),
    __metadata("design:paramtypes", [])
], App);
exports.App = App;
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            App
        ],
        declarations: [
            App
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            _1.AngularXDataTableModule,
        ],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=app.js.map