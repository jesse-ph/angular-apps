import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { DropdownDirective } from './dropdown.directive';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [AlertComponent, DropdownDirective, LoadingSpinnerComponent],
  imports: [CommonModule],
  exports: [AlertComponent, DropdownDirective, LoadingSpinnerComponent, CommonModule],
  entryComponents: [AlertComponent]
})
export class SharedModule {}
