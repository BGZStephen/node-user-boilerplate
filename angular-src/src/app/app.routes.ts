import { Routes, RouterModule } from "@angular/router"
import { AuthGuard } from './guards/auth.guard'

import { HomeComponent } from './pages/home/home.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { UsersManageComponent } from "./pages/users/users-manage.component"
import { UsersDeleteComponent } from "./pages/users/users-delete.component"
import { UserComponent } from "./pages/user/user.component"
import { UserAddComponent } from './pages/user/user-add.component';
import { UserEditComponent } from './pages/user/user-edit.component';
import { UserUpdatePasswordComponent } from './pages/user/user-update-password.component';

const APP_ROUTES: Routes = [
  {path: "", component: LoginRegisterComponent},
  {path: "home", component: HomeComponent, canActivate:[AuthGuard]},
  {path: "user/:userId", component: UserComponent, canActivate:[AuthGuard]},
  {path: "user/edit/:userId", component: UserEditComponent, canActivate:[AuthGuard]},
  {path: "user/editpassword/:userId", component: UserUpdatePasswordComponent, canActivate:[AuthGuard]},
  {path: "users/add", component: UserAddComponent, canActivate:[AuthGuard]},
  {path: "users/manage", component: UsersManageComponent, canActivate:[AuthGuard]},
  {path: "users/delete", component: UsersDeleteComponent, canActivate:[AuthGuard]},
]

export const router = RouterModule.forRoot(APP_ROUTES)
