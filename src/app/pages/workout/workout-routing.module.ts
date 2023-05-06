import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutComponent } from './workout.component';
import { MovementsComponent } from './movements/movements.component';

const routes: Routes = [
  { path: '', component: WorkoutComponent },
  { path: ':name', component: MovementsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutRoutingModule { }
