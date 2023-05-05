import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutRoutingModule } from './workout-routing.module';
import { WorkoutComponent } from './workout.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    WorkoutComponent
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
