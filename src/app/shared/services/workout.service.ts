import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Workout } from '../models/Workout';
import { AngularFireStorage } from '@angular/fire/compat/storage'

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  collectionName = 'Workout'

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) { }

  loadWorkoutMeta(): Observable<Array<Workout>> {
    return this.afs.collection<Workout>(this.collectionName, ref => ref.orderBy('name')).valueChanges();
  }

  getWorkoutByName(name: string){
    return this.afs.collection<Workout>(this.collectionName, ref => ref.where('name', '==', name)).valueChanges();
  }
}
