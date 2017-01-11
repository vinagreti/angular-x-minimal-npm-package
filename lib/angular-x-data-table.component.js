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
var AngularXDataTableComponent = (function () {
    function AngularXDataTableComponent() {
        this.message = "Click Me ...";
    }
    AngularXDataTableComponent.prototype.onClick = function () {
        this.message = "Hello World!";
        console.log(this.message);
    };
    AngularXDataTableComponent = __decorate([
        core_1.Component({
            selector: 'angular-x-data-table',
            styles: ["/* DEFAULT COLORS */\n$text-light: white;\n$text-dark: #484848;\n$selected-color: blue;\n$red-color: red;\n$yellow-color: yellow;\n\n/* DEFAULT STYLES */\nmd-list{\n\t@include list-default;\n}\n\ntable{\n\tborder-collapse: collapse;\n\twidth: 100%;\n\n\ta{\n\t\ttext-decoration: none;\n\t}\n\n\tmd-icon.checkin_received{\n\t\tcolor: $selected-color;\n\t}\n\tmd-icon.checkin_rejected{\n\t\tcolor: $red-color;\n\t}\n\n\t.nowrap{\n\t\twhite-space: nowrap;\n\t}\n\n\t.fit-text{\n\t\twidth: 1px;\n\t\ttext-align: left;\n\t}\n\n\t.processed-icon{\n\t\tcolor: $yellow-color;\n\t}\n\n\tthead{\n\t\tbackground-color: $selected-color;\n\t\tcolor: $text-light;\n\t\ta{\n\t\t\tcolor: $text-light;\n\t\t}\n\n\t\ttr{\n\t\t\theight: 50px;\n\t\t}\n\t}\n\n\ttd, th{\n\t\tpadding: 0px 6px;\n\t}\n\n\ttbody{\n\t\tcolor: $text-dark;\n\t\ta{\n\t\t\tcolor: $selected-color;\n\t\t\tfont-weight: 800;\n\t\t}\n\n\t\ttr{\n\t\t\tfont-size: 12px;\n\t\t\t&:hover{\n\t\t\t\tbackground-color: rgba($selected-color, 0.2);\n\t\t\t}\n\n\t\t\t&:nth-child(even) {\n\t\t\t\tbackground-color: rgba($selected-color, 0.1);\n\n\t\t\t\t&:hover{\n\t\t\t\t\tbackground-color: rgba($selected-color, 0.2);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\n\t/deep/ md-checkbox .md-checkbox-inner-container{\n\t\tmargin: 4px 0px 0px 0px;\n\t}\n}"],
            template: '<div>With external scss and html<h1 (click)="onClick()">{{message}}</h1></div>'
        }), 
        __metadata('design:paramtypes', [])
    ], AngularXDataTableComponent);
    return AngularXDataTableComponent;
}());
exports.AngularXDataTableComponent = AngularXDataTableComponent;
//# sourceMappingURL=/var/www/html/angular-x-data-table/dist/angular-x-data-table.component.js.map