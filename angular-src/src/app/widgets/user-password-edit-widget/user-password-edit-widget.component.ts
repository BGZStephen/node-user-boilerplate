import { Component, OnInit } from '@angular/core';
import { UsersApiService} from "../../services/users-api.service"
import { ActivatedRoute } from "@angular/router"
import { Router } from "@angular/router"
import { FlashMessagesService } from "angular2-flash-messages"

@Component({
  selector: 'app-user-password-edit-widget',
  templateUrl: './user-password-edit-widget.component.html',
  styleUrls: ['./user-password-edit-widget.component.css']
})
export class UserPasswordEditWidgetComponent implements OnInit {
  user: object;

  constructor(
    private usersApiService: UsersApiService,
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) {
    this.activatedRoute.params
    .map(params => params['userId'])
    .subscribe((userId) => {
      let userObject = {userId: userId}
      this.usersApiService.getById(userObject)
      .subscribe(res => {
        this.user = res
        console.log(this.user)
      })
    })
  }

  ngOnInit() {
  }

  updatePassword(userObject) {
    this.usersApiService.adminUpdatePassword(userObject)
    .subscribe(res => {
      if(res.success) {
        this.flashMessage.show("Password updated successfully", {cssClass: "alert-success", timeout: 3000})
      } else {
        this.flashMessage.show(res.message, {cssClass: "alert-failure", timeout: 3000})
      }
    })
    this.router.navigate(['/user', userObject.userId])
  }
}
