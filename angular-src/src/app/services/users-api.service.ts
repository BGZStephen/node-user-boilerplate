import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http"
import { tokenNotExpired } from "angular2-jwt"
import "rxjs/Rx"

@Injectable()
export class UsersApiService {

  constructor(
    private http: Http,
  ) {}

  port: number = 3002
  user: any;
  authToken: any;

  adminUpdatePassword(userObject) {
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    return this.http.post("/users/adminupdatepassword", userObject, {headers: headers})
    .map(res => res.json())
  }

  authenticate(userObject) {
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    return this.http.post("/users/authenticate", userObject, {headers: headers})
    .map(res => res.json())
  }

  deleteUser(userObject) {
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    return this.http.post("/users/deleteOne", userObject, {headers: headers})
    .map(res => res.json())
  }

  getAll() {
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    return this.http.post("/users/getAll", {}, {headers: headers})
    .map(res => res.json())
  }

  getById(userObject) {
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    return this.http.post("/users/getById", userObject, {headers: headers})
    .map(res => res.json())
  }

  getCurrentUser() {
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    let userObject = JSON.parse(localStorage.getItem('user'))
    return this.http.post("/users/getById", userObject, {headers: headers})
    .map(res => res.json())
  }

  loggedIn() {
    return tokenNotExpired();
  }

  logout() {
    localStorage.clear()
    this.user = "";
    this.authToken = "";
  }

  register(userObject) {
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    return this.http.post("/users/register", userObject, {headers: headers})
    .map(res => res.json())
  }

  storeToken(userObject) {
    localStorage.setItem('token', userObject.token)
    localStorage.setItem('user', JSON.stringify(userObject.user))
    this.authToken = userObject.token;
    this.user = userObject.user;
  }

  updateProfile(userObject) {
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    return this.http.post("/users/update", userObject, {headers: headers})
    .map(res => res.json())
  }

}
