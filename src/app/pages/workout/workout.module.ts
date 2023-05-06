import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutRoutingModule } from './workout-routing.module';
import { WorkoutComponent } from './workout.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MovementsModule } from './movements/movements.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { KcalKJPipe } from 'src/app/shared/pipes/kcal-k-j.pipe';

@NgModule({
  declarations: [
    WorkoutComponent,
    KcalKJPipe
  ],
  imports: [
    CommonModule,
    WorkoutRoutingModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule
  ]
})
export class WorkoutModule { }
