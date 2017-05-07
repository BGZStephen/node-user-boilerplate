import { Component, OnInit } from '@angular/core';
import { UsersApiService } from "../../services/users-api.service"
import { FlashMessagesService } from "angular2-flash-messages"
import { Router } from "@angular/router"

@Component({
  selector: 'app-users-delete-widget',
  templateUrl: './users-delete-widget.component.html',
  styleUrls: ['./users-delete-widget.component.css']
})
export class UsersDeleteWidgetComponent implements OnInit {

  users: Array<object>

  constructor(
    private usersApiService: UsersApiService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.usersApiService.getAll()
    .subscribe(res => {
      this.users = res
    })
  }

  deleteUser(userObject) {
    this.usersApiService.deleteUser(userObject)
    .subscribe(res => {
      this.flashMessage.show("User deleted successfully", {cssClass: "alert-success", timeout: 3000})
      this.getUsers()
    })
  }
}
