import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-individual-widget',
  templateUrl: './user-individual-widget.component.html',
  styleUrls: ['./user-individual-widget.component.css']
})
export class UserIndividualWidgetComponent implements OnInit {

  editMode: boolean = false
  editPasswordMode: boolean = false

  constructor() { }

  ngOnInit() {
  }

  toggleEdit() {
    this.editMode = !this.editMode
  }

  togglePasswordEdit() {
    this.editPasswordMode = !this.editPasswordMode
  }

}
