import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../../shared/models/User';
import { Food } from '../../shared/models/Food';
import { FoodsService } from 'src/app/shared/services/foods.service';

@Component({
  selector: 'app-calorie-counter',
  templateUrl: './calorie-counter.component.html',
  styleUrls: ['./calorie-counter.component.scss']
})
export class CalorieCounterComponent implements OnInit {

  @Input() currentUser?: User;

  foods: Array<Food> = [];

  foodForm = this.createForm({
    id: '',
    user_id: '',
    name: '',
    calories: 0,
    protein: 0
  });

  constructor(
    private userService: UserService,
    private foodService: FoodsService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userService.getById(user.uid).subscribe(data => {
      this.currentUser = data;
    });
    this.foodService.getFoods().subscribe(data => {
      this.foods = data;
      console.log(this.foods);
    });
  }

  addFood(){
    const food: Food = {
      id: '',
      user_id: this.currentUser?.id,
      name: this.foodForm.get('name')?.value,
      calories: this.foodForm.get('calories')?.value,
      protein: this.foodForm.get('protein')?.value
    };
    this.foodService.create(food).then(_ => {

    }).catch(error => {
      console.log(error);
    });
  }

  deleteFood(id: string){
    this.foodService.delete(id).then(_ => {
      
    }).catch(error => {
      console.log(error);
    });
  }

  createForm(model: Food) {
    let formGroup = this.fb.group(model);
    formGroup.get('user_id')?.addValidators([Validators.required]);
    formGroup.get('name')?.addValidators([Validators.required, Validators.minLength(5)]);
    return formGroup;
  }

}
