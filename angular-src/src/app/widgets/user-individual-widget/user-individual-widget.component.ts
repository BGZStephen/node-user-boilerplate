import { Component, OnInit } from '@angular/core';
import { UsersApiService} from "../../services/users-api.service"
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-user-individual-widget',
  templateUrl: './user-individual-widget.component.html',
  styleUrls: ['./user-individual-widget.component.css']
})
export class UserIndividualWidgetComponent implements OnInit {

  editMode: boolean = false
  editPasswordMode: boolean = false
  user: object;

  constructor(private usersApiService: UsersApiService, private activatedRoute: ActivatedRoute) {
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

  toggleEdit() {
    this.editMode = !this.editMode
  }

  togglePasswordEdit() {
    this.editPasswordMode = !this.editPasswordMode
  }

}
