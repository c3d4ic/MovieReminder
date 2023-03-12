import { Component } from '@angular/core';
import { ApiService } from '../commons/services/api/api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {

  
  searchValue: String = "";
  constructor(
    private apiService: ApiService
  ) {}

  ionViewWillEnter() {
    console.log("View did enter")
    // this.apiService.getMovie().then(result => {
    //   console.log("Result:  ", result)
    // })
    
  }

  search() {
    this.apiService.searchMovie(this.searchValue).subscribe((result) => {
      
      console.log("Result : ", result)
    })
  }

  displayLoader() {

  }
}
