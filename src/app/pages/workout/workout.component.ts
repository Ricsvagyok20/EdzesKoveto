import { Component, Input, OnInit } from '@angular/core';
import { Workout } from '../../shared/models/Workout';
import { WorkoutService } from 'src/app/shared/services/workout.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

@Input() workouts?: Array<Workout>;

  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.workoutService.loadWorkoutMeta().subscribe(data => {
      this.workouts = data;
      console.log(this.workouts);
    });
  }
}
