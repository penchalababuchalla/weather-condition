import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class OpenWeatherService {

  private apiUrl = 'https://api.openweathermap.org/data/2.5/onecall'; 

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  /** GET heroes from the server */
  getWeather(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
      .pipe(
        tap(_ => this.log('fetched heroes'))
      );
  }
}