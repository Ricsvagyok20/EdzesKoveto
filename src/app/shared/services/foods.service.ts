import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Food } from '../models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  collectionName = "Foods";

  constructor(private afs: AngularFirestore) { }

  create(food: Food){
    food.id = this.afs.createId();
    return this.afs.collection<Food>(this.collectionName).doc(food.id).set(food);
  }

  getFoods(){
    return this.afs.collection<Food>(this.collectionName).valueChanges();
  }

  update(food: Food){
    return this.afs.collection<Food>(this.collectionName).doc(food.id).set(food);
  }

  delete(id: string){
    return this.afs.collection<Food>(this.collectionName).doc(id).delete();
  }
}
