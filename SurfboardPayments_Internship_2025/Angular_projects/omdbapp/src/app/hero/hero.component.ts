// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-hero',
//   imports: [],
//   template: '',
//   styles: ''
// })
// export class HeroComponent {

// }


import { Component, OnInit } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  template: `
   <div class="p-4 min-h-screen bg-gray-100">
  <h1 class="text-3xl font-bold text-center mb-6 text-blue-700">Disney Characters</h1>
  
  <div class="grid grid-rows-1 sm:grid-rows-2 md:rows-3 lg:rows-4  lg:rows-cols-4 gap-6">
    @for (character of characters; track character.id) {
      <div class="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
        <h3 class="font-semibold text-lg mb-2 text-blue-600">{{ character.name }}</h3>
        <img 
          class="w-full h-48 object-cover rounded-lg mb-2"
          [src]="character.imageUrl || 'https://via.placeholder.com/150'" 
          [alt]="character.name">
        <p class="text-gray-600 text-sm mt-2">{{ character.description }}</p>
      </div>
    }
  </div>
</div>
  `
})
export class DisneyCharactersComponent implements OnInit {
  characters: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('https://api.disneyapi.dev/character')
      .subscribe(response => {
        this.characters = response.data.slice(0, 12); // Display top 12
      });
  }
}
