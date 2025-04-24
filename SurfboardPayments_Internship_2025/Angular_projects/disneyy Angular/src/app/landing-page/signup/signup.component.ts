import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
 
 

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  template: `
<div class="flex flex-col md:flex-row min-h-screen min-w-screen justify-center bg-gradient-to-b from-[#0c0c24] via-[#0b0b3b] to-[#020024] text-white">

    <form [formGroup]="signupForm" (ngSubmit)="onSubmit()" class="space-y-5 mt-40">
      <div>
        <label class="block text-gray-200 mb-2" for="email">Email</label>
        <input
          type="email"
          id="email"
          formControlName="email"
          placeholder="Enter your email"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50 text-black"
        />
      </div>
    
      <div>
        <label class="block text-gray-200 mb-2" for="password"
          >Password</label
        >
        <input
          type="password"
          id="password"
          formControlName="password"
          placeholder="At least 8 characters"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50 text-black"
        />
      </div>
    
      <div class="flex justify-end">
        <a
          href="#"
          routerLink="login"
          class="text-sm text-blue-700 hover:underline"
          >Forgot Password?</a
        >
      </div>
    
      <button
        type="submit"
        class="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out"
      >
        Sign Up
      </button>
    
      <p class="text-center text-sm text-gray-600 mt-4">
      Have an account?
        <button routerLink="/login" class="text-blue-500 hover:underline">
          Login
        </button>
      </p>
    </form>
  </div>
`,
  
})
export class SignupComponent {
  auth = inject(AuthService);
  route = inject(Router);

  signupForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  // ngOnInit() {
  //   console.log(this.auth.getCurrentUser());
  // }

  async onSubmit() {
    if (this.signupForm.valid) {
      console.log('Signup Successful....Hoorayy!!!');
      await this.auth.register(this.signupForm.value.email, this.signupForm.value.password);
      this.route.navigate(['/login']);
    } else {
      console.log('Signup Un-Successful .....!');
    }
  }
}