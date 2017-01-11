import {Component} from '@angular/core';

@Component({
    selector: 'angular-x-data-table',
    styleUrls: ['./angular-x-data-table.component.scss'],
    templateUrl: './angular-x-data-table.component.html'
})
export class AngularXDataTableComponent {

    message = "Click Me ...";

    onClick() {
        this.message = "Hello World!";
        console.log(this.message);
    }

}
