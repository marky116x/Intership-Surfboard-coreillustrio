import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  template: `
<div class="flex flex-col md:flex-row min-h-screen min-w-screen justify-center bg-gradient-to-b from-[#0c0c24] via-[#0b0b3b] to-[#020024] text-white">
  <div class="w-full max-w-md px-6 py-12">
    <h2 class="text-3xl md:text-5xl font-bold text-blue-400 mb-8 flex items-center">
      Create Account <span class="ml-3">✨</span>
    </h2>

    <form [formGroup]="signupForm" (ngSubmit)="onSubmit()" class="space-y-5">
      <div>
        <label class="block text-gray-200 mb-2" for="email">Email</label>
        <input
          type="email"
          id="email"
          formControlName="email"
          placeholder="Enter your email"
          class="w-full px-4 py-3 bg-[#1a1a3d] border border-[#2e2e80] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        @if (signupForm.get('email')?.invalid && signupForm.get('email')?.touched) {
          <div class="text-red-400 text-xs mt-1">
            @if (signupForm.get('email')?.errors?.['required']) {
              <span>Email is required</span>
            }
            @if (signupForm.get('email')?.errors?.['email']) {
              <span>Please enter a valid email</span>
            }
          </div>
        }
      </div>
    
      <div>
        <label class="block text-gray-200 mb-2" for="password">Password</label>
        <input
          type="password"
          id="password"
          formControlName="password"
          placeholder="At least 8 characters"
          class="w-full px-4 py-3 bg-[#1a1a3d] border border-[#2e2e80] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        @if (signupForm.get('password')?.invalid && signupForm.get('password')?.touched) {
          <div class="text-red-400 text-xs mt-1">
            @if (signupForm.get('password')?.errors?.['required']) {
              <span>Password is required</span>
            }
            @if (signupForm.get('password')?.errors?.['minlength']) {
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
    
      <button
        type="submit"
        [disabled]="signupForm.invalid || loading"
        class="w-full bg-blue-600 hover:bg-blue-800 text-white py-3 rounded-lg transition duration-100 shadow-lg disabled:opacity-50"
      >
        @if (loading) {
          <span>Creating account...</span>
        } @else {
          <span>Sign Up</span>
        }
      </button>
    
      <p class="text-center text-sm text-gray-400 mt-6">
        Already have an account?
        <a routerLink="/login" class="text-blue-400 hover:underline hover:text-blue-500 ml-1">
          Sign in
        </a>
      </p>
    </form>
  </div>
</div>
`,
})
export class SignupComponent {
  auth = inject(AuthService);
  router = inject(Router);
  
  loading = false;
  errorMessage = '';

  signupForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  async onSubmit() {
    if (this.signupForm.valid) {
      this.loading = true;
      this.errorMessage = '';
      
      try {
        await this.auth.register(this.signupForm.value.email, this.signupForm.value.password);
        console.log('Signup Successful....Hoorayy!!!');
        this.router.navigate(['/login']);
      } catch (error: any) {
        console.error('Signup failed', error);
        // Handle common Firebase auth errors
        if (error.code === 'auth/email-already-in-use') {
          this.errorMessage = 'This email is already in use. Please try another one.';
        } else if (error.code === 'auth/weak-password') {
          this.errorMessage = 'Password is too weak. Please choose a stronger password.';
        } else {
          this.errorMessage = 'Signup failed. Please try again.';
        }
      } finally {
        this.loading = false;
      }
    } else {
      this.signupForm.markAllAsTouched();
    }
  }
}