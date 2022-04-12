import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  NbAuthResult,
  NbAuthService,
  NbLoginComponent,
  NB_AUTH_OPTIONS,
} from '@nebular/auth';
import { take } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent extends NbLoginComponent {
  constructor(
    service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) options = {},
    cd: ChangeDetectorRef,
    router: Router
  ) {
    super(service, options, cd, router);
  }

  loginWithGoogle() {
    this.service
      .authenticate('google')
      .pipe(take(1))
      .subscribe((authResult: NbAuthResult) => {
        if (authResult.isSuccess()) {
          this.router.navigate(['profile']);
        }
      });
  }
}
