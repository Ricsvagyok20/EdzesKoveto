import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Workout } from '../models/Workout';
import { AngularFireStorage } from '@angular/fire/compat/storage'

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  collectionName = 'Workout'

  constructor(private http: HttpClient, private afs: AngularFirestore, private storage: AngularFireStorage) { }

  loadWorkoutMeta(): Observable<Array<Workout>> {
    return this.afs.collection<Workout>(this.collectionName).valueChanges();
  }
  loadImage(image_url: string){
    return this.storage.ref(image_url).getDownloadURL();
  }
}
