import { Component, OnInit } from '@angular/core';
import { UsersApiService } from "../../services/users-api.service"
import "rxjs/Rx"

@Component({
  selector: 'app-user-add-widget',
  templateUrl: './user-add-widget.component.html',
  styleUrls: ['./user-add-widget.component.css']
})
export class UserAddWidgetComponent implements OnInit {

  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;

  constructor(private usersApiService: UsersApiService) { }

  ngOnInit() {
  }

  addUser(firstName, lastName, username, email, password) {
    let userObject = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password
    }
    this.usersApiService.addUser(userObject)
    .subscribe(res => {
      console.log(res)
    })
  }
}
