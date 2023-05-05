import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalorieCounterRoutingModule } from './calorie-counter-routing.module';
import { CalorieCounterComponent } from './calorie-counter.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    CalorieCounterComponent
  ],
  imports: [
    CommonModule,
    CalorieCounterRoutingModule,
    MatCardModule,
    MatIconModule
  ]
})
export class CalorieCounterModule { }
