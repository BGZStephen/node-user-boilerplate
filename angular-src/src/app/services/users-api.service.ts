import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import "rxjs/Rx"

@Injectable()
export class UsersApiService {

  constructor(private http: Http) {}

  port: number = 3002

  addUser(userObject) {
    return this.http.post("http://localhost:" + this.port + "/users/create", userObject)
    .map(res => res.json())
  }

}
