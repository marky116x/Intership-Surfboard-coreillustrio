import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { HomeComponent } from '../home/home.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-orignals',
  templateUrl: './orignals.component.html',
  styleUrl: './orignals.component.css',
imports: [
    RouterModule
  ]
})
export class OrignalsComponent {
  movies: any[] = [];

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit() {
    this.getOrignals();
  }

  getOrignals() {
    this.movieService.getOrignals().subscribe((data: any) => {
      console.log(data);
      this.movies = data.results;
      console.log("Originals: ", data.results);

    });
  }

  getImageUrl(path: string) {
    return this.movieService.getImageUrl(path);
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  
}
