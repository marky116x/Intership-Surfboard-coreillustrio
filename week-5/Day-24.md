# Internship Report: Firebase Authentication in Angular

## Introduction

Today my internship, I  implemented user authentication in an Angular project using Firebase in login page. The goal was to create a  registration and login system that allowed users to sign up, sign in, and navigate through different pages .

## Overview

The project involved integrating Firebase authentication into an Angular web page . Firebase provides a Baas(Backend as a service) backend solution for authentication, enabling secure user management without the need for complex backend infrastructure.

## Firebase Installation and Configuration

To set up Firebase authentication, the following steps were followed:

1. **Firebase Project Setup:**

   - Created a Firebase project at [Firebase Console](https://console.firebase.google.com/).


-The environment.ts file will contains Firebase configuration details (API key, project ID, etc.) from console.
-These settings allow the app to connect with Firebase services for authentication.

2. **Installing Firebase SDK in Angular:**

   - Installed Firebase and AngularFire:
     ```sh
     npm install firebase @angular/fire
     ```
   - Updated `src/environments/environment.ts` with Firebase configuration.
  
3. **Authentication Service (auth.service.ts):**

-Handles user registration using createUserWithEmailAndPassword().
-Manages user login via signInWithEmailAndPassword().
-Provides a method getCurrentUser() to get the currently logged-in user.



4. **Adding Firebase Modules to Angular:**

   - Imported Firebase modules in `app.config.ts`:
     ```typescript
     import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
     import { provideAuth, getAuth } from '@angular/fire/auth';
     ```
   - Configured Firebase in `app.config.ts`:
     ```typescript
({
       imports: [
         provideFirebaseApp(() => initializeApp(environment.firebase)),
         provideAuth(() => getAuth()),
       ],
     })
     ```


  Here’s your text with corrected spacing and formatting for clarity:

---

**5. Routing Setup (`app.routes.ts`):**  

- Defines routes for login (`/login`), signup (`/signup`), and home (`/home`).  
- Default route redirects users to the login page.  
- Any unknown routes are also redirected to `/login`.  

---

**6. Login Component (`login.component.ts` & `login.component.html`):**  

- Displays a login form with email and password fields.  
- Uses `AuthService` to authenticate users.  
- If login is successful, it redirects users to the home page.  
- Includes a button for navigating to the signup page.  

---

**7. Signup Component (`signup.component.ts` & `signup.component.html`):**  

- Provides a form for user registration.  
- Calls `AuthService` to register users.  
- After successful registration, redirects users to the login page.  
- Includes a button for navigating to the login page.  

---
🚀

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

## Learnings:

- **Understanding Firebase:** Gained hands-on experience integrating Firebase authentication in an Angular project.

- **Angular Forms:** Worked with `ReactiveFormsModule` for form validation and data binding.

- **Routing in Angular:** Configured routes to manage user navigation dynamically.
- here are two ways:

   1.Put the route in HTML using routerLink.
   2. Define the route in a .ts file as an injectable function.



## Conclusion

This project provided  experience in implementing authentication using Firebase in an Angular application & how a login page works. 
It improved my understanding of Angular services, authentication flow, and routing for building secure web applications.
