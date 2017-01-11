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
var core_1 = require("@angular/core");
var AngularXDataTableComponent = (function () {
    function AngularXDataTableComponent() {
        this.message = "Click Me ...";
    }
    AngularXDataTableComponent.prototype.onClick = function () {
        this.message = "Hello World!";
        console.log(this.message);
    };
    return AngularXDataTableComponent;
}());
AngularXDataTableComponent = __decorate([
    core_1.Component({
        selector: 'angular-x-data-table',
        styleUrls: ['angular-x-data-table.component.css'],
        templateUrl: 'angular-x-data-table.component.html'
    }),
    __metadata("design:paramtypes", [])
], AngularXDataTableComponent);
exports.AngularXDataTableComponent = AngularXDataTableComponent;
