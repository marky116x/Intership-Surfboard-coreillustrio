html.

<div class="relative min-h-screen text-white font-thin">
  @if (movie) {
    <!-- Fullscreen Blurred Background -->
    <img
      [src]="getHighQualityImageUrl(movie.backdrop_path)"
      alt="Backdrop"
      class="fixed top-0 left-0 w-full h-full object-cover blur-sm brightness-50 z-0"
    />

    <!-- Trailer Modal -->
    @if (showTrailer && selectedTrailerUrl) {
      <div class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
        <div class="relative w-full max-w-5xl">
          <button 
            (click)="closeTrailer()" 
            class="absolute -top-10 right-0 text-white hover:text-yellow-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div class="aspect-w-16 aspect-h-9">
            <iframe 
              [src]="selectedTrailerUrl"
              class="w-full h-full"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    }

    <!-- Foreground Content -->
    <div class="relative z-10 flex flex-col items-center min-h-screen px-4 py-8 md:px-10">
      <div class="flex flex-col md:flex-row bg-black/60 backdrop-blur-sm rounded-3xl shadow-2xl max-w-6xl w-full overflow-hidden p-4 md:p-6">
        
        <!-- Poster Image -->
        <div class="flex-shrink-0 w-full md:w-[280px] h-[400px] md:h-auto">
          <img
            [src]="getImageUrl(movie.poster_path)"
            alt="{{ movie.title }}"
            class="w-full h-full object-cover rounded-xl md:rounded-l-xl"
          />
        </div>

        <!-- Movie Details -->
        <div class="p-6 md:p-8 flex flex-col justify-center space-y-4 text-center md:text-left">
          <h1 class="text-3xl md:text-5xl font-bold leading-tight">{{ movie.title }}</h1>
          @if (movie.tagline) {
            <p class="text-lg italic text-gray-300">{{ movie.tagline }}</p>
          }

          <div class="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-300">
            <span class="text-yellow-400 font-semibold">⭐ {{ movie.vote_average.toFixed(1) }} / 10</span>
            <span>•</span>
            <span>{{ getFormattedDate(movie.release_date) }}</span>
            @if (movie.runtime) {
              <span>•</span>
              <span>{{ movie.runtime }} min</span>
            }
          </div>

          <!-- Genres -->
          @if (movie.genres?.length) {
            <div class="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
              @for (genre of movie.genres; track genre.id) {
                <span class="px-3 py-1 bg-gray-800/80 rounded-full text-xs">{{ genre.name }}</span>
              }
            </div>
          }

          <div>
            <h2 class="text-xl font-semibold mt-4 mb-2">Overview</h2>
            <p class="text-gray-200 leading-relaxed text-sm md:text-base">{{ movie.overview }}</p>
          </div>

          <!-- Action Buttons -->
          <div class="pt-4 flex flex-wrap justify-center md:justify-start gap-4">
            @if (trailers) {
              <button
                (click)="selectTrailer(trailers[0])"
                class="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition duration-300 ease-in-out flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                </svg>
                Watch Trailer
              </button>
            } @else if (isLoadingTrailers) {
              <button class="px-6 py-2 bg-gray-600 text-white font-semibold rounded-full opacity-75 cursor-not-allowed flex items-center gap-2">
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading...
              </button>
            }

            <button
              (click)="toggleWatchlist()"
              class="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full transition duration-300 ease-in-out flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                @if (watchlistService.isInWatchlist(movie.id)) {
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                } @else {
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                }
              </svg>
              {{ watchlistService.isInWatchlist(movie.id) ? 'Remove from Watchlist' : 'Add to Watchlist' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Videos Section -->
      @if (videos || trailers) {
        <div class="bg-black/60 backdrop-blur-sm rounded-3xl shadow-2xl max-w-6xl w-full overflow-hidden mt-8">
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-6">Videos & Trailers</h2>
            
            <!-- Video Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              @for (video of videos; track video.id) {
                <div 
                  class="bg-gray-900/80 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-yellow-500/20 transition-all transform hover:-translate-y-1"
                  (click)="selectTrailer(video)"
                >
                  <div class="relative aspect-video">
                    <img 
                      [src]="'https://img.youtube.com/vi/' + video.key + '/mqdefault.jpg'" 
                      alt="Video thumbnail"
                      class="w-full h-full object-cover"
                      onerror="this.src='assets/video-placeholder.jpg'; this.onerror='';"
                    />
                    <div class="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors">
                      <div class="w-12 h-12 flex items-center justify-center rounded-full bg-red-600/80 hover:bg-red-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    @if (video.type === 'Trailer') {
                      <div class="absolute top-2 right-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded-full">
                        Trailer
                      </div>
                    }
                  </div>
                  <div class="p-3">
                    <h3 class="font-medium line-clamp-1">{{ video.name }}</h3>
                    <p class="text-gray-400 text-sm">{{ getVideoType(video.type) }} • {{ video.site }}</p>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      }
    </div>
  } @else {
    <!-- Loading State -->
    <div class="fixed inset-0 flex items-center justify-center bg-black">
      <div class="flex flex-col items-center">
        <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-500 mb-4"></div>
        <p class="text-gray-300">Loading movie details...</p>
      </div>
    </div>
  }
</div>



.ts



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
        if (this.trailers.length > 0) {
          this.selectTrailer(this.trailers[0]);
        }
        this.isLoadingTrailers = false;
      },
      error: (err) => {
        console.error('Error loading trailers:', err);
        this.isLoadingTrailers = false;
      }
    });
  }

  loadVideos(movieId: number): void {
    this.movieService.getMovieVideos(movieId).subscribe({
      next: (response: any) => {
        this.videos = response.results || [];
      },
      error: (err) => console.error('Error loading videos:', err)
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



----services

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from './../../environment/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  // ===== Movie Details API =====

  getMovieById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}&append_to_response=credits,similar`)
      .pipe(catchError(this.handleError));
  }

  // ===== Video API Endpoints =====

  getMovieTrailer(movieId: number): Observable<any[]> {
    return this.http.get(`${this.apiUrl}/movie/${movieId}/videos?api_key=${this.apiKey}`)
      .pipe(
        map((res: any) => res.results.filter((video: any) => video.type === 'Trailer' && video.site === 'YouTube')),
        catchError(this.handleError)
      );
  }
  
  getMovieVideos(movieId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${movieId}/videos?api_key=${this.apiKey}`)
      .pipe(catchError(this.handleError));
  }

  // ===== Collection API Endpoints =====

  getTrendingMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/trending/all/week?api_key=${this.apiKey}`)
      .pipe(catchError(this.handleError));
  }

  getDisneyMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/discover/movie?api_key=${this.apiKey}&with_companies=2`)
      .pipe(catchError(this.handleError));
  }

  getTopRatedMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/discover/movie?api_key=${this.apiKey}&with_companies=4`)
      .pipe(catchError(this.handleError));
  }

  getPixar(): Observable<any> {
    return this.http.get(`${this.apiUrl}/discover/movie?api_key=${this.apiKey}&with_companies=3`)
      .pipe(catchError(this.handleError));
  }

  getPsy(): Observable<any> {
    return this.http.get(`${this.apiUrl}/discover/movie?api_key=${this.apiKey}&with_companies=5`)
      .pipe(catchError(this.handleError));
  }

  getPicks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/discover/movie?api_key=${this.apiKey}&with_keywords=180547&sort_by=release_date`)
      .pipe(catchError(this.handleError));
  }

  getOrignals(): Observable<any> {
    return this.http.get(`${this.apiUrl}/discover/tv?api_key=${this.apiKey}&with_watch_providers=337&watch_region=US`)
      .pipe(catchError(this.handleError));
  }

  // ===== Search API =====

  searchMovies(query: string): Observable<any> {
    const url = `${this.apiUrl}/search/movie?query=${encodeURIComponent(query)}&api_key=${this.apiKey}`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  // ===== Image API =====

  getImageUrl(path: string | null, size: string = 'w500'): string {
    if (!path) return 'assets/image-placeholder.jpg';
    return `https://image.tmdb.org/t/p/${size}${path}`;
  }

  getHighQualityImageUrl(path: string | null): string {
    return this.getImageUrl(path, 'original');
  }

  // ===== Cast & Crew API =====

  getMovieCast(movieId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${movieId}/credits?api_key=${this.apiKey}`)

    
      .pipe(catchError(this.handleError));
  }

  // ===== Similar Movies API =====
  
  getSimilarMovies(movieId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${movieId}/similar?api_key=${this.apiKey}`)
      .pipe(catchError(this.handleError));
  }

  // ===== Error Handling =====

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}