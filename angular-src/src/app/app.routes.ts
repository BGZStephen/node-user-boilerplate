import { Routes, RouterModule } from "@angular/router"
import { HomeComponent } from './pages/home/home.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';

const APP_ROUTES: Routes = [
  {path: "", component: LoginRegisterComponent},
  {path: "home", component: HomeComponent},
]

export const router = RouterModule.forRoot(APP_ROUTES)
