import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "./app.routes"
import { FlashMessagesModule } from "angular2-flash-messages"
import { UsersApiService } from "./services/users-api.service"

import { AppComponent } from './app.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeDisplayComponent } from './components/home-display/home-display.component';
import { NotificationBarComponent } from './components/notification-bar/notification-bar.component';
import { UsersCountWidgetComponent } from './widgets/users-count-widget/users-count-widget.component';
import { UsersManageComponent } from './pages/users/users-manage.component';
import { UsersManagementWidgetComponent } from './widgets/users-management-widget/users-management-widget.component';
import { UserIndividualWidgetComponent } from './widgets/user-individual-widget/user-individual-widget.component';
import { UserComponent } from './pages/user/user.component';
import { UserAddComponent } from './pages/user/user-add.component';
import { UserAddWidgetComponent } from './widgets/user-add-widget/user-add-widget.component';
import { UsersDeleteComponent } from './pages/users/users-delete.component';
import { UsersDeleteWidgetComponent } from './widgets/users-delete-widget/users-delete-widget.component';
import { UserEditWidgetComponent } from './widgets/user-edit-widget/user-edit-widget.component';
import { UserEditComponent } from './pages/user/user-edit.component';
import { UserPasswordEditWidgetComponent } from './widgets/user-password-edit-widget/user-password-edit-widget.component';
import { UserUpdatePasswordComponent } from './pages/user/user-update-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    HomeDisplayComponent,
    NotificationBarComponent,
    UsersCountWidgetComponent,
    UsersManageComponent,
    UsersManagementWidgetComponent,
    UserIndividualWidgetComponent,
    UserComponent,
    UserAddComponent,
    UserAddWidgetComponent,
    UsersDeleteComponent,
    UsersDeleteWidgetComponent,
    UserEditWidgetComponent,
    UserEditComponent,
    UserPasswordEditWidgetComponent,
    UserUpdatePasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router,
    FlashMessagesModule
  ],
  providers: [UsersApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
