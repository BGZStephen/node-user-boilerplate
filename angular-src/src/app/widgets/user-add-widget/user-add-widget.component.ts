import { Component, OnInit } from '@angular/core';
import { UsersApiService } from "../../services/users-api.service"
import "rxjs/Rx"
import { FlashMessagesService } from "angular2-flash-messages"

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

  constructor(private usersApiService: UsersApiService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  registerUser(firstName, lastName, username, email, password) {
    let userObject = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password
    }
    this.usersApiService.registerUser(userObject)
    .subscribe(res => {
      if(res.success) {
        this.flashMessage.show(res.message, {cssClass: "alert-success", timeout: 3000})
      } else {
        this.flashMessage.show(res.message, {cssClass: "alert-failure", timeout: 3000})
      }
    })
  }
}
