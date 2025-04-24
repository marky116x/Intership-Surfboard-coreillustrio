import { Component, NgModule, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OmdbService } from './services/omdb.service';
import { get } from 'http';
import { NgModel } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { DisneyCharactersComponent } from "./hero/hero.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DisneyCharactersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'omdbapp';
  posts: any[] = [];
  movies?: any;

  constructor( private omdb: OmdbService) {}
  ngOnInit(): void {
    this.omdb.movie().subscribe((data: any) =>{
      this.movies = data;
      console.log(this.movies);
    });
  }

  // ngOnInit() {
  //   // this.omdb.movies().subscribe({
  //   //   next: (data)=>this.posts=data

  //   // });

  //   this.omdb.searchMovie('batman').subscribe({
  //     next: (data) => this.posts = data 
  //   });
    
  }

  




