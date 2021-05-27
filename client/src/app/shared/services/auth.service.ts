import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData.uid));
        this.SetUserData(this.userData);
        console.log('Logged in...');
      } else {
        console.log('Logged out...');
        localStorage.removeItem('user');
      }
    });
  }

  // Returns true when user is logged in
  get isLoggedIn(): boolean {
    return localStorage.getItem('user') ? true : false;
  }

  // Signs out the authenticated user
  signOut() {
    this.afAuth.signOut();
    this.router.navigate(['login']);
    localStorage.removeItem('user');
  }

  // Setting up user data in Firestore database
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
}
