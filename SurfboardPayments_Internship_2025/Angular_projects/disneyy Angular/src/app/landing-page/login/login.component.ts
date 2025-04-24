import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
 

@Component({

  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterModule ],
  template: `
  <div class="flex flex-col md:flex-row min-h-screen bg-gradient-to-b from-[#0f0f25] via-[#0a0a3c] to-[#05051e] text-white">
  <!-- Left Side: Form -->
  <div class="w-full md:w-1/2 flex items-center justify-center px-6 py-12">
    <div class="w-full max-w-md">
      <h2 class="text-3xl md:text-2xl font-bold text-blue-400 mb-8 flex items-center">
        Welcome Back to Markyverse<span class="ml-3">👋</span>
      </h2>

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
        </div>

        <!-- Forgot Password -->
        <div class="flex justify-end">
          <a
            routerLink="login"
            class="text-sm text-blue-400 hover:underline hover:text-blue-500"
            >Forgot Password?</a
          >
        </div>

        <!-- Sign In Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-800 text-white py-3 rounded-lg transition duration-100 shadow-lg  "
        >
          Sign In
        </button>

        <!-- Signup Link -->
        <p class="text-center text-sm text-gray-400 mt-6">
          Don’t have an account?
          <button (click)="signup()"  class="text-blue-400 hover:underline hover:text-blue-500 ml-1">
            Sign up
          </button>
        </p>
      </form>
    </div>
  </div>

  <!-- Right Side: Image -->
  <div class="w-full md:w-1/2 h-screen hidden md:block">
    <img
      src="forestss.jpg"
      alt="Disney Raya Background"
      class="w-full h-full object-cover  "
    />
  </div>
</div>

  `,
  
})
export class LoginComponent {
  auth = inject(AuthService);
  route = inject(Router);

  signup() {
    this.route.navigate(['/signup']);
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  ngOnInit() {
    console.log(this.auth.getCurrentUser());
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login Successful....Hoorayy!!!');


      await this.auth.login(this.loginForm.value.email, this.loginForm.value.password);


      this.route.navigate(['/home']);
    } else { 
      console.log('Login Un-Successful .....!');
    }
  }
}
