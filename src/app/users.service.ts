import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //here we import the client

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  getData() {
    return {
      name: 'Kriyan Finbor',
      age: 35,
      id: 123,
    };
  }
  getApiData() {
    let url = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get(url);
  }
}
