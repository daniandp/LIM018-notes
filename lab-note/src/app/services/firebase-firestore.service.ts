import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseFirestoreService {

  constructor(private firestore: Firestore, private auth: Auth) { }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
  }




}
