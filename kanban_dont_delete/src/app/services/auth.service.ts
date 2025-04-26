import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth = inject(Auth);

  async register(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      console.log('User registered successfully:', userCredential);
      return userCredential;
    } catch (error) {
      console.error('Registration error', error);
      throw error;
    }
  }

  async login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      console.log(userCredential);
      return userCredential;
    } catch (error) {
      console.error('Login error', error);
      throw error;
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
      return true;
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }

  getCurrentUser() {
    return this.auth.currentUser;
  }
}