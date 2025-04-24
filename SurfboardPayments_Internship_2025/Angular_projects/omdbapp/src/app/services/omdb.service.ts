import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class OmdbService {
  key:string = enviroment.apiKey;
  
 
  // private apKey = 'bc6dddd9';
  private apiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=${this.key}`;

  constructor(private http: HttpClient) {}
  // searchMovie(movieTitle: string): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}&t=${movieTitle}`);
  // }

  movie(){
    const url=`http://www.omdbapi.com/?i=tt3896198&apikey=bc6dddd9`;
   return this.http.get(url)
  }
  
}
