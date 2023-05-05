import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalorieCounterComponent } from './calorie-counter.component';

const routes: Routes = [{ path: '', component: CalorieCounterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalorieCounterRoutingModule { }
