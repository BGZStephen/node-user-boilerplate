import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() {
    // on page load set menu visibility
    this.setMenuStyle()
  }

  // main visibility setting for menu
  activeMenu: boolean = false;

  // set active submenu used in conjunction with ngstyle to toggle visible menu
  activeSubMenu: number = -1;

  ngOnInit() {
  }

  menuStyle() {
    if(this.activeMenu == true) {
      return {"display": "block"}
    } else {
      return {"display": "none"}
    }
  }

  setMenuStyle(resize?) {
    if(resize && screen.width > 1024) {
      this.activeMenu = true;
    } else if (resize && screen.width < 1024) {
      this.activeMenu = false;
    } else {
      this.activeMenu = false;
    }
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
