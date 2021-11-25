import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap } from 'rxjs';
import { Beer } from './beer.model';

@Injectable({ providedIn: 'root' })
export class AppService {
  private beersUrl = 'https://api.punkapi.com/v2/beers';
  private randomBeerUrl = `${this.beersUrl}/random`;

  constructor(private http: HttpClient) { }

  getRandomBeer(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.randomBeerUrl)
      .pipe(
        map(beer => {
          return beer ? Object.assign([], beer) : null;
        }),
        tap(beer => this.log(`fetched random beer`)),
        catchError(this.handleError('getRandomBeer'))
      ) as Observable<Beer[]>;
  }

  getNonAlcoholicBeer(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.beersUrl + '?abv_lt<=0.05')
      .pipe(
        map(beers => {
          return beers ? Object.assign([], beers) : null;
        }),
        tap(beer => this.log(`fetched NonAlcoholic random beer`)),
        catchError(this.handleError('getNonAlcoholicBeer'))
      ) as Observable<Beer[]>;
  }

  getBeerByName(name: string): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.beersUrl + '?beer_name=' + name)
      .pipe(
        map(beers => {
          return beers ? Object.assign([], beers) : null;
        }),
        tap(beer => this.log(`fetched beer by Name`)),
        catchError(this.handleError('getBeerByName'))
      ) as Observable<Beer[]>;
  }

  getBeerBydescription(data: string): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.beersUrl + '?description=' + data)
      .pipe(
        map(beers => {
          return beers ? Object.assign([], beers) : null;
        }),
        tap(beer => this.log(`fetched beer by description`)),
        catchError(this.handleError('getBeerBydescription'))
      ) as Observable<Beer[]>;
  }

  private handleError<T>(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);
      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
        `server returned code ${error.status} with body "${error.error}"`;
      throw new Error(`${operation} failed: ${message}`);
    };

  }

  private log(message: string) {
    console.log('BeersService: ' + message);
  }
}