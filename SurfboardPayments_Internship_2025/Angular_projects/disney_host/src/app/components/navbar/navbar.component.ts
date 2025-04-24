import {Component, HostListener,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [CommonModule, ReactiveFormsModule , RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
searchMovies() {
throw new Error('Method not implemented.');
}
  searchControl = new FormControl();
  searchResults: any[] = [];
  showDropdown = false;

  constructor(private movieService: MovieService, private router: Router) {
    // Subscribe to input changes for live search
    this.searchControl.valueChanges.subscribe((query) => {
      if (query && query.trim().length > 1) {
        this.movieService.searchMovies(query.trim()).subscribe((res: any) => {
          this.searchResults = res.results.slice(0, 10); // show top 10 results
          this.showDropdown = true;
        });
      } else {
        this.searchResults = [];
        this.showDropdown = false;
      }
    });
  }

  // Navigate to movie detail page
  goToMovie(movieId: number) {
    this.router.navigate(['/movie', movieId]);
    this.searchControl.setValue('');
    this.showDropdown = false;
  }

  // Close dropdown if clicked outside
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.search-wrapper')) {
      this.showDropdown = false;
    }
  }
}
