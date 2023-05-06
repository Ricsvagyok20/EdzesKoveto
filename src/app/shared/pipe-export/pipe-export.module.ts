import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeExportComponent } from './pipe-export.component';
import { KcalKJPipe } from '../pipes/kcal-k-j.pipe';


@NgModule({
  declarations: [
    PipeExportComponent,
    KcalKJPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    KcalKJPipe
  ]
})
export class PipeExportModule { }
