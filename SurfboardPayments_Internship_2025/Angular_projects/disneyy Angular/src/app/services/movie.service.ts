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

  // movies && series pages

  getAllMovies() {
    const url = `${this.apiUrl}/discover/movie?api_key=${this.apiKey}&sort_by=revenue.desc`;
    return this.http.get(url);
  }
  getAllSeries() {
    return this.http.get(
      `${this.apiUrl}/discover/tv?api_key=${this.apiKey}&with_companies=420&sort_by=vote_average.desc`
    );
  }

  // ===== Movie Details API =====

  getMovieById(id: number): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}&append_to_response=credits,similar`  // for tv change to tv
    );
  }

  getTvById(id: number): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/tv/${id}?api_key=${this.apiKey}&append_to_response=credits,similar`  // for tv  
    );
  }

  // ===== Video API Endpoints =====

  // getPsy(){
  //   return this.http.get(`${this.apiUrl}/discover/movie?api_key=${this.apiKey}&with_companies=5`);
  // }
  getPsy() {
    return this.http.get(
      `${this.apiUrl}/discover/movie?api_key=${this.apiKey}&with_companies=420`
    );
  }

  getMovieTrailer(movieId: number) {
    return this.http
      .get(`${this.apiUrl}/movie/${movieId}/videos?api_key=${this.apiKey}`)
      .pipe(
        map((res: any) =>
          res.results.filter(
            (video: any) => video.type === 'Trailer' && video.site === 'YouTube'
          )
        )
      );
  }

  getMovieVideos(movieId: number) {
    return this.http.get(
      `${this.apiUrl}/movie/${movieId}/videos?api_key=${this.apiKey}`
    );
  }

  // ===== Collection API Endpoints =====

  getTrendingMovies() {
    return this.http.get(
      `${this.apiUrl}/trending/movie/week?api_key=${this.apiKey}`
    );
  }

  getDisneyMovies(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/discover/movie?api_key=${this.apiKey}&with_companies=2`
    );
  }

  getTopRatedMovies() {
    return this.http.get(
      `${this.apiUrl}/discover/movie?api_key=${this.apiKey}&with_companies=4`
    );
  }

  getPixar(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/discover/movie?api_key=${this.apiKey}&with_companies=3`
    );
  }

  getPicks(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/discover/movie?api_key=${this.apiKey}&with_keywords=180547&sort_by=release_date`
    );
  }

  getOrignals(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/discover/movie?api_key=${this.apiKey}&with_watch_providers=337&watch_region=US`
    );
  }

  // ===== Search API =====

  searchMovie(query: string) {
    const url1 = `${this.apiUrl}/search/movie?query=${encodeURIComponent(query)}&api_key=${this.apiKey}`;
    return this.http.get(url1);
  }

  searchTv(query: string) {
    const url2 = `${this.apiUrl}/search/tv?query=${encodeURIComponent(
      query
    )}&api_key=${this.apiKey}`;

    return this.http.get(url2);
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
    return this.http.get(
      `${this.apiUrl}/movie/${movieId}/credits?api_key=${this.apiKey}`
    );
  }

  // ===== Similar Movies API =====

  getSimilarMovies(movieId: number): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/movie/${movieId}/similar?api_key=${this.apiKey}`
    );
  }
}
