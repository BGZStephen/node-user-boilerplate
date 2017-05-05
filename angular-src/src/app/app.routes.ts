import { Routes, RouterModule } from "@angular/router"
import { HomeComponent } from './pages/home/home.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { UsersManageComponent } from "./pages/users/users-manage.component"
import { UserComponent } from "./pages/user/user.component"

const APP_ROUTES: Routes = [
  {path: "", component: LoginRegisterComponent},
  {path: "home", component: HomeComponent},
  {path: "user", component: UserComponent},
  {path: "users/manage", component: UsersManageComponent},
]

export const router = RouterModule.forRoot(APP_ROUTES)
