import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutRoutingModule } from './workout-routing.module';
import { WorkoutComponent } from './workout.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MovementsModule } from './movements/movements.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { PipeExportModule } from '../../shared/pipe-export/pipe-export.module';

@NgModule({
  declarations: [
    WorkoutComponent
  ],
  imports: [
    CommonModule,
    WorkoutRoutingModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    PipeExportModule
  ]
})
export class WorkoutModule { }
