import { Component, OnInit } from '@angular/core';
import { UsersApiService } from "../../services/users-api.service"

@Component({
  selector: 'app-users-management-widget',
  templateUrl: './users-management-widget.component.html',
  styleUrls: ['./users-management-widget.component.css']
})
export class UsersManagementWidgetComponent implements OnInit {

  users: Array<object>

  constructor(private usersApiService: UsersApiService) { }

  ngOnInit() {
    this.usersApiService.getAll()
    .subscribe(res => {
      this.users = res
      console.log(this.users)
    })
  }

}
