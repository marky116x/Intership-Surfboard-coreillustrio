import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "firelearn-ad223", appId: "1:971112786983:web:f813c892ed450d6e707202", storageBucket: "firelearn-ad223.firebasestorage.app", apiKey: "AIzaSyD6NyBnFMAhV2LeWeckXIrwfvanvkR9Gl0", authDomain: "firelearn-ad223.firebaseapp.com", messagingSenderId: "971112786983" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
