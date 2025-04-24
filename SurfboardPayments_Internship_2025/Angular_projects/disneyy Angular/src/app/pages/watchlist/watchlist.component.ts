// watchlist.component.ts
import { Component, Input, input } from '@angular/core';
import { WatchlistService } from '../../services/watchlist.service';
import { MovieDetailComponent } from "../movie-detail/movie-detail.component";
import { MovieRowComponent } from "../../components/movie-row/movie-row.component";
import { RouterModule } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  imports: [ RouterModule],
})
export class WatchlistComponent {
  // movieService: any;
  
  constructor(public watchlistService: WatchlistService, 
    private movieService : MovieService
  ) {}

  getImageUrl(path: string) {
    return this.movieService.getImageUrl(path);
  }

  getHighQualityImageUrl(path: string | null): string {
    return this.movieService.getImageUrl(path);
  }
}


