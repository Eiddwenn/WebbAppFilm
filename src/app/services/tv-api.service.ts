import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Shows } from '../models/shows';
import { searchShow } from '../models/search-show';
import { ShowDetails } from '../models/show-details';

@Injectable({
  providedIn: 'root'
})
export class TvApiService {

  private baseUrl: string = 'https://api.tvmaze.com/';

  constructor( private http: HttpClient ) { }

  public getAllShows(): Observable<Array<Shows>> {
    return this.http.get<Array<Shows>>(`${this.baseUrl}shows`);
  }

  public searchShow(query?: string | any): Observable<Array<searchShow>> {
    return this.http.get<Array<searchShow>>(`${this.baseUrl}search/shows?q=${query}`)
  }

  public getDetailShow(id: number): Observable<ShowDetails>{
    return this.http.get<ShowDetails>(`${this.baseUrl}shows/${id}`)
  }

}
