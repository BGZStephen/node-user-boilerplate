import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.css']
})
export class AppNavigationComponent implements OnInit {

  constructor() { }

  // set active submenu used in conjunction with ngstyle to toggle visible menu
  activeSubMenu: number = -1;

  ngOnInit() {
  }

  setActiveSubMenu(menuIndex) {
    if(this.activeSubMenu == menuIndex) {
      this.activeSubMenu = -1
    } else {
      this.activeSubMenu = menuIndex
    }
  }

  subMenuStyle(menuIndex) {
    let menus = document.getElementsByClassName("second-level-menu")
    if(menuIndex == this.activeSubMenu) {
      let menuHeight = (37 * menus[menuIndex].children.length) + "px"
      return {"max-height": menuHeight}
    } else {
      return {"max-height": "0px"}
    }
  }

}

// set active list which is monitored by angular
// set style for list
