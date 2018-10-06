import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://localhost:3000/api/users')
    .map(res => {
      return res;
    })
  }

  getUserById(id) {
    return this.http.get('http://localhost:3000/api/details/'+id)
    .map(res => {
      return res;
    });
  }

  getTodosByUserId(id) {
    return this.http.get('http://localhost:3000/api/details/'+id+'/todos')
    .map(res => {
      return res;
    });
  }
}