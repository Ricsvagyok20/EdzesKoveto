import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Movement } from '../../../shared/models/Movement';
import { ActivatedRoute } from '@angular/router';
import { WorkoutService } from '../../../shared/services/workout.service';
import { Workout } from '../../../shared/models/Workout';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.scss']
})
export class MovementsComponent implements OnInit {

  //workouts$: Observable<Workout[]> = this.workoutService.getWorkoutByName(this.currentWorkoutName as string)
  private routeSubscription?: Subscription;
  private currentWorkoutName?: string;
  images: any = [];
  workouts?: any;
  constructor(private route: ActivatedRoute, private workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.currentWorkoutName = params["name"];
    });
    this.workoutService.getWorkoutByName(this.currentWorkoutName as string).subscribe((data: Array<Workout>) => {
      this.workouts = data;
    });
  }

  ngOnDestroy(){
    this.routeSubscription?.unsubscribe;
  }

}
