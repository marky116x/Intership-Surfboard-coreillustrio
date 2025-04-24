import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
 

@Component({

  selector: 'app-login',
  imports: [ReactiveFormsModule, ],
  templateUrl: './login.component.html',
  
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
