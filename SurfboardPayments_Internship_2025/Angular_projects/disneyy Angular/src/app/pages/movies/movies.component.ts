import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  imports: [],
  template: `
   <!-- movies.component.html -->
<div class="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] p-6">
    <div class="max-w-screen-xl mx-auto">
      <!-- Section Header -->
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl sm:text-3xl font-bold text-white">
          <span class="text-[#00bfff] mr-2 cursor-pointer"  routerLink="/home">Disney+</span>
          Movies
        </h2>
        <button class="text-white text-sm hover:text-[#00bfff] transition flex items-center">
          View All <span class="ml-1">→</span>
        </button>
      </div>
      
      <!-- Movie Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        @for (movie of movies; track movie.id) {
          @if (movie.poster_path || movie.backdrop_path) {
            <div class="movie-card group relative transition duration-300 hover:scale-105 hover:z-10 bg-black bg-opacity-30 rounded-xl overflow-hidden">
              <!-- Movie Poster/Backdrop -->
              <img
                [src]="getImageUrl(movie.poster_path || movie.backdrop_path)"
                [alt]="movie.title || movie.name"
                class="rounded-xl w-full aspect-[2/3] object-cover shadow-lg group-hover:opacity-70 transition"
              />
              
              <!-- Hover Overlay -->
              <div class="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black to-transparent">
                <h3 class="text-white font-semibold tracking-wide truncate">
                  {{ movie.title || movie.name }}
                </h3>
              </div>
            </div>
          }
        }
      </div>
        </div>
  `,
  styles: ``
})
export class MoviesComponent {
  movies: any[] = [];

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getAllMovies().subscribe((data: any) => {
      console.log(data);
      this.movies = data.results;  // Store movie data in the `movies` array
      console.log("Movies: ", data.results);  // Log the movies
    });
  }
  

  getImageUrl(path: string) {
    return this.movieService.getImageUrl(path);
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  
}