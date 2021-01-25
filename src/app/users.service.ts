import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
  getData() {
    return {
      name: 'Kriyan Finbor',
      age: 35,
      id: 123,
    };
  }
}
