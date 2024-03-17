import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Country from './country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  getCountryByName(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(
      `https://restcountries.com/v3.1/name/${name}`
    );
  }
}
