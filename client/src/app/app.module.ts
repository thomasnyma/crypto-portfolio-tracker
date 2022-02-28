import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NbAuthModule } from '@nebular/auth';
import {
  NbFirebaseAuthModule,
  NbFirebaseGoogleStrategy,
  NbFirebasePasswordStrategy,
} from '@nebular/firebase-auth';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';

import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbIconModule,
  NbUserModule,
  NbMenuModule,
  NbContextMenuModule,
  NbButtonModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

const authConfig = {
  forms: {
    login: {
      strategy: 'password',
      rememberMe: true,
      socialLinks: [],
    },
    register: {
      strategy: 'password',
      terms: true,
      socialLinks: [],
    },
    logout: {
      strategy: 'password',
    },
    requestPassword: {
      strategy: 'password',
      socialLinks: [],
    },
    resetPassword: {
      strategy: 'password',
      socialLinks: [],
    },
    validation: {
      password: {
        required: true,
        minLength: 6,
        maxLength: 50,
      },
      email: {
        required: true,
      },
      fullName: {
        required: true,
        minLength: 4,
        maxLength: 50,
      },
    },
  },
  strategies: [
    NbFirebasePasswordStrategy.setup({
      name: 'password',
      login: {
        redirect: {
          success: 'profile',
        },
      },
      register: {
        redirect: {
          success: 'profile',
        },
      },
      logout: {
        redirect: {
          success: 'auth/login',
        },
      },
      requestPassword: {
        redirect: {
          success: 'auth/login',
        },
      },
      resetPassword: {
        redirect: {
          success: 'auth/login',
        },
      },
    }),
    NbFirebaseGoogleStrategy.setup({
      name: 'google',
    }),
  ],
};

@NgModule({
  declarations: [AppComponent, ProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NbFirebaseAuthModule,
    NbAuthModule.forRoot(authConfig),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({
      name: window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'default',
    }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbUserModule,
    NbMenuModule.forRoot(),
    NbContextMenuModule,
    NbButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
