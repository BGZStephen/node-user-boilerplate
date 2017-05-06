import { Routes, RouterModule } from "@angular/router"
import { HomeComponent } from './pages/home/home.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { UsersManageComponent } from "./pages/users/users-manage.component"
import { UsersDeleteComponent } from "./pages/users/users-delete.component"
import { UserComponent } from "./pages/user/user.component"
import { UserAddComponent } from './pages/user/user-add.component';
import { UserEditComponent } from './pages/user/user-edit.component';

const APP_ROUTES: Routes = [
  {path: "", component: LoginRegisterComponent},
  {path: "home", component: HomeComponent},
  {path: "user/:userId", component: UserComponent},
  {path: "user/edit/:userId", component: UserEditComponent},
  {path: "user/add", component: UserAddComponent},
  {path: "users/manage", component: UsersManageComponent},
  {path: "users/delete", component: UsersDeleteComponent},
]

export const router = RouterModule.forRoot(APP_ROUTES)
