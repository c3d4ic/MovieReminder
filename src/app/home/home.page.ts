import { Component } from '@angular/core';
import { ApiService, Movie, MovieResult } from '../commons/services/api/api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {

  
  searchValue: String = "";
  movie: Array<Movie> = [];


  constructor(
    private apiService: ApiService
  ) {}

  ionViewWillEnter() {  
  }

  search() {
    this.apiService.searchTV(this.searchValue).subscribe((result: MovieResult) => {
      this.movie = result.results;
      console.log("Result : ", result)
    })
  }

  displayLoader() {

  }
}
