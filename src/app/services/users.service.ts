import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from '../models/User';

const apiURL = 'https://api-cattle-control.herokuapp.com/user';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  addUser(newUser: Object): Observable<any> {
    return this.http.post(apiURL, newUser);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(apiURL);
  }

  checkEmailAndPassword(email: String, password: String): Observable<any> {
    return this.http.get(`${apiURL}/${email}/${password}`);
  }
}
