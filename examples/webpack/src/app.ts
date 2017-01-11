import 'zone.js/dist/zone';
import 'reflect-metadata';

import { NgModule, Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { AngularXDataTableModule } from 'angular-x-data-table/';
import { HttpModule } from '@angular/http';

@Component({
    selector: 'app',
    template: `<div>
                   <input (keyup)="onKeyUp(input)" #input placeholder="Type Here">
                   {{message}}
                   <hr>
                   Hello world => <angular-x-data-table></angular-x-data-table>
                   <hr>
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
    AngularXDataTableModule,
  ],
  providers: [
  ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
