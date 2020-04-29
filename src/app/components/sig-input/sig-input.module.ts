import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigInputComponent } from './sig-input.component';



@NgModule({
  declarations: [SigInputComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SigInputComponent
  ]
})
export class SigInputModule { }
