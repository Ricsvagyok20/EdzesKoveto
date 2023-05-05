import { Component, Input, OnInit } from '@angular/core';
import { Workout } from '../../shared/models/Workout';
import { WorkoutService } from 'src/app/shared/services/workout.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

@Input() workouts?: Array<Workout>;
@Input() images?: Array<string>;

  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.workoutService.loadWorkoutMeta().subscribe(data => {
      this.workouts = data;
    });
    if(this.workouts != undefined){
      for(let i = 0; i < this.workouts?.length; i++){
        for(let j = 0; j < this.workouts?.length; j++){
          this.images?[i] = this.workoutService.loadImage(this.workouts[i].movements.image_url) as string;
        }
      }
      this.workoutService.loadImage
    }
  }
}
