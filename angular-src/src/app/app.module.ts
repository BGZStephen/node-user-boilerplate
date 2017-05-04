import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "./app.routes"

import { AppComponent } from './app.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeDisplayComponent } from './components/home-display/home-display.component';
import { NotificationBarComponent } from './components/notification-bar/notification-bar.component';
import { UsersWidgetComponent } from './widgets/users-widget/users-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    HomeDisplayComponent,
    NotificationBarComponent,
    UsersWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
