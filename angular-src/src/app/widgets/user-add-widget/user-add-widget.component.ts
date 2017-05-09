import { Component, OnInit } from '@angular/core';
import { UsersApiService } from "../../services/users-api.service"
import { Router } from "@angular/router"
import "rxjs/Rx"
import { FlashMessagesService } from "angular2-flash-messages"

@Component({
  selector: 'app-user-add-widget',
  templateUrl: './user-add-widget.component.html',
  styleUrls: ['./user-add-widget.component.css']
})
export class UserAddWidgetComponent implements OnInit {

  constructor(
    private usersApiService: UsersApiService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

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
    this.usersApiService.register(userObject)
    .subscribe(res => {
      if(res.success) {
        this.flashMessage.show(res.message, {cssClass: "alert-success", timeout: 3000})
      } else {
        this.flashMessage.show(res.message, {cssClass: "alert-failure", timeout: 3000})
      }
      this.router.navigate(['/users/manage'])
    })
  }
}
