import { Component, OnInit } from '@angular/core';
import { NbAuthResult, NbAuthService, NbAuthToken } from '@nebular/auth';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userToken$: Observable<NbAuthToken>;
  isAuthenticated$: Observable<boolean>;

  constructor(private authService: NbAuthService) {
    this.userToken$ = this.authService.onTokenChange();
    this.isAuthenticated$ = this.authService.onAuthenticationChange();
  }

  logout() {
    this.authService
      .logout('google')
      .pipe(take(1))
      .subscribe((authResult: NbAuthResult) => {});
  }

  loginWithGoogle() {
    this.authService
      .authenticate('google')
      .pipe(take(1))
      .subscribe((authResult: NbAuthResult) => {});
  }

  ngOnInit(): void {}
}
