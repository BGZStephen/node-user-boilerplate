import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import "rxjs/Rx"

@Injectable()
export class UsersApiService {

  constructor(private http: Http) {}

  port: number = 3002

  getAll() {
    return this.http.post("http://localhost:" + this.port + "/users/getAll", {})
    .map(res => res.json())
  }

  getById(userObject) {
    return this.http.post("http://localhost:" + this.port + "/users/getById", userObject)
    .map(res => res.json())
  }

  registerUser(userObject) {
    return this.http.post("http://localhost:" + this.port + "/users/register", userObject)
    .map(res => res.json())
  }

}
