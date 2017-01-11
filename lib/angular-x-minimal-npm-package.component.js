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
var core_1 = require('@angular/core');
var AngularXMinimalNpmPackageComponent = (function () {
    function AngularXMinimalNpmPackageComponent() {
        this.message = "Click Me ...";
    }
    AngularXMinimalNpmPackageComponent.prototype.onClick = function () {
        this.message = "Angular 2+ Minimal NPM Package. With external scss and html!";
    };
    AngularXMinimalNpmPackageComponent = __decorate([
        core_1.Component({
            selector: 'angular-x-minimal-npm-package',
            styles: ["h1{\n\tcolor: red;\n}"],
            template: '<div><h1 (click)="onClick()">{{message}}</h1></div>'
        }), 
        __metadata('design:paramtypes', [])
    ], AngularXMinimalNpmPackageComponent);
    return AngularXMinimalNpmPackageComponent;
}());
exports.AngularXMinimalNpmPackageComponent = AngularXMinimalNpmPackageComponent;
//# sourceMappingURL=/var/www/html/angular-x-minimal-npm-package/dist/angular-x-minimal-npm-package.component.js.map