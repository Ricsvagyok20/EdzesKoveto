import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovementsComponent } from './movements.component';
import { MovementsRoutingModule } from './movements-routing.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    MovementsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MovementsRoutingModule
  ]
})
export class MovementsModule { }
