import { Routes } from '@angular/router';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { WatchlistComponent } from './pages/watchlist/watchlist.component';
import { OrignalsComponent } from './pages/orignals/orignals.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SeriesComponent } from './pages/series/series.component';

import { SignupComponent } from './landing-page/signup/signup.component';
import { LoginComponent } from './landing-page/login/login.component';
import { authGuard, loginGuard } from './services/authg.guard';
import { ProfileComponent } from './landing-page/profile/profile.component';

export const routes: Routes = [
  // { path: '', component: HomeComponent },

  // { path: 'home', component: HomeComponent },

  { path: 'movie/:id', component: MovieDetailComponent },

  { path: 'watchlist', component: WatchlistComponent },
  { path: 'orignals', component: OrignalsComponent },

  { path: 'movies', component: MoviesComponent },
  { path: 'series', component: SeriesComponent },

  { 
    path: 'login', 
    component: LoginComponent,
    canActivate: [loginGuard] // Prevents logged-in users from accessing login
  },
  { 
    path: 'signup', 
    component: SignupComponent,
    canActivate: [loginGuard] // Prevents logged-in users from accessing signup
  },
  { 
    path: 'home', 
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    canActivate: [authGuard] // Protects the home route
  },

  {path:'profile', component:ProfileComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }

  
];
