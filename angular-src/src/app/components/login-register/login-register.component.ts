import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  constructor() {}

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

}
