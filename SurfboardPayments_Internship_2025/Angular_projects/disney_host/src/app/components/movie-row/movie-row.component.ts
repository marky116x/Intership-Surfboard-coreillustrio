import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-movie-row',
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.css'],
})
export class MovieRowComponent {
getHighQualityImage(arg0: any) {
throw new Error('Method not implemented.');
}
  @Input() title: string = '';
  @Input() fetch!: () => any;

  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.fetch().subscribe((res: any) => { this.movies = res.results; });
  }

  getImageUrl(path: string) {
    return this.movieService.getImageUrl(path);
  }
}
