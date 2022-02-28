import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import {
  NbAuthJWTToken,
  NbAuthResult,
  NbAuthService,
  NbRegisterComponent,
  NB_AUTH_OPTIONS,
} from '@nebular/auth';
import { take } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
})
export class RegisterComponent extends NbRegisterComponent {
  constructor(
    service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) options = {},
    cd: ChangeDetectorRef,
    router: Router,
    private firestore: AngularFirestore
  ) {
    super(service, options, cd, router);
    this.service.onTokenChange().subscribe((token) => {
      if (token.isValid()) {
        const user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
        console.log(user);
        this.SetUserData(user);
      }
    });
  }

  loginWithGoogle() {
    this.service
      .authenticate('google')
      .pipe(take(1))
      .subscribe((authResult: NbAuthResult) => {
        if (authResult.isSuccess()) {
          // Create new user in firestore
          this.router.navigate(['profile']);
        }
      });
  }

  // Setting up user data in Firestore database
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(
      `users/${user.user_id}`
    );
    const userData = {
      uid: user.user_id,
      email: user.email,
      displayName: user.name,
      photoURL: user.picture,
      emailVerified: user.email_verified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
}
