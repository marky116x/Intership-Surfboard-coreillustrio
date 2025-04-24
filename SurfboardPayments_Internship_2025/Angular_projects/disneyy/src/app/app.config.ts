import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

import { environment } from '../environment/environment';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()), provideFirebaseApp(() => initializeApp({ projectId: "my-lo-disney", appId: "1:834371213020:web:6f6c94e74edb29bb280619", storageBucket: "my-lo-disney.firebasestorage.app", apiKey: "AIzaSyCD7qa_Z4PMskLZTRkI41neeCDswyC4uZQ", authDomain: "my-lo-disney.firebaseapp.com", messagingSenderId: "834371213020" })), provideAuth(() => getAuth())
  ]
};
