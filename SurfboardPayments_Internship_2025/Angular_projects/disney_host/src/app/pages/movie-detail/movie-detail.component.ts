
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { WatchlistService } from '../../services/watchlist.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'app-movie-detail',
  imports: [CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: any;
  trailers: any[] = [];
  videos: any[] = [];
  selectedTrailerUrl: SafeResourceUrl | null = null;
  showTrailer: boolean = false;
  isLoadingTrailers: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    public watchlistService: WatchlistService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.movieService.getMovieById(id).subscribe((res: any) => {
      this.movie = res;
      this.loadTrailers(id);
      this.loadVideos(id);
    });
  }

  loadTrailers(movieId: number): void {
  this.isLoadingTrailers = true;
  this.movieService.getMovieTrailer(movieId).subscribe({
    next: (trailers: any[]) => {
      this.trailers = trailers;
      this.isLoadingTrailers = false;
    },
  });
}

  loadVideos(movieId: number): void {
    this.movieService.getMovieVideos(movieId).subscribe({
      next: (response: any) => {
        this.videos = response.results ;
      },

    });
  }


 

  selectTrailer(trailer: any): void {
    const videoUrl = `https://www.youtube.com/embed/${trailer.key}?autoplay=1&rel=0`;
    this.selectedTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
    this.showTrailer = true;
  }

  closeTrailer(): void {
    this.showTrailer = false;
    this.selectedTrailerUrl = null;
  }

  toggleWatchlist(): void {
    if (this.watchlistService.isInWatchlist(this.movie.id)) {
      this.watchlistService.removeFromWatchlist(this.movie.id);
    } else {
      this.watchlistService.addToWatchlist(this.movie);
    }
  }

  isInWatchlist(): boolean {
    return this.watchlistService.isInWatchlist(this.movie?.id);
  }

  getImageUrl(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  // For high quality backdrop
  getHighQualityImageUrl(path: string): string {
    return `https://image.tmdb.org/t/p/original${path}`;
  }

  getFormattedDate(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  getVideoType(type: string): string {
    return type.charAt(0).toUpperCase() + type.slice(1);
  }
}
