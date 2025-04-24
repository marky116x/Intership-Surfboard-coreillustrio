import { Routes } from '@angular/router';
import { LoginComponent } from './landing-page/login/login.component';
import { SignupComponent } from './landing-page/signup/signup.component';
import { authGuard, loginGuard } from './services/authg.guard';

export const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent,
    // canActivate: [loginGuard] // Prevents logged-in users from accessing login
  },
  { 
    path: 'signup', 
    component: SignupComponent,
    // canActivate: [loginGuard] // Prevents logged-in users from accessing signup
  },
  { 
    path: 'home', 
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
    // canActivate: [authGuard] // Protects the home route
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];