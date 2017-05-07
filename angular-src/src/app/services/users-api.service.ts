import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import "rxjs/Rx"

@Injectable()
export class UsersApiService {

  constructor(private http: Http) {}

  port: number = 3002
  user: any;
  authToken: any;

  adminUpdatePassword(userObject) {
    return this.http.post("http://localhost:" + this.port + "/users/adminupdatepassword", userObject)
    .map(res => res.json())
  }

  authenticate(userObject) {
    return this.http.post("http://localhost:" + this.port + "/users/authenticate", userObject)
    .map(res => res.json())
  }

  getAll() {
    return this.http.post("http://localhost:" + this.port + "/users/getAll", {})
    .map(res => res.json())
  }

  getById(userObject) {
    return this.http.post("http://localhost:" + this.port + "/users/getById", userObject)
    .map(res => res.json())
  }

  logout() {
    localStorage.clear()
    this.user = "";
    this.authToken = "";
  }

  registerUser(userObject) {
    return this.http.post("http://localhost:" + this.port + "/users/register", userObject)
    .map(res => res.json())
  }

  storeToken(userObject) {
    localStorage.setItem('token', userObject.token)
    localStorage.setItem('user', JSON.stringify(userObject.user))
    this.authToken = userObject.token;
    this.user = userObject.user;
  }

  updateProfile(userObject) {
    return this.http.post("http://localhost:" + this.port + "/users/update", userObject)
    .map(res => res.json())
  }

}
