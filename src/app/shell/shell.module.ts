import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellComponent } from './shell.component';


@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule
  ],
  exports:[ShellComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShellModule { }
