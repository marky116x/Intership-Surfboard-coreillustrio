import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  searchMovies() {
    throw new Error('Method not implemented.');
  }
  searchControl = new FormControl('');
  searchResults1: any[] = [];
  searchResults2: any[] = [];
  searchResults: any[] = [];
  showDropdown= false;

  constructor(private movieService: MovieService, private router: Router) {
    this.searchControl.valueChanges.subscribe((query) => {
      if (query && query.trim().length > 1) {
        this.movieService.searchMovie(query.trim()).subscribe((res: any) => {
          this.searchResults1 = res.results;
          console.log(this.searchResults1)
          this.showDropdown = true;
        });

        this.movieService.searchTv(query.trim()).subscribe((res: any) => {
          this.searchResults2 = res.results;
          console.log(this.searchResults2)
          this.showDropdown = true;
        });
        this.searchResults = this.searchResults1.concat(this.searchResults2); //this.searchResults 
        console.log(this.searchResults);

      } else {
        this.searchResults1 = [];
        this.searchResults2 = [];
        this.showDropdown = false;
      }
    });
  }

  //  movie + tv concattinate
  // get  searchResults(): any[] {
  //   return [...this.searchResults1, ...this.searchResults2];
  // }



  
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






