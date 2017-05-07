import { Component, OnInit } from '@angular/core';
import { UsersApiService } from "../../services/users-api.service"
import { Router } from "@angular/router"
import { FlashMessagesService } from "angular2-flash-messages"

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  constructor(
    private usersApiService: UsersApiService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit() {
  }

  toggleForm(formIndex) {
    let forms = document.getElementsByClassName("form-container")
    let options = document.getElementsByClassName("forms-selector-option")
    for(let i = 0; i < forms.length; i++) {
      forms[i].classList.remove("form-container-visible")
      options[i].classList.remove("forms-selector-option-active")
    }
    forms[formIndex].classList.add("form-container-visible")
    options[formIndex].classList.add("forms-selector-option-active")
  }

  login(userObject) {
    this.usersApiService.authenticate(userObject)
    .subscribe(res => {
      if(res.success) {
        this.usersApiService.storeToken(res)
        this.router.navigate(['/home'])
      } else {
        this.flashMessage.show(res.message, {cssClass: "alert-failure", timeout: 3000})
      }
    })
  }

}
