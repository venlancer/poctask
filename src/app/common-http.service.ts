import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonHttpService {

  constructor(public http: HttpClient) { }

  getUSers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
