import {Component} from '@angular/core';
@Component({
    selector: 'angular-x-minimal-npm-package',
    styles: [`h1{
	color: red;
}`],
    template:'<div><h1 (click)="onClick()">{{message}}</h1></div>'
})
export class AngularXMinimalNpmPackageComponent {
    message = "Click Me ...";
    onClick() {
        this.message = "Angular 2+ Minimal NPM Package. With external scss and html!";
    }
}
