import { Component, OnInit } from '@angular/core';
import { UsersApiService } from "../../services/users-api.service"
import { Router } from "@angular/router"
import { FlashMessagesService } from "angular2-flash-messages"

@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.css']
})
export class NotificationBarComponent implements OnInit {

  constructor(
    private usersApiService: UsersApiService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.usersApiService.logout()
    this.router.navigate(['/'])
  }

}
