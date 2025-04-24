import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { LoginComponent } from "./landing-page/login/login.component";
import { SignupComponent } from "./landing-page/signup/signup.component";
import { MovieListComponent } from "./components/movie-list/movie-list.component";
 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
