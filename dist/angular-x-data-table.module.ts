import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';

import { AngularXDataTableComponent } from './angular-x-data-table.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ AngularXDataTableComponent ],
  exports:  [ AngularXDataTableComponent ],
  entryComponents: [ AngularXDataTableComponent ],
})
export class AngularXDataTableModule {}
