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
var common_1 = require('@angular/common');
var angular_x_data_table_component_1 = require('./angular-x-data-table.component');
var AngularXDataTableModule = (function () {
    function AngularXDataTableModule() {
    }
    AngularXDataTableModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [angular_x_data_table_component_1.AngularXDataTableComponent],
            exports: [angular_x_data_table_component_1.AngularXDataTableComponent],
            entryComponents: [angular_x_data_table_component_1.AngularXDataTableComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AngularXDataTableModule);
    return AngularXDataTableModule;
}());
exports.AngularXDataTableModule = AngularXDataTableModule;
//# sourceMappingURL=/var/www/html/angular-x-data-table/dist/angular-x-data-table.module.js.map