// watchlist.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  private watchlist: any[] = [];

  getWatchlist(): any[] {
    return this.watchlist;
  }

  addToWatchlist(movie: any) {
    if (!this.isInWatchlist(movie.id)) {
      this.watchlist.push(movie);
    }
  }

  removeFromWatchlist(movieId: number) {
    this.watchlist = this.watchlist.filter(m => m.id !== movieId);
  }

  isInWatchlist(movieId: number): boolean {
    return this.watchlist.some(m => m.id === movieId);
  }
}
