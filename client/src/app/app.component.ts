import { Component } from '@angular/core';
import { NbAuthService, NbAuthToken } from '@nebular/auth';
import { NbMenuItem } from '@nebular/theme';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user: any;
  items: NbMenuItem[] = [
    { title: 'Profile', link: 'profile' },
    { title: 'Log out', link: 'auth/logout' },
  ];
  isAuthenticated?: boolean;

  constructor(private authService: NbAuthService) {
    this.authService
      .onAuthenticationChange()
      .subscribe((authenticated: boolean) => {
        if (authenticated) {
          this.isAuthenticated = true;
          this.authService.getToken().subscribe((token: NbAuthToken) => {
            this.user = token.getPayload();
          });
        } else this.isAuthenticated = false;
      });
  }

  // this.isAuthenticated$ = this.authService.isAuthenticated();
}
