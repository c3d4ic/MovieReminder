import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CONFIG } from 'src/environments/environment';
import { HeaderService } from '../header/header.service';
import { Observable } from 'rxjs';


export interface MovieResult {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export interface Movie {
  adult: boolean
  backdrop_path?: String
  genre_ids: number[]
  id: number
  original_language: String
  original_title: String
  overview: String
  popularity: number
  poster_path?: String
  release_date: String
  title: String
  video: boolean
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


  searchMovie(query: String): Observable<MovieResult> {
    let data : any = CONFIG.api_url + '/search/movie' + '?language=fr' + '&query=' + query
    console.log("DATa : ", data);
    return this.http
      .get<MovieResult>(
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
