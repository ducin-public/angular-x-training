import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { API_URL } from '../config';
import { User } from './users';

@Injectable()
export class UsersModel {
  constructor(private http: Http) {}

  getCollection(size: number): Observable<User[]> {
    let params = new URLSearchParams();
    params.set('_limit', `${size}`);

    return this.http.get(`${API_URL}/users/`, {
      search: params
    })
    .map((res) => res.json());
  }

  get(id: number): Observable<User> {
    return this.http.get(`${API_URL}/users/${id}`)
      .map((res) => res.json());
  }

  create(data: User): Observable<User> {
    return this.http.post(`${API_URL}/users`, data)
      .map((res) => res.json());
  }

  update(data: User): Observable<User> {
    return this.http.put(`${API_URL}/users/${data.id}`, data)
      .map((res) => res.json());
  }

  delete(id: number): Observable<void> {
    return this.http.delete(`${API_URL}/users/${id}`)
      .map((res) => res.json());
  }

}
