import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { RouterModule } from '@angular/router';
import { MovieRowComponent } from '../../components/movie-row/movie-row.component';
import { MovieService } from '../../services/movie.service';
import { HeroComponent } from "../../components/hero/hero.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, RouterModule, MovieRowComponent, HeroComponent, FooterComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public movieService: MovieService) {}

}
