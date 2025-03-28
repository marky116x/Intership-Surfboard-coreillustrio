# Internship Report: Firebase Authentication in Angular

## Introduction

Today my internship, I  implemented user authentication in an Angular project using Firebase in login page. The goal was to create a  registration and login system that allowed users to sign up, sign in, and navigate through different pages .

## Overview

The project involved integrating Firebase authentication into an Angular web page . Firebase provides a Baas(Backend as a service) backend solution for authentication, enabling secure user management without the need for complex backend infrastructure.

## Firebase Installation and Configuration

To set up Firebase authentication, the following steps were followed:

1. **Firebase Project Setup:**

   - Created a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Added a new web app to generate the Firebase configuration.

2. **Installing Firebase SDK in Angular:**

   - Installed Firebase and AngularFire:
     ```sh
     npm install firebase @angular/fire
     ```
   - Updated `src/environments/environment.ts` with Firebase configuration.

3. **Adding Firebase Modules to Angular:**

   - Imported Firebase modules in `app.module.ts`:
     ```typescript
     import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
     import { provideAuth, getAuth } from '@angular/fire/auth';
     ```
   - Configured Firebase in `app.module.ts`:
     ```typescript
     @NgModule({
       imports: [
         provideFirebaseApp(() => initializeApp(environment.firebase)),
         provideAuth(() => getAuth()),
       ],
     })
     ```

## User Registration and Authentication

### **1. Creating the Authentication Service**

A dedicated `AuthService` was implemented to handle Firebase authentication operations.

```typescript
import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  auth = inject(Auth);

  async register(email: string, password: string) {
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }

  async login(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }
}
```

### **2. Implementing User Registration**

The registration page (`signup.component.ts`) includes a form that captures user details and registers them using Firebase authentication.

```typescript
async onSubmit() {
  if (this.signupForm.valid) {
    await this.auth.register(this.signupForm.value.email, this.signupForm.value.password);
    this.route.navigate(['/login']);
  }
}
```

### **3. Implementing User Login**

The login component (`login.component.ts`) verifies user credentials and navigates them to the home page upon successful authentication.

```typescript
async onSubmit() {
  if (this.loginForm.valid) {
    await this.auth.login(this.loginForm.value.email, this.loginForm.value.password);
    this.route.navigate(['/home']);
  }
}
```

## Routing and Navigation

Routing was configured in `app.routes.ts` to ensure users can navigate between login, signup, and home pages.

```typescript
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];
```

## Learnings and Key Takeaways

- **Understanding Firebase:** Gained hands-on experience integrating Firebase authentication in an Angular project.

- **Angular Forms:** Worked with `ReactiveFormsModule` for form validation and data binding.

- **Routing in Angular:** Configured routes to manage user navigation dynamically.



## Conclusion

This internship project provided valuable experience in implementing authentication using Firebase in an Angular application. It improved my understanding of Angular services, authentication flow, and best practices for building secure web applications.

