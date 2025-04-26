import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
   
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  template: `
  <div class="flex flex-col md:flex-row min-h-screen bg-gradient-to-b from-[#0f0f25] via-[#0a0a3c] to-[#05051e] text-white">
  <!-- Left Side: Form -->
  <div class="w-full md:w-1/2 flex items-center justify-center px-6 py-12">
    <div class="w-full max-w-md">
      <h2 class="text-3xl md:text-5xl font-bold text-blue-400 mb-8 flex items-center">
        Welcome Back.  <span class="ml-3">👋</span>
      </h2>
      <h1 class="text-xl font-bold text-[#c2cf4d] mb-8 flex items-center">to Marky's Kanban Board.</h1>

      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-6">
        <!-- Email Field -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
          <input
            type="email"
            id="email"
            formControlName="email"
            placeholder="Enter your email"
            class="w-full px-4 py-3 bg-[#1a1a3d] border border-[#2e2e80] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          @if (loginForm.get('email')?.invalid && loginForm.get('email')?.touched) {
            <div class="text-red-400 text-xs mt-1">
              @if (loginForm.get('email')?.errors?.['required']) {
                <span>Email is required</span>
              }
              @if (loginForm.get('email')?.errors?.['email']) {
                <span>Please enter a valid email</span>
              }
            </div>
          }
        </div>

        <!-- Password Field -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-300 mb-2">Password</label>
          <input
            type="password"
            id="password"
            formControlName="password"
            placeholder="At least 8 characters"
            class="w-full px-4 py-3 bg-[#1a1a3d] border border-[#2e2e80] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          @if (loginForm.get('password')?.invalid && loginForm.get('password')?.touched) {
            <div class="text-red-400 text-xs mt-1">
              @if (loginForm.get('password')?.errors?.['required']) {
                <span>Password is required</span>
              }
              @if (loginForm.get('password')?.errors?.['minlength']) {
                <span>Password must be at least 8 characters</span>
              }
            </div>
          }
        </div>

        <!-- Error messages -->
        @if (errorMessage) {
          <div class="bg-red-500 bg-opacity-20 border border-red-500 text-red-100 px-4 py-2 rounded">
            {{ errorMessage }}
          </div>
        }

        <!-- Forgot Password -->
        <div class="flex justify-end"
          
            routerLink="/forgot-password"
            class="text-sm text-blue-400 hover:underline hover:text-blue-500"
           >Forgot Password?
        </div>

        <!-- Sign In Button -->
        <button
          type="submit"
          [disabled]="loginForm.invalid || loading"
          class="w-full bg-blue-600 hover:bg-blue-800 text-white py-3 rounded-lg transition duration-100 shadow-lg disabled:opacity-50"
        >
          @if (loading) {
            <span>Signing in...</span>
          } @else {
            <span>Sign In</span>
          }
        </button>

        <!-- Signup Link -->
        <p class="text-center text-sm text-gray-400 mt-6">
          Don't have an account?
          <a routerLink="/signup" class="text-blue-400 hover:underline hover:text-blue-500 ml-1">
            Sign up
          </a>
        </p>
      </form>
    </div>
  </div>

  <!-- Right Side: Image -->
  <div class="w-full md:w-1/2 h-screen hidden md:block">
    <img
      src="forest.jpg"
      alt="Disney Raya Background"
      class="w-full h-full object-cover"
    />
  </div>
</div>
  `,
})
export class LoginComponent {
  auth = inject(AuthService);
  router = inject(Router);
  
  loading = false;
  errorMessage = '';

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  async onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.errorMessage = '';
      
      try {
        await this.auth.login(this.loginForm.value.email, this.loginForm.value.password);
        console.log('Login Successful....Hoorayy!!!');
        this.router.navigate(['/home']);
      } catch (error: any) {
        console.error('Login failed', error);
        // Handle common Firebase auth errors
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
          this.errorMessage = 'Invalid email or password. Please try again.';
        } else if (error.code === 'auth/too-many-requests') {
          this.errorMessage = 'Too many failed login attempts. Please try again later.';
        } else {
          this.errorMessage = 'Login failed. Please try again.';
        }
      } finally {
        this.loading = false;
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}