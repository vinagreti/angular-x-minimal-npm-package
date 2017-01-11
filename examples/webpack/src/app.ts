import 'zone.js/dist/zone';
import 'reflect-metadata';

import { NgModule, Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { AngularXMinimalNpmPackageModule } from 'angular-x-minimal-npm-package/';
import { HttpModule } from '@angular/http';

@Component({
    selector: 'app',
    template: `<div>
                   <angular-x-minimal-npm-package></angular-x-minimal-npm-package>
               </div>`
})
export class App {

    message = "";

    onKeyUp(input) {
        this.message = input.value;
    }

}

@NgModule({
  bootstrap: [
    App
  ],
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularXMinimalNpmPackageModule,
  ],
  providers: [
  ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
