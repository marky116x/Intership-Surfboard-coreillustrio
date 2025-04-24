import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  backgroundImageUrl: string = '';
  currentTitle: string = '';
  currentOverview: string = '';
  movies: any[] = [];
  currentIndex: number = 0;
  intervalId: any;
  router: any;
  searchControl: any;
movie: any;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    // this.movieService.getTrendingMovies().subscribe((res: any) => {
    //   this.movies = res.results;
    //   this.setMovieData();
    //   this.startSlideshow();
    // });

    

     this.movieService.getPsy().subscribe((res: any) => {
        this.movies = res.results;
        this.setMovieData();
        this.startSlideshow();
      });



  }

  setMovieData() {
    if (this.movies.length > 0) {
      const movie = this.movies[this.currentIndex];
      this.backgroundImageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
      this.currentTitle = movie.title || movie.name || 'Untitled';
      this.currentOverview = movie.overview?.slice(0, 180) + '...'; // Trim to ~180 characters
    }
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.movies.length;
    this.setMovieData();
    this.restartSlideshow();
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.movies.length) % this.movies.length;
    this.setMovieData();
    this.restartSlideshow();
  }

  startSlideshow() {
    this.intervalId = setInterval(() => this.nextImage(), 5000); // Change image every 10 seconds
  }

  restartSlideshow() {
    clearInterval(this.intervalId);
    this.startSlideshow();
  }

  // // Navigate to movie detail page
  // goToMovie(movieId: number) {
  //   this.router.navigate(['/movie', movieId]);
  //   this.searchControl.setValue('');
  // }
}
