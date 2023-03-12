import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { CONFIG } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private headers: HttpHeaders = new HttpHeaders()
 
  constructor() { 
    this.initHeaders()
  }

  initHeaders() {
    this.headers = new HttpHeaders({
      'Authorization': "Bearer " + CONFIG.api_token,
      'Content-Type': 'application/json',
    })
  }

  getHeaders() {
    return {headers : this.headers}
  }
}
