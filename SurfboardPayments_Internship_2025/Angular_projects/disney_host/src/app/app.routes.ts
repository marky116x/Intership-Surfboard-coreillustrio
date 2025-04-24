import { Routes } from '@angular/router';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { WatchlistComponent } from './pages/watchlist/watchlist.component';
import { OrignalsComponent } from './pages/orignals/orignals.component';
// import { LoginComponent } from './landing-page/login/login.component';
// import { SignupComponent } from './landing-page/signup/signup.component';

export const routes: Routes  = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'movie/:id', component: MovieDetailComponent },
    { path: 'watchlist', component: WatchlistComponent },
    {path:'orignals',component:OrignalsComponent},



    // { path: 'login', component: LoginComponent },
    // { path: 'signup', component: SignupComponent },
 
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' },

  ];
