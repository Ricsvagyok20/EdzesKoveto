import { Component, Input, OnInit } from '@angular/core';
import { Workout } from '../../shared/models/Workout';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

@Input() workouts?: Array<Workout>;

  constructor() { }

  ngOnInit(): void {
    this.workouts = [ {name: "asd", movements: [{name: "asdasd", how_to: "szia", length: 5}, {name: "asdasd", how_to: "szia", length: 5}, {name: "asdasd", how_to: "szia", length: 5}], length: 20, calories_burned: 200}]
  }

}
