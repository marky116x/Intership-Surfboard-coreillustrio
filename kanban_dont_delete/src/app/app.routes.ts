import { Routes } from '@angular/router';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { LoginComponent } from './landpage/login/login.component';
import { SignupComponent } from './landpage/signup/signup.component';

export const routes: Routes = [



    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
   
    { path: 'home', component: MainViewComponent },






    
];
