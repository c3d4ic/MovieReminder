import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CONFIG } from 'src/environments/environment';
import { HeaderService } from '../header/header.service';
import { Observable } from 'rxjs';

export interface Movie {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

export interface Result {
  adult: boolean
  backdrop_path?: string
  genre_ids: number[]
  id: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path?: string
  first_air_date: string
  name: string
  vote_average: number
  vote_count: number
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  paramOptions: String = "?language=fr"


  constructor(
    private http: HttpClient,
    private headerService: HeaderService,

  ) { }


  searchMovie(query: String): Observable<Movie> {
    let data : any = CONFIG.api_url + '/search/movie' + '?language=fr' + '&query=' + query
    console.log("DATa : ", data);
    return this.http
      .get<Movie>(
        data,
        this.headerService.getHeaders()
      )
  }


  searchTV(query: String): Observable<any> {
    return this.http
      .get(
        CONFIG.api_url + '/search/tv' + '?language=fr' + '&query=' + query,
        this.headerService.getHeaders()
      )
  }





}
