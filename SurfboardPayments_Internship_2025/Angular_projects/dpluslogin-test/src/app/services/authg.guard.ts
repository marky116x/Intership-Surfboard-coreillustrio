import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  const user = authService.getCurrentUser();
  
  if (user) {
    return true;
  } else {
    console.log('User not authenticated, redirecting to login');
    router.navigate(['/login']);
    return false;
  }
};

export const loginGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  const user = authService.getCurrentUser();
  
  if (user) {
    // If already logged in, redirect to home
    router.navigate(['/home']);
    return false;
  }
  
  return true;
};