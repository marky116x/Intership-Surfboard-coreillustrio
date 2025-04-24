import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginComponent } from '../login/login.component';
 

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  
})
export class SignupComponent {
  auth = inject(AuthService);
  route = inject(Router);

  signupForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  ngOnInit() {
    console.log(this.auth.getCurrentUser());
  }

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
